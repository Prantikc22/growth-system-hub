import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    n: "01",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Every rupee tracked. Every creative tested. Always on.",
    pitch: "Meta, Google & YouTube with a daily optimisation cadence — not a monthly report. Creative testing is built in from day one.",
    color: "#2563EB",
    bullets: [
      { icon: "◈", label: "Meta Ads", sub: "Funnel architecture, creative testing, ROAS-first" },
      { icon: "◈", label: "Google Ads", sub: "Search, Shopping, Display & YouTube" },
      { icon: "◈", label: "SEO & AI Search", sub: "Organic rankings + LLM/AI Overview visibility" },
      { icon: "◈", label: "WhatsApp Campaigns", sub: "Broadcast flows + retargeting sequences" },
      { icon: "◈", label: "Weekly outcomes review", sub: "No monthly PDFs — real-time accountability" },
      { icon: "◈", label: "Attribution & P&L breakdown", sub: "Know exactly what drives revenue" },
    ],
  },
  {
    n: "02",
    slug: "social-media",
    title: "Social Media Management",
    tagline: "Your voice, consistently — built for the algorithm.",
    pitch: "Brand-led posting, reels and community built around your voice, not a template. We run it like a media company.",
    color: "#A8336E",
    bullets: [
      { icon: "◈", label: "Channel-specific content calendar", sub: "Instagram, LinkedIn, YouTube" },
      { icon: "◈", label: "Reels production engine", sub: "Scripted, shot, edited — in-house" },
      { icon: "◈", label: "Community management", sub: "DMs, comments, and brand voice" },
      { icon: "◈", label: "Influencer outreach", sub: "Collaboration briefs and negotiation" },
      { icon: "◈", label: "Monthly brand reporting", sub: "Audience insights and benchmark tracking" },
    ],
  },
  {
    n: "03",
    slug: "content-creation",
    title: "Content Creation",
    tagline: "Studio-grade content built in-house. Not briefed out.",
    pitch: "From brand identity to long-form video — everything produced without a third-party agency in the loop.",
    color: "#0F766E",
    bullets: [
      { icon: "◈", label: "Social creatives (static + animated)", sub: "Feed posts, stories, ads" },
      { icon: "◈", label: "Reels & short-form video", sub: "Full production — script to export" },
      { icon: "◈", label: "Blog & SEO content", sub: "Long-form that ranks and converts" },
      { icon: "◈", label: "Ad copywriting", sub: "For Google, Meta, email, and WhatsApp" },
      { icon: "◈", label: "Brand identity & guidelines", sub: "Logo, palette, typography, voice" },
    ],
  },
  {
    n: "04",
    slug: "web-tech",
    title: "Web · App · Ecom · Chatbots",
    tagline: "Fast, measurable digital products — owned by you.",
    pitch: "Websites, Shopify stores, apps, AI chatbots and WhatsApp flows. Scoped, built, and handed over.",
    color: "#7C3AED",
    highlight: true,
    bullets: [
      { icon: "◈", label: "High-converting websites", sub: "React, Next.js, Webflow — performance-first" },
      { icon: "◈", label: "Shopify & ecommerce", sub: "Custom builds, apps, headless" },
      { icon: "◈", label: "iOS & Android apps", sub: "Native and cross-platform development" },
      { icon: "◈", label: "AI Chatbots", sub: "WhatsApp, website, Instagram DM — GPT-powered" },
      { icon: "◈", label: "WhatsApp Automation", sub: "Flows, broadcasts, lead routing, booking" },
      { icon: "◈", label: "CRM & API integrations", sub: "Zoho, HubSpot, Shopify, custom" },
      { icon: "◈", label: "Analytics setup", sub: "GA4, Mixpanel, Hotjar — proper tracking" },
    ],
  },
  {
    n: "05",
    slug: "personal-branding",
    title: "Personal Branding & Talent",
    tagline: "Make the founder the brand. Build influence like a media company.",
    pitch: "For founders and creators who want a lasting personal brand. We handle positioning, content, PR and brand deals.",
    color: "#DC2626",
    bullets: [
      { icon: "◈", label: "Founder positioning & narrative", sub: "What you stand for and how you say it" },
      { icon: "◈", label: "Weekly content production", sub: "LinkedIn, Instagram, YouTube — all channels" },
      { icon: "◈", label: "PR & media placements", sub: "Podcasts, press, speaking slots" },
      { icon: "◈", label: "Brand deals & negotiations", sub: "Outreach, terms, and contract review" },
      { icon: "◈", label: "Talent management", sub: "For eligible creators and executives" },
    ],
  },
];

export function ServiceRows() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container-wide">
        <Reveal variant="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
            <div>
              <p className="pill mb-5">Five services. One system.</p>
              <h2 className="heading-section max-w-xl">
                Everything your brand needs.<br />
                <em className="italic">Nothing it doesn't.</em>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-base font-sans leading-relaxed">
              Pick what you need. Mix what you don't. Pricing scales with scope, not surprise.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-border">
          {SERVICES.map((s, i) => {
            const isOpen = active === i;
            return (
              <div key={s.n} className={cn("service-row relative", isOpen && "is-open")}>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] accent-bar" />

                {/* Header row — clickable */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left grid md:grid-cols-12 gap-4 py-7 md:py-8 px-4 md:px-6 items-center"
                >
                  <div className="md:col-span-1 hidden md:block">
                    <span className="text-sm font-mono text-muted-foreground">{s.n}</span>
                  </div>
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      {s.highlight && (
                        <span className="hidden md:inline-flex text-[10px] font-ui uppercase tracking-widest px-2 py-0.5 rounded-full text-white" style={{ background: s.color, fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>
                          Popular
                        </span>
                      )}
                      <h3 className="font-serif text-xl md:text-2xl font-normal leading-snug">{s.title}</h3>
                    </div>
                  </div>
                  <div className="md:col-span-5 text-muted-foreground text-sm md:text-base font-sans hidden md:block">{s.tagline}</div>
                  <div className="md:col-span-2 flex justify-end items-center gap-3 md:gap-4">
                    <Link
                      to={`/services/${s.slug}`}
                      className="hidden md:block text-xs font-ui uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                      style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Details
                    </Link>
                    <span
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 shrink-0"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)", borderColor: isOpen ? s.color : undefined, color: isOpen ? s.color : undefined }}
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Expanded panel */}
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-10 md:pb-12 md:pl-[calc(8.33%+1.5rem)]">
                      <p className="text-muted-foreground text-base mb-6 font-sans max-w-2xl">{s.pitch}</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {s.bullets.map((b) => (
                          <div key={b.label} className="rounded-xl border border-border bg-background p-4 hover:border-foreground/20 transition-colors">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs" style={{ color: s.color }}>●</span>
                              <span className="font-ui text-sm font-semibold" style={{ fontFamily: "'Syne',sans-serif" }}>{b.label}</span>
                            </div>
                            <p className="text-xs text-muted-foreground font-sans pl-4">{b.sub}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-3">
                        <Link
                          to={`/services/${s.slug}`}
                          className="btn-gradient rounded-full px-6 py-2.5 text-xs inline-flex items-center gap-1.5"
                        >
                          Explore {s.title} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
