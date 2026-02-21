import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/mdx';
import { BlogSectionAnimated } from './blog-section-animated';

export function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full -translate-y-1/2 opacity-20"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <BlogSectionAnimated posts={posts} />
      </div>
    </section>
  );
}
