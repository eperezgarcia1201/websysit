import { Link } from "react-router-dom";
import "../styles/landing.css";

const industries = [
  {
    icon: "◼",
    title: "Retail",
    text: "POS, inventory, and sales analytics"
  },
  {
    icon: "●",
    title: "SaaS",
    text: "Subscriptions, customer insights, billing"
  },
  {
    icon: "▣",
    title: "Services",
    text: "Bookings, scheduling, and invoicing"
  },
  {
    icon: "♥",
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

const footerColumns = [
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
                <div className="d-flex flex-wrap gap-2 ws-hero-actions">
                  <Link to="/login" className="btn btn-lg ws-primary-btn">
                    Explore Platform
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="ws-hero-visual-wrap">
                  <img src="/branding/landing-hero.svg" alt="" className="ws-hero-visual" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="ws-section">
          <div className="container-xl">
            <h2 className="ws-section-title ws-line-title">A Scalable Platform for Every Industry</h2>
            <div className="row g-3 mt-1">
              {industries.map((industry) => (
                <div className="col-md-6 col-xl-3" key={industry.title}>
                  <article className="ws-industry-card">
                    <div className="ws-industry-top">
                      <span className="ws-industry-icon">{industry.icon}</span>
                      <h3>{industry.title}</h3>
                    </div>
                    <div className="ws-industry-divider" />
                    <p>{industry.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="ws-section">
          <div className="container-xl">
            <h2 className="ws-section-title ws-line-title">Built to Power Your Entire Operation</h2>
            <div className="ws-highlight-row">
              {operationsHighlights.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>

            <div className="ws-ops-wrap">
              <img src="/branding/landing-ops.svg" alt="" className="ws-ops-visual" aria-hidden="true" />
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
            {footerColumns.map((group) => (
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
                <a href="#" aria-label="LinkedIn" onClick={(event) => event.preventDefault()}>
                  in
                </a>
                <a href="#" aria-label="Twitter" onClick={(event) => event.preventDefault()}>
                  t
                </a>
                <a href="#" aria-label="YouTube" onClick={(event) => event.preventDefault()}>
                  y
                </a>
                <a href="#" aria-label="Facebook" onClick={(event) => event.preventDefault()}>
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
