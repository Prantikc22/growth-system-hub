import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Franchise() {
  const [busy, setBusy] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 600));
    setBusy(false);
    toast.success("Application received. We'll review and respond within 5 business days.");
    (e.target as HTMLFormElement).reset();
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
                <div><Label htmlFor="fname">Name</Label><Input id="fname" name="name" className="mt-2" required /></div>
                <div><Label htmlFor="city">City</Label><Input id="city" name="city" className="mt-2" required /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="fphone">Phone</Label><Input id="fphone" name="phone" type="tel" className="mt-2" required /></div>
                <div><Label htmlFor="femail">Email</Label><Input id="femail" name="email" type="email" className="mt-2" required /></div>
              </div>
              <div><Label htmlFor="current">Current work</Label><Textarea id="current" name="current_work" rows={3} className="mt-2" placeholder="What you do today." required /></div>
              <div><Label htmlFor="why">Why partner with us?</Label><Textarea id="why" name="why_partner" rows={4} className="mt-2" required /></div>
              <Button type="submit" disabled={busy} className="rounded-full h-12 px-7 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold">{busy ? "Sending…" : "Submit application →"}</Button>
            </form>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
