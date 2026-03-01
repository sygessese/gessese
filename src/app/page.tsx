"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SilkOrb from "@/components/SilkOrb";

const sections = [
  {
    href: "/writing",
    label: "Writing",
    sub: "essays · musings · brain dumps",
  },
  {
    href: "/music",
    label: "Music",
    sub: "streaming everywhere",
  },
  {
    href: "/becoming",
    label: "Becoming",
    sub: "a poetry collection · preorder now",
  },
  {
    href: "/work",
    label: "Work",
    sub: "things i've built",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeInOut" as const },
  }),
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2.5rem 4rem",
      }}
    >
      <SilkOrb />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" as const }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            marginBottom: "1.25rem",
          }}
        >
          Selam
          <br />
          <span style={{ fontStyle: "italic" }}>Gessese</span>
        </motion.h1>

        {/* Identity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.8rem",
            fontWeight: 300,
            letterSpacing: "0.2em",
            color: "var(--ink-muted)",
            textTransform: "uppercase",
            marginBottom: "5rem",
          }}
        >
          poet &nbsp;·&nbsp; musician &nbsp;·&nbsp; writer
        </motion.p>

        {/* Section doors */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {sections.map(({ href, label, sub }, i) => (
            <motion.div
              key={href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Link
                href={href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1.5rem",
                    padding: "1.4rem 0",
                    borderTop: "1px solid rgba(26,26,24,0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget.querySelector(".door-label") as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget.querySelector(".door-arrow") as HTMLElement).style.opacity = "1";
                    (e.currentTarget.querySelector(".door-arrow") as HTMLElement).style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.querySelector(".door-label") as HTMLElement).style.color = "var(--ink)";
                    (e.currentTarget.querySelector(".door-arrow") as HTMLElement).style.opacity = "0";
                    (e.currentTarget.querySelector(".door-arrow") as HTMLElement).style.transform = "translateX(0px)";
                  }}
                >
                  <span
                    className="door-label"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                      fontWeight: 400,
                      color: "var(--ink)",
                      transition: "color 0.2s ease",
                      minWidth: "160px",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.72rem",
                      fontWeight: 300,
                      letterSpacing: "0.1em",
                      color: "var(--ink-muted)",
                      textTransform: "lowercase",
                    }}
                  >
                    {sub}
                  </span>
                  <span
                    className="door-arrow"
                    style={{
                      marginLeft: "auto",
                      fontSize: "1rem",
                      color: "var(--accent)",
                      opacity: 0,
                      transition: "opacity 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Last border */}
          <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />
        </div>
      </div>
    </main>
  );
}
