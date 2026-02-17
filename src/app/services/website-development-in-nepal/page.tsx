import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development Services | Professional Web Developer',
  description: 'Expert web development services by Nirajan Dhungel. Custom web design, e-commerce solutions, and high-performance applications for international clients.',
  openGraph: {
    title: 'Web Development Services | Nirajan Dhungel',
    description: 'Professional web development services. Custom solutions for businesses worldwide.',
    url: 'https://nirajandhungel.com.np/services/website-development-in-nepal',
  },
};

const services = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored web solutions built with modern technologies to meet your specific needs',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring perfect experience across all devices',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Lightning-fast loading speeds and optimal user experience',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and reliable hosting solutions',
  },
];

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

export default function WebsiteDevelopmentPage() {
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
              <span className="text-sm text-primary font-bold uppercase tracking-widest">Web Development</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Professional <span className="text-heading-gold">Web Development</span> Services
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              High-performance web solutions built with modern technologies. 
              Specializing in custom development for businesses worldwide.
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
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-cinematic p-8 text-center group">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
                <span className="text-sm text-primary font-bold uppercase tracking-widest">Why Choose Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Building Exceptional <span className="text-heading-gold">Web Solutions</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                With expertise in modern web technologies and a focus on delivering results, 
                I help businesses create powerful online presences that drive growth.
              </p>
              <div className="space-y-4">
                <CheckItem text="Modern Tech Stack" />
                <CheckItem text="Clean, Maintainable Code" />
                <CheckItem text="SEO Optimized" />
                <CheckItem text="Fast & Secure" />
              </div>
            </div>
            <div className="relative">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-10"
                style={{
                  background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
                }}
              />
              <Image 
                src="/optimized/media/website-development-portfolio.avif" 
                alt="Web Development Portfolio" 
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
                }}
              />
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
            Ready to Build Something <span className="text-heading-gold">Amazing?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create a web solution that drives results
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
