import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "sticky", top: "var(--nav-height)", height: 3, background: "var(--line)", zIndex: 30 }}>
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: "var(--blue)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
