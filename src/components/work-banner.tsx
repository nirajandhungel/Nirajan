"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const WorkBanner = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large Red Circle */}
        <div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
        {/* Decorative Arc */}
        <div 
          className="absolute bottom-10 left-10 w-40 h-40 rounded-full border-2 border-white/10"
          style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span className="text-sm text-primary font-bold uppercase tracking-widest">
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
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-150 aspect-4/3">
              {/* Red Circle Behind */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full -z-10"
                style={{
                  background: 'radial-gradient(circle, #c41e3a 0%, #8b0000 80%)',
                }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/media/team/telecommunication.png" 
                  alt="Work Process Visualization"
                  width={500}
                  height={400}
                  className="object-contain animate-float drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
