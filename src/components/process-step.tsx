import React from "react";
import Image from "next/image";

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  imageSrc: string;
  isEven: boolean;
}

/**
 * Server component: no client JS. Step number circles use white on primary for contrast (a11y).
 */
export const ProcessStep = ({
  stepNumber,
  title,
  description,
  imageSrc,
  isEven,
}: ProcessStepProps) => {
  return (
    <div className="relative py-12 md:py-20">
      {/* Central Connector (Desktop) */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

      {/* Step Indicator (Desktop) */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center text-white font-bold z-10 shadow-lg shadow-primary/50 border-4 border-background">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-24`}>
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <div className={`flex flex-col gap-4 ${isEven ? 'lg:items-start' : 'lg:items-end lg:text-right'}`}>
            {/* Mobile step number: white on primary for 4.5:1+ contrast */}
            <div className="flex items-center gap-3 lg:hidden justify-center">
              <span className="w-12 h-12 rounded-full bg-primary border-2 border-primary flex items-center justify-center font-black text-lg text-white">
                {stepNumber}
              </span>
            </div>

            {/* Desktop Step Number Display */}
            <div className="hidden lg:block text-8xl font-black text-primary/5 absolute -z-10 select-none">
              {stepNumber}
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-accent">
              {title}
            </h2>
            <p className="text-white/60 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full max-w-[500px] mx-auto overflow-hidden rounded-2xl shadow-xl bg-white/5 group">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
