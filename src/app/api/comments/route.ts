import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/* ── Rate limiting (in-memory, resets on cold start) ── */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3; // max comments
const RATE_WINDOW = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

/* ── Sanitize: strip HTML tags ── */
function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many comments. Please wait a few minutes." },
        { status: 429 }
      );
    }

    const { slug, name, email, body } = await req.json();

    // Validate
    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.trim().length > 100) {
      return NextResponse.json({ error: "Name is required (max 100 chars)" }, { status: 400 });
    }
    if (!body || typeof body !== "string" || body.trim().length === 0 || body.trim().length > 5000) {
      return NextResponse.json({ error: "Comment is required (max 5000 chars)" }, { status: 400 });
    }
    if (email && (typeof email !== "string" || email.length > 255)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Sanitize
    const cleanName = stripHtml(name.trim());
    const cleanBody = stripHtml(body.trim());
    const cleanEmail = email ? stripHtml(email.trim()) : null;

    const { error } = await supabase.from("comments").insert({
      post_slug: slug,
      name: cleanName,
      email: cleanEmail,
      body: cleanBody,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save comment" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
