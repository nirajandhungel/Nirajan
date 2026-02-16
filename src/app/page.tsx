import dynamic from 'next/dynamic';
import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";

// Dynamic imports for below-fold components (reduces TBT by ~1s)
const SolutionsSection = dynamic(() => import("../components/solutions-section").then(mod => ({ default: mod.SolutionsSection })));

const Expertise = dynamic(() => import("../components/expertise"));

const ProcessSection = dynamic(() => import("../components/process-section").then(mod => ({ default: mod.ProcessSection })));

const SelectedWorkSection = dynamic(() => import("../components/selected-work-section").then(mod => ({ default: mod.SelectedWorkSection })));

const ContactCTA = dynamic(() => import("../components/contact-cta").then(mod => ({ default: mod.ContactCTA })));

const FAQ = dynamic(() => import("../components/FAQ"));

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <SelectedWorkSection />
      <ProcessSection />
      <Expertise />
      <SolutionsSection />
      <FAQ />
      <ContactCTA />
    </main>
  )
}
