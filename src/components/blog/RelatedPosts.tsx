// ─── RelatedPosts ─────────────────────────────────────────────────────────────
// Editorial warm palette — light mode only.

import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section
      aria-label="Related articles"
      className="mt-16 pt-10"
      style={{ borderTop: '1px solid var(--blog-border)' }}
    >
      <h2
        className="text-xl sm:text-2xl font-bold mb-7"
        style={{ fontFamily: "var(--font-lora), 'Lora', Georgia, serif", color: 'var(--blog-text)' }}
      >
        Related Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex gap-4 rounded-xl p-4"
            style={{ background: 'var(--blog-bg-card)', border: '1px solid var(--blog-border)' }}
          >
            <Link
              href={`/blog/${post.slug}`}
              aria-label={post.frontmatter.title}
              className="relative size-[72px] flex-shrink-0 overflow-hidden rounded-lg"
            >
              <Image
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                fill
                className="object-cover"
                sizes="72px"
              />
            </Link>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <Link href={`/blog/${post.slug}`}>
                <h3
                  className="line-clamp-2 text-sm font-semibold leading-snug"
                  style={{ color: 'var(--blog-text)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
                >
                  {post.frontmatter.title}
                </h3>
              </Link>
              <p className="mt-1.5 text-xs flex items-center gap-1.5" style={{ color: 'var(--blog-text-faint)' }}>
                <time dateTime={new Date(post.frontmatter.date).toISOString()}>
                  {formatDate(post.frontmatter.date, { month: 'short', day: 'numeric', year: 'numeric' })}
                </time>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-0.5">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
