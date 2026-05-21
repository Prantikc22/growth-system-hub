import { Marquee } from "@/components/Marquee";
import { Link } from "react-router-dom";

export function EventsStrip() {
  return (
    <section className="border-y border-border py-6 bg-background">
      <Marquee duration={35}>
        {["Founders Dinner · Bengaluru · Mar 12", "Growth Workshop · Mumbai · Mar 28", "Brand Lab · Delhi · Apr 5", "Creator Studio Tour · Pune · Apr 18", "Founders Dinner · Hyderabad · May 2"].map((e, i) => (
          <Link key={i} to="/contact" className="text-sm md:text-base font-semibold text-foreground/80 hover:text-foreground flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            {e}
            <span className="text-muted-foreground">· RSVP →</span>
          </Link>
        ))}
      </Marquee>
    </section>
  );
}

export function FranchiseStrip() {
  return (
    <section className="surface-ink py-12 md:py-16">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-ink-foreground/60">Franchise · Partner with us</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-ink-foreground mt-2">Run a Remarqd chapter in your city.</h3>
        </div>
        <Link
          to="/franchise"
          className="rounded-full px-6 py-3 font-bold text-sm text-white transition-all hover:opacity-90 shrink-0"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)", boxShadow: "0 8px 20px rgba(37,99,235,0.4)" }}
        >
          Apply to partner →
        </Link>
      </div>
    </section>
  );
}
