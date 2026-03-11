import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCashRegister,
  faCheck,
  faCircleCheck,
  faRocket,
  faUserClock
} from "@fortawesome/free-solid-svg-icons";
import type { SoftwareProduct } from "../../domain/softwareCatalog";
import type { SoftwareLaunchTarget } from "../../infrastructure/resolveSoftwareLaunchTarget";

type SoftwareProductCardProps = {
  product: SoftwareProduct;
  target: SoftwareLaunchTarget;
};

function statusLabel(status: SoftwareProduct["status"]) {
  if (status === "expanding") return "Expanding";
  return "Live";
}

function productIcon(id: SoftwareProduct["id"]) {
  if (id === "websys-pos") return faCashRegister;
  return faUserClock;
}

function statusIcon(status: SoftwareProduct["status"]) {
  if (status === "expanding") return faRocket;
  return faCircleCheck;
}

export default function SoftwareProductCard({ product, target }: SoftwareProductCardProps) {
  return (
    <article className="ws-software-card card border-0 h-100">
      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h3 className="h5 mb-1 ws-card-title">
              <FontAwesomeIcon icon={productIcon(product.id)} className="ws-inline-icon" />
              {product.name}
            </h3>
            <p className="ws-software-subtitle mb-0">{product.audience}</p>
          </div>
          <span className="ws-chip">
            <FontAwesomeIcon icon={statusIcon(product.status)} className="ws-chip-icon" />
            {statusLabel(product.status)}
          </span>
        </div>
        <p className="ws-soft mb-3 mt-3">{product.summary}</p>
        <ul className="ws-capability-list mb-4">
          {product.capabilities.map((capability) => (
            <li key={capability}>
              <FontAwesomeIcon icon={faCheck} className="ws-capability-icon" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
        {target.external ? (
          <a
            className="btn btn-outline-light mt-auto align-self-start"
            href={target.href}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ws-inline-icon" />
            {target.actionLabel}
          </a>
        ) : (
          <Link className="btn btn-primary mt-auto align-self-start" to={target.href}>
            <FontAwesomeIcon icon={faArrowRight} className="ws-inline-icon" />
            {target.actionLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
