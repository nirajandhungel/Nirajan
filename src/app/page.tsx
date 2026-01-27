import Header from "../components/navbar/header"
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { SolutionsSection } from "../components/solutions-section"
import TechnologiesSection from "../components/technologies-section"
import { CTASection } from "../components/cta-section"
import Footer  from "../components/footer"
import { WhatsAppButton } from "../components/whatsapp-button"
// import  Navbar  from "../components/navbar"
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
      {/* <TechnologiesSection/> */}
      {/* <ServicesSection /> */}
      <CTASection />
      {/* <Footer /> */}
      {/* <WhatsAppButton /> */}
    </main>
  )
}
