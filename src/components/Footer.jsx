import { Link } from "react-router-dom";
import { NAV } from "../data/nav";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark-bg)", color: "var(--muted)", padding: "48px 20px 28px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 36,
          }}
        >
          <div>
            <span style={{ fontWeight: 800, fontSize: 20, color: "white" }}>Crowwe</span>
            <p style={{ fontSize: 13.5, marginTop: 8, maxWidth: 260, lineHeight: 1.6 }}>
              An all-in-one digital ecosystem for African commerce.
            </p>
          </div>
          <nav aria-label="Footer" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {NAV.map((n) => (
              <Link
                key={n.path}
                to={n.path}
                style={{ color: "var(--muted)", fontSize: 14, textDecoration: "none" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://crowwe.net/terms-of-service/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12.5, color: "var(--faint)", textDecoration: "underline" }}
            >
              Terms of Service
            </a>
          </nav>
        </div>
        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20, fontSize: 12.5, color: "var(--faint)" }}>
          © {new Date().getFullYear()} Crowwe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
