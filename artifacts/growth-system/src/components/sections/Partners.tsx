import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const PARTNERS = [
  { name: "Google Partner",              color: "#4285F4" },
  { name: "Meta Business Partner",       color: "#0082FB" },
  { name: "Microsoft Advertising",       color: "#00A4EF" },
  { name: "HubSpot Certified",           color: "#FF7A59" },
  { name: "Shopify Partner",             color: "#96BF48" },
  { name: "Webflow Expert",              color: "#4353FF" },
  { name: "Salesforce Partner",          color: "#00A1E0" },
  { name: "SEMrush Agency",              color: "#FF642D" },
  { name: "Braze Certified",             color: "#F26F21" },
  { name: "WordPress VIP",              color: "#21759B" },
];

export function Partners() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-14 md:py-20 bg-[#F8F7F5] border-y border-border overflow-hidden">
      <div className="container-wide">
        <Reveal variant="up" className="text-center mb-8">
          <p className="pill mx-auto">Certified across the ecosystem</p>
        </Reveal>

        {/* Badge image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/partner-badges.png"
            alt="Google Partner, Meta Business Partner, Microsoft Advertising, HubSpot, Shopify, Webflow, Salesforce, SEMrush, Braze"
            className="max-w-2xl w-full opacity-80 mix-blend-multiply"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>

        {/* Subtle partner name chips */}
        <div ref={ref} className="flex flex-wrap justify-center gap-2">
          {PARTNERS.map((p, i) => (
            <span
              key={p.name}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-ui text-foreground/60 transition-all duration-500",
                "iv-reveal",
                inView && "is-in"
              )}
              style={{ transitionDelay: `${i * 50}ms`, fontFamily: "'Syne',sans-serif", fontWeight: 600 }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
