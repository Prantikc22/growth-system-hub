import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

const PARTNERS = [
  { name: "Google Partner", icon: "G" },
  { name: "Meta Business Partner", icon: "M" },
  { name: "Microsoft Advertising", icon: "Ms" },
  { name: "Shopify Partner", icon: "Sh" },
  { name: "HubSpot", icon: "Hs" },
  { name: "Semrush Agency", icon: "Sr" },
  { name: "Webflow Expert", icon: "Wf" },
  { name: "Mailchimp Partner", icon: "Mc" },
  { name: "Zoho Partner", icon: "Zo" },
  { name: "Klaviyo Elite", icon: "Kl" },
];

export function Partners() {
  return (
    <section className="py-14 md:py-16 border-y border-border bg-secondary/20 overflow-hidden">
      <div className="container-wide mb-8">
        <Reveal variant="up" className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Certified across the ecosystem</p>
        </Reveal>
      </div>
      <Marquee duration={40}>
        {PARTNERS.map((p) => (
          <div key={p.name} className="flex items-center gap-3 px-2">
            <span className="w-8 h-8 rounded-lg bg-foreground/8 text-foreground text-xs font-black grid place-items-center border border-border">
              {p.icon}
            </span>
            <span className="text-sm font-semibold text-foreground/70 whitespace-nowrap">{p.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
