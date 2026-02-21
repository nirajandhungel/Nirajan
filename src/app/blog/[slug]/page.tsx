// ─── Dynamic Blog Post Page ───────────────────────────────────────────────────
// app/blogs/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import { ArrowLeft, ChevronRight } from 'lucide-react';

import { getBlogPost, getAllBlogPosts, getRelatedPosts } from '@/lib/mdx';
import { mdxComponents } from '@/components/blog/mdx-components';
import { AuthorInfo } from '@/components/blog/AuthorInfo';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { BlogProgress } from '@/components/blog/BlogProgress';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildPersonJsonLd, BASE_URL } from '@/utils/seo';

// ─── Static generation ────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const { frontmatter } = post;
  const ogImage = frontmatter.ogImage || frontmatter.coverImage;
  const imageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${BASE_URL}${ogImage}`;

  return {
    title: `${frontmatter.title} – Nirajan Dhungel`,
    description: frontmatter.description,
    keywords: frontmatter.tags,
    authors: [{ name: frontmatter.author ?? 'Nirajan Dhungel' }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${BASE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author ?? 'Nirajan Dhungel'],
      tags: frontmatter.tags,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: frontmatter.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: frontmatter.canonical ?? `${BASE_URL}/blog/${slug}`,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { frontmatter, content, readingTime } = post;
  const related = getRelatedPosts(slug, 3);

  const jsonLd = buildArticleJsonLd({
    title: frontmatter.title,
    description: frontmatter.description,
    coverImage: frontmatter.coverImage,
    date: frontmatter.date,
    slug,
    tags: frontmatter.tags,
    author: frontmatter.author,
  });

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: frontmatter.title, url: `${BASE_URL}/blog/${slug}` },
  ]);

  const personJsonLd = buildPersonJsonLd(frontmatter.author);

  return (
    <>
      {/* Structured data — Article, Person for GSO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      {/* Reading progress bar */}
      <BlogProgress />
      {/* Lead capture — exit intent / 50% scroll */}
      <LeadCaptureModal isBlogPost />

      <div className="min-h-screen" style={{ background: 'var(--blog-bg)' }}>
        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <div
          style={{
            background: 'var(--blog-bg-card)',
            borderBottom: '1px solid var(--blog-border)',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 max-w-6xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm flex-wrap" style={{ color: '#9a9390' }}>
                <li>
                  <Link href="/" className="hover:text-[var(--blog-accent)] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 flex-shrink-0" /></li>
                <li>
                  <Link href="/blog" className="hover:text-[var(--blog-accent)] transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 flex-shrink-0" /></li>
                <li>
                  <span
                    className="font-medium truncate max-w-[200px] sm:max-w-xs inline-block align-bottom"
                    style={{ color: 'var(--blog-text)' }}
                  >
                    {frontmatter.title}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Post header ──────────────────────────────────────────────── */}
        <header
          style={{
            background: 'var(--blog-bg-card)',
            borderBottom: '1px solid var(--blog-border)',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-12 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
              <div className="flex-1 min-w-0 max-w-3xl">
                {/* Tags */}
                {frontmatter.tags?.length > 0 && (
                  <div className="hidden sm:flex flex-wrap gap-2 mb-6" role="list" aria-label="Article tags">
                    {frontmatter.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag)}`}
                        role="listitem"
                        className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 hover:opacity-90"
                        style={{ background: 'var(--blog-accent-soft)', color: 'var(--blog-accent)' }}
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h1 className="blog-post-title">
                  {frontmatter.title}
                </h1>

                {/* Description */}
                {frontmatter.description && (
                  <p
                    className="mt-4 sm:mt-6 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8"
                    style={{
                      color: 'var(--blog-text-muted)',
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {frontmatter.description}
                  </p>
                )}

                {/* Author + meta */}
                <div
                  className="pb-8 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
                  style={{ borderBottom: '1px solid var(--blog-border)' }}
                >
                  <AuthorInfo
                    name={frontmatter.author ?? 'Nirajan Dhungel'}
                    date={frontmatter.date}
                    readingTime={readingTime}
                  />
                  <ShareButtons title={frontmatter.title} />
                </div>

                {/* Cover image */}
                <figure className="relative">
                  <div
                    className="relative w-full overflow-hidden rounded-2xl"
                    style={{
                      aspectRatio: '16/9',
                      boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                    }}
                  >
                    <Image
                      src={frontmatter.coverImage}
                      alt={`Cover image for: ${frontmatter.title}`}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 48rem"
                    />
                  </div>
                  {/* Subtle caption or attribution could go here if needed */}
                </figure>
              </div>

              {/* Spacer matching Sidebar TableOfContents */}
              <div className="hidden lg:block w-56 xl:w-60 flex-shrink-0" />
            </div>
          </div>
        </header>

        {/* ── Body layout ──────────────────────────────────────────────── */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-6xl">
          <div className="flex gap-12 xl:gap-16 items-start">

            {/* ── Article ────────────────────────────────────────────── */}
            <main className="flex-1 min-w-0 max-w-3xl">
              <TableOfContents mobile />

              <article
                id="article-content"
                aria-label={frontmatter.title}
                className="prose-blog"
              >
                <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
                />
              </article>

              {/* Related posts */}
              <RelatedPosts posts={related} />

              {/* Footer: back + share */}
              <footer
                className="mt-14 pt-8"
                style={{ borderTop: '1px solid var(--blog-border)' }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--blog-accent)]"
                    style={{ color: 'var(--blog-text-muted)' }}
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    Back to all posts
                  </Link>
                  <ShareButtons title={frontmatter.title} />
                </div>

                {/* Tags footer */}
                {frontmatter.tags?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 items-center">
                    <span
                      className="text-sm mr-1"
                      style={{ color: 'var(--blog-text-faint)' }}
                    >
                      Tagged in:
                    </span>
                    {frontmatter.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag)}`}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:opacity-90"
                        style={{
                          background: 'var(--blog-border-subtle)',
                          color: 'var(--blog-text-muted)',
                        }}
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}
              </footer>
            </main>

            {/* ── Sidebar ToC ──────────────────────────────────────── */}
            <aside className="hidden lg:block w-56 xl:w-60 flex-shrink-0" aria-label="Table of contents">
              <TableOfContents />
            </aside>

          </div>
        </div>
      </div>

      {/* ── Prose styles ─────────────────────────────────────────────────── */}
      <style>{`
        /* ── Blog post title ── */
        .blog-post-title {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--blog-text);
          line-height: 1.2;
          letter-spacing: -0.01em;
          text-transform: none;
        }

        /* ── Prose body ── */
        .prose-blog {
          color: var(--blog-text);
          font-size: 1.0625rem;
          line-height: 1.75;
          font-family: var(--font-lora), 'Lora', Georgia, 'Times New Roman', serif;
          max-width: none;
        }

        /* ── Headings ── */
        .prose-blog h1,
        .prose-blog h2,
        .prose-blog h3,
        .prose-blog h4 {
          font-family: var(--font-lora), 'Lora', Georgia, 'Times New Roman', serif;
          color: var(--blog-text);
          line-height: 1.28;
          font-weight: 700;
          letter-spacing: -0.015em;
          scroll-margin-top: 5.5rem;
        }
        .prose-blog h2 {
          font-size: 1.55rem;
          margin: 2.75rem 0 0.9rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--blog-border);
        }
        .prose-blog h3 {
          font-size: 1.22rem;
          margin: 2.25rem 0 0.75rem;
        }
        .prose-blog h4 {
          font-size: 1.05rem;
          margin: 1.75rem 0 0.5rem;
          color: var(--blog-text-muted);
        }

        /* ── Paragraphs ── */
        .prose-blog p {
          margin: 0 0 1.6rem;
        }

        /* ── Links ── */
        .prose-blog a {
          color: var(--blog-accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-blog a:hover {
          color: var(--blog-accent-hover);
        }

        /* ── Lists ── */
        .prose-blog ul,
        .prose-blog ol {
          margin: 0 0 1.6rem 1.5rem;
        }
        .prose-blog li {
          margin-bottom: 0.45rem;
        }
        .prose-blog ul li {
          list-style-type: disc;
        }
        .prose-blog ul li::marker {
          color: var(--blog-accent);
        }
        .prose-blog ol li {
          list-style-type: decimal;
        }
        .prose-blog ol li::marker {
          color: var(--blog-accent);
          font-weight: 600;
        }

        /* ── Blockquote ── */
        .prose-blog blockquote {
          margin: 2.25rem 0;
          padding: 1.1rem 1.5rem 1.1rem 1.4rem;
          border-left: 3px solid var(--blog-accent);
          background: var(--blog-accent-soft);
          border-radius: 0 10px 10px 0;
          font-style: italic;
          color: var(--blog-text-muted);
        }
        .prose-blog blockquote p {
          margin: 0;
        }

        /* ── Inline code ── */
        .prose-blog code:not(pre code) {
          background: var(--blog-accent-soft);
          color: var(--blog-accent);
          padding: 0.15em 0.4em;
          border-radius: 4px;
          font-size: 0.875em;
          font-family: ui-monospace, 'JetBrains Mono', Menlo, monospace;
          font-weight: 500;
          border: 1px solid var(--blog-border-subtle);
        }

        /* ── Tables ── */
        .prose-blog table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.75rem 0;
          font-size: 0.9rem;
          overflow-x: auto;
          display: block;
        }
        .prose-blog thead {
          background: #f7f4f0;
        }
        .prose-blog th {
          text-align: left;
          padding: 0.7rem 1rem;
          font-weight: 600;
          color: var(--blog-text-muted);
          border-bottom: 2px solid var(--blog-border);
        }
        .prose-blog td {
          padding: 0.65rem 1rem;
          border-bottom: 1px solid var(--blog-border-subtle);
          color: var(--blog-text-muted);
        }
        .prose-blog tr:hover td {
          background: var(--blog-bg);
        }

        /* ── HR ── */
        .prose-blog hr {
          border: none;
          border-top: 1px solid var(--blog-border);
          margin: 2.75rem 0;
        }

        /* ── Images ── */
        .prose-blog img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          margin: 2rem 0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.07);
        }

        /* ── Strong / Em ── */
        .prose-blog strong {
          font-weight: 700;
          color: var(--blog-text);
        }
        .prose-blog em {
          font-style: italic;
          color: var(--blog-text-muted);
        }

        /* ── Mobile adjustments ── */
        @media (max-width: 640px) {
          .blog-post-title {
            font-size: 1.5rem;
            line-height: 1.35;
          }
          .prose-blog {
            font-size: 1rem;
            line-height: 1.82;
          }
          .prose-blog h2 {
            font-size: 1.3rem;
          }
          .prose-blog h3 {
            font-size: 1.12rem;
          }
        }
      `}</style>
    </>
  );
}