import { ArrowUpRight, Check, Handshake, Lightbulb, Users } from "lucide-react";
import Seo from "../lib/Seo";
import { Eyebrow, Section } from "../components/ui";

const partnershipPaths = [
  {
    icon: Handshake,
    title: "Build together",
    text: "Bring products, distribution, or local expertise that can make everyday digital commerce more useful and accessible.",
  },
  {
    icon: Users,
    title: "Reach more people",
    text: "Connect with an ecosystem designed around the real needs of African consumers, traders, and growing businesses.",
  },
  {
    icon: Lightbulb,
    title: "Create practical impact",
    text: "Turn a shared idea into a useful experience across communication, payments, commerce, and business operations.",
  },
];

const paymentRules = [
  "The person funds ₦500 from their own bank or card in one deposit.",
  "They complete one transaction of ₦100 or more after funding.",
  "Your referral code is entered before they add money.",
  "Each person can generate one ₦50 Tier 1 payment, for life.",
];

export default function Partners() {
  return (
    <>
      <Seo
        title="Partners"
        description="Explore partnership opportunities with Crowwe and help build a more connected digital economy for Africa."
        path="/partners"
      />

      <section className="partners-hero">
        <div className="section-inner partners-hero-inner">
          <div className="partners-hero-copy partners-reveal">
            <Eyebrow>Partner with Crowwe</Eyebrow>
            <h1>Build what Africa’s digital economy needs next.</h1>
            <p>
              Crowwe brings communication, commerce, payments, and business tools into one
              connected ecosystem. The right partners help us make that ecosystem more useful,
              trusted, and accessible.
            </p>
            <a
              className="btn btn-solid"
              href="https://crowwe.net/partners"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore partnership opportunities <ArrowUpRight size={16} />
            </a>
            <a className="partners-guide-link" href="/Crowwe%20Partner%20Earnings%20Guide.pdf" download>
              Download the partner earnings guide <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="partners-orbit partners-reveal" aria-hidden="true">
            <div className="partners-orbit-ring partners-orbit-ring-one" />
            <div className="partners-orbit-ring partners-orbit-ring-two" />
            <div className="partners-orbit-core">C</div>
            <span className="partners-orbit-dot partners-orbit-dot-one" />
            <span className="partners-orbit-dot partners-orbit-dot-two" />
            <span className="partners-orbit-dot partners-orbit-dot-three" />
          </div>
        </div>
      </section>

      <Section style={{ paddingTop: 64 }}>
        <div className="section-narrow partners-intro">
          <Eyebrow>A shared direction</Eyebrow>
          <h2>Partnerships that move from idea to everyday value.</h2>
          <p>
            Crowwe is built for the practical realities of African commerce: people and businesses
            navigating fragmented tools, informal processes, and growing digital expectations.
            Partnerships are an important part of turning that complexity into simpler, more
            connected experiences.
          </p>
        </div>

        <div className="grid-3 partners-paths">
          {partnershipPaths.map(({ icon: Icon, title, text }) => (
            <article className="card partners-path-card" key={title}>
              <div className="partners-path-icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="var(--offwhite)" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="partners-earnings">
          <div>
            <Eyebrow>The programme in brief</Eyebrow>
            <h2>Earn when your community becomes active on Crowwe.</h2>
            <p>
              The guide separates a signup from an activation. A person counts when they fund
              ₦500 externally and then use Crowwe for a transaction of ₦100 or more.
            </p>
            <div className="partners-earnings-number">
              <strong>₦50</strong>
              <span>paid automatically per activated person</span>
            </div>
          </div>
          <div className="partners-rules card">
            <h3>Four conditions to remember</h3>
            <ul>
              {paymentRules.map((rule) => (
                <li key={rule}>
                  <Check size={16} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="partners-tier-note">
          <strong>Tier 2:</strong> at 100 activated users, the programme is designed to unlock ₦1
          per qualifying transaction from your territory. The guide notes that this tier is built
          but not paying yet, so partners should not count on it until Crowwe announces it is live.
        </div>
      </Section>

      <Section bg="var(--blue-soft)" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div className="partners-cta">
          <div>
            <Eyebrow>Start the conversation</Eyebrow>
            <h2>Have a capability, idea, or network to bring to Crowwe?</h2>
          </div>
          <a
            className="btn btn-outline"
            href="https://crowwe.net/partners"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit crowwe.net/partners <ArrowUpRight size={16} />
          </a>
        </div>
      </Section>
    </>
  );
}
