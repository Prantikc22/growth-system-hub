import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CASE_STUDIES } from "@/data/case-studies";
import { ArtBlock } from "@/components/ArtBlock";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "D2C", "F&B", "Fashion", "SaaS", "Real Estate", "Education", "Beauty", "Fitness", "Hospitality", "Finance"] as const;

export default function Work() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const list = CASE_STUDIES.filter((c) => f === "All" || c.category === f);
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-24 container-wide">
        <Reveal variant="up" className="max-w-2xl mb-10">
          <p className="pill mb-4">Selected work</p>
          <h1 className="heading-display">All 12 case studies.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Real brands. Real outcomes. Filtered by category.</p>
        </Reveal>
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((c) => (
            <button key={c} onClick={() => setF(c)} className={cn("rounded-full px-4 py-2 text-sm font-semibold border transition-all", f === c ? "bg-ink text-ink-foreground border-ink" : "bg-background border-border text-muted-foreground hover:text-foreground")}>{c}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {list.map((cs, i) => (
            <Reveal key={cs.slug} variant={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 100}>
              <Link to={`/work/${cs.slug}`} className="group block">
                <ArtBlock cs={cs} className="transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="mt-5">
                  <div className="text-xs text-muted-foreground font-mono mb-2">{cs.category} · {cs.region}</div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">{cs.headline}</h2>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {cs.metrics.map((m, mi) => (
                      <div key={mi} className="rounded-xl bg-secondary p-3">
                        <div className="text-base font-extrabold tracking-tight"><CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} /></div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
