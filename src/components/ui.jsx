import { CheckCircle2 } from "lucide-react";

export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

export function Section({ id, className = "", bg, children, style }) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      style={{ background: bg || "var(--white)", ...style }}
    >
      <div className="section-inner">{children}</div>
    </section>
  );
}

export function Button({ children, onClick, variant = "solid", icon: Icon, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant === "solid" ? "btn-solid" : "btn-outline"}`}
    >
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
}

export function LinkArrow({ children, onClick, icon: Icon }) {
  return (
    <button onClick={onClick} className="link-arrow">
      {children}
      {Icon && <Icon size={15} />}
    </button>
  );
}

export function StatusPill({ status }) {
  const live = status.toLowerCase().includes("live");
  return (
    <span className={`pill ${live ? "pill-live" : "pill-roadmap"}`}>
      {live && <CheckCircle2 size={12} />} {status}
    </span>
  );
}
