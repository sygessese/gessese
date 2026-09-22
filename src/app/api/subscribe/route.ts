import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* ── Rate limiting (in-memory, resets on cold start) ── */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max signups per window per IP
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

/* ── Loose email shape check ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please wait a few minutes." },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!apiKey || !audienceId) {
      console.error("Resend env vars missing (RESEND_API_KEY / RESEND_AUDIENCE_ID)");
      return NextResponse.json({ error: "Signups are not configured yet." }, { status: 503 });
    }

    const { email } = await req.json();

    if (!email || typeof email !== "string" || email.length > 255 || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();

    const resend = new Resend(apiKey);
    const { error } = await resend.contacts.create({
      email: cleanEmail,
      audienceId,
      unsubscribed: false,
    });

    // Resend treats a repeat email as success; only surface real failures.
    if (error) {
      console.error("Resend contacts.create error:", error);
      return NextResponse.json({ error: "Could not add you right now. Try again shortly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
