"use client";

import { motion } from "framer-motion";

export function SolutionsImageAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full h-full flex justify-center lg:justify-end"
    >
      {children}
    </motion.div>
  );
}
