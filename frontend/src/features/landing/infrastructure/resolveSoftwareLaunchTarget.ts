import type { SoftwareProductId } from "../domain/softwareCatalog";

export type SoftwareLaunchTarget = {
  href: string;
  external: boolean;
  actionLabel: string;
};

function normalizeExternalUrl(rawValue: string, fallback: string) {
  const candidate = rawValue.trim() || fallback;
  if (candidate.startsWith("https://") || candidate.startsWith("http://")) return candidate;
  return `https://${candidate}`;
}

function getClockInUrl() {
  const envValue = String(import.meta.env.VITE_CLOCKIN_URL || "");
  return normalizeExternalUrl(envValue, "https://websysclockin.com");
}

export function resolveSoftwareLaunchTarget(id: SoftwareProductId): SoftwareLaunchTarget {
  if (id === "websys-clockin") {
    return {
      href: getClockInUrl(),
      external: true,
      actionLabel: "Open WebsysClockIn"
    };
  }

  return {
    href: "/cloud/platform/hierarchy",
    external: false,
    actionLabel: "Open WebsysPOS"
  };
}
