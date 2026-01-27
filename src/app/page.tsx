import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { SolutionsSection } from "../components/solutions-section"
import { CTASection } from "../components/cta-section"
import Expertise from "../components/expertise"
import Testimony from "../components/testimony"


export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection />
      <ServicesSection />
      <Expertise/>
      <SolutionsSection />
      <Testimony/>
      <CTASection />
    </main>
  )
}
