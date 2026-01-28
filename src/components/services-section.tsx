import Link from "next/link"

const services = [
  {
    title: "Website Development Nepal",
    description: "Highly functional & visually appealing websites designed to rank high and convert in Kathmandu and beyond.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="10" y="15" width="50" height="40" rx="3" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <rect x="15" y="20" width="40" height="25" fill="#c8e6c9" />
        <circle cx="60" cy="35" r="8" fill="#3bb54a" opacity="0.3" />
        <rect x="12" y="50" width="8" height="3" fill="#3bb54a" />
        <circle cx="55" cy="60" r="10" fill="#2d3748" />
        <rect x="50" y="55" width="10" height="12" fill="#4a5568" />
      </svg>
    ),
  },
  {
    title: "App Development In Nepal",
    description: "Innovative and user-friendly mobile application designed to engage users.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="25" y="10" width="30" height="55" rx="4" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <rect x="30" y="18" width="20" height="35" fill="#c8e6c9" />
        <circle cx="40" cy="58" r="3" fill="#3bb54a" />
        <circle cx="60" cy="25" r="8" fill="#3bb54a" opacity="0.3" />
        <rect x="55" y="40" width="15" height="10" rx="2" fill="#2d3748" />
        <circle cx="15" cy="50" r="6" fill="#4a5568" />
      </svg>
    ),
  },
  {
    title: "Software Development Nepal",
    description: "Custom software solutions engineered for the specific needs of businesses in Kathmandu and across Nepal.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="10" y="20" width="45" height="35" rx="3" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <rect x="15" y="25" width="35" height="22" fill="#c8e6c9" />
        <rect x="20" y="55" width="25" height="5" fill="#3bb54a" />
        <circle cx="55" cy="30" r="12" fill="#3bb54a" opacity="0.3" />
        <path d="M50 35 L60 25 L70 35" stroke="#2d3748" strokeWidth="2" fill="none" />
        <rect x="58" y="35" width="12" height="15" fill="#4a5568" />
      </svg>
    ),
  },
  {
    title: "UI/UX",
    description: "Design eye-catching UI/UX interfaces for effortless user interaction",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="15" y="15" width="40" height="35" rx="3" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <rect x="20" y="20" width="30" height="8" fill="#c8e6c9" />
        <rect x="20" y="32" width="15" height="12" fill="#3bb54a" opacity="0.5" />
        <rect x="38" y="32" width="12" height="12" fill="#c8e6c9" />
        <circle cx="58" cy="45" r="10" fill="#2d3748" />
        <rect x="53" y="55" width="10" height="15" fill="#4a5568" />
        <circle cx="25" cy="60" r="5" fill="#3bb54a" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "SEO Services Kathmandu",
    description: "Expert SEO solutions to rank your business on the first page of Google search in Nepal and internationally.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="35" cy="35" r="20" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <line x1="50" y1="50" x2="65" y2="65" stroke="#3bb54a" strokeWidth="4" strokeLinecap="round" />
        <path d="M25 35 L32 42 L45 28" stroke="#3bb54a" strokeWidth="2" fill="none" />
        <circle cx="60" cy="20" r="8" fill="#2d3748" />
        <rect x="55" y="28" width="10" height="15" fill="#4a5568" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing (SMM)",
    description: "Build a strong online presence and engage with your targeted audience",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="20" y="15" width="25" height="45" rx="3" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <rect x="25" y="22" width="15" height="25" fill="#c8e6c9" />
        <circle cx="32" cy="53" r="2" fill="#3bb54a" />
        <circle cx="55" cy="30" r="12" fill="#3bb54a" opacity="0.3" />
        <circle cx="60" cy="55" r="8" fill="#2d3748" />
        <rect x="55" y="63" width="10" height="12" fill="#4a5568" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description: "Designs that Speak Your Brand's Narrative and Connect with Your Audience",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="15" y="15" width="35" height="40" rx="3" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <rect x="20" y="20" width="25" height="15" fill="#c8e6c9" />
        <rect x="20" y="40" width="10" height="10" fill="#3bb54a" opacity="0.5" />
        <circle cx="58" cy="35" r="10" fill="#2d3748" />
        <rect x="53" y="45" width="10" height="15" fill="#4a5568" />
        <circle cx="40" cy="55" r="5" fill="#3bb54a" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Content Writing",
    description: "Engaging and meaningful content to connect with your audience",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="20" y="15" width="35" height="45" rx="3" fill="#e8f5e9" stroke="#3bb54a" strokeWidth="2" />
        <line x1="28" y1="25" x2="48" y2="25" stroke="#3bb54a" strokeWidth="2" />
        <line x1="28" y1="33" x2="45" y2="33" stroke="#c8e6c9" strokeWidth="2" />
        <line x1="28" y1="41" x2="48" y2="41" stroke="#c8e6c9" strokeWidth="2" />
        <line x1="28" y1="49" x2="40" y2="49" stroke="#c8e6c9" strokeWidth="2" />
        <circle cx="60" cy="45" r="10" fill="#2d3748" />
        <rect x="55" y="55" width="10" height="12" fill="#4a5568" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-border"></span>
            <span className="text-sm text-muted-foreground">My Services</span>
            <span className="w-12 h-[2px] bg-border"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Exceptional Services For Your <span className="text-[#3bb54a]">Business Growth</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <p className="text-muted-foreground">
              Discover our wide range of digital solutions to enhance your online presence.
            </p>
            <Link href="#" className="hidden sm:flex items-center gap-2 text-foreground font-medium hover:text-[#3bb54a]">
              <span className="w-8 h-[2px] bg-border"></span>
              <span className="w-2 h-2 bg-[#3bb54a] rounded-full"></span>
              See All
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#3bb54a] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
