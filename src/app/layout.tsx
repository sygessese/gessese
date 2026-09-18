import type { Metadata } from "next";
import { Bodoni_Moda, Archivo, Spectral } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";

// display — Bodoni Moda, variable; opsz is the register dial (auto by size)
const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// util — Archivo, small sizes only: nav, dates, labels
const util = Archivo({
  variable: "--font-util",
  subsets: ["latin"],
});

// read — Spectral, long-form screen reading
const read = Spectral({
  variable: "--font-read",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Selam Gessese",
  description: "Poet. Musician. Writer.",
  openGraph: {
    title: "Selam Gessese",
    description: "Poet. Musician. Writer.",
    url: "https://gessese.com",
    siteName: "Selam Gessese",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${util.variable} ${read.variable}`}>
      <body style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
