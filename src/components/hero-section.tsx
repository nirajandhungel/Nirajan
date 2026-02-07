import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { OptimizedImage } from "./ui/optimized-image";
import { CONTACT } from "@/data/contact";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">

           <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-accent/50"></div>
        <div className="absolute top-40 left-200 w-6 h-6 rounded-full bg-white/10"></div>
        <div className="absolute top-20 left-300 w-3 h-3 rounded-full bg-accent/30"></div>
        
        {/* Large Red Circle - Top Right */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-90"
          style={{
            background:
              "radial-gradient(circle, #c41e3a 0%, #8b0000 70%, transparent 100%)",
          }}
        />

        {/* Medium Red Circle - Bottom Left */}
        <div
          className="absolute bottom-20 -left-32 w-[300px] h-[300px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, #c41e3a 0%, #8b0000 60%, transparent 100%)",
          }}
        />

        {/* Small Red Accent Circle */}
        <div
          className="absolute top-1/2 right-1/4 w-[120px] h-[120px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, #c41e3a 0%, transparent 70%)",
          }}
        />

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

        {/* Red Glow Effects */}
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-sm mb-6">
              {/* <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> */}
              <span className="text-sm font-medium text-white/80">
                Software Engineer
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
              <span className="text-white">I'm </span>
              <span className="text-heading-gold">Nirajan</span>
              <br />
              <span className="text-heading-gold">Dhungel</span>
            </h1>

            {/* Role */}
            <p className="text-xl sm:text-2xl font-bold text-white/90 mb-4">
              Software Engineer & Web Developer
            </p>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Building high-performance web solutions for international clients.
              I transform ideas into exceptional digital experiences that drive
              real business growth.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                ["10+", "Projects"],
                ["2+", "Years Exp"],
                ["100%", "Satisfaction"],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-heading-gold">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="btn-primary-cinematic text-white rounded-xl px-8 py-6 text-base font-bold group"
                asChild
              >
                <Link href="/contact">
                  Work With Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-outline-gold rounded-xl px-8 py-6 text-base font-bold group
             text-gold hover:text-gold"
                asChild
              >
                <a href="/nirajan_cv.pdf" download>
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Contact */}
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>{CONTACT.email}</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Open to Remote Work</span>
              </div>
            </div>
          </div>

          {/* Right Image - Profile Photo with Red Circle Behind */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Red Circle Behind Portrait */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full -z-10"
                style={{
                  background:
                    "radial-gradient(circle, #c41e3a 0%, #8b0000 80%)",
                }}
              />

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl -z-20" />

              <OptimizedImage
                src="/nirajan-sketch-v22.png"
                alt="Nirajan Dhungel - Software Engineer & Web Developer"
                title="Nirajan Dhungel - Professional Web Developer"
                width={800}
                height={800}
                isLCP={true}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                className="relative w-full max-w-lg lg:max-w-xl h-auto animate-float"
                style={{
                  filter: "drop-shadow(20px 20px 40px rgba(0, 0, 0, 0.5))",

                  maskImage: `
      linear-gradient(to left, black 90%, transparent 100%),
      linear-gradient(to bottom, black 90%, transparent 100%)
    `,
                  WebkitMaskImage: `
      linear-gradient(to left, black 90%, transparent 100%),
      linear-gradient(to bottom, black 90%, transparent 100%)
    `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "destination-in",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
