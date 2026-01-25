'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: '/nirajandhungel.png',
    alt: 'Nirajan Dhungel - Full Stack Developer and Software Engineering student',
    blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=='
  },
  {
    src: '/nirajandhungel2.jpeg',
    alt: 'Nirajan Dhungel working on a coding project in Nepal',
    blurDataURL: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCAAbR//9k='
  },
  {
    src: '/hero_bg.png',
    alt: 'Nirajan Dhungel - Professional developer portfolio background',
    blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
  }
];

export function ImageGallery3D() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  // Mobile View - Enhanced Carousel
  if (isMobile) {
    return (
      <div className="relative h-[450px] sm:h-[520px] w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-green-500/10 to-primary/5 rounded-3xl"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 50%, rgba(59, 130, 246, 0.05) 100%)',
              'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(34, 197, 94, 0.05) 100%)',
              'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 50%, rgba(59, 130, 246, 0.05) 100%)',
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
                rotateY: { duration: 0.3 },
              }}
              className="absolute w-full max-w-[280px] sm:max-w-[340px]"
            >
              <div className="relative">
                {/* Glow Effect */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-green-500/30 rounded-full blur-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    width={400}
                    height={500}
                    className="w-full object-cover aspect-[3/4]"
                    sizes="(max-width: 640px) 280px, 340px"
                    priority={currentIndex === 0}
                    quality={95}
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop View - Enhanced 3D Layered Effect
  return (
    <motion.div 
      className="relative h-[550px] lg:h-[600px] w-full max-w-lg mx-auto lg:mx-0"
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      {/* Animated Background Glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-full blur-3xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Layered Images with 3D Effect */}
      <div className="absolute inset-0" style={{ perspective: '1200px' }}>
        {/* First Image (Back Layer) */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%]"
          initial={{ x: 0, y: 0, rotateY: -8, rotateX: 2 }}
          whileHover={{ x: -25, y: -15, rotateY: -12, rotateX: 3, scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={400}
                height={500}
                className="object-cover aspect-[3/4] w-full"
                sizes="(max-width: 1024px) 400px, 340px"
                quality={95}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Second Image (Middle Layer) */}
        <motion.div
          className="absolute left-0 top-1/3 w-[90%] z-10"
          initial={{ x: 0, y: 0, rotateY: 5, rotateX: -1 }}
          whileHover={{ x: 15, y: -10, rotateY: 8, rotateX: -2, scale: 1.02 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-green-500/15 rounded-full blur-2xl"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={400}
                height={500}
                className="object-cover aspect-[3/4] w-full"
                sizes="(max-width: 1024px) 400px, 360px"
                quality={95}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-green-500/5 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Third Image (Front Layer) */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[95%] z-20"
          initial={{ x: 0, y: 0, rotateY: 0, rotateX: 0 }}
          whileHover={{ x: 0, y: -12, rotateY: 2, rotateX: 1, scale: 1.03 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-primary/20">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={400}
                height={500}
                className="object-cover aspect-[3/4] w-full"
                sizes="(max-width: 1024px) 400px, 380px"
                priority
                quality={95}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/3" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Effect */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-60"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-green-500 rounded-full opacity-50"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  );
}