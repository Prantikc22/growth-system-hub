import { Reveal } from "@/components/Reveal";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useLocation } from "react-router-dom";

const PROBLEMS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Traffic that does not convert",
    desc: "Visitors arrive but never turn into paying customers. Your funnel leaks at every step.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Lost in AI search & discovery",
    desc: "You're invisible where buying decisions now begin — Google AI, ChatGPT, and Perplexity.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Multiple vendors, no strategy",
    desc: "Five agencies, zero accountability. Each blames the other while your budget burns.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Slow speed to market",
    desc: "Delays in approvals, revisions, and launches cost you momentum and real revenue.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Data without direction",
    desc: "Beautiful dashboards, zero clarity. You see the numbers but not the next move.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Specialists you can't afford in-house",
    desc: "SEO, paid media, content, and devs under one roof costs more than you can justify.",
  },
];

export function ProblemSolution() {
  const { pathname } = useLocation();

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <Reveal variant="up" className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="pill mx-auto mb-4">Sound familiar?</p>
          <h2 className="heading-section">The problems costing<br />your business growth.</h2>
        </Reveal>

        {/* Problem grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-16">
          {PROBLEMS.map((p, i) => (
            <Reveal key={i} variant="up" delay={i * 80}>
              <div className="group rounded-2xl bg-background border border-border p-6 md:p-7 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-card">
                <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/15">
                  {p.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-2 tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Solution bar */}
        <Reveal variant="pop">
          <div
            className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #0f172a 100%)" }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 opacity-20" style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-15" style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">The Remarqd way</p>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                  One team. One contract.<br />Real accountability.
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Strategy, ads, content, and tech — under one roof. Productized scopes with transparent pricing. We win when your numbers move. Not before.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Funnel-first strategy", "Daily optimisation", "Weekly outcomes review", "Slack + WhatsApp access"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/70">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <button
                  onClick={() => {
                    if (pathname === "/") smoothScrollTo("#configurator");
                    else window.location.href = "/#configurator";
                  }}
                  className="inline-flex items-center gap-2 rounded-full font-bold px-8 py-4 text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02] whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                    boxShadow: "0 8px 30px rgba(37,99,235,0.45)",
                  }}
                >
                  Build my system →
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
