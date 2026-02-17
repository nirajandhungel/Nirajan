import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Image optimization enforcement
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSXOpeningElement[name.name="img"]',
          message:
            'Do not use <img> tags. Use OptimizedImage component from "@/components/OptimizedImage" for WebP/AVIF format selection.',
        },
      ],
    },
  },
  {
    files: ['src/**/*.{tsx,ts}', '!**/*.test.{ts,tsx}', '!**/node_modules/**'],
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];

export default eslintConfig;
