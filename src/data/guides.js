// Guide model:
// id, title, slug, description, thumbnail, videoUrl, duration, category,
// publishedAt, relatedArticles, relatedProducts, relatedINNAContent
//
// No guides have been supplied yet. The array is intentionally empty so the
// UI renders an explicit "coming soon" state rather than fabricated content.

export const GUIDES = [];

export function getGuideBySlug(slug) {
  return GUIDES.find((g) => g.slug === slug);
}
