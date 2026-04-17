import { BRAND } from "@/lib/palette";

export function StructuredData() {
  const base = `https://${BRAND.domain}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        "name": BRAND.name,
        "alternateName": "Social Verse Studio",
        "url": base,
        "logo": `${base}/logo.svg`,
        "foundingDate": String(BRAND.founded),
        "description": "A creative studio building brand identity, digital product, content, and culture for modern consumer brands.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN",
          "streetAddress": BRAND.address,
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": BRAND.email,
          "telephone": BRAND.phone,
          "contactType": "new business",
          "availableLanguage": ["English", "Hindi"],
        },
        "sameAs": Object.values(BRAND.socials),
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        "url": base,
        "name": BRAND.name,
        "publisher": { "@id": `${base}/#organization` },
        "inLanguage": "en-IN",
      },
      {
        "@type": "Service",
        "name": "Creative Studio Services",
        "provider": { "@id": `${base}/#organization` },
        "areaServed": ["India", "Southeast Asia", "Middle East"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Studio Disciplines",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity & Packaging" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Product — Web & App" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content, Photography & Film" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influence & Creator Partnerships" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Offline & Out-of-Home Marketing" }},
          ],
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
