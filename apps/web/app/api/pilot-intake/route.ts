import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

function computePilotScore(urgency: string, shipmentPain: string, volume: string) {
  let score = 0;

  if (urgency === "this_week") score += 35;
  else if (urgency === "this_month") score += 20;

  const pain = shipmentPain.toLowerCase();
  if (pain.includes("backlog") || pain.includes("reconciliation") || pain.includes("compliance")) score += 25;
  if (pain.includes("payout") || pain.includes("exception") || pain.includes("corridor")) score += 20;

  if (volume === "high") score += 20;
  else if (volume === "medium") score += 10;

  const band = score >= 70 ? "pilot_ready" : score >= 45 ? "needs_review" : "nurture";
  return { score, band };
}

async function persistPilot(payload: Record<string, string | number>) {
  const preferredPath = path.join(process.cwd(), "..", "..", "data", "ops", "pilot-intake.ndjson");
  const fallbackPath = path.join("/tmp", "osint-pilot-intake.ndjson");
  const line = `${JSON.stringify(payload)}\n`;

  try {
    await fs.mkdir(path.dirname(preferredPath), { recursive: true });
    await fs.appendFile(preferredPath, line, "utf8");
    return preferredPath;
  } catch {
    await fs.appendFile(fallbackPath, line, "utf8");
    return fallbackPath;
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const company = String(formData.get("company") ?? "");
  const contactName = String(formData.get("contactName") ?? "");
  const email = String(formData.get("email") ?? "");
  const urgency = String(formData.get("urgency") ?? "this_month");
  const volume = String(formData.get("volume") ?? "medium");
  const currentPain = String(formData.get("currentPain") ?? "");

  const { score, band } = computePilotScore(urgency, currentPain, volume);
  const payload = {
    company,
    contactName,
    email,
    urgency,
    volume,
    currentPain,
    wedge: "fintech",
    score,
    band,
    submittedAt: new Date().toISOString()
  };

  await persistPilot(payload);

  const url = new URL("/pilot-intake/success", request.url);
  url.searchParams.set("company", company);
  url.searchParams.set("band", band);
  url.searchParams.set("score", String(score));
  return NextResponse.redirect(url, { status: 303 });
}
