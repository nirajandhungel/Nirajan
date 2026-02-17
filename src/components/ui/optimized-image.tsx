import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  /** Mark as LCP image for priority loading */
  isLCP?: boolean;
  /** Enable lazy loading (default: true for non-LCP images) */
  lazy?: boolean;
  /** Responsive sizes attribute */
  sizes?: string;
}

/**
 * Optimized Image Component for Core Web Vitals
 * 
 * Features:
 * - Automatic WebP/AVIF format selection
 * - Responsive srcset generation
 * - LCP optimization with fetchpriority="high"
 * - Lazy loading for below-fold images
 * - Proper sizing to prevent CLS
 * 
 * @example
 * // LCP Hero Image
 * <OptimizedImage
 *   src="/optimized/nirajan-sketch-v22.webp"
 *   alt="Hero"
 *   width={800}
 *   height={800}
 *   isLCP
 *   priority
 * />
 * 
 * // Regular Image
 * <OptimizedImage
 *   src="/optimized/project.webp"
 *   alt="Project"
 *   width={600}
 *   height={400}
 * />
 */
export function OptimizedImage({
  src,
  alt,
  isLCP = false,
  lazy = true,
  priority,
  sizes,
  ...props
}: OptimizedImageProps) {
  // Determine if we should use priority loading
  const shouldPrioritize = isLCP || priority;
  
  // Default responsive sizes if not provided
  const responsiveSizes = sizes || (
    isLCP
      ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px'
      : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  );

  return (
    <Image
      src={src}
      alt={alt}
      sizes={responsiveSizes}
      priority={shouldPrioritize}
      loading={shouldPrioritize ? 'eager' : lazy ? 'lazy' : 'eager'}
      // @ts-ignore - fetchPriority is the correct React prop
      fetchPriority={isLCP ? 'high' : 'auto'}
      quality={90}
      {...props}
    />
  );
}
