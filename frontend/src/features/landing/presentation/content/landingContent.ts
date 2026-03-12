import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcase,
  faChartLine,
  faClipboardCheck,
  faClock,
  faCloud,
  faCode,
  faCodeBranch,
  faCreditCard,
  faDiagramProject,
  faGears,
  faHeartPulse,
  faLayerGroup,
  faLightbulb,
  faRightToBracket,
  faShieldHalved,
  faStore,
  faUsersGear
} from "@fortawesome/free-solid-svg-icons";

export const heroMetrics = [
  { value: "2", label: "Live products today" },
  { value: "1", label: "Unified login entry" },
  { value: "6", label: "Migration checkpoints" },
  { value: "0", label: "API breaks tolerated" }
];

export const industries = [
  { icon: faStore, title: "Retail", text: "POS, inventory, customer profiles, and real-time margin visibility." },
  { icon: faCloud, title: "SaaS", text: "Recurring billing, lifecycle automation, and contract-safe feature delivery." },
  { icon: faBriefcase, title: "Services", text: "Scheduling, field execution, invoicing, and operator-ready dashboards." },
  { icon: faHeartPulse, title: "Healthcare", text: "Staff workflows, patient operations, payments, and clean audit trails." }
];

export const servicePillars = [
  {
    icon: faUsersGear,
    title: "CRM And Sales Ops",
    text: "Keep leads, customer history, follow-up, and reporting in one operating layer."
  },
  {
    icon: faCreditCard,
    title: "Commerce And Payments",
    text: "Run checkout, payments, and revenue analytics without stitching together fragile tools."
  },
  {
    icon: faClock,
    title: "Workforce And Access",
    text: "Give teams a single login, product selection, and role-aware access across locations."
  },
  {
    icon: faCodeBranch,
    title: "Platform Modernization",
    text: "Move legacy code into feature-first modules with validation after every migration chunk."
  }
];

export const outcomeCards = [
  {
    icon: faRightToBracket,
    eyebrow: "Access",
    title: "One login, multiple products",
    text: "Users land in a clean login flow, then choose WebsysPOS or WebsysClockIn from the same entry point."
  },
  {
    icon: faDiagramProject,
    eyebrow: "Delivery",
    title: "Refactor in safe vertical slices",
    text: "Freeze contracts, migrate bounded contexts, and keep routes as thin presentation shells."
  },
  {
    icon: faShieldHalved,
    eyebrow: "Operations",
    title: "Guardrails stay active in CI",
    text: "Build, line-limit, and no-direct-fetch checks keep architecture drift from sneaking back in."
  }
];

export const operationsHighlights = [
  { icon: faChartLine, text: "Advanced dashboards" },
  { icon: faGears, text: "Workflow automation" },
  { icon: faLightbulb, text: "Data-driven insights" },
  { icon: faCreditCard, text: "Integrated payments" }
];

export const rolloutSteps = [
  {
    phase: "Phase 0-1",
    title: "Baseline and foundation",
    text: "Inventory hotspots, freeze contracts, and standardize shared config, logging, and errors."
  },
  {
    phase: "Phase 2",
    title: "Guardrails in place",
    text: "Add file-length and no-direct-fetch checks so new debt stops entering migrated zones."
  },
  {
    phase: "Phase 3-4",
    title: "Bounded-context rollout",
    text: "Extract domain and application layers first, then shrink legacy screens around them."
  },
  {
    phase: "Phase 5",
    title: "Hardening before scale",
    text: "Run failure-path, compatibility, and observability checks before calling the rollout done."
  }
];

export const coverageTags = ["Retail", "Restaurants", "Field Services", "Healthcare", "Membership", "Multi-location"];

export const footerColumns: Array<{ icon: IconDefinition; title: string; links: Array<{ label: string; href: string }> }> = [
  {
    icon: faLayerGroup,
    title: "Products",
    links: [
      { label: "WebsysPOS", href: "/login" },
      { label: "WebsysClockIn", href: "/login" },
      { label: "Cloud Hierarchy", href: "/cloud/platform/hierarchy" }
    ]
  },
  {
    icon: faClipboardCheck,
    title: "Delivery",
    links: [
      { label: "Services", href: "#services" },
      { label: "Results", href: "#results" },
      { label: "Playbook", href: "#playbook" }
    ]
  },
  {
    icon: faCode,
    title: "Support",
    links: [
      { label: "Platform Access", href: "#access" },
      { label: "Login", href: "/login" },
      { label: "support@websysit.com", href: "mailto:support@websysit.com" }
    ]
  }
];
