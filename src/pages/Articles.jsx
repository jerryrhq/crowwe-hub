import { useState } from "react";
import Seo from "../lib/Seo";
import { Eyebrow, Section } from "../components/ui";
import { ARTICLES } from "../data/articles";
import { CATEGORIES } from "../data/nav";
import { ArticleRow } from "../components/ArticleCard";

export default function Articles() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);

  return (
    <>
      <Seo
        title="Articles"
        description="Practical, problem-first writing on African business formalization, technology, and INNA — Crowwe's knowledge hub."
        path="/articles"
      />
      <Section style={{ paddingTop: 56 }}>
        <Eyebrow>Knowledge hub</Eyebrow>
        <h1 style={{ fontSize: 34, fontWeight: 800, color: "var(--dark)", letterSpacing: "-0.01em", marginBottom: 24 }}>
          Articles
        </h1>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {["All", ...CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`category-pill ${cat === c ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "var(--faint)", fontSize: 14 }}>No articles in this category yet.</p>
        )}
        <div>
          {filtered.map((a) => (
            <ArticleRow key={a.slug} article={a} />
          ))}
        </div>
        <p style={{ fontSize: 14, color: "var(--faint)", padding: "22px 0 0" }}>More Crowwe articles coming soon.</p>
      </Section>
    </>
  );
}
