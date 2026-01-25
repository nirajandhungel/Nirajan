'use client'

import React from 'react'
import CtaSection from '../../components/consultant'

const steps = [
  {
    num: '01',
    title: 'Requirement Gathering',
    content: 'In this step, we generate a list of requirements from our clients. The requirement could be functional or technical. It acts as a basis on what the project is and generates information on how it could be tackled. Requirement gathering is the most important step in our workflow.',
    image: 'https://softbenz.com/media/work-process/Meeting-amico.svg'
  },
  {
    num: '02',
    title: 'Plan & Resources',
    content: 'A plan and resources describe the strategic roadmap and assets allocated to achieve specific objectives. It entails outlining goals, timelines, budgets, and identifying the necessary tools, personnel, and materials to execute tasks effectively.',
    image: 'https://softbenz.com/media/work-process/Plan__Resources_1.svg'
  },
  {
    num: '03',
    title: 'Design & Develop',
    content: 'Design and develop refers to the comprehensive process of conceptualizing and creating digital products or solutions, encompassing both the visual aesthetics and underlying functionality, often involving collaboration between designers and developers.',
    image: 'https://softbenz.com/media/work-process/Design__Development_1.svg'
  },
  {
    num: '04',
    title: 'Quality Assurance',
    content: 'This is the step in which mistakes and defects are identified and corrected to ensure better quality. For quality assurance, we ask feedback from our clients. If our work doesn\'t meet the specific quality as per the requirement, we construct a plan with our project team.',
    image: 'https://softbenz.com/media/work-process/Mobile_testing-amico.svg'
  },
  {
    num: '05',
    title: 'Deployment',
    content: 'Deployment is the process of releasing and installing software applications or updates onto servers, devices, or networks for end-user access, ensuring functionality, security, and performance in a live environment.',
    image: 'https://softbenz.com/media/work-process/Cross-platform_software-amico.svg'
  },
  {
    num: '06',
    title: 'Support & Maintenance',
    content: 'Support and maintenance encompass ongoing assistance and upkeep provided to ensure the smooth functioning, security, and reliability of systems, software, or services, including troubleshooting, updates, and user assistance as needed.',
    image: 'https://softbenz.com/media/work-process/Operating_system_upgrade-pana.svg'
  }
]

import { useEnquiryModal } from '../EnquiryContext'

const WorkPage: React.FC = () => {
  const { openEnquiry } = useEnquiryModal()
  return (
    <div className="animate-fade-in">
      {/* Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="space-y-6">
              <h6 className="text-primary font-bold uppercase tracking-widest text-sm">WE MAKE IT HAPPEN</h6>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
                Working <span className="text-primary">Steps</span> We Follow
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                We follow the sequential and systematic work process that results in a desirable and meaningful output. 
                The series of patterns describe how something goes from being undone to done.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="https://softbenz.com/media/work-process-banners/agile_method-amico_XDyVR6p.svg" alt="Work Process Banner" className="w-full max-w-lg animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-10 space-y-32 relative">
          {/* Timeline Connector Line - Hidden on small screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 -translate-x-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.num} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 md:gap-20 relative z-10`}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-xl shadow-primary/30 transform rotate-3">
                    {step.num}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground">{step.title}</h2>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed bg-white/50 p-6 rounded-3xl border border-border/40">
                  {step.content}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative group">
                   <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-500"></div>
                   <img src={step.image} alt={step.title} className="w-full max-w-md relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection onOpenEnquiry={openEnquiry} />
    </div>
  )
}

export default WorkPage
