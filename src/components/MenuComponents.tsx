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
        className="cursor-pointer text-foreground hover:text-primary hover:opacity-[0.9] px-4 py-3 text-sm font-semibold flex items-center"
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
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-xl mt-1"
              >
                <motion.div
                  layout // layout ensures smooth animation
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

// export const Menu = ({
//   setActive,
//   children,
// }: {
//   setActive: (item: string | null) => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <nav
//       onMouseLeave={() => setActive(null)} // resets the state
//       className="relative rounded-full border border-transparent dark:bg-black dark:border-white/20 bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
//     >
//       {children}
//     </nav>
//   );
// };

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
    <Link href={href} className="flex items-start p-3 transition-colors hover:bg-gray-50 rounded-xl">
      <img src={src} alt={title} className="w-12 h-12 mr-4 shrink-0" />
      <div>
        <div className="font-semibold text-black text-sm mb-1">{title}</div>
        <div className="text-xs text-gray-500 leading-relaxed">{description}</div>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, href, className = "text-base", ...rest }: any) => {
  return (
    <NavLink href={href} className={`text-black hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-all ${className}`} {...rest}>
      {children}
    </NavLink>
  );
};
