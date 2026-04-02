import { readRepoJson } from "./read-json";

export type CommunitySignal = {
  id: string;
  status: string;
  source_type: string;
  signal: string;
  context: string;
  action: string;
};

export type NowcastItem = {
  id: string;
  signal: string;
  outlook: string;
  confidence: string;
  evidence: string[];
  operator_action: string;
};

export function readCommunitySignals() {
  return readRepoJson<{ generated_at: string; items: CommunitySignal[] }>(
    "data/qualification/community-signals.json"
  );
}

export function readNowcast() {
  return readRepoJson<{ generated_at: string; horizon: string; items: NowcastItem[] }>(
    "data/qualification/nowcast.latest.json"
  );
}

export function readDashboard() {
  return readRepoJson<{
    generated_at: string;
    metrics: { id: string; label: string; value: string; trend: string; note: string }[];
  }>("data/ops/dashboard.json");
}

export function readPricing() {
  return readRepoJson<{
    generated_at: string;
    tiers: { name: string; price: string; includes: string[] }[];
  }>("data/ops/pricing.json");
}

export function readPartnerDiscovery() {
  return readRepoJson<{
    generated_at: string;
    questions: string[];
    responses: { company: string; need: string; cadence: string; workflow: string }[];
  }>("data/ops/partner-discovery.json");
}

export function readOperationalQa() {
  return readRepoJson<{
    generated_at: string;
    checks: { name: string; status: string; note: string }[];
  }>("data/ops/operational-qa.json");
}
