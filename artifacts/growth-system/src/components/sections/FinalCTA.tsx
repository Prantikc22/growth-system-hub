import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useLocation } from "react-router-dom";

export function FinalCTA() {
  const { pathname } = useLocation();

  return (
    <section className="py-24 md:py-32 container-wide">
      <Reveal variant="pop">
        <div
          className="rounded-3xl text-white p-10 md:p-20 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #0f172a 50%, #1a0a2e 100%)" }}
        >
          {/* Glow orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }} />

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Your move</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold tracking-tight text-white leading-[1.05] mb-5">
              Scale your business without<br className="hidden md:block" /> scaling your costs.
            </h2>
            <p className="max-w-lg mx-auto text-base md:text-lg text-white/60 mb-8 leading-relaxed">
              Book a 30-minute strategy call. We map your gaps, show you where growth is being left on the table, and tell you exactly how we fix it.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  if (pathname === "/") smoothScrollTo("#configurator");
                  else window.location.href = "/#configurator";
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full font-bold px-8 py-4 text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                  boxShadow: "0 8px 30px rgba(37,99,235,0.45)",
                }}
              >
                Grow my revenue →
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold px-8 py-4 text-sm text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
              >
                Talk to a human first
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/30">No commitment. No sales pitch. Just clarity.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
