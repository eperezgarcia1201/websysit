import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleCheck,
  faCircleInfo,
  faEnvelope,
  faLock,
  faLockOpen,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import { getSoftwareProducts } from "../../application/getSoftwareProducts";
import { validateLoginCredentials } from "../../application/validateLoginCredentials";
import { resolveSoftwareLaunchTarget } from "../../infrastructure/resolveSoftwareLaunchTarget";
import SoftwareProductCard from "../components/SoftwareProductCard";
import "../styles/landing.css";

export default function LoginSoftwarePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [readyToSelect, setReadyToSelect] = useState(false);
  const products = useMemo(() => getSoftwareProducts(), []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateLoginCredentials({ email, password });
    if (!validation.ok) {
      setErrorMessage(validation.message);
      setReadyToSelect(false);
      return;
    }
    setErrorMessage("");
    setReadyToSelect(true);
  };

  return (
    <div className="ws-landing-shell ws-access-shell">
      <header className="navbar navbar-expand-lg ws-nav">
        <div className="container-xl">
          <Link className="navbar-brand ws-brand" to="/">
            WEBSYS
          </Link>
          <div className="ms-auto d-flex align-items-center gap-2">
            <Link className="btn btn-sm btn-outline-light" to="/">
              <FontAwesomeIcon icon={faArrowLeft} className="ws-inline-icon" />
              Back to Landing
            </Link>
          </div>
        </div>
      </header>

      <main className="section-padding">
        <div className="container-xl">
          <div className="row g-4">
            <div className="col-lg-5">
              <article className="card border-0 ws-login-card">
                <div className="card-body p-4">
                  <p className="ws-kicker mb-2">
                    <FontAwesomeIcon icon={faShieldHalved} className="ws-inline-icon" />
                    Secure Access
                  </p>
                  <h1 className="h3 mb-3">Log in and select your software</h1>
                  <p className="ws-soft">
                    This first step gives your team a consistent entry point across Websys products.
                  </p>
                  <form className="mt-4" onSubmit={onSubmit} noValidate>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="websys-email">
                        <FontAwesomeIcon icon={faEnvelope} className="ws-inline-icon" />
                        Email
                      </label>
                      <input
                        id="websys-email"
                        type="email"
                        className="form-control"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="websys-password">
                        <FontAwesomeIcon icon={faLock} className="ws-inline-icon" />
                        Password
                      </label>
                      <input
                        id="websys-password"
                        type="password"
                        className="form-control"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    {errorMessage ? (
                      <p className="alert alert-danger py-2 px-3" role="alert">
                        <FontAwesomeIcon icon={faCircleInfo} className="ws-inline-icon" />
                        {errorMessage}
                      </p>
                    ) : null}
                    <button className="btn btn-primary w-100" type="submit">
                      <FontAwesomeIcon icon={faArrowRight} className="ws-inline-icon" />
                      Continue
                    </button>
                  </form>
                </div>
              </article>
            </div>

            <div className="col-lg-7">
              <section className="ws-select-panel h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h4 mb-0">Select software</h2>
                  <span className="ws-chip">
                    <FontAwesomeIcon icon={readyToSelect ? faLockOpen : faLock} className="ws-chip-icon" />
                    {readyToSelect ? "Unlocked" : "Locked"}
                  </span>
                </div>
                {!readyToSelect ? (
                  <p className="ws-soft mb-0">
                    <FontAwesomeIcon icon={faCircleInfo} className="ws-inline-icon" />
                    Enter credentials to unlock software options. WebsysPOS opens at
                    <code> /cloud/platform/hierarchy</code>.
                  </p>
                ) : (
                  <div className="row g-3">
                    {products.map((product) => (
                      <div className="col-md-6" key={product.id}>
                        <SoftwareProductCard product={product} target={resolveSoftwareLaunchTarget(product.id)} />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
