'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  { 
    q: 'What services do you offer as a Software Engineer Freelancer in Nepal?', 
    a: 'As a Software Engineer Freelancer in Nepal, I offer comprehensive digital solutions including professional website development, mobile app development, UI/UX design, and SEO services. My team and I focus on building custom, performance-oriented applications that drive business growth.'
  },
  { 
    q: 'How much does website development cost in Nepal?', 
    a: 'Website development costs in Nepal vary based on complexity. We offer packages starting from Rs. 25,000 for basic sites to more advanced custom solutions for e-commerce and enterprises. Contact me for a transparent estimate tailored to your budget.'
  },
  { 
    q: 'Why should I hire a freelance web developer in Nepal?', 
    a: 'Hiring a freelance web developer in Nepal like me provides you with direct communication, personalized attention, and cost-effective high-quality solutions. I combine global software engineering standards with local market understanding to deliver the best results.'
  },
  { 
    q: 'What is your process for SEO in Nepal?', 
    a: 'Our SEO process includes deep keyword research for the Nepal market, on-page optimization, technical SEO fixes, and backlink strategies. We focus on long-term organic growth to ensure your business ranks high for relevant search terms.'
  },
  { 
    q: 'Do you provide maintenance for websites?', 
    a: 'Yes, I provide ongoing maintenance and support for all projects. This ensures your website stays secure, updated, and continues to perform optimally as your business grows.'
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-3">Support & FAQ</h2>
              <h3 className="text-3xl md:text-5xl font-black text-heading-gold font-big-shoulders leading-[1.1] mb-5 tracking-tight">
                HAVE <span className="text-white">QUESTIONS?</span><br />
                FIND ANSWERS.
              </h3>
              <p className="text-base text-white/60 mb-10 max-w-md leading-relaxed font-noto-sans">
                Everything you need to know about starting your digital journey in Nepal. If your question isn&apos;t here, feel free to reach out.
              </p>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
                <Image
                  src="/originals/media/faq.svg"
                  alt="FAQ Illustration"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group rounded-xl border transition-all duration-500 overflow-hidden ${
                    openIdx === idx 
                      ? 'bg-card border-primary/30 shadow-[0_0_40px_rgba(196,30,58,0.1)]' 
                      : 'bg-[#0f0f0f] border-white/5 hover:border-white/10'
                  }`}
                >
                  <button 
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full p-3 md:p-6 text-left flex items-start justify-between gap-6"
                  >
                    <span className={`text-base md:text-lg font-bold font-outfit transition-colors duration-300 leading-snug ${
                      openIdx === idx ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      openIdx === idx 
                        ? 'bg-primary text-white rotate-180' 
                        : 'bg-white/5 text-white/40 group-hover:bg-white/10'
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 md:px-6 pb-6">
                          <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent mb-4" />
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
            >
               <div>
                  <h4 className="text-lg font-bold text-white mb-1.5">Still have questions?</h4>
                  <p className="text-muted-foreground text-sm">Can&apos;t find what you&apos;re looking for? Let&apos;s talk directly.</p>
               </div>
               <button className="btn-primary-cinematic text-white px-7 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs whitespace-nowrap">
                  Contact Support
               </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;