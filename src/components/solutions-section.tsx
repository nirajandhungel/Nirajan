
import { CheckCircle, Rocket, Shield, Clock } from "lucide-react"
// import { Logo } from "../assets/Logo"
import Image from "next/image";

import { SolutionsImageAnimation } from "./SolutionsImageAnimation";


const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security standards"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all clients"
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction",
    description: "Committed to exceeding expectations"
  }
]

export function SolutionsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">

              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-outfit">
                Strategic Solutions for{" "}
                <span className="text-heading-gold relative inline-block">
                  Your Business
                  <svg className="absolute -bottom-2 left-0 w-full text-primary" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 2 100 6 150 3C175 1.5 190 5 200 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              
              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                With expertise in modern technologies and a client-first approach, I deliver solutions that not only meet requirements but exceed expectations. My focus is on creating lasting value for international clients.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group p-5 bg-card rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-snug">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Illustration - Simplified Organic Design */}
        <div className="flex items-center justify-center lg:justify-end h-full">
          <SolutionsImageAnimation>
            <div className="relative  w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[4/3]">
              {/* Red Circle Behind */}
              <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square rounded-full -z-10"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, #8b0000 80%)',
          }}
        />
        
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/optimized/media/work/telecommunication.svg"
          alt="Work Process Visualization"
          fill
          className="object-cover animate-float drop-shadow-2xl "
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  </SolutionsImageAnimation>
</div>

        </div>
      </div>
    </section>
  )
}