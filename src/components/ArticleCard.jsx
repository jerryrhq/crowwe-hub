import { Link } from "react-router-dom";
import { FileText, Clock } from "lucide-react";

export function ArticleRow({ article }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      style={{
        display: "flex",
        gap: 18,
        width: "100%",
        textAlign: "left",
        textDecoration: "none",
        borderBottom: "1px solid var(--line)",
        padding: "22px 0",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: 92,
          height: 92,
          borderRadius: 12,
          background: "var(--blue-soft)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FileText size={26} color="var(--blue)" />
      </div>
      <div style={{ minWidth: 0 }}>
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            color: "var(--blue)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {article.category}
        </span>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--dark)", margin: "6px 0 6px", lineHeight: 1.3 }}>
          {article.title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5, margin: "0 0 8px" }}>
          {article.excerpt}
        </p>
        <div style={{ display: "flex", gap: 14, fontSize: 12.5, color: "var(--faint)", alignItems: "center" }}>
          <span>{article.author}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Clock size={12} /> {article.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedArticleCard({ article }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: 16,
        padding: 28,
        textDecoration: "none",
      }}
    >
      <span
        style={{
          fontSize: 11.5,
          fontWeight: 700,
          color: "var(--blue)",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {article.category} · Featured
      </span>
      <h3
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: "var(--dark)",
          margin: "10px 0 10px",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        {article.title}
      </h3>
      <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 14, maxWidth: 640 }}>
        {article.excerpt}
      </p>
      <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--faint)" }}>
        <span>{article.author}</span>
        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Clock size={13} /> {article.readingTime}
        </span>
      </div>
    </Link>
  );
}
