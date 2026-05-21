import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Terms() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-24 container-wide max-w-3xl">
        <Reveal variant="up">
          <p className="pill mb-4">Legal</p>
          <h1 className="heading-display">Terms of Service</h1>
          <p className="text-muted-foreground mt-4">Last updated: May 2025</p>
        </Reveal>
        <Reveal variant="up" delay={80} className="mt-12 prose prose-lg max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Services</h2>
            <p>Remarqd provides brand marketing, performance advertising, content production, technology development, and talent management services. The specific scope, deliverables, timelines, and fees for each engagement are defined in a separate Statement of Work (SOW) or service agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Payment</h2>
            <p>Retainer fees are invoiced monthly in advance. Project fees follow the milestone schedule agreed in the SOW. Late payments (beyond 7 days of due date) attract a 2% per month finance charge. Ad spend is billed separately and passed through at cost.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Intellectual property</h2>
            <p>Upon full payment, all original creative assets produced by Remarqd for your brand are assigned to you. Remarqd retains the right to display the work in its portfolio unless you request otherwise in writing.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Termination</h2>
            <p>Either party may terminate a retainer engagement with 30 days written notice. Project engagements may be terminated for cause with 7 days notice. Fees for work already completed are non-refundable.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Confidentiality</h2>
            <p>Both parties agree to keep confidential all non-public information shared during the engagement. This obligation survives termination for 2 years.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Limitation of liability</h2>
            <p>Remarqd's total liability for any claim arising from services shall not exceed the fees paid in the 3 months preceding the claim. We are not liable for indirect, consequential, or loss-of-profit damages.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Governing law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kolkata, West Bengal.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
            <p>Questions about these terms? Write to <a href="mailto:hello@remarqd.com" className="underline">hello@remarqd.com</a>.</p>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
