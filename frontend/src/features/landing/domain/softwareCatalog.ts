export type SoftwareProductId = "websys-clockin" | "websys-pos";
export type SoftwareProductStatus = "live" | "expanding";

export type SoftwareProduct = {
  id: SoftwareProductId;
  name: string;
  summary: string;
  audience: string;
  status: SoftwareProductStatus;
  capabilities: string[];
};

export const SOFTWARE_PRODUCTS: ReadonlyArray<SoftwareProduct> = [
  {
    id: "websys-clockin",
    name: "WebsysClockIn",
    summary: "Track staff attendance, shifts, approvals, and labor visibility in real time.",
    audience: "Teams with hourly staff and multi-location scheduling.",
    status: "live",
    capabilities: ["Shift tracking", "Time approvals", "Attendance alerts"]
  },
  {
    id: "websys-pos",
    name: "WebsysPOS",
    summary: "Run sales, menu, kitchen, and operational controls in one platform.",
    audience: "Retail and restaurant operations that need fast transactions.",
    status: "live",
    capabilities: ["Sales + payments", "Menu + inventory", "Cloud hierarchy access"]
  }
];
