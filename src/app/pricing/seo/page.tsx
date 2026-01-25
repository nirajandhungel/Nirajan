'use client'

import React from 'react';
import { Metadata } from 'next';
import { Check, X, Search, TrendingUp, Target, BarChart3, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const seoPackages = [
  {
    name: 'Standard',
    price: '34,000',
    period: 'mon',
    description: 'Preferred For Small Businesses',
    features: {
      'Initial Website Analysis': {
        'Upto 10 Keyword Ranking': true,
        'Site Audit': true,
        'Competitor Analysis': true,
        'Google Analytics Setup': true,
        'Google Search Console Setup': true,
        'Robots.txt Creation': true,
        'Sitemap Creation': true,
      },
      'On Page Setup': {
        'Keyword Research': true,
        'Keyword Mapping': false,
        'Few Major Pages Meta And Heading Tag Optimization': true,
        'Image Optimization': true,
        'Internal Linking': true,
        'URL Optimization': true,
      },
      'Off Page Setup': {
        'Social Bookmarking': true,
        'Blog Commenting': true,
        'Article Submission': true,
        'Directory Submission': true,
        'Guest Posting': false,
      },
      'Monthly Reporting': {
        'Keyword Ranking Report': true,
        'Traffic Report': true,
        'Backlink Report': true,
      },
    },
  },
  {
    name: 'Professional',
    price: '56,000',
    period: 'mon',
    description: 'Preferred For Mid Size Businesses',
    badge: 'Best Value',
    features: {
      'Initial Website Analysis': {
        'Upto 20 Keyword Ranking': true,
        'Site Audit': true,
        'Competitor Analysis': true,
        'Google Analytics Setup': true,
        'Google Search Console Setup': true,
        'Robots.txt Creation': true,
        'Sitemap Creation': true,
      },
      'On Page Setup': {
        'Keyword Research': true,
        'Keyword Mapping': true,
        'Major Pages Meta And Heading Tag Optimization': true,
        'Image Optimization': true,
        'Internal Linking': true,
        'URL Optimization': true,
      },
      'Off Page Setup': {
        'Social Bookmarking': true,
        'Blog Commenting': true,
        'Article Submission': true,
        'Directory Submission': true,
        'Guest Posting': true,
      },
      'Monthly Reporting': {
        'Keyword Ranking Report': true,
        'Traffic Report': true,
        'Backlink Report': true,
        'Competitor Report': true,
      },
    },
  },
  {
    name: 'Premium',
    price: '88,000',
    period: 'mon',
    description: 'Preferred For Large Businesses',
    features: {
      'Initial Website Analysis': {
        'Upto 40 Keyword Ranking': true,
        'Site Audit': true,
        'Competitor Analysis': true,
        'Google Analytics Setup': true,
        'Google Search Console Setup': true,
        'Robots.txt Creation': true,
        'Sitemap Creation': true,
      },
      'On Page Setup': {
        'Keyword Research': true,
        'Keyword Mapping': true,
        'Major Pages Meta And Heading Tag Optimization': true,
        'Image Optimization': true,
        'Internal Linking': true,
        'URL Optimization': true,
        'Schema Markup': true,
      },
      'Off Page Setup': {
        'Social Bookmarking': true,
        'Blog Commenting': true,
        'Article Submission': true,
        'Directory Submission': true,
        'Guest Posting': true,
        'Influencer Outreach': true,
      },
      'Monthly Reporting': {
        'Keyword Ranking Report': true,
        'Traffic Report': true,
        'Backlink Report': true,
        'Competitor Report': true,
        'ROI Report': true,
      },
    },
  },
  {
    name: 'Premium Plus',
    price: 'Contact Sales',
    period: '',
    description: 'Preferred For Highly Competitive Businesses',
    features: {
      'Initial Website Analysis': {
        'Upto 60 Keyword Ranking': true,
        'Site Audit': true,
        'Competitor Analysis': true,
        'Google Analytics Setup': true,
        'Google Search Console Setup': true,
        'Robots.txt Creation': true,
        'Sitemap Creation': true,
      },
      'On Page Setup': {
        'Keyword Research': true,
        'Keyword Mapping': true,
        'Major Pages Meta And Heading Tag Optimization': true,
        'Image Optimization': true,
        'Internal Linking': true,
        'URL Optimization': true,
        'Schema Markup': true,
        'Content Optimization': true,
      },
      'Off Page Setup': {
        'Social Bookmarking': true,
        'Blog Commenting': true,
        'Article Submission': true,
        'Directory Submission': true,
        'Guest Posting': true,
        'Influencer Outreach': true,
        'PR Distribution': true,
      },
      'Monthly Reporting': {
        'Keyword Ranking Report': true,
        'Traffic Report': true,
        'Backlink Report': true,
        'Competitor Report': true,
        'ROI Report': true,
        'Custom Dashboard': true,
      },
    },
  },
];

export default function SEOPricingPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            Subscription Plan
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            SEO Package
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boost your online visibility and drive organic traffic with our comprehensive SEO packages
          </p>
        </div>
      </section>

      {/* Why SEO is Important */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Why <span className="text-primary">SEO</span> is Important?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Search Engine Optimization is crucial for your business growth in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Search className="w-12 h-12" />,
                title: 'Increased Visibility',
                description: '75% of users never scroll past the first page of search results. SEO helps you rank higher.',
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Organic Traffic Growth',
                description: 'SEO drives 1000%+ more traffic than organic social media. Get sustainable, long-term results.',
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Better ROI',
                description: 'SEO has a close rate of 14.6% compared to 1.7% for outbound marketing. Higher conversion rates.',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Build Credibility',
                description: 'Top rankings signal trust and authority. 70% of marketers see SEO as more effective than PPC.',
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

          {/* SEO Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '68%', label: 'of online experiences begin with a search engine' },
              { stat: '53%', label: 'of all website traffic comes from organic search' },
              { stat: '93%', label: 'of online experiences start with a search engine' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-primary to-green-600 rounded-2xl text-white">
                <div className="text-5xl font-extrabold mb-2">{item.stat}</div>
                <p className="text-white/90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative ${
                  pkg.badge ? 'border-primary' : 'border-border/40'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    ✨ {pkg.badge} ✨
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
                        <span className="text-muted-foreground">/ {pkg.period}</span>
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
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss which SEO package is right for your business and start driving organic traffic today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-lg px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/services/seo-in-nepal">Learn More About SEO</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
