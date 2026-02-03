import { CheckCircle, Rocket, Shield, Clock } from "lucide-react"

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
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Large Red Circle */}
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full -translate-y-1/2 opacity-30"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
        
        {/* Decorative Arc */}
        <div 
          className="absolute bottom-10 left-10 w-40 h-40 rounded-full border-2 border-white/5"
          style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-sm text-primary font-bold uppercase tracking-widest">Why Choose Me</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Strategic <span className="text-heading-gold">Solutions</span> for Your Business
            </h2>
            
            <p className="text-white/60 leading-relaxed mb-10">
              With expertise in modern technologies and a client-first approach, I deliver 
              solutions that not only meet requirements but exceed expectations. My focus is 
              on creating lasting value for international clients.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-white/50">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Illustration - Abstract SVG */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Red Circle Behind */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full -z-10"
                style={{
                  background: 'radial-gradient(circle, #c41e3a 0%, #8b0000 80%)',
                }}
              />
              
              {/* Abstract Tech Illustration */}
              <svg viewBox="0 0 400 400" className="w-full max-w-md h-auto relative z-10">
                {/* Outer Ring */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="#ffffff10" strokeWidth="2" strokeDasharray="10 5" />
                
                {/* Inner Elements */}
                <circle cx="200" cy="200" r="100" fill="#111111" stroke="#c41e3a30" strokeWidth="2" />
                
                {/* Code Bracket */}
                <text x="170" y="190" fill="#ffd700" fontSize="48" fontFamily="monospace">{"<"}</text>
                <text x="205" y="190" fill="#ffffff" fontSize="48" fontFamily="monospace">{"/"}</text>
                <text x="230" y="190" fill="#ffd700" fontSize="48" fontFamily="monospace">{">"}</text>
                
                {/* Dots */}
                <circle cx="200" cy="240" r="4" fill="#c41e3a" />
                <circle cx="180" cy="240" r="3" fill="#ffffff50" />
                <circle cx="220" cy="240" r="3" fill="#ffffff50" />
                
                {/* Orbiting Elements */}
                <circle cx="320" cy="200" r="15" fill="#c41e3a" opacity="0.8" />
                <circle cx="80" cy="200" r="10" fill="#ffd700" opacity="0.6" />
                <circle cx="200" cy="80" r="12" fill="#c41e3a" opacity="0.6" />
                <circle cx="200" cy="320" r="8" fill="#ffd700" opacity="0.4" />
                
                {/* Connection Lines */}
                <line x1="200" y1="50" x2="200" y2="100" stroke="#ffffff20" strokeWidth="1" />
                <line x1="200" y1="300" x2="200" y2="350" stroke="#ffffff20" strokeWidth="1" />
                <line x1="50" y1="200" x2="100" y2="200" stroke="#ffffff20" strokeWidth="1" />
                <line x1="300" y1="200" x2="350" y2="200" stroke="#ffffff20" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
