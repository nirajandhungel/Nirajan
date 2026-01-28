'use client'

import React from 'react'
import { CONTACT } from '@/data/contact'

interface CtaSectionProps {
  onOpenEnquiry: () => void
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="container mx-auto px-4 md:px-10 py-12 md:py-16">
      <div className="bg-black rounded-3xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="max-w-xl text-center lg:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Ready to engineer your <span className="text-primary italic">next chapter?</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-medium">
              Our strategists are ready to turn your complex problems into elegant digital architecture.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="text-center lg:text-right">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-1.5">
                Speak directly
              </p>
              <a
                href={`tel:${CONTACT.phone.tel}`}
                className="text-2xl md:text-3xl font-black text-white hover:text-primary transition-colors"
              >
                {CONTACT.phone.raw}
              </a>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="group w-full lg:w-fit px-8 py-4 bg-white text-secondary font-black uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all shadow-xl"
            >
              Start Consultation
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CtaSection