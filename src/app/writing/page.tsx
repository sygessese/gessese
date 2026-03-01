"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Post } from "@/lib/posts";

export default function Writing() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--cream)",
        padding: "10rem 2.5rem 6rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--ink)",
            marginBottom: "0.5rem",
          }}
        >
          Writing
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--ink-muted)",
            textTransform: "uppercase",
            marginBottom: "5rem",
          }}
        >
          essays · musings · brain dumps
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <Link href={`/writing/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{ padding: "2.5rem 0", borderTop: "1px solid rgba(26,26,24,0.1)", cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    const title = e.currentTarget.querySelector(".post-title") as HTMLElement;
                    if (title) title.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    const title = e.currentTarget.querySelector(".post-title") as HTMLElement;
                    if (title) title.style.color = "var(--ink)";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      color: "var(--ink-muted)",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                  </div>
                  <h2
                    className="post-title"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: "var(--ink)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {post.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
          {posts.length > 0 && <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />}
        </div>
      </motion.div>
    </main>
  );
}
