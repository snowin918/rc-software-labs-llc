import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/Layout/DynamicBackground";
import { displayName, siteTitle, siteDescription } from "@/data/company";

const plusJakarta = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const sora = localFont({
  src: [
    {
      path: "../fonts/sora/sora-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sora/sora-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sora/sora-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/sora/sora-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: { title: siteTitle, description: siteDescription, siteName: displayName, type: "website", locale: "en_US" },
  twitter: { card: "summary", title: siteTitle, description: siteDescription },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-brand-base font-sans text-brand-soft antialiased">
        <DynamicBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
