import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ArtType = "phone" | "browser" | "swatch" | "ad" | "venue";
type Item = {
  id: string;
  cat: "Social" | "Web" | "Branding" | "Ads" | "Events";
  title: string;
  client: string;
  tone: string;
  art: ArtType;
};

const ITEMS: Item[] = [
  { id: "1",  cat: "Social",   title: "Reels — Brewing Rituals",    client: "Kairo Coffee",     tone: "#7B3F00", art: "phone"   },
  { id: "2",  cat: "Web",      title: "Direct booking site",        client: "Nira Stays",       tone: "#0EA5E9", art: "browser" },
  { id: "3",  cat: "Branding", title: "Identity system",            client: "Atelier Noir",     tone: "#0F0F0F", art: "swatch"  },
  { id: "4",  cat: "Ads",      title: "Cold-traffic creative",      client: "Lumen Skin",       tone: "#E879A7", art: "ad"      },
  { id: "5",  cat: "Events",   title: "Outlet 3 launch",            client: "Okura Ramen",      tone: "#DC2626", art: "venue"   },
  { id: "6",  cat: "Social",   title: "Founder reels engine",       client: "Tilt Finance",     tone: "#16A34A", art: "phone"   },
  { id: "7",  cat: "Web",      title: "Marketing site as demo",     client: "Halo Bots",        tone: "#2563EB", art: "browser" },
  { id: "8",  cat: "Branding", title: "Heritage palette",           client: "Saanvi Jewels",    tone: "#A8336E", art: "swatch"  },
  { id: "9",  cat: "Ads",      title: "JEE prep — 5 hooks/day",     client: "Inkpath EduTech",  tone: "#7C3AED", art: "ad"      },
  { id: "10", cat: "Web",      title: "Project microsites",         client: "Northstar Realty", tone: "#1E40AF", art: "browser" },
  { id: "11", cat: "Social",   title: "Founder content series",     client: "Linen by Anaya",   tone: "#C9A27A", art: "phone"   },
  { id: "12", cat: "Events",   title: "Drop launch",                client: "Atelier Noir",     tone: "#0F0F0F", art: "venue"   },
];

const FILTERS = ["All", "Social", "Web", "Branding", "Ads", "Events"] as const;

export function Portfolio() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");

  // Only render filtered items — NO hidden items leaving whitespace
  const filtered = useMemo(
    () => ITEMS.filter((i) => f === "All" || i.cat === f),
    [f]
  );

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-wide">
        <Reveal variant="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="pill mb-4">Portfolio</p>
            <h2 className="heading-section">A taste of the craft.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((c) => (
              <button
                key={c}
                onClick={() => setF(c)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold border transition-all",
                  f === c
                    ? "bg-ink text-ink-foreground border-ink"
                    : "bg-background border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((it, i) => (
            <div
              key={it.id}
              className="animate-in fade-in zoom-in-95 duration-300"
              style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
            >
              <PortfolioArt it={it} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/work" className="text-sm font-semibold hover:text-primary">
            See all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioArt({ it }: { it: Item }) {
  return (
    <div
      className="group relative aspect-square rounded-xl overflow-hidden bg-secondary border border-border"
      data-cursor="View"
    >
      <div className="absolute inset-0">
        <PortfolioIllustration art={it.art} tone={it.tone} client={it.client} />
      </div>

      {/* Category tag */}
      <div className="absolute top-3 left-3 z-10">
        <span className="rounded-full bg-ink/80 backdrop-blur-sm text-ink-foreground text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
          {it.cat}
        </span>
      </div>

      {/* Hover info */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent text-ink-foreground translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
        <div className="text-xs font-bold tracking-wide">{it.client}</div>
        <div className="text-[11px] text-ink-foreground/70 mt-0.5">{it.title}</div>
      </div>
    </div>
  );
}

function PortfolioIllustration({ art, tone, client }: { art: ArtType; tone: string; client: string }) {
  if (art === "phone") return <PhoneIllustration tone={tone} client={client} />;
  if (art === "browser") return <BrowserIllustration tone={tone} client={client} />;
  if (art === "swatch") return <SwatchIllustration tone={tone} client={client} />;
  if (art === "ad") return <AdIllustration tone={tone} client={client} />;
  if (art === "venue") return <VenueIllustration tone={tone} client={client} />;
  return null;
}

/* ─── Phone (Social) ─────────────────────────────────────────────────────── */
function PhoneIllustration({ tone, client }: { tone: string; client: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: `${tone}18` }}>
      <svg viewBox="0 0 200 280" className="w-[55%] drop-shadow-xl">
        {/* Phone body */}
        <rect x="30" y="10" width="140" height="260" rx="20" fill="#111" />
        <rect x="36" y="16" width="128" height="248" rx="16" fill="#1a1a1a" />
        {/* Notch */}
        <rect x="70" y="18" width="60" height="10" rx="5" fill="#111" />
        {/* Profile + name */}
        <circle cx="55" cy="55" r="14" fill={tone} />
        <text x="55" y="60" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          {client.charAt(0)}
        </text>
        <rect x="74" y="48" width="55" height="7" rx="3" fill="white" fillOpacity="0.6" />
        <rect x="74" y="59" width="35" height="5" rx="2" fill="white" fillOpacity="0.3" />
        {/* Post image */}
        <rect x="36" y="80" width="128" height="100" fill={tone} fillOpacity="0.5" rx="4" />
        <circle cx="100" cy="130" r="20" fill={tone} fillOpacity="0.7" />
        <text x="100" y="135" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">▶</text>
        {/* Like/comment row */}
        <text x="46" y="200" fill="white" fontSize="14" fillOpacity="0.8">♥</text>
        <text x="66" y="200" fill="white" fontSize="14" fillOpacity="0.8">💬</text>
        <text x="86" y="200" fill="white" fontSize="14" fillOpacity="0.8">↗</text>
        <rect x="46" y="208" width="70" height="5" rx="2" fill="white" fillOpacity="0.5" />
        <rect x="46" y="218" width="100" height="4" rx="2" fill="white" fillOpacity="0.25" />
        <rect x="46" y="226" width="80" height="4" rx="2" fill="white" fillOpacity="0.2" />
      </svg>
    </div>
  );
}

/* ─── Browser (Web) ──────────────────────────────────────────────────────── */
function BrowserIllustration({ tone, client }: { tone: string; client: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50">
      <svg viewBox="0 0 280 200" className="w-[90%] drop-shadow-xl">
        {/* Window frame */}
        <rect x="10" y="10" width="260" height="180" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        {/* Titlebar */}
        <rect x="10" y="10" width="260" height="28" rx="10" fill="#f3f4f6" />
        <rect x="10" y="30" width="260" height="8" fill="#f3f4f6" />
        <circle cx="28" cy="24" r="5" fill="#fc5c65" />
        <circle cx="44" cy="24" r="5" fill="#fed330" />
        <circle cx="60" cy="24" r="5" fill="#26de81" />
        <rect x="75" y="18" width="120" height="12" rx="6" fill="white" />
        {/* Nav bar */}
        <rect x="18" y="46" width="244" height="20" fill={tone} fillOpacity="0.08" />
        <rect x="24" y="51" width="40" height="9" rx="4" fill={tone} fillOpacity="0.6" />
        <rect x="74" y="53" width="25" height="5" rx="2" fill="#94a3b8" fillOpacity="0.5" />
        <rect x="104" y="53" width="25" height="5" rx="2" fill="#94a3b8" fillOpacity="0.5" />
        <rect x="134" y="53" width="25" height="5" rx="2" fill="#94a3b8" fillOpacity="0.5" />
        <rect x="224" y="50" width="34" height="11" rx="5" fill={tone} />
        {/* Hero section */}
        <rect x="18" y="72" width="244" height="60" fill={tone} fillOpacity="0.12" rx="4" />
        <rect x="28" y="84" width="100" height="12" rx="4" fill={tone} fillOpacity="0.7" />
        <rect x="28" y="100" width="70" height="7" rx="3" fill="#94a3b8" fillOpacity="0.5" />
        <rect x="28" y="112" width="50" height="10" rx="5" fill={tone} />
        {/* Content cols */}
        <rect x="18" y="140" width="75" height="40" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="24" y="146" width="40" height="18" rx="3" fill={tone} fillOpacity="0.2" />
        <rect x="24" y="168" width="55" height="5" rx="2" fill="#94a3b8" fillOpacity="0.4" />

        <rect x="100" y="140" width="75" height="40" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="106" y="146" width="40" height="18" rx="3" fill={tone} fillOpacity="0.2" />
        <rect x="106" y="168" width="55" height="5" rx="2" fill="#94a3b8" fillOpacity="0.4" />

        <rect x="183" y="140" width="75" height="40" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="189" y="146" width="40" height="18" rx="3" fill={tone} fillOpacity="0.2" />
        <rect x="189" y="168" width="55" height="5" rx="2" fill="#94a3b8" fillOpacity="0.4" />
        {/* URL in bar */}
        <text x="141" y="57" textAnchor="middle" fill="#94a3b8" fontSize="6">
          {client.toLowerCase().replace(/ /g, "")}.com
        </text>
      </svg>
    </div>
  );
}

/* ─── Swatch (Branding) ──────────────────────────────────────────────────── */
function SwatchIllustration({ tone, client }: { tone: string; client: string }) {
  const isDark = tone === "#0F0F0F";
  const bg = isDark ? "#111" : "#fafafa";
  const secondary = isDark ? "#222" : "#f1f5f9";
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-4" style={{ background: bg }}>
      {/* Color chips */}
      <div className="flex gap-2 w-full">
        {[tone, `${tone}99`, `${tone}55`, "#f8f8f8", "#222"].map((c, i) => (
          <div key={i} className="flex-1 aspect-square rounded-lg" style={{ background: c }} />
        ))}
      </div>
      {/* Logo placeholder */}
      <div className="rounded-xl flex items-center justify-center py-4 px-5 w-full"
        style={{ background: tone, boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
        <span className="font-black text-2xl tracking-tight" style={{ color: isDark ? "white" : "white" }}>
          {client.split(" ").map(w => w[0]).join("").slice(0, 3)}
        </span>
      </div>
      {/* Type scale */}
      <div className="w-full space-y-1.5">
        <div className="h-4 rounded" style={{ background: tone, opacity: 0.8, width: "70%" }} />
        <div className="h-2.5 rounded bg-slate-200" style={{ width: "90%" }} />
        <div className="h-2 rounded bg-slate-100" style={{ width: "60%" }} />
      </div>
    </div>
  );
}

/* ─── Ad (Ads) ───────────────────────────────────────────────────────────── */
function AdIllustration({ tone, client }: { tone: string; client: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: `linear-gradient(135deg, ${tone} 0%, #111 100%)` }}>
      {/* Platform bar */}
      <div className="flex items-center gap-2 p-3 bg-white/5">
        <div className="w-7 h-7 rounded-full bg-white/20 grid place-items-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="h-2.5 rounded bg-white/40 w-20 mb-1" />
          <div className="h-2 rounded bg-white/20 w-12" />
        </div>
        <div className="text-white/40 text-[10px] uppercase tracking-wider">Sponsored</div>
      </div>
      {/* Ad creative */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 text-center">
        <div className="text-white/40 text-[9px] uppercase tracking-widest mb-2">{client}</div>
        <div className="text-white font-black text-2xl leading-tight mb-3">
          Scale your brand.<br />Print revenue.
        </div>
        <div className="text-white/60 text-xs mb-4">
          Results-driven marketing that pays for itself.
        </div>
        <div className="rounded-full px-5 py-2 text-xs font-bold"
          style={{ background: "white", color: tone }}>
          Learn More
        </div>
      </div>
      {/* Metrics strip */}
      <div className="flex items-center justify-around bg-black/30 px-4 py-2 text-center">
        <div>
          <div className="text-white font-bold text-sm">8.1x</div>
          <div className="text-white/40 text-[9px]">ROAS</div>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div>
          <div className="text-white font-bold text-sm">214%</div>
          <div className="text-white/40 text-[9px]">Growth</div>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div>
          <div className="text-white font-bold text-sm">₹3.2Cr</div>
          <div className="text-white/40 text-[9px]">Revenue</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Venue (Events) ─────────────────────────────────────────────────────── */
function VenueIllustration({ tone, client }: { tone: string; client: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(180deg, #0a0a0a 0%, ${tone}44 100%)` }}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* Stage floor */}
        <rect x="0" y="160" width="200" height="40" fill={tone} fillOpacity="0.3" />
        <rect x="20" y="158" width="160" height="4" fill={tone} fillOpacity="0.6" rx="2" />
        {/* Stage risers */}
        <rect x="60" y="130" width="80" height="30" fill={tone} fillOpacity="0.2" rx="4" />
        {/* Spotlights */}
        {[40, 100, 160].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="20" r="6" fill={tone} fillOpacity="0.8" />
            <line x1={x} y1="26" x2={x === 100 ? 100 : x < 100 ? 70 : 130} y2="158"
              stroke={tone} strokeWidth="1" strokeOpacity="0.25" />
          </g>
        ))}
        {/* Crowd silhouettes */}
        {Array.from({ length: 16 }).map((_, i) => {
          const x = 10 + i * 12;
          const y = 148 + (i % 3) * 4;
          return (
            <ellipse key={i} cx={x} cy={y} rx="5" ry="8"
              fill="white" fillOpacity="0.15" />
          );
        })}
        {/* Brand name */}
        <text x="100" y="150" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fillOpacity="0.9">
          {client}
        </text>
        {/* Decorative lights */}
        {[30, 170].map((x, i) => (
          <g key={i}>
            <rect x={x - 6} y="40" width="12" height="60" fill={tone} fillOpacity="0.15" rx="3" />
            <circle cx={x} cy="40" r="4" fill={tone} fillOpacity="0.7" />
          </g>
        ))}
      </svg>
    </div>
  );
}
