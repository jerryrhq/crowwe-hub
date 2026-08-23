import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../lib/Seo";
import { Section, Button } from "../components/ui";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Seo title="Page not found" description="This page doesn't exist inside the Crowwe knowledge hub." path="/404" />
      <Section style={{ paddingTop: 90, textAlign: "center" }}>
        <h1 style={{ fontSize: 60, fontWeight: 800, color: "var(--blue)", marginBottom: 10 }}>404</h1>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 26 }}>
          This page doesn't exist inside the Crowwe knowledge hub.
        </p>
        <Button onClick={() => navigate("/")} icon={ArrowRight}>
          Back to home
        </Button>
      </Section>
    </>
  );
}
