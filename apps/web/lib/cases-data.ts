import fs from "node:fs";
import path from "node:path";

type OpsCase = {
  id: string;
  company: string;
  status: string;
  priority: string;
  wedge: string;
  pain: string;
  next_step: string;
};

type CasesContract = {
  generated_at: string;
  cases: OpsCase[];
};

function casesPath() {
  return path.join(process.cwd(), "..", "..", "data", "ops", "cases.json");
}

export function readCasesData(): CasesContract {
  const raw = fs.readFileSync(casesPath(), "utf8");
  return JSON.parse(raw) as CasesContract;
}
