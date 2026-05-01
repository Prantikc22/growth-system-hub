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
import { sendConfirmationEmail, contactConfirmationHtml } from "@/lib/sendEmail";
import { appendToSheet } from "@/lib/sheets";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  city: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Invalid phone").max(20),
  message: z.string().trim().min(1, "Required").max(1000),
});

export default function Contact() {
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
          subject: "We got your message — Remarqd",
          bodyHtml: contactConfirmationHtml(parsed.data.name),
        }),
        appendToSheet({
          Timestamp: new Date().toISOString(),
          Type: "Contact",
          Name: parsed.data.name,
          Email: parsed.data.email,
          Phone: parsed.data.phone,
          City: parsed.data.city ?? "",
          Services: "",
          "Monthly Estimate": "",
          "One-time": "",
          Message: parsed.data.message,
          "Current Work": "",
          "Why Partner": "",
        }),
      ]);
      toast.success("Got it. We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast.success("Got it. We'll be in touch within 24 hours.");
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
            <p className="pill mb-4">Contact</p>
            <h1 className="heading-display">Let's talk.</h1>
            <p className="mt-5 text-lg text-muted-foreground">Tell us what you're building. We respond within a working day.</p>
            <div className="mt-10 space-y-4 text-sm">
              <a href="https://wa.me/919073559000" data-cursor="Chat" className="block rounded-2xl border border-border p-5 hover:border-foreground transition-colors">
                <div className="text-xs text-muted-foreground uppercase tracking-widest">WhatsApp</div>
                <div className="text-lg font-bold mt-1">+91 90735 59000</div>
              </a>
              <a href="tel:+919073559000" className="block rounded-2xl border border-border p-5 hover:border-foreground transition-colors">
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Phone</div>
                <div className="text-lg font-bold mt-1">+91 90735 59000</div>
              </a>
              <a href="mailto:hello@remarqd.com" className="block rounded-2xl border border-border p-5 hover:border-foreground transition-colors">
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Email</div>
                <div className="text-lg font-bold mt-1">hello@remarqd.com</div>
              </a>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="card-glass p-6 md:p-10 space-y-5 has-system-cursor">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="name">Name</Label><Input id="name" name="name" className="mt-2" placeholder="Anaya R." /></div>
                <div><Label htmlFor="city">City</Label><Input id="city" name="city" className="mt-2" placeholder="Mumbai" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" className="mt-2" placeholder="you@brand.com" /></div>
                <div><Label htmlFor="phone">WhatsApp / Phone</Label><Input id="phone" name="phone" type="tel" className="mt-2" placeholder="+91 99999 99999" /></div>
              </div>
              <div><Label htmlFor="message">What are you building?</Label><Textarea id="message" name="message" rows={5} className="mt-2" placeholder="A few lines about your brand and what you need." /></div>
              <Button type="submit" disabled={busy} className="rounded-full h-12 px-7 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold">{busy ? "Sending…" : "Send message →"}</Button>
            </form>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
