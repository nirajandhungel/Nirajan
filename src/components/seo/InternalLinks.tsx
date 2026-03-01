import Link from 'next/link';

/**
 * SEO-Optimized Internal Linking Component
 * Implements contextual internal links with target keywords for better SEO
 */

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  keywords?: string[];
}

export function SEOInternalLink({ href, children, className = '', keywords = [] }: InternalLinkProps) {
  return (
    <Link 
      href={href} 
      className={`text-primary hover:text-primary-light transition-colors underline decoration-primary/30 hover:decoration-primary ${className}`}
      title={keywords.join(', ')}
    >
      {children}
    </Link>
  );
}

/**
 * Predefined contextual internal links for the site
 */

export const InternalLinks = {
  // Homepage → About
  HomeToAbout: () => (
    <SEOInternalLink 
      href="/about"
      keywords={['Nirajan Dhungel', 'Software Engineer', 'Kathmandu', 'Full Stack Developer']}
    >
      Learn about Nirajan Dhungel, a Software Engineer from Kathmandu specializing in full-stack development
    </SEOInternalLink>
  ),

  // About → Work
  AboutToWork: () => (
    <SEOInternalLink 
      href="/work"
      keywords={['Portfolio', 'Web Developer', 'Nepal', 'Projects']}
    >
      View projects by this Full Stack Developer in Nepal
    </SEOInternalLink>
  ),

  // Pricing → Packages
  PricingToPackages: () => (
    <SEOInternalLink 
      href="/pricing/web-design"
      keywords={['Web Development Packages', 'Nepal', 'Pricing']}
    >
      See detailed web development packages and pricing
    </SEOInternalLink>
  ),

  // Team → About
  TeamToAbout: () => (
    <SEOInternalLink 
      href="/about"
      keywords={['Nirajan Dhungel', 'Lead Developer', 'Software Engineer']}
    >
      Meet Nirajan Dhungel, Lead Developer and Software Engineer
    </SEOInternalLink>
  ),

  // Work → Pricing
  WorkToPricing: () => (
    <SEOInternalLink 
      href="/pricing"
      keywords={['Development Pricing', 'Web Development', 'Nepal']}
    >
      Get similar results - check our development pricing
    </SEOInternalLink>
  ),

  // Homepage → Services
  HomeToServices: () => (
    <SEOInternalLink 
      href="/services/website-development-in-nepal"
      keywords={['Website Development', 'Nepal', 'Web Services']}
    >
      Explore professional website development services in Nepal
    </SEOInternalLink>
  ),

  // About → Contact
  AboutToContact: () => (
    <SEOInternalLink 
      href="/contact"
      keywords={['Contact', 'Software Engineer', 'Kathmandu']}
    >
      Contact Nirajan Dhungel for your next project
    </SEOInternalLink>
  ),

  // Work → Contact
  WorkToContact: () => (
    <SEOInternalLink 
      href="/contact"
      keywords={['Hire Developer', 'Web Development', 'Nepal']}
    >
      Hire an expert web developer in Nepal
    </SEOInternalLink>
  ),
};

/**
 * Breadcrumb Component with Schema.org markup
 */

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.nirajandhungel.com.np${item.href}`
    }))
  };

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span className="text-border">/</span>}
              {index === items.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Pillar-Cluster Content Linking
 * Homepage as pillar, other pages as clusters
 */

export function PillarClusterLinks() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      <div className="card-cinematic p-6">
        <h3 className="text-xl font-bold mb-3 text-heading-gold">About</h3>
        <p className="text-muted-foreground mb-4">
          Discover the expertise and experience of a professional software engineer in Kathmandu.
        </p>
        <InternalLinks.HomeToAbout />
      </div>

      <div className="card-cinematic p-6">
        <h3 className="text-xl font-bold mb-3 text-heading-gold">Portfolio</h3>
        <p className="text-muted-foreground mb-4">
          Explore successful web development projects delivered to clients worldwide.
        </p>
        <InternalLinks.AboutToWork />
      </div>

      <div className="card-cinematic p-6">
        <h3 className="text-xl font-bold mb-3 text-heading-gold">Services</h3>
        <p className="text-muted-foreground mb-4">
          Professional website development, mobile apps, and SEO services in Nepal.
        </p>
        <InternalLinks.HomeToServices />
      </div>
    </div>
  );
}
