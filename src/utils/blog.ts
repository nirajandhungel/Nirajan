// ─── Blog Utilities ──────────────────────────────────────────────────────────

/**
 * Format a date string into a human-readable format
 */
export function formatDate(
  date: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  return new Date(date).toLocaleDateString('en-US', options);
}

/**
 * Format a date as a short version for mobile
 */
export function formatDateShort(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Get ISO date string for dateTime attributes
 */
export function getISODate(date: string): string {
  return new Date(date).toISOString();
}

/**
 * Generate an excerpt from content
 */
export function generateExcerpt(content: string, maxLength = 160): string {
  // Remove MDX/markdown syntax
  const stripped = content
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/```[\s\S]+?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\n+/g, ' ')
    .trim();

  if (stripped.length <= maxLength) return stripped;
  return stripped.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

/**
 * Slugify a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Capitalize first letter of each word
 */
export function titleCase(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get relative time string (e.g., "2 days ago")
 */
export function getRelativeTime(date: string): string {
  const now = new Date();
  const postDate = new Date(date);
  const diffMs = now.getTime() - postDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Group posts by year
 */
export function groupPostsByYear<T extends { frontmatter: { date: string } }>(
  posts: T[]
): Record<string, T[]> {
  return posts.reduce<Record<string, T[]>>((acc, post) => {
    const year = new Date(post.frontmatter.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});
}

/**
 * Build Open Graph image URL
 */
export function getOGImageUrl(coverImage: string, baseUrl: string): string {
  if (coverImage.startsWith('http')) return coverImage;
  return `${baseUrl}${coverImage}`;
}