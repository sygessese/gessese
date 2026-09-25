"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeInOut" as const },
  });
// ─── Content ──────────────────────────────────────────────────────────────────

type Entry = { title: string; meta: string; current?: boolean; details?: string };

const experience: Entry[] = [
  { title: "Axon", meta: "Software Engineer", current: true },
  { title: "HOVER", meta: "Software Engineer Intern" },
  { title: "ACLU", meta: "Public Relations" },
  { title: "City of Seattle", meta: "Ambassador" },
];

const education: Entry[] = [
  { title: "Hack Reactor", meta: "Advanced Software Engineering Immersive" },
  {
    title: "University of Washington",
    meta: "Bachelor of Arts, Political Science and Government",
    details: "Three-time Dean's List",
  },
];

const languages = "English and Amharic (native), Spanish and Tigrinya (conversational)";

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
        padding: "1.5rem 0",
      }}
    >
      {children}
    </motion.div>
  );
}

// Name left, role right, on one line; folds to a stack on a phone (.work-row in globals.css).
function EntryRow({ entry, delay }: { entry: Entry; delay: number }) {
  return (
    <HairlineRow delay={delay}>
      <div className="work-row">
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.9rem", flexShrink: 0 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 500,
              color: "var(--ink)",
            }}
          >
            {entry.title}
          </h2>
          {entry.current && (
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
          className="work-meta"
          style={{
            fontFamily: "var(--font-util)",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--slate)",
          }}
        >
          {entry.meta}
        </p>
      </div>
      {entry.details && (
        <p
          style={{
            fontFamily: "var(--font-read)",
            fontSize: "0.95rem",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "var(--slate)",
            marginTop: "0.4rem",
          }}
        >
          {entry.details}
        </p>
      )}
    </HairlineRow>
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
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <motion.div
        {...fadeUp(0)}
        style={{ borderBottom: "1px solid var(--ink)", paddingBottom: "clamp(2rem, 4vw, 3rem)" }}
      >
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
          <EntryRow key={e.title} entry={e} delay={0.15 + i * 0.08} />
        ))}
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </motion.div>

      {/* ── Education ── */}
      <motion.div {...fadeUp(0.2)}>
        <SectionLabel>Education</SectionLabel>
        {education.map((e, i) => (
          <EntryRow key={e.title} entry={e} delay={0.25 + i * 0.08} />
        ))}
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </motion.div>

      {/* ── Languages ── */}
      <motion.div {...fadeUp(0.3)}>
        <SectionLabel>Languages</SectionLabel>
        <HairlineRow delay={0.35}>
          <p
            style={{
              fontFamily: "var(--font-read)",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.65,
              color: "var(--ink)",
            }}
          >
            {languages}
          </p>
        </HairlineRow>
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </motion.div>
    </main>
  );
}
