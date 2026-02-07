import React from 'react';
import { Metadata } from 'next';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Packages & Pricing | Nirajan Dhungel',
  description: 'Affordable and results-driven SEO packages in Nepal. Choose from Standard, Professional, or Enterprise plans to boost your search engine rankings.',
  keywords: [
    'SEO Pricing Nepal',
    'SEO Packages Kathmandu',
    'Search Engine Optimization Cost',
    'Digital Marketing Rates Nepal',
    'Local SEO Services Pricing'
  ],
  openGraph: {
    title: 'Boost Your Rankings - SEO Packages',
    description: 'Transparent pricing for professional SEO services in Nepal. Start growing your organic traffic today.',
    url: 'https://nirajandhungel.com.np/pricing/seo',
    siteName: 'Nirajan Dhungel',
    images: [
      {
        url: '/nirajandhungel3.png',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel SEO Services',
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

const seoPackages = [
  {
    name: 'Standard',
    price: '$400',
    period: '/month',
    description: 'Ideal for Small Businesses',
    features: [
      { name: 'Up to 10 Keywords', included: true },
      { name: 'On-Page SEO', included: true },
      { name: 'Technical SEO Audit', included: true },
      { name: 'Monthly Reports', included: true },
      { name: 'Link Building', included: false },
      { name: 'Content Strategy', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$700',
    period: '/month',
    description: 'Perfect for Growing Businesses',
    badge: 'Best Value',
    features: [
      { name: 'Up to 20 Keywords', included: true },
      { name: 'On-Page SEO', included: true },
      { name: 'Technical SEO Audit', included: true },
      { name: 'Monthly Reports', included: true },
      { name: 'Link Building', included: true },
      { name: 'Content Strategy', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For Large Scale Operations',
    features: [
      { name: 'Unlimited Keywords', included: true },
      { name: 'Advanced SEO', included: true },
      { name: 'Dedicated Manager', included: true },
      { name: 'Weekly Reports', included: true },
      { name: 'Premium Link Building', included: true },
      { name: 'Full Content Creation', included: true },
    ],
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof seoPackages[0]; index: number }) => (
  <div
    className={`card-cinematic p-8 hover:-translate-y-2 transition-all duration-500 ${
      pkg.badge ? 'border-2 border-primary' : ''
    }`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {pkg.badge && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
        ✨ {pkg.badge}
      </div>
    )}

    <div className="text-center mb-8 mt-4">
      <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-black text-heading-gold">{pkg.price}</span>
        {pkg.period && <span className="text-white/50 text-sm">{pkg.period}</span>}
      </div>
      <p className="text-white/60 text-sm">{pkg.description}</p>
    </div>

    <ul className="space-y-3 mb-8">
      {pkg.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3">
          {feature.included ? (
            <Check className="w-5 h-5 text-primary shrink-0" />
          ) : (
            <X className="w-5 h-5 text-white/20 shrink-0" />
          )}
          <span className={feature.included ? 'text-white' : 'text-white/30 line-through'}>
            {feature.name}
          </span>
        </li>
      ))}
    </ul>

    <Button
      className="w-full btn-primary-cinematic text-white rounded-xl py-6 font-bold"
      asChild
    >
      <Link href="/contact">
        {pkg.price === 'Custom' ? 'Contact Us' : 'Get Started'}
      </Link>
    </Button>
  </div>
);

export default function SEOPricingPage() {
  return (
    <div className="animate-fade-in bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Pricing</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            SEO <span className="text-heading-gold">Packages</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Professional SEO services to boost your online visibility and drive organic traffic
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {seoPackages.map((pkg, idx) => (
              <PackageCard key={idx} pkg={pkg} index={idx} />
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
            Ready to <span className="text-heading-gold">Boost Rankings?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss which SEO package is right for your business
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-accent hover:text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}