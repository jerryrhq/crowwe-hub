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
    relatedArticles: ["five-apps-costing-nigerians-real-money"],
    seoTitle:
      "Why Formalizing African Small Businesses Takes Simple AI, Not Complicated Software | Crowwe",
    seoDescription:
      "Traditional accounting software asks traders to become accountants first. See how Crowwe's INNA takes a conversational approach instead.",
    seoImage: null,
  },
  {
    id: "2",
    slug: "five-apps-costing-nigerians-real-money",
    title: "Why Jumping Between Five Apps Is Costing Nigerians Real Money",
    excerpt:
      "A single sale in Nigeria can mean juggling a chat app, a banking app, a calculator, and a photo gallery — and every switch between them has a real cost.",
    author: "Jerryrhq",
    category: "Business",
    tags: ["Nigeria", "Technology", "AI", "Productivity", "INNA"],
    publishedAt: "August 17, 2026",
    updatedAt: null,
    readingTime: "3 min read",
    // The original Medium post includes its own hero and screenshot images.
    // Per the brief, external Medium images are not hotlinked in production —
    // add a self-hosted cover image here when one is available.
    coverImage: null,
    // Content below is adapted and paraphrased in our own words from the
    // published source (see sourceUrl), not reproduced verbatim.
    sourceUrl:
      "https://medium.com/@jerryrhq/why-jumping-between-five-apps-is-costing-nigerians-real-money-ipi-group-insights-1009a97ac9c1",
    isPlaceholderBody: false,
    content: [
      { type: "heading", text: "The daily app marathon" },
      {
        type: "paragraph",
        text: "Completing one simple sale in Nigeria can turn into a small ordeal: negotiating with a customer on a messaging app, switching to a banking app that's slow to open, waiting on a network alert to confirm the money landed, doing the math for delivery and product costs in a separate notes or calculator app, then digging through a crowded photo gallery for a proof-of-payment screenshot. What should take seconds stretches into minutes of tapping, loading, and friction.",
      },
      { type: "heading", text: "What all that switching actually costs" },
      {
        type: "paragraph",
        text: "Lost sales and slower deals: speed builds trust in fast-moving commerce, and buyers who are left waiting while a seller hops between apps often lose interest and take their business elsewhere.",
      },
      {
        type: "paragraph",
        text: "Data and storage drain: every standalone app running in the background consumes data on syncs, refreshes, and updates, and running several heavy apps at once can fill up storage and slow a phone down right when it's needed most.",
      },
      {
        type: "paragraph",
        text: "Cash that's hard to track: when sales are noted in chat threads, expenses are on paper, and payment proof is scattered across screenshots, it becomes difficult to know real monthly profit versus operating cost.",
      },
      { type: "heading", text: "One ecosystem instead of five apps" },
      {
        type: "paragraph",
        text: "The fix isn't another app — it's fewer of them. Crowwe brings everyday communication, payments, and business record-keeping into a single, lightweight platform instead of adding one more tool to the pile.",
      },
      { type: "heading", text: "Chat, wallet, and INNA together" },
      {
        type: "paragraph",
        text: "Inside Crowwe, everyday messaging stays fast and mobile-first, customers can pay instantly by scanning a Crowwe Wallet QR code instead of typing account numbers or trading screenshots, and INNA acts as a built-in business assistant — describe what was sold in plain language and INNA can generate an invoice or receipt and track money in, money out, and net balance.",
      },
      { type: "heading", text: "Less switching, more building" },
      {
        type: "paragraph",
        text: "Nobody should have to fight their phone just to stay in touch or close a deal. Bringing conversations, payments, and business admin into one space saves data, saves time, and keeps finances easier to see clearly.",
      },
    ],
    relatedProducts: ["messaging", "wallet", "business-suite"],
    relatedGuides: [],
    relatedArticles: ["formalizing-african-small-businesses"],
    seoTitle: "Why Jumping Between Five Apps Is Costing Nigerians Real Money | Crowwe",
    seoDescription:
      "A single sale in Nigeria can mean juggling a chat app, a banking app, a calculator, and a photo gallery. See how Crowwe collapses that into one platform.",
    seoImage: null,
  },
  {
    id: "3",
    slug: "informal-hustle-to-structured-enterprise",
    title:
      "From Informal Hustle to Structured Enterprise: How Crowwe and Inna AI Are Re-Engineering Africa's MSME Economy",
    excerpt:
      "Africa's MSMEs power most jobs and a huge share of GDP, yet stay locked out of formal credit and institutional trust. See how Crowwe and INNA turn everyday mobile activity into verifiable, financeable enterprise.",
    author: "Jerryrhq", // assumed to match the same byline as the other two pieces — confirm and correct if different
    category: "Business",
    tags: ["MSME", "Africa", "INNA", "Business formalization", "Policy"],
    publishedAt: null, // not stated in the supplied source text — add the real publish date when available
    updatedAt: null,
    readingTime: "5 min read", // estimated from length — replace with the actual figure if you have it
    coverImage: null,
    // Content below is adapted and paraphrased in our own words from the
    // supplied source text, not reproduced verbatim. No sourceUrl was given
    // for this piece — add one if it's published somewhere so it can be linked.
    sourceUrl: null,
    isPlaceholderBody: false,
    content: [
      { type: "heading", text: "Africa's real economic engine" },
      {
        type: "paragraph",
        text: "Africa's commercial backbone isn't found in corporate towers — it's in roadside workshops, open-air markets, family smallholdings, and informal logistics networks. Micro, small, and medium enterprises account for more than 80% of employment and over half of the continent's GDP, and in Nigeria alone there are more than 39 million of them. Yet most of this activity stays informal, without documentation, transaction histories, or visibility to formal lenders.",
      },
      { type: "heading", text: "Connectivity without productivity" },
      {
        type: "paragraph",
        text: "Mobile and smartphone adoption keeps climbing across peri-urban and rural Africa, but most of that new screen time goes toward entertainment and casual social use rather than structured business activity. Real economic transformation depends on turning connectivity into enterprise productivity — which is the gap Crowwe, powered by its embedded assistant INNA, is built to close by combining a business workspace, automation, and digital commerce into one ecosystem.",
      },
      { type: "heading", text: "Where unstructured chat breaks down" },
      {
        type: "paragraph",
        text: "When micro-entrepreneurs run their business purely through ordinary consumer chat apps, the cracks show quickly: orders and payment records end up scattered, cash goes largely unrecorded, invoices and receipts are rarely issued, and without reliable records these businesses stay invisible to banks, institutional buyers, and public support programs.",
      },
      {
        type: "paragraph",
        text: "Crowwe treats everyday conversation as commercial infrastructure rather than just chat — inside the platform, buyers and sellers can transact, track order milestones, issue documentation, and build a verifiable trade history as a byproduct of doing business as usual.",
      },
      { type: "heading", text: "INNA as an equalizer" },
      {
        type: "paragraph",
        text: "Bookkeeping, proposal writing, and business advisory support have historically been available mainly to well-capitalized companies. INNA, the AI assistant built into the Crowwe workspace, gives any business owner on the platform — including in rural and semi-urban areas — on-demand access to that same kind of operational support.",
      },
      { type: "heading", text: "What INNA actually does" },
      {
        type: "paragraph",
        text: "It generates structured invoices, quotes, proposals, and contracts without requiring accounting training; turns daily cash flow into plain-language records of money in and money out; helps draft formal bids, follow-ups, and correspondence so smaller businesses can credibly pursue institutional contracts; and offers context-aware, plain-language guidance on local market conditions and planning.",
      },
      { type: "heading", text: "Turning daily activity into formal standing" },
      {
        type: "paragraph",
        text: "Every invoice and receipt issued through Crowwe becomes a structured digital record, without asking business owners to change how they already work. As those trade histories accumulate, lenders gain enough visibility to assess real creditworthiness — opening up credit that was previously out of reach for unbanked merchants. Verified business profiles and Crowwe Wallet also give an enterprise a commercial identity separate from its owner's personal affairs, a first step toward sustainable formal growth.",
      },
      { type: "heading", text: "Why this matters for policy and governance" },
      {
        type: "paragraph",
        text: "The informal sector has long been a blind spot for subsidies, grants, and interventions that leak or miss their intended recipients because there's no transparent delivery infrastructure. A platform like Crowwe gives public programs a way to route support through verified profiles, gives policymakers aggregated, anonymized visibility into market trends and supply bottlenecks, and lets broader tax participation grow naturally out of business growth rather than being forced through aggressive informal-sector levies.",
      },
      { type: "heading", text: "Toward a more structured economy" },
      {
        type: "paragraph",
        text: "The real measure of Africa's digital future isn't how many people carry a smartphone, but what those phones let them accomplish. By pairing an everyday business workspace with INNA's intelligence, Crowwe gives rural farmers, urban artisans, and growing SMEs alike the tools to build enterprises that are verifiable, financeable, and built to scale.",
      },
    ],
    relatedProducts: ["business-suite", "wallet"],
    relatedGuides: [],
    relatedArticles: ["formalizing-african-small-businesses", "five-apps-costing-nigerians-real-money"],
    seoTitle:
      "From Informal Hustle to Structured Enterprise: How Crowwe and INNA Are Re-Engineering Africa's MSME Economy | Crowwe",
    seoDescription:
      "Africa's MSMEs power most jobs and a huge share of GDP, yet stay locked out of formal credit. See how Crowwe and INNA turn daily mobile activity into verifiable enterprise.",
    seoImage: null,
  },
    {
    id: "4",
    slug: "digital-renaissance-african-commerce",
    title: "The Digital Renaissance of African Commerce: Why Crowwe Is the Operating System for MSMEs",
    excerpt:
      "Nigeria's real economic engine isn't in boardrooms — it's in markets, roadside shops, and agricultural co-ops. IPI Group's Adamu Garba makes the case for Crowwe as the operating system they've been missing.",
    author: "Adamu Garba",
    authorOrg: "IPI Group Limited",
    category: "Insights",
    tags: ["MSME", "Africa", "INNA", "Crowwe Wallet", "Business formalization"],
    publishedAt: "August 27, 2026",
    updatedAt: null,
    readingTime: "5 min read", // estimated from length — replace with the actual figure if you have it
    coverImage: null,
    // Content below is adapted and paraphrased in our own words from the
    // uploaded IPI Group Limited PDF, not reproduced verbatim. It was
    // supplied as a PDF rather than a published page, so there's no
    // sourceUrl — add one if/when this piece is published somewhere.
    sourceUrl: null,
    isPlaceholderBody: false,
    content: [
      { type: "heading", text: "MSMEs are Africa's real economic engine" },
      { type: "paragraph", text: "Africa's economic story usually gets told through foreign investment, mega-infrastructure, and commodity exports. But the real engine is in the markets, roadside shops, tech hubs, and agricultural cooperatives — micro, small, and medium enterprises make up the vast majority of businesses and jobs across the continent. The paradox is that this most critical segment of the economy is also the most technologically underserved, held back for decades by high barriers to entry, complex regulation, and a lack of tools actually built for African conditions. Homegrown platforms built for local realities, rather than imported fragmented software, are what's starting to change that — and it's where Crowwe positions itself as an operating system for the African MSME, not just another app." },
      { type: "heading", text: "The daily fragmentation problem" },
      { type: "paragraph", text: "A typical Nigerian business owner juggles a patchwork of disconnected tools: a foreign chat app to talk with customers, a separate banking app to verify payments (often fighting network downtime), a paper notebook for inventory, and maybe a basic word processor for the occasional invoice. That fragmentation causes lost records, delayed payments, unprofessional customer interactions, and stalled growth — and it leaves the business invisible to the formal financial system, without a verifiable digital footprint to access credit or build institutional trust. Global platforms have largely ignored this friction because they were built for markets with decades of established digital and business infrastructure; Africa needs technology that meets informal business owners where they actually are." },
      { type: "heading", text: "One platform instead of a patchwork" },
      { type: "paragraph", text: "Crowwe was built to remove that fragmentation by unifying communication, commerce, productivity, and payments into a single platform — acting as a catalyst toward formalization rather than another disconnected tool." },
      { type: "heading", text: "Professional presentation from day one" },
      { type: "paragraph", text: "The move from informal trading to a formal business often starts with presentation. Crowwe lets even the smallest vendor generate clean, standardized invoices, estimates, and receipts straight from a phone. A professionally formatted digital invoice builds trust in a way a handwritten note can't — a first step toward commanding better pricing and winning larger business-to-business contracts." },
      { type: "heading", text: "Payments without the friction" },
      { type: "paragraph", text: "Cash flow is the heartbeat of any business, and payment reliability matters most of all. The Crowwe Wallet is built into the same environment where business owners are already negotiating with customers, so requesting and receiving payment doesn't mean stepping away to check a bank balance or wait on a transfer. That keeps transactions fast and secure while bringing unbanked and underbanked users into a more structured financial environment." },
      { type: "heading", text: "AI support for the everyday entrepreneur" },
      { type: "paragraph", text: "Through INNA, Crowwe gives business owners access to administrative support they might not otherwise be able to afford — drafting professional proposals, summarizing lengthy documents, translating communications for cross-border trade, and turning messy notes into organized inventory lists. That frees the entrepreneur to focus on relationships and closing deals instead of paperwork." },
      { type: "heading", text: "A digital bridge across sectors" },
      { type: "paragraph", text: "Consider an agricultural supply chain: a farmer in a rural area can use Crowwe to reach a commodity aggregator in a major city directly, share photos of the harvest, negotiate terms, generate an instant quote, and get paid through Crowwe Wallet — all without leaving the app. That direct line cuts out predatory middlemen, helps ensure fairer prices, and speeds up trade, functioning as digital infrastructure alongside physical roads and bridges." },
      { type: "heading", text: "What formalization means for the wider economy" },
      { type: "paragraph", text: "As businesses run their day-to-day operations through Crowwe, they generate a structured record of cash flow, sales history, and customers as a natural byproduct. With that kind of record, businesses move from being unscorable by traditional banks to becoming real candidates for micro-lending, grants, and institutional investment — and as they grow, they hire more people and buy more locally, strengthening the wider economy. Keeping the ecosystem homegrown also keeps the data, transaction fees, and technology development on the continent." },
      { type: "heading", text: "Built for the African reality" },
      { type: "paragraph", text: "African commerce's future is digital, but only platforms that understand local context, work well on low bandwidth, and stay focused on real problems will get businesses there. By bringing chat, professional documentation, AI productivity, and payments together in one place, Crowwe is positioned as exactly that kind of platform — built to help the next chapter of Africa's economic story get written on its own terms." },
    ],
    relatedProducts: ["messaging", "wallet", "business-suite"],
    relatedGuides: [],
    relatedArticles: ["formalizing-african-small-businesses", "informal-hustle-to-structured-enterprise"],
    seoTitle: "The Digital Renaissance of African Commerce: Why Crowwe Is the Operating System for MSMEs | Crowwe",
    seoDescription:
      "IPI Group's Adamu Garba makes the case for Crowwe as a homegrown operating system for African MSMEs, unifying chat, payments, documentation, and AI.",
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