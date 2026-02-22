import React from "react";
import Image from "next/image";

/**
 * Server component for /work LCP: no client JS, priority image for fast LCP.
 * Uses CSS animations (animate-fade-in-up, animate-scale-in) instead of framer-motion.
 */
export const WorkBanner = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">


      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Content - CSS animation for entrance */}
          <div
            className="w-full lg:w-1/2 space-y-6 animate-fade-in-up"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary-light">
                  How I Work
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                My <span className="text-heading-gold">Work Process</span>
              </h1>
            </div>

            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              I follow a systematic, client-focused approach that ensures exceptional
              results. From initial consultation to final delivery, every step is
              designed to exceed expectations.
            </p>
          </div>

          {/* Image - LCP candidate: priority + fetchPriority for fast load */}
          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-scale-in [animation-delay:0.2s]"
          >
            <div className="relative w-full max-w-150 aspect-4/3">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full -z-10"
                style={{
                  background: 'radial-gradient(circle, #c41e3a 0%, #8b0000 80%)',
                }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/optimized/media/work/telecommunication.svg"
                  alt="Work Process Visualization"
                  width={500}
                  height={400}
                  className="object-contain animate-float drop-shadow-2xl"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
