'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogCard } from './blog/BlogCard';
import type { BlogPost } from '@/types/blog';

export function BlogSectionAnimated({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
      >
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Blog</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Latest <span className="text-heading-gold">Insights</span>
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-bold group"
        >
          View All Posts
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="h-full"
          >
            <BlogCard post={post} theme="dark" />
          </motion.div>
        ))}
      </div>
    </>
  );
}
