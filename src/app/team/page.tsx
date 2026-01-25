'use client'

import React from 'react'
import CtaSection from '../../components/consultant'

const teamMembers = [
  { name: 'Aarav Yadav', role: 'Founder', img: 'https://picsum.photos/seed/aarav/400/500' },
  { name: 'Ruby Saud', role: 'COO', img: 'https://picsum.photos/seed/ruby/400/500' },
  { name: 'Rajan Saud', role: 'Project Manager', img: 'https://picsum.photos/seed/rajan/400/500' },
  { name: 'Bishal Acharya', role: 'Business Development Officer', img: 'https://picsum.photos/seed/bishal/400/500' },
  { name: 'Girwan Chaudhary', role: 'Accountant', img: 'https://picsum.photos/seed/girwan/400/500' },
  { name: 'Aman Chaudhary', role: 'Finance Head', img: 'https://picsum.photos/seed/aman/400/500' },
  { name: 'Krishpan Ghimire', role: 'Sales', img: 'https://picsum.photos/seed/krishpan/400/500' },
  { name: 'Alina Shrestha', role: 'Admin Officer', img: 'https://picsum.photos/seed/alina/400/500' },
  { name: 'Suman Rana', role: 'Sr. Node JS Developer', img: 'https://picsum.photos/seed/suman/400/500' },
  { name: 'Sujan Maharjan', role: 'Frontend Designer', img: 'https://picsum.photos/seed/sujan/400/500' },
  { name: 'Aashish Rijal', role: 'Laravel Developer', img: 'https://picsum.photos/seed/aashish/400/500' },
  { name: 'Sagar Sedai', role: 'Sr. Django Developer', img: 'https://picsum.photos/seed/sagar/400/500' },
  { name: 'Sugam Baskota', role: 'Sr. React Developer', img: 'https://picsum.photos/seed/sugam/400/500' },
  { name: 'Nishant Gupta', role: 'SEO Expert', img: 'https://picsum.photos/seed/nishant/400/500' },
  { name: 'Pranish Maharjan', role: 'Sr. Content Writer', img: 'https://picsum.photos/seed/pranish/400/500' },
  { name: 'Renuka Makaju', role: 'SEO Expert', img: 'https://picsum.photos/seed/renuka/400/500' },
]

import { useEnquiryModal } from '../EnquiryContext'

const TeamPage: React.FC = () => {
  const { openEnquiry } = useEnquiryModal()
  return (
    <div className="animate-fade-in">
      {/* Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="space-y-6">
              <h6 className="text-primary font-bold uppercase tracking-widest text-sm uppercase">Let's Meet</h6>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
                Our awesome <span className="text-primary">team of talented</span> people
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                We have highly experienced professionals who are looking forward to turn your business problem into 
                future possibilities through digital transformation. Our team comprises of qualified, skilled and tactful individuals.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="https://softbenz.com/media/team-banners/At_the_office-pana.svg" alt="Team Banner" className="w-full max-w-lg animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6 text-center absolute bottom-0 left-0 right-0 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{member.name}</h3>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">{member.role}</span>
                </div>
                {/* Fallback info for non-hover state on mobile */}
                <div className="p-4 bg-white text-center md:hidden border-t border-border">
                  <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection onOpenEnquiry={openEnquiry} />
    </div>
  )
}

export default TeamPage
