import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop({ threshold = 500 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 28,
        right: 22,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "var(--blue)",
        color: "white",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 6px 18px rgba(25,110,167,0.35)",
        zIndex: 40,
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
