'use client'

import React, { Suspense, lazy } from 'react';
import { Check, X, Search, TrendingUp, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Skeleton loader for better perceived performance
const StatsSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 animate-pulse">
    {[1, 2, 3].map((i) => (
      <div key={i} className="h-32 md:h-40 bg-primary/20 rounded-2xl" />
    ))}
  </div>
);

// Package data structure remains the same
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

// Memoized benefit card component for performance
const BenefitCard = React.memo(({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-[#fafafa] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-border/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 text-primary rounded-xl md:rounded-2xl mb-3 md:mb-4">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 md:mb-3">{title}</h3>
    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{description}</p>
  </div>
));

BenefitCard.displayName = 'BenefitCard';

// Memoized stat card component
const StatCard = React.memo(({ stat, label }: { stat: string; label: string }) => (
  <div className="text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary to-green-600 rounded-xl md:rounded-2xl text-white">
    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 md:mb-2">{stat}</div>
    <p className="text-white/90 text-xs sm:text-sm md:text-base">{label}</p>
  </div>
));

StatCard.displayName = 'StatCard';

// Memoized package card component
const PackageCard = React.memo(({ pkg, index }: { pkg: typeof seoPackages[0]; index: number }) => (
  <div
    className={`bg-white rounded-2xl md:rounded-3xl p-4 mt-5 sm:p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative ${
      pkg.badge ? 'border-primary' : 'border-border/40'
    }`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {pkg.badge && (
      <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2 whitespace-nowrap">
        ✨ {pkg.badge} ✨
      </div>
    )}

    <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-4">
      <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-1 sm:mb-2">{pkg.name}</h3>
      <div className="mb-3 sm:mb-4">
        {pkg.price === 'Contact Sales' ? (
          <div className="text-xl sm:text-2xl font-bold text-primary">Contact Sales</div>
        ) : (
          <div>
            <span className="text-xs sm:text-sm text-muted-foreground">Rs </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">{pkg.price}</span>
            <span className="text-xs sm:text-sm text-muted-foreground">/ {pkg.period}</span>
          </div>
        )}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground">{pkg.description}</p>
    </div>

    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-h-[400px] sm:max-h-[500px] overflow-y-auto custom-scrollbar">
      {Object.entries(pkg.features).map(([category, features]) => (
        <div key={category}>
          <h4 className="font-bold text-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 border-b pb-1 sticky top-0 bg-white z-10">{category}</h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {Object.entries(features as Record<string, boolean>).map(([feature, included]) => (
              <li key={feature} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                {included ? (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                ) : (
                  <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 shrink-0 mt-0.5" />
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
      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 sm:py-5 md:py-6 font-bold text-sm sm:text-base"
      asChild
    >
      <Link href="/contact">
        {pkg.price === 'Contact Sales' ? 'Contact Us' : 'Get Started'}
      </Link>
    </Button>
  </div>
));

PackageCard.displayName = 'PackageCard';

export default function SEOPricingPage() {
  const benefits = [
    {
      icon: <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: 'Increased Visibility',
      description: '75% of users never scroll past the first page of search results. SEO helps you rank higher.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: 'Organic Traffic Growth',
      description: 'SEO drives 1000%+ more traffic than organic social media. Get sustainable, long-term results.',
    },
    {
      icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: 'Better ROI',
      description: 'SEO has a close rate of 14.6% compared to 1.7% for outbound marketing. Higher conversion rates.',
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: 'Build Credibility',
      description: 'Top rankings signal trust and authority. 70% of marketers see SEO as more effective than PPC.',
    },
  ];

  const stats = [
    { stat: '68%', label: 'of online experiences begin with a search engine' },
    { stat: '53%', label: 'of all website traffic comes from organic search' },
    { stat: '93%', label: 'of online experiences start with a search engine' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4">
            Subscription Plan
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">
            SEO Services & <span className="text-primary">Packages in Kathmandu, Nepal</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Boost your online visibility and drive organic traffic with our comprehensive SEO packages
          </p>
        </div>
      </section>

      {/* Why SEO is Important - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 px-4">
              Why <span className="text-primary">SEO</span> is Important?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Search Engine Optimization is crucial for your business growth in the digital age
            </p>
          </div>

          {/* Benefits Grid - Mobile first */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </div>

          {/* SEO Stats - Mobile optimized */}
          <Suspense fallback={<StatsSkeleton />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {stats.map((item, idx) => (
                <StatCard key={idx} {...item} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Pricing Packages - Mobile optimized with horizontal scroll on small screens */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 sm:mb-4">
              Choose Your Plan
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Select the perfect package for your business needs
            </p>
          </div>

          {/* Mobile: Horizontal scroll, Tablet+: Grid */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 sm:gap-6" style={{ minWidth: 'min-content' }}>
              {seoPackages.map((pkg, idx) => (
                <div key={idx} className="w-[280px] sm:w-[320px] flex-shrink-0">
                  <PackageCard pkg={pkg} index={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {seoPackages.map((pkg, idx) => (
              <PackageCard key={idx} pkg={pkg} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-4">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
            Let's discuss which SEO package is right for your business and start driving organic traffic today!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/80 rounded-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold"
              asChild
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-black border-black text-white hover:bg-black/60 rounded-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold"
              asChild
            >
              <Link href="/services/seo-in-nepal">Learn More About SEO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom scrollbar styles for package features */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3bb54a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2d9137;
        }
      `}</style>
    </div>
  );
}