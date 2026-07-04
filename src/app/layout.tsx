import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://thesocialverse.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "The Social Verse — All eyes on your brand",
    template: "%s · The Social Verse",
  },
  description:
    "The Social Verse is a full-service digital marketing agency helping brands grow through creative strategy, performance marketing, branding, website development, and content creation.",
  keywords: [
    "digital marketing agency",
    "social media marketing",
    "performance marketing",
    "branding",
    "Guwahati",
    "The Social Verse",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "The Social Verse — All eyes on your brand",
    description:
      "A creative growth partner for brands that want more than just reach.",
    url: SITE,
    siteName: "The Social Verse",
    type: "website",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "The Social Verse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Social Verse — All eyes on your brand",
    description:
      "A creative growth partner for brands that want more than just reach.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh bg-paper text-ink antialiased">
        <ScrollProgress />
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
