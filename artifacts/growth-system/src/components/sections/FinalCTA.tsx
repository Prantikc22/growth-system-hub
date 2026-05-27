import { Link } from "react-router-dom";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useLocation } from "react-router-dom";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  const { pathname } = useLocation();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "linear-gradient(180deg, #060810 0%, #0d0620 50%, #060810 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-25"
          style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] opacity-20"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #ec4899 0%, transparent 65%)" }} />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }} />

      <div ref={ref} className="container-wide relative z-10 text-center">
        <p
          className={cn("inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs mb-6 text-white/40 uppercase tracking-widest transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}
          style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}
        >
          Your move
        </p>

        <h2
          className={cn("font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal text-white leading-[0.98] tracking-tight mb-6 transition-all duration-800", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
          style={{ transitionDelay: "100ms" }}
        >
          Scale your business<br />
          <em
            className="italic"
            style={{
              background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 40%, #f9a8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            without scaling your costs.
          </em>
        </h2>

        <p
          className={cn("text-white/50 font-sans text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
          style={{ transitionDelay: "200ms" }}
        >
          Book a 30-minute strategy call. We map your gaps, show you where growth is being
          left on the table, and tell you exactly how we fix it.
        </p>

        <div
          className={cn("flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="hero-cta-ring rounded-full w-fit mx-auto sm:mx-0">
            <button
              onClick={() => {
                if (pathname === "/") smoothScrollTo("#configurator");
                else window.location.href = "/#configurator";
              }}
              className="btn-gradient rounded-full px-8 py-4 text-sm relative z-10"
            >
              Grow my revenue →
            </button>
          </div>
          <Link
            to="/contact"
            className="btn-outline-dark rounded-full border border-white/20 text-white px-8 py-4 text-sm hover:bg-white/6 hover:border-white/35 inline-flex items-center justify-center"
          >
            Talk to a human first
          </Link>
        </div>

        <p
          className={cn("text-white/25 text-xs font-sans transition-all duration-700", inView ? "opacity-100" : "opacity-0")}
          style={{ transitionDelay: "400ms" }}
        >
          No commitment · No sales pitch · Just clarity
        </p>
      </div>
    </section>
  );
}
