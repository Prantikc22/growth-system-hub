import { useMemo, useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { estimate, formatINR, ESTIMATE_THRESHOLD, type ConfiguratorState, type ServiceKey } from "@/lib/pricing";
import { FlapNumber } from "@/components/FlapNumber";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { sendConfirmationEmail, quoteConfirmationHtml } from "@/lib/sendEmail";
import { appendToSheet } from "@/lib/sheets";

const SERVICES: { key: ServiceKey; label: string; tone: string }[] = [
  { key: "performance", label: "Performance Marketing", tone: "bg-[#2563EB]" },
  { key: "social",      label: "Social Media",          tone: "bg-[#A8336E]" },
  { key: "content",     label: "Content Creation",      tone: "bg-[#0F766E]" },
  { key: "web",         label: "Web & Tech",            tone: "bg-[#7C3AED]" },
  { key: "personal",    label: "Personal Branding",     tone: "bg-[#DC2626]" },
];

export function Configurator() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<ConfiguratorState>({ services: [] });
  const [compare, setCompare] = useState(false);
  const [contact, setContact] = useState({ email: "", phone: "" });
  const est = useMemo(() => estimate(state), [state]);

  // ── helpers ─────────────────────────────────────────────
  const toggleService = (k: ServiceKey) => {
    setState((s) => {
      const has = s.services.includes(k);
      const services = has ? s.services.filter((x) => x !== k) : [...s.services, k];
      const next: ConfiguratorState = { ...s, services };
      // initialise sub-state on first add
      if (!has) {
        if (k === "performance" && !s.performance) next.performance = { platforms: [], seo: "none" };
        if (k === "social" && !s.social) next.social = { platforms: 1, reels: false };
        if (k === "content" && !s.content) next.content = { items: [] };
        if (k === "web" && !s.web) next.web = { items: [] };
        if (k === "personal" && !s.personal) next.personal = {};
      }
      return next;
    });
  };

  const [submitting, setSubmitting] = useState(false);
  const aboveThreshold = est.total > ESTIMATE_THRESHOLD || (est.monthly > ESTIMATE_THRESHOLD && true);
  const useCalendly = est.monthly > ESTIMATE_THRESHOLD || est.onetime > ESTIMATE_THRESHOLD;

  const handleGetQuote = async () => {
    if (!contact.email) { toast.error("Please enter your email first."); setStep(3); return; }
    setSubmitting(true);
    const servicesLabel = state.services.join(", ");
    const monthly = formatINR(est.monthly);
    const onetime = est.onetime > 0 ? ` + ${formatINR(est.onetime)} one-time` : "";
    try {
      await Promise.all([
        sendConfirmationEmail({
          toEmail: contact.email,
          toName: contact.email.split("@")[0],
          subject: "Your Remarqd quote is with us",
          bodyHtml: quoteConfirmationHtml(contact.email.split("@")[0], servicesLabel || "Custom package"),
        }),
        appendToSheet({
          Timestamp: new Date().toISOString(),
          Type: "Quote",
          Name: "",
          Email: contact.email,
          Phone: contact.phone,
          City: "",
          Services: servicesLabel,
          "Monthly Estimate": monthly,
          "One-time": onetime,
          Message: "",
          "Current Work": "",
          "Why Partner": "",
        }),
      ]);
      toast.success("Quote submitted! Check your inbox for confirmation.");
    } catch (err) {
      console.error(err);
      toast.success("Quote submitted! We'll be in touch shortly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="configurator" className="py-24 md:py-32 container-wide">
      <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-14">
        <p className="pill mx-auto mb-4">Build your plan</p>
        <h2 className="heading-section">Estimate in 60 seconds.</h2>
        <p className="mt-4 text-lg text-muted-foreground">Pick what you need. We'll show you transparent pricing instantly. No sales call required to see the number.</p>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* ── LEFT: Steps ────────────────────────────────── */}
        <div className="lg:col-span-7 has-system-cursor">
          <div className="card-glass p-6 md:p-10">
            <Steps current={step} setStep={setStep} />

            {step === 1 && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">What do you need?</h3>
                <div className="flex flex-wrap gap-3">
                  {SERVICES.map((s) => {
                    const active = state.services.includes(s.key);
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => toggleService(s.key)}
                        className={cn(
                          "rounded-full px-5 py-3 text-sm md:text-base font-semibold border transition-all",
                          active
                            ? "bg-ink text-ink-foreground border-ink shadow-card"
                            : "bg-background border-border text-foreground hover:border-foreground"
                        )}
                      >
                        <span className="inline-flex items-center gap-2">
                          {active && <Check className="w-4 h-4" />}
                          {s.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setStep(2)} disabled={state.services.length === 0} className="rounded-full h-12 px-7 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold">
                    Next →
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-10">
                {state.services.includes("performance") && (
                  <Block title="Performance Marketing">
                    <Field label="Platforms">
                      <div className="flex flex-wrap gap-2">
                        {(["meta","google","youtube"] as const).map((p) => (
                          <PillToggle
                            key={p}
                            active={state.performance?.platforms.includes(p) ?? false}
                            onClick={() =>
                              setState((s) => {
                                const arr = s.performance?.platforms ?? [];
                                const has = arr.includes(p);
                                return { ...s, performance: { ...s.performance!, platforms: has ? arr.filter(x => x !== p) : [...arr, p] } };
                              })
                            }
                          >{p === "meta" ? "Meta" : p === "google" ? "Google" : "YouTube"}</PillToggle>
                        ))}
                      </div>
                    </Field>
                    <Field label="Monthly ad budget">
                      <RadioGroup
                        value={state.performance?.budget ?? ""}
                        onValueChange={(v) => setState((s) => ({ ...s, performance: { ...s.performance!, budget: v as any } }))}
                        className="grid sm:grid-cols-3 gap-3"
                      >
                        {[
                          { v: "under50k", l: "Under ₹50K" },
                          { v: "50to2L", l: "₹50K–2L" },
                          { v: "2Lplus", l: "₹2L+" },
                        ].map((o) => (
                          <Label key={o.v} className={cn("rounded-xl border p-4 cursor-pointer transition-all", state.performance?.budget === o.v ? "border-foreground bg-secondary" : "border-border hover:border-foreground/40")}>
                            <RadioGroupItem value={o.v} className="sr-only" />
                            <div className="font-semibold">{o.l}</div>
                          </Label>
                        ))}
                      </RadioGroup>
                    </Field>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Field label="SEO">
                        <RadioGroup
                          value={state.performance?.seo ?? "none"}
                          onValueChange={(v) => setState((s) => ({ ...s, performance: { ...s.performance!, seo: v as any } }))}
                          className="flex gap-2"
                        >
                          {[{v:"none",l:"None"},{v:"basic",l:"Basic"},{v:"full",l:"Full"}].map(o => (
                            <Label key={o.v} className={cn("rounded-full border px-4 py-2 cursor-pointer text-sm font-semibold", state.performance?.seo === o.v ? "border-foreground bg-secondary" : "border-border")}>
                              <RadioGroupItem value={o.v} className="sr-only" />{o.l}
                            </Label>
                          ))}
                        </RadioGroup>
                      </Field>
                      <Field label="WhatsApp campaigns">
                        <Switch checked={!!state.performance?.whatsapp} onCheckedChange={(v) => setState((s) => ({ ...s, performance: { ...s.performance!, whatsapp: v } }))} />
                      </Field>
                    </div>
                  </Block>
                )}

                {state.services.includes("social") && (
                  <Block title="Social Media">
                    <Field label="Platforms">
                      <RadioGroup
                        value={String(state.social?.platforms ?? 1)}
                        onValueChange={(v) => setState((s) => ({ ...s, social: { ...s.social!, platforms: Number(v) as any } }))}
                        className="grid sm:grid-cols-3 gap-3"
                      >
                        {[1,2,3].map((n) => (
                          <Label key={n} className={cn("rounded-xl border p-4 cursor-pointer", state.social?.platforms === n ? "border-foreground bg-secondary" : "border-border")}>
                            <RadioGroupItem value={String(n)} className="sr-only" />
                            <div className="font-semibold">{n} platform{n>1?"s":""}</div>
                          </Label>
                        ))}
                      </RadioGroup>
                    </Field>
                    <Field label="Need reels?">
                      <Switch checked={!!state.social?.reels} onCheckedChange={(v) => setState((s) => ({ ...s, social: { ...s.social!, reels: v } }))} />
                    </Field>
                  </Block>
                )}

                {state.services.includes("content") && (
                  <Block title="Content Creation">
                    <Field label="What do you need?">
                      <CheckGrid
                        options={[
                          { v: "creatives", l: "Social creatives" },
                          { v: "reels", l: "Reels & videos" },
                          { v: "blogs", l: "Blogs" },
                          { v: "copy", l: "Ad copywriting" },
                          { v: "identity", l: "Brand identity (one-time)" },
                          { v: "shoot", l: "Photo shoot (one-time)" },
                        ]}
                        values={state.content?.items ?? []}
                        onChange={(items) => setState((s) => ({ ...s, content: { items: items as any } }))}
                      />
                    </Field>
                  </Block>
                )}

                {state.services.includes("web") && (
                  <Block title="Web & Tech">
                    <Field label="What to build?">
                      <CheckGrid
                        options={[
                          { v: "website", l: "Website" },
                          { v: "ecom", l: "Ecommerce store" },
                          { v: "landing", l: "Landing page" },
                          { v: "app", l: "Mobile app" },
                          { v: "chatbot", l: "AI chatbot" },
                          { v: "whatsapp", l: "WhatsApp automation" },
                          { v: "booking", l: "Booking system" },
                        ]}
                        values={state.web?.items ?? []}
                        onChange={(items) => setState((s) => ({ ...s, web: { items: items as any } }))}
                      />
                    </Field>
                  </Block>
                )}

                {state.services.includes("personal") && (
                  <Block title="Personal Branding">
                    <Field label="Who is this for?">
                      <RadioGroup
                        value={state.personal?.audience ?? ""}
                        onValueChange={(v) => setState((s) => ({ ...s, personal: { audience: v as any } }))}
                        className="grid sm:grid-cols-3 gap-3"
                      >
                        {[
                          { v: "founder", l: "Founder / CEO" },
                          { v: "creator", l: "Content creator" },
                          { v: "both", l: "Both" },
                        ].map((o) => (
                          <Label key={o.v} className={cn("rounded-xl border p-4 cursor-pointer", state.personal?.audience === o.v ? "border-foreground bg-secondary" : "border-border")}>
                            <RadioGroupItem value={o.v} className="sr-only" />
                            <div className="font-semibold">{o.l}</div>
                          </Label>
                        ))}
                      </RadioGroup>
                    </Field>
                  </Block>
                )}

                <div className="flex justify-between">
                  <Button onClick={() => setStep(1)} variant="outline" className="rounded-full h-12 px-6">← Back</Button>
                  <Button onClick={() => setStep(3)} className="rounded-full h-12 px-7 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold">
                    See estimate →
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">Almost there</h3>
                <p className="text-muted-foreground">Drop your contact so we can save your plan and reach out if you'd like.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cf-email" className="mb-2 block text-sm">Email</Label>
                    <Input id="cf-email" type="email" placeholder="you@brand.com" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="cf-phone" className="mb-2 block text-sm">WhatsApp / Phone</Label>
                    <Input id="cf-phone" type="tel" placeholder="+91 99999 99999" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <Button onClick={() => setStep(2)} variant="outline" className="rounded-full h-12 px-6">← Back</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Estimate panel ───────────────────────── */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl bg-ink text-ink-foreground p-6 md:p-8 shadow-ink">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs uppercase tracking-widest text-ink-foreground/60">Your estimate</p>
                <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-1 rounded-full">Live</span>
              </div>
              <div className="mt-3 text-4xl md:text-5xl font-extrabold tabular-nums tracking-tight">
                ₹<FlapNumber value={est.monthly} />
                <span className="text-base font-medium text-ink-foreground/60"> /mo</span>
              </div>
              {est.onetime > 0 && (
                <div className="mt-2 text-ink-foreground/70 text-sm">
                  + <span className="font-semibold text-ink-foreground"><FlapNumber value={est.onetime} /></span> one-time
                </div>
              )}

              {compare && est.monthly > 0 && (
                <div className="mt-4 flex items-center gap-3 animate-pulse-glow rounded-full bg-accent/15 border border-accent/30 px-3 py-2">
                  <span className="text-sm text-ink-foreground/60 line-through">{formatINR(est.monthly * est.agencyMultiplier)}/mo</span>
                  <span className="text-xs font-semibold text-accent">Save {Math.round((1 - 1/est.agencyMultiplier) * 100)}% vs typical agency</span>
                </div>
              )}

              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-ink-foreground/60">Compare to agency pricing</span>
                <Switch checked={compare} onCheckedChange={setCompare} />
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 max-h-64 overflow-y-auto">
                {est.items.length === 0 ? (
                  <p className="text-sm text-ink-foreground/50">Pick services to see the breakdown.</p>
                ) : (
                  <ul className="space-y-2 text-sm">
                    {est.items.map((it, i) => (
                      <li key={i} className="flex items-baseline justify-between gap-3">
                        <span className="text-ink-foreground/80">{it.label}</span>
                        <span className="tabular-nums font-semibold">
                          {formatINR(it.amount)}{it.kind === "monthly" ? <span className="text-ink-foreground/50 font-normal">/mo</span> : <span className="text-ink-foreground/50 font-normal"> once</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <p className="mt-6 text-xs text-ink-foreground/50">Estimates shown. Final scope confirmed on call.</p>

              <div className="mt-6">
                {useCalendly ? (
                  <Button
                    onClick={() => {
                      const url = (import.meta as any).env?.VITE_CALENDLY_URL || "https://calendly.com/your-handle/intro";
                      window.open(url, "_blank");
                      toast.success("Opening Calendly…");
                    }}
                    className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 font-semibold"
                  >
                    Book a free call →
                  </Button>
                ) : (
                  <Button
                    onClick={handleGetQuote}
                    className="w-full rounded-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                    disabled={est.total === 0 || submitting}
                  >
                    {submitting ? "Submitting…" : "Get Final Quote →"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Steps({ current, setStep }: { current: number; setStep: (n: number) => void }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => setStep(n)}
          className={cn(
            "flex items-center gap-2 text-sm font-semibold transition-colors",
            n === current ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className={cn(
            "w-7 h-7 rounded-full grid place-items-center text-xs font-bold transition-colors",
            n <= current ? "bg-ink text-ink-foreground" : "bg-secondary text-muted-foreground"
          )}>{n}</span>
          {n === 1 ? "Services" : n === 2 ? "Details" : "Estimate"}
          {n < 3 && <span className="w-8 h-px bg-border ml-1" />}
        </button>
      ))}
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-5 md:p-6 bg-background">
      <h4 className="font-bold text-base md:text-lg mb-4">{title}</h4>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</p>
      {children}
    </div>
  );
}

function PillToggle({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold border transition-all",
        active ? "bg-ink text-ink-foreground border-ink" : "bg-background border-border hover:border-foreground"
      )}
    >{children}</button>
  );
}

function CheckGrid({ options, values, onChange }: { options: { v: string; l: string }[]; values: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {options.map((o) => {
        const active = values.includes(o.v);
        return (
          <Label key={o.v} className={cn("flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition-all", active ? "border-foreground bg-secondary" : "border-border hover:border-foreground/40")}>
            <Checkbox checked={active} onCheckedChange={(c) => onChange(c ? [...values, o.v] : values.filter((x) => x !== o.v))} />
            <span className="font-medium text-sm">{o.l}</span>
          </Label>
        );
      })}
    </div>
  );
}
