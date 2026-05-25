import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    t: "Diagnose",
    d: "60-min strategy call. We map your funnel, audit what's leaking, and show you exactly what to fix first.",
    color: "#93c5fd",
    next: "Design",
  },
  {
    n: "02",
    t: "Design",
    d: "We propose the system: scope, channels, content cadence, tech stack, and your 90-day growth target.",
    color: "#c4b5fd",
    next: "Deploy",
  },
  {
    n: "03",
    t: "Deploy",
    d: "Onboarding in 7 days. Ads live, content shipping, tech in build. Slack + WhatsApp access from day one.",
    color: "#6ee7b7",
    next: "Compound",
  },
  {
    n: "04",
    t: "Compound",
    d: "Weekly outcomes review. Quarterly strategy resets. The system gets sharper — and cheaper to run — every month.",
    color: "#fca5a5",
    next: null,
  },
];

function StepCard({ step, i, inView }: { step: typeof STEPS[0]; i: number; inView: boolean }) {
  const { ref, inView: stepIn } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-6 md:gap-8 transition-all duration-700",
        stepIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      )}
      style={{ transitionDelay: `${i * 120}ms` }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={cn(
            "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500",
            stepIn ? "border-opacity-100 scale-100" : "border-opacity-0 scale-75"
          )}
          style={{ borderColor: step.color, background: `${step.color}15` }}
        >
          <span className="font-ui text-xs font-bold" style={{ fontFamily: "'Syne',sans-serif", color: step.color }}>{step.n}</span>
        </div>
        {step.next && (
          <div
            className="w-px flex-1 mt-3 min-h-[60px] transition-all duration-700"
            style={{
              background: `linear-gradient(180deg, ${step.color}60 0%, transparent 100%)`,
              opacity: stepIn ? 1 : 0,
              transitionDelay: `${i * 120 + 400}ms`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 md:pb-14 flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-serif text-2xl md:text-3xl font-normal text-white">{step.t}</h3>
          {step.next && (
            <span className="text-xs text-white/30 font-ui" style={{ fontFamily: "'Syne',sans-serif" }}>→ {step.next}</span>
          )}
        </div>
        <p className="text-white/55 font-sans text-base leading-relaxed max-w-lg">{step.d}</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #080B12 100%)" }}
    >
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: sticky header */}
          <div ref={ref}>
            <p className={cn("inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs mb-6 text-white/50 uppercase tracking-widest transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}
              style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>
              How it works
            </p>
            <h2
              className={cn("font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal text-white leading-[1.0] mb-6 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
              style={{ transitionDelay: "100ms" }}
            >
              Four steps.<br />
              <em
                className="italic"
                style={{
                  background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Then the compounding starts.
              </em>
            </h2>
            <p
              className={cn("text-white/50 font-sans text-lg leading-relaxed max-w-sm transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
              style={{ transitionDelay: "200ms" }}
            >
              Most agencies take 90 days to show results. We show you momentum in the first week.
            </p>
          </div>

          {/* Right: timeline steps */}
          <div className="pt-0 md:pt-2">
            {STEPS.map((s, i) => (
              <StepCard key={s.n} step={s} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
