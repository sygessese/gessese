"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeInOut" as const },
  });
// ─── Content ──────────────────────────────────────────────────────────────────

const experience: { title: string; role: string; current?: boolean; details: string }[] = [
  {
    title: "Axon",
    role: "Software Engineer",
    current: true,
    details: "Live officer tracking, multi-state records search, and the Fusus real-time crime center.",
  },
  {
    title: "HOVER",
    role: "Software Engineer Intern",
    details: "Component library, account flows, and feature flags that lifted sales 30%.",
  },
  {
    title: "ACLU",
    role: "Public Relations",
    details: "Volunteer program migration that doubled participation.",
  },
  {
    title: "City of Seattle",
    role: "Ambassador",
    details: "Amharic translation and community outreach.",
  },
];

const education: { title: string; credential: string; details?: string }[] = [
  {
    title: "Hack Reactor",
    credential: "Advanced Software Engineering Immersive",
  },
  {
    title: "University of Washington",
    credential: "Bachelor of Arts, Political Science and Government",
    details: "Three-time Dean's List",
  },
];

const languages = [
  { label: "Native", value: "English, Amharic" },
  { label: "Conversational", value: "Spanish, Tigrinya" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-util)",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--slate)",
        marginBottom: "2rem",
        paddingTop: "4rem",
      }}
    >
      {children}
    </p>
  );
}

function HairlineRow({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      style={{
        borderTop: "1px solid var(--line)",
        padding: "2rem 0",
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Work() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--paper)",
        padding: "clamp(5.25rem, 13vw, 10rem) clamp(1.25rem, 3.2vw, 2.5rem) clamp(3rem, 10.4vw, 8rem)",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <motion.div {...fadeUp(0)}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 500,
            lineHeight: 0.95,
            color: "var(--ink)",
            marginBottom: "1rem",
          }}
        >
          Work
        </h1>
        <p
          style={{
            fontFamily: "var(--font-read)",
            fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "var(--slate)",
          }}
        >
          Software engineer building real-time tools for public safety.
        </p>
      </motion.div>

      {/* ── Experience ── */}
      <motion.div {...fadeUp(0.1)}>
        <SectionLabel>Experience</SectionLabel>
        {experience.map((e, i) => (
          <HairlineRow key={e.title} delay={0.15 + i * 0.08}>
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                gap: "0.5rem",
                marginBottom: "0.4rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                {e.title}
              </h2>
              {e.current && (
                <span
                  style={{
                    fontFamily: "var(--font-util)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    color: "var(--assassin)",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <p
              style={{
                fontFamily: "var(--font-util)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--slate)",
                marginBottom: "0.75rem",
              }}
            >
              {e.role}
            </p>
            <p
              style={{
                fontFamily: "var(--font-read)",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.65,
                color: "var(--slate)",
              }}
            >
              {e.details}
            </p>
          </HairlineRow>
        ))}
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </motion.div>

      {/* ── Education ── */}
      <motion.div {...fadeUp(0.2)}>
        <SectionLabel>Education</SectionLabel>
        {education.map((e, i) => (
          <HairlineRow key={e.title} delay={0.25 + i * 0.08}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 500,
                color: "var(--ink)",
                marginBottom: "0.3rem",
              }}
            >
              {e.title}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-util)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--slate)",
                marginBottom: e.details ? "0.75rem" : 0,
              }}
            >
              {e.credential}
            </p>
            {e.details && (
              <p
                style={{
                  fontFamily: "var(--font-util)",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "var(--slate)",
                }}
              >
                {e.details}
              </p>
            )}
          </HairlineRow>
        ))}
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </motion.div>

      {/* ── Languages ── */}
      <motion.div {...fadeUp(0.3)}>
        <SectionLabel>Languages</SectionLabel>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {languages.map((l, i) => (
            <motion.div
              key={l.label}
              {...fadeUp(0.35 + i * 0.06)}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1.5rem",
                padding: "1.25rem 0",
                borderBottom: "1px solid var(--line)",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-util)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--slate)",
                }}
              >
                {l.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-read)",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "var(--ink)",
                }}
              >
                {l.value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
