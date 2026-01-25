import Header from "../components/navbar/header"
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { SolutionsSection } from "../components/solutions-section"
import TechnologiesSection from "../components/technologies-section"
import { CTASection } from "../components/cta-section"
import Footer  from "../components/footer"
// import  Navbar  from "../components/navbar"
import Expertise from "../components/expertise"
import Testimony from "../components/testimony"
import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Nirajan Dhungel | Web Developer & Full Stack Developer in Nepal',
  description: 'Nirajan Dhungel is a professional Web Developer and Full Stack Developer offering expert website development services in Kathmandu, Nepal. Specializing in React, Next.js, Node.js, and TypeScript. Get custom web solutions for your business.',
  keywords: [
    'Nirajan Dhungel',
    'Web Developer Nirajan Dhungel',
    'Full Stack Developer Nirajan Dhungel',
    'Website Development Services',
    'Website Development Nepal',
    'Web Developer Kathmandu',
    'Professional Web Developer',
    'Custom Website Development',
  ],
  openGraph: {
    title: 'Nirajan Dhungel | Professional Web Developer & Website Development Services',
    description: 'Expert Web Developer offering professional website development services in Nepal. Transform your business with modern web solutions.',
    url: 'https://nirajandhungel.com.np',
    images: [
      {
        url: 'https://nirajandhungel.com.np/nirajandhungel3.png',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel - Professional Web Developer Portfolio',
      },
    ],
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' }
]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
    </>
  )
}
