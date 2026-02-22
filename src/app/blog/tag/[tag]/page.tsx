// ─── Tag Page ─────────────────────────────────────────────────────────────────
// app/blogs/tag/[tag]/page.tsx — Editorial warm palette, light mode only.

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Tag as TagIcon } from 'lucide-react';
import { getAllTags, getPostsByTag, getTagsWithCount } from '@/lib/mdx';
import { BlogCard } from '@/components/blog/BlogCard';
import { TagCloud } from '@/components/blog/TagCloud';
import { buildBlogTagMetadata, buildBlogTagItemListJsonLd } from '@/lib/blog-seo';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);
  return buildBlogTagMetadata(decoded, tag, posts.length);
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);
  const allTags = getTagsWithCount();
  const tagListJsonLd = buildBlogTagItemListJsonLd(decoded, tag, posts);

  return (
    <div className="min-h-screen" style={{ background: 'var(--blog-bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tagListJsonLd) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header
        style={{
          background: 'var(--blog-bg-card)',
          borderBottom: '1px solid var(--blog-border)',
        }}
      >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: 'var(--blog-text-soft)' }}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All posts
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--blog-accent-soft)' }}
            >
              <TagIcon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--blog-accent)' }} aria-hidden="true" />
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-lora), 'Lora', Georgia, serif", color: 'var(--blog-text)' }}
            >
              #{decoded}
            </h1>
          </div>
          <p className="text-sm sm:text-base ml-[52px] sm:ml-[60px]" style={{ color: 'var(--blog-text-soft)' }}>
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

          {/* Posts */}
          <main className="flex-1 min-w-0">
            {posts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-4xl mb-4">🏷️</p>
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--blog-text)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
                >
                  No articles yet
                </h2>
                <p className="text-sm mb-6" style={{ color: 'var(--blog-text-soft)' }}>
                  Nothing tagged with &ldquo;{decoded}&rdquo; yet.
                </p>
                <Link
                  href="/blog"
                  className="inline-block px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition-colors"
                  style={{ background: 'var(--blog-accent)' }}
                >
                  Browse all posts
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} activeTag={decoded} />
                ))}
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block w-52 xl:w-60 flex-shrink-0">
            <div className="sticky top-24">
              <TagCloud tags={allTags} activeTag={decoded} title="All Topics" />
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile tag strip */}
      <section
        className="lg:hidden py-8 mt-4"
        style={{ borderTop: '1px solid var(--blog-border)', background: 'var(--blog-bg-card)' }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <TagCloud tags={allTags} activeTag={decoded} title="All Topics" />
        </div>
      </section>
    </div>
  );
}