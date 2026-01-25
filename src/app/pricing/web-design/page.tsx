'use client'

import React from 'react';
import { Metadata } from 'next';
import { Check, X, Code, Smartphone, Zap, Shield, Palette, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const webPackages = [
  {
    name: 'Starter',
    price: '25,000',
    period: 'one-time',
    description: 'Perfect For Landing Pages & Portfolios',
    features: {
      'Design & Development': {
        'Up to 5 Pages': true,
        'Responsive Design': true,
        'Modern UI/UX': true,
        'Custom Design': false,
        'Animation Effects': false,
      },
      'Features': {
        'Contact Form': true,
        'Social Media Integration': true,
        'Google Maps Integration': true,
        'Image Gallery': true,
        'Blog Section': false,
        'Admin Panel': false,
      },
      'Technical': {
        'SEO Optimization': true,
        'Mobile Responsive': true,
        'Fast Loading Speed': true,
        'SSL Certificate': true,
        'Google Analytics': true,
        'Database Integration': false,
      },
      'Support': {
        '1 Month Free Support': true,
        'Content Upload': true,
        'Training Session': false,
      },
    },
  },
  {
    name: 'Professional',
    price: '55,000',
    period: 'one-time',
    description: 'Ideal For Business Websites',
    badge: 'Most Popular',
    features: {
      'Design & Development': {
        'Up to 15 Pages': true,
        'Responsive Design': true,
        'Modern UI/UX': true,
        'Custom Design': true,
        'Animation Effects': true,
      },
      'Features': {
        'Contact Form': true,
        'Social Media Integration': true,
        'Google Maps Integration': true,
        'Image Gallery': true,
        'Blog Section': true,
        'Admin Panel': true,
      },
      'Technical': {
        'SEO Optimization': true,
        'Mobile Responsive': true,
        'Fast Loading Speed': true,
        'SSL Certificate': true,
        'Google Analytics': true,
        'Database Integration': true,
      },
      'Support': {
        '3 Months Free Support': true,
        'Content Upload': true,
        'Training Session': true,
        'Email Support': true,
      },
    },
  },
  {
    name: 'Business',
    price: '95,000',
    period: 'one-time',
    description: 'For Dynamic & CMS Websites',
    features: {
      'Design & Development': {
        'Up to 30 Pages': true,
        'Responsive Design': true,
        'Modern UI/UX': true,
        'Custom Design': true,
        'Animation Effects': true,
        'Advanced Interactions': true,
      },
      'Features': {
        'Contact Form': true,
        'Social Media Integration': true,
        'Google Maps Integration': true,
        'Image Gallery': true,
        'Blog Section': true,
        'Admin Panel': true,
        'User Management': true,
        'Newsletter Integration': true,
      },
      'Technical': {
        'SEO Optimization': true,
        'Mobile Responsive': true,
        'Fast Loading Speed': true,
        'SSL Certificate': true,
        'Google Analytics': true,
        'Database Integration': true,
        'API Integration': true,
        'Payment Gateway': false,
      },
      'Support': {
        '6 Months Free Support': true,
        'Content Upload': true,
        'Training Session': true,
        'Email Support': true,
        'Priority Support': true,
      },
    },
  },
  {
    name: 'E-commerce',
    price: 'Contact Sales',
    period: '',
    description: 'Complete Online Store Solution',
    features: {
      'Design & Development': {
        'Unlimited Pages': true,
        'Responsive Design': true,
        'Modern UI/UX': true,
        'Custom Design': true,
        'Animation Effects': true,
        'Advanced Interactions': true,
      },
      'Features': {
        'Product Management': true,
        'Shopping Cart': true,
        'Order Management': true,
        'Inventory Management': true,
        'Customer Accounts': true,
        'Admin Panel': true,
        'User Management': true,
        'Newsletter Integration': true,
        'Review System': true,
      },
      'Technical': {
        'SEO Optimization': true,
        'Mobile Responsive': true,
        'Fast Loading Speed': true,
        'SSL Certificate': true,
        'Google Analytics': true,
        'Database Integration': true,
        'API Integration': true,
        'Payment Gateway': true,
        'Multi-Currency Support': true,
      },
      'Support': {
        '12 Months Free Support': true,
        'Content Upload': true,
        'Training Session': true,
        'Email Support': true,
        'Priority Support': true,
        'Dedicated Account Manager': true,
      },
    },
  },
];

export default function WebPricingPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            Pricing Plans
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Web Development Packages
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional website development packages tailored to your business needs
          </p>
        </div>
      </section>

      {/* Why Professional Website is Important */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Why Your Business Needs a <span className="text-primary">Professional Website</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's digital world, your website is your business's most powerful marketing tool
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Code className="w-12 h-12" />,
                title: 'Professional Credibility',
                description: '84% of consumers believe a business with a website is more credible than one with only social media.',
              },
              {
                icon: <Smartphone className="w-12 h-12" />,
                title: 'Mobile-First Experience',
                description: '58% of all website visits come from mobile devices. Responsive design is no longer optional.',
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: '24/7 Availability',
                description: 'Your website works round the clock, providing information and generating leads even while you sleep.',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Build Trust',
                description: "75% of users judge a company's credibility based on their website design.",
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: 'Brand Identity',
                description: 'A well-designed website reinforces your brand and creates a memorable first impression.',
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: 'Data & Analytics',
                description: 'Track visitor behavior, understand your audience, and make data-driven business decisions.',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#fafafa] rounded-2xl p-8 border border-border/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Web Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '94%', label: 'of first impressions are design-related' },
              { stat: '88%', label: 'of consumers research online before buying' },
              { stat: '57%', label: 'won\'t recommend a business with poor mobile site' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-primary to-green-600 rounded-2xl text-white">
                <div className="text-5xl font-extrabold mb-2">{item.stat}</div>
                <p className="text-white/90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Our <span className="text-primary">Development Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to deliver high-quality websites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design & Prototype', desc: 'Creating wireframes and visual designs' },
              { step: '03', title: 'Development & Testing', desc: 'Building and quality assurance' },
              { step: '04', title: 'Launch & Support', desc: 'Deployment and ongoing maintenance' },
            ].map((process, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-border/40 hover:shadow-lg transition-all">
                <div className="text-4xl font-extrabold text-primary mb-3">{process.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Choose Your <span className="text-primary">Perfect Package</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative ${
                  pkg.badge ? 'border-primary' : 'border-border/40'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    ⭐ {pkg.badge} ⭐
                  </div>
                )}

                <div className="text-center mb-6 mt-4">
                  <h3 className="text-2xl font-extrabold text-foreground mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    {pkg.price === 'Contact Sales' ? (
                      <div className="text-2xl font-bold text-primary">Contact Sales</div>
                    ) : (
                      <div>
                        <span className="text-sm text-muted-foreground">Rs </span>
                        <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                        <div className="text-sm text-muted-foreground mt-1">{pkg.period}</div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {Object.entries(pkg.features).map(([category, features]) => (
                    <div key={category}>
                      <h4 className="font-bold text-foreground text-sm mb-2 border-b pb-1">{category}</h4>
                      <ul className="space-y-2">
                        {Object.entries(features as Record<string, boolean>).map(([feature, included]) => (
                          <li key={feature} className="flex items-start gap-2 text-xs">
                            {included ? (
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            )}
                            <span className={included ? 'text-foreground' : 'text-muted-foreground line-through'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 font-bold"
                  asChild
                >
                  <Link href="/contact">
                    {pkg.price === 'Contact Sales' ? 'Contact Us' : 'Get Started'}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project requirements and create a stunning website that drives results!
          </p>
          <div className="flex flex-wrap justify-center gap-4">

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/10 hover:bg-white/20 rounded-lg px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
