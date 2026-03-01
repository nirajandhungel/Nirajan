import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavLink = ({ href, children, onClick, className = "" }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`relative group px-3 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </Link>
  );
};