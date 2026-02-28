"use client";

import { motion } from "framer-motion";
import SilkOrb from "@/components/SilkOrb";

export default function Becoming() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--ink)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2.5rem 6rem",
      }}
    >
      {/* Dark-toned orb for this page */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
        <motion.div
          style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 40%, #5C3A1E 0%, #3A2010 40%, transparent 80%)",
            filter: "blur(80px)",
            opacity: 0.7,
          }}
          animate={{
            x: [0, 20, -10, 8, 0],
            y: [0, -18, 12, -6, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto", width: "100%" }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          A poetry collection
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4rem, 12vw, 9rem)",
            fontWeight: 300,
            lineHeight: 0.88,
            color: "var(--cream)",
            marginBottom: "3rem",
            fontStyle: "italic",
          }}
        >
          Becoming
        </motion.h1>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            color: "rgba(249,247,244,0.5)",
            textTransform: "uppercase",
            marginBottom: "4rem",
          }}
        >
          Selam Gessese
        </motion.p>

        {/* Excerpt */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "rgba(249,247,244,0.75)",
            borderLeft: "1px solid var(--accent)",
            paddingLeft: "2rem",
            marginBottom: "4rem",
            maxWidth: "480px",
          }}
        >
          "There is a version of me that lives at the edge of every decision I almost made — I am learning to stop visiting her."
        </motion.blockquote>

        {/* Preorder CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="#preorder"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink)",
              backgroundColor: "var(--accent)",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Preorder — coming soon
          </a>
        </motion.div>
      </div>
    </main>
  );
}
