"use client";

import { useState, useRef } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function CodeBlock({ children, className, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (preRef.current) {
      const text = preRef.current.innerText;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="relative group my-8">
      {/* Copy button */}
      <div className="absolute right-3 top-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200">
        <button
          onClick={handleCopy}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 text-zinc-400 hover:text-white border border-white/10 backdrop-blur-md shadow-md transition-colors"
          aria-label="Copy code"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Check className="h-4 w-4 text-emerald-400" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Copy className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code block */}
      <pre
        ref={preRef}
        className={cn(
          "relative overflow-x-auto rounded-2xl bg-[#0b0f14] p-5 text-[13.5px] leading-5 text-zinc-100 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] font-[var(--font-mono)] custom-scrollbar",
          "selection:bg-indigo-500/20",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
