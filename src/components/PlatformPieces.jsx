import { Link } from "react-router-dom";
import { MessageCircle, Wallet, Briefcase, Building2, User, Users, CheckCircle2 } from "lucide-react";
import { StatusPill } from "./ui";

const ICONS = { MessageCircle, Wallet, Briefcase };

export function ProductTeaserCard({ product }) {
  const Icon = ICONS[product.icon];
  return (
    <Link
      to="/platform"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: 14,
        padding: 22,
        textDecoration: "none",
        display: "block",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "var(--blue-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
        }}
      >
        <Icon size={19} color="var(--blue)" />
      </div>
      <h3 style={{ fontSize: 16.5, fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>{product.name}</h3>
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55, marginBottom: 12 }}>{product.purpose}</p>
      <StatusPill status={product.status} />
    </Link>
  );
}

export function ProductDetail({ product }) {
  const Icon = ICONS[product.icon];
  return (
    <div id={product.slug} style={{ borderTop: "1px solid var(--line)", padding: "36px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
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
          <Icon size={20} color="var(--blue)" />
        </div>
        <h2 style={{ fontSize: 21, fontWeight: 800, color: "var(--dark)" }}>{product.name}</h2>
        <StatusPill status={product.status} />
      </div>
      <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.65, maxWidth: 620, marginBottom: 18 }}>
        {product.purpose}
      </p>
      <div className="grid-2" style={{ gridTemplateColumns: product.workflow ? "1fr 1fr" : "1fr" }}>
        <div>
          <h3
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "var(--faint)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 10,
            }}
          >
            Capabilities
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {product.capabilities.map((c) => (
              <li
                key={c}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  fontSize: 14.5,
                  color: "var(--ink)",
                  marginBottom: 8,
                }}
              >
                <CheckCircle2 size={15} color="var(--blue)" style={{ marginTop: 2, flexShrink: 0 }} /> {c}
              </li>
            ))}
          </ul>
        </div>
        {product.workflow && (
          <div>
            <h3
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "var(--faint)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 10,
              }}
            >
              Typical workflow
            </h3>
            <ol style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: "var(--ink)", lineHeight: 1.9 }}>
              {product.workflow.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export function AudienceGrid() {
  const audiences = [
    {
      icon: Building2,
      title: "MSMEs",
      desc: "Retail traders, boutique owners, artisans, food vendors, local logistics operators, and service businesses need simple payments, receipts, records, and reduced administrative work.",
    },
    {
      icon: Briefcase,
      title: "Professionals & freelancers",
      desc: "Software engineers, designers, legal advisers, copywriters, and consultants need proposals, statements of work, invoices, and research assistance.",
    },
    {
      icon: User,
      title: "Everyday users",
      desc: "People who need messaging, media sharing, communities, and P2P transfers.",
    },
    {
      icon: Users,
      title: "Enterprise & institutional",
      desc: "Audiences that need technology information, partnerships, governance, compliance information, and platform capabilities.",
    },
  ];
  return (
    <div className="grid-auto">
      {audiences.map((a) => (
        <div key={a.title} className="card">
          <a.icon size={20} color="var(--blue)" style={{ marginBottom: 10 }} />
          <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "var(--dark)", marginBottom: 6 }}>{a.title}</h3>
          <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.55 }}>{a.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function InnaWorkflowRail() {
  const steps = [
    { label: "Context", desc: "You share what happened — a sale, a service, a messy note." },
    { label: "Understand", desc: "INNA reads the context and figures out what kind of output is needed." },
    { label: "Assist", desc: "INNA structures, researches, or analyses the details." },
    { label: "Produce", desc: "A finished document, answer, or record comes back." },
  ];
  return (
    <div style={{ position: "relative", padding: "40px 0" }}>
      <div
        className="rail-line"
        style={{ position: "absolute", top: 60, left: "6%", right: "6%", height: 2, background: "var(--line)" }}
      />
      <div className="grid-4">
        {steps.map((s, i) => (
          <div key={s.label} style={{ textAlign: "center", position: "relative" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--blue)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 17,
                margin: "0 auto 14px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {i + 1}
            </div>
            <h3 style={{ fontSize: 15.5, fontWeight: 800, color: "var(--dark)", marginBottom: 6 }}>{s.label}</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5, maxWidth: 190, margin: "0 auto" }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
