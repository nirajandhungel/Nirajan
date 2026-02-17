"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";
import { Logo } from "@/assets/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto flex flex-col items-center text-center z-10">
      

        {/* 404 SVG Illustration */}
        <div className="relative w-full max-w-md aspect-square mb-8 animate-float">
          <Image
            src="/optimized/media/work/404.svg"
            alt="Page Not Found Illustration"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(196,30,58,0.3)]"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4 max-w-xl animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Oops! <span className="text-primary italic">Lost in Space</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            The page you are looking for might have been moved, deleted, or never existed in the first place.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-slide-up [animation-delay:200ms]">
          <Link
            href="/"
            className="btn-primary-cinematic text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 group min-w-[200px] justify-center"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-xl font-bold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 min-w-[200px] justify-center bg-white/5 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Cinematic Underline/Accent */}
        <div className="mt-16 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse-glow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </div>
  );
}
