module.exports = function(eleventyConfig) {
  require('./newsletter-email.cjs').register(eleventyConfig, __dirname);
  // Copy assets (images, etc.) to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("translations");

  // Add a filter to format dates
  eleventyConfig.addFilter("dateFormat", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("dateFormatDE", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Collection: all EN insights sorted by date (newest first)
  eleventyConfig.addCollection("insightsEN", (collection) => {
    return collection
      .getFilteredByGlob("src/en/insights/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Collection: all DE insights sorted by date (newest first)
  eleventyConfig.addCollection("insightsDE", (collection) => {
    return collection
      .getFilteredByGlob("src/de/insights/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Collection: every public page for sitemap.xml (see src/sitemap.njk)
  // Skipped: pages with `sitemap: false`, `noindex: true`, `draft: true`,
  // `eleventyExcludeFromCollections: true`, pages without a URL, non-HTML outputs and SITEMAP_EXCLUDE.
  // <lastmod> comes from front matter `updated`, else `date` (never from file timestamps).
  // Optional front matter `translationKey: some-id` on the EN and DE version of the same page/post
  // adds hreflang alternates for them.
  const SITE_URL = "https://blog.konihaus.ch";
  const SITEMAP_EXCLUDE = [/^\/404(\/|\.html)?$/, /^\/sitemap/, /^\/robots/];
  const toDay = (value) => {
    if (!value) return null;
    const d = value instanceof Date ? value : new Date(value);
    return isNaN(d) ? null : d.toISOString().slice(0, 10);
  };

  // Posts whose publication date + time (front matter `time`, default 07:00, Swiss time)
  // is still in the future at build time are left out of the sitemap. They are added by the
  // first build after their release. Same rule as the scheduling script in blog-post.njk.
  const zurichNow = () => {
    const p = {};
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Zurich", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date()).forEach((x) => { p[x.type] = x.value; });
    return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}`;
  };
  const isUnreleased = (item) => {
    const d = item.data || {};
    if (!d.layout || !/blog-post/.test(d.layout)) return false;
    const day = toDay(d.date || item.date);
    if (!day) return false;
    const m = /^(\d{1,2}):(\d{2})/.exec(String(d.time || ""));
    const at = m && +m[1] < 24 && +m[2] < 60 ? `${m[1].padStart(2, "0")}:${m[2]}` : "07:00";
    return `${day}T${at}` > zurichNow();
  };

  eleventyConfig.addCollection("sitemap", (collection) => {
    const pages = collection.getAll().filter((item) => {
      const d = item.data || {};
      if (!item.url) return false;
      if (d.sitemap === false || d.noindex || d.draft || d.eleventyExcludeFromCollections) return false;
      if (isUnreleased(item)) return false;
      if (!/(\/|\.html)$/.test(item.url)) return false;
      return !SITEMAP_EXCLUDE.some((re) => re.test(item.url));
    });

    const groups = {};
    pages.forEach((item) => {
      const key = item.data.translationKey;
      if (key) (groups[key] = groups[key] || []).push(item);
    });
    const langOf = (item) => item.data.lang || item.data.language || (item.url.match(/^\/(de|en)(\/|$)/) || [])[1];

    return pages
      .map((item) => {
        const group = item.data.translationKey ? groups[item.data.translationKey] : null;
        const alternates = group && group.length > 1
          ? group.map((g) => ({ lang: langOf(g), href: SITE_URL + g.url })).filter((a) => a.lang).sort((x, y) => x.lang.localeCompare(y.lang))
          : [];
        return {
          loc: SITE_URL + item.url,
          lastmod: toDay(item.data.updated || item.data.date),
          alternates,
        };
      })
      .sort((x, y) => x.loc.localeCompare(y.loc));
  });

  // Wrap markdown tables in <div class="table-wrap"> so wide tables scroll
  // sideways on phones (styled in blog-tables.css).
  eleventyConfig.amendLibrary("md", (md) => {
    md.renderer.rules.table_open = () => '<div class="table-wrap"><table>\n';
    md.renderer.rules.table_close = () => '</table></div>\n';
  });

  return {
    dir: {
      input: "src",
      output: "../konihausblog.github.io"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};