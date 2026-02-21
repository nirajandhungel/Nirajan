import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';
import { DataTable } from './DataTable';

const BlogImage = ({ src, alt, width, height, caption, ...props }: Record<string, unknown>) => {
  const displayCaption = (caption as string) || (alt as string);
  return (
    <figure className="my-8">
      <div
        className="overflow-hidden rounded-xl border"
        style={{
          borderColor: 'var(--blog-border)',
          boxShadow: 'var(--blog-shadow)',
        }}
      >
        <Image
          src={(src as string) || ''}
          alt={(alt as string) || ''}
          width={(width as number) || 1200}
          height={(height as number) || 630}
          className="h-auto w-full object-cover"
          {...(props as object)}
        />
      </div>
      {displayCaption && (
        <figcaption
          className="mt-2.5 text-center text-sm italic"
          style={{ color: 'var(--blog-text-soft)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
        >
          {displayCaption}
        </figcaption>
      )}
    </figure>
  );
};

export const mdxComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mb-4 mt-10 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
      style={{
        fontFamily: "var(--font-lora), 'Lora', Georgia, serif",
        color: 'var(--blog-text)',
      }}
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mb-4 mt-10 border-b pb-2 text-2xl font-bold leading-tight sm:text-3xl"
      style={{
        fontFamily: "var(--font-lora), 'Lora', Georgia, serif",
        color: 'var(--blog-text)',
        borderColor: 'var(--blog-border)',
      }}
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mb-3 mt-8 text-xl font-bold leading-snug sm:text-2xl"
      style={{ fontFamily: "var(--font-lora), 'Lora', Georgia, serif", color: 'var(--blog-text)' }}
      {...props}
    >
      {children}
    </h3>
  ),

  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mb-2 mt-6 text-lg font-semibold"
      style={{
        fontFamily: "var(--font-lora), 'Lora', Georgia, serif",
        color: 'var(--blog-text-muted)',
      }}
      {...props}
    >
      {children}
    </h4>
  ),

  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-6 text-[1.0625rem] leading-[1.88]"
      style={{ color: 'var(--blog-text)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
      {...props}
    >
      {children}
    </p>
  ),

  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http');
    const linkStyle = { color: 'var(--blog-accent)' };
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href || '#'} style={linkStyle} {...props}>
        {children}
      </Link>
    );
  },

  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-none space-y-2" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-6 list-decimal space-y-2" style={{ ['--tw-prose-counters']: 'var(--blog-accent)' } as React.CSSProperties} {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="relative flex gap-3 pl-1 leading-relaxed" style={{ color: 'var(--blog-text)' }} {...props}>
      <span
        className="absolute left-[-1.25rem] top-[0.6em] block h-1.5 w-1.5 rounded-full"
        style={{ background: 'var(--blog-accent)' }}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  ),

  blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="relative my-8 overflow-hidden rounded-xl px-6 py-5 italic leading-relaxed"
      style={{
        background: 'var(--blog-accent-soft)',
        color: 'var(--blog-text-muted)',
        fontFamily: "var(--font-lora), 'Lora', Georgia, serif",
        border: '1px solid var(--blog-border-subtle)',
      }}
      {...props}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'var(--blog-accent)' }}
        aria-hidden
      />
      <div className="[&>p]:mb-0 [&>p]:text-[var(--blog-text-muted)]">{children}</div>
    </blockquote>
  ),

  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <CodeBlock {...props}>{children}</CodeBlock>
  ),

  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { className?: string }) => {
    if (className) {
      return <code className={className} {...props}>{children}</code>;
    }
    return (
      <code
        className="rounded px-1.5 py-0.5 font-mono text-[0.9em] font-medium"
        style={{
          background: 'var(--blog-accent-soft)',
          color: 'var(--blog-accent)',
          border: '1px solid var(--blog-border-subtle)',
        }}
        {...props}
      >
        {children}
      </code>
    );
  },

  img: BlogImage,
  Image: BlogImage,

  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className="my-12 mx-auto w-24"
      style={{ border: 'none', borderTop: '2px solid var(--blog-border)' }}
      {...props}
    />
  ),

  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div
      className="my-8 overflow-hidden rounded-xl"
      style={{
        border: '1px solid var(--blog-border)',
        boxShadow: 'var(--blog-shadow)',
        background: 'var(--blog-bg-card)',
      }}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm" {...props}>
          {children}
        </table>
      </div>
    </div>
  ),

  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead style={{ background: 'var(--blog-bg)', borderBottom: '1px solid var(--blog-border)' }} {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="whitespace-nowrap px-4 py-3 font-bold uppercase tracking-wider sm:px-5"
      style={{ color: 'var(--blog-text-muted)', fontFamily: 'var(--font-sans)' }}
      {...props}
    >
      {children}
    </th>
  ),

  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-[var(--blog-border-subtle)]" {...props}>
      {children}
    </tbody>
  ),

  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="px-4 py-3 align-top sm:px-5"
      style={{ color: 'var(--blog-text)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
      {...props}
    >
      {children}
    </td>
  ),

  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props}>{children}</tr>
  ),

  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold" style={{ color: 'var(--blog-text)' }} {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" style={{ color: 'var(--blog-text-muted)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }} {...props}>
      {children}
    </em>
  ),

  Callout,
  DataTable,

  // Internal linking for GSO — use in MDX: <InternalLink href="/services/seo-in-nepal">For help with this, see our SEO Audit services</InternalLink>
  InternalLink: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 mt-4 px-4 py-2.5 rounded-lg text-sm font-medium no-underline"
      style={{
        background: 'var(--blog-accent-soft)',
        color: 'var(--blog-accent)',
        border: '1px solid var(--blog-border)',
      }}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  ),
};
