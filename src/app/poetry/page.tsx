"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

const ease = "easeInOut" as const;

const cap: React.CSSProperties = {
  fontFamily: "var(--font-util)",
  fontSize: "clamp(0.6rem, 1.4vw, 0.7rem)",
  fontWeight: 400,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--slate)",
};

export default function Becoming() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        track("bloom_subscribe");
        setStatus("done");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--paper)", padding: "clamp(5.25rem, 9.6vw, 7.5rem) clamp(1.25rem, 3.2vw, 2.5rem) clamp(3rem, 6.5vw, 5rem)", maxWidth: "1400px", margin: "0 auto" }}>
      {/* the rule */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "2rem", flexWrap: "wrap", borderTop: "1px solid var(--ink)", paddingTop: "0.9rem" }}
      >
        <span style={cap}>a poetry collection</span>
        <span style={cap}>2018 — 2026</span>
      </motion.div>

      {/* title + excerpt */}
      <div
        className="bloom-head"
        style={{
          display: "grid",
          gap: "clamp(1.5rem, 3vw, 2.5rem)",
          padding: "clamp(2.75rem, 6vw, 5rem) 0 clamp(2.25rem, 5vw, 4rem)",
        }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 6.6vw, 6rem)",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "1rem",
              marginLeft: "-0.02em",
              textWrap: "balance",
            }}
          >
            The Distance I Mistook For Love
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} style={cap}>
            Selam Gessese
          </motion.p>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease }}
          className="bloom-quote"
          style={{
            margin: 0,
            fontFamily: "var(--font-read)",
            fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.55,
            color: "var(--ink)",
            maxWidth: "min(42ch, 100%)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              fontFamily: "var(--font-read)",
              fontStyle: "italic",
              fontSize: "clamp(5rem, 9vw, 8.5rem)",
              lineHeight: 0.62,
              height: "0.5em",
              color: "color-mix(in srgb, var(--slate) 52%, var(--paper))",
              marginLeft: "-0.04em",
              userSelect: "none",
            }}
          >
            &ldquo;
          </span>
          {[
            "I stayed longer than I should have",
            "trying harder than I needed to",
            "after all, I am my mother's daughter",
            "hoping to save my father in you",
          ].map((line) => (
            <span key={line} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </motion.blockquote>
      </div>

      {/* the buy placeholder — inactive until launch day */}
      <motion.div
        aria-disabled="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="pre-row"
        style={{
          display: "grid",
          alignItems: "baseline",
          gap: "clamp(0.5rem, 2.6vw, 2rem)",
          padding: "1.7rem 0",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          cursor: "default",
          userSelect: "none",
        }}
      >
        <span
          className="pre-label"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
            fontWeight: 500,
            lineHeight: 1.05,
            color: "color-mix(in srgb, var(--slate) 55%, var(--paper))",
          }}
        >
          Available Soon
        </span>
        <span style={{ ...cap, letterSpacing: "0.1em", textTransform: "lowercase", color: "color-mix(in srgb, var(--slate) 55%, var(--paper))" }}>
          coming winter 2026
        </span>
      </motion.div>

      {/* email capture */}
      <motion.section
        id="preorder"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        style={{
          scrollMarginTop: "6rem",
          padding: "clamp(2.5rem, 5vw, 4rem) 0 clamp(1rem, 3vw, 2rem)",
          display: "grid",
          gap: "clamp(1.5rem, 3.5vw, 2.5rem)",
          maxWidth: "min(58rem, 100%)",
        }}
      >
        <div style={{ display: "grid", gap: "1rem" }}>
          <span style={cap}>the list</span>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
            }}
          >
            Be the first to hold it
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-read)",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              lineHeight: 1.6,
              color: "var(--slate)",
            }}
          >
            Leave your email and I&apos;ll write to you the day the paperback is officially available to order.
          </p>
        </div>

        {status === "done" ? (
          <p
            role="status"
            style={{
              margin: 0,
              fontFamily: "var(--font-read)",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "var(--ink)",
              borderTop: "1px solid var(--line)",
              paddingTop: "1.4rem",
            }}
          >
            Thank you — you&apos;re on the list. I&apos;ll be in touch on launch day.
          </p>
        ) : (
          <form onSubmit={handleSubscribe} noValidate style={{ display: "grid", gap: "0.9rem" }}>
            <div className="sub-row" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", maxWidth: "32rem" }}>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                disabled={status === "loading"}
                style={{
                  flex: "1 1 16rem",
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--ink)",
                  borderRadius: 0,
                  padding: "0.75rem 0.1rem",
                  fontFamily: "var(--font-read)",
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  flex: "0 0 auto",
                  background: "var(--assassin)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 0,
                  padding: "0.85rem 1.6rem",
                  fontFamily: "var(--font-util)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  cursor: status === "loading" ? "default" : "pointer",
                  opacity: status === "loading" ? 0.6 : 1,
                  transition: "opacity 0.2s ease",
                }}
              >
                {status === "loading" ? "Adding…" : "Notify me"}
              </button>
            </div>
            {status === "error" && (
              <p role="alert" style={{ ...cap, textTransform: "none", letterSpacing: "0.02em", color: "var(--assassin)" }}>
                {message}
              </p>
            )}
          </form>
        )}
      </motion.section>
    </main>
  );
}
