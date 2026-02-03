import { MessageSquare, Wrench, Rocket, Headphones } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description: "We discuss your goals, requirements, and vision to create a clear roadmap for success.",
    color: "#c41e3a"
  },
  {
    number: "02",
    icon: Wrench,
    title: "Build",
    description: "I design and develop your solution using modern technologies and best practices.",
    color: "#ffd700"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver",
    description: "Your project goes live with thorough testing, optimization, and documentation.",
    color: "#c41e3a"
  },
  {
    number: "04",
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance and support to ensure continued performance and growth.",
    color: "#ffd700"
  }
]

export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-section-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-[200px] h-[200px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #ffd700 0%, transparent 70%)',
          }}
        />
        
        {/* Decorative Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Process</span>
            <span className="w-12 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            How I <span className="text-heading-gold">Work</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A streamlined process designed for efficiency, transparency, and exceptional results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connection Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                )}
                
                <div className="card-cinematic p-8 text-center h-full">
                  {/* Step Number */}
                  <div 
                    className="text-6xl font-black mb-4 opacity-10"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    <Icon 
                      className="w-7 h-7"
                      style={{ color: step.color }}
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
