// Konihaus — schedule the generated blog newsletters in Brevo, one campaign per language.
// Reads ../campaign/newsletter_email/<slug>/campaign.json (written by newsletter-email.cjs on every build) and,
// for every post whose publish time is still in the future, creates or updates two scheduled campaigns:
//   "Blog · <slug> · EN" -> list "Blog-nl EN", sender hello@konihaus.ch
//   "Blog · <slug> · DE" -> list "Blog-nl DE", sender hallo@konihaus.ch
// Campaigns already sent (or sending) are never touched. Posts in the past are skipped.
// Usage: node brevo-campaigns.cjs [--dry-run] [--only <slug>]
// Runs automatically after `npm run build` when BREVO_API_KEY is set in blog-engine/.env and
// NEWSLETTER_AUTOSCHEDULE is not "off". Language lists are maintained by brevo-sync.js on the NAS.
const fs = require('node:fs');
const path = require('node:path');

function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
  }
}

const CONF = {
  en: { list: () => process.env.BREVO_LIST_EN || 'Blog-nl EN', sender: 'hello@konihaus.ch' },
  de: { list: () => process.env.BREVO_LIST_DE || 'Blog-nl DE', sender: 'hallo@konihaus.ch' },
};
const ADDRESS = 'Konihaus · Im Rebberg 6 · 8910 Affoltern am Albis · Switzerland';
const MIN_LEAD_MS = 10 * 60 * 1000; // don't schedule anything less than 10 minutes ahead

// 'YYYY-MM-DDTHH:mm' in Europe/Zurich -> Date (handles summer/winter time)
function zurich(local) {
  const guess = new Date(`${local}:00Z`);
  const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Zurich', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  const p = Object.fromEntries(f.formatToParts(guess).map(x => [x.type, x.value]));
  const shown = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute);
  return new Date(guess.getTime() - (shown - guess.getTime()));
}

// Generated files are provider-neutral; make them Brevo-ready.
const brevoHtml = html => html
  .replace(/https:\/\/konihaus\.ch\/unsubscribe\?email=\{\{CUSTOMER_EMAIL\}\}/g, '{{ unsubscribe }}')
  .replace(/\{\{SENDER_POSTAL_ADDRESS\}\}/g, ADDRESS);

async function run({ dir, dryRun = false, only = null, log = console.log } = {}) {
  loadEnv();
  const KEY = process.env.BREVO_API_KEY;
  if (!KEY) throw new Error('BREVO_API_KEY missing (blog-engine/.env)');
  dir = dir || path.resolve(__dirname, process.env.KONIHAUS_NEWSLETTER_OUTPUT || '../campaign/newsletter_email');
  const api = async (method, url, body) => {
    const res = await fetch('https://api.brevo.com/v3' + url, { method, headers: { 'api-key': KEY, accept: 'application/json', 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
    const text = await res.text();
    if (!res.ok) throw new Error(`${method} ${url} -> ${res.status} ${text}`);
    return text ? JSON.parse(text) : {};
  };
  const tag = '[brevo-campaigns]' + (dryRun ? ' [dry run]' : '');

  // lists + senders by name/email
  const lists = [];
  for (let o = 0; ; o += 50) { const r = await api('GET', `/contacts/lists?limit=50&offset=${o}`); lists.push(...(r.lists || [])); if (!r.lists || r.lists.length < 50) break; }
  const senders = (await api('GET', '/senders')).senders || [];
  for (const [lang, c] of Object.entries(CONF)) {
    c.listId = lists.find(l => l.name === c.list())?.id;
    c.senderId = senders.find(s => s.email === c.sender)?.id;
    if (!c.listId) throw new Error(`Brevo list "${c.list()}" not found - run brevo-sync.js on the NAS first`);
    if (!c.senderId) throw new Error(`Brevo sender ${c.sender} not found`);
  }
  // existing campaigns by name
  const existing = new Map();
  for (let o = 0; ; o += 100) {
    const r = await api('GET', `/emailCampaigns?limit=100&offset=${o}&excludeHtmlContent=true`);
    (r.campaigns || []).forEach(c => existing.set(c.name, c));
    if (!r.campaigns || r.campaigns.length < 100) break;
  }

  const now = Date.now();
  let created = 0, updated = 0;
  const slugs = fs.readdirSync(dir).filter(s => fs.existsSync(path.join(dir, s, 'campaign.json')) && (!only || s === only)).sort();
  for (const slug of slugs) {
    const manifest = JSON.parse(fs.readFileSync(path.join(dir, slug, 'campaign.json'), 'utf8'));
    for (const [lang, m] of Object.entries(manifest.languages || {})) {
      const c = CONF[lang]; if (!c) continue;
      const when = zurich(m.publishAtLocal);
      if (when.getTime() < now + MIN_LEAD_MS) continue; // past or too close: leave alone
      const name = `Blog · ${slug} · ${lang.toUpperCase()}`;
      const body = {
        name, subject: m.subject, previewText: m.preheader, sender: { id: c.senderId }, replyTo: c.sender,
        htmlContent: brevoHtml(fs.readFileSync(path.join(dir, slug, m.html), 'utf8')),
        recipients: { listIds: [c.listId] }, scheduledAt: when.toISOString(), inlineImageActivation: false,
      };
      const old = existing.get(name);
      if (old && !['draft', 'queued', 'suspended'].includes(old.status)) { log(`${tag} ${name}: already ${old.status}, skipped`); continue; }
      log(`${tag} ${old ? 'update' : 'create'} ${name} -> ${c.list()} at ${m.publishAtLocal} Zurich`);
      if (dryRun) continue;
      if (old) { await api('PUT', `/emailCampaigns/${old.id}`, body); updated++; }
      else { await api('POST', '/emailCampaigns', body); created++; }
    }
  }
  log(`${tag} done: ${created} created, ${updated} updated`);
}

module.exports = { run, zurich, brevoHtml };
if (require.main === module) {
  const a = process.argv.slice(2);
  const i = a.indexOf('--only');
  run({ dryRun: a.includes('--dry-run'), only: i >= 0 ? a[i + 1] : null }).catch(e => { console.error('[brevo-campaigns] ERROR', e.message); process.exitCode = 1; });
}
