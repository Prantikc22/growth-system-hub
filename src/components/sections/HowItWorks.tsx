import { Reveal } from "@/components/Reveal";

const STEPS = [
  { n: "01", t: "Diagnose", d: "60-min strategy call. We map the funnel, audit what's leaking, and show you what to fix first." },
  { n: "02", t: "Design",   d: "We propose the system: scope, channels, content cadence, tech, and the 90-day target." },
  { n: "03", t: "Deploy",   d: "Onboarding in 7 days. Ads live, content shipping, tech in build. Slack + WhatsApp from day one." },
  { n: "04", t: "Compound", d: "Weekly outcomes review. Quarterly strategy resets. The system gets sharper every month." },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 container-wide">
      <Reveal variant="up" className="max-w-2xl mb-14">
        <p className="pill mb-4">How it works</p>
        <h2 className="heading-section">Four steps. Then the compounding starts.</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} variant="up" delay={i * 120}>
            <div className="rounded-2xl border border-border p-6 md:p-8 h-full bg-background hover:shadow-card transition-shadow">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-5xl font-extrabold tracking-tight text-gradient-blue">{s.n}</span>
                <span className="text-xs text-muted-foreground">{i < STEPS.length - 1 ? `→ ${STEPS[i+1].t}` : "Repeat"}</span>
              </div>
              <h3 className="text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
