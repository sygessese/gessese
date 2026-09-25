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
    details:
      "Mostly front-end work on apps for first responders, like the one that shows where officers are headed on active calls. On the search team, built features for person, vehicle, and license plate search, including searches that work across state lines. Now on the team behind Fusus, Axon's real-time crime center platform.",
  },
  {
    title: "HOVER",
    role: "Software Engineer Intern",
    details:
      "Built reusable components for the internal UI library used by about 15 developers. Added feature flags that sent each client group to its own screens, raising membership sales about 30%. Rebuilt the sign-up, activation, and password-reset flows used by 10k+ people, and cleaned up legacy routing code to make it about 400ms faster.",
  },
  {
    title: "ACLU of Washington",
    role: "Public Relations",
    details:
      "Moved the volunteer program to an online database, doubling participation, and produced the department's annual report.",
  },
  {
    title: "City of Seattle",
    role: "Community Ambassador",
    details:
      "Amharic translation, grant program audits, and outreach connecting underrepresented communities with city services.",
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
            marginBottom: "0.5rem",
          }}
        >
          Work
        </h1>
        <p
          style={{
            fontFamily: "var(--font-util)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--slate)",
            textTransform: "uppercase",
          }}
        >
          Experience · Education
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
    </main>
  );
}
