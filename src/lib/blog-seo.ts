import type { Metadata } from 'next';
import { BASE_URL, SITE_NAME } from '@/utils/seo';
import type { BlogFrontmatter } from '@/types/blog';
import type { BlogPost } from '@/types/blog';

const DEFAULT_BLOG_OG_IMAGE = `${BASE_URL}/optimized/og-blog.webp`;
const TWITTER_HANDLE = '@nirajandhungel';

/**
 * Resolve full image URL for OG/schema (handles relative paths and missing images).
 */
export function resolveBlogImageUrl(path?: string | null): string {
  if (!path) return DEFAULT_BLOG_OG_IMAGE;
  return path.startsWith('http') ? path : `${BASE_URL}${path}`;
}

/**
 * Build meta keywords for a blog post: tags + title-derived + brand.
 */
export function buildPostKeywords(frontmatter: BlogFrontmatter): string[] {
  const words = new Set<string>();
  words.add(frontmatter.title);
  if (frontmatter.tags?.length) {
    frontmatter.tags.forEach((t) => words.add(t));
  }
  words.add(SITE_NAME);
  words.add('web development blog');
  words.add('SEO');
  return Array.from(words);
}

/**
 * Metadata for the main blog listing page (/blog).
 */
export function buildBlogListingMetadata(): Metadata {
  const title = `Blog – ${SITE_NAME}`;
  const description =
    'Practical insights on web development, SEO strategies, Next.js, and digital marketing from real-world projects.';
  const url = `${BASE_URL}/blog`;
  const keywords = [
    'web development blog',
    'SEO tips',
    'Next.js tutorials',
    'digital marketing',
    SITE_NAME,
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': `${BASE_URL}/rss.xml` },
    },
    openGraph: {
      title,
      description: 'Practical insights on web development, SEO, Next.js, and digital marketing.',
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: DEFAULT_BLOG_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} Blog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: 'Practical insights on web development, SEO, and digital marketing.',
      images: [DEFAULT_BLOG_OG_IMAGE],
      creator: TWITTER_HANDLE,
    },
  };
}

/**
 * Metadata for a single blog post (/blog/[slug]).
 */
export function buildBlogPostMetadata(
  frontmatter: BlogFrontmatter,
  slug: string
): Metadata {
  const title = `${frontmatter.title} – ${SITE_NAME}`;
  const description = frontmatter.description;
  const imageUrl = resolveBlogImageUrl(
    frontmatter.ogImage || frontmatter.coverImage
  );
  const url = `${BASE_URL}/blog/${slug}`;
  const canonical = frontmatter.canonical ?? url;
  const keywords = buildPostKeywords(frontmatter);
  const author = frontmatter.author ?? SITE_NAME;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    alternates: { canonical },
    openGraph: {
      title: frontmatter.title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [author],
      tags: frontmatter.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description,
      images: [imageUrl],
      creator: TWITTER_HANDLE,
    },
  };
}

/**
 * Metadata for a tag archive page (/blog/tag/[tag]).
 */
export function buildBlogTagMetadata(
  tag: string,
  encodedTag: string,
  postCount: number
): Metadata {
  const title = `#${tag} – Blog – ${SITE_NAME}`;
  const description = postCount > 0
    ? `All articles tagged with "${tag}" — web development, SEO, and digital marketing insights. ${postCount} ${postCount === 1 ? 'article' : 'articles'}.`
    : `Articles tagged with "${tag}" — web development, SEO, and digital marketing.`;
  const url = `${BASE_URL}/blog/tag/${encodedTag}`;
  const keywords = [
    tag,
    'blog',
    'articles',
    'web development',
    'SEO',
    'Next.js',
    SITE_NAME,
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: `#${tag} articles – ${SITE_NAME}`,
      description: `Browse all articles tagged with "${tag}".`,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: DEFAULT_BLOG_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `Blog posts tagged ${tag} – ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `#${tag} – Blog – ${SITE_NAME}`,
      description: `Articles tagged with "${tag}".`,
      images: [DEFAULT_BLOG_OG_IMAGE],
      creator: TWITTER_HANDLE,
    },
  };
}

/**
 * JSON-LD ItemList for a tag page (list of articles).
 */
export function buildBlogTagItemListJsonLd(
  tag: string,
  encodedTag: string,
  posts: Pick<BlogPost, 'slug' | 'frontmatter'>[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Blog posts tagged with ${tag}`,
    description: `Articles from ${SITE_NAME} tagged with "${tag}".`,
    url: `${BASE_URL}/blog/tag/${encodedTag}`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${BASE_URL}/blog/${post.slug}`,
      name: post.frontmatter.title,
    })),
  };
}
