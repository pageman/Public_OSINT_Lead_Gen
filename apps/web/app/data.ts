import type { LeadCaptureRoute, SignalMetric, WeeklyUpdate } from "@osint-lead-gen/shared";
import { gatedAssets, initialSources, leadScoreRules } from "@osint-lead-gen/shared";

export const metrics: SignalMetric[] = [
  {
    id: "transit",
    label: "Observed transit pattern",
    unit: "text",
    latestValue: "Diverging",
    direction: "mixed",
    confidence: "medium"
  },
  {
    id: "documentation",
    label: "War-risk document pressure",
    unit: "index",
    latestValue: "68/100",
    direction: "up",
    confidence: "medium"
  },
  {
    id: "crew-sentiment",
    label: "Crew refusal signal",
    unit: "index",
    latestValue: "Elevated",
    direction: "up",
    confidence: "low-medium"
  }
];

export const updates: WeeklyUpdate[] = [
  {
    slug: "week-1-signal-baseline",
    title: "Week 1: Baseline corridor volatility and paperwork pressure",
    publishedAt: "2026-04-02",
    summary: "Initial snapshot of routing volatility, documentation friction, and what operators should watch next.",
    signals: metrics
  },
  {
    slug: "week-2-premium-pressure",
    title: "Week 2: Premium chatter outpaces confirmed routing changes",
    publishedAt: "2026-04-09",
    summary: "Secondary commentary is moving faster than confirmed operational change. Treat pricing signals carefully.",
    signals: metrics
  },
  {
    slug: "week-3-crew-loop",
    title: "Week 3: Crew sentiment becomes the dominant lag factor",
    publishedAt: "2026-04-16",
    summary: "Behavioral friction is starting to explain more delay than textbook closure assumptions.",
    signals: metrics
  }
];

export const leadRoutes: LeadCaptureRoute[] = [
  {
    label: "Book briefing",
    href: "https://calendly.com/example/osint-briefing",
    description: "Use when the public signal needs to become an operational action plan."
  },
  {
    label: "Request pilot",
    href: "mailto:ops@example.com?subject=Continuity%20Accelerator%20Pilot",
    description: "Use for surge document support, rerouting paperwork, and exception load handling."
  },
  {
    label: "Submit signal",
    href: "mailto:ops@example.com?subject=Community%20Signal%20Submission",
    description: "Use to share observed pricing, routing, or crew-friction signals."
  }
];

export const fintechMetrics: SignalMetric[] = [
  {
    id: "compliance-density",
    label: "Compliance notice density",
    unit: "index",
    latestValue: "Rising",
    direction: "up",
    confidence: "high"
  },
  {
    id: "payout-fragmentation",
    label: "Corridor payout fragmentation",
    unit: "index",
    latestValue: "Uneven",
    direction: "mixed",
    confidence: "medium"
  },
  {
    id: "queue-collision",
    label: "Fraud/compliance queue collision",
    unit: "index",
    latestValue: "Elevated",
    direction: "up",
    confidence: "medium"
  }
];

export const fintechUpdates: WeeklyUpdate[] = [
  {
    slug: "fintech-update-01",
    title: "Compliance change is landing faster than workflow adaptation",
    publishedAt: "2026-04-02",
    summary: "Regulatory and sanctions updates are increasing manual review load before many teams show visible incidents.",
    signals: fintechMetrics
  },
  {
    slug: "fintech-update-02",
    title: "Payout reliability is fragmenting by partner and corridor",
    publishedAt: "2026-04-09",
    summary: "Top-line uptime hides corridor-specific operational degradation and retry pressure.",
    signals: fintechMetrics
  },
  {
    slug: "fintech-update-03",
    title: "Fraud and compliance are converging into the same bottleneck",
    publishedAt: "2026-04-16",
    summary: "Queue design is becoming more important than isolated rule tuning.",
    signals: fintechMetrics
  }
];

export { initialSources };
export { gatedAssets, leadScoreRules };
