/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.nirajandhungel.com.np',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  autoLastmod: true,
  sitemapSize: 5000,
  trailingSlash: false,

  changefreq: 'weekly',
  priority: 0.7,

  // Transform function without images (we'll handle them separately)
  transform: async (config, path) => {
    const baseConfig = {
      loc: path,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }

    // High priority for main page
    if (path === '/') {
      return {
        ...baseConfig,
        changefreq: 'daily',
        priority: 1.0,
      }
    }

    if (path === '/about' || path === '/contact') {
      return {
        ...baseConfig,
        changefreq: 'weekly',
        priority: 0.9,
      }
    }

    if (path.startsWith('/services/')) {
      return {
        ...baseConfig,
        changefreq: 'weekly',
        priority: 0.95,
      }
    }

    if (path === '/projects') {
      return {
        ...baseConfig,
        changefreq: 'weekly',
        priority: 0.8,
      }
    }

    // Default for other pages
    return {
      ...baseConfig,
      changefreq: config.changefreq,
      priority: config.priority,
    }
  },

  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500',
    '/sitemap-images.xml',
  ],

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
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://www.nirajandhungel.com.np/sitemap-images.xml',
    ],
  },
}

export default config