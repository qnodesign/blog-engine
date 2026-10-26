// UI strings and topic labels for the blog navigation, search and filters (EN + DE).
// Topics are the existing `category` front matter values; the order here is the display order.
module.exports = {
  en: {
    topicOrder: ["technology", "guide", "safety", "energy", "privacy", "konihaus", "news"],
    topics: {
      technology: "Technology", guide: "Guides", safety: "Safety", energy: "Energy",
      privacy: "Privacy", konihaus: "Konihaus", news: "News"
    },
    nav: { latest: "Latest", topics: "Topics", search: "Search", konihaus: "Konihaus", allArticles: "All articles", company: "Company", service: "Service" },
    eyebrow: "Konihaus Journal",
    titleHtml: "Smart home <em>made personal</em>.",
    intro: "Notes on privacy, quality and everyday life with a smart home that stays personal, private and open.",
    readMore: "Read article",
    byline: "By Koni",
    newBadge: "New on the blog",
    scheduled: "Scheduled",
    all: "All",
    ui: {
      searchPlaceholder: "Search articles",
      searchAria: "Search articles",
      sort: "Sort", newest: "Newest first", oldest: "Oldest first", shortest: "Shortest read",
      dateRange: "Date range", from: "From", to: "To",
      last7: "Last 7 days", last30: "Last 30 days", thisYear: "This year",
      series: "Series", readingTime: "Reading time", under5: "Under 5 min", mid: "5 to 8 min", over8: "8 min or more",
      tags: "Tags", topic: "Topic",
      filterSort: "Filter and sort", clearAll: "Clear all", clear: "Clear filters", show: "Show {n} articles",
      count1: "1 article", countN: "{n} articles", filteredBy: "Filtered by",
      loading: "Loading more articles…", showing: "Showing {a} of {b}",
      empty: "No articles match. Try fewer filters or another word.",
      noResultsTitle: "Nothing here <em>yet.</em>",
      noResultsText: "No articles on this topic yet, but no problem: I will write about it in the future. Sign up to get an email when it is published. Is there a topic you would like me to cover?",
      noResultsCta: "Get in touch",
      searchLabel: "Search", close: "Close",
      seeAll: "See all results for \"{q}\"", articles: "Articles", topicsLabel: "Topics",
      noResults: "No results for \"{q}\".", hint: "↑ ↓ to move · Enter to open · Esc to close",
      typeToSearch: "Type to search all articles.", minRead: "min read"
    }
  },
  de: {
    topicOrder: ["technik", "ratgeber", "sicherheit", "energie", "datenschutz", "konihaus", "news"],
    topics: {
      technik: "Technik", ratgeber: "Ratgeber", sicherheit: "Sicherheit", energie: "Energie",
      datenschutz: "Datenschutz", konihaus: "Konihaus", news: "News"
    },
    nav: { latest: "Neueste", topics: "Themen", search: "Suche", konihaus: "Konihaus", allArticles: "Alle Beiträge", company: "Unternehmen", service: "Service" },
    eyebrow: "Konihaus Journal",
    titleHtml: "Smart Home, <em>persönlich</em> gedacht.",
    intro: "Gedanken zu Datenschutz, Qualität und Alltag mit einem Smart Home, das persönlich, privat und offen bleibt.",
    readMore: "Artikel lesen",
    byline: "Von Koni",
    newBadge: "Neu im Blog",
    scheduled: "Geplant",
    all: "Alle",
    ui: {
      searchPlaceholder: "Beiträge durchsuchen",
      searchAria: "Beiträge durchsuchen",
      sort: "Sortierung", newest: "Neueste zuerst", oldest: "Älteste zuerst", shortest: "Kürzeste Lesezeit",
      dateRange: "Zeitraum", from: "Von", to: "Bis",
      last7: "Letzte 7 Tage", last30: "Letzte 30 Tage", thisYear: "Dieses Jahr",
      series: "Serie", readingTime: "Lesezeit", under5: "Unter 5 Min.", mid: "5 bis 8 Min.", over8: "8 Min. oder mehr",
      tags: "Stichwörter", topic: "Thema",
      filterSort: "Filtern und sortieren", clearAll: "Alles löschen", clear: "Filter löschen", show: "{n} Beiträge anzeigen",
      count1: "1 Beitrag", countN: "{n} Beiträge", filteredBy: "Gefiltert nach",
      loading: "Weitere Beiträge werden geladen…", showing: "{a} von {b} angezeigt",
      empty: "Keine passenden Beiträge. Versuchen Sie weniger Filter oder ein anderes Wort.",
      noResultsTitle: "Hier ist noch <em>nichts.</em>",
      noResultsText: "Zu diesem Thema gibt es noch keine Artikel, aber kein Problem: Ich werde künftig darüber schreiben. Melden Sie sich an, dann erhalten Sie eine E-Mail, sobald er erscheint. Wünschen Sie sich ein Thema?",
      noResultsCta: "Schreiben Sie mir",
      searchLabel: "Suche", close: "Schliessen",
      seeAll: "Alle Ergebnisse für «{q}»", articles: "Beiträge", topicsLabel: "Themen",
      noResults: "Keine Ergebnisse für «{q}».", hint: "↑ ↓ zum Wählen · Enter zum Öffnen · Esc zum Schliessen",
      typeToSearch: "Tippen Sie, um alle Beiträge zu durchsuchen.", minRead: "Min. Lesezeit"
    }
  }
};
