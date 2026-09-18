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

const ease = "easeInOut" as const;

const cap: React.CSSProperties = {
  fontFamily: "var(--font-util)",
  fontSize: "0.7rem",
  fontWeight: 400,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--slate)",
};

/* paste the Spotify artist URL or ID here, e.g. "https://open.spotify.com/artist/XXXX" */
const SPOTIFY_ARTIST = "";
const spotifyId = SPOTIFY_ARTIST.split("/artist/").pop()?.split("?")[0] ?? "";

/* the photograph starts under the text column and dissolves across a long stretch,
   so the words sit on the ghost of the picture rather than beside it */
const fade = "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 3%, rgba(0,0,0,0.45) 13%, black 27%, black 100%)";

export default function Music() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--paper)", padding: "7.5rem 2.5rem 5rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* the rule */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "2rem", flexWrap: "wrap", borderTop: "1px solid var(--ink)", paddingTop: "0.9rem" }}
      >
        <span style={cap}>music</span>
        <span style={cap}>streaming everywhere</span>
      </motion.div>

      {/* the band — words left, photograph bleeding in from the right */}
      <div style={{ position: "relative", minHeight: "clamp(416px, 80vh, 873px)", marginTop: "1.5rem" }}>
        {/* the photograph — behind, starting a third of the way in */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "32%",
            right: 0,
            margin: 0,
            overflow: "hidden",
            WebkitMaskImage: fade,
            maskImage: fade,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/heat.jpg"
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "49% 50%" }}
          />
        </motion.figure>

        {/* the words — in front, on the left half */}
        <div style={{ position: "relative", zIndex: 1, width: "min(100%, 46%)", minWidth: "320px", display: "flex", flexDirection: "column", paddingBottom: "1rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 500,
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              marginLeft: "-0.03em",
              marginBottom: "3rem",
            }}
          >
            Music
          </motion.h1>

          {/* listen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            style={{ borderTop: "1px solid var(--line)", paddingTop: "0.9rem", marginBottom: "2.5rem" }}
          >
            <p style={{ ...cap, marginBottom: "0.75rem" }}>Listen</p>
            {spotifyId ? (
              <iframe
                title="Spotify"
                src={`https://open.spotify.com/embed/artist/${spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ display: "block", border: 0 }}
              />
            ) : (
              <div style={{ height: "152px", backgroundColor: "color-mix(in srgb, var(--mist) 70%, transparent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={cap}>Spotify embed — add artist link to activate</span>
              </div>
            )}
          </motion.div>

          {/* platforms */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {platforms.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.5 }}
                onClick={() => track("music_link_click", { platform: p.name.toLowerCase() })}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  padding: "1.05rem 0",
                  borderTop: "1px solid var(--line)",
                  textDecoration: "none",
                  color: "var(--ink)",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--assassin)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
              >
                {p.name}
                <span style={{ ...cap, color: "inherit", opacity: 0.6 }}>{"↗\uFE0E"}</span>
              </motion.a>
            ))}
            <div style={{ borderTop: "1px solid var(--line)" }} />
          </div>
        </div>
      </div>
    </main>
  );
}
