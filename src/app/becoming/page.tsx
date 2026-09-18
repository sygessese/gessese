"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

const ease = "easeInOut" as const;

const cap: React.CSSProperties = {
  fontFamily: "var(--font-util)",
  fontSize: "0.7rem",
  fontWeight: 400,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--slate)",
};

export default function Becoming() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--paper)", padding: "7.5rem 2.5rem 5rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* the rule */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "2rem", flexWrap: "wrap", borderTop: "1px solid var(--ink)", paddingTop: "0.9rem" }}
      >
        <span style={cap}>a poetry collection</span>
        <span style={cap}>2018 — 2026</span>
      </motion.div>

      {/* title + excerpt */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
          gap: "4rem",
          alignItems: "end",
          padding: "6rem 0 5rem",
        }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4.5rem, 13vw, 12rem)",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 0.85,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              marginBottom: "2rem",
              marginLeft: "-0.04em",
            }}
          >
            Bloom
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} style={cap}>
            Selam Gessese
          </motion.p>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease }}
          style={{
            margin: 0,
            fontFamily: "var(--font-read)",
            fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.55,
            color: "var(--ink)",
            maxWidth: "34ch",
            justifySelf: "end",
          }}
        >
          There is a version of me that lives at the edge of every decision I almost made — I am learning to stop visiting her.
        </motion.blockquote>
      </div>

      {/* preorder — the one red */}
      <motion.a
        href="#preorder"
        onClick={() => track("preorder_click")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(200px, 3fr) minmax(0, 9fr) 2rem",
          alignItems: "baseline",
          gap: "2rem",
          padding: "1.7rem 0",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          textDecoration: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => ((e.currentTarget.querySelector(".pre-label") as HTMLElement).style.color = "var(--assassin)")}
        onMouseLeave={(e) => ((e.currentTarget.querySelector(".pre-label") as HTMLElement).style.color = "var(--ink)")}
      >
        <span className="pre-label" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 3.4vw, 3rem)", fontWeight: 500, lineHeight: 1, color: "var(--ink)", transition: "color 0.2s ease" }}>
          Preorder
        </span>
        <span style={{ ...cap, letterSpacing: "0.1em", textTransform: "lowercase" }}>coming soon</span>
        <span style={{ color: "var(--assassin)", textAlign: "right" }}>→</span>
      </motion.a>
    </main>
  );
}
