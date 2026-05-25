import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ServiceRows } from "@/components/sections/ServiceRows";
import { ProvenResults } from "@/components/sections/ProvenResults";
import { Partners } from "@/components/sections/Partners";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Configurator } from "@/components/sections/Configurator";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FranchiseStrip } from "@/components/sections/Strips";

const Index = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Stats />
      <ProblemSolution />
      <ServiceRows />
      <ProvenResults />
      <Partners />
      <CaseStudies />
      <Configurator />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
      <FranchiseStrip />
    </main>
    <Footer />
  </>
);

export default Index;
