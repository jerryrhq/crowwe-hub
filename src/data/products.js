// Product model:
// id, name, slug, description, capabilities, status, relatedArticles, relatedGuides
// Only supplied information is used here — nothing invented.

export const PRODUCTS = [
  {
    id: "messaging",
    slug: "messaging",
    name: "Crowwe Social & Communication",
    icon: "MessageCircle",
    status: "Live in production",
    purpose:
      "Reliable, low-latency rich-media communication for individuals, groups, communities, and commercial organizations.",
    capabilities: [
      "Direct messaging",
      "Rich media transfer",
      "Broadcast channels",
      "Group spaces",
      "Audio/video calls",
    ],
    benefits: [
      "Reliable communication",
      "Low bandwidth consumption",
      "Integration with payments",
      "Integration with AI",
    ],
    relatedArticles: ["formalizing-african-small-businesses"],
    relatedGuides: [],
  },
  {
    id: "wallet",
    slug: "wallet",
    name: "Crowwe Wallet & Payments",
    icon: "Wallet",
    status: "Live in production",
    purpose:
      "Instant and verifiable P2P and business-to-consumer financial settlement.",
    capabilities: [
      "Digital wallet",
      "P2P transfers",
      "QR payments",
      "Transaction records",
      "Payment receipts",
    ],
    workflow: [
      "Merchant issues a digital invoice containing a Crowwe QR code.",
      "Customer scans the QR code.",
      "Customer authorizes payment.",
      "Both parties receive confirmation.",
    ],
    relatedArticles: ["formalizing-african-small-businesses"],
    relatedGuides: [],
  },
  {
    id: "business-suite",
    slug: "business-suite",
    name: "Crowwe Business Suite",
    icon: "Briefcase",
    status: "Live in production",
    purpose: "Foundational digital business tools for micro and small businesses.",
    capabilities: [
      "Business profile",
      "Product catalogs",
      "Sales recording",
      "Order status management",
      "Digital receipts",
    ],
    relatedArticles: ["formalizing-african-small-businesses"],
    relatedGuides: [],
  },
];

export const ROADMAP = [
  { name: "Merchant Developer APIs", status: "Roadmap / in development" },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
