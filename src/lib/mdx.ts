// ─── MDX Library ─────────────────────────────────────────────────────────────
// Drop-in replacement for your existing lib/mdx.ts with enhanced capabilities

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogFrontmatter, PaginatedPosts } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');

// ─── Directory helpers ────────────────────────────────────────────────────────

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

// ─── Core fetchers ────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getPostFromFile(filename: string): BlogPost | null {
  ensureBlogDir();
  const filePath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;
  const stats = readingTime(content);

  const fileSlug = filename.replace(/\.mdx$/, '');
  const slug = frontmatter.slug ? slugify(frontmatter.slug) : fileSlug;

  return {
    slug,
    frontmatter,
    content,
    readingTime: stats.text,
    excerpt: generateExcerpt(content),
  };
}

export function getAllBlogSlugs(): string[] {
  const posts = getAllBlogPosts();
  return posts.map((p) => p.slug);
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getAllBlogPosts(): BlogPost[] {
  ensureBlogDir();
  try {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
    return files
      .map((f) => getPostFromFile(f))
      .filter((p): p is BlogPost => p !== null)
      .filter((p) => !p.frontmatter.draft)
      .sort(
        (a, b) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
      );
  } catch {
    return [];
  }
}

// ─── Pagination ───────────────────────────────────────────────────────────────

export function getPaginatedPosts(
  page = 1,
  perPage = 9,
  posts?: BlogPost[]
): PaginatedPosts {
  const allPosts = posts ?? getAllBlogPosts();
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    posts: allPosts.slice(start, end),
    currentPage: page,
    totalPages: Math.ceil(allPosts.length / perPage),
    totalPosts: allPosts.length,
    hasNextPage: end < allPosts.length,
    hasPrevPage: page > 1,
  };
}

// ─── Tags ─────────────────────────────────────────────────────────────────────

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllBlogPosts().forEach((p) =>
    p.frontmatter.tags?.forEach((t) => tags.add(t))
  );
  return Array.from(tags).sort();
}

export function getTagsWithCount(): Record<string, number> {
  const counts: Record<string, number> = {};
  getAllBlogPosts().forEach((p) =>
    p.frontmatter.tags?.forEach((t) => {
      counts[t] = (counts[t] ?? 0) + 1;
    })
  );
  return counts;
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter((p) =>
    p.frontmatter.tags?.includes(tag)
  );
}

// ─── Related posts ────────────────────────────────────────────────────────────

export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return [];

  const currentTags = current.frontmatter.tags ?? [];

  return getAllBlogPosts()
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: (p.frontmatter.tags ?? []).filter((t) =>
        currentTags.includes(t)
      ).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

// ─── Search ───────────────────────────────────────────────────────────────────

export function searchPosts(query: string): BlogPost[] {
  if (!query.trim()) return getAllBlogPosts();

  const q = query.toLowerCase();
  return getAllBlogPosts().filter(
    (p) =>
      p.frontmatter.title.toLowerCase().includes(q) ||
      p.frontmatter.description.toLowerCase().includes(q) ||
      p.frontmatter.tags?.some((t) => t.toLowerCase().includes(q)) ||
      p.content.toLowerCase().includes(q)
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateExcerpt(content: string, maxLength = 160): string {
  const stripped = content
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`{1,3}[\s\S]*?`{1,3}/g, '')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\n+/g, ' ')
    .trim();

  if (stripped.length <= maxLength) return stripped;
  return stripped.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}