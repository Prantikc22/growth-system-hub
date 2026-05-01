import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  return (
    <section className="relative bg-[#080B12] overflow-hidden min-h-screen flex flex-col">
      {/* Background glow */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6366F1 0%, #06B6D4 60%, transparent 80%)" }}
      />

      {/* Main content */}
      <div className="container-wide flex-1 grid lg:grid-cols-12 gap-6 xl:gap-10 items-center pt-28 md:pt-32 pb-12 relative z-10">
        {/* Left column */}
        <div className="lg:col-span-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70 text-xs font-medium tracking-wide">Not an agency. A growth system.</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.8rem,5.5vw,4.8rem)] font-black leading-[1.0] tracking-tight text-white mb-6">
            Growth systems<br />
            that{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #A855F7 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              print revenue.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-9 max-w-md">
            We scale modern brands through ads, content, funnels and retention systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => smoothScrollTo("#configurator")}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#080B12] font-bold px-7 py-3.5 text-sm md:text-base hover:bg-white/90 transition-colors"
            >
              Get Growth Blueprint →
            </button>
            <button
              onClick={() => smoothScrollTo("#work")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white font-semibold px-7 py-3.5 text-sm md:text-base hover:border-white/50 hover:bg-white/5 transition-all"
            >
              See Case Studies
            </button>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {(["#7C3AED", "#0F766E", "#A8336E"] as const).map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#080B12] grid place-items-center text-[10px] font-bold text-white"
                  style={{ background: c }}
                >
                  {["AK", "RS", "DS"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FACC15">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/45 text-xs">4.9/5 from 25+ growth-focused brands</p>
            </div>
          </div>
        </div>

        {/* Right column — Dashboard mockup */}
        <div className="lg:col-span-7 relative mt-8 lg:mt-0">
          <DashboardMockup />
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-white/8">
        <div className="container-wide py-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/15 grid place-items-center text-white/45 shrink-0">
                <s.Icon />
              </div>
              <div>
                {s.value && (
                  <div className="text-white font-extrabold text-base md:text-lg leading-tight">{s.value}</div>
                )}
                <div className={`text-white/40 text-[11px] leading-snug ${!s.value ? "font-medium text-xs" : ""}`}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  {
    Icon: () => (
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: undefined as string | undefined,
    label: "Trusted by ambitious D2C & service brands",
  },
  {
    Icon: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor" stroke="none" />
        <text x="5" y="17" fontSize="12" fill="currentColor" stroke="none" fontWeight="bold">₹</text>
      </svg>
    ),
    value: "₹12Cr+",
    label: "Revenue Influenced",
  },
  {
    Icon: () => (
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    value: "25+",
    label: "Brands Scaled",
  },
  {
    Icon: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: "4.9/5",
    label: "Client Satisfaction",
  },
];

function DashboardMockup() {
  return (
    <div className="relative select-none">
      {/* Laptop screen */}
      <div
        className="relative rounded-2xl border border-white/10 bg-[#0F1117] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        style={{
          transform: "perspective(1200px) rotateY(-6deg) rotateX(2deg)",
          transformOrigin: "60% center",
        }}
      >
        {/* Titlebar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/8 bg-[#0D0F14]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-3 rounded bg-white/5 h-4 max-w-[180px]" />
        </div>

        {/* Dashboard body */}
        <div className="p-5 md:p-6 bg-[#0F1117]">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-indigo-500/20 grid place-items-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="text-white/80 text-sm font-semibold">Overview</span>
            </div>
            <span className="text-white/25 text-[10px]">Apr 1 – Apr 30</span>
          </div>

          {/* Top metrics */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <div className="text-white/35 text-[9px] uppercase tracking-widest mb-1">Total Revenue</div>
              <div className="text-white font-extrabold text-lg md:text-2xl tracking-tight">₹3,21,45,231</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-emerald-400 text-[10px] font-bold">+214%</span>
              </div>
            </div>
            <div>
              <div className="text-white/35 text-[9px] uppercase tracking-widest mb-1">ROAS</div>
              <div className="text-white font-extrabold text-lg md:text-2xl tracking-tight">8.1x</div>
              <div className="text-white/25 text-[10px] mt-0.5">vs Mar 1 – Mar 31</div>
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 mb-4">
            <svg viewBox="0 0 380 70" className="w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hcg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C30,55 55,50 80,42 C105,34 125,38 150,28 C175,18 200,14 230,10 C255,6 280,7 310,4 C335,2 360,3 380,1"
                fill="none" stroke="#6366F1" strokeWidth="2"
              />
              <path
                d="M0,60 C30,55 55,50 80,42 C105,34 125,38 150,28 C175,18 200,14 230,10 C255,6 280,7 310,4 C335,2 360,3 380,1 L380,70 L0,70Z"
                fill="url(#hcg)"
              />
              <circle cx="380" cy="1" r="3" fill="#6366F1" />
            </svg>
          </div>

          {/* Purchases */}
          <div className="flex items-center gap-4 mb-4 pb-3 border-b border-white/5">
            <div>
              <div className="text-white/35 text-[9px] uppercase tracking-widest">Purchases</div>
              <div className="text-white font-bold text-sm">14,782</div>
            </div>
          </div>

          {/* Campaign table */}
          <div>
            <div className="text-white/30 text-[9px] uppercase tracking-widest mb-2">Top Campaigns</div>
            {[
              { name: "Prospecting – Advantage+", amt: "₹1,12,23,893", roas: "8.7x" },
              { name: "Retargeting – Conversions", amt: "₹98,71,654", roas: "7.6x" },
              { name: "Lookalike – Purchases", amt: "₹76,49,231", roas: "6.3x" },
            ].map((r) => (
              <div
                key={r.name}
                className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
              >
                <span className="text-white/45 text-[10px] truncate max-w-[54%]">{r.name}</span>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-white/70 text-[10px] font-mono">{r.amt}</span>
                  <span className="text-emerald-400 text-[10px] font-bold">{r.roas}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating metric cards */}
      <MetricCard style={{ top: "-7%", right: "-5%" }} icon="roas" metric="8.1x" label="ROAS" sub="↑ 162%" />
      <MetricCard style={{ top: "22%", right: "-10%" }} icon="cart" metric="₹3.2Cr" label="Revenue Generated in 90 Days" sub="↑ 214%" />
      <MetricCard style={{ bottom: "8%", right: "-5%" }} icon="growth" metric="+214%" label="Organic Growth in 120 Days" sub="↑ 214%" />
      <MetricCard style={{ bottom: "22%", left: "-5%" }} icon="brands" metric="12+" label="Brands Scaled Past ₹1Cr" sub="↑ 100%" />
    </div>
  );
}

function MetricCard({
  style,
  icon,
  metric,
  label,
  sub,
}: {
  style: React.CSSProperties;
  icon: "roas" | "cart" | "growth" | "brands";
  metric: string;
  label: string;
  sub: string;
}) {
  const icons = {
    roas: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    cart: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
      </svg>
    ),
    growth: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    brands: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  };

  return (
    <div
      className="absolute rounded-2xl bg-[#12141F]/95 border border-white/12 backdrop-blur-md p-3.5 min-w-[130px] max-w-[160px] shadow-xl"
      style={style}
    >
      <div className="flex items-center gap-1.5 mb-1.5 text-white/40 text-[10px]">
        {icons[icon]}
        <span className="truncate">{label}</span>
      </div>
      <div className="text-white text-xl font-extrabold leading-tight">{metric}</div>
      <div className="text-emerald-400 text-[10px] font-semibold mt-1">{sub}</div>
    </div>
  );
}
