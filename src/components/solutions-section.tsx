export function SolutionsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f8fdf8] relative overflow-hidden">
      {/* Curved background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-background">
        <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path
            d="M0,120 C480,30 960,30 1440,120 L1440,120 L0,120 Z"
            fill="#f8fdf8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-border"></span>
              <span className="text-sm text-muted-foreground">What We Provide</span>
              <span className="w-8 h-[2px] bg-border"></span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Strategic <span className="text-[#3bb54a]">Solutions</span> For Your Needs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our experienced team is here to utilize valuable resources efficiently that ensures client satisfaction. We guarantee you that our services will set exceptional growth for your business.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <svg viewBox="0 0 600 400" className="w-full max-w-[500px] h-auto">
              {/* Isometric workspace illustration */}
              <g>
                {/* Floor/Platform */}
                <path d="M100 350 L300 250 L500 350 L300 450 Z" fill="#e8f5e9" />
                
                {/* Desk 1 */}
                <rect x="150" y="280" width="80" height="5" fill="#4a5568" transform="skewX(-30)" />
                <rect x="155" y="285" width="5" height="40" fill="#2d3748" />
                <rect x="210" y="285" width="5" height="40" fill="#2d3748" />
                
                {/* Computer on desk */}
                <rect x="160" y="260" width="40" height="25" fill="#1a1a1a" transform="skewX(-10)" />
                <rect x="165" y="263" width="32" height="18" fill="#3bb54a" opacity="0.5" />
                
                {/* People */}
                {/* Person 1 - standing */}
                <circle cx="250" cy="200" r="15" fill="#2d3748" />
                <rect x="240" y="220" width="20" height="50" rx="5" fill="#3bb54a" />
                
                {/* Person 2 - at desk */}
                <circle cx="320" cy="230" r="12" fill="#4a5568" />
                <rect x="312" y="245" width="16" height="35" rx="4" fill="#2d3748" />
                
                {/* Person 3 */}
                <circle cx="400" cy="250" r="14" fill="#2d3748" />
                <rect x="390" y="268" width="20" height="45" rx="5" fill="#4a5568" />
                
                {/* Floating UI elements */}
                <rect x="350" y="120" width="60" height="40" rx="5" fill="#ffffff" stroke="#3bb54a" strokeWidth="2" />
                <rect x="360" y="130" width="40" height="4" fill="#3bb54a" />
                <rect x="360" y="140" width="30" height="4" fill="#c8e6c9" />
                
                {/* Code/HTML element */}
                <rect x="420" y="180" width="70" height="50" rx="5" fill="#1a1a1a" />
                <text x="430" y="200" fill="#3bb54a" fontSize="8" fontFamily="monospace">{"<HTML>"}</text>
                <text x="430" y="215" fill="#ffffff" fontSize="8" fontFamily="monospace">{"<JAVA>"}</text>
                
                {/* Growth charts */}
                <rect x="120" y="150" width="50" height="35" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M130 175 L140 165 L150 170 L160 155" stroke="#3bb54a" strokeWidth="2" fill="none" />
                
                {/* Plant */}
                <rect x="480" y="300" width="15" height="20" fill="#8b5a2b" />
                <circle cx="487" cy="290" r="12" fill="#3bb54a" />
                <circle cx="480" cy="285" r="8" fill="#4ade80" />
                
                {/* Connection lines */}
                <path d="M280 210 Q320 150 380 140" stroke="#c8e6c9" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
