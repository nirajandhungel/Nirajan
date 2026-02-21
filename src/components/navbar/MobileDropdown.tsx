"use client";

import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

interface MobileDropdownProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const MobileDropdown = ({ title, children, isOpen = false, onToggle }: MobileDropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const open = onToggle !== undefined ? isOpen : internalOpen;
  const toggle = onToggle || (() => setInternalOpen(!internalOpen));

  return (
    <div className="border-b border-white/5 px-3">
      <button
        className="flex items-center justify-between w-full py-3 text-sm font-medium text-white hover:text-white transition-colors"
        onClick={toggle}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform text-primary ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-3 pl-4 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};