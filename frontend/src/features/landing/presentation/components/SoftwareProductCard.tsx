import { Link } from "react-router-dom";
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

export default function SoftwareProductCard({ product, target }: SoftwareProductCardProps) {
  return (
    <article className="ws-software-card card border-0 h-100">
      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h3 className="h5 mb-1">{product.name}</h3>
            <p className="ws-software-subtitle mb-0">{product.audience}</p>
          </div>
          <span className="ws-chip">{statusLabel(product.status)}</span>
        </div>
        <p className="ws-soft mb-3 mt-3">{product.summary}</p>
        <ul className="ws-capability-list mb-4">
          {product.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
        {target.external ? (
          <a
            className="btn btn-outline-light mt-auto align-self-start"
            href={target.href}
            target="_blank"
            rel="noreferrer"
          >
            {target.actionLabel}
          </a>
        ) : (
          <Link className="btn btn-primary mt-auto align-self-start" to={target.href}>
            {target.actionLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
