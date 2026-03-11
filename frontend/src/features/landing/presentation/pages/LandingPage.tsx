import { Link } from "react-router-dom";
import "../styles/landing.css";

const sectionAnchors = [
  { id: "solutions", top: "36.5%" },
  { id: "platform", top: "49.3%" },
  { id: "pricing", top: "71.6%" },
  { id: "resources", top: "90.9%" }
];

export default function LandingPage() {
  return (
    <div className="ws-landing-shell ws-mockup-shell">
      <main className="ws-mockup-main">
        <img
          className="ws-mockup-image"
          src="/branding/full_background.png"
          alt="Websys modern business platform landing page"
          loading="eager"
        />

        {sectionAnchors.map((anchor) => (
          <span key={anchor.id} id={anchor.id} className="ws-scroll-anchor" style={{ top: anchor.top }} />
        ))}

        <Link to="/" className="ws-hotspot ws-hotspot-logo">
          <span className="visually-hidden">Websys home</span>
        </Link>
        <a href="#platform" className="ws-hotspot ws-hotspot-platform">
          <span className="visually-hidden">Platform</span>
        </a>
        <a href="#solutions" className="ws-hotspot ws-hotspot-solutions">
          <span className="visually-hidden">Solutions</span>
        </a>
        <a href="#pricing" className="ws-hotspot ws-hotspot-pricing">
          <span className="visually-hidden">Pricing</span>
        </a>
        <a href="#resources" className="ws-hotspot ws-hotspot-resources">
          <span className="visually-hidden">Resources</span>
        </a>
        <Link to="/login" className="ws-hotspot ws-hotspot-login">
          <span className="visually-hidden">Login</span>
        </Link>
        <Link to="/login" className="ws-hotspot ws-hotspot-explore">
          <span className="visually-hidden">Explore platform</span>
        </Link>

        <section className="visually-hidden">
          <h1>Software Design for Modern Business</h1>
          <p>Powerful, integrated platform providing analytics, automation, and payments to scale any business.</p>
          <h2>A Scalable Platform for Every Industry</h2>
          <p>Retail, SaaS, Services, Healthcare.</p>
          <h2>Built to Power Your Entire Operation</h2>
          <p>Advanced dashboards, workflow automation, data-driven insights, integrated payments.</p>
        </section>
      </main>
    </div>
  );
}
