import { Marquee } from "@/components/Marquee";

const PARTNERS = [
  "Meta Partner", "Google Partner", "Shopify Partner", "OpenAI",
  "WhatsApp Business", "Razorpay", "Klaviyo", "Zoho CRM",
];

const CLIENT_LOGOS = [
  { src: "/clients/82e.webp",       alt: "82°E",          w: 96  },
  { src: "/clients/bodycraft.webp", alt: "Bodycraft",     w: 140 },
  { src: "/clients/cosmic.webp",    alt: "Cosmic",        w: 130 },
  { src: "/clients/karigari.png",   alt: "Karigari",      w: 150 },
  { src: "/clients/chai-point.png", alt: "Chai Point",    w: 110 },
  { src: "/clients/sarada.png",     alt: "Sarada Robotech", w: 130 },
  { src: "/clients/mamagoto.png",   alt: "Mamagoto",      w: 120 },
  { src: "/clients/login-logo.png", alt: "Client",        w: 60  },
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

      <div className="h-5" />

      {/* Row 2 — Client logos */}
      <Marquee reverse duration={50} gap={64}>
        {CLIENT_LOGOS.map((logo) => (
          <div key={logo.alt} className="flex items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                width: logo.w,
                height: 36,
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
              className="opacity-45 hover:opacity-75 transition-opacity duration-300"
              draggable={false}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
