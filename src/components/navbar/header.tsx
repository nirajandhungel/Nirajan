"use client";

import { useState, useEffect } from "react";
import { Phone, X, Menu } from "lucide-react";
import { Logo } from "../../assets/Logo";
import { NavLink } from "./NavLink";
import { MobileDropdown } from "./MobileDropdown";
import { MobileServiceSection } from "./MobileServiceSection";
import { NAV_ITEMS } from "./navData";
import { SERVICES } from "../../../constants";
import { MenuItem, ProductItem, HoveredLink } from "../MenuComponents";
import { getWhatsAppLink } from "@/lib/smart-links";
import { WHATSAPP } from "@/data/contact";

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky 
          ? "bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" 
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setActive(null)}
          >
            <NavLink href="/">Home</NavLink>

            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-2 px-3 min-w-45 bg-card border border-white/5 rounded-xl">
                {NAV_ITEMS.about.map((item) => (
                  <HoveredLink key={item.label} href={item.href} className="text-lg px-3 mb-3 mt-1 text-white/80 hover:text-primary">
                    {item.label}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="grid grid-cols-2 gap-4 p-4 min-w-[550px] max-w-[90vw] bg-card border border-white/5 rounded-2xl">
                {["Development", "Marketing"].map((category) => (
                  <div key={category} className="space-y-4">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-white/10 pb-2">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {SERVICES.filter((s) => s.category === category).map((s) => (
                        <ProductItem
                          key={s.id}
                          title={s.title}
                          description={s.description}
                          href={s.link}
                          src={s.icon}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-2 p-2 min-w-45 bg-card border border-white/5 rounded-xl">
                {NAV_ITEMS.pricing.map((item) => (
                  <HoveredLink key={item.label} href={item.href} className="text-xs px-3 py-2 mb-3 text-white/80 hover:text-primary">
                    {item.label}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>

            {NAV_ITEMS.regular.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/70 font-semibold">
              <i className="fa-solid fa-phone text-primary"></i>
              <a href={getWhatsAppLink(WHATSAPP.fullNumber)} className="hover:text-white transition-colors">
                {WHATSAPP.countryCode} {WHATSAPP.number}
              </a>
            </div>
            <button
              onClick={onOpenEnquiry}
              className="btn-primary-cinematic text-white px-5 py-2.5 rounded-sm font-bold transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

    </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[320px] max-w-[85vw] bg-card border-r border-white/5 shadow-xl transform transition-transform overflow-y-auto scrollbar-hide ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6 min-h-full flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <Logo onClick={closeMobileMenu} />
              <button onClick={closeMobileMenu} className="text-white/60 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <NavLink href="/" onClick={closeMobileMenu} className="block border-b border-white/5 text-white/80 hover:text-white">
                Home
              </NavLink>

              <MobileDropdown title="About" isOpen={aboutOpen} onToggle={() => setAboutOpen(!aboutOpen)}>
                {NAV_ITEMS.about.map((item) => (
                  <NavLink key={item.label} href={item.href} onClick={closeMobileMenu} className="block py-2 text-white/60 hover:text-primary">
                    {item.label}
                  </NavLink>
                ))}
              </MobileDropdown>

            <MobileDropdown
  title="Services"
  isOpen={servicesOpen}
  onToggle={() => setServicesOpen(!servicesOpen)}
>
  <div className="space-y-6">
    {["Development", "Marketing"].map((category) => (
      <MobileServiceSection
        key={category}
        title={category}
        services={SERVICES
          .filter((s) => s.category === category)
          .map((s) => ({
            name: s.title,
            href: s.link,
            icon: s.icon,
          }))}
        onCloseMenu={closeMobileMenu}
      />
    ))}
  </div>
</MobileDropdown>



              <MobileDropdown title="Pricing" isOpen={pricingOpen} onToggle={() => setPricingOpen(!pricingOpen)}>
                {NAV_ITEMS.pricing.map((item) => (
                  <NavLink key={item.label} href={item.href} onClick={closeMobileMenu} className="block py-2 text-white/60 hover:text-primary">
                    {item.label}
                  </NavLink>
                ))}
              </MobileDropdown>

              {NAV_ITEMS.regular.map((item) => (
                <NavLink key={item.label} href={item.href} onClick={closeMobileMenu} className="block border-b border-white/5 text-white/80 hover:text-white">
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-white/60 font-semibold">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+9779825883910">+977-9825883910</a>
              </div>
              <button
                onClick={() => {
                  onOpenEnquiry();
                  closeMobileMenu();
                }}
                className="w-full btn-primary-cinematic text-white px-4 py-3 rounded-sm font-bold"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;