import { useInView } from "@/hooks/use-in-view";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

const STATS = [
  { v: 25,  suffix: "+",    label: "Brands grown",           sub: "D2C, service, and founder-led" },
  { v: 4.7, suffix: "x",    label: "Avg blended ROAS",        sub: "Across all active paid media clients" },
  { v: 281, suffix: "Cr+",  prefix: "₹", label: "Revenue moved", sub: "Inventory sold and deals closed" },
  { v: 24,  suffix: "/7",   label: "Always on",              sub: "Slack & WhatsApp from day one" },
];

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className="py-16 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080B12 0%, #0d1117 100%)" }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/8">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col justify-between p-6 md:p-8 bg-[#080B12] transition-colors duration-300 hover:bg-white/3",
                "iv-stamp",
                inView && "is-in"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="font-serif text-4xl md:text-6xl font-normal tabular-nums mb-3"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {inView
                  ? <CountUp to={s.v} prefix={s.prefix} suffix={s.suffix} duration={1300} />
                  : <span>{s.prefix ?? ""}0{s.suffix ?? ""}</span>
                }
              </div>
              <div>
                <div className="font-ui text-xs font-700 uppercase tracking-widest text-white/90 mb-1" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{s.label}</div>
                <div
                  className="text-xs text-white/35 font-sans leading-snug transition-opacity duration-500"
                  style={{ opacity: inView ? 1 : 0, transitionDelay: `${i * 100 + 280}ms` }}
                >
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
