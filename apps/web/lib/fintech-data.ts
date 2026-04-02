import { readRepoJson } from "./read-json";

type FintechSignal = {
  id: string;
  label: string;
  latest_value: string;
  direction: string;
  confidence: string;
  evidence: string[];
};

type FintechUpdate = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
};

type FintechDataContract = {
  generated_at: string;
  wedge: string;
  summary: {
    title: string;
    takeaway: string;
  };
  sources: {
    id: string;
    name: string;
    source_url: string;
    reliability: string;
  }[];
  signals: FintechSignal[];
  updates: FintechUpdate[];
};

export function readFintechData(): FintechDataContract {
  return readRepoJson<FintechDataContract>("data/fintech/signals.latest.json");
}
