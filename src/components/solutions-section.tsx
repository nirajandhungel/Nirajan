"use client"
import { CheckCircle, Rocket, Shield, Clock } from "lucide-react"
import { Logo } from "../assets/Logo"

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
      {/* Organic Background Elements - CSS only, no complex SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] animate-float-delayed opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-sm border border-primary/20">
                Why Choose Me
              </span>
              
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
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              
              {/* Animated rings - pure CSS using global animations */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border-2 border-white/5 rounded-full animate-pulse-slow" />
                <div className="absolute w-4/5 h-4/5 border-2 border-white/10 rounded-full animate-pulse-slower" 
                     style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-3/5 h-3/5 border-2 border-primary/20 rounded-full animate-pulse-slow" 
                     style={{ animationDelay: '1s' }} />
              </div>

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-glow" />
              </div>

              {/* Logo container */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-float"></div>
                    <div className="w-38 h-18 rounded-sm bg-black border border-white/10 flex items-center justify-center transform hover:scale-105 transition-transform duration-500 relative z-10 shadow-2xl shadow-primary/20 animate-float">
                      <Logo className="w-16 h-16 pr-25 text-white" />
                    </div>
                 </div>
              </div>

              {/* Floating feature badges */}
              <div className="absolute top-8 right-10 bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-sm shadow-xl flex items-center gap-2 animate-float">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-white/90">Fast</span>
              </div>

              <div className="absolute bottom-30 -right-4 bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-sm shadow-xl flex items-center gap-2 animate-float">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-white/90">Secure</span>
              </div>

              <div className="absolute bottom-5 right-48 bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-sm shadow-xl flex items-center gap-2 animate-float"
                   style={{ animationDelay: '0.3s' }}>
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-white/90">24/7</span>
              </div>

              <div className="absolute top-1/3 -left-4 bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-sm shadow-xl flex items-center gap-2 animate-float"
                   style={{ animationDelay: '0.6s' }}>
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-white/90">Quality</span>
              </div>

              {/* Connecting dots */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping-slow" />
              <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping-slow" 
                   style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}