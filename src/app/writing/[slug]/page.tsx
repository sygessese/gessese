"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";
import Comments from "@/components/Comments";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/posts/${slug}`)
      .then((r) => r.json())
      .then((data) => setPost(data));
  }, [slug]);

  if (!post) return null;

  // Render markdown paragraphs: split on double newline, treat --- as divider
  const blocks = post.content.split(/\n\n+/).filter(Boolean);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--paper)",
        padding: "10rem 2.5rem 8rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" as const }}
      >
        {/* Back link */}
        <Link
          href="/writing"
          style={{
            fontFamily: "var(--font-util)",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--slate)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "4rem",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--assassin)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--slate)")}
        >
          ← Writing
        </Link>

        {/* Date — the one red on this view */}
        <p
          style={{
            fontFamily: "var(--font-util)",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            color: "var(--assassin)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "var(--ink)",
            marginBottom: "2.5rem",
            fontVariationSettings: '"opsz" 36',
          }}
        >
          {post.title}
        </h1>

        {/* Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {blocks.map((block, i) => {
            if (block.trim() === "---") {
              return (
                <hr
                  key={i}
                  style={{
                    border: "none",
                    borderTop: "1px solid var(--line)",
                    margin: "1rem 0",
                  }}
                />
              );
            }
            return (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-read)",
                  fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "var(--ink)",
                }}
              >
                {block.trim()}
              </p>
            );
          })}
        </div>

        {/* Comments */}
        <Comments slug={slug} />
      </motion.div>
    </main>
  );
}
