"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";

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
        backgroundColor: "var(--cream)",
        padding: "10rem 2.5rem 8rem",
        maxWidth: "640px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Back link */}
        <Link
          href="/writing"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "4rem",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink-muted)")}
        >
          ← Writing
        </Link>

        {/* Date */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            color: "var(--ink-muted)",
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
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "var(--ink)",
            marginBottom: "4rem",
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
                    borderTop: "1px solid rgba(26,26,24,0.15)",
                    margin: "1rem 0",
                  }}
                />
              );
            }
            return (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--ink)",
                }}
              >
                {block.trim()}
              </p>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
}
