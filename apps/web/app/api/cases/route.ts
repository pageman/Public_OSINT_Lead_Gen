import { NextResponse } from "next/server";
import { readCasesData } from "../../../lib/cases-data";

export async function GET() {
  return NextResponse.json(readCasesData());
}
