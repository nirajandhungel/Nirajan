'use client'

import React from 'react'

interface CtaSectionProps {
  onOpenEnquiry: () => void
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 bg-amber-400">
        <div className="cta-gradient rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Ready to engineer your <span className="text-primary italic">next chapter?</span>
              </h2>
              <p className="text-white/40 text-xl font-medium">
                Our strategists are ready to turn your complex problems into elegant digital architecture.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-end gap-10">
              <div className="text-center lg:text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-2">Speak directly</p>
                <a href="tel:9801848492" className="text-3xl md:text-5xl font-black text-white hover:text-primary transition-colors">9801848492</a>
              </div>
              <button 
                onClick={onOpenEnquiry}
                className="group w-full lg:w-fit px-12 py-6 bg-white text-secondary font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all shadow-2xl"
              >
                Start Consultation
                <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
