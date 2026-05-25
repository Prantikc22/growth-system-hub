import { Reveal } from "@/components/Reveal";

export function Partners() {
  return (
    <section className="py-14 md:py-20 bg-[#F8F7F5] border-y border-border overflow-hidden">
      <div className="container-wide">
        <Reveal variant="up" className="text-center mb-8">
          <p className="pill mx-auto">Certified across the ecosystem</p>
        </Reveal>

        {/* Badge image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/partner-badges.png"
            alt="Google Partner, Meta Business Partner, Microsoft Advertising, HubSpot, Shopify, Webflow, Salesforce, SEMrush, Braze"
            className="max-w-2xl w-full opacity-80 mix-blend-multiply"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>

      </div>
    </section>
  );
}
