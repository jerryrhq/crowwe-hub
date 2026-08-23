import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Seo from "../lib/Seo";
import { Eyebrow, Section } from "../components/ui";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Placeholder submission handler — no backend endpoint is defined yet.
    // Wire this up to a real API route or form service before launch.
    setStatus("sent");
  };

  return (
    <>
      <Seo title="Contact" description="Send Crowwe a message and the team will follow up." path="/contact" />
      <Section style={{ paddingTop: 56, maxWidth: 640 }}>
        <Eyebrow>Contact</Eyebrow>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--dark)", letterSpacing: "-0.01em", marginBottom: 10 }}>
          Get in touch
        </h1>
        <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 32 }}>
          Send a message and the Crowwe team will follow up.
        </p>

        {status === "sent" ? (
          <div
            style={{
              background: "var(--green-bg)",
              border: "1px solid var(--green-border)",
              borderRadius: 14,
              padding: 24,
              display: "flex",
              gap: 12,
            }}
          >
            <CheckCircle2 size={22} color="var(--green-icon)" style={{ flexShrink: 0 }} />
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--green-text)", marginBottom: 4 }}>
                Message queued
              </h2>
              <p style={{ fontSize: 14, color: "var(--green-text-2)", lineHeight: 1.55 }}>
                This form isn't wired to a live backend yet — this is a placeholder confirmation for the interface.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            {[
              { key: "name", label: "Name", type: "text" },
              { key: "email", label: "Email", type: "email" },
              { key: "subject", label: "Subject", type: "text" },
            ].map((f) => (
              <div key={f.key} style={{ marginBottom: 18 }}>
                <label htmlFor={f.key} style={{ display: "block", fontSize: 13.5, fontWeight: 700, color: "var(--ink)", marginBottom: 6 }}>
                  {f.label}
                </label>
                <input
                  id={f.key}
                  type={f.type}
                  value={form[f.key]}
                  onChange={set(f.key)}
                  aria-invalid={!!errors[f.key]}
                  aria-describedby={errors[f.key] ? `${f.key}-err` : undefined}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: 10,
                    fontSize: 15,
                    border: `1.5px solid ${errors[f.key] ? "var(--red)" : "var(--line)"}`,
                    boxSizing: "border-box",
                  }}
                />
                {errors[f.key] && (
                  <p id={`${f.key}-err`} style={{ color: "var(--red)", fontSize: 12.5, marginTop: 5 }}>
                    {errors[f.key]}
                  </p>
                )}
              </div>
            ))}
            <div style={{ marginBottom: 24 }}>
              <label htmlFor="message" style={{ display: "block", fontSize: 13.5, fontWeight: 700, color: "var(--ink)", marginBottom: 6 }}>
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={set("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: 10,
                  fontSize: 15,
                  resize: "vertical",
                  border: `1.5px solid ${errors.message ? "var(--red)" : "var(--line)"}`,
                  boxSizing: "border-box",
                }}
              />
              {errors.message && (
                <p id="message-err" style={{ color: "var(--red)", fontSize: 12.5, marginTop: 5 }}>
                  {errors.message}
                </p>
              )}
            </div>
            <button type="submit" className="btn btn-solid">
              Send message
            </button>
          </form>
        )}
      </Section>
    </>
  );
}
