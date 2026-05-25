import { Reveal } from "@/components/Reveal";
import { useLocation } from "react-router-dom";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const PROBLEMS = [
  {
    n: "01",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "#2563EB",
    title: "Traffic that doesn't convert",
    desc: "Visitors arrive but never turn into pipeline. Your funnel leaks at every step, silently.",
  },
  {
    n: "02",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    color: "#7C3AED",
    title: "Invisible in AI search",
    desc: "Buying decisions now start in ChatGPT and Perplexity. You're not showing up where it counts.",
  },
  {
    n: "03",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    color: "#A8336E",
    title: "Five vendors. Zero accountability.",
    desc: "Each agency blames the next. Nobody owns the funnel end-to-end while your budget burns.",
  },
  {
    n: "04",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "#DC2626",
    title: "Painfully slow to market",
    desc: "Weeks lost in approvals, revisions, and handoffs — every delay is compounded revenue lost.",
  },
  {
    n: "05",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    color: "#0F766E",
    title: "Data without direction",
    desc: "Beautiful reports, zero clarity. You see the numbers — but not the next move.",
  },
  {
    n: "06",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "#D97706",
    title: "Senior talent you can't afford",
    desc: "A great SEO, paid expert, and dev under one roof costs ₹30L+/year. That's before results.",
  },
];

export function ProblemSolution() {
  const { pathname } = useLocation();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 bg-[#F8F7F5]">
      <div className="container-wide">
        {/* Header */}
        <Reveal variant="up" className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="pill mx-auto mb-5">Sound familiar?</p>
          <h2 className="heading-section">
            The problems costing your<br />
            <em className="italic">business growth.</em>
          </h2>
        </Reveal>

        {/* Problem cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.n}
              className={cn(
                "problem-card rounded-2xl p-6 md:p-7 cursor-default",
                "iv-reveal",
                inView && "is-in"
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className="problem-icon w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${p.color}dd 0%, ${p.color}88 100%)` }}
                >
                  {p.icon}
                </span>
                <span
                  className="text-3xl font-serif font-normal leading-none opacity-10"
                  style={{ color: p.color }}
                >
                  {p.n}
                </span>
              </div>
              <h3 className="font-serif text-lg md:text-xl mb-2 leading-snug">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* The Remarqd Way — bold solution */}
        <Reveal variant="pop">
          <div className="relative rounded-3xl overflow-hidden text-white" style={{ background: "#080B12" }}>
            {/* Gradient orbs */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none"
              style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 65%)" }} />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 65%)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] opacity-5 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #60a5fa 0%, transparent 60%)" }} />

            <div className="relative z-10 p-10 md:p-16">
              <div className="flex flex-col lg:flex-row lg:items-end gap-12">
                {/* Left: big statement */}
                <div className="flex-1">
                  <p className="pill bg-white/5 border-white/10 text-white/50 mb-6">The Remarqd way</p>
                  <h3 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.0] tracking-tight mb-6">
                    One team.<br />
                    <em
                      className="italic"
                      style={{
                        background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 50%, #f9a8d4 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Zero fragmentation.
                    </em>
                    <br />
                    All the growth.
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg font-sans mb-8">
                    Strategy, ads, content, and tech — under one roof, one contract, one weekly outcomes review.
                    We don't just execute. We own the funnel end-to-end.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Funnel-first strategy",
                      "Daily optimisation",
                      "SEO + AI Search",
                      "Weekly outcomes review",
                      "Slack & WhatsApp",
                      "Transparent pricing",
                    ].map((tag) => (
                      <span key={tag} className="text-xs rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-white/65 font-ui" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (pathname === "/") smoothScrollTo("#configurator");
                      else window.location.href = "/#configurator";
                    }}
                    className="btn-gradient rounded-full px-8 py-4 text-sm"
                  >
                    Build my growth system →
                  </button>
                </div>

                {/* Right: proof metrics */}
                <div className="shrink-0 grid grid-cols-2 gap-3 lg:gap-4 lg:w-72">
                  {[
                    { n: "4.7x", l: "Avg blended ROAS" },
                    { n: "₹92Cr", l: "Revenue moved" },
                    { n: "25+", l: "Brands scaled" },
                    { n: "4.9★", l: "Client satisfaction" },
                  ].map((m) => (
                    <div key={m.l} className="rounded-2xl bg-white/5 border border-white/10 p-4 md:p-5">
                      <div className="font-serif text-2xl md:text-3xl text-white mb-1">{m.n}</div>
                      <div className="text-[11px] text-white/45 uppercase tracking-widest font-ui" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
