import { useEffect } from "react";

const SITE_NAME = "Crowwe";
const DEFAULT_DESCRIPTION =
  "Crowwe is an all-in-one digital ecosystem for African commerce, connecting social communication, digital payments, business tools, and AI.";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Client-side metadata manager. Sets document.title and standard meta tags
 * per route. Note: because this is a CSR Vite app, tags are applied after
 * hydration — for guaranteed crawler/social-scraper visibility of Open Graph
 * tags, pair this with a prerendering or SSR step (e.g. vite-plugin-ssr,
 * or a static prerender pass) before shipping to production.
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
  type = "website",
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMeta("description", description);
    setLink("canonical", `${window.location.origin}${path}`);

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:url", `${window.location.origin}${path}`, "property");
    if (image) setMeta("og:image", image, "property");

    setMeta("twitter:card", image ? "summary_large_image" : "summary");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    if (image) setMeta("twitter:image", image);
  }, [title, description, path, image, type]);

  return null;
}
