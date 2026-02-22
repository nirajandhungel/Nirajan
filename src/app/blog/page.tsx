// ─── Blog Listing Page ────────────────────────────────────────────────────────
// app/blogs/page.tsx
// Supports: ?page=N  ?q=search  (server-rendered)

import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { getAllBlogPosts, getPaginatedPosts, getTagsWithCount, searchPosts } from '@/lib/mdx';
import { BlogCard } from '@/components/blog/BlogCard';
import { Pagination } from '@/components/blog/Pagination';
import { TagCloud } from '@/components/blog/TagCloud';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { buildBlogListJsonLd } from '@/utils/seo';
import { buildBlogListingMetadata } from '@/lib/blog-seo';
import { Rss } from 'lucide-react';
import { CALENDLY } from '@/data/contact';

const PER_PAGE = 9;

export const metadata: Metadata = buildBlogListingMetadata();

interface BlogPageProps {
  searchParams: Promise<{ page?: string; q?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam, q } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10));
  const query = q?.trim() ?? '';

  // Search or paginate
  const sourcePool = query ? searchPosts(query) : getAllBlogPosts();
  const { posts, totalPages, totalPosts } = getPaginatedPosts(currentPage, PER_PAGE, sourcePool);
  const featured = !query && currentPage === 1 ? posts[0] : null;
  const grid = !query && currentPage === 1 ? posts.slice(1) : posts;

  const tags = getTagsWithCount();
  const jsonLd = buildBlogListJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen" style={{ background: 'var(--blog-bg)' }}>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <header
          className="border-b"
          style={{ background: 'var(--blog-bg-card)', borderColor: 'var(--blog-border)' }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 max-w-6xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                  style={{ color: 'var(--blog-accent)' }}
                >
                  The Blog
                </p>
                <h1 className="blog-page-title">Insights &amp; Ideas</h1>
                <p
                  className="mt-4 text-base sm:text-lg leading-relaxed max-w-lg"
                  style={{ color: 'var(--blog-text-muted)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
                >
                  Practical writing on web development, SEO, and digital craft — from real projects.
                </p>
              </div>
              <Link
                href="/rss.xml"
                aria-label="RSS Feed"
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[var(--blog-accent-soft)]"
                style={{ border: '1px solid var(--blog-border-subtle)', color: 'var(--blog-text-soft)' }}
              >
                <Rss className="w-4 h-4" aria-hidden="true" />
                RSS
              </Link>
            </div>

            {/* Search */}
            <Suspense>
              <BlogSearch className="mt-7 max-w-sm sm:max-w-md" />
            </Suspense>
          </div>
        </header>

        {/* ── Main content ───────────────────────────────────────────────── */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
            {/* ── Article grid ─────────────────────────────────────────── */}
            <main className="flex-1 min-w-0">
              {query && (
                <p className="mb-7 text-sm" style={{ color: 'var(--blog-text-soft)' }}>
                  {totalPosts} result{totalPosts !== 1 ? 's' : ''} for{' '}
                  <strong style={{ color: 'var(--blog-text)' }}>&ldquo;{query}&rdquo;</strong>
                </p>
              )}

              {posts.length === 0 ? (
                <EmptyState query={query} />
              ) : (
                <>
                  {/* Featured post — only page 1, no search */}
                  {featured && (
                    <div className="mb-8 sm:mb-10">
                      <BlogCard post={featured} featured />
                    </div>
                  )}

                  {/* Post grid */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                    {grid.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    basePath="/blog"
                  />
                </>
              )}
            </main>

            {/* ── Sidebar ──────────────────────────────────────────────── */}
            <aside className="hidden lg:block w-52 xl:w-60 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                <TagCloud tags={tags} title="Browse by Topic" />

                {/* Newsletter CTA */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: 'var(--blog-bg-card)', border: '1px solid var(--blog-border)' }}
                >
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3"
                    style={{ color: 'var(--blog-text-faint)' }}
                  >
                    Stay Updated
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--blog-text-muted)' }}
                  >
                    New articles on web dev, SEO, and digital craft — straight to your inbox.
                  </p>
                  <a
                    href={CALENDLY.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2.5 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                    style={{ background: 'var(--blog-accent)' }}
                  >
                    Book Free Strategy Call
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Mobile tag strip ───────────────────────────────────────────── */}
        <section
          className="lg:hidden py-8 mt-4"
          style={{ borderTop: '1px solid var(--blog-border)', background: 'var(--blog-bg-card)' }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <TagCloud tags={tags} title="Browse by Topic" />
          </div>
        </section>
      </div>

      <style>{`
        .blog-page-title {
          font-family: var(--font-lora), 'Lora', Georgia, 'Times New Roman', serif;
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 700;
          color: var(--blog-text);
          line-height: 1.18;
          letter-spacing: -0.02em;
        }
      `}</style>
    </>
  );
}

// ─── Empty state ─────────────────────────────────────────────────────────────

function EmptyState({ query }: { query: string }) {
  return (
    <div className="py-16 sm:py-20 text-center">
      <p className="text-4xl mb-4" aria-hidden="true">📝</p>
      <h2
        className="text-xl font-bold mb-2"
        style={{ color: 'var(--blog-text)', fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
      >
        {query ? 'No articles found' : 'No posts yet'}
      </h2>
      <p className="text-sm mb-6 px-4" style={{ color: 'var(--blog-text-soft)' }}>
        {query
          ? `Nothing matched "${query}". Try a different search.`
          : 'Check back soon — new content is coming!'}
      </p>
      {query && (
        <Link
          href="/blog"
          className="inline-block px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
          style={{ background: 'var(--blog-accent)' }}
        >
          Clear search
        </Link>
      )}
    </div>
  );
}