import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  FileText,
  MessageCircle,
  Sparkles,
  Wallet,
} from "lucide-react";
import Seo from "../lib/Seo";
import { PRODUCTS } from "../data/products";
import { ARTICLES } from "../data/articles";
import "./Home.css";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.crowwe.app";
const PLAY_STORE_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";
const APP_STORE_URL = "https://apps.apple.com/us/app/crowwe/id6807836820";

const PRODUCT_ICONS = [MessageCircle, Wallet, BriefcaseBusiness];
const JOURNEY_STEPS = [
  { title: "Connect", description: "Discover people, customers and communities.", icon: MessageCircle },
  { title: "Discuss", description: "Chat, call, share information and agree terms.", icon: Sparkles },
  { title: "Organise", description: "Keep business activity and records together.", icon: FileText },
  { title: "Settle", description: "Make payments and keep a clear transaction record.", icon: Wallet },
];

function StoreBadge() {
  return (
    <div className="home-store-badges" aria-label="Download Crowwe">
      <a
        className="home-store-badge home-store-badge-apple"
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Crowwe on the App Store"
      >
        <span className="home-apple-mark" aria-hidden="true"></span>
        <span><small>Download on the</small><b>App Store</b></span>
      </a>
      <a
        className="home-store-badge home-store-badge-google"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Crowwe on Google Play"
      >
        <img src={PLAY_STORE_BADGE} alt="Get it on Google Play" />
      </a>
    </div>
  );
}

export default function Home() {
  const featured = ARTICLES[0];

  return (
    <div className="home-page">
      <Seo
        title="Communication. Commerce. Payments. Intelligence."
        description="Crowwe is an all-in-one digital ecosystem for African commerce, connecting communication, payments, and AI-powered business tools."
        path="/"
      />

      <section className="home-hero">
        <div className="home-hero-orbit home-hero-orbit-one" aria-hidden="true" />
        <div className="home-hero-orbit home-hero-orbit-two" aria-hidden="true" />
        <div className="home-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-kicker">Built for connected African commerce</p>
            <h1>
              Everything you need to <em>connect, transact and grow.</em>
            </h1>
            <p className="home-lead">
              Crowwe brings communication, digital payments, everyday business tools and
              AI-powered productivity into one connected ecosystem for people, merchants and
              communities.
            </p>
            <div className="home-hero-actions">
              <StoreBadge />
              <Link className="home-button home-button-secondary" to="/platform">
                Explore the ecosystem <ArrowRight size={17} />
              </Link>
            </div>
            <div className="home-hero-highlights" aria-label="Crowwe capabilities">
              <div><b>01</b><span>Social & communication</span></div>
              <div><b>02</b><span>Wallet & payments</span></div>
              <div><b>03</b><span>Business + AI tools</span></div>
            </div>
          </div>

          <div className="home-showcase-wrap">
            <div className="home-showcase" role="img" aria-label="Illustration of Crowwe communication, payment and business features">
              <div className="home-showcase-header">
                <span className="home-brand-mark">crowwe</span>
                <span><b>crowwe</b><small>Your digital ecosystem</small></span>
                <span className="home-live-pill"><i /> Connected</span>
              </div>
              <div className="home-showcase-main">
                <div className="home-showcase-caption">Everything, working together</div>
                <div className="home-showcase-tiles">
                  <div className="home-showcase-tile home-tile-chat">
                    <span><MessageCircle size={20} /></span>
                    <b>Conversations</b>
                    <small>Chat, groups & calls</small>
                    <div className="home-chat-lines" aria-hidden="true"><i /><i /><i /></div>
                  </div>
                  <div className="home-showcase-tile home-tile-wallet">
                    <span><Wallet size={20} /></span>
                    <b>Payments</b>
                    <small>Wallet & transfers</small>
                    <div className="home-payment-orbit" aria-hidden="true">₦</div>
                  </div>
                  <div className="home-showcase-tile home-tile-business">
                    <span><BriefcaseBusiness size={20} /></span>
                    <b>Business tools</b>
                    <small>Records & invoices</small>
                    <div className="home-mini-invoice" aria-hidden="true"><i /><i /><i /></div>
                  </div>
                  <div className="home-showcase-tile home-tile-inna">
                    <span><Sparkles size={20} /></span>
                    <b>INNA</b>
                    <small>AI productivity</small>
                    <div className="home-ai-glow" aria-hidden="true">✦</div>
                  </div>
                </div>
                <div className="home-showcase-foot">
                  <span><Check size={15} /> One connected experience</span>
                  <span className="home-foot-dots" aria-hidden="true"><i /><i /><i /></span>
                </div>
              </div>
            </div>
            <div className="home-float-note home-float-note-one"><span><Check size={16} /></span><b>Connected commerce</b></div>
            <div className="home-float-note home-float-note-two"><span><Sparkles size={16} /></span><b>Powered by INNA</b></div>
          </div>
        </div>
      </section>

      <section className="home-proof-strip" aria-label="Crowwe ecosystem benefits">
        <div className="home-container home-proof-grid">
          <div><span>Social</span><b>Connect naturally</b></div>
          <div><span>Payments</span><b>Settle simply</b></div>
          <div><span>Business</span><b>Organise your work</b></div>
          <div><span>Intelligence</span><b>Work smarter</b></div>
        </div>
      </section>

      <section className="home-section home-about">
        <div className="home-container home-about-grid">
          <div className="home-about-visual" aria-hidden="true">
            <span className="home-visual-number">01</span>
            <div className="home-about-card">
              <span className="home-small-kicker">One ecosystem</span>
              <h2>From conversation to transaction.</h2>
              <p>Bring everyday interactions and business activity closer together.</p>
              <div className="home-flow">
                <span><MessageCircle size={17} /></span><i /><span><FileText size={17} /></span><i /><span><Wallet size={17} /></span>
              </div>
            </div>
            <div className="home-stat-card home-stat-blue"><b>4</b><span>connected layers</span></div>
            <div className="home-stat-card home-stat-white"><b>1</b><span>unified ecosystem</span></div>
          </div>
          <div className="home-about-copy">
            <p className="home-kicker home-kicker-dark">About Crowwe</p>
            <h2>A digital ecosystem designed around how people live and do business.</h2>
            <p>
              People and merchants often move between separate apps for conversations, payments,
              discovery and business records. Crowwe brings those everyday journeys closer together.
            </p>
            <p>
              It combines social connection and communication with payment capabilities, practical
              business tools and intelligent assistance through INNA.
            </p>
            <Link className="home-text-link" to="/about">Learn about Crowwe <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="home-section home-products">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <p className="home-kicker home-kicker-dark">What Crowwe brings together</p>
              <h2>Digital tools that work better when they work together.</h2>
            </div>
            <p>
              Connect communication, settlement, business records and intelligence in one user
              journey.
            </p>
          </div>
          <div className="home-product-grid">
            {PRODUCTS.map((product, index) => {
              const Icon = PRODUCT_ICONS[index];
              return (
                <Link className={`home-product-card home-product-card-${index + 1}`} key={product.slug} to="/platform">
                  <div className="home-product-card-top">
                    <span className="home-product-icon"><Icon size={19} /></span>
                    <span className="home-product-number">0{index + 1}</span>
                  </div>
                  <h3>{product.name.replace("Crowwe ", "")}</h3>
                  <p>{product.purpose}</p>
                  <span className="home-card-link">Explore product <ArrowUpRight size={15} /></span>
                  <div className={`home-product-art home-product-art-${index + 1}`} aria-hidden="true">
                    {index === 0 && <><i /><i /><i /></>}
                    {index === 1 && <span>₦</span>}
                    {index === 2 && <><b>RECORD</b><i /><i /><i /></>}
                  </div>
                </Link>
              );
            })}
            <Link className="home-product-card home-product-card-inna" to="/inna">
              <div className="home-product-card-top">
                <span className="home-product-icon"><Sparkles size={19} /></span>
                <span className="home-product-number">04</span>
              </div>
              <h3>INNA Intelligence</h3>
              <p>
                Intelligent assistance for drafting, research and everyday business productivity.
              </p>
              <span className="home-card-link">Meet INNA <ArrowUpRight size={15} /></span>
              <div className="home-inna-art" aria-hidden="true">✦</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-journey">
        <div className="home-container">
          <div className="home-centered-heading">
            <p className="home-kicker home-kicker-dark">The Crowwe journey</p>
            <h2>One relationship. One connected flow.</h2>
            <p>Move through the everyday steps of connection and commerce in one ecosystem.</p>
          </div>
          <div className="home-journey-grid">
            {JOURNEY_STEPS.map(({ title, description, icon: Icon }, index) => (
              <div className="home-journey-step" key={title}>
                <span className="home-step-number">0{index + 1}</span>
                <span className="home-step-icon"><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-inna">
        <div className="home-container home-inna-grid">
          <div className="home-inna-copy">
            <p className="home-kicker">INNA · Crowwe Intelligence</p>
            <h2>Business assistance without the complexity.</h2>
            <p>
              Describe what you need in everyday language and INNA can help turn it into useful,
              structured work.
            </p>
            <ul>
              <li><Check size={17} /> Draft professional business documents</li>
              <li><Check size={17} /> Prepare quotations and invoices</li>
              <li><Check size={17} /> Support research, writing and organisation</li>
            </ul>
            <Link className="home-button home-button-white" to="/inna">Discover INNA <ArrowRight size={17} /></Link>
          </div>
          <div className="home-inna-console" role="img" aria-label="Illustration of the INNA AI assistant preparing a business document">
            <div className="home-console-header">
              <span className="home-console-mark"><Sparkles size={17} /></span>
              <span><b>INNA</b><small>Crowwe Intelligence</small></span>
              <span className="home-console-status"><i /> Ready to help</span>
            </div>
            <div className="home-console-prompt">Help me prepare a business document.</div>
            <div className="home-console-response">
              <span className="home-console-spark"><Sparkles size={16} /></span>
              <div><b>Let’s get started</b><p>INNA helps organise your ideas into clear, useful outputs.</p></div>
            </div>
            <div className="home-console-document"><span>YOUR DOCUMENT</span><i /><i /><i /></div>
            <div className="home-console-input"><span>Ask INNA anything…</span><b>↑</b></div>
          </div>
        </div>
      </section>

      <section className="home-section home-insights">
        <div className="home-container">
          <div className="home-insights-heading">
            <div>
              <p className="home-kicker home-kicker-dark">Knowledge & insights</p>
              <h2>Ideas shaping the Crowwe ecosystem.</h2>
            </div>
            <Link className="home-text-link" to="/articles">View all articles <ArrowRight size={16} /></Link>
          </div>
          <div className="home-insight-grid">
            {featured && (
              <Link className="home-insight-featured" to={`/articles/${featured.slug}`}>
                <span className="home-insight-art" aria-hidden="true"><FileText size={42} /></span>
                <span className="home-insight-content">
                  <small>{featured.category} · Featured</small>
                  <b>{featured.title}</b>
                  <span>{featured.excerpt}</span>
                  <span className="home-text-link">Read article <ArrowRight size={15} /></span>
                </span>
              </Link>
            )}
            <Link className="home-insight-side" to="/guides">
              <span className="home-side-icon"><FileText size={22} /></span>
              <small>Product guides</small>
              <b>Learn how Crowwe’s connected tools work.</b>
              <span className="home-text-link">Explore guides <ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-download" id="download">
        <div className="home-container home-download-panel">
          <div>
            <p className="home-kicker">Crowwe for your everyday</p>
            <h2>Connect. Trade. Pay. Grow.</h2>
            <p>Your conversations, payments and business tools in one connected ecosystem.</p>
          </div>
          <StoreBadge />
        </div>
      </section>
    </div>
  );
}
