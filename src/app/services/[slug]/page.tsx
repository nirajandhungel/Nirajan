
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
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Custom iOS and Android applications built with React Native and Flutter for seamless performance.',
    icon: Smartphone,
    features: [
      { icon: Smartphone, title: 'Cross-Platform', description: 'Apps that run smoothly on both iOS and Android' },
      { icon: Zap, title: 'High Performance', description: 'Native-like performance and smooth animations' },
      { icon: Shield, title: 'Secure', description: 'Enterprise-grade security implementation' },
      { icon: Code, title: 'Scalable Architecture', description: 'Built to grow with your user base' },
    ],
    content: {
      heading: 'Transforming Ideas into Apps',
      text: 'We build robust, scalable, and user-friendly mobile applications that drive engagement and business growth. From concept to deployment, we handle the entire lifecycle.',
      benefits: ['Native Performance', 'Offline Capabilities', 'Push Notifications', 'App Store Optimization'],
      image: '/media/mobile-app-portfolio.png' 
    }
  },
  'seo-in-nepal': {
    title: 'SEO Services in Nepal',
    description: 'Data-driven SEO strategies to improve your rankings, drive organic traffic, and grow your business in Nepal.',
    icon: Search,
    features: [
      { icon: Search, title: 'Keyword Research', description: 'Targeting high-value keywords for your niche' },
      { icon: Zap, title: 'On-Page SEO', description: 'Optimizing content and structure for search engines' },
      { icon: Share2, title: 'Link Building', description: 'Authority building through quality backlinks' },
      { icon: FileText, title: 'Content Strategy', description: 'Engaging content that converts' },
    ],
    content: {
      heading: 'Dominate Search Results',
      text: 'Our comprehensive SEO strategies are designed to increase your visibility and drive targeted traffic. We focus on sustainable, long-term growth for your business in the competitive digital landscape.',
      benefits: ['Higher Search Rankings', 'Increased Organic Traffic', 'Better Conversion Rates', 'Local SEO Dominance'],
      image: '/media/seo-portfolio.png'
    }
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging, and beautiful digital experiences.',
    icon: Layout,
    features: [
      { icon: Layout, title: 'User Research', description: 'Understanding your users and their needs' },
      { icon: PenTool, title: 'Visual Design', description: 'Stunning visuals that align with your brand' },
      { icon: Smartphone, title: 'Responsive', description: 'Designs that look great on all devices' },
      { icon: Code, title: 'Prototyping', description: 'Interactive prototypes to visualize the end product' },
    ],
    content: {
      heading: 'Design That Works',
      text: 'We create designs that not only look good but also solve real problems. Our user-centric approach ensures that your digital product is intuitive, accessible, and delightful to use.',
      benefits: ['Improved User Satisfaction', 'Higher Retention Rates', 'Brand Consistency', 'Data-Driven Design'],
      image: '/media/ui-ux-portfolio.png'
    }
  },
  'system-software-development': {
    title: 'System Software Development',
    description: 'Robust and scalable software solutions tailored to streamline your business operations and workflows.',
    icon: Code,
    features: [
      { icon: Code, title: 'Custom Solutions', description: 'Tailored specifically to your business processes' },
      { icon: Shield, title: 'Reliability', description: 'Systems designed for high availability and uptime' },
      { icon: Zap, title: 'Efficiency', description: 'Automating repetitive tasks to save time' },
      { icon: Share2, title: 'Integration', description: 'Seamlessly connects with your existing tools' },
    ],
    content: {
      heading: 'Streamline Your Operations',
      text: 'From ERP systems to custom management software, we build solutions that optimize your business processes. Our software is designed to be reliable, secure, and scalable.',
      benefits: ['Process Automation', 'Data Integrity', 'Detailed Reporting', 'Scalable Architecture'],
      image: '/media/software-portfolio.png'
    }
  },
  'graphics-design': {
    title: 'Graphics Design',
    description: 'Creative graphic design services including branding, marketing materials, and digital assets.',
    icon: PenTool,
    features: [
      { icon: PenTool, title: 'Branding', description: 'Logos and brand identity design' },
      { icon: Layout, title: 'Marketing Materials', description: 'Brochures, flyers, and social media posts' },
      { icon: Zap, title: 'Digital Assets', description: 'Web banners, icons, and infographics' },
      { icon: FileText, title: 'Print Design', description: 'Business cards, posters, and packaging' },
    ],
    content: {
      heading: 'Visual Storytelling',
      text: 'We bring your brand to life through compelling visuals. Our designs are crafted to communicate your message effectively and leave a lasting impression on your audience.',
      benefits: ['Strong Brand Identity', 'Professional Appearance', 'Effective Communication', 'Creative Solutions'],
      image: '/media/graphics-portfolio.png'
    }
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    description: 'Strategic social media management to boost brand awareness and engage with your audience.',
    icon: Share2,
    features: [
      { icon: Share2, title: 'Strategy', description: 'Custom plans aligned with your business goals' },
      { icon: FileText, title: 'Content Creation', description: 'Engaging posts, stories, and reels' },
      { icon: Search, title: 'Analytics', description: 'Tracking performance and optimizing ROI' },
      { icon: Zap, title: 'Advertising', description: 'Targeted ad campaigns for maximum reach' },
    ],
    content: {
      heading: 'Connect with Your Audience',
      text: 'We help you build a strong presence on platforms like Facebook, Instagram, LinkedIn, and more. Our strategies are designed to foster community, increase brand loyalty, and drive sales.',
      benefits: ['Increased Brand Awareness', 'Targeted Reach', 'Community Engagement', 'Measurable ROI'],
      image: '/media/social-media-portfolio.png'
    }
  },
  'content-writing': {
    title: 'Content Writing',
    description: 'High-quality, SEO-optimized content that engages readers and drives conversions.',
    icon: FileText,
    features: [
      { icon: FileText, title: 'Blog Posts', description: 'Informative articles to demonstrate thought leadership' },
      { icon: Search, title: 'SEO Content', description: 'Optimized for search engines to drive traffic' },
      { icon: Code, title: 'Technical Writing', description: 'Documentation and technical guides' },
      { icon: PenTool, title: 'Copywriting', description: 'Persuasive copy for landing pages and ads' },
    ],
    content: {
      heading: 'Words That Sell',
      text: 'Content is king. We create compelling content that resonates with your audience and establishes your authority in the industry. Whether it\'s website copy or blog posts, we deliver quality.',
      benefits: ['Thought Leadership', 'Improved SEO', 'Higher Engagement', 'Clear Communication'],
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
      {/* Hero Section */}
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
      </section>

      {/* Services Grid */}
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

      {/* Content Section */}
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
            
            {/* Placeholder Image using a gradient div if image missing, or a generic tech image */}
            <div className="relative">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-10"
                style={{
                  background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
                }}
              />
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10 flex items-center justify-center">
                {/* 
                 * Using a fallback div because specific images might not exist.
                 * If valid images exist, utilize next/image. 
                 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />
                  <HeroIcon className="w-32 h-32 text-white/5 relative z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <p className="text-white/20 font-bold text-xl">{title}</p>
                  </div>
              </div>
            </div>
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
