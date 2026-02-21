'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  activeTag?: string;
  theme?: 'light' | 'dark';
}

export function BlogCard({ post, featured = false, activeTag, theme = 'light' }: BlogCardProps) {
  const { frontmatter, slug, readingTime } = post;
  
  const isDark = theme === 'dark';
  const cardStyle = {
    background: isDark ? '#0a0a0a' : 'var(--blog-bg-card)',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'var(--blog-border)',
    borderWidth: '1px',
    borderRadius: '12px',
    boxShadow: isDark ? 'none' : 'var(--blog-shadow)',
  };
  const textColor = isDark ? '#ffffff' : 'var(--blog-text)';
  const textMuted = isDark ? 'rgba(255, 255, 255, 0.6)' : 'var(--blog-text-muted)';
  const textFaint = isDark ? 'rgba(255, 255, 255, 0.4)' : 'var(--blog-text-faint)';
  const tagBgClass = isDark ? 'bg-white/5 border border-white/10' : '';
  const tagBgStyle = isDark ? {} : { background: 'var(--blog-accent-soft)' };
  const tagTextColor = isDark ? 'text-white hover:text-[var(--blog-accent)] border-white/10' : 'text-[var(--blog-accent)]';

  if (featured) {
    return (
      <article
        className="flex flex-col overflow-hidden sm:flex-row transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-[var(--blog-accent)]/30 group"
        style={cardStyle}
      >
        <Link
          href={`/blog/${slug}`}
          aria-label={`Read: ${frontmatter.title}`}
          className="relative block w-full flex-shrink-0 sm:w-72 xl:w-80"
          style={{ minHeight: '220px' }}
        >
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 320px"
          />
        </Link>

        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 lg:p-8">
          <TagList tags={frontmatter.tags} activeTag={activeTag} limit={3} isDark={isDark} />

          <Link href={`/blog/${slug}`} className="mt-3 block">
            <h2
              className="font-sans normal-case tracking-normal text-xl font-semibold leading-tight sm:text-2xl line-clamp-2 transition-colors"
               style={{ color: textColor }}
            >
              <span className="hover:text-[var(--blog-accent)] transition-colors">{frontmatter.title}</span>
            </h2>
          </Link>

          <p
            className="mt-3 line-clamp-3 text-sm leading-relaxed sm:text-base"
            style={{ color: textMuted }}
          >
            {frontmatter.description}
          </p>

          <PostMeta
            author={frontmatter.author}
            date={frontmatter.date}
            readingTime={readingTime}
            className="mt-5"
            textColor={textFaint}
          />
        </div>
      </article>
    );
  }

  return (
    <article
      className="flex h-full flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-[var(--blog-accent)]/30 group"
      style={cardStyle}
    >
      <Link
        href={`/blog/${slug}`}
        aria-label={`Read: ${frontmatter.title}`}
        className="relative block flex-shrink-0"
        style={{ height: '180px' }}
      >
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <TagList tags={frontmatter.tags} activeTag={activeTag} limit={2} isDark={isDark} />

        <Link href={`/blog/${slug}`} className="mt-2 flex-1">
          <h2
            className="font-sans normal-case tracking-normal text-lg font-semibold leading-snug sm:text-xl line-clamp-2 transition-colors"
            style={{ color: textColor }}
          >
            <span className="hover:text-[var(--blog-accent)] transition-colors">{frontmatter.title}</span>
          </h2>
          <p
            className="mt-2 line-clamp-2 text-sm leading-relaxed"
            style={{ color: textMuted }}
          >
            {frontmatter.description}
          </p>
        </Link>

        <PostMeta
          author={frontmatter.author}
          date={frontmatter.date}
          readingTime={readingTime}
          className="mt-4"
          textColor={textFaint}
        />
      </div>
    </article>
  );
}

function TagList({
  tags,
  activeTag,
  limit = 2,
  isDark = false,
}: {
  tags?: string[];
  activeTag?: string;
  limit?: number;
  isDark?: boolean;
}) {
  if (!tags?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.slice(0, limit).map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${encodeURIComponent(tag)}`}
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
            isDark ? 'bg-white/5 border border-white/10 hover:border-[var(--blog-accent)] text-white/80' : ''
          }`}
          style={
            !isDark 
              ? tag === activeTag
                ? { background: 'var(--blog-accent)', color: '#fff' }
                : { background: 'var(--blog-accent-soft)', color: 'var(--blog-accent)' }
              : tag === activeTag
                ? { background: 'var(--blog-accent)', borderColor: 'var(--blog-accent)', color: '#fff' }
                : {}
          }
          onClick={(e) => e.stopPropagation()}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}

function PostMeta({
  author,
  date,
  readingTime,
  className = '',
  textColor = 'var(--blog-text-faint)',
}: {
  author: string;
  date: string;
  readingTime: string;
  className?: string;
  textColor?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${className}`}
      style={{ color: textColor }}
    >
      <span className="flex items-center gap-1">
        <User className="h-3.5 w-3.5" aria-hidden />
        <span>{author}</span>
      </span>
      <span aria-hidden>·</span>
      <time dateTime={new Date(date).toISOString()} className="flex items-center gap-1">
        <Calendar className="h-3.5 w-3.5" aria-hidden />
        {formatDate(date, { year: 'numeric', month: 'short', day: 'numeric' })}
      </time>
      <span aria-hidden>·</span>
      <span className="flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" aria-hidden />
        {readingTime}
      </span>
    </div>
  );
}
