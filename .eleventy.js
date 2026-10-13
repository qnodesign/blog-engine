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

  eleventyConfig.addCollection("sitemap", (collection) => {
    const pages = collection.getAll().filter((item) => {
      const d = item.data || {};
      if (!item.url) return false;
      if (d.sitemap === false || d.noindex || d.draft || d.eleventyExcludeFromCollections) return false;
      if (!/(\/|\.html)$/.test(item.url)) return false;
      return !SITEMAP_EXCLUDE.some((re) => re.test(item.url));
    });

    const groups = {};
    pages.forEach((item) => {
      const key = item.data.translationKey;
      if (key) (groups[key] = groups[key] || []).push(item);
    });
    const langOf = (item) => item.data.lang || (item.url.match(/^\/(de|en)(\/|$)/) || [])[1];

    return pages
      .map((item) => {
        const group = item.data.translationKey ? groups[item.data.translationKey] : null;
        const alternates = group && group.length > 1
          ? group.map((g) => ({ lang: langOf(g), href: SITE_URL + g.url })).filter((a) => a.lang)
          : [];
        return {
          loc: SITE_URL + item.url,
          lastmod: toDay(item.data.updated || item.data.date),
          alternates,
        };
      })
      .sort((x, y) => x.loc.localeCompare(y.loc));
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