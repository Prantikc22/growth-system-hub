import { Link } from "react-router-dom";
import { CASE_STUDIES } from "@/data/case-studies";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ArtBlock } from "@/components/ArtBlock";

export function CaseStudies() {
  const featured = CASE_STUDIES.slice(0, 6);
  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-wide">
        <Reveal variant="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="pill mb-4">Selected work</p>
            <h2 className="heading-section">Brands that compounded.</h2>
          </div>
          <Link to="/work" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">View all {CASE_STUDIES.length} case studies →</Link>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((cs, i) => {
            const variant = i % 2 === 0 ? "left" : "right";
            return (
              <Reveal key={cs.slug} variant={variant} delay={(i % 3) * 150}>
                <Link to={`/work/${cs.slug}`} className="group block">
                  <ArtBlock cs={cs} className="transition-transform duration-500 group-hover:scale-[1.02]" />
                  <div className="mt-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="font-mono">{cs.category}</span>
                      <span>·</span>
                      <span>{cs.region}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight leading-snug">{cs.headline}</h3>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {cs.metrics.map((m, mi) => (
                        <div key={mi} className="rounded-xl bg-background border border-border p-3">
                          <div className="text-base md:text-lg font-extrabold tracking-tight">
                            <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
