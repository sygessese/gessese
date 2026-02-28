"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "On beginning again",
    date: "Feb 2026",
    preview: "There is something quietly radical about starting over. Not the dramatic kind — not burning it all down — but the small, private act of deciding...",
  },
  {
    title: "Things I'm learning to let be",
    date: "Jan 2026",
    preview: "I used to believe that clarity was the goal. That if I just thought hard enough, sat still long enough, wrote long enough — things would resolve...",
  },
];

export default function Writing() {
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
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              style={{
                padding: "2.5rem 0",
                borderTop: "1px solid rgba(26,26,24,0.1)",
                cursor: "pointer",
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
                {post.date}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--ink)",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--ink-muted)",
                  maxWidth: "560px",
                }}
              >
                {post.preview}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />
        </div>

        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            color: "var(--ink-muted)",
            marginTop: "4rem",
            letterSpacing: "0.05em",
            fontStyle: "italic",
          }}
        >
          More coming. Connected to Sanity CMS — posts will live here once the pipeline is set up.
        </p>
      </motion.div>
    </main>
  );
}
