"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

const links = [
  { href: "/writing", label: "writing" },
  { href: "/music", label: "music" },
  { href: "/poetry", label: "poetry" },
  { href: "/about", label: "about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <Link
        href="/"
        className="nav-name"
        onClick={() => track("nav_click", { link: "home" })}
      >
        <span className="nav-name-full">Selam Gessese</span>
        <span className="nav-name-stacked" aria-hidden="true">
          <span>Selam</span>
          <span>Gessese</span>
        </span>
      </Link>

      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="nav-link"
              style={{
                color: pathname === href ? "var(--assassin)" : "var(--slate)",
              }}
              onClick={() => track("nav_click", { link: label })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
