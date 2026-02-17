import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CodeBlock } from '@/components/blogs/CodeBlock';
import { Callout } from '@/components/blogs/Callout';

// Custom Image component with superior styling and captions
interface MDXImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  priority?: boolean;
}

function MDXImage({ src, alt, width, height, caption, priority = false, className, ...props }: MDXImageProps) {
  const imageWidth = width || 1200;
  const imageHeight = height || 675;

  return (
    <figure className={cn("my-10 w-full", className)}>
      <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-800">
        <Image
          src={src}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
            `<svg width="${imageWidth}" height="${imageHeight}" xmlns="http://www.w3.org/2000/svg"><rect width="${imageWidth}" height="${imageHeight}" fill="#eee"/></svg>`
          ).toString('base64')}`}
          {...props as any} 
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 font-medium italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Custom Link component with clean hover effects
function CustomLink({ href, children, ...props }: any) {
  const isExternal = href?.startsWith('http');
  const Component = isExternal ? 'a' : Link;

  return (
    <Component
      href={href || '#'}
      className="text-gray-900 dark:text-gray-100 underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4 decoration-2 hover:decoration-red-500 dark:hover:decoration-red-400 transition-colors duration-200"
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </Component>
  );
}

export const mdxComponents = {
  // Use custom CodeBlock for pre tags
  pre: CodeBlock,
  
  // Custom callout for info/warnings
  Callout,
  
  // Enhanced image
  Image: MDXImage,
  img: MDXImage,

  // Enhanced link
  a: CustomLink,

  // Typography overrides for specific tailoring
  // We rely on Tailwind Typography for most, but these allow fine-tuning
  h1: ({ className, ...props }: any) => (
    <h1 className={cn("mt-12 mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 scroll-m-20", className)} {...props} />
  ),
  h2: ({ className, ...props }: any) => (
    <h2 className={cn("mt-12 mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 scroll-m-20 border-b pb-2 border-gray-100 dark:border-gray-800", className)} {...props} />
  ),
  h3: ({ className, ...props }: any) => (
    <h3 className={cn("mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 scroll-m-20", className)} {...props} />
  ),
  h4: ({ className, ...props }: any) => (
    <h4 className={cn("mt-6 mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100 scroll-m-20", className)} {...props} />
  ),
  p: ({ className, ...props }: any) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6 text-gray-700 dark:text-gray-300 text-lg", className)} {...props} />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-gray-700 dark:text-gray-300", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 text-gray-700 dark:text-gray-300", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("leading-7", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote className={cn("mt-6 border-l-4 border-red-500 pl-6 italic text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/50 py-4 pr-4 rounded-r-lg", className)} {...props} />
  ),
  hr: ({ className, ...props }: any) => (
    <hr className={cn("my-12 border-gray-200 dark:border-gray-800", className)} {...props} />
  ),
  table: ({ className, ...props }: any) => (
    <div className="my-8 w-full overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-800">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: any) => (
    <th className={cn("border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100", className)} {...props} />
  ),
  td: ({ className, ...props }: any) => (
    <td className={cn("border-b border-gray-100 dark:border-gray-800/50 px-4 py-3 text-left text-gray-700 dark:text-gray-300", className)} {...props} />
  ),
};
