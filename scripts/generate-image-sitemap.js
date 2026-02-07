// scripts/generate-image-sitemap.js
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')

const SITE_URL = 'https://nirajandhungel.com.np'

const images = [
  {
    loc: `${SITE_URL}/nirajandhungel.jpeg`,
    caption: 'Nirajan Dhungel - Best Software Engineer and Web Developer in Kathmandu, Nepal',
    title: 'Nirajan Dhungel',
  },
  {
    loc: `${SITE_URL}/nirajandhungel2.jpeg`,
    caption: 'Nirajan Dhungel - Full Stack Developer and SEO Expert Portfolio',
    title: 'Nirajan Dhungel Portfolio',
  },
  {
    loc: `${SITE_URL}/nirajandhungel3.png`,
    caption: 'Nirajan Dhungel - Expert in Next.js, React, and Modern Web Technologies',
    title: 'Nirajan Dhungel Developer Profile',
  },
  {
    loc: `${SITE_URL}/kathmandu-youth-conclave.jpeg`,
    caption: 'Nirajan Dhungel participating in Kathmandu Youth Conclave',
    title: 'Nirajan Dhungel - Kathmandu Youth Conclave',
  },
  // Add favicons and other important images
  {
    loc: `${SITE_URL}/favicon.png`,
    title: 'Nirajan Dhungel Favicon',
  },
  {
    loc: `${SITE_URL}/android-chrome-192x192.png`,
    title: 'Nirajan Dhungel PWA Icon 192x192',
  },
  {
    loc: `${SITE_URL}/android-chrome-512x512.png`,
    title: 'Nirajan Dhungel PWA Icon 512x512',
  },
]

function generateImageSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n'
  
  // Main page with images
  xml += '  <url>\n'
  xml += `    <loc>${SITE_URL}</loc>\n`
  xml += '    <lastmod>' + new Date().toISOString() + '</lastmod>\n'
  xml += '    <changefreq>daily</changefreq>\n'
  xml += '    <priority>1.0</priority>\n'
  
  images.forEach(image => {
    xml += '    <image:image>\n'
    xml += `      <image:loc>${image.loc}</image:loc>\n`
    if (image.caption) {
      // Escape XML entities
      const escapedCaption = image.caption
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
      xml += `      <image:caption>${escapedCaption}</image:caption>\n`
    }
    if (image.title) {
      const escapedTitle = image.title
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
      xml += `      <image:title>${escapedTitle}</image:title>\n`
    }
    xml += '    </image:image>\n'
  })
  
  xml += '  </url>\n'
  xml += '</urlset>'

  // Ensure public directory exists
  const publicDir = join(process.cwd(), 'public')
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true })
  }

  writeFileSync(join(publicDir, 'sitemap-images.xml'), xml)
  console.log('✅ Image sitemap generated: public/sitemap-images.xml')
}

generateImageSitemap()