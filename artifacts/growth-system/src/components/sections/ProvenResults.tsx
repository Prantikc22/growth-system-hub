import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/use-in-view";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

const RESULTS = [
  {
    value: 3,
    suffix: "x",
    label: "Revenue Growth",
    desc: "Delivered for clients running integrated SEO and paid media campaigns.",
    color: "#2563EB",
  },
  {
    value: 4,
    suffix: "x",
    label: "AI Search Visibility",
    desc: "GEO-optimised brands see higher citations in LLMs and AI Overviews.",
    color: "#7C3AED",
  },
  {
    value: 40,
    suffix: "%",
    label: "Higher Conversions",
    desc: "From landing pages and websites rebuilt with performance-first UX.",
    color: "#0F766E",
  },
  {
    value: 50,
    suffix: "%",
    label: "Lower CAC",
    desc: "When paid media and SEO are aligned under one unified growth strategy.",
    color: "#A8336E",
  },
];

const RATINGS = [
  { platform: "Google", score: "4.9", count: "60+ reviews" },
  { platform: "Clutch", score: "5.0", count: "30+ reviews" },
  { platform: "Trustpilot", score: "4.8", count: "45+ reviews" },
];

export function ProvenResults() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-14">
          <p className="pill mx-auto mb-4">Proven results</p>
          <h2 className="heading-section">What AI-enabled marketing<br />delivers for your business.</h2>
        </Reveal>

        {/* Metrics grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
          {RESULTS.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border p-6 md:p-8 relative overflow-hidden group hover:shadow-card transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: r.color }}
              />
              <div
                className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2 tabular-nums"
                style={{ color: r.color }}
              >
                {inView ? (
                  <CountUp to={r.value} suffix={r.suffix} duration={1200} />
                ) : (
                  <span>0{r.suffix}</span>
                )}
              </div>
              <div className="font-bold text-base mb-2">{r.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Review ratings */}
        <Reveal variant="up">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {RATINGS.map((r) => (
              <div key={r.platform} className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FACC15">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-sm">{r.score}</span>
                <span className="text-muted-foreground text-xs">·</span>
                <span className="text-xs font-semibold text-foreground">{r.platform}</span>
                <span className="text-xs text-muted-foreground">{r.count}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
