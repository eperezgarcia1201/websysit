import { SOFTWARE_PRODUCTS, type SoftwareProduct } from "../domain/softwareCatalog";

export function getSoftwareProducts(): SoftwareProduct[] {
  return SOFTWARE_PRODUCTS.map((product) => ({
    ...product,
    capabilities: [...product.capabilities]
  }));
}
