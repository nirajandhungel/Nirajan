
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Zap, 
  Shield, 
  Search, 
  PenTool, 
  Layout, 
  Share2, 
  FileText 
} from 'lucide-react';

// Use type for service data
type ServiceData = {
  title: string;
  description: string;
  icon: any;
  features: { icon: any; title: string; description: string }[];
  content: {
    heading: string;
    text: string;
    benefits: string[];
    image?: string;
  };
};

const servicesData: Record<string, ServiceData> = {
  // App Development
  'mobile-app-development': {
    title: 'App Development',
    description: 'Cross-platform mobile applications using React Native and modern frameworks.',
    icon: Smartphone,
    features: [
      { icon: Smartphone, title: 'Cross-Platform Ready', description: 'Single codebase targeting both iOS and Android.' },
      { icon: Zap, title: 'Smooth Performance', description: 'Fast, fluid experiences with native-feeling interactions.' },
      { icon: Shield, title: 'Secure by Design', description: 'Authentication, encryption, and secure data flows baked in.' },
      { icon: Code, title: 'Scalable Architecture', description: 'Clean architecture that scales with your user base.' },
    ],
    content: {
      heading: 'From Idea to App Store-Ready Product',
      text: 'I design and build high-quality mobile applications that feel native, load fast, and are easy to maintain. From onboarding to push notifications, every interaction is crafted to keep users engaged and coming back.',
      benefits: [
        'Cross-platform development with React Native',
        'Optimized performance and smooth animations',
        'Secure auth flows and data handling',
        'App Store and Play Store deployment support',
      ],
      image: '/media/mobile-app-portfolio.png' 
    }
  },
  // GSO AI (SEO Services)
  'gso-ai': {
    title: 'GSO AI (SEO Services)',
    description: 'Advanced AI-powered SEO and digital marketing optimization to boost your website visibility and ranking.',
    icon: Search,
    features: [
      { icon: Search, title: 'AI-Enhanced Keyword Research', description: 'Uncover high-intent keywords your competitors are missing.' },
      { icon: Zap, title: 'On-Page & Technical SEO', description: 'Fast, crawlable pages with clean structure and schema.' },
      { icon: Share2, title: 'Authority & Backlinks', description: 'Ethical link-building strategies that compound over time.' },
      { icon: FileText, title: 'Content & Conversion', description: 'SEO content that also reads like it was written for humans.' },
    ],
    content: {
      heading: 'Search Visibility Powered by AI',
      text: 'Instead of guessing what works, I combine data, AI insights, and real-world experimentation to improve your rankings and conversions. From technical foundations to content and backlinks, every piece works together toward measurable growth.',
      benefits: [
        'Higher rankings on Google and AI search',
        'Technical SEO clean-up and monitoring',
        'Content strategies mapped to your funnel',
        'Transparent reporting on results and next steps',
      ],
      image: '/media/seo-portfolio.png'
    }
  },
  // SEO Services in Nepal (classic SEO service)
  'seo-in-nepal': {
    title: 'SEO Services in Nepal',
    description: 'Data-driven SEO strategies to improve your rankings, drive organic traffic, and grow your business in Nepal.',
    icon: Search,
    features: [
      { icon: Search, title: 'Keyword Research', description: 'Targeting high-value keywords for your niche and location.' },
      { icon: Zap, title: 'On-Page SEO', description: 'Optimizing content, metadata, and structure for better crawlability.' },
      { icon: Share2, title: 'Link Building', description: 'Building authority with relevant, high-quality backlinks.' },
      { icon: FileText, title: 'Content Strategy', description: 'Planning and creating content that both ranks and converts.' },
    ],
    content: {
      heading: 'Rank Higher in the Nepal Market & Beyond',
      text: 'I focus on sustainable, white-hat SEO that strengthens your site over time. From technical clean-up to content and backlinks, the goal is simple: more qualified visitors who are ready to work with you.',
      benefits: [
        'Higher search rankings for relevant keywords',
        'Increased organic traffic from your ideal audience',
        'Clear site structure and improved user experience',
        'Local SEO advantage for Nepal-focused businesses',
      ],
      image: '/media/seo-portfolio.png'
    }
  },
  // System/Software Development
  'system-software-development': {
    title: 'System/Software Development',
    description: 'Custom software solutions tailored to your business needs using Java, Python, and Node.js.',
    icon: Code,
    features: [
      { icon: Code, title: 'Tailored Architectures', description: 'Systems that match your exact workflows and constraints.' },
      { icon: Shield, title: 'Reliable & Secure', description: 'Enterprise-grade reliability, backups, and access control.' },
      { icon: Zap, title: 'Process Automation', description: 'Replace manual, error-prone steps with robust automation.' },
      { icon: Share2, title: 'First-Class Integrations', description: 'Connect CRMs, ERPs, billing, and internal tools seamlessly.' },
    ],
    content: {
      heading: 'Software That Becomes an Asset, Not a Headache',
      text: 'Off-the-shelf tools rarely fit perfectly. I help you design and build software that mirrors how your business actually operates, while staying maintainable, scalable, and secure for years to come.',
      benefits: [
        'Custom workflows that fit your team',
        'Reduce operational bottlenecks and manual work',
        'Centralized, reliable data and reporting',
        'Long-term scalability as your business grows',
      ],
      image: '/media/software-portfolio.png'
    }
  },
  // Graphic Design
  'graphics-design': {
    title: 'Graphic Design',
    description: 'Professional graphic design services for branding, marketing materials, and digital assets.',
    icon: PenTool,
    features: [
      { icon: PenTool, title: 'Brand Identity', description: 'Logos, color systems, and visual language that feel like you.' },
      { icon: Layout, title: 'Marketing Collateral', description: 'Pitch decks, brochures, and social posts that actually get read.' },
      { icon: Zap, title: 'Digital Assets', description: 'Web graphics, icons, and illustrations optimized for screens.' },
      { icon: FileText, title: 'Print-Ready Design', description: 'Business cards, packaging, and event materials ready for press.' },
    ],
    content: {
      heading: 'Design That Communicates in a Single Glance',
      text: 'Every visual element either builds or breaks trust. I help you create a consistent, professional visual presence that looks great across web, print, and social — without losing your brand’s personality.',
      benefits: [
        'Stronger, more memorable brand presence',
        'Consistent visuals across every touchpoint',
        'Designs optimized for both print and digital',
        'Creative direction that supports your goals',
      ],
      image: '/media/graphics-portfolio.png'
    }
  },
  // Social Media Marketing (SMM)
  'social-media-marketing': {
    title: 'Social Media Marketing (SMM)',
    description: 'Build your brand presence and engage with your audience across social platforms.',
    icon: Share2,
    features: [
      { icon: Share2, title: 'Platform Strategy', description: 'Choose the right platforms and formats for your audience.' },
      { icon: FileText, title: 'Content Production', description: 'Posts, stories, and short-form content that match your brand voice.' },
      { icon: Search, title: 'Analytics & Insights', description: 'Clear reports on what works and where to double down.' },
      { icon: Zap, title: 'Paid Campaigns', description: 'Targeted ads that drive leads instead of just impressions.' },
    ],
    content: {
      heading: 'Turn Social Media Into a Growth Channel',
      text: 'Instead of posting randomly, I help you create a focused social strategy that supports your business goals. From content calendars to campaigns, every piece of content has a clear purpose.',
      benefits: [
        'Consistent brand presence across key platforms',
        'Content that builds trust and authority',
        'Campaigns optimized for leads and revenue',
        'Actionable insight from performance data',
      ],
      image: '/media/social-media-portfolio.png'
    }
  },
  // Content Writing
  'content-writing': {
    title: 'Content Writing',
    description: 'High-quality, SEO-optimized content that engages readers and drives conversions.',
    icon: FileText,
    features: [
      { icon: FileText, title: 'Blog & Article Writing', description: 'Educate, inform, and build authority with long-form content.' },
      { icon: Search, title: 'SEO-Optimized Copy', description: 'Content structured to rank without feeling robotic.' },
      { icon: Code, title: 'Technical Writing', description: 'Documentation and guides that make complex topics clear.' },
      { icon: PenTool, title: 'Conversion Copy', description: 'Landing page and ad copy that turns interest into action.' },
    ],
    content: {
      heading: 'Content That Sounds Human and Performs',
      text: 'Whether it’s a homepage, a blog article, or a technical guide, I focus on content that reads naturally, reflects your brand, and is structured to perform in search engines.',
      benefits: [
        'Clear, confident brand voice',
        'Improved organic visibility and engagement',
        'Content that supports your sales funnel',
        'Reusable assets for email, social, and ads',
      ],
      image: '/media/content-portfolio.png'
    }
  }
};

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug }  = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Nirajan Dhungel`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Nirajan Dhungel`,
      description: service.description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const { title, description, features, content } = service;
  const HeroIcon = service.icon;

  const CheckItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-white">{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Introduction */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #ffd700 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-sm text-primary font-bold uppercase tracking-widest">Our Services</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="text-heading-gold">{title}</span>
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              {description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* SVG Visual Strip */}
        <div className="container relative z-10 mx-auto px-4 mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] via-[#050505] to-black p-6"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  {title} Visual {item}
                </div>
                <div className="relative flex h-32 items-center justify-center">
                  <svg
                    viewBox="0 0 200 120"
                    className="h-full w-full text-white/8"
                    aria-hidden="true"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="180"
                      height="100"
                      rx="18"
                      className="fill-current"
                    />
                    <rect
                      x="26"
                      y="26"
                      width="64"
                      height="16"
                      rx="8"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                    <rect
                      x="26"
                      y="52"
                      width="148"
                      height="8"
                      rx="4"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                    <rect
                      x="26"
                      y="70"
                      width="118"
                      height="8"
                      rx="4"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                    <circle
                      cx="150"
                      cy="46"
                      r="14"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-heading-gold/20 mix-blend-screen" />
                </div>
                <p className="mt-4 text-xs text-white/50">
                  Placeholder SVG for future {title.toLowerCase()} illustration.
                  Swap this with your own custom SVG when ready.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-cinematic p-8 text-center group">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits / Detailed Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span className="text-sm text-primary font-bold uppercase tracking-widest">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                 <span className="text-heading-gold">{content.heading}</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {content.text}
              </p>
              <div className="space-y-4">
                {content.benefits.map((benefit, i) => (
                  <CheckItem key={i} text={benefit} />
                ))}
              </div>
            </div>
            
            {/* Visual Placeholder Panel */}
            <div className="relative">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-10"
                style={{
                  background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
                }}
              />
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />
                  <HeroIcon className="w-32 h-32 text-white/10 relative z-10" />
                  <div className="absolute inset-6 rounded-2xl border border-dashed border-white/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <p className="text-white/40 font-semibold text-sm tracking-[0.2em] uppercase">
                       SVG Visual Placeholder
                     </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Key Highlights
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-black text-white">
              What Makes This <span className="text-heading-gold">{title}</span> Service Stand Out
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Highlight 0{index + 1}
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 ring-1 ring-primary/40 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="mb-5 text-sm text-white/80">{benefit}</p>

                <div className="relative h-20 w-full overflow-hidden rounded-xl border border-dashed border-white/10 bg-gradient-to-tr from-primary/10 via-transparent to-heading-gold/10">
                  <svg
                    viewBox="0 0 160 80"
                    className="h-full w-full text-white/6"
                    aria-hidden="true"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="140"
                      height="60"
                      rx="14"
                      className="fill-current"
                    />
                    <path
                      d="M20 50h60L100 30h40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 50%, #0a0a0a 100%)',
        }}
      >
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to <span className="text-heading-gold">Get Started?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our professional {title} services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-accent hover:text-black px-10 py-4 rounded-sm font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}
