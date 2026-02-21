import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Zap, Shield } from 'lucide-react';
import { buildPersonJsonLd, buildServiceJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Web Development Services | Professional Web Developer',
  description: 'Expert web development services by Nirajan Dhungel. Custom web design, e-commerce solutions, and high-performance applications for international clients.',
  keywords: [
    'Web Development Services Nepal',
    'Custom Web Design Kathmandu',
    'E-commerce Development Nepal',
    'Professional Web Developer',
    'Full Stack Development Services'
  ],
   alternates: {
    canonical: 'https://nirajandhungel.com.np/services/website-development-in-nepal',
  },
  openGraph: {
    title: 'Web Development Services | Nirajan Dhungel',
    description: 'Professional web development services. Custom solutions for businesses worldwide.',
    url: 'https://nirajandhungel.com.np/services/website-development-in-nepal',
  },
};

const services = [
  {
    icon: Code,
    title: 'Websites That Rank',
    description: 'SEO-optimized sites that rank on Google and AI search — built to generate leads',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First & Fast',
    description: 'Sites that load instantly and convert on every device',
  },
  {
    icon: Zap,
    title: 'Performance That Converts',
    description: '95+ Lighthouse scores — speed that turns visitors into customers',
  },
  {
    icon: Shield,
    title: 'Scalable & Secure',
    description: 'Enterprise-grade reliability so your business grows without limits',
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
  const personSchema = buildPersonJsonLd();
  const serviceSchema = buildServiceJsonLd({
    name: 'Website Development',
    description: 'Next.js SEO optimized websites for global startups. Sites that rank on Google and AI search and generate leads.',
    url: '/services/website-development-in-nepal',
  });

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
              <span className="text-sm text-primary font-bold uppercase tracking-widest">Web Development</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Websites That <span className="text-heading-gold">Rank &amp; Convert</span>
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Next.js SEO optimized websites for global startups. We build sites that rank on Google 
              and AI search — and generate leads.
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
                  Website Visual {item}
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
                      width="92"
                      height="18"
                      rx="9"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                    <rect
                      x="26"
                      y="56"
                      width="148"
                      height="8"
                      rx="4"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                    <rect
                      x="26"
                      y="74"
                      width="118"
                      height="8"
                      rx="4"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                    <circle
                      cx="164"
                      cy="36"
                      r="10"
                      className="fill-none stroke-current"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-heading-gold/20 mix-blend-screen" />
                </div>
                <p className="mt-4 text-xs text-white/50">
                  Placeholder SVG for future website development illustration. Replace with your own SVG when ready.
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

      {/* Benefits / Why Choose Section */}
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
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />
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
