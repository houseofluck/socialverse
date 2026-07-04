/* ------------------------------------------------------------------ *
 * Content — sourced & re-written from the client brief (Social Verse).
 * Editing here updates the whole site.
 * ------------------------------------------------------------------ */

export const CONTACT = {
  email: "info@thesocialverse.co.in",
  phones: ["6000955672", "8099531944"],
  // WhatsApp number in international format (India +91) for click-to-chat.
  whatsapp: "916000955672",
  tagline: "All eyes on your brand.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const CLIENTS = [
  "Olive Heights",
  "Olive Garden",
  "Awesome Palace",
  "Fix24",
  "Ahvi Gold",
  "Jewellery Hub",
  "Paxmeet",
];

export const CLIENT_LOGOS = [
  { name: "Olive Heights", src: "/clients/olive-heights.png" },
  { name: "Olive Garden", src: "/clients/olive-garden.png" },
  { name: "Awesome Palace", src: "/clients/awesome-palace.png" },
  { name: "Ahvi Gold", src: "/clients/ahvi-gold.png" },
  { name: "Jewellery Hub", src: "/clients/jewellery-hub.png" },
  { name: "Fix24", src: "/clients/fix24.png" },
  { name: "Paxmeet", src: "/clients/paxmeet.png" },
];

export type Service = {
  n: string;
  slug: string;
  title: string;
  blurb: string;
  includes: string[];
};

export const SERVICES: Service[] = [
  {
    n: "01",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    blurb:
      "Strategic management that turns feeds into brand worlds — content planning, creative design, reels and captions across Instagram, Facebook & LinkedIn.",
    includes: [
      "Content strategy & calendar",
      "Creative design & reels",
      "Community & page management",
      "Captions & hashtag strategy",
    ],
  },
  {
    n: "02",
    slug: "performance-marketing",
    title: "Performance Marketing",
    blurb:
      "Data-driven campaigns across Meta, Google & YouTube — engineered for leads, sales, traffic and maximum return on ad spend.",
    includes: [
      "Meta & Google ad campaigns",
      "Audience targeting & retargeting",
      "Lead generation funnels",
      "Performance analysis & ROI",
    ],
  },
  {
    n: "03",
    slug: "branding-creative-strategy",
    title: "Branding & Creative Strategy",
    blurb:
      "Memorable identity through design, storytelling and visual direction — logos, aesthetics and communication that build credibility.",
    includes: [
      "Logo & visual identity",
      "Brand guidelines",
      "Creative direction",
      "Messaging & tone of voice",
    ],
  },
  {
    n: "04",
    slug: "content-production",
    title: "Content Production",
    blurb:
      "Cinematic reels, brand films, product shoots and ad creatives that capture attention and strengthen brand identity.",
    includes: [
      "Cinematic reels & brand films",
      "Product & food photography",
      "Ad creatives",
      "Short-form video",
    ],
  },
  {
    n: "05",
    slug: "seo",
    title: "Search Engine Optimization",
    blurb:
      "Higher organic visibility through keyword strategy, technical improvements, local SEO and content built to rank.",
    includes: [
      "Keyword & content strategy",
      "Technical SEO",
      "Local SEO",
      "Performance tracking",
    ],
  },
  {
    n: "06",
    slug: "website-development",
    title: "Website Development",
    blurb:
      "Modern, responsive, conversion-focused sites that pair performance and aesthetics into a professional online presence.",
    includes: [
      "Responsive design & build",
      "Conversion-focused UX",
      "Performance & SEO ready",
      "CMS & maintenance",
    ],
  },
  {
    n: "07",
    slug: "app-development",
    title: "App Development",
    blurb:
      "Custom Android & iOS apps — intuitive UI/UX and scalable functionality that deepen customer engagement.",
    includes: [
      "iOS & Android apps",
      "UI/UX design",
      "Scalable functionality",
      "Launch & support",
    ],
  },
  {
    n: "08",
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    blurb:
      "Authentic collaborations with the right creators — from selection and planning to execution and performance tracking.",
    includes: [
      "Influencer selection",
      "Campaign planning",
      "Content execution",
      "Performance tracking",
    ],
  },
  {
    n: "09",
    slug: "outdoor-marketing",
    title: "Outdoor Marketing",
    blurb:
      "High-recall offline presence — hoardings, billboards, transit branding and large-format creatives that own the street.",
    includes: [
      "Hoardings & billboards",
      "Transit & storefront branding",
      "Large-format creatives",
      "Event promotions",
    ],
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Discover",
    body: "We dig into your brand, market and audience to understand where you are and where you want to go.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "We map a tailored plan — the channels, content and campaigns that will actually move your numbers.",
  },
  {
    n: "03",
    title: "Create",
    body: "Our team produces premium visuals, reels and creatives designed to capture attention and build identity.",
  },
  {
    n: "04",
    title: "Amplify",
    body: "We launch data-driven campaigns across Meta, Google and beyond to reach the right audience at scale.",
  },
  {
    n: "05",
    title: "Optimise",
    body: "We track performance, learn and refine — turning insight into compounding, measurable growth.",
  },
];

export const STATS = [
  { value: "9", label: "Marketing disciplines" },
  { value: "360°", label: "Full-service coverage" },
  { value: "7+", label: "Brands scaled" },
  { value: "100%", label: "Result-driven focus" },
];

/** Real social-media creatives — shown as a masonry feed. */
export const CREATIVES = [
  "/work/creatives/showcase-01.jpg",
  "/work/creatives/creative-02.jpg",
  "/work/creatives/showcase-03.jpg",
  "/work/creatives/creative-05.jpg",
  "/work/creatives/showcase-02.jpg",
  "/work/creatives/creative-06.jpg",
  "/work/creatives/showcase-04.jpg",
  "/work/creatives/creative-03.jpg",
  "/work/creatives/showcase-05.jpg",
  "/work/creatives/creative-08.jpg",
  "/work/creatives/showcase-06.jpg",
  "/work/creatives/showcase-07.jpg",
];

export type Feature = {
  title: string;
  caption: string;
  image: string;
  tone: "warm" | "cool" | "gold";
  objectPosition?: string;
};

/** Category feature cards beneath the creatives feed. */
export const FEATURES: Feature[] = [
  {
    title: "Social Media Creatives",
    caption: "A consistent, aesthetic grid designed to stop the scroll.",
    image: "/work/creatives/social-grid.jpg",
    tone: "warm",
  },
  {
    title: "Hoarding Designs",
    caption: "Large-format outdoor creative that owns the street.",
    image: "/work/hoarding.jpg",
    tone: "cool",
    objectPosition: "center 35%",
  },
  {
    title: "Ticket Designs",
    caption: "Event collateral made to make every entry special.",
    image: "/work/tickets/ticket-1.jpg",
    tone: "gold",
  },
];

export type Reel = {
  brand: string;
  video: string;
  poster: string;
};

/** Vertical client reels (9:16). */
export const REELS: Reel[] = [
  {
    brand: "Olive Heights",
    video: "/work/reels/reel-olive-heights-1.mp4",
    poster: "/work/reels/posters/reel-olive-heights-1.jpg",
  },
  {
    brand: "Awesome Palace",
    video: "/work/reels/reel-awesome-palace.mp4",
    poster: "/work/reels/posters/reel-awesome-palace.jpg",
  },
  {
    brand: "Ahvi Gold",
    video: "/work/reels/reel-ahvi-gold.mp4",
    poster: "/work/reels/posters/reel-ahvi-gold.jpg",
  },
  {
    brand: "Olive Garden",
    video: "/work/reels/reel-olive-garden.mp4",
    poster: "/work/reels/posters/reel-olive-garden.jpg",
  },
  {
    brand: "Olive Heights",
    video: "/work/reels/reel-olive-heights-2.mp4",
    poster: "/work/reels/posters/reel-olive-heights-2.jpg",
  },
];

export type CaseStudy = {
  index: string;
  slug: string;
  brand: string;
  category: string;
  summary: string;
  about: string;
  objectives: string[];
  challenges: string[];
  strategies: { title: string; body: string }[];
  results: string[];
  conclusion: string;
  tone: "warm" | "cool" | "gold";
  video?: string;
  poster?: string;
  image?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    index: "01",
    slug: "olive-heights",
    brand: "Olive Heights",
    category: "Rooftop Dining · Guwahati",
    summary:
      "A premium rooftop restaurant & bar. We built a luxury-focused digital identity with cinematic reels and a consistent, recognizable Instagram grid.",
    about:
      "Olive Heights is a premium rooftop restaurant and bar in Guwahati offering multi-cuisine dining, handcrafted beverages and a sophisticated rooftop ambiance — a memorable experience for food lovers, couples, families and social gatherings.",
    objectives: [
      "Build a premium, visually appealing digital identity",
      "Increase brand awareness and online visibility",
      "Drive higher engagement across social platforms",
      "Increase footfall through targeted Meta campaigns",
      "Position as a preferred rooftop dining destination in Guwahati",
    ],
    challenges: [
      "Standing out in a saturated rooftop dining market",
      "Maintaining a premium visual identity across platforms",
      "Balancing luxury aesthetics with audience engagement",
      "Driving real footfall, not just online engagement",
    ],
    strategies: [
      {
        title: "Premium Visual Branding",
        body: "High-quality visuals and cinematic reels showcasing the rooftop ambiance, signature dishes, cocktails, nightlife and sunsets.",
      },
      {
        title: "Engaging Social Grid",
        body: "A visually consistent, aesthetically aligned Instagram grid establishing a premium, recognizable brand identity.",
      },
      {
        title: "Reels & Short-Form",
        body: "Trend-based, storytelling-driven reels engineered to maximize reach, engagement and organic visibility.",
      },
      {
        title: "Performance Marketing",
        body: "Targeted Meta campaigns to boost footfall, awareness and promote offers, events and nightlife experiences.",
      },
    ],
    results: [
      "Stronger premium brand perception",
      "Higher reservations & footfall via Meta ads",
      "Improved reach through premium reels",
      "Consistent, elevated content rhythm",
    ],
    conclusion:
      "Through premium visual storytelling, strategic content and performance-driven advertising, we helped Olive Heights establish a stronger, more impactful digital presence — a recognizable rooftop dining brand that resonates with modern audiences seeking premium experiences.",
    tone: "warm",
    video: "/work/reels/reel-olive-heights-1.mp4",
    poster: "/work/reels/posters/reel-olive-heights-1.jpg",
  },
  {
    index: "02",
    slug: "awesome-palace",
    brand: "Awesome Palace",
    category: "Luxury Hospitality · Borjhar",
    summary:
      "A luxury hotel near Guwahati Airport. Cinematic walkthroughs and refined creatives positioned it as the preferred premium stay for travelers.",
    about:
      "Awesome Palace is a luxury hotel and hospitality destination near Guwahati Airport in Borjhar — premium accommodations, elegant interiors, fine dining, banquet facilities and modern hospitality for business and leisure travelers.",
    objectives: [
      "Build a strong, premium digital brand presence",
      "Increase hotel visibility across social platforms",
      "Position as a preferred luxury stay near the airport",
      "Drive guest inquiries, bookings and engagement",
      "Create a consistent, luxury-focused social identity",
    ],
    challenges: [
      "Establishing a premium, trustworthy digital identity",
      "Standing out in a saturated hospitality market",
      "Creating visually appealing content consistently",
      "Driving actual guest inquiries, not just engagement",
    ],
    strategies: [
      {
        title: "Premium Visual Production",
        body: "Cinematic walkthroughs, professional photography and refined creatives highlighting rooms, ambiance, dining and banquet spaces.",
      },
      {
        title: "Aligned Content Grid",
        body: "A modern, aesthetically consistent content grid reinforcing the hotel's premium identity.",
      },
      {
        title: "Reels & Storytelling",
        body: "Short-form, trend-driven reels created to maximize reach, engagement and retention across platforms.",
      },
      {
        title: "Meta Advertising",
        body: "Targeted campaigns to increase visibility and generate guest inquiries and bookings from travelers and local premium audiences.",
      },
    ],
    results: [
      "Growth in reach & engagement",
      "More guest inquiries & bookings",
      "Elevated luxury positioning online",
      "Stronger recognition among target audiences",
    ],
    conclusion:
      "Through premium content, strategic branding and performance-focused advertising, we enhanced Awesome Palace's digital presence and luxury positioning — stronger engagement, improved visibility and a refined identity reflecting its premium hospitality experience.",
    tone: "cool",
    video: "/work/reels/reel-awesome-palace.mp4",
    poster: "/work/reels/posters/reel-awesome-palace.jpg",
  },
  {
    index: "03",
    slug: "ahvi-gold",
    brand: "Ahvi Gold",
    category: "Gold Buying · Trust & Credibility",
    summary:
      "A trusted gold & silver buying brand. Educational, transparent content simplified valuation and built the credibility this category depends on.",
    about:
      "Ahvi Gold is a trusted gold and silver buying company specializing in transparent valuation, instant payments and secure transactions — a professional, hassle-free experience built on accurate purity testing and fair market pricing.",
    objectives: [
      "Build trust and credibility through digital branding",
      "Increase awareness of gold & silver buying services",
      "Educate audiences on transparent valuation",
      "Drive higher footfall and customer inquiries",
      "Generate quality leads through Meta campaigns",
    ],
    challenges: [
      "Building trust in a sensitive financial category",
      "Overcoming customer hesitation around gold selling",
      "Differentiating from traditional local buyers",
      "Simplifying technical valuation for audiences",
    ],
    strategies: [
      {
        title: "Premium Visual Branding",
        body: "Professional visuals and reels showcasing purity testing, transparent valuation, instant payments and a modern service environment.",
      },
      {
        title: "Educational Content",
        body: "Informative content explaining how valuation works, purity testing, fair pricing and common misconceptions in gold buying.",
      },
      {
        title: "Consistent Social Feed",
        body: "A visually consistent, premium feed maintained to strengthen brand perception and audience trust.",
      },
      {
        title: "Meta Advertising",
        body: "Targeted campaigns to build local awareness, generate inquiries, drive footfall and promote trust-based messaging.",
      },
    ],
    results: [
      "Improved customer trust & recognition",
      "More inquiries & store walk-ins",
      "Stronger positioning in the gold-buying market",
      "Clear category differentiation",
    ],
    conclusion:
      "Through premium storytelling, educational content and performance-driven advertising, we helped Ahvi Gold strengthen its digital presence and customer trust — a more professional, transparent and recognizable brand identity with higher visibility and engagement.",
    tone: "gold",
    video: "/work/reels/reel-ahvi-gold.mp4",
    poster: "/work/reels/posters/reel-ahvi-gold.jpg",
    image: "/work/case/ahvi-storefront.jpg",
  },
];

export const PILLARS = [
  {
    n: "01",
    title: "Strategic & Creative Execution",
    body: "Modern creative design meets performance-focused strategy to deliver campaigns that actually land.",
  },
  {
    n: "02",
    title: "Result-Driven Approach",
    body: "Every campaign is planned around clear objectives — engagement, leads, visibility and growth.",
  },
  {
    n: "03",
    title: "Complete Digital Solutions",
    body: "Social, branding, websites, advertising and content production — end-to-end, under one roof.",
  },
  {
    n: "04",
    title: "Premium Visual Storytelling",
    body: "High-quality visuals, reels and creative content built to strengthen brand identity and connection.",
  },
  {
    n: "05",
    title: "Client-Focused Collaboration",
    body: "We work closely with every brand to understand their goals and tailor strategy to their business.",
  },
];

export type PortfolioCategory =
  | "Social Creatives"
  | "Reels"
  | "Hoardings"
  | "Tickets";

export type PortfolioItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  category: PortfolioCategory;
};

const creativeSrcs = [
  "showcase-01",
  "creative-01",
  "showcase-02",
  "creative-02",
  "showcase-03",
  "creative-03",
  "showcase-04",
  "creative-04",
  "showcase-05",
  "creative-05",
  "showcase-06",
  "creative-06",
  "showcase-07",
  "creative-07",
  "creative-08",
  "creative-09",
];

export const PORTFOLIO: PortfolioItem[] = [
  ...creativeSrcs.map(
    (s): PortfolioItem => ({
      type: "image",
      src: `/work/creatives/${s}.jpg`,
      category: "Social Creatives",
    })
  ),
  ...REELS.map(
    (r): PortfolioItem => ({
      type: "video",
      src: r.video,
      poster: r.poster,
      category: "Reels",
    })
  ),
  { type: "image", src: "/work/hoarding.jpg", category: "Hoardings" },
  { type: "image", src: "/hoarding-design.jpg", category: "Hoardings" },
  { type: "image", src: "/work/tickets/ticket-1.jpg", category: "Tickets" },
  { type: "image", src: "/work/tickets/ticket-2.jpg", category: "Tickets" },
  { type: "image", src: "/work/tickets/ticket-3.jpg", category: "Tickets" },
];

export const PORTFOLIO_FILTERS: (PortfolioCategory | "All")[] = [
  "All",
  "Social Creatives",
  "Reels",
  "Hoardings",
  "Tickets",
];
