"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writing", label: "writing" },
  { href: "/music", label: "music" },
  { href: "/becoming", label: "becoming" },
  { href: "/about", label: "about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 2.5rem",
        backgroundColor: "transparent",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.1rem",
          fontWeight: 400,
          letterSpacing: "0.12em",
          color: "var(--ink)",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        Selam Gessese
      </Link>

      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: pathname === href ? "var(--accent)" : "var(--ink-muted)",
                textDecoration: "none",
                textTransform: "lowercase",
                transition: "color 0.2s ease",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
