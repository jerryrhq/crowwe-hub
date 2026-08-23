import { useNavigate } from "react-router-dom";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import Seo from "../lib/Seo";
import { Eyebrow, Section, Button, StatusPill } from "../components/ui";
import { PRODUCTS, ROADMAP } from "../data/products";
import { ProductDetail } from "../components/PlatformPieces";

export default function Platform() {
  const navigate = useNavigate();
  const layers = ["Crowwe", "Social & Communication", "Financial & Settlement", "Business Suite", "INNA Intelligence Layer"];

  return (
    <>
      <Seo
        title="Platform"
        description="The Crowwe ecosystem architecture: social and communication, financial and settlement, business suite, and the INNA intelligence layer."
        path="/platform"
      />
      <Section style={{ paddingTop: 56 }}>
        <Eyebrow>Platform</Eyebrow>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "var(--dark)", letterSpacing: "-0.01em", marginBottom: 16, maxWidth: 700 }}>
          The Crowwe ecosystem architecture.
        </h1>
        <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, maxWidth: 680, marginBottom: 40 }}>
          Crowwe is structured as connected layers: social and communication, financial and settlement, a business
          suite for MSMEs, and INNA as the intelligence layer that ties everything together — with a developer and
          API layer planned for the future.
        </p>

        <div style={{ display: "flex", gap: 0, alignItems: "center", flexWrap: "wrap", marginBottom: 48, fontSize: 13, fontWeight: 700, color: "var(--blue)" }}>
          {layers.map((step, i) => (
            <span key={step} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ background: "var(--blue-soft)", padding: "8px 14px", borderRadius: 999 }}>{step}</span>
              {i < layers.length - 1 && <ArrowRight size={14} color="var(--faint)" style={{ margin: "0 6px" }} />}
            </span>
          ))}
        </div>

        {PRODUCTS.map((p) => (
          <ProductDetail key={p.slug} product={p} />
        ))}

        <div style={{ borderTop: "1px solid var(--line)", padding: "36px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "var(--blue-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Rocket size={19} color="var(--blue)" />
            </div>
            <h2 style={{ fontSize: 21, fontWeight: 800, color: "var(--dark)" }}>Roadmap</h2>
          </div>
          {ROADMAP.map((r) => (
            <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 15, color: "var(--ink)", fontWeight: 600 }}>{r.name}</span>
              <StatusPill status={r.status} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <Button onClick={() => navigate("/inna")} icon={Sparkles}>
            Explore the INNA layer
          </Button>
        </div>
      </Section>
    </>
  );
}
