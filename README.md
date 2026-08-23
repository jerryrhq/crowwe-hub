# Crowwe Knowledge Hub

A React + Vite + React Router build of the Crowwe Knowledge Hub, with real, file-based address-bar routing (no hash URLs).

## Stack

- React 18
- Vite 5
- React Router 6 (`BrowserRouter`, real URLs)
- lucide-react for icons
- Plain CSS with a token-based design system (`src/styles/index.css`) — no Tailwind, no UI kit, no unnecessary dependencies

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/platform` | Platform |
| `/articles` | Articles (feed, filterable by category) |
| `/articles/:slug` | Article detail |
| `/guides` | Guides |
| `/guides/:slug` | Guide detail (route is wired up ahead of content — see `src/data/guides.js`) |
| `/inna` | INNA |
| `/contact` | Contact |
| `*` | 404 |

## Project structure

```
src/
  main.jsx          entry point, mounts <BrowserRouter>
  App.jsx            route table + shared layout (Navbar, Footer, search, back-to-top)
  data/               local content models (articles, products, guides, nav)
  lib/
    Seo.jsx           client-side <title>/meta/canonical/OG manager, per route
  components/         Navbar, Footer, SearchOverlay, BackToTop, ReadingProgress,
                      ArticleCard, PlatformPieces (product cards, audience grid,
                      the INNA workflow rail), ui.jsx (Button, Eyebrow, Section, etc.)
  pages/              one file per route
  styles/index.css    CSS custom properties (brand tokens), reset, shared classes
```

## Content model

Articles, products, and guides are plain JS objects in `src/data/`, matching the
shapes described in the original brief (id, slug, title, excerpt, content,
author, category, tags, publishedAt, relatedProducts, relatedGuides,
relatedArticles, seoTitle, seoDescription, seoImage, etc.). This is intentionally
framework-agnostic so it can be swapped for a CMS or Supabase later — the pages
only ever call `getArticleBySlug`, `getGuideBySlug`, and the exported arrays.

**Only supplied Crowwe/INNA information is used.** Where content wasn't supplied
(guides, additional articles), the UI renders an explicit "coming soon" state
rather than invented content. The single article included
(`formalizing-african-small-businesses`) has a placeholder body — the brief
described its structure but not the full original text — flagged both in the
data file and visibly in the UI (`isPlaceholderBody`). Replace it with the real
article text and remove the flag when available.

## Deploying as a real SPA (important)

Because this uses client-side `BrowserRouter`, your host needs to rewrite all
unknown paths back to `index.html` so deep links like `/articles/some-slug`
work on refresh or when shared directly:

- **Netlify**: add a `public/_redirects` file with `/* /index.html 200`
- **Vercel**: add a `vercel.json` rewrite (`{ "source": "/(.*)", "destination": "/" }`)
- **Nginx**: `try_files $uri /index.html;`

## SEO caveat

`src/lib/Seo.jsx` sets `document.title`, meta description, canonical URL, and
Open Graph/Twitter tags per route — but since this is a client-rendered app,
those tags are only present after JavaScript runs. Most modern crawlers handle
this fine, but if you need guaranteed correct previews on platforms with
simpler scrapers (some chat apps, older social scrapers), add a prerendering
step before deploying (e.g. `vite-plugin-ssr`, `vite-plugin-prerender`, or a
build-time static prerender pass) rather than relying on this alone.

## Not implemented on purpose

Per the brief: no backend, no CMS wiring, no fabricated content/partnerships/
statistics, no analytics, no auth. The architecture (data models, route
structure, component boundaries) is built so these can be added later without
restructuring the app.
