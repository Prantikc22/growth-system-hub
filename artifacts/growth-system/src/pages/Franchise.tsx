import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { sendConfirmationEmail } from "@/lib/sendEmail";
import { appendToSheet } from "@/lib/sheets";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  city: z.string().trim().min(1, "Required").max(100),
  phone: z.string().trim().min(6, "Invalid phone").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  current_work: z.string().trim().min(1, "Required").max(1000),
  why_partner: z.string().trim().min(1, "Required").max(1000),
});

function franchiseConfirmationHtml(name: string) {
  return `
    <div style="font-family:sans-serif;max-width:520px;margin:auto;color:#111">
      <p style="font-size:20px;font-weight:700">Hi ${name},</p>
      <p>Thanks for applying to partner with Remarqd. We've received your application and will review it carefully.</p>
      <p>We respond to all franchise applications within <strong>5 business days</strong>. If your background and territory are a fit, we'll set up a call to walk you through the programme.</p>
      <p style="margin-top:32px;color:#666;font-size:13px">— The Remarqd team<br/><a href="mailto:hello@remarqd.com">hello@remarqd.com</a></p>
    </div>`;
}

const COMMISSION_TIERS = [
  {
    type: "Recurring retainer",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    color: "#2563EB",
    commission: "10%",
    period: "every month, for life",
    note: "For every client on a monthly retainer (performance, social, content, personal branding, automation) you refer — you earn 10% of their monthly fee as long as they stay active.",
    example: "Refer a ₹30,000/mo client → earn ₹3,000 every month, recurring.",
    badge: "Recurring",
  },
  {
    type: "One-time project",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    color: "#7C3AED",
    commission: "7%",
    period: "paid once on project close",
    note: "For one-time projects (websites, apps, ecommerce stores, brand identity) — you earn 7% of the total project value, paid within 15 days of project sign-off.",
    example: "Refer a ₹1,20,000 app build → earn ₹8,400 in one shot.",
    badge: "One-time",
  },
  {
    type: "Hybrid client",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "#0F766E",
    commission: "7% + 10%",
    period: "one-time setup + monthly forever",
    note: "Clients who take both a build project and a retainer earn you both commissions — the one-time project fee upfront and the monthly recurring commission for life.",
    example: "₹45,000 ecom store + ₹20,000/mo retainer → ₹3,150 upfront + ₹2,000/mo recurring.",
    badge: "Best value",
  },
];

export default function Franchise() {
  const [busy, setBusy] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setBusy(true);
    try {
      await Promise.all([
        sendConfirmationEmail({
          toEmail: parsed.data.email,
          toName: parsed.data.name,
          subject: "Application received — Remarqd Franchise",
          bodyHtml: franchiseConfirmationHtml(parsed.data.name),
        }),
        appendToSheet({
          Timestamp: new Date().toISOString(),
          Type: "Franchise",
          Name: parsed.data.name,
          Email: parsed.data.email,
          Phone: parsed.data.phone,
          City: parsed.data.city,
          Services: "",
          "Monthly Estimate": "",
          "One-time": "",
          Message: "",
          "Current Work": parsed.data.current_work,
          "Why Partner": parsed.data.why_partner,
        }),
      ]);
      toast.success("Application received. We'll review and respond within 5 business days.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast.success("Application received. We'll review and respond within 5 business days.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-24">

        {/* Hero section */}
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal variant="up" className="lg:col-span-5">
              <p className="pill mb-4">Franchise · Partner</p>
              <h1 className="heading-display">Run a Remarqd chapter in your city.</h1>
              <p className="mt-5 text-lg text-muted-foreground">For senior operators with a network and a track record. We bring the brand, the system, and the playbook.</p>
              <ul className="mt-8 space-y-3 text-foreground/80">
                {["Exclusive territory", "Full operating playbook", "Brand & marketing engine", "Quarterly partner summits"].map((b) => (
                  <li key={b} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{b}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="right" delay={120} className="lg:col-span-7">
              <form onSubmit={onSubmit} className="card-glass p-6 md:p-10 space-y-5 has-system-cursor">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="fname">Name</Label><Input id="fname" name="name" className="mt-2" placeholder="Your full name" required /></div>
                  <div><Label htmlFor="city">City</Label><Input id="city" name="city" className="mt-2" placeholder="Mumbai" required /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="fphone">Phone</Label><Input id="fphone" name="phone" type="tel" className="mt-2" placeholder="+91 90735 59000" required /></div>
                  <div><Label htmlFor="femail">Email</Label><Input id="femail" name="email" type="email" className="mt-2" placeholder="you@brand.com" required /></div>
                </div>
                <div><Label htmlFor="current">Current work</Label><Textarea id="current" name="current_work" rows={3} className="mt-2" placeholder="What you do today — role, industry, network size." required /></div>
                <div><Label htmlFor="why">Why partner with us?</Label><Textarea id="why" name="why_partner" rows={4} className="mt-2" placeholder="What excites you about the Remarqd model and what you bring to the table." required /></div>
                <button
                  type="submit"
                  disabled={busy}
                  className="rounded-full h-12 px-7 font-bold text-sm text-white transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)", boxShadow: "0 8px 30px rgba(37,99,235,0.35)" }}
                >
                  {busy ? "Sending…" : "Submit application →"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>

        {/* Commission structure */}
        <div className="mt-24 md:mt-32" style={{ background: "linear-gradient(180deg, #080B12 0%, #0a0f1e 100%)" }}>
          <div className="container-wide py-20 md:py-28">
            <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-14">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs mb-5 text-white/50 uppercase tracking-widest" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}>
                What you earn
              </p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white leading-[1.05]">
                Refer once.<br />
                <em className="italic" style={{
                  background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 60%, #f9a8d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Earn for life.
                </em>
              </h2>
              <p className="mt-5 text-white/55 text-base font-sans leading-relaxed">
                No complicated tiers. No caps. Your commission structure is simple: recurring for recurring work, one-time for one-time projects — always transparent.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 mb-14">
              {COMMISSION_TIERS.map((tier) => (
                <Reveal key={tier.type} variant="up">
                  <div className="rounded-2xl border border-white/10 bg-white/4 p-7 h-full flex flex-col gap-5 hover:border-white/20 transition-colors duration-300"
                    style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="flex items-start justify-between">
                      <span
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                        style={{ background: `linear-gradient(135deg, ${tier.color}cc 0%, ${tier.color}66 100%)` }}
                      >
                        {tier.icon}
                      </span>
                      <span
                        className="text-[10px] uppercase tracking-widest font-bold rounded-full px-3 py-1"
                        style={{ background: `${tier.color}20`, color: tier.color, fontFamily: "'Syne',sans-serif" }}
                      >
                        {tier.badge}
                      </span>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>{tier.type}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-4xl font-normal text-white">{tier.commission}</span>
                        <span className="text-sm text-white/50 font-sans">{tier.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-white/55 font-sans leading-relaxed flex-1">{tier.note}</p>

                    <div
                      className="rounded-xl p-4 text-sm font-sans"
                      style={{ background: `${tier.color}12`, border: `1px solid ${tier.color}25` }}
                    >
                      <span className="text-[10px] uppercase tracking-widest font-bold block mb-1" style={{ color: tier.color, fontFamily: "'Syne',sans-serif" }}>Example</span>
                      <span className="text-white/70">{tier.example}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Summary bar */}
            <Reveal variant="up">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex-1">
                  <p className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>No cap on earnings.</p>
                  <p className="text-white/50 text-sm font-sans leading-relaxed">
                    Commissions are paid monthly via bank transfer. Recurring commissions continue as long as your referred client stays active — no expiry, no cap. One-time project commissions are settled within 15 days of project sign-off.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:hello@remarqd.com?subject=Franchise%20commission%20query"
                    className="rounded-full px-6 py-3 text-sm font-bold text-white/70 border border-white/15 hover:border-white/35 hover:text-white transition-all inline-flex items-center justify-center"
                  >
                    Ask a question →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
