import { Marquee } from "@/components/Marquee";

const CLIENT_LOGOS: { src: string; alt: string; w: number; h: number }[] = [
  { src: "/clients/82e.webp",       alt: "82°E",            w: 200, h: 56 },
  { src: "/clients/bodycraft.webp", alt: "Bodycraft",       w: 150, h: 40 },
  { src: "/clients/cosmic.webp",    alt: "Cosmic",          w: 140, h: 40 },
  { src: "/clients/karigari.png",   alt: "Karigari",        w: 260, h: 60 },
  { src: "/clients/chai-point.png", alt: "Chai Point",      w: 120, h: 40 },
  { src: "/clients/sarada.png",     alt: "Sarada Robotech", w: 140, h: 40 },
  { src: "/clients/login-logo.png", alt: "Client",          w: 70,  h: 40 },
];

export function MarqueeStrip() {
  return (
    <section className="surface-ink py-6 md:py-8 overflow-hidden border-y border-white/5">
      <Marquee reverse duration={50} gap={72}>
        {CLIENT_LOGOS.map((logo) => (
          <div key={logo.alt} className="flex items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                width: logo.w,
                height: logo.h,
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
              className="opacity-50 hover:opacity-80 transition-opacity duration-300"
              draggable={false}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
