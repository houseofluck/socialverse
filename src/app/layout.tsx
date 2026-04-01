import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Verse - Your Complete Partner for Digital Growth",
  description:
    "Social Verse is a full-service digital marketing agency offering 360° marketing solutions including social media management, digital advertising, web & app development, branding, influencer marketing, and outdoor marketing.",
  keywords: [
    "digital marketing",
    "social media management",
    "branding",
    "web development",
    "app development",
    "influencer marketing",
    "Social Verse",
    "digital agency",
  ],
  openGraph: {
    title: "Social Verse - Digital Growth Partner",
    description:
      "Complete 360° marketing solutions to turn your dream brand into a powerful market presence.",
    type: "website",
    siteName: "Social Verse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Verse - Digital Growth Partner",
    description:
      "Complete 360° marketing solutions to turn your dream brand into a powerful market presence.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Outfit:wght@200;300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
