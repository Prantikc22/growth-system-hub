import { Marquee } from "@/components/Marquee";

const CLIENT_LOGOS = [
  { src: "/clients/82e.webp",       alt: "82°E",          w: 130 },
  { src: "/clients/bodycraft.webp", alt: "Bodycraft",     w: 140 },
  { src: "/clients/cosmic.webp",    alt: "Cosmic",        w: 130 },
  { src: "/clients/karigari.png",   alt: "Karigari",      w: 200 },
  { src: "/clients/chai-point.png", alt: "Chai Point",    w: 110 },
  { src: "/clients/sarada.png",     alt: "Sarada Robotech", w: 130 },
  { src: "/clients/login-logo.png", alt: "Client",        w: 60  },
];

export function MarqueeStrip() {
  return (
    <section className="surface-ink py-7 md:py-9 overflow-hidden border-y border-white/5">
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
