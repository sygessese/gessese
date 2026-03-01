"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

export default function About() {
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
        transition={{ duration: 0.8, ease: "easeInOut" as const }}
      >
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--ink)",
            marginBottom: "5rem",
          }}
        >
          About
        </h1>

        {/* Two column: image placeholder + text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "3rem",
            alignItems: "start",
            marginBottom: "4rem",
          }}
        >
          {/* Photo placeholder */}
          <div
            style={{
              aspectRatio: "3/4",
              backgroundColor: "var(--accent-light)",
              borderRadius: "2px",
            }}
          />

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.65,
                color: "var(--ink)",
                marginBottom: "2rem",
              }}
            >
              I'm Selam — a poet, musician, and writer based in Seattle. I make things that live at the intersection of language, sound, and feeling.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--ink-muted)",
                marginBottom: "1.5rem",
              }}
            >
              My debut poetry collection, <em>Becoming</em>, is in progress — a meditation on identity, transformation, and what it means to stay.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--ink-muted)",
              }}
            >
              I also write software — systems, interfaces, things that work. I hold a degree in Political Science from the University of Washington and trained at Hack Reactor.
            </motion.p>
          </div>
        </div>

        {/* Links row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            display: "flex",
            gap: "2.5rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(26,26,24,0.1)",
          }}
        >
          {[
            { label: "GitHub", href: "https://github.com/sygessese" },
            { label: "LinkedIn", href: "https://linkedin.com/in/sygessese" },
            { label: "Email", href: "mailto:sygessese@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("about_link_click", { link: label.toLowerCase() })}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink-muted)")}
            >
              {label} {"↗\uFE0E"}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
