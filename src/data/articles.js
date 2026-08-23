// Article model:
// id, title, slug, excerpt, content, coverImage, author, category, tags,
// publishedAt, updatedAt, readingTime, relatedProducts, relatedGuides,
// relatedArticles, seoTitle, seoDescription, seoImage

export const ARTICLES = [
  {
    id: "1",
    slug: "formalizing-african-small-businesses",
    title:
      "Why Formalizing African Small Businesses Takes Simple AI, Not Complicated Software",
    excerpt:
      "Traditional accounting software asks traders to become accountants first. A conversational approach asks them to just describe their day.",
    author: "Jerryrhq",
    category: "Business",
    tags: [
      "INNA",
      "Crowwe Business Suite",
      "Crowwe Wallet",
      "Business formalization",
      "AI",
    ],
    publishedAt: "2025",
    updatedAt: null,
    readingTime: "3 min read",
    coverImage: null,
    // The original source article text was referenced in the brief but not
    // supplied in full, so this body is a clearly-marked placeholder that
    // follows the described narrative structure only. Replace before publishing.
    isPlaceholderBody: true,
    content: [
      { type: "heading", text: "The problem" },
      {
        type: "paragraph",
        text: "Most small businesses across African markets run on memory, notebooks, and scattered chat threads. Sales happen fast, in person, over the counter — and the record of what happened rarely survives the day.",
      },
      { type: "heading", text: "Why that matters" },
      {
        type: "paragraph",
        text: "Without consistent records, it becomes difficult to access formal credit, respond to a corporate procurement request, or simply know how the business is actually performing month to month.",
      },
      { type: "heading", text: "Why traditional software struggles" },
      {
        type: "paragraph",
        text: "Conventional accounting tools were built for people who already think like accountants. They expect double-entry logic, desktop-first workflows, and time that most traders don't have between customers.",
      },
      { type: "heading", text: "A conversational alternative" },
      {
        type: "paragraph",
        text: "Crowwe's approach is to meet traders where they already are — inside a chat. INNA, Crowwe's AI layer, turns a plain description of what was sold into a structured invoice, quote, or bookkeeping entry, without asking anyone to learn new software.",
      },
      { type: "heading", text: "What this looks like in practice" },
      {
        type: "paragraph",
        text: "A trader messages INNA what happened: what was sold, to whom, and for how much. INNA can turn that into an invoice or quote, and Crowwe Wallet's QR payment structure can be attached so the customer can pay directly from the document.",
      },
      { type: "heading", text: "Toward formalization" },
      {
        type: "paragraph",
        text: "None of this replaces an accountant or a lawyer. But a consistent trail of invoices, quotes, and receipts is a meaningful first step from informal trade toward a more structured, credible business.",
      },
    ],
    relatedProducts: ["business-suite", "wallet"],
    relatedGuides: [],
    relatedArticles: [],
    seoTitle:
      "Why Formalizing African Small Businesses Takes Simple AI, Not Complicated Software | Crowwe",
    seoDescription:
      "Traditional accounting software asks traders to become accountants first. See how Crowwe's INNA takes a conversational approach instead.",
    seoImage: null,
  },
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category) {
  if (!category || category === "All") return ARTICLES;
  return ARTICLES.filter((a) => a.category === category);
}
