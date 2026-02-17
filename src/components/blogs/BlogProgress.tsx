'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlogProgressProps {
  className?: string;
}

export function BlogProgress({ className }: BlogProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50",
        isVisible ? "opacity-100" : "opacity-0 transition-opacity duration-300",
        className
      )}
      style={{ scaleX }}
    />
  );
}
