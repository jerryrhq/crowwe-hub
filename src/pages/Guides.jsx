import { useNavigate } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import Seo from "../lib/Seo";
import { Eyebrow, Section, Button } from "../components/ui";
import { GUIDES } from "../data/guides";

export default function Guides() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="Guides"
        description="Step-by-step Crowwe walkthroughs: video guides, explainers, and tutorials for using the platform."
        path="/guides"
      />
      <Section style={{ paddingTop: 56 }}>
        <Eyebrow>Learn Crowwe</Eyebrow>
        <h1 style={{ fontSize: 34, fontWeight: 800, color: "var(--dark)", letterSpacing: "-0.01em", marginBottom: 16 }}>
          Guides
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: 620, marginBottom: 36 }}>
          Practical, step-by-step walkthroughs for using Crowwe — video guides, explainers, and tutorials.
        </p>

        {GUIDES.length === 0 ? (
          <div
            style={{
              border: "1px dashed var(--line)",
              borderRadius: 16,
              padding: 48,
              textAlign: "center",
              background: "var(--offwhite)",
            }}
          >
            <PlayCircle size={32} color="var(--blue)" style={{ marginBottom: 12 }} />
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--dark)", marginBottom: 6 }}>
              Guides are coming soon
            </h2>
            <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 20 }}>
              We'll publish walkthroughs for Messaging, Wallet, Business Suite, and INNA here.
            </p>
            <Button onClick={() => navigate("/articles")} variant="outline">
              Read articles instead
            </Button>
          </div>
        ) : (
          <div className="grid-auto">
            {GUIDES.map((g) => (
              <div key={g.slug} className="card">
                {g.title}
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
