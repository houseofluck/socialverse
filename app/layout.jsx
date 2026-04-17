import "./globals.css";
import { StructuredData } from "@/components/layout/StructuredData";

export const metadata = {
  metadataBase: new URL("https://socialverse.studio"),
  title: {
    default: "Social Verse — A creative studio for modern consumer brands",
    template: "%s · Social Verse",
  },
  description:
    "Mumbai-based creative studio building brand identity, digital product, content, and culture for modern consumer brands. Full-service under one roof, since 2022.",
  keywords: [
    "creative studio Mumbai",
    "brand identity agency India",
    "D2C branding agency",
    "consumer brand design",
    "packaging design India",
    "social media agency Mumbai",
    "digital product studio",
    "content & film studio",
    "influencer marketing India",
    "OOH advertising Mumbai",
  ],
  authors: [{ name: "Social Verse Studio" }],
  creator: "Social Verse Studio",
  publisher: "Social Verse Studio",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Social Verse — A creative studio for modern consumer brands",
    description:
      "Brand identity, digital product, content, and culture for the next generation of Indian consumer brands.",
    url: "https://socialverse.studio",
    siteName: "Social Verse",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/media/editorial/community.jpg", width: 1600, height: 900, alt: "Social Verse Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Verse — Creative Studio",
    description: "Brand, digital, content, and culture for modern consumer brands.",
    images: ["/media/editorial/community.jpg"],
  },
  alternates: { canonical: "https://socialverse.studio" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#EFE8D8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
