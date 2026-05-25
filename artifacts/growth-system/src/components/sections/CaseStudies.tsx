import { useState } from "react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "@/data/case-studies";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { ArtBlock } from "@/components/ArtBlock";
import { cn } from "@/lib/utils";

const BENTO_SLUGS = [
  "country-bean-coffee",
  "flent",
  "svaraa-jewels",
  "inaara",
];

const EMBEDDED_TESTIMONIALS = [
  {
    quote: "We tried two agencies before. This is the first time it actually feels like a team. ROAS doubled in 60 days.",
    name: "Aarav Mehta",
    role: "Founder, Country Bean Coffee",
    initial: "AM",
    accent: "#7B3F00",
  },
  {
    quote: "I was the bottleneck. They built a system around me, not just content for me. Every drop sells out now.",
    name: "Svaraa G.",
    role: "Founder, Svaraa Jewels",
    initial: "SG",
    accent: "#A8336E",
  },
];

function MetricBadge({ m }: { m: { value: number; suffix: string; prefix?: string; label: string } }) {
  return (
    <div className="rounded-xl bg-background/90 backdrop-blur-sm border border-white/10 p-3">
      <div className="text-base md:text-lg font-serif font-normal tracking-tight text-white">
        <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
      </div>
      <div className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5 leading-tight font-ui" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>{m.label}</div>
    </div>
  );
}

function CaseCard({ cs, className }: { cs: (typeof CASE_STUDIES)[0]; className?: string }) {
  return (
    <Link to={`/work/${cs.slug}`} className={cn("group block relative overflow-hidden rounded-2xl bg-secondary", className)}>
      <ArtBlock cs={cs} className="w-full h-full transition-transform duration-700 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <div className="text-[10px] text-white/50 font-ui uppercase tracking-widest mb-1.5" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>
          {cs.category} · {cs.region}
        </div>
        <h3 className="font-serif text-base md:text-xl text-white font-normal leading-snug mb-3">{cs.headline}</h3>
        <div className="grid grid-cols-3 gap-2">
          {cs.metrics.map((m, mi) => <MetricBadge key={mi} m={m} />)}
        </div>
      </div>
    </Link>
  );
}

export function CaseStudies() {
  const [showAll, setShowAll] = useState(false);
  const bento = BENTO_SLUGS.map((slug) => CASE_STUDIES.find((c) => c.slug === slug)!).filter(Boolean);
  const remaining = CASE_STUDIES.filter((c) => !BENTO_SLUGS.includes(c.slug));

  return (
    <section id="work" className="py-24 md:py-32 bg-[#F8F7F5]">
      <div className="container-wide">
        {/* Header */}
        <Reveal variant="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="pill mb-5">Selected work</p>
            <h2 className="heading-section">Brands that<br /><em className="italic">compounded.</em></h2>
          </div>
          <Link
            to="/work"
            className="text-sm font-ui font-semibold text-foreground/60 hover:text-foreground transition-colors"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            View all {CASE_STUDIES.length} case studies →
          </Link>
        </Reveal>

        {/* Bento grid */}
        <Reveal variant="up" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {/* Card 1 — wide */}
          <CaseCard cs={bento[0]} className="md:col-span-2 h-64 md:h-80" />
          {/* Card 2 — tall */}
          <CaseCard cs={bento[1]} className="h-64 md:h-80" />
        </Reveal>
        <Reveal variant="up" delay={100} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-14">
          {/* Card 3 — narrow */}
          <CaseCard cs={bento[2]} className="h-64 md:h-72" />
          {/* Card 4 — wide */}
          <CaseCard cs={bento[3]} className="md:col-span-2 h-64 md:h-72" />
        </Reveal>

        {/* Embedded testimonials */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {EMBEDDED_TESTIMONIALS.map((t, i) => (
            <Reveal key={i} variant={i === 0 ? "left" : "right"} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <svg className="w-6 h-6 text-muted-foreground/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.3 2.3C10 5.1 9 8.3 9 12v9H0v-9c0-5.9 2.6-10.6 7.7-13.2L11.3 2.3zm13 0C23 5.1 22 8.3 22 12v9h-9v-9c0-5.9 2.6-10.6 7.7-13.2L24.3 2.3z" />
                </svg>
                <p className="font-serif text-lg md:text-xl font-normal leading-snug text-foreground mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full grid place-items-center font-bold text-sm text-white shrink-0" style={{ background: t.accent }}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-ui text-sm font-semibold" style={{ fontFamily: "'Syne',sans-serif" }}>{t.name}</div>
                    <div className="text-xs text-muted-foreground font-sans">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* See more toggle */}
        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn-gradient rounded-full px-8 py-3.5 text-sm"
            >
              See all {CASE_STUDIES.length} case studies →
            </button>
          </div>
        )}

        {/* Additional cases */}
        {showAll && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {remaining.map((cs, i) => (
              <Reveal key={cs.slug} variant={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 100}>
                <CaseCard cs={cs} className="h-64 md:h-72" />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
