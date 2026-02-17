import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { OptimizedImage } from "./ui/optimized-image";
import { CONTACT } from "@/data/contact";

export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:h-screen bg-black overflow-hidden flex items-center ">
      {/* Optimized Background Image with Modern Formats - CRITICAL FOR LCP */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* AVIF format - best compression (if supported) */}
          <source
            type="image/avif"
            srcSet="/optimized/hero-bg-image.avif"
          />
          {/* WebP format - good compression, wide support */}
          <source
            type="image/webp"
            srcSet="
              /optimized/hero-bg-image-640w.webp 640w,
              /optimized/hero-bg-image-750w.webp 750w,
              /optimized/hero-bg-image-828w.webp 828w,
              /optimized/hero-bg-image-1080w.webp 1080w,
              /optimized/hero-bg-image-1200w.webp 1200w,
              /optimized/hero-bg-image-1920w.webp 1920w,
              /optimized/hero-bg-image.webp 2400w
            "
            sizes="100vw"
          />
          {/* Fallback to original JPG */}
          <img
            src="/optimized/hero-bg-image.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Dark overlay for better text contrast - darker on mobile */}
        <div className="absolute inset-0 bg-black/70 lg:bg-black/60" />
      </div>

      {/* Cinematic Background Elements (hidden on mobile for performance) */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block">
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-accent/50"></div>
        <div className="absolute top-40 left-200 w-6 h-6 rounded-full bg-white/10"></div>
        <div className="absolute top-20 left-300 w-3 h-3 rounded-full bg-accent/30"></div>
        
        {/* Decorative Arc Lines */}
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10"
          style={{
            borderTopColor: "transparent",
            borderRightColor: "transparent",
          }}
        />
        <div
          className="absolute top-16 left-16 w-24 h-24 rounded-full border border-white/5"
          style={{
            borderTopColor: "transparent",
            borderRightColor: "transparent",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Order changes on mobile */}
          <div className="order-2 lg:order-1 max-w-2xl">


            {/* Main Hero Text with Stroke Effect - BIGGER NOW */}
            <div className="relative mb-2 sm:mb-4 font-montserrat">
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[1.1]">
                <span className="relative inline-block text-white">
                  NIRAJAN
                  <span 
                    className="absolute top-0 left-0 text-transparent -translate-x-[4px] -translate-y-[4px] z-[-1]" 
                    style={{
                      WebkitTextStroke: "3px #FF0000",
                      color: "transparent"
                    }}
                  >
                    NIRAJAN
                  </span>
                </span>
                <br />
                <span className="relative inline-block text-white">
                  DHUNGEL
                  <span 
                    className="absolute top-0 left-0 text-transparent -translate-x-[4px] -translate-y-[4px] z-[-1]"
                    style={{
                      WebkitTextStroke: "3px #FF0000",
                      color: "transparent"
                    }}
                  >
                    DHUNGEL
                  </span>
                </span>
              </h1>
            </div>

            {/* Role - Now positioned right after the big name */}
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-heading-gold mb-3 sm:mb-4">
              Software Engineer & Web Developer
            </p>

            {/* Subtitle - Smaller on mobile */}
            <p className="text-sm sm:text-base lg:text-lg text-white/60 mb-6 sm:mb-8 leading-relaxed max-w-lg">
              Building high-performance web solutions for international clients.
              I transform ideas into exceptional digital experiences that drive
              real business growth.
            </p>

            {/* Stats - Centered on mobile */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 mb-8 sm:mb-10">
              {[
                ["10+", "Projects"],
                ["2+", "Years Exp"],
                ["100%", "Satisfaction"],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-heading-gold">
                    {value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-white/50 uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="btn-primary-cinematic text-white rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold group w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Work With Me
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-outline-gold rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold group
             text-gold hover:text-gold w-full sm:w-auto"
                asChild
              >
                <a href="/nirajan_cv.pdf" download>
                  <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5 " />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Contact - Stack on mobile */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="break-all sm:break-normal">{CONTACT.email}</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                <span>Open to Remote Work</span>
              </div>
            </div>
          </div>

          {/* Right Image - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <div className="relative w-[200px] sm:w-[300px] lg:w-[600px]">
              <OptimizedImage
                src="/mickeylit-ai-generated-8227903.svg"
                alt="Nirajan Dhungel - Software Engineer & Web Developer"
                title="Nirajan Dhungel - Professional Web Developer"
                width={500}
                height={500}
                isLCP={true}
                priority
                className="relative w-full h-auto"
              /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}