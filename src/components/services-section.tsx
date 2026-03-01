import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS.",
    icon: "/originals/media/services/website-service.svg",
    href: "/services/website-development-in-nepal",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile applications using React Native and modern frameworks.",
    icon: "/originals/media/services/mobile-app-service.svg",
    href: "/services/mobile-app-development",
  },
  {
    title: "System/Software Development",
    description:
      "Custom software solutions tailored to your business needs using Java, Python, and Node.js.",
    icon: "/originals/media/services/backend-service.svg",
    href: "/services/system-software-development",
  },
  {
    title: "SEO Services",
    description:
      "Improve your website visibility and ranking on search engines with proven SEO strategies.",
    icon: "/originals/media/services/seo-service.svg",
    href: "/services/seo-in-nepal",
  },
  {
    title: "GSO AI (SEO Services)",
    description:
      "Advanced AI-powered SEO and digital marketing optimization to boost your website visibility and ranking.",
    icon: "/originals/media/services/seo-main.svg",
    href: "/services/gso-ai",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Build your brand presence and engage with your audience across social platforms.",
    icon: "/originals/media/services/marketing-service.svg",
    href: "/services/social-media-marketing",
  },

]

export function ServicesSection() {
  return (
    <section className="relative py-5 lg:py-10 overflow-hidden bg-black">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header - Raw, Bold */}
        <div className="mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm text-accent font-bold uppercase tracking-widest font-big-shoulders">
              SERVICES
            </span>
          </div>


          <p className="text-white/60 ">
          Crafting websites, apps, and AI-powered solutions with precision, creativity, and impact.

                        </p>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase leading-tight font-big-shoulders">
            WHAT I <span className="text-accent">OFFER</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative bg-black border-2 border-white/10 p-6 hover:border-primary transition-all duration-300"
            >
              {/* Color Accent Bar */}
              <div
                className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
              />

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-white/20 group-hover:border-white/40 transition-colors">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 uppercase font-big-shoulders group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm font-noto-sans mb-6">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-bold uppercase tracking-wide font-big-shoulders">LEARN MORE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/services/website-development-in-nepal"
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-bold uppercase tracking-wide font-big-shoulders text-lg"
          >
            VIEW ALL SERVICES
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
