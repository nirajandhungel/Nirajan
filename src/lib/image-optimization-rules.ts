/**
 * ESLint Rules for Image Optimization
 * Enforces:
 * - No unoptimized image paths
 * - No direct <img> tags (use OptimizedImage)
 * - All images from /optimized directory
 * - Required alt text
 */

export const imageOptimizationRules = {
  'no-unoptimized-images': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Prevent using unoptimized images from public directory',
        category: 'Performance',
        recommended: true,
      },
      messages: {
        unoptimizedPath:
          'Image must be from /public/optimized/ directory. Found: "{{path}}". Run "npm run optimize:images" to generate optimized versions.',
        originalsPath:
          'Cannot reference /public/originals/ in production code. Image: "{{path}}". Use /public/optimized/ instead.',
      },
    },

    create(context: any) {
      return {
        // Check string literals that look like image paths
        Literal(node: any) {
          if (typeof node.value !== 'string') return;

          const value = node.value as string;

          // Skip non-image paths
          if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'].some(ext => value.includes(ext))) {
            return;
          }

          // Block /originals paths
          if (value.includes('/originals/')) {
            context.report({
              node,
              messageId: 'originalsPath',
              data: { path: value },
            });
            return;
          }

          // Allow optimized paths and data URLs
          if (value.startsWith('data:') || value.includes('/optimized/') || value.startsWith('http')) {
            return;
          }

          // Block other image paths in production files
          const filename = context.filename;
          if (!filename.includes('node_modules')) {
            context.report({
              node,
              messageId: 'unoptimizedPath',
              data: { path: value },
            });
          }
        },
      };
    },
  },

  'no-html-img-element': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Prevent using bare <img> tags - use OptimizedImage component',
        category: 'Performance',
        recommended: true,
      },
      messages: {
        useOptimizedImage:
          'Do not use <img> tags directly. Use OptimizedImage component from "@/components/OptimizedImage" for automatic WebP/AVIF format selection and responsive sizing.',
      },
    },

    create(context: any) {
      return {
        JSXOpeningElement(node: any) {
          // Check if it's an img element
          if (node.name.name === 'img') {
            context.report({
              node,
              messageId: 'useOptimizedImage',
            });
          }
        },
      };
    },
  },

  'require-image-alt': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Require alt text on all Image components',
        category: 'Accessibility',
        recommended: true,
      },
      messages: {
        missingAlt: 'Image component must have an alt prop with descriptive text for accessibility',
      },
    },

    create(context: any) {
      return {
        JSXOpeningElement(node: any) {
          if (node.name.name !== 'Image' && node.name.name !== 'OptimizedImage') return;

          const hasAlt = node.attributes.some((attr: any) => {
            if (attr.type === 'JSXAttribute' && attr.name.name === 'alt') {
              // Check that alt is not empty or just a variable
              return attr.value && attr.value.value && attr.value.value.trim().length > 0;
            }
            return false;
          });

          if (!hasAlt) {
            context.report({
              node,
              messageId: 'missingAlt',
            });
          }
        },
      };
    },
  },
};
