import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

const MARKETING_RESULTS = [
  {
    value: 3,
    suffix: "x",
    label: "Revenue Growth",
    desc: "For clients running integrated SEO and paid media under one strategy.",
    color: "#93c5fd",
    bg: "rgba(37,99,235,0.08)",
  },
  {
    value: 4,
    suffix: "x",
    label: "AI Search Visibility",
    desc: "GEO-optimised brands get cited more in ChatGPT, Perplexity, and AI Overviews.",
    color: "#c4b5fd",
    bg: "rgba(124,58,237,0.08)",
  },
  {
    value: 40,
    suffix: "%",
    label: "Higher Conversions",
    desc: "From landing pages rebuilt with performance-first UX and CRO principles.",
    color: "#6ee7b7",
    bg: "rgba(15,118,110,0.08)",
  },
  {
    value: 50,
    suffix: "%",
    label: "Lower CAC",
    desc: "When paid media and SEO are aligned under one unified growth strategy.",
    color: "#fca5a5",
    bg: "rgba(220,38,38,0.08)",
  },
];

const TECH_RESULTS = [
  {
    value: 10,
    suffix: "x",
    label: "Faster Build & Launch",
    desc: "AI-assisted development cuts website and app delivery from months to weeks.",
    color: "#fcd34d",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    value: 60,
    suffix: "%",
    label: "Lower Ops Cost",
    desc: "Automating reporting, lead nurture and follow-ups frees your team for real work.",
    color: "#6ee7b7",
    bg: "rgba(15,118,110,0.08)",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Lead Coverage",
    desc: "AI chatbots handle enquiries, qualify leads and book calls without added headcount.",
    color: "#93c5fd",
    bg: "rgba(37,99,235,0.08)",
  },
  {
    value: 2,
    suffix: "x",
    label: "Better Lead Quality",
    desc: "CRM integrations and AI scoring means sales teams only talk to ready buyers.",
    color: "#c4b5fd",
    bg: "rgba(124,58,237,0.08)",
  },
];

export function ProvenResults() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [tab, setTab] = useState<"marketing" | "tech">("marketing");
  const results = tab === "marketing" ? MARKETING_RESULTS : TECH_RESULTS;

  return (
    <section
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080B12 0%, #0a0f1e 100%)" }}
    >
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs mb-5 text-white/50 uppercase tracking-widest" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>
            Proven results
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-normal text-white leading-[1.05]">
            What AI-enabled marketing and tech<br />
            <em className="italic" style={{
              background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 60%, #f9a8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              delivers for your business.
            </em>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-white/12 bg-white/5 p-1 gap-1">
            {(["marketing", "tech"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                  tab === t
                    ? "bg-white text-[#080B12]"
                    : "text-white/50 hover:text-white/80"
                )}
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                {t === "marketing" ? "Marketing" : "Tech & Automation"}
              </button>
            ))}
          </div>
        </div>

        {/* Big number row */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6 rounded-3xl overflow-hidden border border-white/8 mb-12">
          {results.map((r, i) => (
            <div
              key={`${tab}-${i}`}
              className={cn("relative p-8 md:p-10 flex flex-col gap-4 group", "iv-reveal", inView && "is-in")}
              style={{
                background: "#080B12",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: r.bg }}
              />
              <div
                className="relative font-serif text-[clamp(3.5rem,8vw,5.5rem)] font-normal leading-none tabular-nums"
                style={{ color: r.color }}
              >
                {inView
                  ? <CountUp to={r.value} suffix={r.suffix} duration={1200} />
                  : <span>0{r.suffix}</span>
                }
              </div>
              <div className="relative">
                <div
                  className="text-sm font-ui font-700 text-white mb-1.5 uppercase tracking-widest"
                  style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}
                >
                  {r.label}
                </div>
                <p
                  className="text-xs text-white/40 font-sans leading-relaxed transition-opacity duration-500"
                  style={{ opacity: inView ? 1 : 0, transitionDelay: `${i * 100 + 300}ms` }}
                >
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Review bar */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { platform: "Google Reviews", score: "4.9", stars: 5, count: "60+" },
            { platform: "Clutch",         score: "5.0", stars: 5, count: "30+" },
            { platform: "Trustpilot",     score: "4.8", stars: 5, count: "45+" },
          ].map((r) => (
            <div key={r.platform} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="11" height="11" viewBox="0 0 24 24" fill="#FACC15">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-ui font-700 text-sm text-white" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{r.score}</span>
              <span className="w-px h-3 bg-white/15" />
              <span className="text-xs text-white/50 font-ui" style={{ fontFamily: "'Syne',sans-serif" }}>{r.platform}</span>
              <span className="text-xs text-white/30 font-sans">{r.count} reviews</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
