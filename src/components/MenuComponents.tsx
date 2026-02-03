"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavLink } from "./navbar/NavLink";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white/80 hover:text-primary px-4 py-3 text-sm font-semibold flex items-center transition-colors"
      >
        {item}
        <ChevronDown className="ml-1 w-4 h-4" />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-full left-0 pt-0 z-50">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-card backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mt-1"
              >
                <motion.div
                  layout
                  className="w-max h-full"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex items-start p-3 transition-colors hover:bg-white/5 rounded-xl group">
      <img src={src} alt={title} className="w-12 h-12 mr-4 shrink-0" />
      <div>
        <div className="font-semibold text-white text-sm mb-1 group-hover:text-primary transition-colors">{title}</div>
        <div className="text-xs text-white/50 leading-relaxed">{description}</div>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, href, className = "text-base", ...rest }: React.ComponentProps<typeof NavLink>) => {
  return (
    <NavLink href={href} className={`text-white/80 hover:text-primary hover:bg-white/5 px-4 py-3 rounded-lg transition-all ${className}`} {...rest}>
      {children}
    </NavLink>
  );
};
