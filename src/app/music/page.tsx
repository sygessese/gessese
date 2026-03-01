"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com" },
  { name: "Apple Music", url: "https://music.apple.com" },
  { name: "SoundCloud", url: "https://soundcloud.com" },
  { name: "YouTube Music", url: "https://music.youtube.com" },
  { name: "Tidal", url: "https://tidal.com" },
];

export default function Music() {
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
            marginBottom: "0.5rem",
          }}
        >
          Music
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
          streaming everywhere
        </p>

        {/* Placeholder for embed */}
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "var(--accent-light)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "var(--ink-muted)",
              textTransform: "uppercase",
            }}
          >
            Spotify embed — add artist link to activate
          </span>
        </div>

        {/* Platform links */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              onClick={() => track("music_link_click", { platform: p.name.toLowerCase() })}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.25rem 0",
                borderTop: "1px solid rgba(26,26,24,0.1)",
                textDecoration: "none",
                color: "var(--ink)",
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                fontWeight: 400,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
            >
              {p.name}
              <span style={{ fontSize: "1rem", opacity: 0.4 }}>{"↗\uFE0E"}</span>
            </motion.a>
          ))}
          <div style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }} />
        </div>
      </motion.div>
    </main>
  );
}
