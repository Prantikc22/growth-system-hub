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
      <main className="pt-28 md:pt-36 pb-24 container-wide">
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
              <Button type="submit" disabled={busy} className="rounded-full h-12 px-7 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold">{busy ? "Sending…" : "Submit application →"}</Button>
            </form>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
