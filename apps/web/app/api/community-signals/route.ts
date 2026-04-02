import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { readCommunitySignals } from "../../../lib/ops-data";

async function persistSubmission(payload: Record<string, string>) {
  const preferredPath = path.join(process.cwd(), "..", "..", "data", "qualification", "community-submissions.ndjson");
  const fallbackPath = path.join("/tmp", "osint-community-submissions.ndjson");
  const line = `${JSON.stringify(payload)}\n`;

  try {
    await fs.mkdir(path.dirname(preferredPath), { recursive: true });
    await fs.appendFile(preferredPath, line, "utf8");
  } catch {
    await fs.appendFile(fallbackPath, line, "utf8");
  }
}

export async function GET() {
  return NextResponse.json(readCommunitySignals());
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    signal: String(formData.get("signal") ?? ""),
    context: String(formData.get("context") ?? ""),
    notes: String(formData.get("notes") ?? ""),
    submittedAt: new Date().toISOString()
  };

  await persistSubmission(payload);

  const url = new URL("/qualification/community-signals", request.url);
  url.searchParams.set("submitted", "1");
  return NextResponse.redirect(url, { status: 303 });
}
