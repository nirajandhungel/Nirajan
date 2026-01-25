/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nirajandhungel.com.np',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  autoLastmod: true,
  sitemapSize: 5000,
  
  // SEO-optimized priorities and change frequencies
  changefreq: 'weekly',
  priority: 0.7,
  
  // Custom priorities for important pages
  transform: async (config, path) => {
    // High priority for main pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
    
    if (path === '/about' || path === '/contact') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
    
    if (path.startsWith('/services/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.95,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
    
    if (path === '/projects') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
    
    // Default for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  
  // Exclude unnecessary pages from sitemap
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  
  // Enhanced robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add image sitemap if needed in the future
      // 'https://nirajandhungel.com.np/image-sitemap.xml',
    ],
  },
};
