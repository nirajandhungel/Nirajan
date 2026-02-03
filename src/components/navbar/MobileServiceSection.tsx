"use client";

import Link from "next/link";

interface ServiceItem {
  name: string;
  href: string;
  icon: string;
}

interface MobileServiceSectionProps {
  title: string;
  services: ReadonlyArray<ServiceItem>;
  onCloseMenu: () => void;
}

export const MobileServiceSection = ({ title, services, onCloseMenu }: MobileServiceSectionProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-2">
        <span className="w-2 h-2 bg-primary rounded-sm"></span>
        <span className="font-semibold text-white text-sm">{title}</span>
      </div>
      <div className="pl-6 space-y-3">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="flex items-center gap-3 py-1 text-white/60 hover:text-primary transition-colors group"
            onClick={onCloseMenu}
          >
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
              <span className="text-lg">{service.icon}</span>
            </div>
            <span className="text-xs">{service.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};