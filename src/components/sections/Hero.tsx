import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const HEADLINE = ["Your", "brand.", "Actually", "growing."];
const SUB = "Not an agency. A productized growth system across ads, social, content, tech and personal brand.";

export function Hero() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = cardsRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-floatcard]"));
    let raf = 0;
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      const r = root.getBoundingClientRect();
      mx = (e.clientX - (r.left + r.width / 2)) / r.width;
      my = (e.clientY - (r.top + r.height / 2)) / r.height;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const apply = () => {
      cards.forEach((c) => {
        const depth = Number(c.dataset.depth || "1");
        c.style.setProperty("--mx", `${mx * depth * 18}px`);
        c.style.setProperty("--my", `${my * depth * 18}px`);
      });
      raf = 0;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-hero">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 opacity-[0.025]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 0%) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="reveal-up pill mb-6" style={{ animationDelay: "600ms" }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            Not an agency. A growth system.
          </div>

          <h1 className="heading-display">
            {HEADLINE.map((w, i) => (
              <span key={i} className="word-mask mr-[0.25em]">
                <span style={{ animationDelay: `${800 + i * 110}ms` }}>
                  {i >= 2 ? <span className="text-gradient-blue">{w}</span> : w}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed letter-stagger">
            {SUB.split("").map((c, i) => (
              <span key={i} style={{ animationDelay: `${1100 + i * 8}ms` }}>{c === " " ? "\u00A0" : c}</span>
            ))}
          </p>

          <div className="reveal-up mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "1600ms" }}>
            <Button onClick={() => smoothScrollTo("#configurator")} className="rounded-full h-12 px-7 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold text-base shadow-pop">
              Build my plan →
            </Button>
            <Button onClick={() => smoothScrollTo("#work")} variant="outline" className="rounded-full h-12 px-7 font-semibold text-base">
              See the work
            </Button>
          </div>

          <div className="reveal-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground" style={{ animationDelay: "1400ms" }}>
            <Trust label="120+ brands grown" />
            <Trust label="Avg 4.7x ROAS" />
            <Trust label="Meta + Google Partner" />
          </div>
        </div>

        {/* Floating cards */}
        <div ref={cardsRef} className="lg:col-span-5 relative h-[460px] md:h-[520px] reveal-fade" style={{ animationDelay: "1800ms" }}>
          <FloatCard depth={1.4} dur={5} top="2%" left="6%" rot={-6}>
            <CardMetric value="6.4x" label="ROAS — Kairo" tone="bg-[#7B3F00] text-white" />
          </FloatCard>
          <FloatCard depth={0.9} dur={6} top="14%" right="0%" rot={5}>
            <CardImage tone="bg-[#0F766E]" />
          </FloatCard>
          <FloatCard depth={1.6} dur={4} top="46%" left="0%" rot={-4}>
            <CardMetric value="₹1.2Cr" label="Best month" tone="bg-[#C9A27A] text-white" />
          </FloatCard>
          <FloatCard depth={1.1} dur={7} bottom="6%" right="6%" rot={3}>
            <CardImage tone="bg-[#2563EB]" variant="browser" />
          </FloatCard>
          <FloatCard depth={1.3} dur={5.5} bottom="22%" left="40%" rot={-2}>
            <CardMetric value="14K" label="Waitlist · Okura" tone="bg-ink text-ink-foreground" />
          </FloatCard>
        </div>
      </div>
    </section>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-block w-1 h-1 rounded-full bg-foreground/40" />
      {label}
    </span>
  );
}

function FloatCard({
  children, depth = 1, dur = 5, top, left, right, bottom, rot = 0,
}: { children: React.ReactNode; depth?: number; dur?: number; top?: string; left?: string; right?: string; bottom?: string; rot?: number }) {
  return (
    <div
      data-floatcard
      data-depth={depth}
      style={{
        position: "absolute",
        top, left, right, bottom,
        transform: `translate(var(--mx, 0px), var(--my, 0px)) rotate(${rot}deg)`,
        transition: "transform 0.4s cubic-bezier(0.19,1,0.22,1)",
      }}
    >
      <div className="float-card" style={{ ["--float-d" as any]: `${dur}s` }}>
        {children}
      </div>
    </div>
  );
}

function CardMetric({ value, label, tone }: { value: string; label: string; tone: string }) {
  return (
    <div className={`rounded-2xl ${tone} px-6 py-5 shadow-card min-w-[180px]`}>
      <div className="text-3xl font-extrabold tracking-tight">{value}</div>
      <div className="text-xs opacity-80 mt-1">{label}</div>
    </div>
  );
}

function CardImage({ tone, variant = "phone" }: { tone: string; variant?: "phone" | "browser" }) {
  if (variant === "browser") {
    return (
      <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden w-[200px]">
        <div className="flex gap-1.5 p-2.5 border-b border-border bg-muted/40">
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
        </div>
        <div className={`${tone} h-24`} />
        <div className="p-3 space-y-1.5">
          <div className="h-2 w-3/4 bg-foreground/10 rounded" />
          <div className="h-2 w-1/2 bg-foreground/10 rounded" />
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-[28px] bg-card border-4 border-ink shadow-card overflow-hidden w-[150px] h-[220px]">
      <div className={`${tone} h-full w-full flex items-end p-3`}>
        <div className="space-y-1.5 w-full">
          <div className="h-2 w-2/3 bg-white/40 rounded" />
          <div className="h-2 w-1/2 bg-white/40 rounded" />
        </div>
      </div>
    </div>
  );
}
