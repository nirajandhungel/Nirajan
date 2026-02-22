"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { OptimizedImage } from "./ui/optimized-image";
import { CONTACT, CALENDLY } from "@/data/contact";

export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:h-screen bg-black overflow-hidden flex items-center">
      {/* Background - Pure Black with Subtle Texture */}
      <div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: `url("/optimized/hero-bg-image.avif")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
/>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Main Hero Text - Bold, Raw Typography */}
            <div className="relative mb-6">
              <h1 className="font-big-shoulders text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight text-white uppercase">
                <span className="block">NIRAJAN</span>
                <span className="block text-accent">DHUNGEL</span>
              </h1>
            </div>

            {/* Subtitle - Raw, Hard */}
            <div className="mb-8">
              <p className="font-big-shoulders text-xl sm:text-2xl lg:text-3xl font-bold text-accent uppercase tracking-wide leading-tight mb-4">
                CO-FOUNDER & CTO · SOFTWARE ENGINEER
              </p>
              <p className="font-noto-sans text-base sm:text-lg text-white/80 leading-relaxed">
                Co-founder at Lingo Tech Solutions. I help founders and startups build SEO-optimised brands, websites & apps that rank on Google and AI search, and generate leads globally.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mb-10 flex flex-wrap gap-6">
              {[
                ["10+", "PROJECTS"],
                ["2+", "YEARS"],
                ["100%", "SATISFACTION"],
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-accent pl-4">
                  <div className="font-big-shoulders text-3xl sm:text-4xl font-black text-accent uppercase">
                    {value}
                  </div>
                  <div className="font-noto-sans text-xs text-white/50 uppercase tracking-wider mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Raw, Hard */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="btn-primary-cinematic text-white px-8 py-6 text-base font-bold uppercase tracking-wide w-full sm:w-auto font-big-shoulders"
                asChild
              >
                <a href={CALENDLY.url} target="_blank" rel="noopener noreferrer">
                  BOOK STRATEGY CALL
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                size="lg"
                className="btn-outline-white px-8 py-6 text-base font-bold uppercase tracking-wide w-full sm:w-auto font-big-shoulders"
                asChild
              >
                <Link href="/about">
                  ABOUT ME
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-white/50 font-noto-sans">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent"></span>
                <span>{CONTACT.email}</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent"></span>
                <span>Remote-first · Global clients</span>
              </div>
            </div>
          </div>

          {/* Right Image - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
              <div className="relative border-2 border-accent p-2">
                <OptimizedImage
                  src="/mickeylit-ai-generated-8227903.svg"
                  alt="Nirajan Dhungel - Software Engineer & Web Developer"
                  title="Nirajan Dhungel - Professional Web Developer"
                  width={600}
                  height={600}
                  isLCP={true}
                  priority
                  className="relative w-full h-auto"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent"></div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
