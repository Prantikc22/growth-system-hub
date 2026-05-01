import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    n: "01",
    title: "Performance Marketing",
    pitch: "Meta, Google, YouTube — always-on creative testing and a daily optimisation cadence.",
    bullets: ["Funnel architecture & tracking", "Daily creative testing", "Weekly outcomes review", "SEO + WhatsApp campaigns add-ons"],
    accent: "bg-[#2563EB]",
  },
  {
    n: "02",
    title: "Social Media Management",
    pitch: "Brand-led posting, reels and community — built around your voice, not a template.",
    bullets: ["Channel-specific content calendar", "Reels production engine", "Community management", "Monthly brand reporting"],
    accent: "bg-[#A8336E]",
  },
  {
    n: "03",
    title: "Content Creation",
    pitch: "Studio-grade creatives, reels, blogs, copy and identity — built in-house.",
    bullets: ["Static & animated creatives", "Reels & shorts production", "Long-form content / blogs", "Brand identity & guidelines"],
    accent: "bg-[#0F766E]",
  },
  {
    n: "04",
    title: "Web · App · Ecom · Chatbots",
    pitch: "Sites, stores, mobile apps, AI chatbots and WhatsApp automations — fast, measurable, owned.",
    bullets: ["High-converting websites & landing pages", "Shopify / custom ecommerce", "iOS + Android apps", "AI chatbots & WhatsApp flows"],
    accent: "bg-[#7C3AED]",
  },
  {
    n: "05",
    title: "Personal Branding & Talent",
    pitch: "Make founders and creators the brand. Long-term thought leadership built like a media company.",
    bullets: ["Founder positioning & narrative", "Weekly content production", "Distribution & community", "PR & deal management", "Talent management & representation", "Brand deals & partnerships"],
    accent: "bg-[#DC2626]",
  },
];

export function ServiceRows() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 container-wide">
      <Reveal variant="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="pill mb-4">Five services. One system.</p>
            <h2 className="heading-section max-w-2xl">Everything your brand needs.<br />Nothing it doesn't.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg">Pick what you need. Mix what you don't. Pricing scales with scope, not surprise.</p>
        </div>
      </Reveal>

      <div className="border-t border-border" onMouseLeave={() => setActive(null)}>
        {SERVICES.map((s, i) => {
          const isActive = active === i;
          return (
            <Reveal key={s.n} variant="left" delay={i * 80}>
              <div
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group relative border-b border-border transition-all duration-300",
                  active !== null && !isActive && "opacity-60"
                )}
              >
                <div className="absolute left-0 top-0 bottom-0 accent-bar" />
                <div className="grid md:grid-cols-12 gap-6 py-8 md:py-10 px-4 md:px-6 items-start">
                  <div className="md:col-span-1 text-sm font-mono text-muted-foreground">{s.n}</div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{s.title}</h3>
                  </div>
                  <div className="md:col-span-5 text-muted-foreground text-lg">{s.pitch}</div>
                  <div className="md:col-span-2 flex md:justify-end">
                    <span className={cn("text-xs font-semibold uppercase tracking-widest text-foreground/60 transition-transform", isActive && "translate-x-1")}>
                      Explore →
                    </span>
                  </div>
                </div>
                <div className={cn(
                  "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out",
                  isActive && "grid-rows-[1fr]"
                )}>
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-10 md:pb-12">
                      <div className={cn("inline-block w-12 h-1 rounded-full mb-5", s.accent)} />
                      <ul className="grid sm:grid-cols-2 gap-3 text-foreground/80 max-w-3xl">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-base">
                            <span className="mt-2 w-1 h-1 rounded-full bg-foreground/50 shrink-0" />{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
