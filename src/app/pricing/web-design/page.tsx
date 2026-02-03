'use client'

import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const webPackages = [
  {
    name: 'Starter',
    price: '$500',
    period: 'one-time',
    description: 'Perfect for Landing Pages',
    features: [
      { name: 'Up to 5 Pages', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'SEO Optimization', included: true },
      { name: 'Contact Form', included: true },
      { name: 'CMS Integration', included: false },
      { name: 'E-commerce Features', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$1,200',
    period: 'one-time',
    description: 'Ideal for Business Websites',
    badge: 'Popular',
    features: [
      { name: 'Up to 15 Pages', included: true },
      { name: 'Custom Design', included: true },
      { name: 'SEO Optimization', included: true },
      { name: 'Contact Form', included: true },
      { name: 'CMS Integration', included: true },
      { name: 'E-commerce Features', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For Complex Applications',
    features: [
      { name: 'Unlimited Pages', included: true },
      { name: 'Premium Design', included: true },
      { name: 'Advanced SEO', included: true },
      { name: 'Custom Features', included: true },
      { name: 'CMS Integration', included: true },
      { name: 'E-commerce Features', included: true },
    ],
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof webPackages[0]; index: number }) => (
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
        {pkg.period && <span className="text-white/50 text-sm ml-2">{pkg.period}</span>}
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

export default function WebPricingPage() {
  return (
    <div className="animate-fade-in bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
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
            Web Development <span className="text-heading-gold">Packages</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Professional web development services tailored to your business needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webPackages.map((pkg, idx) => (
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
            Ready to Build Your <span className="text-heading-gold">Website?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create something exceptional
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-accent hover:text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}