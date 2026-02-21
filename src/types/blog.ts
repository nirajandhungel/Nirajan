// ─── Blog Types ─────────────────────────────────────────────────────────────

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
  ogImage?: string;
  draft?: boolean;
  canonical?: string;
  readingTime?: string;
  /** Custom SEO-friendly URL slug. If omitted, uses filename. */
  slug?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
  excerpt?: string;
}

export interface PaginatedPosts {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface RelatedPost {
  slug: string;
  title: string;
  coverImage: string;
  date: string;
  readingTime: string;
  tags: string[];
}