import { Marquee } from "@/components/Marquee";
import { PARTNERSHIPS } from "@/data/partnerships";
import { Reveal } from "@/components/Reveal";

export function TrustBar() {
  return (
    <section className="py-12 border-b border-border bg-background">
      <Reveal variant="up" className="container-wide">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Trusted partners & platforms</p>
      </Reveal>
      <Marquee duration={45}>
        {PARTNERSHIPS.map((p) => (
          <span key={p.name} className="flex items-center gap-3 text-foreground/80">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">{p.logo}</span>
            <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">{p.category}</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
