import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faHeadset,
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import {
  coverageTags,
  footerColumns,
  heroMetrics,
  industries,
  operationsHighlights,
  outcomeCards,
  rolloutSteps,
  servicePillars
} from "../content/landingContent";
import "../styles/landing.css";

const renderFooterLink = (label: string, href: string) =>
  href.startsWith("/") ? (
    <Link to={href}>{label}</Link>
  ) : (
    <a href={href}>{label}</a>
  );
export default function LandingPage() {
  return (
    <div className="ws-landing-shell ws-landing-v2">
      <header className="ws-nav-wrap navbar navbar-expand-lg">
        <div className="ws-page-wrap ws-nav-inner">
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
              <a href="#platform" className="ws-nav-link nav-link">Platform</a>
              <a href="#services" className="ws-nav-link nav-link">Services</a>
              <a href="#results" className="ws-nav-link nav-link">Results</a>
              <a href="#access" className="ws-nav-link nav-link">Access</a>
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
          <div className="ws-page-wrap">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-lg-5">
                <span className="ws-section-kicker">Unified software systems for growing operators</span>
                <h1 className="ws-hero-title">Software Design for Modern Business</h1>
                <p className="ws-hero-copy">
                  Launch CRM, commerce, workforce, and reporting on one platform while keeping refactors safe,
                  incremental, and production-ready.
                </p>
                <div className="d-flex flex-wrap gap-2 ws-hero-actions">
                  <Link to="/login" className="btn btn-lg ws-primary-btn w-100 w-md-auto">
                    <FontAwesomeIcon icon={faArrowRight} className="ws-inline-icon" />
                    Explore Platform
                  </Link>
                </div>
                <div className="row g-3 ws-metric-strip">
                  {heroMetrics.map((metric) => (
                    <div className="col-6" key={metric.label}>
                      <div className="ws-metric-card">
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <div className="ws-hero-visual-wrap">
                  <img
                    src="/branding/full_background.png"
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

        <section id="services" className="ws-section">
          <div className="ws-page-wrap">
            <span className="ws-section-kicker text-center d-block">What Websys delivers</span>
            <h2 className="ws-section-title ws-line-title">Services That Turn Product Vision Into Production</h2>
            <p className="ws-section-copy ws-section-copy-center">
              From CRM expansion to payments, workforce access, and platform modernization, Websys is designed to help
              teams simplify operations without losing control of production behavior.
            </p>
            <div className="row g-3 mt-1">
              {servicePillars.map((service) => (
                <div className="col-md-6 col-xl-3" key={service.title}>
                  <article className="ws-service-card">
                    <span className="ws-service-icon"><FontAwesomeIcon icon={service.icon} /></span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ws-section">
          <div className="ws-page-wrap">
            <h2 className="ws-section-title ws-line-title">A Scalable Platform For Every Industry</h2>
            <div className="row g-3 mt-1">
              {industries.map((industry) => (
                <div className="col-md-6 col-xl-3" key={industry.title}>
                  <article className="ws-industry-card">
                    <div className="ws-industry-top">
                      <span className="ws-industry-icon"><FontAwesomeIcon icon={industry.icon} /></span>
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

        <section id="results" className="ws-section">
          <div className="ws-page-wrap">
            <h2 className="ws-section-title ws-line-title">Outcomes Teams Can Feel In Production</h2>
            <div className="row g-3 mt-1">
              {outcomeCards.map((card) => (
                <div className="col-lg-4" key={card.title}>
                  <article className="ws-proof-card">
                    <span className="ws-proof-label">
                      <FontAwesomeIcon icon={card.icon} className="ws-inline-icon" />
                      {card.eyebrow}
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="ws-section">
          <div className="ws-page-wrap">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-7">
                <div className="ws-ops-wrap">
                  <img src="/branding/dashboard_section.png" alt="" className="ws-ops-visual" aria-hidden="true" />
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <span className="ws-section-kicker">Platform view</span>
                <h2 className="ws-section-title">Built to power your entire operation</h2>
                <p className="ws-showcase-copy">
                  Bring dashboards, automation, payments, and user access into one operational layer that can grow into
                  a full CRM stack without forcing a risky rewrite.
                </p>
                <div className="ws-highlight-stack">
                  {operationsHighlights.map((item) => (
                    <span key={item.text}>
                      <FontAwesomeIcon icon={item.icon} className="ws-highlight-icon" />
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="ws-trust-copy">
              Designed for teams that need a shared operating system across locations, staff, customers, and revenue.
            </p>
            <div className="ws-brand-row">
              {coverageTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="playbook" className="ws-section">
          <div className="ws-page-wrap">
            <span className="ws-section-kicker text-center d-block">Production rollout playbook</span>
            <h2 className="ws-section-title ws-line-title">A Safer Path From Legacy To Scalable CRM</h2>
            <div className="row g-3 mt-1">
              {rolloutSteps.map((step) => (
                <div className="col-md-6 col-xl-3" key={step.phase}>
                  <article className="ws-playbook-card">
                    <span className="ws-playbook-phase">{step.phase}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="access" className="ws-section">
          <div className="ws-page-wrap">
            <div className="ws-cta-panel">
              <div>
                <span className="ws-section-kicker">Start here</span>
                <h2 className="ws-section-title">Login once, then choose the software your team needs</h2>
                <p className="ws-showcase-copy mb-0">
                  WebsysPOS is already connected on this environment, and WebsysClockIn is available from the same
                  access flow. Start with the landing page, then move users into a clean product-selection experience.
                </p>
                <div className="ws-chip-row">
                  <span className="ws-chip">WebsysPOS</span>
                  <span className="ws-chip">WebsysClockIn</span>
                </div>
              </div>
              <div className="ws-cta-actions">
                <Link to="/login" className="btn btn-lg ws-primary-btn">
                  <FontAwesomeIcon icon={faRightToBracket} className="ws-inline-icon" />
                  Go to login
                </Link>
                <a href="mailto:support@websysit.com" className="btn btn-lg btn-outline-light">
                  <FontAwesomeIcon icon={faEnvelope} className="ws-inline-icon" />
                  Talk to support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ws-footer">
        <div className="ws-page-wrap">
          <div className="row g-4 align-items-start">
            {footerColumns.map((group) => (
              <div className="col-6 col-md-3" key={group.title}>
                <h4>
                  <FontAwesomeIcon icon={group.icon} className="ws-inline-icon" />
                  {group.title}
                </h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>{renderFooterLink(link.label, link.href)}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-12 col-md-3 ms-md-auto">
              <div className="ws-footer-panel">
                <h4>
                  <FontAwesomeIcon icon={faHeadset} className="ws-inline-icon" />
                  Launch With Us
                </h4>
                <p>
                  Need a cleaner rollout for CRM, POS, or workforce software? We can start with landing, access, and
                  platform architecture that scales.
                </p>
                <a className="ws-email" href="mailto:support@websysit.com">
                  support@websysit.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
