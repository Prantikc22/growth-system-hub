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
  { id: "13", cat: "Branding", title: "Trainer character system",        client: "Vyom Strength",    tone: "#0F766E", art: "swatch" },
  { id: "14", cat: "Ads",      title: "Subscription funnel",             client: "Kairo Coffee",     tone: "#7B3F00", art: "ad" },
  { id: "15", cat: "Web",      title: "Sub-second app",                  client: "Tilt Finance",     tone: "#16A34A", art: "browser" },
  { id: "16", cat: "Social",   title: "Founder thread cadence",          client: "Halo Bots",        tone: "#2563EB", art: "phone" },
];

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
  const a = it.tone;
  const Art = () => {
    switch (it.art) {
      case "phone":
        return (
          <div className="grid place-items-center h-full">
            <div className="w-[55%] h-[80%] rounded-2xl border-4 border-ink overflow-hidden relative">
              <div className="absolute inset-0" style={{ background: a }} />
            </div>
          </div>
        );
      case "browser":
        return (
          <div className="rounded-xl border border-border bg-card overflow-hidden h-full m-3">
            <div className="flex gap-1 p-2 border-b border-border bg-muted/40">
              {[0,1,2].map((i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/20" />)}
            </div>
            <div className="h-[70%]" style={{ background: a }} />
          </div>
        );
      case "swatch":
        return (
          <div className="grid grid-cols-3 grid-rows-3 gap-1.5 p-3 h-full">
            {Array.from({ length: 9 }).map((_, i) => <div key={i} className="rounded" style={{ background: i % 2 ? a : "#0F0F0F", opacity: i % 3 === 0 ? 1 : 0.85 }} />)}
          </div>
        );
      case "ad":
        return (
          <div className="h-full p-4 surface-ink flex flex-col justify-between">
            <div className="text-ink-foreground/40 text-[10px] uppercase tracking-widest">{it.cat}</div>
            <div className="text-ink-foreground font-extrabold text-lg leading-tight">{it.client}</div>
            <div className="h-2 rounded" style={{ background: a }} />
          </div>
        );
      case "venue":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <polygon points="20,160 60,80 100,160" fill={a} />
            <polygon points="100,160 140,60 180,160" fill={a} opacity="0.85" />
          </svg>
        );
    }
  };
  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden bg-background border border-border" data-cursor="View">
      <Art />
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/90 to-transparent text-ink-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-xs font-semibold">{it.client}</div>
        <div className="text-[10px] text-ink-foreground/70">{it.title}</div>
      </div>
    </div>
  );
}
