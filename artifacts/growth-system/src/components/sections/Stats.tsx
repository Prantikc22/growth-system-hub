import { useInView } from "@/hooks/use-in-view";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

const STATS = [
  {
    v: 25,
    suffix: "+",
    label: "Brands grown",
    desc: "D2C, service, and founder-led businesses scaled with us.",
  },
  {
    v: 4.7,
    suffix: "x",
    label: "Avg blended ROAS",
    desc: "Across all active paid media clients, 90-day rolling average.",
  },
  {
    v: 92,
    suffix: "Cr+",
    prefix: "₹",
    label: "Revenue moved",
    desc: "Inventory sold, leads closed, and revenue influenced.",
  },
  {
    v: 24,
    suffix: "/7",
    label: "Always on",
    desc: "Slack and WhatsApp access from day one — no ticket queues.",
  },
];

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="py-24 md:py-36 overflow-hidden relative"
      style={{ background: "linear-gradient(180deg, #060812 0%, #0a0f1e 100%)" }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] opacity-20"
          style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/60 mb-4">
            By the numbers
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold tracking-tight text-white leading-[1.05]">
            Built to compound.<br />Measured weekly.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={cn("text-center", "iv-stamp", inView && "is-in")}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="text-5xl md:text-7xl font-extrabold tracking-tighter tabular-nums mb-2"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {inView ? (
                  <CountUp to={s.v} prefix={s.prefix} suffix={s.suffix} duration={1400} />
                ) : (
                  <span>{s.prefix ?? ""}0{s.suffix ?? ""}</span>
                )}
              </div>
              <div className="text-sm font-bold text-white mb-1">{s.label}</div>
              <div
                className="text-xs text-white/45 leading-snug max-w-[180px] mx-auto transition-opacity duration-500"
                style={{ opacity: inView ? 1 : 0, transitionDelay: `${i * 120 + 300}ms` }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
