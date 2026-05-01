import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServiceRows } from "@/components/sections/ServiceRows";
import { Configurator } from "@/components/sections/Configurator";
import { Reveal } from "@/components/Reveal";

export default function Services() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36">
        <Reveal variant="up" className="container-wide max-w-2xl mb-4">
          <p className="pill mb-4">Services</p>
          <h1 className="heading-display">Five services. One system.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Pick what you need. Mix what you don't. Pricing scales with scope, not surprise.</p>
        </Reveal>
        <ServiceRows />
        <Configurator />
      </main>
      <Footer />
    </>
  );
}
