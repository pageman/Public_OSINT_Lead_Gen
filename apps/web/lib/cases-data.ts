import { readRepoJson } from "./read-json";

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

export function readCasesData(): CasesContract {
  return readRepoJson<CasesContract>("data/ops/cases.json");
}
