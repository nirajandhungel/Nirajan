import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { SolutionsSection } from "../components/solutions-section"
import Expertise from "../components/expertise"
import { ProcessSection } from "../components/process-section"
import { SelectedWorkSection } from "../components/selected-work-section"
import { ContactCTA } from "../components/contact-cta"
import FAQ from "../components/FAQ"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
