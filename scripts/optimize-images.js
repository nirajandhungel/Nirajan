/**
 * Image Optimization Script
 * Converts all JPG/PNG images to WebP and AVIF formats
 * Requires: sharp package (already in devDependencies)
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

// Ensure optimized directory exists
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Images to optimize (large files that need conversion)
const IMAGES_TO_OPTIMIZE = [
  { input: 'anime-bg.jpg', quality: 80 },
  { input: 'hero-bg-black.jpg', quality: 85 },
  { input: 'hero-bg-image.jpg', quality: 85, priority: true }, // LCP image
  { input: 'nirajan-sketch-v22.png', quality: 90 },
  { input: 'favicon.png', quality: 90, resize: { width: 512 } },
  { input: 'nirajandhungel.jpeg', quality: 85 },
  { input: 'nirajandhungel2.jpeg', quality: 85 },
  { input: 'nirajandhungel3.png', quality: 90 },
  { input: 'kathmandu-youth-conclave.jpeg', quality: 85 },
  { input: 'tlr.png', quality: 85 },
];

async function optimizeImage(imageConfig) {
  const { input, quality = 80, resize, priority = false } = imageConfig;
  const inputPath = path.join(PUBLIC_DIR, input);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${input} - file not found`);
    return;
  }

  const ext = path.extname(input);
  const basename = path.basename(input, ext);
  const outputBase = path.join(OPTIMIZED_DIR, basename);

  console.log(`\n🖼️  Optimizing: ${input}`);

  try {
    let pipeline = sharp(inputPath);

    // Apply resize if specified
    if (resize) {
      pipeline = pipeline.resize(resize);
    }

    // Get original size
    const originalStats = fs.statSync(inputPath);
    const originalSize = (originalStats.size / 1024).toFixed(2);

    // Generate WebP
    await pipeline
      .clone()
      .webp({ quality, effort: 6 })
      .toFile(`${outputBase}.webp`);
    
    const webpStats = fs.statSync(`${outputBase}.webp`);
    const webpSize = (webpStats.size / 1024).toFixed(2);
    const webpSavings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`  ✅ WebP: ${originalSize}KB → ${webpSize}KB (${webpSavings}% smaller)`);

    // Generate AVIF (better compression, newer format)
    await pipeline
      .clone()
      .avif({ quality, effort: 6 })
      .toFile(`${outputBase}.avif`);
    
    const avifStats = fs.statSync(`${outputBase}.avif`);
    const avifSize = (avifStats.size / 1024).toFixed(2);
    const avifSavings = ((1 - avifStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`  ✅ AVIF: ${originalSize}KB → ${avifSize}KB (${avifSavings}% smaller)`);

    // Generate responsive sizes for priority images (LCP)
    if (priority) {
      const sizes = [640, 750, 828, 1080, 1200, 1920];
      
      for (const width of sizes) {
        await sharp(inputPath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 85, effort: 6 })
          .toFile(`${outputBase}-${width}w.webp`);
        
        console.log(`  ✅ Responsive: ${width}w.webp`);
      }
    }

  } catch (error) {
    console.error(`  ❌ Error optimizing ${input}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Input: ${PUBLIC_DIR}`);
  console.log(`📁 Output: ${OPTIMIZED_DIR}\n`);

  for (const imageConfig of IMAGES_TO_OPTIMIZE) {
    await optimizeImage(imageConfig);
  }

  console.log('\n✨ Image optimization complete!\n');
  console.log('📊 Summary:');
  console.log(`   - Optimized ${IMAGES_TO_OPTIMIZE.length} images`);
  console.log(`   - Generated WebP and AVIF formats`);
  console.log(`   - Created responsive sizes for LCP images`);
  console.log('\n💡 Next steps:');
  console.log('   1. Update image paths to use /optimized/ directory');
  console.log('   2. Implement <picture> elements with format fallbacks');
  console.log('   3. Test with Lighthouse to verify improvements\n');
}

// Run optimization
optimizeAllImages().catch(console.error);
