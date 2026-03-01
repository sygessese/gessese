"use client";

import { useState, useEffect, useCallback } from "react";
import { track } from "@vercel/analytics";

interface Comment {
  id: number;
  name: string;
  body: string;
  created_at: string;
}

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch {
      // silently fail — comments are non-critical
    }
  }, [slug]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name: name.trim(), email: email.trim(), body: body.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to post comment");
      }

      track("comment_posted", { slug });
      setName("");
      setEmail("");
      setBody("");
      setStatus("sent");
      fetchComments();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section style={{ marginTop: "6rem", paddingTop: "3rem", borderTop: "1px solid rgba(26,26,24,0.1)" }}>
      <h2
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.8rem",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--ink)",
          marginBottom: "2rem",
        }}
      >
        Thoughts
      </h2>

      {/* Comment list */}
      {comments.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
          {comments.map((c) => (
            <div key={c.id} style={{ paddingBottom: "1.5rem", borderBottom: "1px solid rgba(26,26,24,0.06)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  {c.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.65rem",
                    color: "var(--ink-muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {formatDate(c.created_at)}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "var(--ink)",
                  fontWeight: 400,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Comment form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            style={{
              flex: "1 1 200px",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.8rem",
              padding: "0.75rem 1rem",
              border: "1px solid rgba(26,26,24,0.12)",
              borderRadius: "2px",
              backgroundColor: "transparent",
              color: "var(--ink)",
              outline: "none",
            }}
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            style={{
              flex: "1 1 200px",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.8rem",
              padding: "0.75rem 1rem",
              border: "1px solid rgba(26,26,24,0.12)",
              borderRadius: "2px",
              backgroundColor: "transparent",
              color: "var(--ink)",
              outline: "none",
            }}
          />
        </div>
        <textarea
          placeholder="Leave a thought..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          maxLength={5000}
          rows={4}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.05rem",
            padding: "0.75rem 1rem",
            border: "1px solid rgba(26,26,24,0.12)",
            borderRadius: "2px",
            backgroundColor: "transparent",
            color: "var(--ink)",
            outline: "none",
            resize: "vertical",
            lineHeight: 1.6,
          }}
        />

        {status === "error" && (
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", color: "#c44" }}>
            {errorMsg}
          </p>
        )}

        {status === "sent" && (
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", color: "var(--accent)" }}>
            Comment posted.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            alignSelf: "flex-start",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.75rem 2rem",
            border: "1px solid var(--ink)",
            borderRadius: "2px",
            backgroundColor: "transparent",
            color: "var(--ink)",
            cursor: status === "sending" ? "wait" : "pointer",
            opacity: status === "sending" ? 0.5 : 1,
            transition: "all 0.2s ease",
          }}
        >
          {status === "sending" ? "Posting..." : "Post"}
        </button>
      </form>
    </section>
  );
}
