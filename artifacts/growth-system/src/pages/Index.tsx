import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProvenResults } from "@/components/sections/ProvenResults";
import { Partners } from "@/components/sections/Partners";
import { ServiceRows } from "@/components/sections/ServiceRows";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Configurator } from "@/components/sections/Configurator";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Team } from "@/components/sections/Team";
import { Stats } from "@/components/sections/Stats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { EventsStrip, FranchiseStrip } from "@/components/sections/Strips";

const Index = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <MarqueeStrip />
      <ProblemSolution />
      <ProvenResults />
      <ServiceRows />
      <Partners />
      <CaseStudies />
      <Configurator />
      <Testimonials />
      <HowItWorks />
      <Team />
      <Stats />
      <FinalCTA />
      <EventsStrip />
      <FranchiseStrip />
    </main>
    <Footer />
  </>
);

export default Index;
