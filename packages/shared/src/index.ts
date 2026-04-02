export type Reliability = "high" | "medium" | "low-medium" | "low";

export type SourceType =
  | "official-bulletin"
  | "structured-feed"
  | "industry-notice"
  | "news"
  | "community-signal"
  | "social-signal"
  | "internal";

export interface SourceRecord {
  id: string;
  name: string;
  type: SourceType;
  reliability: Reliability;
  cadence: string;
  owner: string;
  summary: string;
}

export interface SignalMetric {
  id: string;
  label: string;
  unit: "index" | "count" | "percent" | "text";
  latestValue: string;
  direction: "up" | "down" | "flat" | "mixed";
  confidence: Reliability;
}

export interface WeeklyUpdate {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  signals: SignalMetric[];
}

export interface LeadCaptureRoute {
  label: string;
  href: string;
  description: string;
}

export interface GatedAsset {
  id: string;
  title: string;
  description: string;
  unlockRequirement: string;
  signalClass: string;
}

export interface LeadScoreRule {
  id: string;
  label: string;
  points: number;
  rationale: string;
}

export const initialSources: SourceRecord[] = [
  {
    id: "official-advisories",
    name: "Official shipping advisories",
    type: "official-bulletin",
    reliability: "high",
    cadence: "daily",
    owner: "Ops",
    summary: "Primary advisories for route restriction, closures, and maritime guidance."
  },
  {
    id: "marine-traffic",
    name: "Marine traffic APIs",
    type: "structured-feed",
    reliability: "high",
    cadence: "daily",
    owner: "Builder",
    summary: "Structured movement and corridor activity data used for weekly snapshots."
  },
  {
    id: "broker-notices",
    name: "Broker and insurer notices",
    type: "industry-notice",
    reliability: "medium",
    cadence: "daily",
    owner: "Analyst",
    summary: "War-risk premium and market commentary used for operational context."
  }
];

export const gatedAssets: GatedAsset[] = [
  {
    id: "history-export",
    title: "Historical friction export",
    description: "CSV export of weekly corridor friction and documentation pressure trends.",
    unlockRequirement: "Email + company name",
    signalClass: "historical"
  },
  {
    id: "nowcast",
    title: "7-day corridor nowcast",
    description: "A lightweight forward view of routing, paperwork, and sentiment pressure.",
    unlockRequirement: "Email + company name + use case",
    signalClass: "forecast"
  },
  {
    id: "briefing",
    title: "Operator briefing deck",
    description: "Short narrative version of the weekly update designed for internal ops teams.",
    unlockRequirement: "Email + urgency",
    signalClass: "narrative"
  }
];

export const leadScoreRules: LeadScoreRule[] = [
  {
    id: "buyer-fit",
    label: "Freight forwarder, operator, or insurer in the target corridor",
    points: 30,
    rationale: "Direct operational exposure increases conversion likelihood."
  },
  {
    id: "urgency",
    label: "Needs routing or document support within 30 days",
    points: 25,
    rationale: "Near-term need is the strongest indicator for paid pilot potential."
  },
  {
    id: "complexity",
    label: "Managing war-risk, rerouting, or exception-handling workload",
    points: 25,
    rationale: "The paid offer monetizes operational complexity, not generic awareness."
  },
  {
    id: "volume",
    label: "Has recurring shipment or document volume in the affected corridor",
    points: 20,
    rationale: "Repeat workload is required for pilot-to-retainer expansion."
  }
];
