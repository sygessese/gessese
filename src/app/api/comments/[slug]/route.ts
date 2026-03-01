import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const { data, error } = await supabase
    .from("comments")
    .select("id, name, body, created_at")
    .eq("post_slug", slug)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase fetch error:", error);
    return NextResponse.json([], { status: 500 });
  }

  return NextResponse.json(data);
}
