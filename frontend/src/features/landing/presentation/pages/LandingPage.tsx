import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBriefcase,
  faBuilding,
  faChartLine,
  faCloud,
  faCode,
  faCreditCard,
  faGears,
  faHeartPulse,
  faLayerGroup,
  faLightbulb,
  faRightToBracket,
  faStore
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "../styles/landing.css";

const industries = [
  {
    icon: faStore,
    title: "Retail",
    text: "POS, inventory, and sales analytics"
  },
  {
    icon: faCloud,
    title: "SaaS",
    text: "Subscriptions, customer insights, billing"
  },
  {
    icon: faBriefcase,
    title: "Services",
    text: "Bookings, scheduling, and invoicing"
  },
  {
    icon: faHeartPulse,
    title: "Healthcare",
    text: "Patient management and e-payments"
  }
];

const operationsHighlights = [
  { icon: faChartLine, text: "Advanced dashboards" },
  { icon: faGears, text: "Workflow automation" },
  { icon: faLightbulb, text: "Data-driven insights" },
  { icon: faCreditCard, text: "Integrated payments" }
];

const trustedBrands = ["PizzaHaus", "PeakTech", "MetroFit", "Swiftly", "BELL ASPA", "CraftRise"];

const footerColumns: Array<{ icon: IconDefinition; title: string; links: string[] }> = [
  {
    icon: faLayerGroup,
    title: "Platform",
    links: ["POS", "Automation", "Payments"]
  },
  {
    icon: faBuilding,
    title: "Company",
    links: ["About", "Careers", "Contact"]
  },
  {
    icon: faCode,
    title: "Developers",
    links: ["API Documentation", "Help Center", "Status"]
  }
];

const socialLinks = [
  { label: "LinkedIn", icon: faLinkedinIn },
  { label: "X", icon: faXTwitter },
  { label: "YouTube", icon: faYoutube },
  { label: "Facebook", icon: faFacebookF }
];

export default function LandingPage() {
  return (
    <div className="ws-landing-shell ws-landing-v2">
      <header className="ws-nav-wrap navbar navbar-expand-lg">
        <div className="container-xl ws-nav-inner">
          <Link className="ws-brand" to="/">
            WEBSYS
          </Link>
          <button
            className="navbar-toggler ws-nav-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ws-main-nav"
            aria-controls="ws-main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse ws-nav-collapse" id="ws-main-nav">
            <nav className="navbar-nav ws-nav-links mx-lg-auto" aria-label="Main navigation">
              <a href="#platform" className="ws-nav-link nav-link">
                Platform
              </a>
              <a href="#solutions" className="ws-nav-link nav-link">
                Solutions
              </a>
              <a href="#pricing" className="ws-nav-link nav-link">
                Pricing
              </a>
              <a href="#resources" className="ws-nav-link nav-link">
                Resources
              </a>
            </nav>
            <Link to="/login" className="ws-login-link nav-link ms-lg-3">
              <FontAwesomeIcon icon={faRightToBracket} className="ws-inline-icon" />
              Login
            </Link>
          </div>
        </div>
      </header>

      <main className="pb-4 pb-lg-0">
        <section className="ws-hero-block">
          <div className="container-xl">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-lg-5">
                <h1 className="ws-hero-title">Software Design for Modern Business</h1>
                <p className="ws-hero-copy">
                  Powerful, integrated platform providing analytics, automation, and payments to scale any business.
                </p>
                <div className="d-flex flex-wrap gap-2 ws-hero-actions">
                  <Link to="/login" className="btn btn-lg ws-primary-btn w-100 w-md-auto">
                    <FontAwesomeIcon icon={faArrowRight} className="ws-inline-icon" />
                    Explore Platform
                  </Link>
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <div className="ws-hero-visual-wrap">
                  <img
                    src="/branding/dev-pack/background/hero-gradient.png"
                    alt=""
                    className="ws-hero-visual ws-hero-gradient"
                    aria-hidden="true"
                    loading="eager"
                  />
                  <img
                    src="/branding/dev-pack/floating/panel-1.png"
                    alt=""
                    className="ws-hero-float ws-hero-float-left"
                    aria-hidden="true"
                  />
                  <img
                    src="/branding/dev-pack/floating/panel-2.png"
                    alt=""
                    className="ws-hero-float ws-hero-float-right"
                    aria-hidden="true"
                  />
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
                      <span className="ws-industry-icon">
                        <FontAwesomeIcon icon={industry.icon} />
                      </span>
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
                <span key={item.text}>
                  <FontAwesomeIcon icon={item.icon} className="ws-highlight-icon" />
                  {item.text}
                </span>
              ))}
            </div>

            <div className="ws-ops-wrap">
              <img src="/branding/dashboard_section.png" alt="" className="ws-ops-visual" aria-hidden="true" />
            </div>

            <p className="ws-trust-copy">Trusted by thousands of growing businesses across the United States</p>
            <div className="ws-brand-row" id="pricing">
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
                <h4>
                  <FontAwesomeIcon icon={group.icon} className="ws-inline-icon" />
                  {group.title}
                </h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" onClick={(event) => event.preventDefault()}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-12 col-md-3 ms-md-auto">
              <div className="ws-socials">
                {socialLinks.map((social) => (
                  <a key={social.label} href="#" aria-label={social.label} onClick={(event) => event.preventDefault()}>
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
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
