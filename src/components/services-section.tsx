import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS.",
    icon: "/optimized/media/services/website-development.svg",
    color: "#ff1d1d",
    href: "/services/website-development-in-nepal",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile applications using React Native and modern frameworks.",
    icon: "/optimized/media/services/mobile-app.svg",
    color: "#ffca28",
    href: "/services/mobile-app-development",
  },
  {
    title: "System/Software Development",
    description:
      "Custom software solutions tailored to your business needs using Java, Python, and Node.js.",
    icon: "/optimized/media/services/backend.svg",
    color: "#3bfbed",
    href: "/services/system-software-development",
  },
  {
    title: "SEO Services",
    description:
      "Improve your website visibility and ranking on search engines with proven SEO strategies.",
    icon: "/optimized/media/services/seo-services.svg",
    color: "#ff884d",
    href: "/services/seo-in-nepal",
  },
  {
    title: "GSO AI (SEO Services)",
    description:
      "Advanced AI-powered SEO and digital marketing optimization to boost your website visibility and ranking.",
    icon: "/optimized/media/services/seo-services.svg",
    color: "#ff1d1d",
    href: "/services/gso-ai",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Build your brand presence and engage with your audience across social platforms.",
    icon: "/optimized/media/services/marketing.svg",
    color: "#ffca28",
    href: "/services/social-media-marketing",
  },
  {
    title: "Graphic Design",
    description:
      "Professional graphic design services for branding, marketing materials, and digital assets.",
    icon: "/optimized/media/services/marketing.svg",
    color: "#8421f9",
    href: "/services/graphics-design",
  },
  {
    title: "Content Writing",
    description:
      "High-quality, SEO-optimized content that engages your audience and drives results.",
    icon: "/optimized/media/services/seo-services.svg",
    color: "#3bfbed",
    href: "/services/content-writing",
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
              className="group relative bg-black border-2 border-white/10 p-6 hover:border-accent transition-all duration-300"
            >
              {/* Color Accent Bar */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: service.color }}
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
              <h3
                className="text-xl font-bold text-white mb-3 font-big-shoulders group-hover:text-accent transition-colors"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm font-noto-sans mb-6">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
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
