import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, PlayCircle, Mail } from "lucide-react";
import Seo from "../lib/Seo";
import { Eyebrow, Section, Button, LinkArrow } from "../components/ui";
import { PRODUCTS } from "../data/products";
import { ARTICLES } from "../data/articles";
import { ProductTeaserCard } from "../components/PlatformPieces";
import { FeaturedArticleCard } from "../components/ArticleCard";

export default function Home() {
  const navigate = useNavigate();
  const featured = ARTICLES[0];

  return (
    <>
      <Seo
        title="Communication. Commerce. Payments. Intelligence."
        description="Crowwe is an all-in-one digital ecosystem for African commerce, connecting communication, payments, and AI-powered business tools."
        path="/"
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, var(--blue-soft) 0%, var(--white) 100%)",
          padding: "84px 20px 64px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow>The Crowwe ecosystem</Eyebrow>
          <h1
            style={{
              fontSize: "clamp(32px, 5.2vw, 52px)",
              fontWeight: 800,
              color: "var(--dark)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
            }}
          >
            Communication. Commerce. Payments. Intelligence.
          </h1>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.6, maxWidth: 620, margin: "0 auto 32px" }}>
            Crowwe is an all-in-one digital ecosystem built for African commerce — connecting how people talk, trade,
            and get paid inside a single, unified platform.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button onClick={() => navigate("/platform")} icon={ArrowRight}>
              Explore Crowwe
            </Button>
            <Button onClick={() => navigate("/inna")} variant="outline" icon={Sparkles}>
              Discover INNA
            </Button>
          </div>


 <a href="https://play.google.com/store/apps/details?id=com.crowwe.app"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "inline-block", marginTop: 24 }}
>
  <img
    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    alt="Get it on Google Play"
    style={{ height: 96, width: "auto" }}
  />
</a>
        </div>
      </section>

      {/* About teaser */}
      <Section>
        <Eyebrow>What is Crowwe?</Eyebrow>
        <h2
          style={{
            fontSize: 30,
            fontWeight: 800,
            color: "var(--dark)",
            letterSpacing: "-0.01em",
            marginBottom: 16,
            maxWidth: 640,
          }}
        >
          One ecosystem for social connection, commerce, and financial settlement.
        </h2>
        <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, maxWidth: 680, marginBottom: 8 }}>
          Crowwe connects social communication, commerce, digital payments, and intelligent business tools in one
          place — so people can chat, send money, and stay informed, while businesses get real digital infrastructure
          to invoice, manage records, and formalize their operations.
        </p>
        <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, maxWidth: 680, marginBottom: 24 }}>
          It exists because African merchants and consumers are often stretched across disconnected apps for
          messaging, payments, discovery, and manual record keeping. Crowwe collapses that distance into a single
          ecosystem.
        </p>
        <LinkArrow onClick={() => navigate("/about")} icon={ArrowRight}>
          Learn about Crowwe
        </LinkArrow>
      </Section>

      {/* Ecosystem strip */}
      <Section bg="var(--offwhite)">
        <Eyebrow>The ecosystem, at a glance</Eyebrow>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--dark)", marginBottom: 28, letterSpacing: "-0.01em" }}>
          What Crowwe actually does
        </h2>
        <div className="grid-auto">
          {PRODUCTS.map((p) => (
            <ProductTeaserCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* INNA teaser */}
      <Section>
        <div className="grid-2" style={{ alignItems: "center" }}>
          <div>
            <Eyebrow>Introducing INNA</Eyebrow>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--dark)", marginBottom: 14, letterSpacing: "-0.01em" }}>
              Crowwe's AI intelligence and productivity layer.
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
              INNA works as an executive assistant, business workflow assistant, document drafter, and research
              assistant — turning a plain description of what happened into a structured invoice, quote, or
              proposal.
            </p>
            <Button onClick={() => navigate("/inna")} icon={Sparkles}>
              Discover INNA
            </Button>
          </div>
          <div style={{ background: "var(--dark)", borderRadius: 16, padding: 28, color: "white" }}>
            {["Context", "Understand", "Assist", "Produce"].map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0" }}>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--blue)",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured articles */}
      <Section bg="var(--offwhite)">
        <Eyebrow>From the knowledge hub</Eyebrow>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--dark)", marginBottom: 24, letterSpacing: "-0.01em" }}>
          Articles
        </h2>
        {featured && <FeaturedArticleCard article={featured} />}
        <p style={{ fontSize: 14, color: "var(--faint)", padding: "18px 0", borderTop: "1px dashed var(--line)", marginTop: 20 }}>
          More Crowwe articles coming soon.
        </p>
        <LinkArrow onClick={() => navigate("/articles")} icon={ArrowRight}>
          Read all articles
        </LinkArrow>
      </Section>

      {/* Featured guides */}
      <Section>
        <Eyebrow>Learn the platform</Eyebrow>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--dark)", marginBottom: 20, letterSpacing: "-0.01em" }}>
          Guides
        </h2>
        <div
          style={{
            border: "1px dashed var(--line)",
            borderRadius: 14,
            padding: 32,
            textAlign: "center",
            background: "var(--offwhite)",
          }}
        >
          <PlayCircle size={28} color="var(--blue)" style={{ marginBottom: 10 }} />
          <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 4 }}>
            Step-by-step Crowwe walkthroughs are coming soon.
          </p>
          <p style={{ fontSize: 13, color: "var(--faint)" }}>
            This space is reserved for video guides and product tutorials.
          </p>
        </div>
      </Section>

      {/* Contact strip */}
      <Section bg="var(--dark)">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "white", marginBottom: 6 }}>
              Have a question about Crowwe?
            </h2>
            <p style={{ fontSize: 15, color: "#AEC0CA" }}>Reach out and the team will get back to you.</p>
          </div>
          <Button onClick={() => navigate("/contact")} icon={Mail}>
            Get in touch
          </Button>
        </div>
        <a
  href="https://crowwe.net/privacy-policy/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: "inline-block", marginTop: 20, fontSize: 13, color: "#AEC0CA", textDecoration: "underline" }}>
  Privacy Policy
</a>
      </Section>
    </>
  );
}
