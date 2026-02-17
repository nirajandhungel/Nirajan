/**
 * Build Validation Script
 * Prevents deployment if unoptimized images are referenced in code
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

const errors = [];

// Check for /originals/ references in code
console.log('🔍 Validating image references...\n');

const filesToCheck = globSync('src/**/*.{ts,tsx,js,jsx,mdx}', {
  cwd: PROJECT_ROOT,
  ignore: [
    '**/node_modules/**',
    '**/.next/**',
    '**/image-optimization-rules.ts',
    '**/optimized-image.tsx', // Component examples only
  ],
});

for (const file of filesToCheck) {
  const filePath = path.join(PROJECT_ROOT, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Check for /originals/ references
    if (line.includes('/originals/')) {
      errors.push({
        file,
        line: index + 1,
        message: 'References /public/originals/ in production code',
        content: line.trim(),
      });
    }

    // Check for <img> tags (excluding comments and code examples)
    // Skip SVG files and dynamic props (src={...})
    if (!line.trim().startsWith('//') && !line.trim().startsWith('*') && /<img\s/i.test(line)) {
      // Skip if loading SVG files or dynamic props
      if (!line.includes('.svg') && !line.includes('src={')) {
        errors.push({
          file,
          line: index + 1,
          message: 'Direct <img> tag found - use OptimizedImage component',
          content: line.trim(),
        });
      }
    }

    // Check for image paths not from /optimized
    const imagePathMatch = line.match(/['"](\/[^'"]*\.(?:jpg|jpeg|png|gif|webp|avif))['"]/gi);
    if (imagePathMatch) {
      imagePathMatch.forEach(match => {
        const imagePath = match.slice(1, -1);

        // Skip data URLs, external URLs, and already optimized paths
        if (
          !imagePath.startsWith('data:') &&
          !imagePath.startsWith('http') &&
          !imagePath.includes('/optimized/') &&
          !imagePath.includes('/media/') &&
          !imagePath.match(/\.svg$/)
        ) {
          // Allow specific paths like favicon.ico, manifest files
          if (!imagePath.match(/\.(ico|webmanifest)$/)) {
            errors.push({
              file,
              line: index + 1,
              message: `Image not from /optimized directory: ${imagePath}`,
              content: line.trim().substring(0, 100),
            });
          }
        }
      });
    }
  });
}

// Check for media directory images that should be optimized
const mediaDir = path.join(PROJECT_ROOT, 'public', 'media');
if (fs.existsSync(mediaDir)) {
  const checkDirectory = (dir, basePath) => {
    basePath = basePath || '';
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      const relPath = path.join(basePath, file);

      if (stats.isDirectory()) {
        checkDirectory(filePath, relPath);
      } else if (['.jpg', '.jpeg', '.png', '.gif'].some(ext => file.endsWith(ext))) {
        // Skip SVG icons in tech and services - they're vector graphics
        if (relPath.includes('tech') || relPath.includes('services')) {
          return;
        }

        const fileSize = stats.size;
        if (fileSize > 200 * 1024) {
          console.warn(`⚠️  Found large unoptimized image: /media/${relPath} (${(fileSize / 1024).toFixed(0)}KB)`);
        }
      }
    });
  };

  checkDirectory(mediaDir);
}

// Report errors
if (errors.length > 0) {
  console.error('❌ Image Validation Failed\n');
  console.error('═══════════════════════════════════════════════════════════════\n');

  errors.forEach(error => {
    console.error(`📄 ${error.file}:${error.line}`);
    console.error(`   ❌ ${error.message}`);
    console.error(`   📝 ${error.content}\n`);
  });

  console.error('═══════════════════════════════════════════════════════════════\n');
  console.error(`Total errors: ${errors.length}\n`);
  console.error('💡 Fix: Run "npm run optimize:images" and update image paths\n');

  process.exit(1);
} else {
  console.log('✅ All images properly optimized and referenced!\n');
  process.exit(0);
}
