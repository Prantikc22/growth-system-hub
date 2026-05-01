import { Marquee } from "@/components/Marquee";

const TOP = ["Performance Marketing", "Social Media", "Content Studio", "Web · App · Ecom", "Personal Branding", "WhatsApp Automation", "AI Chatbots", "SEO"];
const BOT = ["Meta Partner", "Google Partner", "Razorpay", "Shopify Partner", "OpenAI", "Klaviyo", "Zoho", "WhatsApp Business"];

export function MarqueeStrip() {
  return (
    <section className="surface-ink py-8 md:py-10 overflow-hidden border-y border-white/5">
      <Marquee duration={30}>
        {TOP.map((t) => (
          <span key={t} className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink-foreground/80 flex items-center gap-12">
            {t}
            <span className="inline-block w-2 h-2 rounded-full bg-primary-glow" />
          </span>
        ))}
      </Marquee>
      <div className="h-4" />
      <Marquee reverse duration={40}>
        {BOT.map((t) => (
          <span key={t} className="text-xl md:text-2xl font-medium text-ink-foreground/40 flex items-center gap-10">
            {t}
            <span className="inline-block w-1 h-1 rounded-full bg-ink-foreground/20" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
