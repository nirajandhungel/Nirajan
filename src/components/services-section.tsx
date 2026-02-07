import Link from "next/link"
import { ArrowRight, Code2, Smartphone, Database, Palette, Search, Megaphone } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "High-performance websites that rank well and convert visitors into clients. Built with modern technologies.",
    icon: Code2,
    color: "#c41e3a",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications designed for seamless user experience.",
    icon: Smartphone,
    color: "#ffd700",
  },
  {
    title: "Backend & APIs",
    description: "Robust server-side solutions, RESTful APIs, and database architecture for scalable applications.",
    icon: Database,
    color: "#c41e3a",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with functionality for maximum engagement.",
    icon: Palette,
    color: "#ffd700",
  },
  {
    title: "SEO Services",
    description: "Data-driven optimization strategies to improve your search rankings and organic traffic.",
    icon: Search,
    color: "#c41e3a",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to amplify your brand presence and reach your target audience.",
    icon: Megaphone,
    color: "#ffd700",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32  overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red circle accent */}
        {/* <div 
          className="absolute -top-40 -left-40 w-[300px] h-[300px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        /> */}
        <div 
          className="absolute bottom-20 right-0 w-[200px] h-[200px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Services</span>
            <span className="w-12 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            What I <span className="text-heading-gold">Offer</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for international clients and remote collaborations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="group card-cinematic p-8 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <Icon 
                    className="w-7 h-7"
                    style={{ color: service.color }}
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/services/website-development-in-nepal"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-bold"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
