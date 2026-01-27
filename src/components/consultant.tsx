'use client'

import React from 'react'
import { CONTACT } from '@/data/contact'

interface CtaSectionProps {
  onOpenEnquiry: () => void
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="container mx-auto px-6">
      <div className="bg-black rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 bg-black">
          
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
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-2">
                Speak directly
              </p>
              <a
                href={`tel:${CONTACT.phone.tel}`}
                className="text-3xl md:text-5xl font-black text-white hover:text-primary transition-colors"
              >
                {CONTACT.phone.raw}
              </a>
            </div>

            {/* ✅ FIXED BUTTON */}
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
    </section>
  )
}

export default CtaSection
