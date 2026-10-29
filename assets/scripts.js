const LANG_COOKIE = 'konihaus-language';

function getCookie(name) {
  try {
    const escaped = name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1');
    const match = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  } catch {
    return null;
  }
}

function setCookie(name, value, days = 365) {
  try {
    const host = window.location.hostname;
    const domainAttr = host.endsWith('konihaus.ch') ? '; domain=.konihaus.ch' : '';
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${days * 24 * 60 * 60}${domainAttr}; SameSite=Lax`;
  } catch {
    
  }
}

function getLangFromPath() {
  const path = window.location.pathname;
  if (path.startsWith('/de/')) return 'de';
  if (path.startsWith('/en/')) return 'en';
  return null;
}

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); });

const i18n = {
  currentLang: getLangFromPath() || getCookie(LANG_COOKIE) || localStorage.getItem('lang') || 'de',
  supportedLangs: ['de', 'en'/*, 'fr', 'it'*/],
  translations: {},
  baseDir:
  typeof CUSTOM_BASE_DIR !== 'undefined' && CUSTOM_BASE_DIR
    ? CUSTOM_BASE_DIR
    : '/',

  async init() {
    for (const lang of this.supportedLangs) {
      try {
        const response = await fetch(`${this.baseDir}translations/${lang}.json`);
        this.translations[lang] = await response.json();
      } catch (error) {
        console.error(`Failed to load translation for ${lang}:`, error);
      }
    }
    this.setLanguage(this.currentLang);
    this.setupLanguageSelector();
  },

  setLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) lang = 'de';

    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    setCookie(LANG_COOKIE, lang); 
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ha-link]').forEach(function (el) { el.setAttribute('href', 'https://konihaus.ch' + (lang === 'en' ? '/home-assistant-switzerland' : '/home-assistant-schweiz')); });
    const hcaptcha = document.querySelector('.h-captcha');
    if (hcaptcha) hcaptcha.setAttribute('data-lang', lang);
    
    this.updatePageContent();
    renderSafetyStatement();
    applyLanguageBlocks();
    if (typeof cookieConsent !== 'undefined') cookieConsent.refresh();

    const langSelect = document.getElementById('lang-selector');
    if (langSelect) {
      langSelect.value = lang;
    }

    const activeTab = document.querySelector('.pkg-tab.active');
    if (activeTab) {
      const audience = activeTab.dataset.audience;
      updatePackageContent(audience);
    }
  },

  updatePageContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const keys = el.dataset.i18n.split('.');
      const text = this.getText(...keys);

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.placeholder) el.placeholder = text;
        if (el.dataset.i18nValue === 'true') el.value = text;
      } else if (el.dataset.i18nHtml === 'true') {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    this.updateSelectOptions();
  },

  getText(section, key) {
    const lookup = (lang) => {
      let text = this.translations[lang];
      for (const k of [section, key]) {
        text = text ? text[k] : null;
      }
      return text;
    };
    return lookup(this.currentLang) || lookup('en') || `[${section}.${key}]`;
  },

  updateSelectOptions() {
    const selects = document.querySelectorAll('[data-i18n-options]');
    selects.forEach((select) => {
      const options = select.dataset.i18nOptions.split(',');
      const optionsArray = options.map((opt) => {
        const [section, key] = opt.trim().split('.');
        return this.getText(section, key);
      });

      Array.from(select.options).forEach((option, index) => {
        if (index > 0 && index <= optionsArray.length) {
          option.textContent = optionsArray[index - 1];
        }
      });
    });
  },

  setupLanguageSelector() {
    const langSelect = document.getElementById('lang-selector');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        this.setLanguage(lang);
      });
    }
  },

  t(section, key) {
    return this.getText(section, key);
  },
};

const FORM_LOAD_TIME = Date.now();

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = document.getElementById('fsub-btn');
  const statusEl = document.getElementById('form-status');

  const name = document.getElementById('n').value.trim();
  const email = document.getElementById('e').value.trim();
  const interest = document.getElementById('i').value;
  const message = document.getElementById('m').value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !message || !emailPattern.test(email)) {
    showFormStatus(statusEl, i18n.getText('contact', 'form_error_invalid'), 'error');
    return;
  }

  const botcheck = form.querySelector('[name="botcheck"]');
  const honeypot2 = form.querySelector('[name="website"]');
  const tooFast = Date.now() - FORM_LOAD_TIME < 3000;
  const looksLikeBot = (botcheck && botcheck.checked) || (honeypot2 && honeypot2.value) || tooFast;

  if (looksLikeBot) {
    showFormStatus(statusEl, i18n.getText('contact', 'form_success'), 'success');
    form.reset();
    return;
  }

  const hCaptchaField = form.querySelector('[name="h-captcha-response"]');
  const discountField = form.querySelector('#discount-code-field');

  const payload = {
    access_key: form.querySelector('[name="access_key"]').value,
    subject: form.querySelector('[name="subject"]').value,
    from_name: form.querySelector('[name="from_name"]').value,
    name,
    email,
    interest: interest || 'Keine Angabe',
    message,
    language: i18n.currentLang,
  };
  if (hCaptchaField && hCaptchaField.value) {
    payload['h-captcha-response'] = hCaptchaField.value;
  }
  if (discountField && discountField.value) {
    payload.discount_code = discountField.value;
  }

  submitBtn.disabled = true;
  showFormStatus(statusEl, i18n.getText('contact', 'form_sending'), 'sending');

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (result.success) {
      showFormStatus(statusEl, i18n.getText('contact', 'form_success'), 'success');
      form.reset();
    } else {
      showFormStatus(statusEl, i18n.getText('contact', 'form_error'), 'error');
    }
  } catch (error) {
    showFormStatus(statusEl, i18n.getText('contact', 'form_error'), 'error');
  } finally {
    submitBtn.disabled = false;
  }
}

function showFormStatus(el, text, kind) {
  if (!el) return;
  el.innerHTML = text;
  el.hidden = false;
  el.className = `form-status form-status--${kind}`;
}

function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');

  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('.drawer-acc').forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      document.querySelectorAll('.drawer-acc').forEach(b => {
        const isThis = b === btn;
        const on = isThis ? open : false;
        b.setAttribute('aria-expanded', String(on));
        const sub = document.getElementById(b.getAttribute('aria-controls'));
        if (sub) sub.hidden = !on;
      });
    });
  });

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function setupScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        // a leftover transform keeps the text on its own compositing layer, which can render it softer
        entry.target.addEventListener('transitionend', () => { entry.target.style.transform = 'none'; }, { once: true });
      }
    });
  });

  reveals.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

function setupPackageTabs() {
  const tabs = document.querySelectorAll('.pkg-tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const audience = tab.dataset.audience;

      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      updatePackageContent(audience);
    });
  });
}

function updatePackageContent(audience) {
  const titleEl = document.querySelector('.pkg-title');
  if (titleEl) {
    const titleKey = `h2_${audience}`;
    const translatedTitle = i18n.getText('packages', titleKey);
    titleEl.innerHTML = translatedTitle;

    titleEl.classList.remove('senioren', 'mieter', 'ferienhaus');
    if (audience !== 'basis') {
      titleEl.classList.add(audience);
    }
  }

  const pkgFeatured = document.querySelector('.pkg-featured');
  if (pkgFeatured) {
    pkgFeatured.classList.remove('senioren', 'mieter', 'ferienhaus');
    if (audience !== 'basis') {
      pkgFeatured.classList.add(audience);
    }
  }

  const pkgPremium = document.querySelector('.pkg-premium');
  if (pkgPremium) {
    pkgPremium.classList.remove('senioren', 'mieter', 'ferienhaus');
    if (audience !== 'basis') {
      pkgPremium.classList.add(audience);
    }
  }

  const includesEls = document.querySelectorAll('.pkg__includes');
  if (includesEls.length > 0) {
    const includesKey = `pkg_includes_${audience}`;
    const translatedIncludes = i18n.getText('packages', includesKey);
    includesEls.forEach((el) => {
      el.textContent = translatedIncludes;
    });
  }

  const packages = document.querySelectorAll('.pkg');
  packages.forEach((card, index) => {
    const pkgNumber = index + 1;

    const nameEl = card.querySelector('.pkg__name');
    if (nameEl) {
      const nameKey = `pkg${pkgNumber}_name_${audience}`;
      const translatedName = i18n.getText('packages', nameKey);
      nameEl.textContent = translatedName;
    }

    const tagEl = card.querySelector('.pkg__tag');
    if (tagEl) {
      const tagKey = `pkg${pkgNumber}_tag_${audience}`;
      const translatedTag = i18n.getText('packages', tagKey);
      tagEl.textContent = translatedTag;
    }

    const outcomeList = card.querySelector('.pkg__outcomes');
    if (outcomeList) renderFeatureList(outcomeList, pkgNumber, audience, 'outcomes');

    const featureList = card.querySelector('.pkg__list');
    if (featureList) renderFeatureList(featureList, pkgNumber, audience, 'features');
  });

  updatePackageSafetyLine(audience);
}

function renderFeatureList(listEl, pkgNumber, audience, suffix = 'features') {
  const key = `${audience}_pkg${pkgNumber}_${suffix}`;
  const packages = i18n.translations[i18n.currentLang]?.packages;
  const items = packages?.[key];

  if (!Array.isArray(items)) {
    console.warn(`Missing feature list "${key}" for language "${i18n.currentLang}"`);
    listEl.replaceChildren();
    return;
  }

  listEl.replaceChildren(
    ...items.map((text) => {
      const li = document.createElement('li');

      const check = document.createElement('span');
      check.className = 'chk';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';

      const label = document.createElement('span');
      label.textContent = text;

      li.append(check, label);
      return li;
    })
  );
}

function updatePackageSafetyLine(audience) {
  const line = document.getElementById('pkg-safety-line');
  if (!line) return;

  const audiences = (line.dataset.audiences || '').split(/\s+/).filter(Boolean);
  line.hidden = !audiences.includes(audience);
}

function applyLanguageBlocks() {
  const titleKey = document.body && document.body.dataset.titleKey;
  if (titleKey) {
    const [section, key] = titleKey.split('.');
    document.title = i18n.getText(section, key) + ' \u2014 Konihaus';
  }

  document.querySelectorAll('[data-legal-doc]').forEach((doc) => {
    const blocks = Array.from(doc.querySelectorAll(':scope > [data-lang]'));
    if (!blocks.length) return;

    const fallbackLang = doc.dataset.fallback || 'de';
    const wanted = blocks.find((b) => b.dataset.lang === i18n.currentLang);
    const shown = wanted || blocks.find((b) => b.dataset.lang === fallbackLang) || blocks[0];
    blocks.forEach((b) => { b.hidden = b !== shown; });

    const notice = doc.querySelector('.legal__notice');
    if (notice) notice.hidden = !!wanted;
  });
}

function renderSafetyStatement() {
  const list = document.getElementById('safety-list');
  if (!list) return;

  const items = i18n.translations[i18n.currentLang]?.contact?.safety_items;
  list.replaceChildren(
    ...(Array.isArray(items) ? items : []).map((text) => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    })
  );
}

function applyDeepLinkedPackage() {
  const params = new URLSearchParams(window.location.search);
  
  const pkgParam = params.get('pkg');
  if (!pkgParam) return;

  const [audience, tierStr] = pkgParam.split('-');
  const tier = parseInt(tierStr, 10);
  const tab = document.querySelector(`.pkg-tab[data-audience="${audience}"]`);
  if (!tab || !tier) return;
  
  const audienceSelect = document.getElementById('i');
  const messageField = document.getElementById('m');
  const card = document.querySelector(`.pkg.d${tier}`);
  if (!audienceSelect || !messageField || !card) return;

  const pkgIndex = tierStr;
  const AUDIENCE_OPTION_INDEX = { basis: 1, senioren: 2, mieter: 3, ferienhaus: 4 };
  const optionIndex = AUDIENCE_OPTION_INDEX[audience];
  if (optionIndex !== undefined) audienceSelect.selectedIndex = optionIndex;

  if (!messageField.value.trim() && pkgIndex !== -1) {
    const packageName = card.querySelector('.pkg__name');
    const price = card.querySelector('.pkg__num');
    if (packageName && price) {
      const template = i18n.getText('contact', 'form_prefill');
      let prefill = template
        .replace('{package}', packageName.textContent.trim())
        .replace('{price}', price.textContent.trim());
        if (typeof applyDiscountToRequest === 'function') {
        prefill = applyDiscountToRequest(prefill, tier - 1);
      }
      messageField.value = prefill;
    }
  }


  document.querySelectorAll('.pkg-tab').forEach((t) => t.classList.remove('active'));
  tab.classList.add('active');
  updatePackageContent(audience);
  const currentHash = window.location.hash.slice(1); 
  if (!currentHash) return;

  if(currentHash === 'packages') {
    requestAnimationFrame(() => {
      const card = document.querySelectorAll('.pkg-grid > .pkg')[tier - 1];
      if (!card) return;
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('pkg--highlight');
      setTimeout(() => card.classList.remove('pkg--highlight'), 2200);
    });
  }
}

function setupPackageAccordion() {
  document.querySelectorAll('.pkg__toggle').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();

      const panel = document.getElementById(toggle.getAttribute('aria-controls'));
      if (!panel) return;

      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;

      const pkg = toggle.closest('.pkg');
      if (pkg) pkg.classList.toggle('expanded', open);
    });
  });
}

function setupFaqAccordion() {
  document.querySelectorAll('.faq-list').forEach((list) => {
    const items = [...list.querySelectorAll('.faq-q')]
      .map((toggle) => ({
        toggle,
        panel: document.getElementById(toggle.getAttribute('aria-controls')),
      }))
      .filter(({ panel }) => panel);

    items.forEach(({ toggle }) => {
      toggle.addEventListener('click', () => {
        const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';

        items.forEach(({ toggle: button, panel }) => {
          const isOpen = button === toggle && shouldOpen;

          button.setAttribute('aria-expanded', String(isOpen));
          panel.hidden = !isOpen;
        });
      });
    });
  });
}

function setupExamplesCarousel() {
  const track = document.getElementById('examples-track');
  if (!track) return;

  const prev = document.querySelector('.examples__arrow--prev');
  const next = document.querySelector('.examples__arrow--next');

  const cardGap = 20;
  const originalCards = Array.from(track.children);
  if (!originalCards.length) return;

  function cloneSegment() {
    return originalCards.map((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.tabIndex = -1;
      return clone;
    });
  }

  const beforeSegment = document.createDocumentFragment();
  cloneSegment().forEach((clone) => beforeSegment.appendChild(clone));
  track.insertBefore(beforeSegment, track.firstChild);

  const afterSegment = document.createDocumentFragment();
  cloneSegment().forEach((clone) => afterSegment.appendChild(clone));
  track.appendChild(afterSegment);

  let segmentWidth = 0;
  function measure() {
    segmentWidth = originalCards.reduce((sum, card) => sum + card.offsetWidth + cardGap, 0);
  }
  measure();
  window.addEventListener('resize', measure);

  track.scrollLeft = segmentWidth; 

  function wrapIfNeeded() {
    if (!segmentWidth) return;
    if (track.scrollLeft >= segmentWidth * 2) {
      track.scrollLeft -= segmentWidth;
    } else if (track.scrollLeft <= 0) {
      track.scrollLeft += segmentWidth;
    }
  }

  let autoplay = true;
  let rafId = null;
  let lastTime = null;
  let scrollPos = track.scrollLeft;
  const AUTOPLAY_SPEED = 18; 

  function tick(time) {
    if (!autoplay) { rafId = null; lastTime = null; return; }
    if (lastTime == null) lastTime = time;
    scrollPos += AUTOPLAY_SPEED * ((time - lastTime) / 1000);
    lastTime = time;
    if (scrollPos >= segmentWidth * 2) scrollPos -= segmentWidth;
    else if (scrollPos <= 0) scrollPos += segmentWidth;
    track.scrollLeft = scrollPos;
    rafId = requestAnimationFrame(tick);
  }

  function startAutoplay() {
    if (!autoplay || rafId) return;
    scrollPos = track.scrollLeft;
    lastTime = null;
    track.style.scrollSnapType = 'none';
    track.style.scrollBehavior = 'auto';
    rafId = requestAnimationFrame(tick);
  }

  function stopAutoplay() {
    if (!autoplay) return;
    autoplay = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    track.style.scrollSnapType = '';
    track.style.scrollBehavior = '';
  }

  track.addEventListener('pointerdown', stopAutoplay, { passive: true, once: true });

  track.addEventListener("touchstart", () => {
      stopAutoplay();
  });

  track.addEventListener("touchend", () => {
    setTimeout(() => {
      autoplay = true;
      startAutoplay();
    }, 4000);
  });

  function scrollByCard(dir) {
    stopAutoplay();
    const card = originalCards[0];
    const step = card ? card.offsetWidth + cardGap : 300;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  }
  if (prev) prev.addEventListener('click', () => scrollByCard(-1));
  if (next) next.addEventListener('click', () => scrollByCard(1));

  track.addEventListener('scroll', wrapIfNeeded);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      lastTime = null;
    } else if (autoplay) {
      startAutoplay();
    }
  });

  startAutoplay();
}


function setupPackageRequestButtons() {
  const audienceSelect = document.getElementById('i');
  const messageField = document.getElementById('m');
  if (!audienceSelect || !messageField) return;

  const AUDIENCE_OPTION_INDEX = { basis: 1, senioren: 2, mieter: 3, ferienhaus: 4 };

  document.querySelectorAll('[data-request-pkg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.pkg');
      const grid = document.querySelector('.pkg-grid');
      if (!card || !grid) return;

      const pkgIndex = Array.from(grid.children).indexOf(card);
      const activeTab = document.querySelector('.pkg-tab.active');
      const audience = activeTab ? activeTab.dataset.audience : 'basis';

      const optionIndex = AUDIENCE_OPTION_INDEX[audience];
      if (optionIndex !== undefined) audienceSelect.selectedIndex = optionIndex;

      if (!messageField.value.trim() && pkgIndex !== -1) {
        const packageName = card.querySelector('.pkg__name');
        const price = card.querySelector('.pkg__num');
        if (packageName && price) {
          const template = i18n.getText('contact', 'form_prefill');
          let prefill = template
            .replace('{package}', packageName.textContent.trim())
            .replace('{price}', price.textContent.trim());
          if (typeof applyDiscountToRequest === 'function') {
            prefill = applyDiscountToRequest(prefill, pkgIndex);
          }
          messageField.value = prefill;
        }
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function setupHeroTaglines() {
  const hero = document.querySelector('.hero');
  const container = hero && hero.querySelector('.hero__headline_container');
  if (!container) return;

  const TAGLINES = [
    { bg: 'var(--forest-deep)', class: '', keyPrefix: 'hero_tagline1' },
    { bg: 'var(--marine)', class: 'hero-marine', keyPrefix: 'hero_tagline2' },
    { bg: 'var(--gold)', class: 'hero-gold', keyPrefix: 'hero_tagline3' },
    { bg: 'var(--burgundy)', class: 'hero-burgundy', keyPrefix: 'hero_tagline4' },
  ];
  const HOLD_MS = 5000; 
  const OUT_MS = 450;  
  const IN_MS = 550; 
  const canAnimate = typeof hero.animate === 'function';
  const reduceMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  let index = 0;
  let current = container.querySelector('.hero__h1'); 
  let pending = null;                                
  let timer = null;

  function removeStrays() {
    container.querySelectorAll('.hero__h1').forEach((h) => {
      if (h !== current && !(pending && h === pending.incoming)) h.remove();
    });
  }

  function applyTheme(tagline) {
    hero.style.backgroundColor = tagline.bg;
    hero.classList.remove('hero-marine', 'hero-gold', 'hero-burgundy');
    if (tagline.class) hero.classList.add(tagline.class);
  }

  function createHeadline(tagline) {
    const h1 = document.createElement('h1');
    h1.className = 'hero__h1';
    h1.setAttribute('data-i18n', `hero.${tagline.keyPrefix}`); 
    h1.setAttribute('data-i18n-html', 'true');
    h1.innerHTML = i18n.getText('hero', tagline.keyPrefix);
    h1.style.animation = 'none';
    return h1;
  }

  function settle() {
    if (!pending) return;
    const { outgoing, incoming, animations } = pending;
    pending = null;
    animations.forEach((a) => a.cancel());
    outgoing.remove();
    incoming.style.opacity = '';
    current = incoming;
    removeStrays();
    schedule();
  }

  function schedule() {
    clearTimeout(timer);
    timer = null;
    if (!document.hidden && !pending) timer = setTimeout(rotate, HOLD_MS);
  }

  function rotate() {
    timer = null;
    if (document.hidden || pending) return;
    if (!current || !container.contains(current)) current = container.querySelector('.hero__h1');
    removeStrays();

    index = (index + 1) % TAGLINES.length;
    const tagline = TAGLINES[index];
    const outgoing = current;
    const incoming = createHeadline(tagline);
    incoming.style.opacity = '0';
    container.appendChild(incoming);
    applyTheme(tagline);

    if (!outgoing) { 
      incoming.style.opacity = '';
      current = incoming;
      schedule();
      return;
    }

    if (!canAnimate || reduceMotion.matches) {
      pending = { outgoing, incoming, animations: [] };
      settle();
      return;
    }

    const out = outgoing.animate(
      [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-50px)' }],
      { duration: OUT_MS, easing: 'ease-in', fill: 'forwards' }
    );
    const into = incoming.animate(
      [{ opacity: 0, transform: 'translateY(50px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: IN_MS, delay: OUT_MS, easing: 'ease-out', fill: 'both' }
    );
    const mine = { outgoing, incoming, animations: [out, into] };
    pending = mine;


    Promise.all([out.finished, into.finished])
      .then(() => { if (pending === mine) settle(); })
      .catch(() => {});
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearTimeout(timer);
      timer = null;
    } else {
      settle();
      removeStrays();
      schedule();
    }
  });

  schedule();
}

function initLanguagePicker() {
  const picker = document.querySelector(".language-picker");
  if (!picker) return;

  const trigger = picker.querySelector(".language-trigger");
  const menu = picker.querySelector(".language-options");
  const current = picker.querySelector(".language-current");
  const select = picker.querySelector("#lang-selector");
  const options = [...picker.querySelectorAll(".language-option")];
  const storageKey = LANG_COOKIE; 

  function readLanguage() {
    const fromCookie = getCookie(storageKey);
    if (fromCookie) return fromCookie;
    try {
      return localStorage.getItem(storageKey) || localStorage.getItem('lang');
    } catch {
      return null;
    }
  }

  function syncLanguage() {
    current.textContent = select.value.toUpperCase();

    options.forEach((option) => {
      const selected = option.dataset.lang === select.value;
      option.setAttribute("aria-current", String(selected));

      if (selected) {
        trigger.setAttribute(
          "aria-label",
          `Language: ${option.firstElementChild.textContent.trim()}`
        );
      }
    });
  }

  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (returnFocus) trigger.focus();
  }

  function openMenu() {
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");

    const selected = options.find(
      (option) => option.dataset.lang === select.value
    );
    (selected || options[0]).focus();
  }

  select.addEventListener("change", () => {
    syncLanguage();

    try {
      localStorage.setItem(storageKey, select.value);
    } catch {

    }
  });

  trigger.addEventListener("click", () => {
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      select.value = option.dataset.lang;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      closeMenu(true);
    });
  });

  picker.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      event.preventDefault();
      closeMenu(true);
    }

    if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();

      if (menu.hidden) {
        openMenu();
        return;
      }

      const index = options.indexOf(document.activeElement);
      const direction = event.key === "ArrowDown" ? 1 : -1;
      options[
        (index + direction + options.length) % options.length
      ].focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target)) closeMenu();
  });

  picker.addEventListener("focusout", () => {
    setTimeout(() => {
      if (!picker.contains(document.activeElement)) closeMenu();
    }, 0);
  });

  const savedLanguage = readLanguage();
  const supported = [...select.options].some(
    (option) => option.value === savedLanguage
  );

  if (supported) {
    select.value = savedLanguage;
  }

  syncLanguage();
  select.dispatchEvent(new Event("change", { bubbles: true }));
}

function openBlogPrivacy() {
  const link = {
    de: '/de/insights/datenschutz-by-default/',
    en: '/en/insights/privacy-by-default/'
  };
  const language = localStorage.getItem('lang') || 'de';
  window.location.href = devHref(link[language]);
}

function openBlogNoVendor() {
  const link = {
    de: '/de/insights/kein-vendor-lock-in/',
    en: '/en/insights/no-vendor-lock-in/'
  };
  const language = localStorage.getItem('lang') || 'de';
  window.location.href = devHref(link[language]);
}

// ---------------------------------------------------------------------------
// Dev mode: ?devmode=super shows scheduled (future-dated) posts and is carried
// along on every link that stays on the blog.
// ---------------------------------------------------------------------------
const DEVMODE = new URLSearchParams(window.location.search).get('devmode') === 'super';
const BLOG_HOSTS = [window.location.hostname, 'blog.konihaus.ch'];

function devHref(url) {
  if (!DEVMODE || !url) return url;
  const raw = String(url).trim();
  if (raw.startsWith('#')) return url;
  let u;
  try { u = new URL(raw, window.location.href); } catch { return url; }
  if (!/^https?:$/.test(u.protocol) || !BLOG_HOSTS.includes(u.hostname)) return url;
  if (u.searchParams.get('devmode') !== 'super') u.searchParams.set('devmode', 'super');
  return /^https?:\/\//i.test(raw) ? u.href : u.pathname + u.search + u.hash;
}

function applyDevmodeLinks() {
  if (!DEVMODE) return;
  document.querySelectorAll('a[href]').forEach((a) => {
    if (a.hasAttribute('data-share')) return;
    a.setAttribute('href', devHref(a.getAttribute('href')));
  });
}

// ---------------------------------------------------------------------------
// Publish time: a post goes live at its date + optional time (data-post-time="HH:MM",
// window.__scheduledPostTime). Without a time it goes live at 09:00. All times are
// Swiss time (Europe/Zurich), independent of the visitor's own time zone.
// ---------------------------------------------------------------------------
const DEFAULT_PUBLISH_TIME = '09:00';
const PUBLISH_TZ = 'Europe/Zurich';

function normalizePostTime(time) {
  const m = /^(\d{1,2}):(\d{2})/.exec(String(time || '').trim());
  if (!m) return DEFAULT_PUBLISH_TIME;
  const h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  if (h > 23 || min > 59) return DEFAULT_PUBLISH_TIME;
  return `${String(h).padStart(2, '0')}:${m[2]}`;
}

// "YYYY-MM-DDTHH:MM" in Swiss time; ISO strings compare correctly as plain strings.
function nowStamp() {
  const parts = {};
  new Intl.DateTimeFormat('en-CA', {
    timeZone: PUBLISH_TZ,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).forEach((p) => { parts[p.type] = p.value; });
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
}

function isPostLive(date, time) {
  return `${date}T${normalizePostTime(time)}` <= nowStamp();
}

// Blog post page: drop related posts that are not published yet, mark a scheduled preview.
function setupScheduledPost() {
  if (!DEVMODE) {
    document.querySelectorAll('.blog-post__related-card[data-post-date]').forEach((card) => {
      if (!isPostLive(card.dataset.postDate, card.dataset.postTime)) card.remove();
    });
    const section = document.querySelector('.blog-post__related');
    if (section && !section.querySelector('.blog-post__related-card')) section.remove();
  }
  if (window.__scheduledPost && DEVMODE) {
    const time = normalizePostTime(window.__scheduledPostTime);
    document.title = `[${window.__scheduledPost} ${time}] ${document.title}`;
  }
}

// Insights index: hide posts dated after today; ?devmode=super shows them (marked as scheduled).
function setupInsightsSchedule() {
  const main = document.querySelector('.insights-container');
  if (!main) return;

  const devMode = new URLSearchParams(window.location.search).get('devmode') === 'super';
  const isLive = (card) => isPostLive(card.dataset.postDate, card.dataset.postTime);
  const stampOf = (card) => `${card.dataset.postDate} ${normalizePostTime(card.dataset.postTime)}`;
  const label = main.dataset.scheduledLabel || document.documentElement.dataset.scheduledLabel
    || (document.documentElement.lang === 'de' ? 'Geplant' : 'Scheduled');

  // Cards not yet due are removed (devmode keeps them, marked as scheduled).
  main.querySelectorAll('.insights-card[data-post-date]').forEach((card) => {
    if (isLive(card)) return;
    if (!devMode) { card.remove(); return; }
    card.classList.add('is-scheduled');
    const tag = document.createElement('span');
    tag.className = 'insights-scheduled';
    tag.textContent = `${label} · ${stampOf(card)}`;
    card.prepend(tag);
  });
}


// Header + drawer topic lists: only topics with at least one published post (entries carry data-live-from).
function setupTopicNav() {
  if (DEVMODE) return;
  const now = nowStamp();
  document.querySelectorAll('[data-live-from]').forEach((li) => {
    if (li.dataset.liveFrom > now) li.remove();
  });
}

// ---------------------------------------------------------------------------
// Blog search overlay. Triggers: any [data-blog-search-open] (header + drawer), "/" or Ctrl/Cmd+K.
// Index: /{lang}/search.json (src/{lang}/search.json.njk). Posts not yet due are skipped
// (same rule as the index page). "See all results" opens /{lang}/insights/?q=...
// ---------------------------------------------------------------------------
const BLOG_SEARCH_TEXT = {
  en: { placeholder: 'Search articles', aria: 'Search articles', close: 'Close', none: 'No results for "{q}".', all: 'See all results for "{q}"',
        hint: '↑ ↓ to move · Enter to open · Esc to close', empty: 'Type to search all articles.', min: 'min read', err: 'Search is not available right now.', latest: 'Latest articles' },
  de: { placeholder: 'Beiträge durchsuchen', aria: 'Beiträge durchsuchen', close: 'Schliessen', none: 'Keine Ergebnisse für «{q}».', all: 'Alle Ergebnisse für «{q}»',
        hint: '↑ ↓ zum Wählen · Enter zum Öffnen · Esc zum Schliessen', empty: 'Tippen Sie, um alle Beiträge zu durchsuchen.', min: 'Min. Lesezeit', err: 'Die Suche ist gerade nicht verfügbar.', latest: 'Neueste Beiträge' }
};

function setupBlogSearch() {
  const triggers = document.querySelectorAll('[data-blog-search-open]');
  const lang = (document.documentElement.lang || 'de').slice(0, 2) === 'en' ? 'en' : 'de';
  const T = BLOG_SEARCH_TEXT[lang];
  let root = null, input, list, foot, seeAll, hint, items = null, loading = null, active = -1, current = [], lastFocus = null;

  const esc = (str) => String(str == null ? '' : str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const fold = (str) => String(str || '').toLowerCase();

  function highlight(text, tokens) {
    let out = esc(text);
    tokens.forEach((tok) => {
      if (!tok) return;
      const re = new RegExp('(' + tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }

  function load() {
    if (items) return Promise.resolve(items);
    if (!loading) {
      loading = fetch(`/${lang}/search.json`, { credentials: 'same-origin' })
        .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then((data) => { items = data.filter((p) => DEVMODE || isPostLive(p.d, p.tm)); return items; })
        .catch(() => { loading = null; return null; });
    }
    return loading;
  }

  function runQuery(q) {
    const tokens = fold(q).split(/\s+/).filter(Boolean);
    if (!tokens.length) return { tokens, hits: items.slice(0, 5).map((p) => ({ p, score: 0, snip: '' })) };
    const hits = [];
    items.forEach((p) => {
      const title = fold(p.t), tags = fold((p.g || []).join(' ') + ' ' + (p.k || '')), cat = fold(p.cl), ex = fold(p.e), body = fold(p.b);
      let score = 0;
      for (const tok of tokens) {
        let s = 0;
        if (title.includes(tok)) s += 6;
        if (tags.includes(tok) || cat.includes(tok)) s += 3;
        if (ex.includes(tok)) s += 2;
        if (body.includes(tok)) s += 1;
        if (!s) { score = 0; break; }
        score += s;
      }
      if (!score) return;
      if (title.includes(fold(q).trim())) score += 4;
      let snip = '';
      if (!title.includes(tokens[0])) {
        const src = ex.includes(tokens[0]) ? p.e : p.b;
        const idx = fold(src).indexOf(tokens[0]);
        if (idx >= 0) {
          const from = Math.max(0, idx - 50);
          snip = (from > 0 ? '… ' : '') + src.slice(from, idx + 90).trim() + ' …';
        }
      }
      hits.push({ p, score, snip });
    });
    hits.sort((a, b) => b.score - a.score || (a.p.d < b.p.d ? 1 : -1));
    return { tokens, hits };
  }

  function render() {
    const q = input.value.trim();
    if (!items) { list.innerHTML = `<p class="bsearch__msg">${esc(T.err)}</p>`; foot.hidden = true; return; }
    const { tokens, hits } = runQuery(q);
    current = hits.slice(0, 7);
    active = current.length && q ? 0 : -1;
    if (!current.length) {
      list.innerHTML = `<p class="bsearch__msg">${esc(T.none.replace('{q}', q))}</p>`;
    } else {
      const head = q ? '' : `<p class="bsearch__label">${esc(T.latest)}</p>`;
      list.innerHTML = head + current.map((h, i) => {
        const p = h.p;
        return `<a class="bsearch__item${i === active ? ' is-active' : ''}" role="option" id="bs-${i}" href="${esc(p.u)}" data-i="${i}">` +
          `<span class="bsearch__thumb">${p.i ? `<img src="${esc(p.i)}" alt="" width="56" height="56" loading="lazy">` : ''}</span>` +
          `<span class="bsearch__txt"><b>${highlight(p.t, tokens)}</b>` +
          `<small>${esc(p.cl)} · ${esc(p.df)} · ${esc(p.r)}</small>` +
          (h.snip ? `<em>${highlight(h.snip, tokens)}</em>` : '') + `</span></a>`;
      }).join('');
    }
    foot.hidden = !q;
    if (q) {
      seeAll.textContent = T.all.replace('{q}', q) + ' →';
      seeAll.href = `/${lang}/insights/?q=${encodeURIComponent(q)}`;
    }
  }

  function setActive(n) {
    if (!current.length) return;
    active = (n + current.length) % current.length;
    list.querySelectorAll('.bsearch__item').forEach((el, i) => {
      el.classList.toggle('is-active', i === active);
      if (i === active) el.scrollIntoView({ block: 'nearest' });
    });
  }

  function build() {
    root = document.createElement('div');
    root.className = 'bsearch';
    root.hidden = true;
    root.innerHTML =
      '<div class="bsearch__backdrop" data-close></div>' +
      '<div class="bsearch__panel" role="dialog" aria-modal="true" aria-label="' + esc(T.aria) + '">' +
      '<div class="bsearch__bar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
      '<input type="search" class="bsearch__input" placeholder="' + esc(T.placeholder) + '" aria-label="' + esc(T.aria) + '" autocomplete="off" enterkeyhint="search">' +
      '<button type="button" class="bsearch__esc" data-close aria-label="' + esc(T.close) + '">Esc</button></div>' +
      '<div class="bsearch__list" role="listbox"></div>' +
      '<div class="bsearch__foot" hidden><span class="bsearch__hint">' + esc(T.hint) + '</span><a class="bsearch__all" href="#"></a></div>' +
      '</div>';
    document.body.appendChild(root);
    input = root.querySelector('.bsearch__input');
    list = root.querySelector('.bsearch__list');
    foot = root.querySelector('.bsearch__foot');
    seeAll = root.querySelector('.bsearch__all');
    root.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) close(); });
    input.addEventListener('input', () => load().then(render));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        const q = input.value.trim();
        if (active >= 0 && current[active]) location.href = current[active].p.u;
        else if (q) location.href = `/${lang}/insights/?q=${encodeURIComponent(q)}`;
      }
    });
  }

  function open() {
    if (!root) build();
    lastFocus = document.activeElement;
    root.hidden = false;
    document.body.classList.add('bsearch-open');
    input.value = '';
    list.innerHTML = `<p class="bsearch__msg">${esc(T.empty)}</p>`;
    foot.hidden = true;
    input.focus();
    load().then(() => { if (!input.value) render(); });
  }

  function close() {
    if (!root || root.hidden) return;
    root.hidden = true;
    document.body.classList.remove('bsearch-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  triggers.forEach((btn) => btn.addEventListener('click', (e) => { e.preventDefault(); open(); }));
  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    const typing = /INPUT|TEXTAREA|SELECT/.test(tag) || (e.target && e.target.isContentEditable);
    if (e.key === 'Escape') close();
    else if ((e.key === '/' && !typing && !e.ctrlKey && !e.metaKey) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      open();
    }
  });
}

// ---------------------------------------------------------------------------
// Blog newsletter signup. Markup: _includes/subscribe-box.njk
//   <form data-blog-subscribe data-endpoint data-lang data-msg-ok|duplicate|invalid|limit|error>
// Posts email + language to the Vercel endpoint (writes blog-emails.json).
// ---------------------------------------------------------------------------
function setupBlogSubscribe() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.querySelectorAll('form[data-blog-subscribe]').forEach((form) => {
    const box = form.closest('.subscribe');
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.subscribe__status');
    const honeypot = form.querySelector('[name="website"]');
    if (!input || !button || !status) return;

    const msg = (key) => form.dataset[`msg${key}`] || '';
    const show = (text, kind) => {
      status.textContent = text;
      status.className = `subscribe__status subscribe__status--${kind}`;
      status.hidden = !text;
    };
    const finish = (text, kind) => {
      show(text, kind);
      if (box) box.classList.add('is-done');
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = input.value.trim().toLowerCase();

      if (!emailPattern.test(email)) {
        show(msg('Invalid'), 'error');
        input.focus();
        return;
      }

      // Bots (honeypot filled / submitted instantly): pretend success, send nothing.
      if ((honeypot && honeypot.value) || Date.now() - FORM_LOAD_TIME < 1500) {
        finish(msg('Ok'), 'ok');
        return;
      }

      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      show('', 'info');

      try {
        const response = await fetch(form.dataset.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, language: form.dataset.lang || i18n.currentLang }),
        });

        if (response.ok) {
          finish(msg('Ok'), 'ok');
          return;
        }

        let data = {};
        try { data = await response.json(); } catch { /* no JSON body */ }

        if (response.status === 400 && /already/i.test(data.message || '')) {
          finish(msg('Duplicate'), 'info');
        } else if (response.status === 400) {
          show(msg('Invalid'), 'error');
        } else if (response.status === 429) {
          show(msg('Limit'), 'error');
        } else {
          show(msg('Error'), 'error');
        }
      } catch (error) {
        show(msg('Error'), 'error');
      } finally {
        button.disabled = false;
        button.removeAttribute('aria-busy');
      }
    });
  });
}

// Newsletter click tracking: when a visit arrives from a newsletter link
// (?utm_source=newsletter&utm_medium=email&utm_campaign=...), report it once per campaign and browser session.
// Stored by the collector in newsletter-clicks.json (no IP, no cookies). Runs only in a real browser, so mail scanners are not counted.
const NEWSLETTER_CLICK_ENDPOINT = 'https://project-zovba.vercel.app/api/newsletter-click';
function trackNewsletterClick() {
  try {
    const q = new URLSearchParams(location.search);
    const source = (q.get('utm_source') || '').toLowerCase();
    const medium = (q.get('utm_medium') || '').toLowerCase();
    const campaign = (q.get('utm_campaign') || '').toLowerCase();
    if (source !== 'newsletter' || medium !== 'email' || !campaign) return;
    const key = 'nlclick:' + campaign;
    try { if (sessionStorage.getItem(key)) return; sessionStorage.setItem(key, '1'); } catch (e) { /* storage blocked: still count */ }
    const m = location.pathname.match(/^\/(de|en)(\/|$)/);
    fetch(NEWSLETTER_CLICK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source, medium, campaign,
        content: (q.get('utm_content') || '').toLowerCase() || undefined,
        language: m ? m[1] : (document.documentElement.lang || 'de').slice(0, 2),
        path: location.pathname
      }),
      keepalive: true
    }).catch(() => {});
  } catch (e) { /* tracking must never break the page */ }
}

document.addEventListener('DOMContentLoaded', () => {
  setupInsightsSchedule(); // before the page is revealed, so nothing flashes
  setupScheduledPost();
  applyDevmodeLinks();
  trackNewsletterClick();
  setupBlogSubscribe(); // independent of translations, works even if they fail to load
  setupTopicNav();
  setupBlogSearch();
  i18n.init().then(() => {
    if (typeof cookieConsent !== 'undefined') cookieConsent.init();

    initLanguagePicker();

    setupMobileMenu();
    setupScrollAnimations();
    setupPackageTabs();
    setupPackageAccordion();
    setupFaqAccordion();
    setupExamplesCarousel();
    setupPackageRequestButtons();
    setupHeroTaglines();
    updatePackageContent('basis');
    applyDeepLinkedPackage();
    if (typeof initQrDiscount === 'function') initQrDiscount();
    document.documentElement.classList.remove('no-js');

    const requiredFonts = Promise.all([
      document.fonts.load('400 1em "Outfit"'),
      document.fonts.load('400 1em "Cormorant Garamond"'),
      document.fonts.load('italic 400 1em "Cormorant Garamond"')
    ]);

    const safetyTimeout = new Promise(resolve => setTimeout(resolve, 2500));

    Promise.race([requiredFonts, safetyTimeout]).finally(() => {
      document.documentElement.classList.remove("fonts-loading");
    });

    const moreStart = document.getElementById('morestart');
    if (moreStart) {
      moreStart.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('trustsection').scrollIntoView();
      });
    }
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      setInterval(() => {
        registration.update();
      }, 60000);
    }).catch((error) => {
      console.warn('Service Worker registration failed:', error);
    });
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('Service Worker updated');
  });
}