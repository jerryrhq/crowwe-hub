import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../lib/Seo";
import { Eyebrow, Section, Button } from "../components/ui";
import { AudienceGrid } from "../components/PlatformPieces";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="About Crowwe"
        description="Crowwe is an all-in-one digital super-app built for Africa, connecting communication, commerce, payments, and business tools."
        path="/about"
      />
      <Section style={{ paddingTop: 56 }}>
        <Eyebrow>About Crowwe</Eyebrow>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "var(--dark)", letterSpacing: "-0.01em", marginBottom: 20, maxWidth: 700 }}>
          A unified digital ecosystem for African commerce.
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.75, maxWidth: 700, marginBottom: 18 }}>
          Crowwe is an all-in-one digital super-app built for Africa that connects social communication, commerce,
          digital payments, and intelligent business tools. It lets ordinary users chat, send money, and stay
          informed — while giving MSMEs digital infrastructure to run their businesses: invoicing customers,
          managing business information, formalizing operations, and maintaining useful records.
        </p>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.75, maxWidth: 700, marginBottom: 40 }}>
          Crowwe addresses fragmentation between messaging apps, social discovery, banking and payment apps, and
          manual business records — the everyday reality of many African merchants and consumers who juggle several
          disconnected platforms just to run their business.
        </p>

        <div className="grid-2" style={{ marginBottom: 40 }}>
          <div className="card-flat" style={{ background: "var(--blue-soft)" }}>
            <h3 style={{ fontSize: 13, fontWeight: 800, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
              Mission
            </h3>
            <p style={{ fontSize: 15.5, color: "var(--ink)", lineHeight: 1.65 }}>
              To empower African individuals, traders, and growing businesses by providing accessible, unified
              digital infrastructure that simplifies communication, accelerates trade, and elevates informal
              enterprises into structured, productive market participants.
            </p>
          </div>
          <div className="card-flat">
            <h3 style={{ fontSize: 13, fontWeight: 800, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
              Vision
            </h3>
            <p style={{ fontSize: 15.5, color: "var(--ink)", lineHeight: 1.65 }}>
              To become the sovereign digital operational backbone for Africa's digital economy, powering connected
              communication, seamless financial exchange, and enterprise formalization.
            </p>
          </div>
        </div>

        <blockquote
          style={{
            borderLeft: "3px solid var(--blue)",
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: 600,
            color: "var(--dark)",
            lineHeight: 1.5,
            margin: "0 0 44px",
            fontStyle: "italic",
          }}
        >
          "Connect, transact, and scale your trade inside a single ecosystem designed for the practical realities of
          African commerce."
        </blockquote>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--dark)", marginBottom: 14 }}>What Crowwe is not</h2>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: 700, marginBottom: 40 }}>
          Crowwe is not merely a chat application, a wallet, or a social network. It's a unified ecosystem combining
          communication, financial settlement, business operations, and AI-powered productivity.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--dark)", marginBottom: 18 }}>Who Crowwe serves</h2>
        <AudienceGrid />

        <div style={{ marginTop: 44 }}>
          <Button onClick={() => navigate("/platform")} icon={ArrowRight}>
            See the full platform
          </Button>
        </div>
      </Section>
    </>
  );
}
