import { useInView } from "@/hooks/use-in-view";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

const STATS = [
  { v: 120, suffix: "+", label: "Brands grown" },
  { v: 4.7, suffix: "x",  label: "Avg blended ROAS" },
  { v: 92,  suffix: "Cr+", prefix: "₹", label: "Inventory & revenue moved" },
  { v: 24,  suffix: "/7",  label: "Slack & WhatsApp" },
];

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section ref={ref} className="surface-ink py-24 md:py-36 overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="pill mb-4 bg-white/5 border-white/10 text-ink-foreground/70">By the numbers</p>
          <h2 className="heading-section text-ink-foreground">Built to compound. Measured weekly.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className={cn("iv-stamp", inView && "is-in")}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-5xl md:text-7xl font-extrabold tracking-tighter text-ink-foreground tabular-nums">
                  {inView ? <CountUp to={s.v} prefix={s.prefix} suffix={s.suffix} duration={1400} /> : <span>{s.prefix || ""}0{s.suffix || ""}</span>}
                </div>
              </div>
              <div
                className="mt-3 text-sm text-ink-foreground/60 transition-opacity duration-500"
                style={{ opacity: inView ? 1 : 0, transitionDelay: `${i * 120 + 300}ms` }}
              >{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
