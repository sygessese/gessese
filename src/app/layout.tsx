import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body style={{ backgroundColor: "var(--cream)", color: "var(--ink)" }}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
