export default function sitemap() {
  const base = "https://socialverse.studio";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#practice`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#studio`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/#writing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
