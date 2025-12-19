import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* UI / Navigation Font */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

/* Optional mono (dev / code / labels if ever needed) */
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/* Editorial / Statement Font */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

/* SEO Metadata */
export const metadata: Metadata = {
  title: "Artistic Studio | Wedding & Film Photography",
  description:
    "Artistic Studio – Premium wedding photography and cinematic films.",
};

export const headings = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-headings",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${playfair.variable}
          antialiased
          bg-black
          text-white
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
