import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

async function persistPartner(payload: Record<string, string>) {
  const preferredPath = path.join(process.cwd(), "..", "..", "data", "ops", "partner-discovery.ndjson");
  const fallbackPath = path.join("/tmp", "osint-partner-discovery.ndjson");
  const line = `${JSON.stringify(payload)}\n`;

  try {
    await fs.mkdir(path.dirname(preferredPath), { recursive: true });
    await fs.appendFile(preferredPath, line, "utf8");
  } catch {
    await fs.appendFile(fallbackPath, line, "utf8");
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    need: String(formData.get("need") ?? ""),
    cadence: String(formData.get("cadence") ?? ""),
    workflow: String(formData.get("workflow") ?? ""),
    submittedAt: new Date().toISOString()
  };

  await persistPartner(payload);

  const url = new URL("/partners/beta", request.url);
  url.searchParams.set("submitted", "1");
  return NextResponse.redirect(url, { status: 303 });
}
