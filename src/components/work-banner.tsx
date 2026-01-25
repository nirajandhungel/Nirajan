"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const WorkBanner = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4">
              <h6 className="text-primary font-semibold tracking-wider uppercase text-sm md:text-base">
                WE MAKE IT HAPPEN
              </h6>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-foreground leading-tight">
                Working <span className="text-primary">Steps</span> We Follow
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We follow the sequential and systematic work process that results in a desirable 
              and meaningful output. The series of patterns describe how something goes from 
              being undone to done.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/3]">
              {/* Note: In production, use the actual image path. Using placeholder for now if file doesn't exist */}
               <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-blue-500/5 rounded-3xl -rotate-3 transform border border-primary/10"></div>
               <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-xl border border-white/20 p-4">
                  <Image
                    src="/media/work_process_banner.png" 
                    alt="Work Process"
                    fill
                    className="object-contain"
                    priority
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-full bg-linear-to-r from-blue-500/5 to-transparent blur-3xl"></div>
    </section>
  );
};
