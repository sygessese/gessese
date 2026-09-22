"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";
import type { Post } from "@/lib/posts";

/* ────────────────────────────────────────────────────────────
   Homepage: the rule, the photograph, the rooms in two columns.
   ──────────────────────────────────────────────────────────── */

const rooms = [
  { href: "/writing", label: "Writing", sub: "essays · musings · brain dumps" },
  { href: "/music", label: "Music", sub: "streaming everywhere" },
  { href: "/poetry", label: "Poetry", sub: "a collection · releasing soon" },
  { href: "/work", label: "Work", sub: "things i've built" },
  { href: "/about", label: "About", sub: "the person behind the work" },
];

const photograph = { src: "/photos/bay.jpg", caption: "Gran Canaria", pos: "50% 60%" };

const ease = "easeInOut" as const;
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.08, duration: 0.6, ease },
  }),
};

const cap: React.CSSProperties = {
  fontFamily: "var(--font-util)",
  fontSize: "clamp(0.6rem, 1.4vw, 0.7rem)",
  fontWeight: 400,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--slate)",
};

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

const hoverRed = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget.querySelector(".room-label") as HTMLElement).style.color = "var(--assassin)";
    const a = e.currentTarget.querySelector(".room-arrow") as HTMLElement | null;
    if (a) a.style.opacity = "1";
  },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget.querySelector(".room-label") as HTMLElement).style.color = "var(--ink)";
    const a = e.currentTarget.querySelector(".room-arrow") as HTMLElement | null;
    if (a) a.style.opacity = "0";
  },
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((d) => setPosts(d))
      .catch(() => {});
  }, []);

  const latest = posts[0];

  return (
    <>
      <main style={{ minHeight: "100vh", padding: "clamp(5.25rem, 9.6vw, 7.5rem) clamp(1.25rem, 3.2vw, 2.5rem) clamp(3rem, 5.2vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
        {/* the name */}
        {(
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8.6vw, 8.6rem)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              whiteSpace: "nowrap",
              marginBottom: "1.25rem",
              marginLeft: "-0.04em",
            }}
          >
            Selam Gessese
          </motion.h1>
        )}

        {/* the rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "2rem",
            flexWrap: "wrap",
            borderTop: "1px solid var(--ink)",
            paddingTop: "0.9rem",
          }}
        >
          <span style={cap}>software engineer &nbsp;·&nbsp; writer &nbsp;·&nbsp; music producer</span>
          <Link
            href="/poetry"
            style={{ ...cap, color: "var(--assassin)", textDecoration: "none" }}
            onClick={() => track("section_door_click", { section: "poetry-rule" })}
          >
            poetry · a collection · releasing soon
          </Link>
        </motion.div>

        {/* the photograph */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease }}
          style={{
            position: "relative",
            margin: "1.5rem 0 0",
            height: "clamp(260px, 60vh, 720px)",
            backgroundColor: "var(--mist)",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photograph.src}
            alt={photograph.caption}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: photograph.pos }}
          />
          <figcaption style={{ ...cap, position: "absolute", left: "1.25rem", bottom: "1rem", color: "#FFFFFF", mixBlendMode: "difference" }}>
            {photograph.caption}
          </figcaption>
        </motion.figure>

        {/* ── the rooms · grid ─────────────────────────────── */}
        {(
          <div className="rooms-grid" style={{ display: "grid" }}>
            {rooms.map(({ href, label, sub }, i) => (
              <motion.div key={href} custom={i} initial="hidden" animate="visible" variants={fadeUp}>
                <Link href={href} style={{ textDecoration: "none", display: "block" }} onClick={() => track("section_door_click", { section: label.toLowerCase() })}>
                  <div
                    {...hoverRed}
                    className="room-row"
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "clamp(0.6rem, 1.6vw, 1.25rem)",
                      padding: "clamp(1.15rem, 2vw, 1.5rem) clamp(0rem, 2.8vw, 2rem) clamp(1.15rem, 2vw, 1.5rem) 0",
                      borderTop: "1px solid var(--line)",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      className="room-label"
                      style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 3.1vw, 2.9rem)", fontWeight: 500, lineHeight: 1, color: "var(--ink)", transition: "color 0.2s ease", minWidth: "min(150px, 30vw)" }}
                    >
                      {label}
                    </span>
                    <span style={{ ...cap, fontSize: "clamp(0.6rem, 1.5vw, 0.76rem)", letterSpacing: "0.1em", textTransform: "lowercase" }}>{sub}</span>
                    <span className="room-arrow" style={{ position: "absolute", right: 0, color: "var(--assassin)", opacity: 0, transition: "opacity 0.2s ease" }}>
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* sixth cell — the latest piece, so the grid closes and the page has a pulse */}
            <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}>
              {latest && (
                <Link href={`/writing/${latest.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div {...hoverRed} style={{ padding: "1.5rem 0", borderTop: "1px solid var(--line)", cursor: "pointer" }}>
                    <div style={{ ...cap, marginBottom: "0.6rem" }}>
                      Recent &nbsp;·&nbsp; {fmtDate(latest.date)}
                    </div>
                    <div
                      className="room-label"
                      style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1, color: "var(--ink)", transition: "color 0.2s ease" }}
                    >
                      {latest.title}
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          </div>
        )}

      </main>

    </>
  );
}
