import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type Item = { id: string; cat: "Social" | "Web" | "Branding" | "Ads" | "Events"; title: string; client: string; tone: string; art: "phone" | "browser" | "swatch" | "ad" | "venue" };

const ITEMS: Item[] = [
  { id: "1",  cat: "Social",   title: "Reels — Brewing Rituals",         client: "Kairo Coffee",     tone: "#7B3F00", art: "phone" },
  { id: "2",  cat: "Web",      title: "Direct booking site",             client: "Nira Stays",       tone: "#0EA5E9", art: "browser" },
  { id: "3",  cat: "Branding", title: "Identity system",                 client: "Atelier Noir",     tone: "#0F0F0F", art: "swatch" },
  { id: "4",  cat: "Ads",      title: "Cold-traffic creative",           client: "Lumen Skin",       tone: "#E879A7", art: "ad" },
  { id: "5",  cat: "Events",   title: "Outlet 3 launch",                 client: "Okura Ramen",      tone: "#DC2626", art: "venue" },
  { id: "6",  cat: "Social",   title: "Founder reels engine",            client: "Tilt Finance",     tone: "#16A34A", art: "phone" },
  { id: "7",  cat: "Web",      title: "Marketing site as demo",          client: "Halo Bots",        tone: "#2563EB", art: "browser" },
  { id: "8",  cat: "Branding", title: "Heritage palette",                client: "Saanvi Jewels",    tone: "#A8336E", art: "swatch" },
  { id: "9",  cat: "Ads",      title: "JEE prep — 5 hooks/day",          client: "Inkpath EduTech",  tone: "#7C3AED", art: "ad" },
  { id: "10", cat: "Web",      title: "Project microsites",              client: "Northstar Realty", tone: "#1E40AF", art: "browser" },
  { id: "11", cat: "Social",   title: "Founder content series",          client: "Linen by Anaya",   tone: "#C9A27A", art: "phone" },
  { id: "12", cat: "Events",   title: "Drop launch",                     client: "Atelier Noir",     tone: "#0F0F0F", art: "venue" },
];

// Seed → consistent picsum image
const PHOTO_SEEDS: Record<string, string> = {
  "1":  "coffee", "2":  "hotel",   "3":  "fashion",
  "4":  "skincare","5": "ramen",   "6":  "finance",
  "7":  "tech",   "8":  "jewelry", "9":  "study",
  "10": "realty", "11": "linen",   "12": "night",
};

const FILTERS = ["All", "Social", "Web", "Branding", "Ads", "Events"] as const;

export function Portfolio() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const visible = useMemo(() => new Set(ITEMS.filter((i) => f === "All" || i.cat === f).map((i) => i.id)), [f]);

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
                  f === c ? "bg-ink text-ink-foreground border-ink" : "bg-background border-border text-muted-foreground hover:text-foreground"
                )}
              >{c}</button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {ITEMS.map((it, i) => {
            const isIn = visible.has(it.id);
            return (
              <div
                key={it.id}
                className="transition-all duration-500"
                style={{
                  transitionDelay: `${i * 30}ms`,
                  transform: isIn ? "scale(1)" : "scale(0)",
                  opacity: isIn ? 1 : 0,
                  pointerEvents: isIn ? "auto" : "none",
                  transitionTimingFunction: isIn ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "ease-out",
                  height: isIn ? "auto" : 0,
                }}
              >
                <PortfolioArt it={it} />
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/work" className="text-sm font-semibold hover:text-primary">See all projects →</Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioArt({ it }: { it: Item }) {
  const seed = PHOTO_SEEDS[it.id] ?? it.id;
  const imgUrl = `https://picsum.photos/seed/${seed}/400/400`;
  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden bg-secondary border border-border" data-cursor="View">
      <img
        src={imgUrl}
        alt={it.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      {/* Category tag */}
      <div className="absolute top-3 left-3">
        <span className="rounded-full bg-ink/80 backdrop-blur-sm text-ink-foreground text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
          {it.cat}
        </span>
      </div>
      {/* Hover info */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent text-ink-foreground translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className="text-xs font-bold tracking-wide">{it.client}</div>
        <div className="text-[11px] text-ink-foreground/70 mt-0.5">{it.title}</div>
      </div>
    </div>
  );
}
