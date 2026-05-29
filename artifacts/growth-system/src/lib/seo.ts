export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const BASE_URL = "https://remarqd.com";

const STATIC_ROUTES: Record<string, Pick<SeoMeta, "title" | "description">> = {
  "/": {
    title: "Remarqd — Your brand. Actually growing.",
    description:
      "AI-augmented marketing and tech system — ads, content, social, web, automation — delivered as a service, not software.",
  },
  "/work": {
    title: "Case Studies — Remarqd",
    description:
      "Real growth results for real brands. See how Remarqd drove revenue, ROAS, and market presence for D2C, F&B, fashion, and SaaS businesses.",
  },
  "/services": {
    title: "Services — Remarqd",
    description:
      "Five services. One system. Performance marketing, social media, content creation, web & app, and personal branding — all under one roof, transparent pricing.",
  },
  "/about": {
    title: "About — Remarqd",
    description:
      "Meet the team behind Remarqd — a small, opinionated growth agency obsessed with measurable outcomes for founder-led and D2C brands.",
  },
  "/contact": {
    title: "Contact — Remarqd",
    description:
      "Book a 30-minute strategy call. We map your growth gaps, show you what's being left on the table, and tell you exactly how to fix it.",
  },
  "/franchise": {
    title: "Franchise — Remarqd",
    description:
      "Run a Remarqd chapter in your city. A proven growth system, full playbook, and brand backing — your business, our infrastructure.",
  },
  "/privacy": {
    title: "Privacy Policy — Remarqd",
    description: "Remarqd privacy policy — how we collect, store, and protect your information.",
  },
  "/terms": {
    title: "Terms of Service — Remarqd",
    description: "Remarqd terms of service — the rules and conditions for using our platform and services.",
  },
};

const WORK_ROUTES: Record<string, Pick<SeoMeta, "title" | "description">> = {
  "country-bean-coffee": {
    title: "Country Bean Coffee Case Study — Remarqd",
    description:
      "From local roastery to a 14-city subscription brand. 6.4x ROAS on Meta, 312% subscriber growth in 90 days, ₹18L monthly revenue.",
  },
  "sohum-linen": {
    title: "Sohum Linen Case Study — Remarqd",
    description:
      "Premium linen brand growth powered by performance marketing, social media, and a full content engine.",
  },
  "flent": {
    title: "Flent Case Study — Remarqd",
    description:
      "Real estate lead generation at scale. ₹281 Cr of inventory moved through targeted microsites, Meta ads, and WhatsApp automation.",
  },
  "svaraa-jewels": {
    title: "Svaraa Jewels Case Study — Remarqd",
    description:
      "Jewellery D2C brand scaling through social media management, content creation, and performance advertising.",
  },
  "fitpass": {
    title: "Fitpass Case Study — Remarqd",
    description:
      "Fitness subscription growth through targeted digital campaigns, CRO, and content-driven acquisition.",
  },
  "the-noodle-bar": {
    title: "The Noodle Bar Case Study — Remarqd",
    description:
      "F&B brand growth through hyperlocal performance marketing, social media management, and brand content.",
  },
  "deconstruct-skincare": {
    title: "Deconstruct Skincare Case Study — Remarqd",
    description:
      "Skincare D2C brand scaling through performance marketing, influencer strategy, and conversion-focused content.",
  },
  "competishun": {
    title: "Competishun Case Study — Remarqd",
    description:
      "EdTech brand growth through performance marketing, targeted content, and funnel optimisation.",
  },
  "inaara": {
    title: "Inaara Case Study — Remarqd",
    description:
      "Brand growth story powered by Remarqd's integrated performance marketing and social media system.",
  },
};

export function getSeoMeta(url: string): SeoMeta {
  let base = STATIC_ROUTES[url];

  if (!base) {
    const workMatch = url.match(/^\/work\/(.+)$/);
    if (workMatch && WORK_ROUTES[workMatch[1]]) {
      base = WORK_ROUTES[workMatch[1]];
    }
  }

  if (!base) {
    base = STATIC_ROUTES["/"];
  }

  return {
    title: base.title,
    description: base.description,
    canonical: `${BASE_URL}${url}`,
    ogTitle: base.title,
    ogDescription: base.description,
  };
}
