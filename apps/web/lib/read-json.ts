import fs from "node:fs";
import path from "node:path";

export function readRepoJson<T>(relativeFromRepoRoot: string): T {
  const filePath = path.join(process.cwd(), "..", "..", relativeFromRepoRoot);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}
