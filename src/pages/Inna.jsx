import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Seo from "../lib/Seo";
import { Eyebrow, Section, Button } from "../components/ui";
import { InnaWorkflowRail } from "../components/PlatformPieces";

const USE_CASES = [
  {
    title: "Invoices and quotes",
    desc: "Describe what was sold and INNA generates a structured document with items, totals, and payment details.",
  },
  {
    title: "Everyday bookkeeping",
    desc: "Give INNA messy sales notes and it helps structure money in, money out, and what's remaining. Not certified accounting.",
  },
  {
    title: "Executive-ready proposals",
    desc: "Turn a service idea or pricing information into a professional proposal.",
  },
  {
    title: "Payments",
    desc: "Documents can integrate Crowwe Wallet QR payment structures where supported.",
  },
];

export default function Inna() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="INNA"
        description="INNA is Crowwe's AI intelligence and productivity layer — an executive assistant, document drafter, and research assistant powered by Google's Gemini architecture."
        path="/inna"
      />
      <Section style={{ paddingTop: 56 }}>
        <Eyebrow>INNA</Eyebrow>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "var(--dark)", letterSpacing: "-0.01em", marginBottom: 16, maxWidth: 700 }}>
          Crowwe's AI intelligence and productivity layer.
        </h1>
        <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, maxWidth: 680, marginBottom: 8 }}>
          INNA is more than a chatbot. It acts as an executive assistant, business workflow assistant, document
          drafter, research assistant, legal/regulatory information researcher, and business advisory assistant —
          powered by Google's Gemini architecture and integrated with Crowwe's business context.
        </p>
        <p style={{ fontSize: 14, color: "var(--faint)", lineHeight: 1.6, maxWidth: 680, marginBottom: 44 }}>
          AI-generated information should be verified. INNA does not replace lawyers, accountants, financial
          professionals, or human decision-makers.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--dark)", marginBottom: 6 }}>How INNA works</h2>
        <p style={{ fontSize: 14.5, color: "var(--muted)", marginBottom: 8 }}>
          A simple flow from raw context to a finished output.
        </p>
        <InnaWorkflowRail />

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--dark)", margin: "44px 0 20px" }}>Core use cases</h2>
        <div className="grid-auto" style={{ marginBottom: 44 }}>
          {USE_CASES.map((u) => (
            <div key={u.title} className="card">
              <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>{u.title}</h3>
              <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>{u.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-flat" style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <ShieldCheck size={20} color="var(--blue)" />
            <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--dark)" }}>Research, carefully</h2>
          </div>
          <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.65 }}>
            INNA's research capabilities cover semantic statutory retrieval, legal and regulatory research, research
            synthesis, and information analysis — intended to inform, not to substitute for professional advice.
          </p>
        </div>

        <Button onClick={() => navigate("/articles")} icon={ArrowRight}>
          Read how this works in practice
        </Button>
      </Section>
    </>
  );
}
