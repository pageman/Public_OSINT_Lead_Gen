import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

function computeLeadScore(role: string, urgency: string, currentPain: string) {
  let score = 0;

  if (role === "operator" || role === "insurer") score += 30;
  if (urgency === "this_week") score += 25;
  if (urgency === "this_month") score += 15;

  const pain = currentPain.toLowerCase();
  if (pain.includes("compliance") || pain.includes("routing") || pain.includes("reconciliation")) score += 25;
  if (pain.includes("backlog") || pain.includes("exception") || pain.includes("claims")) score += 20;

  const band = score >= 80 ? "high_intent" : score >= 60 ? "qualified" : "nurture";
  return { score, band };
}

async function persistLead(payload: Record<string, string | number>) {
  const preferredPath = path.join(process.cwd(), "..", "..", "data", "lead-capture", "submissions.ndjson");
  const fallbackPath = path.join("/tmp", "osint-lead-capture.ndjson");
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
  const email = String(formData.get("email") ?? "");
  const company = String(formData.get("company") ?? "");
  const role = String(formData.get("role") ?? "operator");
  const urgency = String(formData.get("urgency") ?? "this_month");
  const currentPain = String(formData.get("currentPain") ?? "");
  const wedge = String(formData.get("wedge") ?? "fintech");
  const sourcePage = String(formData.get("sourcePage") ?? "/insights");

  const { score, band } = computeLeadScore(role, urgency, currentPain);
  const payload = {
    email,
    company,
    role,
    urgency,
    currentPain,
    wedge,
    sourcePage,
    leadScore: score,
    scoreBand: band,
    submittedAt: new Date().toISOString()
  };

  const webhookUrl = process.env.LEAD_CAPTURE_WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } else {
    await persistLead(payload);
  }

  const url = new URL("/insights/success", request.url);
  url.searchParams.set("score", String(score));
  url.searchParams.set("band", band);
  url.searchParams.set("company", company);
  return NextResponse.redirect(url, { status: 303 });
}
