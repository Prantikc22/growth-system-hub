import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ServiceRows } from "@/components/sections/ServiceRows";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Configurator } from "@/components/sections/Configurator";
import { Testimonials } from "@/components/sections/Testimonials";
import { Portfolio } from "@/components/sections/Portfolio";
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
      <TrustBar />
      <ProblemSolution />
      <ServiceRows />
      <CaseStudies />
      <Configurator />
      <Testimonials />
      <Portfolio />
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
