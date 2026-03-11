import { Link } from "react-router-dom";
import "../styles/landing.css";

const industries = [
  {
    title: "Retail",
    text: "POS, inventory health, and live sales visibility from one dashboard."
  },
  {
    title: "Restaurants",
    text: "Front-of-house, kitchen workflows, online orders, and settlement in one flow."
  },
  {
    title: "Service Businesses",
    text: "Scheduling, invoicing, payroll sync, and operational analytics."
  },
  {
    title: "Healthcare",
    text: "Patient-facing transactions, appointment operations, and secure payments."
  }
];

const principles = [
  "Feature-first architecture for safer growth",
  "Guardrails and validation on every migration chunk",
  "Cloud hierarchy and role-aware access patterns",
  "Operational dashboards for daily decision speed"
];

export default function LandingPage() {
  return (
    <div className="ws-landing-shell">
      <header className="navbar navbar-expand-lg ws-nav">
        <div className="container-xl">
          <Link className="navbar-brand ws-brand" to="/">
            WEBSYS
          </Link>
          <nav className="d-none d-lg-flex gap-4 align-items-center ms-auto">
            <a href="#platform" className="ws-nav-link">
              Platform
            </a>
            <a href="#industries" className="ws-nav-link">
              Industries
            </a>
            <a href="#roadmap" className="ws-nav-link">
              Refactor OS
            </a>
            <Link to="/login" className="btn btn-sm btn-outline-light">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="ws-hero section-padding">
          <div className="container-xl">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <p className="ws-kicker mb-2">Websys Cloud Platform</p>
                <h1 className="display-5 fw-semibold mb-3">Software Design for Modern Business Operations</h1>
                <p className="lead ws-soft mb-4">
                  Unified platform for payments, automation, reporting, and operational control. Built to scale from a
                  single store to multi-tenant cloud hierarchy.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/login" className="btn btn-primary btn-lg">
                    Explore Platform
                  </Link>
                  <Link to="/cloud/platform/hierarchy" className="btn btn-outline-light btn-lg">
                    Open WebsysPOS
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ws-hero-panel card border-0">
                  <div className="card-body p-4">
                    <h2 className="h4 mb-3">Platform Highlights</h2>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="ws-stat-card">
                          <span className="ws-stat-number">99.95%</span>
                          <span className="ws-soft">Service availability target</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="ws-stat-card">
                          <span className="ws-stat-number">2 apps</span>
                          <span className="ws-soft">WebsysPOS + WebsysClockIn</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="ws-stat-card">
                          <span className="ws-stat-number">5 phases</span>
                          <span className="ws-soft">Production refactor operating model</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="ws-stat-card">
                          <span className="ws-stat-number">0 breaks</span>
                          <span className="ws-soft">Goal: zero API contract regressions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="section-padding">
          <div className="container-xl">
            <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
              <div>
                <p className="ws-kicker mb-1">Industry Fit</p>
                <h2 className="h2 mb-0">A Scalable Platform for Every Team</h2>
              </div>
            </div>
            <div className="row g-3">
              {industries.map((industry) => (
                <div className="col-md-6 col-xl-3" key={industry.title}>
                  <article className="card border-0 h-100 ws-industry-card">
                    <div className="card-body">
                      <h3 className="h5">{industry.title}</h3>
                      <p className="mb-0 ws-soft">{industry.text}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="section-padding">
          <div className="container-xl">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6">
                <article className="card border-0 h-100 ws-roadmap-card">
                  <div className="card-body p-4">
                    <p className="ws-kicker mb-2">Production Refactor Workbook</p>
                    <h2 className="h3">Built for safe migration and growth</h2>
                    <ul className="ws-principle-list mb-0">
                      {principles.map((principle) => (
                        <li key={principle}>{principle}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col-lg-6">
                <article className="card border-0 h-100 ws-roadmap-card">
                  <div className="card-body p-4">
                    <h2 className="h4">Get Started</h2>
                    <p className="ws-soft">
                      Enter through Login, pick your software, and continue with role-based access and cloud hierarchy.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex">
                      <Link to="/login" className="btn btn-primary">
                        Login and Select Software
                      </Link>
                      <a
                        href="https://websysclockin.com"
                        className="btn btn-outline-light"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Open WebsysClockIn
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
