/* Blog index: topics, free-text search, date range, reading time, tags, sorting and infinite scroll.
   Works on the cards rendered by src/_includes/insights-browser.njk after scripts.js removed unpublished posts.
   State lives in the URL (?q=&topic=&from=&to=&sort=&rt=&tag=&series=) so filtered views can be shared. */
function initInsightsBrowse() {
  'use strict';
  var root = document.querySelector('[data-insights-browser]');
  if (!root) return;

  var uiNode = document.getElementById('insights-ui');
  var UI = {};
  try { UI = JSON.parse(uiNode.textContent); } catch (e) { /* strings fall back to empty */ }
  var fmt = function (s, vars) { return String(s || '').replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; }); };

  var grid = root.querySelector('#insights-grid');
  var aside = root.querySelector('#insights-aside');
  var backdrop = root.querySelector('.insights-sheet-backdrop');
  var countEl = root.querySelector('.insights-count');
  var activeEl = root.querySelector('.insights-active');
  var emptyEl = root.querySelector('.insights-empty');
  var sentinel = root.querySelector('.insights-sentinel');
  var sentinelText = sentinel.querySelector('.insights-sentinel__text');
  var filterBtn = root.querySelector('.insights-filter-btn');
  var filterN = root.querySelector('.insights-filter-n');
  var applyBtn = root.querySelector('[data-sheet-apply]');
  var subscribeSlot = root.querySelector('.insights-subscribe-slot');
  var topicBtns = [].slice.call(root.querySelectorAll('.insights-topics [data-topic]'));
  var qInputs = [].slice.call(root.querySelectorAll('[data-f="q"],[data-f="q-mobile"]'));
  var sortSel = root.querySelector('[data-f="sort"]');
  var fromIn = root.querySelector('[data-f="from"]');
  var toIn = root.querySelector('[data-f="to"]');

  var STEP = 6;
  var topicLabel = {};
  topicBtns.forEach(function (b) { topicLabel[b.dataset.topic] = b.firstChild.textContent.trim(); });

  var devMode = new URLSearchParams(location.search).get('devmode') === 'super';
  var cards = [].slice.call(grid.querySelectorAll('.insights-card')).filter(function (el) {
    // Safety net on top of setupInsightsSchedule(): never list a post that is not due yet.
    if (devMode || typeof isPostLive !== 'function' || isPostLive(el.dataset.postDate, el.dataset.postTime)) return true;
    el.remove();
    return false;
  }).map(function (el) {
    var d = el.dataset;
    return {
      el: el,
      date: d.postDate,
      stamp: d.postDate + ' ' + (typeof normalizePostTime === 'function' ? normalizePostTime(d.postTime) : '09:00'),
      topic: d.topic || '',
      tags: (d.tags || '').split(',').filter(Boolean),
      min: parseInt(d.reading, 10) || 0,
      series: d.series || '',
      text: d.search || ''
    };
  });

  // Date range: only dates between the first and the newest listed post can be picked.
  (function limitDates() {
    if (!cards.length) return;
    var dates = cards.map(function (c) { return c.date; }).sort();
    [fromIn, toIn].forEach(function (i) { i.min = dates[0]; i.max = dates[dates.length - 1]; });
  })();

  function rtOf(c) { return c.min < 5 ? 'u5' : (c.min <= 8 ? 'mid' : 'o8'); }

  /* ---------- state <-> URL ---------- */
  var state = { q: '', topic: '', sort: 'new', from: '', to: '', rt: [], tag: [], series: [] };
  function readUrl() {
    var p = new URLSearchParams(location.search);
    state.q = (p.get('q') || '').trim();
    state.topic = topicLabel[p.get('topic')] !== undefined ? p.get('topic') : '';
    state.sort = ['new', 'old', 'short'].indexOf(p.get('sort')) >= 0 ? p.get('sort') : 'new';
    var iso = /^\d{4}-\d{2}-\d{2}$/;
    state.from = iso.test(p.get('from') || '') ? p.get('from') : '';
    state.to = iso.test(p.get('to') || '') ? p.get('to') : '';
    if (fromIn.min && state.from && state.from < fromIn.min) state.from = fromIn.min;
    if (toIn.max && state.to && state.to > toIn.max) state.to = toIn.max;
    ['rt', 'tag', 'series'].forEach(function (k) { state[k] = (p.get(k) || '').split(',').filter(Boolean); });
  }
  function writeUrl() {
    var p = new URLSearchParams(location.search);
    ['q', 'topic', 'sort', 'from', 'to', 'rt', 'tag', 'series'].forEach(function (k) { p.delete(k); });
    if (state.q) p.set('q', state.q);
    if (state.topic) p.set('topic', state.topic);
    if (state.sort !== 'new') p.set('sort', state.sort);
    if (state.from) p.set('from', state.from);
    if (state.to) p.set('to', state.to);
    ['rt', 'tag', 'series'].forEach(function (k) { if (state[k].length) p.set(k, state[k].join(',')); });
    var qs = p.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  }

  /* ---------- facets built from the data ---------- */
  var seriesCount = {}, tagCount = {};
  cards.forEach(function (c) {
    if (c.series) seriesCount[c.series] = (seriesCount[c.series] || 0) + 1;
    c.tags.forEach(function (t) { tagCount[t] = (tagCount[t] || 0) + 1; });
  });
  topicBtns.forEach(function (b) {
    var n = b.dataset.topic ? cards.filter(function (c) { return c.topic === b.dataset.topic; }).length : cards.length;
    b.querySelector('[data-count]').textContent = n;
    if (b.dataset.topic && !n) b.hidden = true;
  });
  ['u5', 'mid', 'o8'].forEach(function (k) {
    var el = root.querySelector('[data-rtcount="' + k + '"]');
    if (el) el.textContent = cards.filter(function (c) { return rtOf(c) === k; }).length;
  });
  (function buildSeries() {
    var names = Object.keys(seriesCount);
    var facet = root.querySelector('[data-facet="series"]');
    if (!names.length || !facet) return;
    facet.hidden = false;
    facet.querySelector('.insights-checks').innerHTML = names.map(function (n) {
      return '<label class="insights-check"><input type="checkbox" data-series="' + escAttr(n) + '"><i></i>' + escHtml(n) + '<span>' + seriesCount[n] + '</span></label>';
    }).join('');
  })();
  (function buildTags() {
    var facet = root.querySelector('[data-facet="tags"]');
    // every tag of every post is listed (most used first)
    var names = Object.keys(tagCount)
      .sort(function (a, b) { return tagCount[b] - tagCount[a] || a.localeCompare(b); });
    if (!names.length || !facet) return;
    facet.hidden = false;
    facet.querySelector('.insights-tags').innerHTML = names.map(function (t) {
      return '<button type="button" class="insights-chip insights-chip--sm" data-tag="' + escAttr(t) + '" aria-pressed="false">' + escHtml(t) + '</button>';
    }).join('');
  })();

  function escHtml(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function escAttr(s) { return escHtml(s); }

  /* ---------- filtering ---------- */
  function matches(c) {
    if (state.topic && c.topic !== state.topic) return false;
    if (state.from && c.date < state.from) return false;
    if (state.to && c.date > state.to) return false;
    if (state.rt.length && state.rt.indexOf(rtOf(c)) < 0) return false;
    if (state.tag.length && !state.tag.every(function (t) { return c.tags.indexOf(t) >= 0; })) return false;
    if (state.series.length && state.series.indexOf(c.series) < 0) return false;
    if (state.q) {
      var toks = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      if (!toks.every(function (t) { return c.text.indexOf(t) >= 0; })) return false;
    }
    return true;
  }
  function sorter() {
    if (state.sort === 'old') return function (a, b) { return a.stamp < b.stamp ? -1 : 1; };
    if (state.sort === 'short') return function (a, b) { return a.min - b.min || (a.stamp < b.stamp ? 1 : -1); };
    return function (a, b) { return a.stamp < b.stamp ? 1 : -1; };
  }
  function isDefault() {
    return !state.q && !state.topic && !state.from && !state.to && !state.rt.length && !state.tag.length && !state.series.length && state.sort === 'new';
  }
  function activeCount() {
    return (state.q ? 1 : 0) + (state.topic ? 1 : 0) + (state.from || state.to ? 1 : 0) + state.rt.length + state.tag.length + state.series.length + (state.sort !== 'new' ? 1 : 0);
  }

  var matched = [], limit = 0, featuredMode = false;

  function apply(resetLimit) {
    matched = cards.filter(matches).sort(sorter());
    featuredMode = isDefault() && matched.length > 0;
    if (resetLimit) limit = (featuredMode ? 1 : 0) + STEP;
    render();
    syncControls();
    writeUrl();
  }

  function render() {
    var frag = document.createDocumentFragment();
    matched.forEach(function (c) { frag.appendChild(c.el); });
    cards.forEach(function (c) { if (matched.indexOf(c) < 0) { c.el.hidden = true; frag.appendChild(c.el); } });
    grid.appendChild(frag);
    var shown = matched.slice(0, limit);
    matched.forEach(function (c, i) {
      c.el.hidden = i >= limit;
      c.el.classList.toggle('is-featured', featuredMode && i === 0);
    });
    // Newsletter box sits after the third visible card (inside the list on the unfiltered landing view, at the end of the articles column when filtered).
    if (subscribeSlot) {
      if (featuredMode && shown.length > 3) { grid.insertBefore(subscribeSlot, shown[3].el); subscribeSlot.hidden = false; }
      else if (featuredMode) { grid.appendChild(subscribeSlot); subscribeSlot.hidden = false; }
      else { grid.parentNode.appendChild(subscribeSlot); subscribeSlot.hidden = false; }
    }
    countEl.textContent = matched.length === 1 ? UI.count1 : fmt(UI.countN, { n: matched.length });
    emptyEl.hidden = matched.length > 0;
    if (subscribeSlot && UI.noResultsText) {
      // No results: the newsletter box explains that the topic is coming and invites suggestions
      var stitle = subscribeSlot.querySelector('.subscribe__title'), stext = subscribeSlot.querySelector('.subscribe__text');
      if (stitle && stext) {
        if (!stitle.dataset.orig) { stitle.dataset.orig = stitle.innerHTML; stext.dataset.orig = stext.innerHTML; }
        var none = matched.length === 0;
        stitle.innerHTML = none ? UI.noResultsTitle : stitle.dataset.orig;
        stext.innerHTML = none ? UI.noResultsText : stext.dataset.orig;
        var cta = subscribeSlot.querySelector('.subscribe__contact');
        if (none && !cta) {
          cta = document.createElement('a');
          cta.className = 'subscribe__contact';
          cta.href = 'https://konihaus.ch/#contact';
          cta.target = '_blank';
          cta.rel = 'noopener';
          stext.parentNode.appendChild(cta);
        }
        if (cta) { cta.textContent = UI.noResultsCta || ''; cta.hidden = !none; }
      }
    }
    var more = shown.length < matched.length;
    sentinel.hidden = !matched.length;
    sentinel.classList.toggle('is-done', !more);
    sentinelText.textContent = more ? UI.loading + ' ' + fmt(UI.showing, { a: shown.length, b: matched.length }) : (matched.length > STEP ? fmt(UI.showing, { a: matched.length, b: matched.length }) : '');
    if (applyBtn) applyBtn.textContent = fmt(UI.show, { n: matched.length });
    renderActive();
  }

  function fmtDate(iso) {
    var p = iso.split('-').map(Number);
    try {
      return new Date(Date.UTC(p[0], p[1] - 1, p[2])).toLocaleDateString(root.dataset.lang === 'de' ? 'de-CH' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
    } catch (e) { return iso; }
  }

  function renderActive() {
    var chips = [];
    if (state.q) chips.push(['q', '“' + state.q + '”']);
    if (state.topic) chips.push(['topic', topicLabel[state.topic]]);
    if (state.from || state.to) chips.push(['date', (state.from ? fmtDate(state.from) : '…') + ' → ' + (state.to ? fmtDate(state.to) : '…')]);
    state.rt.forEach(function (v) { chips.push(['rt:' + v, root.querySelector('[data-rt="' + v + '"]').parentNode.childNodes[2].textContent.trim()]); });
    state.series.forEach(function (v) { chips.push(['series:' + v, v]); });
    state.tag.forEach(function (v) { chips.push(['tag:' + v, '#' + v]); });
    if (state.sort !== 'new') chips.push(['sort', sortSel.options[sortSel.selectedIndex].text]);
    activeEl.hidden = !chips.length;
    activeEl.innerHTML = chips.map(function (c) {
      return '<button type="button" class="insights-chip insights-chip--active" data-remove="' + escAttr(c[0]) + '">' + escHtml(c[1]) + ' <span aria-hidden="true">×</span><span class="visually-hidden">' + escHtml(UI.clear) + '</span></button>';
    }).join('') + (chips.length ? '<button type="button" class="insights-linkbtn" data-clear>' + escHtml(UI.clearAll) + '</button>' : '');
    var n = activeCount();
    filterN.hidden = !n;
    filterN.textContent = n;
  }

  function syncControls() {
    topicBtns.forEach(function (b) {
      var on = b.dataset.topic === state.topic;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    qInputs.forEach(function (i) { if (i !== document.activeElement) i.value = state.q; });
    sortSel.value = state.sort;
    fromIn.value = state.from;
    toIn.value = state.to;
    [].forEach.call(root.querySelectorAll('[data-rt]'), function (i) { i.checked = state.rt.indexOf(i.dataset.rt) >= 0; });
    [].forEach.call(root.querySelectorAll('[data-series]'), function (i) { i.checked = state.series.indexOf(i.dataset.series) >= 0; });
    [].forEach.call(root.querySelectorAll('[data-tag]'), function (b) {
      var on = state.tag.indexOf(b.dataset.tag) >= 0;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    var pr = presetRange();
    [].forEach.call(root.querySelectorAll('[data-preset]'), function (b) { b.classList.toggle('is-on', pr === b.dataset.preset); });
  }

  /* ---------- date presets (Swiss date) ---------- */
  function today() {
    var p = {};
    new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich', year: 'numeric', month: '2-digit', day: '2-digit' })
      .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    return p.year + '-' + p.month + '-' + p.day;
  }
  function daysAgo(n) {
    var t = today().split('-').map(Number);
    var d = new Date(Date.UTC(t[0], t[1] - 1, t[2] - n));
    return d.toISOString().slice(0, 10);
  }
  function presetFrom(v) {
    var f = v === 'year' ? today().slice(0, 4) + '-01-01' : daysAgo(parseInt(v, 10));
    return fromIn.min && f < fromIn.min ? fromIn.min : f;
  }
  function presetRange() {
    if (state.to || !state.from) return '';
    var hit = '';
    ['7', '30', 'year'].forEach(function (v) { if (!hit && state.from === presetFrom(v)) hit = v; });
    return hit;
  }

  /* ---------- events ---------- */
  topicBtns.forEach(function (b) {
    b.addEventListener('click', function () { state.topic = b.dataset.topic; apply(true); });
  });
  var qTimer;
  qInputs.forEach(function (i) {
    i.addEventListener('input', function () {
      clearTimeout(qTimer);
      qTimer = setTimeout(function () { state.q = i.value.trim(); apply(true); }, 140);
    });
    i.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); i.blur(); } });
  });
  sortSel.addEventListener('change', function () { state.sort = sortSel.value; apply(true); });
  fromIn.addEventListener('change', function () { state.from = fromIn.value; apply(true); });
  toIn.addEventListener('change', function () { state.to = toIn.value; apply(true); });
  root.addEventListener('click', function (e) {
    var t = e.target.closest('button, label');
    if (!t) return;
    if (t.dataset.preset) {
      var v = t.dataset.preset;
      var on = presetRange() === v;
      state.to = '';
      state.from = on ? '' : presetFrom(v);
      apply(true);
    } else if (t.dataset.tag) {
      toggle(state.tag, t.dataset.tag); apply(true);
    } else if (t.hasAttribute('data-clear')) {
      state = { q: '', topic: '', sort: 'new', from: '', to: '', rt: [], tag: [], series: [] };
      apply(true);
    } else if (t.dataset.remove) {
      var k = t.dataset.remove.split(':'), key = k[0], val = k.slice(1).join(':');
      if (key === 'q') state.q = '';
      else if (key === 'topic') state.topic = '';
      else if (key === 'date') { state.from = ''; state.to = ''; }
      else if (key === 'sort') state.sort = 'new';
      else toggle(state[key], val);
      apply(true);
    }
  });
  root.addEventListener('change', function (e) {
    var i = e.target;
    if (i.dataset && i.dataset.rt) { toggle(state.rt, i.dataset.rt, i.checked); apply(true); }
    else if (i.dataset && i.dataset.series) { toggle(state.series, i.dataset.series, i.checked); apply(true); }
  });
  function toggle(arr, v, force) {
    var idx = arr.indexOf(v);
    var want = force === undefined ? idx < 0 : force;
    if (want && idx < 0) arr.push(v);
    if (!want && idx >= 0) arr.splice(idx, 1);
  }

  /* ---------- mobile filter sheet ---------- */
  function sheet(open) {
    aside.classList.toggle('is-open', open);
    backdrop.hidden = !open;
    document.body.classList.toggle('insights-sheet-open', open);
    filterBtn.setAttribute('aria-expanded', String(open));
  }
  filterBtn.addEventListener('click', function () { sheet(true); });
  backdrop.addEventListener('click', function () { sheet(false); });
  aside.querySelector('.insights-sheet-close').addEventListener('click', function () { sheet(false); });
  if (applyBtn) applyBtn.addEventListener('click', function () { sheet(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') sheet(false); });

  /* ---------- infinite scroll ---------- */
  function more() {
    if (limit >= matched.length) return;
    limit += STEP;
    render();
    // The sentinel only fires when it enters the viewport; check again in case it is still close.
    requestAnimationFrame(function () {
      if (!sentinel.hidden && limit < matched.length && sentinel.getBoundingClientRect().top < window.innerHeight + 600) more();
    });
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) more();
    }, { rootMargin: '700px 0px' }).observe(sentinel);
  } else {
    limit = cards.length;
  }

  readUrl();
  apply(true);
}

// scripts.js removes unpublished posts in its DOMContentLoaded handler (registered first, so it runs first);
// wait for it. Without ?devmode=super only published posts are ever listed.
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initInsightsBrowse);
else initInsightsBrowse();
