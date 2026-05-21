import { useParams, Link } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Configurator } from "@/components/sections/Configurator";
import NotFound from "./NotFound";

const SERVICES: Record<string, {
  n: string;
  title: string;
  accent: string;
  tagline: string;
  intro: string;
  bullets: string[];
  faq: { q: string; a: string }[];
}> = {
  "performance-marketing": {
    n: "01",
    title: "Performance Marketing",
    accent: "#2563EB",
    tagline: "Every rupee tracked. Every creative tested. Always on.",
    intro: "We run Meta, Google and YouTube campaigns with a daily optimisation cadence — not a monthly report. Creative testing is built into the process from day one, so your cost per acquisition keeps dropping as we learn what works for your audience.",
    bullets: [
      "Full-funnel architecture & pixel/CAPI setup",
      "Daily creative testing (static, video, UGC)",
      "Google Search, Shopping & Display",
      "YouTube awareness + retargeting",
      "WhatsApp broadcast campaigns",
      "SEO add-on — organic traffic alongside paid",
      "Weekly outcomes review with you",
      "Monthly attribution & P&L breakdown",
    ],
    faq: [
      { q: "What's the minimum ad budget you work with?", a: "We generally recommend ₹1L/month in ad spend as a starting point for meaningful testing — but we'll advise based on your category." },
      { q: "Do you handle creative production too?", a: "Yes. Our content team produces all ad creatives in-house — statics, reels, UGC-style videos. No extra brief needed." },
      { q: "How quickly will I see results?", a: "Most brands see measurable ROAS improvement within 30–45 days as we complete the first creative testing cycle." },
    ],
  },
  "social-media": {
    n: "02",
    title: "Social Media Management",
    accent: "#A8336E",
    tagline: "Your voice, consistently — built for the algorithm and your audience.",
    intro: "We run your Instagram, LinkedIn and YouTube presence as a brand-led media operation. Every post, reel and story is mapped to a content strategy that builds community and drives traffic — not just impressions.",
    bullets: [
      "Channel-specific content calendar",
      "Reels production (scripted, shot, edited)",
      "Stories, carousels, broadcast channels",
      "Community management & DM handling",
      "Influencer outreach & collaboration briefs",
      "Monthly brand reporting & audience insights",
      "LinkedIn for B2B or founder-led brands",
      "YouTube Shorts distribution",
    ],
    faq: [
      { q: "Do you shoot the content or just edit?", a: "Both. We have in-house production for brands in Mumbai/Kolkata, and a remote production workflow for brands elsewhere using their own footage." },
      { q: "How many posts per month?", a: "Depends on the package — typically 20–30 feed posts and 8–16 reels per month. We'll recommend a cadence based on your category." },
      { q: "Will I have approval rights?", a: "Yes — we share a content calendar each month and nothing goes live without your sign-off." },
    ],
  },
  "content-creation": {
    n: "03",
    title: "Content Creation",
    accent: "#0F766E",
    tagline: "Studio-grade content built in-house — not briefed out.",
    intro: "From brand identity to long-form video, our in-house studio produces everything without a third-party agency in the loop. That means faster turnaround, tighter brand consistency, and no briefing overhead.",
    bullets: [
      "Static & animated social creatives",
      "Reels & short-form video production",
      "Long-form video — brand films, testimonials",
      "Blog & SEO content writing",
      "Ad copywriting (Google, Meta, email)",
      "Brand identity & visual guidelines",
      "Pitch decks & investor presentations",
      "Packaging & print-ready artwork",
    ],
    faq: [
      { q: "Do you work with brands outside Mumbai/Kolkata?", a: "Yes — we do remote shoots using a structured brief + your own footage, or we travel for priority projects." },
      { q: "How long does a typical creative project take?", a: "Most social creatives are turned around in 3–5 working days. Brand identity projects run 3–6 weeks." },
      { q: "Can I buy content as a standalone service?", a: "Absolutely — content creation can be scoped independently without a retainer." },
    ],
  },
  "web-tech": {
    n: "04",
    title: "Web · App · Ecom · Chatbots",
    accent: "#7C3AED",
    tagline: "Fast, measurable digital products — owned by you.",
    intro: "We build the digital infrastructure your brand runs on: high-converting websites, Shopify stores, iOS/Android apps, AI-powered chatbots and WhatsApp automation flows. Everything is scoped, built and handed over — no retainer lock-in.",
    bullets: [
      "High-converting landing pages & microsites",
      "Full brand websites (React, Next.js, Webflow)",
      "Shopify development & custom ecommerce",
      "iOS & Android app development",
      "AI chatbots (WhatsApp, website, Instagram DM)",
      "WhatsApp automation & broadcast flows",
      "CRM integrations & lead routing",
      "Analytics setup — GA4, Mixpanel, Hotjar",
    ],
    faq: [
      { q: "Do you offer ongoing maintenance after launch?", a: "Yes — we offer monthly maintenance retainers for all platforms we build on." },
      { q: "How long does a website take to build?", a: "A landing page is typically 1–2 weeks. A full brand site is 4–8 weeks depending on scope." },
      { q: "What platform do you recommend for ecommerce?", a: "Shopify for most D2C brands. Custom builds for complex catalogues or marketplace integrations." },
    ],
  },
  "personal-branding": {
    n: "05",
    title: "Personal Branding & Talent",
    accent: "#DC2626",
    tagline: "Make the founder the brand. Build influence like a media company.",
    intro: "For founders, creators and executives who want to build a lasting personal brand alongside their company. We handle positioning, content production, distribution, PR and — for eligible talent — brand deals and representation.",
    bullets: [
      "Founder positioning & narrative development",
      "Weekly content production (LinkedIn, IG, YouTube)",
      "Ghostwriting & thought leadership articles",
      "Speaking slots & podcast outreach",
      "PR — media placements, press releases",
      "Community building & newsletter strategy",
      "Brand deals & partnership negotiations",
      "Talent management & representation",
    ],
    faq: [
      { q: "Who is this service for?", a: "Primarily founders, CXOs, and creators who want to build influence. We also work with emerging talent in lifestyle, sport and entertainment." },
      { q: "Do you handle brand deal negotiations?", a: "Yes — for clients on our talent management track, we handle outreach, negotiation and contract review." },
      { q: "Is there a minimum engagement period?", a: "Personal branding results compound over time — we recommend a minimum 6-month commitment for meaningful results." },
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const svc = slug ? SERVICES[slug] : undefined;

  if (!svc) return <NotFound />;

  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-0">
        {/* Hero */}
        <section className="container-wide pb-20 md:pb-28">
          <Reveal variant="up">
            <p className="pill mb-4">Service {svc.n} of 05</p>
            <h1 className="heading-display max-w-3xl">{svc.title}</h1>
            <p className="mt-5 text-xl text-muted-foreground max-w-2xl">{svc.tagline}</p>
          </Reveal>

          <Reveal variant="up" delay={100} className="mt-14 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed">{svc.intro}</p>

              <div className="mt-10">
                <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: svc.accent }} />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base text-foreground/80">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: svc.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
              {svc.faq.map((item) => (
                <div key={item.q} className="border-b border-border pb-6">
                  <p className="font-semibold text-foreground mb-2">{item.q}</p>
                  <p className="text-muted-foreground text-base">{item.a}</p>
                </div>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-ink-foreground px-6 py-3 font-semibold hover:bg-ink/90 transition-colors mt-2"
              >
                Talk to us about {svc.title} →
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Other services */}
        <section className="container-wide pb-16">
          <Reveal variant="up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Other services</p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(SERVICES)
                .filter(([s]) => s !== slug)
                .map(([s, sv]) => (
                  <Link
                    key={s}
                    to={`/services/${s}`}
                    className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground transition-colors"
                  >
                    {sv.title}
                  </Link>
                ))}
            </div>
          </Reveal>
        </section>

        <Configurator />
      </main>
      <Footer />
    </>
  );
}
