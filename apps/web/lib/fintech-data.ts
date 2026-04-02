import fs from "node:fs";
import path from "node:path";

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

function fintechDataPath() {
  return path.join(process.cwd(), "..", "..", "data", "fintech", "signals.latest.json");
}

export function readFintechData(): FintechDataContract {
  const filePath = fintechDataPath();
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as FintechDataContract;
}
