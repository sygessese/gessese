"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Twittok",
    type: "Web Application",
    description: "Social forum system with threads, posts, and home feed. Flux architecture, React, MongoDB, deployed on AWS with Docker.",
    github: "https://github.com/sygessese/twitook",
  },
  {
    title: "Jastdance",
    type: "Web Application",
    description: "Music streaming service comments module. Nginx load balancing across Dockerized Node servers on AWS EC2. Stress tested with Loader.io and New Relic.",
    github: "https://github.com/sygessese/info-comments-module",
  },
  {
    title: "Hungry",
    type: "iOS Mobile App",
    description: "Geolocation-based restaurant recommender filtering by proximity, hours, and rating. Yelp API + Google Maps. React Native.",
    github: "https://github.com/sygessese/hungry-app-root",
  },
  {
    title: "Distilled",
    type: "Web Application",
    description: "Clothing retailer product detail page. Proxy server rendering Dockerized React microservices across separate AWS EC2 instances. 100% Google PageSpeed.",
    github: "https://github.com/Distilled-org/Selam_service",
  },
  {
    title: "FlickStash",
    type: "Web Application",
    description: "Movie search and save app using the Movie Database API. Organize by watched / unwatched. React, Node, PostgreSQL.",
    github: "https://github.com/sygessese/flickstash",
  },
];

export default function Work() {
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
          Work
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
          things i've built
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              style={{
                padding: "2.5rem 0",
                borderTop: "1px solid rgba(26,26,24,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  gap: "1rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 400,
                    color: "var(--ink)",
                    lineHeight: 1.1,
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
                  marginBottom: "1.25rem",
                  maxWidth: "520px",
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
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.6")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              >
                GitHub ↗
              </a>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />
        </div>
      </motion.div>
    </main>
  );
}
