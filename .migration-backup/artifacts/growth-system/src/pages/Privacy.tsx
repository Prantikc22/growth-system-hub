import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-24 container-wide max-w-3xl">
        <Reveal variant="up">
          <p className="pill mb-4">Legal</p>
          <h1 className="heading-display">Privacy Policy</h1>
          <p className="text-muted-foreground mt-4">Last updated: May 2025</p>
        </Reveal>
        <Reveal variant="up" delay={80} className="mt-12 prose prose-lg max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Information we collect</h2>
            <p>When you contact us, request a quote, or apply for a franchise, we collect your name, email address, phone number, and any information you voluntarily provide in your message. We also collect standard web analytics data (page views, referrers, device type) through anonymised tools.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. How we use your information</h2>
            <p>We use your information to respond to enquiries, send you a confirmation of your submission, and — where you have opted in — send occasional newsletters. We do not sell, rent, or share your data with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Data storage</h2>
            <p>Form submissions are stored in a secure Google Sheet accessible only to the Remarqd team. Emails are sent via Resend. We retain your data for up to 3 years unless you request earlier deletion.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Your rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by emailing <a href="mailto:hello@remarqd.com" className="underline">hello@remarqd.com</a>. We will respond within 7 working days.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Cookies</h2>
            <p>This website uses minimal cookies — only those required for analytics and performance. No advertising cookies are set without your consent.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Contact</h2>
            <p>For any privacy-related queries, write to us at <a href="mailto:hello@remarqd.com" className="underline">hello@remarqd.com</a>.</p>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
