import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { ARTICLES } from "../data/articles";

const PAGES = [
  { title: "About Crowwe", path: "/about" },
  { title: "Platform", path: "/platform" },
  { title: "INNA", path: "/inna" },
  { title: "Guides", path: "/guides" },
  { title: "Contact", path: "/contact" },
];

export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQ("");
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  if (!open) return null;

  const query = q.trim().toLowerCase();
  const results =
    query.length === 0
      ? []
      : [
          ...ARTICLES.filter((a) => a.title.toLowerCase().includes(query)).map((a) => ({
            type: "Article",
            title: a.title,
            path: `/articles/${a.slug}`,
          })),
          ...PAGES.filter((p) => p.title.toLowerCase().includes(query)).map((p) => ({
            type: "Page",
            title: p.title,
            path: p.path,
          })),
        ];

  const goTo = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 70,
        background: "rgba(17,27,33,0.55)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "10vh 16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 560,
          background: "var(--surface)",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 18px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <Search size={18} color="var(--muted)" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
            placeholder="Search Crowwe..."
            aria-label="Search Crowwe"
            style={{ flex: 1, border: "none", outline: "none", fontSize: 16, color: "var(--ink)" }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <X size={18} color="var(--muted)" />
          </button>
        </div>
        <div style={{ maxHeight: 320, overflowY: "auto" }}>
          {query.length === 0 && (
            <p style={{ padding: 18, color: "var(--faint)", fontSize: 14 }}>
              Try "INNA", "Wallet", or "formalizing".
            </p>
          )}
          {query.length > 0 && results.length === 0 && (
            <p style={{ padding: 18, color: "var(--faint)", fontSize: 14 }}>
              No results yet — more content is on the way.
            </p>
          )}
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => goTo(r.path)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "12px 18px",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--line)",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--blue)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {r.type}
              </span>
              <div style={{ fontSize: 15, color: "var(--ink)", fontWeight: 600, marginTop: 2 }}>{r.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
