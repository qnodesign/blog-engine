module.exports = function(eleventyConfig) {
  // Copy assets (images, etc.) to output
  eleventyConfig.addPassthroughCopy("assets/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("assets/icon-maskable-512.png");
  eleventyConfig.addPassthroughCopy("assets/icon-maskable-192.png");
  eleventyConfig.addPassthroughCopy("assets/icon-512.png");
  eleventyConfig.addPassthroughCopy("assets/icon-192.png");
  eleventyConfig.addPassthroughCopy("assets/favicon_sm.svg");
  eleventyConfig.addPassthroughCopy("assets/favicon.svg");
  eleventyConfig.addPassthroughCopy("assets/insights.css");
  eleventyConfig.addPassthroughCopy("assets/logo.png");
  eleventyConfig.addPassthroughCopy("assets/post.css");
  eleventyConfig.addPassthroughCopy("assets/scripts.js");
  eleventyConfig.addPassthroughCopy("assets/styles.css");
  eleventyConfig.addPassthroughCopy("assets/sw.js");
  eleventyConfig.addPassthroughCopy("fonts");
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