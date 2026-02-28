import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  // Strip full content from list view — just metadata
  return NextResponse.json(
    posts.map(({ slug, title, date, description }) => ({
      slug,
      title,
      date,
      description,
    }))
  );
}
