"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeInOut" as const },
  });
// ─── Content ──────────────────────────────────────────────────────────────────

const experience = [
  {
    title: "ACLU of Washington",
    role: "Public Relations",
    date: "2018 – 2019",
    details:
      "Migrated local volunteer system to an online database, doubling participation; created documentation for onboarding staff. Produced the annual department report by analyzing communications activity and determining where to divert energy and funds for the following year.",
  },
  {
    title: "City of Seattle",
    role: "Community Ambassador",
    date: "2018 – 2019",
    details:
      "Provided translation services in Amharic. Audited programs receiving grant funding. Engaged underrepresented communities on public services available to them.",
  },
];

const education = [
  {
    title: "Hack Reactor",
    credential: "Software Engineering",
    date: "December 2019",
  },
  {
    title: "University of Washington",
    credential: "Bachelor of Arts, Political Science",
    date: "June 2017",
    details: "Dean's List — Winter 2016, Spring 2016, Spring 2017",
  },
  {
    title: "Seattle Central College",
    credential: "Associate of Arts",
    date: "June 2015",
    details:
      "Dean's List — Spring 2014, Fall 2014, Winter 2015, Spring 2015 · President & Founder, Art & Culture Club",
  },
];

const projects = [
  {
    title: "Twitook",
    type: "Web Application",
    description:
      "Social network with post, comment, and home feed features. Flux architecture with React on the front end; JWT authentication and MongoDB on the back end.",
    github: "https://github.com/sygessese/twitook",
  },
  {
    title: "Hungry",
    type: "iOS Mobile App",
    description:
      "Geolocation-based restaurant recommender filtering by proximity, hours, and rating. Yelp GraphQL API + Google Maps. Built with React Native, Node.js, and MongoDB.",
    github: "https://github.com/sygessese/hungry-app-root",
  },
];

const skills = [
  { label: "Languages", value: "JavaScript, CSS, HTML, Java, SQL" },
  {
    label: "Frameworks",
    value: "React, Node.js, Express, Next.js, GatsbyJS, React Native, Bootstrap, Styled Components",
  },
  { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Cassandra" },
  { label: "Tools", value: "Git, AWS, Docker, Jest, Postman, Loader.io, Nginx, Webpack" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--ink-muted)",
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
        borderTop: "1px solid rgba(26,26,24,0.1)",
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
        backgroundColor: "var(--cream)",
        padding: "10rem 2.5rem 8rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <motion.div {...fadeUp(0)}>
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
          Work
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--ink-muted)",
            textTransform: "uppercase",
          }}
        >
          Experience · Education · Projects
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
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1rem",
                marginBottom: "0.4rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                }}
              >
                {e.title}
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--ink-muted)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {e.date}
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.75rem",
              }}
            >
              {e.role}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--ink-muted)",
              }}
            >
              {e.details}
            </p>
          </HairlineRow>
        ))}
        <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />
      </motion.div>

      {/* ── Education ── */}
      <motion.div {...fadeUp(0.2)}>
        <SectionLabel>Education</SectionLabel>
        {education.map((e, i) => (
          <HairlineRow key={e.title} delay={0.25 + i * 0.08}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1rem",
                marginBottom: "0.3rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                }}
              >
                {e.title}
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--ink-muted)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {e.date}
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: e.details ? "0.75rem" : 0,
              }}
            >
              {e.credential}
            </p>
            {e.details && (
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "var(--ink-muted)",
                }}
              >
                {e.details}
              </p>
            )}
          </HairlineRow>
        ))}
        <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />
      </motion.div>

      {/* ── Projects ── */}
      <motion.div {...fadeUp(0.3)}>
        <SectionLabel>Projects</SectionLabel>
        {projects.map((p, i) => (
          <HairlineRow key={p.title} delay={0.35 + i * 0.08}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                }}
              >
                {p.title}
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--ink-muted)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {p.type}
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--ink-muted)",
                marginBottom: "1rem",
                maxWidth: "540px",
              }}
            >
              {p.description}
            </p>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent)",
                paddingBottom: "1px",
              }}
            >
              GitHub ↗
            </a>
          </HairlineRow>
        ))}
        <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />
      </motion.div>

      {/* ── Skills ── */}
      <motion.div {...fadeUp(0.4)}>
        <SectionLabel>Skills</SectionLabel>
        <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }}>
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.45 + i * 0.06)}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "1.5rem",
                padding: "1.25rem 0",
                borderBottom: "1px solid rgba(26,26,24,0.1)",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  paddingTop: "2px",
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "var(--ink)",
                }}
              >
                {s.value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
