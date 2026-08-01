

import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const SHEETS_URL = process.env.SHEETS_API_URL; // add in .env

  try {
    const res = await fetch(`${SHEETS_URL}?action=lookup&id=${id}`);
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: true });
  }
} 