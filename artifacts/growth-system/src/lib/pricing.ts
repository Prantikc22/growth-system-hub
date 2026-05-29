// ============================================================
// PRICING ENGINE — All numbers in INR. Estimates only.
// ============================================================

export type ServiceKey = "performance" | "social" | "content" | "web" | "personal" | "automation";

export type ConfiguratorState = {
  services: ServiceKey[];
  performance?: {
    platforms: ("meta" | "google" | "youtube")[];
    budget?: "under50k" | "50to2L" | "2Lplus";
    seo?: "none" | "basic" | "full";
    whatsapp?: boolean;
  };
  social?: {
    platforms?: 1 | 2 | 3;
    reels?: boolean;
  };
  content?: {
    items: ("creatives" | "reels" | "blogs" | "copy" | "identity" | "shoot")[];
  };
  web?: {
    items: ("website" | "ecom" | "landing" | "app" | "chatbot" | "whatsapp" | "booking")[];
  };
  personal?: {
    audience?: "founder" | "creator" | "both";
  };
  automation?: {
    tier?: "starter" | "growth" | "full";
  };
};

export type LineItem = { label: string; amount: number; kind: "monthly" | "onetime" };

export type PriceEstimate = {
  items: LineItem[];
  monthly: number;
  onetime: number;
  total: number; // monthly + onetime (for routing decision)
  agencyMultiplier: number; // 2.2x
};

const fmtPlatforms = (n: number) => `${n} platform${n > 1 ? "s" : ""}`;

export function estimate(state: ConfiguratorState): PriceEstimate {
  const items: LineItem[] = [];

  // ── Performance Marketing ────────────────────────────────
  if (state.services.includes("performance") && state.performance) {
    const p = state.performance;
    const n = p.platforms?.length ?? 0;
    const b = p.budget;
    let perf = 0;

    if (n === 1 && b === "under50k") perf = 7000;
    else if (n === 1 && b === "50to2L") perf = 10000;
    else if (n === 2 && b === "under50k") perf = 12000;
    else if (n === 2 && b === "50to2L") perf = 15000;
    else if (n === 2 && b === "2Lplus") perf = 22000;
    else if (n >= 3 && b === "2Lplus") perf = 28000;
    else if (n >= 1) perf = Math.max(7000, n * 8000); // sensible fallback

    if (perf > 0) items.push({ label: `Performance — ${fmtPlatforms(n)}`, amount: perf, kind: "monthly" });
    if (p.seo === "basic") items.push({ label: "SEO — Basic", amount: 6000, kind: "monthly" });
    if (p.seo === "full") items.push({ label: "SEO — Full stack", amount: 14000, kind: "monthly" });
    if (p.whatsapp) items.push({ label: "WhatsApp campaigns", amount: 4000, kind: "monthly" });
  }

  // ── Social Media ─────────────────────────────────────────
  if (state.services.includes("social") && state.social) {
    const s = state.social;
    const n = s.platforms ?? 1;
    let soc = 0;
    if (n === 1 && !s.reels) soc = 5000;
    else if (n === 2 && !s.reels) soc = 8500;
    else if (n === 3 && !s.reels) soc = 14000;
    else if (n === 3 && s.reels) soc = 19000;
    else if (n === 1 && s.reels) soc = 9000;
    else if (n === 2 && s.reels) soc = 13500;
    if (soc > 0) items.push({ label: `Social Media — ${fmtPlatforms(n)}${s.reels ? " + reels" : ""}`, amount: soc, kind: "monthly" });
  }

  // ── Content Creation ─────────────────────────────────────
  if (state.services.includes("content") && state.content) {
    const map: Record<string, { label: string; amount: number; kind: "monthly" | "onetime" }> = {
      creatives: { label: "Social creatives", amount: 6000, kind: "monthly" },
      reels: { label: "Reels & videos", amount: 7000, kind: "monthly" },
      blogs: { label: "Blogs", amount: 5500, kind: "monthly" },
      copy: { label: "Ad copywriting", amount: 5000, kind: "monthly" },
      identity: { label: "Brand identity", amount: 18000, kind: "onetime" },
      shoot: { label: "Photo shoot", amount: 12000, kind: "onetime" },
    };
    state.content.items.forEach((i) => map[i] && items.push(map[i]));
  }

  // ── Web & Tech ───────────────────────────────────────────
  if (state.services.includes("web") && state.web) {
    const map: Record<string, LineItem[]> = {
      website: [{ label: "Website", amount: 18000, kind: "onetime" }],
      ecom: [{ label: "Ecommerce store", amount: 45000, kind: "onetime" }],
      landing: [{ label: "Landing page", amount: 7000, kind: "onetime" }],
      app: [{ label: "Mobile app", amount: 120000, kind: "onetime" }],
      chatbot: [
        { label: "AI chatbot — setup", amount: 12000, kind: "onetime" },
        { label: "AI chatbot — monthly", amount: 3500, kind: "monthly" },
      ],
      whatsapp: [
        { label: "WhatsApp automation — setup", amount: 9000, kind: "onetime" },
        { label: "WhatsApp automation — monthly", amount: 2500, kind: "monthly" },
      ],
      booking: [
        { label: "Booking system — setup", amount: 8000, kind: "onetime" },
        { label: "Booking system — monthly", amount: 2000, kind: "monthly" },
      ],
    };
    state.web.items.forEach((i) => map[i]?.forEach((li) => items.push(li)));
  }

  // ── Personal Branding ────────────────────────────────────
  if (state.services.includes("personal") && state.personal?.audience) {
    const a = state.personal.audience;
    const amount = a === "founder" ? 9000 : a === "creator" ? 12000 : 18000;
    const label =
      a === "founder" ? "Personal Brand — Founder/CEO" :
      a === "creator" ? "Personal Brand — Creator" :
      "Personal Brand — Founder + Creator";
    items.push({ label, amount, kind: "monthly" });
  }

  // ── AI Growth Automation ─────────────────────────────────
  if (state.services.includes("automation") && state.automation?.tier) {
    const t = state.automation.tier;
    const map: Record<string, { label: string; amount: number }> = {
      starter: { label: "AI Automation — Starter", amount: 8000 },
      growth:  { label: "AI Automation — Growth",  amount: 14000 },
      full:    { label: "AI Automation — Full Engine", amount: 22000 },
    };
    if (map[t]) items.push({ ...map[t], kind: "monthly" });
  }

  const monthly = items.filter((i) => i.kind === "monthly").reduce((s, i) => s + i.amount, 0);
  const onetime = items.filter((i) => i.kind === "onetime").reduce((s, i) => s + i.amount, 0);
  return { items, monthly, onetime, total: monthly + onetime, agencyMultiplier: 2.2 };
}

// Indian numbering: 1,20,000
export function formatINR(n: number, withSymbol = true): string {
  const sign = n < 0 ? "-" : "";
  const x = Math.abs(Math.round(n)).toString();
  const last3 = x.slice(-3);
  const rest = x.slice(0, -3);
  const formatted = rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3 : last3;
  return `${sign}${withSymbol ? "₹" : ""}${formatted}`;
}

export const ESTIMATE_THRESHOLD = 25000;
