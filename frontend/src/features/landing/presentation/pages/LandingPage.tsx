import { Link } from "react-router-dom";
import "../styles/landing.css";

const industries = [
  {
    icon: "▣",
    title: "Retail",
    text: "POS, inventory, and sales analytics"
  },
  {
    icon: "◉",
    title: "SaaS",
    text: "Subscriptions, customer insights, billing"
  },
  {
    icon: "⌂",
    title: "Services",
    text: "Bookings, scheduling, and invoicing"
  },
  {
    icon: "♡",
    title: "Healthcare",
    text: "Patient management and e-payments"
  }
];

const operationsHighlights = [
  "Advanced dashboards",
  "Workflow automation",
  "Data-driven insights",
  "Integrated payments"
];

const trustedBrands = ["PizzaHaus", "PeakTech", "MetroFit", "Swiftly", "BELL ASPA", "CraftRise"];

const footerGroups = [
  {
    title: "Platform",
    links: ["POS", "Automation", "Payments"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact"]
  },
  {
    title: "Developers",
    links: ["API Documentation", "Help Center", "Status"]
  }
];

export default function LandingPage() {
  return (
    <div className="ws-landing-shell">
      <header className="ws-nav-wrap">
        <div className="container-xl ws-nav-inner">
          <Link className="ws-brand" to="/">
            WEBSYS
          </Link>
          <nav className="ws-nav-links d-none d-md-flex" aria-label="Main navigation">
            <a href="#platform" className="ws-nav-link">
              Platform
            </a>
            <a href="#solutions" className="ws-nav-link">
              Solutions
            </a>
            <a href="#pricing" className="ws-nav-link">
              Pricing
            </a>
            <a href="#resources" className="ws-nav-link">
              Resources
            </a>
          </nav>
          <Link to="/login" className="ws-login-link">
            Login
          </Link>
        </div>
      </header>

      <main>
        <section className="ws-hero-block">
          <div className="container-xl">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <h1 className="ws-hero-title">Software Design for Modern Business</h1>
                <p className="ws-hero-copy">
                  Powerful, integrated platform providing analytics, automation, and payments to scale any business.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/login" className="btn btn-lg ws-primary-btn">
                    Explore Platform
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="ws-hero-visual" aria-hidden="true">
                  <div className="ws-hero-glow" />
                  <div className="ws-screen ws-screen-back" />
                  <div className="ws-screen ws-screen-main">
                    <div className="ws-screen-head">
                      <span>WEBSYS</span>
                      <strong>$28,500</strong>
                    </div>
                    <div className="ws-screen-chart" />
                    <div className="ws-screen-table">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="ws-screen ws-screen-front">
                    <div className="ws-mini-row" />
                    <div className="ws-mini-row" />
                    <div className="ws-mini-row" />
                    <div className="ws-mini-pill" />
                  </div>
                  <div className="ws-floating ws-floating-left">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="ws-floating ws-floating-right">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="ws-section">
          <div className="container-xl">
            <h2 className="ws-section-title">A Scalable Platform for Every Industry</h2>
            <div className="row g-3 mt-1">
              {industries.map((industry) => (
                <div className="col-md-6 col-xl-3" key={industry.title}>
                  <article className="ws-industry-card">
                    <div className="ws-industry-icon">{industry.icon}</div>
                    <h3>{industry.title}</h3>
                    <p>{industry.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="ws-section">
          <div className="container-xl">
            <h2 className="ws-section-title">Built to Power Your Entire Operation</h2>
            <div className="ws-highlight-row">
              {operationsHighlights.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>

            <div className="ws-ops-frame">
              <div className="ws-ops-main">
                <div className="ws-ops-head">WEBSYS</div>
                <div className="ws-ops-chart" />
                <div className="ws-ops-metrics">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="ws-ops-panel">
                <div className="ws-ops-panel-row" />
                <div className="ws-ops-panel-row" />
                <div className="ws-ops-panel-row" />
              </div>
            </div>

            <p className="ws-trust-copy">Trusted by thousands of growing businesses across the United States</p>
            <div className="ws-brand-row">
              {trustedBrands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="ws-footer" id="resources">
        <div className="container-xl">
          <div className="row g-4 align-items-start">
            {footerGroups.map((group) => (
              <div className="col-6 col-md-3" key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-12 col-md-3 ms-md-auto">
              <div className="ws-socials" id="pricing">
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
                <a href="#" aria-label="X">
                  x
                </a>
                <a href="#" aria-label="YouTube">
                  ▶
                </a>
                <a href="#" aria-label="Facebook">
                  f
                </a>
              </div>
              <a className="ws-email" href="mailto:support@websysit.com">
                support@websysit.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
