import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, ArrowRight } from "lucide-react";
import Seo from "../lib/Seo";
import { Section, Button } from "../components/ui";
import ReadingProgress from "../components/ReadingProgress";
import { getArticleBySlug } from "../data/articles";
import NotFound from "./NotFound";

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getArticleBySlug(slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <NotFound />;

  const copyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <Seo
        title={article.seoTitle || article.title}
        description={article.seoDescription || article.excerpt}
        path={`/articles/${article.slug}`}
        image={article.seoImage}
        type="article"
      />
      <ReadingProgress />
      <Section style={{ paddingTop: 40 }}>
        <div className="section-narrow" style={{ maxWidth: 700 }}>
          <button
            onClick={() => navigate("/articles")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "none",
              border: "none",
              color: "var(--muted)",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: 20,
              padding: 0,
            }}
          >
            <ArrowLeft size={15} /> Back to Articles
          </button>

          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {article.category}
          </span>
          <h1
            style={{
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 800,
              color: "var(--dark)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "10px 0 14px",
            }}
          >
            {article.title}
          </h1>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, marginBottom: 18 }}>{article.excerpt}</p>

          <div
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              fontSize: 13.5,
              color: "var(--faint)",
              paddingBottom: 22,
              borderBottom: "1px solid var(--line)",
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--ink)" }}>{article.author}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Calendar size={13} /> {article.publishedAt}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={13} /> {article.readingTime}
            </span>
            <button
              onClick={copyLink}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "none",
                border: "none",
                color: "var(--blue)",
                fontWeight: 700,
                cursor: "pointer",
                padding: 0,
              }}
            >
              <Share2 size={13} /> {copied ? "Copied" : "Share"}
            </button>
          </div>

          {article.isPlaceholderBody && (
            <div
              style={{
                background: "var(--blue-soft)",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 12.5,
                color: "var(--blue-deep)",
                marginBottom: 24,
              }}
            >
              Placeholder content — replace with the original article text before publishing.
            </div>
          )}

          <article style={{ fontSize: 17, color: "var(--ink)", lineHeight: 1.8 }}>
            {article.content.map((block, i) =>
              block.type === "heading" ? (
                <h2 key={i} style={{ fontSize: 21, fontWeight: 800, color: "var(--dark)", margin: "28px 0 10px" }}>
                  {block.text}
                </h2>
              ) : (
                <p key={i} style={{ margin: "0 0 18px" }}>
                  {block.text}
                </p>
              )
            )}
          </article>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "32px 0" }}>
            {article.tags.map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>

          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button onClick={() => navigate("/inna")} variant="outline" icon={Sparkles}>
              Related: INNA
            </Button>
            <Button onClick={() => navigate("/platform")} variant="outline" icon={ArrowRight}>
              Related: Crowwe Business Suite
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
