import { Marquee } from "@/components/Marquee";

const PARTNERS = [
  "Meta Partner", "Google Partner", "Shopify Partner", "OpenAI",
  "WhatsApp Business", "Razorpay", "Klaviyo", "Zoho CRM",
];

const CLIENTS = [
  "Kairo Coffee", "Linen by Anaya", "Northstar Realty", "Okura Ramen",
  "Tilt Finance", "Halo Bots", "Atelier Noir", "Inkpath EduTech",
  "Lumen Skin", "Vyom Strength", "Nira Stays", "Saanvi Jewels",
];

export function MarqueeStrip() {
  return (
    <section className="surface-ink py-7 md:py-9 overflow-hidden border-y border-white/5">
      {/* Row 1 — Partners / Platforms */}
      <Marquee duration={38} gap={72}>
        {PARTNERS.map((t) => (
          <span
            key={t}
            className="text-base md:text-lg font-semibold text-ink-foreground/40 flex items-center gap-12 uppercase tracking-widest"
          >
            {t}
            <span className="inline-block w-1 h-1 rounded-full bg-ink-foreground/15 shrink-0" />
          </span>
        ))}
      </Marquee>

      <div className="h-4" />

      {/* Row 2 — Clients */}
      <Marquee reverse duration={50} gap={64}>
        {CLIENTS.map((t) => (
          <span
            key={t}
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink-foreground/80 flex items-center gap-16"
          >
            {t}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-glow/80 shrink-0" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
