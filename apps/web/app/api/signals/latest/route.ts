import { NextResponse } from "next/server";
import { readFintechData } from "../../../../lib/fintech-data";

export async function GET() {
  return NextResponse.json(readFintechData());
}
