// ============================================================
// CONFIGURATION - Update these values for production
// ============================================================

export const WHATSAPP_NUMBER =
  (typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    : undefined) || "919XXXXXXXXX"; // Fallback - update this or set env var

export const SITE_CONFIG = {
  name: "Social Verse",
  tagline: "Your Complete Partner for Digital Growth",
  email: "info@thesocialverse.com",
  instagram: "https://instagram.com/thesocialverse",
  facebook: "https://facebook.com/thesocialverse",
  linkedin: "https://linkedin.com/company/thesocialverse",
};

// ============================================================
// WHATSAPP HELPER
// ============================================================

export function openWhatsApp(message: string, source: string = "general") {
  // Track the event (analytics module handles missing GA/Pixel gracefully)
  if (typeof window !== "undefined") {
    import("@/components/Analytics").then(({ analytics }) => {
      analytics.whatsappClick(source);
    });
  }

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, "_blank");
}

// ============================================================
// SERVICES DATA
// ============================================================

export const SERVICES = [
  {
    icon: "ri-instagram-line",
    title: "Social Media Management",
    description:
      "Build a strong, engaging presence across Instagram, Facebook, and LinkedIn with strategy, content planning, reels, and community management.",
    tags: ["Strategy", "Content", "Reels", "Engagement", "Analytics"],
  },
  {
    icon: "ri-megaphone-line",
    title: "Digital Advertising",
    description:
      "Targeted ad campaigns on Meta, Google, and YouTube designed for maximum reach, precise targeting, and conversion optimization.",
    tags: ["Meta Ads", "Google Ads", "YouTube", "ROI"],
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Website Development",
    description:
      "Modern, responsive, and fast websites - from business sites and e-commerce platforms to landing pages, all built to convert.",
    tags: ["UI/UX", "E-commerce", "Landing Pages", "SEO"],
  },
  {
    icon: "ri-smartphone-line",
    title: "App Development",
    description:
      "Custom mobile applications with user-friendly design, smooth functionality, scalable architecture, and high performance.",
    tags: ["iOS", "Android", "Cross-Platform", "Scalable"],
  },
  {
    icon: "ri-user-star-line",
    title: "Influencer Marketing",
    description:
      "Connect your brand with trusted creators and influencers who amplify your story and reach new audiences authentically.",
    tags: ["Identification", "Campaigns", "Collaboration", "Tracking"],
  },
  {
    icon: "ri-palette-line",
    title: "Branding & Creative",
    description:
      "Visual identities that reflect your brand values - logos, brand identity systems, marketing creatives, and promotional materials.",
    tags: ["Logo", "Identity", "Creatives", "Print"],
  },
  {
    icon: "ri-road-map-line",
    title: "Outdoor Marketing",
    description:
      "Billboards, hoardings, brand signage, and event branding - maintaining powerful visibility in physical spaces alongside digital.",
    tags: ["Billboards", "Signage", "Events", "OOH"],
  },
];

// ============================================================
// PROCESS STEPS
// ============================================================

export const PROCESS_STEPS = [
  {
    icon: "ri-search-eye-line",
    num: "01",
    title: "Understand",
    description:
      "Deep dive into your business goals, audience, and market positioning to build a solid strategic foundation.",
  },
  {
    icon: "ri-route-line",
    num: "02",
    title: "Strategize",
    description:
      "Develop a customized marketing strategy tailored specifically to your brand's unique needs and objectives.",
  },
  {
    icon: "ri-rocket-2-line",
    num: "03",
    title: "Execute",
    description:
      "Produce engaging content and launch campaigns designed to capture attention and drive meaningful action.",
  },
  {
    icon: "ri-bar-chart-grouped-line",
    num: "04",
    title: "Optimize",
    description:
      "Use analytics and real-time insights to continuously refine strategies for better performance and ROI.",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================

export const TESTIMONIALS = [
  {
    initials: "RK",
    name: "Rahul K.",
    role: "Founder, Lifestyle Brand",
    quote:
      "Social Verse completely transformed our digital presence. Their strategic approach and creative execution delivered results beyond our expectations.",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "CEO, Fashion Startup",
    quote:
      "The team genuinely understands branding. They created an identity for us that stands out in a crowded market. Highly recommend.",
  },
  {
    initials: "AM",
    name: "Ankit M.",
    role: "Director, E-Commerce Co.",
    quote:
      "Our ad campaigns are now actually profitable. The data-driven approach and regular optimization made all the difference.",
  },
];

// ============================================================
// WHY US
// ============================================================

export const WHY_ITEMS = [
  {
    icon: "ri-settings-4-line",
    title: "Customized Strategies",
    desc: "No templates. Every strategy is built specifically for your brand's goals, market, and audience.",
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "Creative Innovation",
    desc: "Fresh, bold creative work that cuts through the noise and captures real audience attention.",
  },
  {
    icon: "ri-bar-chart-grouped-line",
    title: "Data-Driven Results",
    desc: "Every campaign backed by analytics, performance tracking, and continuous optimization for ROI.",
  },
  {
    icon: "ri-team-line",
    title: "Experienced Team",
    desc: "Dedicated marketers, designers, and strategists who know the digital landscape inside-out.",
  },
  {
    icon: "ri-infinity-line",
    title: "End-to-End Solutions",
    desc: "From first idea to final launch - branding, development, marketing, and growth under one roof.",
  },
  {
    icon: "ri-chat-check-line",
    title: "Transparent Reporting",
    desc: "Clear communication, honest reporting, and full visibility into campaign performance at all times.",
  },
];

// ============================================================
// FAQ
// ============================================================

export const FAQ_ITEMS = [
  {
    q: "What services does Social Verse offer?",
    a: "We offer complete 360° digital marketing services including social media management, digital advertising (Meta, Google, YouTube), website development, app development, influencer marketing, branding & creative design, and outdoor marketing solutions.",
  },
  {
    q: "How do I get started with Social Verse?",
    a: "Simply message us on WhatsApp or fill out the contact form. We'll schedule a discovery call to understand your business, goals, and requirements - and then present a customized plan.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. Whether you're a startup building your brand from scratch or an established company looking to scale, we provide customized solutions tailored to your budget and goals.",
  },
  {
    q: "What platforms do you manage for social media?",
    a: "We manage content and campaigns across Instagram, Facebook, LinkedIn, YouTube, and other relevant platforms based on where your audience is most active.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We use data-driven analytics and transparent reporting to track key metrics like reach, engagement, conversions, ROI, and audience growth - with regular performance updates.",
  },
  {
    q: "What is your pricing structure?",
    a: "Our pricing depends on the scope and scale of services you need. We offer flexible packages tailored to your requirements. Reach out on WhatsApp for a custom quote.",
  },
];

// ============================================================
// PORTFOLIO
// ============================================================

export const PORTFOLIO_ITEMS = [
  { icon: "ri-palette-line", cat: "Branding & Identity", name: "Complete Brand Overhaul", large: true },
  { icon: "ri-instagram-line", cat: "Social Media", name: "Social Growth Campaign" },
  { icon: "ri-code-s-slash-line", cat: "Web Development", name: "E-Commerce Platform" },
  { icon: "ri-megaphone-line", cat: "Digital Ads", name: "Performance Campaign" },
  { icon: "ri-smartphone-line", cat: "App Development", name: "Mobile App Launch" },
];
