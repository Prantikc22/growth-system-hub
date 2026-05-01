import { Marquee } from "@/components/Marquee";

const SERVICES = ["Performance Marketing", "Social Media", "Content Studio", "Web & Ecom", "Personal Branding", "AI & Automation"];
const PARTNERS = ["Meta Partner", "Google Partner", "Shopify Partner", "OpenAI", "WhatsApp Business", "Razorpay"];

export function MarqueeStrip() {
  return (
    <section className="surface-ink py-7 md:py-9 overflow-hidden border-y border-white/5">
      <Marquee duration={35} gap={72}>
        {SERVICES.map((t) => (
          <span key={t} className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink-foreground/80 flex items-center gap-16">
            {t}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-glow/80 shrink-0" />
          </span>
        ))}
      </Marquee>
      <div className="h-3" />
      <Marquee reverse duration={45} gap={64}>
        {PARTNERS.map((t) => (
          <span key={t} className="text-base md:text-lg font-semibold text-ink-foreground/35 flex items-center gap-12 uppercase tracking-widest">
            {t}
            <span className="inline-block w-1 h-1 rounded-full bg-ink-foreground/15 shrink-0" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
