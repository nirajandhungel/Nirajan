import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');

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
}

export interface BlogPost {
    slug: string;
    frontmatter: BlogFrontmatter;
    content: string;
    readingTime: string;
}

// Ensure blog directory exists
function ensureBlogDir() {
    if (!fs.existsSync(BLOG_DIR)) {
        fs.mkdirSync(BLOG_DIR, { recursive: true });
    }
}

// Get all blog post slugs
export function getAllBlogSlugs(): string[] {
    ensureBlogDir();

    try {
        const files = fs.readdirSync(BLOG_DIR);
        return files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => file.replace(/\.mdx$/, ''));
    } catch (error) {
        console.error('Error reading blogs directory:', error);
        return [];
    }
}

// Get blog post by slug (metadata only)
export function getBlogPost(slug: string): BlogPost | null {
    ensureBlogDir();

    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
        readingTime: stats.text,
    };
}

// Get all blog posts (sorted by date)
export function getAllBlogPosts(): BlogPost[] {
    const slugs = getAllBlogSlugs();
    const posts = slugs
        .map((slug) => getBlogPost(slug))
        .filter((post): post is BlogPost => post !== null)
        .filter((post) => !post.frontmatter.draft); // Filter out drafts

    // Sort by date (newest first)
    return posts.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date);
        const dateB = new Date(b.frontmatter.date);
        return dateB.getTime() - dateA.getTime();
    });
}

// Get related posts by tags
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
    const currentPost = getBlogPost(currentSlug);
    if (!currentPost) return [];

    const allPosts = getAllBlogPosts();
    const currentTags = currentPost.frontmatter.tags || [];

    // Calculate relevance score based on shared tags
    const postsWithScore = allPosts
        .filter((post) => post.slug !== currentSlug)
        .map((post) => {
            const sharedTags = post.frontmatter.tags?.filter((tag) =>
                currentTags.includes(tag)
            ) || [];
            return {
                post,
                score: sharedTags.length,
            };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);

    return postsWithScore.slice(0, limit).map((item) => item.post);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
    const allPosts = getAllBlogPosts();
    return allPosts.filter((post) =>
        post.frontmatter.tags?.includes(tag)
    );
}

// Get all unique tags
export function getAllTags(): string[] {
    const allPosts = getAllBlogPosts();
    const tags = new Set<string>();

    allPosts.forEach((post) => {
        post.frontmatter.tags?.forEach((tag) => tags.add(tag));
    });

    return Array.from(tags).sort();
}

// Pagination helper
export function paginatePosts(posts: BlogPost[], page = 1, perPage = 10) {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return {
        posts: posts.slice(start, end),
        currentPage: page,
        totalPages: Math.ceil(posts.length / perPage),
        totalPosts: posts.length,
        hasNextPage: end < posts.length,
        hasPrevPage: page > 1,
    };
}
