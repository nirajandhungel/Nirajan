'use client';

// BlogProgress.tsx — Minimal reading progress indicator
// Thin red line at top, fades in after first scroll. Zero visual noise.

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlogProgressProps {
  className?: string;
}

export function BlogProgress({ className }: BlogProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{ scaleX, background: 'var(--blog-accent)' }}
      aria-hidden="true"
    />
  );
}