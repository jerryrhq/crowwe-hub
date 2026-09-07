import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { NAV } from "../data/nav";

export default function Navbar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLinkRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) firstLinkRef.current?.focus();
  }, [menuOpen]);

  const onKeyDown = (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  };

  const navStyle = ({ isActive }) => ({
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px 14px",
    borderRadius: 8,
    fontSize: 14.5,
    fontWeight: 600,
    color: isActive ? "var(--blue)" : "var(--ink)",
    textDecoration: "none",
  });

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: scrolled ? "rgba(6,13,22,0.92)" : "var(--white)",
          backdropFilter: "saturate(180%) blur(8px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 20px",
            height: "var(--nav-height)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            aria-label="Crowwe home"
            style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "var(--blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              C
            </span>
            <span style={{ fontWeight: 800, fontSize: 18, color: "var(--dark)", letterSpacing: "-0.01em" }}>
              Crowwe
            </span>
          </Link>

          <nav aria-label="Primary" className="nav-desktop" style={{ display: "flex", gap: 4 }}>
            {NAV.map((n) => (
              <NavLink key={n.path} to={n.path} style={navStyle}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={onSearch}
              aria-label="Search Crowwe"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid var(--line)",
                background: "var(--surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Search size={17} color="var(--ink)" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-solid nav-desktop-cta"
              style={{ padding: "9px 16px", fontSize: 14 }}
            >
              Get in touch
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="nav-mobile-toggle"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid var(--line)",
                background: "var(--surface)",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Menu size={18} color="var(--ink)" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onKeyDown={onKeyDown}
          style={{ position: "fixed", inset: 0, zIndex: 60, background: "var(--white)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              height: "var(--nav-height)",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <span style={{ fontWeight: 800, fontSize: 18, color: "var(--dark)" }}>Crowwe</span>
            <button
              ref={firstLinkRef}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid var(--line)",
                background: "var(--surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
          </div>
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 2 }}>
            <button
              onClick={() => {
                onSearch();
                setMenuOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 8px",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--line)",
                textAlign: "left",
                fontSize: 17,
                fontWeight: 600,
                color: "var(--ink)",
                cursor: "pointer",
              }}
            >
              <Search size={18} color="var(--blue)" /> Search
            </button>
            {NAV.map((n) => (
              <NavLink
                key={n.path}
                to={n.path}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  padding: "14px 8px",
                  borderBottom: "1px solid var(--line)",
                  textAlign: "left",
                  fontSize: 17,
                  fontWeight: 600,
                  color: isActive ? "var(--blue)" : "var(--ink)",
                  textDecoration: "none",
                })}
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
