const fs = require('node:fs/promises');
const path = require('node:path');
const ORIGIN = 'https://blog.konihaus.ch';
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const words = {
  en: { label: 'A NEW NOTE FROM KONI', intro: 'I’ve published a new article that I’d like to share with you.', cta: 'Read my article', outro: 'I hope you find it useful. If it sparks a question, just reply to this email — I’d love to hear from you.', sign: 'Warm regards,', footer: 'You’re receiving this email because you subscribed to Konihaus blog updates.', unsubscribe: 'Unsubscribe', all: 'More from the blog', subject: 'New on the blog: ' },
  de: { label: 'NEUES VON KONI', intro: 'Ich habe einen neuen Beitrag veröffentlicht, den ich gerne mit dir teilen möchte.', cta: 'Meinen Beitrag lesen', outro: 'Ich hoffe, der Beitrag ist hilfreich für dich. Wenn du eine Frage dazu hast, antworte einfach auf diese E-Mail — ich freue mich, von dir zu hören.', sign: 'Liebe Grüsse', footer: 'Du erhältst diese E-Mail, weil du die Blog-Neuigkeiten von Konihaus abonniert hast.', unsubscribe: 'Abmelden', all: 'Mehr aus dem Blog', subject: 'Neu im Blog: ' }
};
function absolute(value, base = ORIGIN) {
  const url = new URL(value, base);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error(`Newsletter URL must use HTTP(S): ${value}`);
  return url.href;
}
function model(post) {
  const d = post.data, lang = d.language, w = words[lang];
  const opts = typeof d.newsletter === 'object' && d.newsletter ? d.newsletter : {};
  const title = opts.title || d.title;
  const excerpt = opts.excerpt || d.excerpt;
  if (!title || !excerpt) throw new Error(`Newsletter needs title and excerpt: ${post.inputPath}`);
  const rawImage = opts.image || d.image || (d.ogimage ? `/images/insights/${d.ogimage}` : '');
  const article = absolute(post.url);
  const tracked = new URL(article);
  tracked.searchParams.set('utm_source', 'newsletter');
  tracked.searchParams.set('utm_medium', 'email');
  tracked.searchParams.set('utm_campaign', `blog-${post.slug}`);
  const date = new Date(d.date || post.date).toISOString().slice(0, 10);
  const t = /^(\d{1,2}):(\d{2})/.exec(String(d.time || ''));
  const time = t && +t[1] < 24 && +t[2] < 60 ? `${t[1].padStart(2,'0')}:${t[2]}` : '07:00';
  return {lang, w, title, excerpt, image: rawImage ? absolute(rawImage) : '', alt: opts.imageAlt || title, reading: d.readingtime || '', url: tracked.href, article, subject: opts.subject || w.subject + title, preheader: opts.preheader || excerpt, date, time};
}
function render(m) {
  const e = escape, w = m.w;
  const p = 'font:16px/1.65 Outfit,Arial,Helvetica,sans-serif;color:#374b3d;';
  return `<!doctype html>
<html lang="${m.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(m.subject)}</title>
<!--[if !mso]><!--><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&amp;family=Outfit:wght@400;500;700&amp;display=swap"><!--<![endif]-->
<style>body{margin:0;padding:0}table{border-collapse:collapse}@media(max-width:620px){.pad{padding-left:24px!important;padding-right:24px!important}.outer{padding:0!important}.headline{font-size:36px!important}}</style>
<!--[if mso]><style>body,td,p,a{font-family:Arial,sans-serif!important}h1,.serif{font-family:Georgia,serif!important}</style><![endif]--></head>
<body style="margin:0;background:#e9ece6;"><div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${e(m.preheader)}</div>
<table role="presentation" width="100%" bgcolor="#e9ece6"><tr><td class="outer" align="center" style="padding:32px 12px;">
<!--[if mso]><table role="presentation" width="600"><tr><td><![endif]-->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#f7f4ed;">
<tr><td class="pad" bgcolor="#2a4a35" style="padding:28px 40px;"><a href="https://konihaus.ch/" style="color:#f7f4ed;text-decoration:none;font:500 30px Outfit,Arial,sans-serif;"><img src="https://konihaus.ch/images/logo.png" width="36" height="36" alt="" style="vertical-align:middle;border:0;">&nbsp; konihaus</a><p style="margin:26px 0 0;color:#9fc77f;font:700 11px Outfit,Arial,sans-serif;letter-spacing:2px;">${w.label}</p></td></tr>
${m.image ? `<tr><td><a href="${e(m.url)}"><img src="${e(m.image)}" alt="${e(m.alt)}" width="600" style="width:100%;max-width:600px;height:auto;display:block;border:0;"></a></td></tr>` : ''}
<tr><td class="pad" style="padding:32px 40px 22px;"><p style="${p}margin:0 0 20px;">${w.intro}</p><h1 class="headline serif" style="font:400 42px/1.1 'Cormorant Garamond',Georgia,serif;color:#2a4a35;margin:0 0 18px;">${e(m.title)}</h1>${m.reading ? `<p style="font:14px Outfit,Arial,sans-serif;color:#806035;">${e(m.reading)}</p>` : ''}<p style="${p}margin:0;">${e(m.excerpt)}</p></td></tr>
<tr><td class="pad" style="padding:6px 40px 32px;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td bgcolor="#2a4a35" style="border-radius:5px;mso-padding-alt:16px 24px;"><a href="${e(m.url)}" style="display:inline-block;padding:16px 24px;font:700 16px Outfit,Arial,sans-serif;text-decoration:none;color:#ffffff;border:1px solid #2a4a35;border-radius:5px;">${w.cta} &nbsp;→</a></td></tr></table></td></tr>
<tr><td class="pad" bgcolor="#ffffff" style="padding:28px 40px;border-top:3px solid #9fc77f;"><p style="${p}margin:0 0 20px;">${w.outro}</p><p style="${p}margin:0;">${w.sign}<br><strong>Koni</strong></p></td></tr>
<tr><td class="pad" bgcolor="#2a4a35" style="padding:24px 40px;"><p style="font:12px/1.6 Outfit,Arial,sans-serif;color:#f7f4ed;margin:0 0 14px;">${w.footer}<br>{{SENDER_POSTAL_ADDRESS}}</p><p style="font:12px Outfit,Arial,sans-serif;margin:0;"><a href="${ORIGIN}/${m.lang}/insights/" style="color:#f7f4ed;">${w.all}</a> &nbsp;·&nbsp; <a href="https://konihaus.ch/unsubscribe?email={{CUSTOMER_EMAIL}}" style="color:#f7f4ed;">${w.unsubscribe}</a></p></td></tr>
</table><!--[if mso]></td></tr></table><![endif]--></td></tr></table></body></html>`;
}
async function writeChanged(file, text) {
  try { if (await fs.readFile(file,'utf8') === text) return; } catch (err) { if (err.code !== 'ENOENT') throw err; }
  await fs.writeFile(file,text,'utf8');
}
async function generate(posts, outputDir) {
  const groups = new Map();
  const candidates = posts.filter(p => ['en','de'].includes(p.data.language) && p.url && !p.data.draft && p.data.newsletter !== false);
  for (const post of candidates) {
    const enPath = post.data.language === 'en' ? post.url : post.data.permalinkalt;
    const match = /^\/en\/insights\/([a-z0-9][a-z0-9_-]*)\/?$/i.exec(enPath || '');
    if (!match) throw new Error(`Newsletter cannot determine English post slug: ${post.inputPath}`);
    const slug = match[1];
    if (!groups.has(slug)) groups.set(slug, {});
    const group = groups.get(slug);
    if (group[post.data.language]) throw new Error(`Duplicate newsletter language for ${slug}`);
    group[post.data.language] = {...post, slug};
  }
  // Validate every pair before writing any output; never silently create a wrong translation.
  const prepared = [...groups].map(([slug, group]) => {
    if (!group.en || !group.de) throw new Error(`Newsletter ${slug}: both EN and DE posts are required. Add the translation, or use newsletter: false until ready.`);
    if (group.en.data.permalinkalt !== group.de.url || group.de.data.permalinkalt !== group.en.url) throw new Error(`Newsletter ${slug}: permalinkalt must point to its matching translation.`);
    return {slug, models: ['en','de'].map(lang => model(group[lang]))};
  });
  for (const {slug, models} of prepared) {
    const folder = path.join(outputDir,slug);
    await fs.mkdir(folder,{recursive:true});
    const manifest = {slug, generatedBy:'Konihaus Eleventy newsletter generator', timezone:'Europe/Zurich', languages:{}};
    for (const m of models) {
      await writeChanged(path.join(folder,`newsletter-${m.lang}.html`),render(m));
      await writeChanged(path.join(folder,`newsletter-${m.lang}.txt`),`${m.w.intro}\n\n${m.title}\n\n${m.excerpt}\n\n${m.w.cta}: ${m.url}\n\n${m.w.outro}\n\n${m.w.sign}\nKoni\n\n${m.w.footer}\n{{SENDER_POSTAL_ADDRESS}}\n${m.w.unsubscribe}: https://konihaus.ch/unsubscribe?email={{CUSTOMER_EMAIL}}\n`);
      manifest.languages[m.lang] = {subject:m.subject,preheader:m.preheader,articleUrl:m.article,campaignUrl:m.url,publishAtLocal:`${m.date}T${m.time}`,html:`newsletter-${m.lang}.html`,text:`newsletter-${m.lang}.txt`};
    }
    await writeChanged(path.join(folder,'campaign.json'),JSON.stringify(manifest,null,2)+'\n');
  }
  await fs.mkdir(outputDir,{recursive:true});
  await writeChanged(path.join(outputDir,'README.txt'),`Generated by the blog Eleventy build. Each English slug folder contains EN/DE HTML, plain text and campaign.json with subject lines, preheaders, links and publication times (Europe/Zurich).\n\nThese are generated source files: edits are overwritten on the next build. Copy a campaign elsewhere before custom editing. Unchanged files are not rewritten; removed posts are not automatically deleted here.\n\nFuture-dated posts are prepared too. Send only after both translations are published and their live article/image URLs work. The build sends no emails.\n\nReplace SENDER_POSTAL_ADDRESS and have your sender substitute CUSTOMER_EMAIL with a URL-encoded recipient address. Your unsubscribe endpoint must update your subscriber list; these files do not implement it. A provider may require its own unsubscribe tag instead.\n\nOptional post front matter: newsletter: false to skip (set on both translations), or newsletter: { subject, preheader, title, excerpt, image, imageAlt } for per-language overrides. Draft posts are skipped. Translations must have matching permalinkalt values.\n`);
  console.log(`[newsletter] Prepared ${prepared.length} bilingual campaigns in ${outputDir}`);
}
function register(eleventyConfig, projectDir) {
  let posts = [];
  eleventyConfig.on('eleventy.before', () => { posts = []; });
  eleventyConfig.addCollection('newsletterPosts', collection => {
    posts = collection.getAll().filter(p => /(?:^|\/)src\/(en|de)\/insights\/[^/]+\.md$/.test(p.inputPath.replace(/\\/g,'/')));
    return posts;
  });
  eleventyConfig.on('eleventy.after', async () => {
    const outputDir = process.env.KONIHAUS_NEWSLETTER_OUTPUT ? path.resolve(process.env.KONIHAUS_NEWSLETTER_OUTPUT) : path.resolve(projectDir,'../campaign/newsletter_email');
    await generate(posts,outputDir);
  });
}
module.exports = {register,generate};
