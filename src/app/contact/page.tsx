'use client'

import React from 'react'
import CtaSection from '@/components/consultant'
import { localBusinessSchema } from '@/lib/structured-data'
import { useEnquiryModal } from '../EnquiryContext'

// Note: Metadata cannot be exported from client components
// Add metadata in a parent server component or layout if needed

const ContactPage: React.FC = () => {
  const { openEnquiry } = useEnquiryModal()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Message sent successfully!")
  }

  const contactInfo = [
    { title: 'Phone Number', value: '+977-9825883910', icon: 'fa-phone', link: 'tel:+9779825883910' },
    { title: 'Email Address', value: 'nirajandhungel200@gmail.com', icon: 'fa-envelope', link: 'mailto:nirajandhungel200@gmail.com' },
    { title: 'Location', value: 'Kathmandu, Nepal', icon: 'fa-location-dot', link: '#' },
    { title: 'Availability', value: 'Available for Freelance', icon: 'fa-briefcase', link: '#' },
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/nirajandhungel', icon: 'fa-brands fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nirajan-dhungel', icon: 'fa-brands fa-linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/nirajan.dhungel19', icon: 'fa-brands fa-instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/subash.dhungel.712', icon: 'fa-brands fa-facebook' },
    { name: 'Twitter', url: 'https://x.com/SubashDhungel18', icon: 'fa-brands fa-twitter' },
    { name: 'Medium', url: 'https://medium.com/@nirajandhungel', icon: 'fa-brands fa-medium' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="animate-fade-in">
        {/* Title Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-10 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground uppercase tracking-tight">
              Contact <span className="text-primary">Nirajan Dhungel</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get in touch for professional website development services in Nepal
            </p>
          </div>
        </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="bg-[#fafafa] rounded-[2.5rem] p-8 md:p-16 overflow-hidden border border-border/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-extrabold text-foreground mb-2">Get In Touch</h2>
                <h6 className="text-muted-foreground font-semibold mb-10">We are Here For You. Can we Help?</h6>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" required placeholder="Full Name *" 
                      className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                    />
                    <input 
                      type="email" required placeholder="Email *" 
                      className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                    />
                    <input 
                      type="tel" required placeholder="Phone Number" 
                      className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                    />
                    <input 
                      type="text" required placeholder="Subject *" 
                      className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                    />
                  </div>
                  <textarea 
                    required placeholder="Message *" rows={5}
                    className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                  ></textarea>
                  
                  <button type="submit" className="px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-black transition-all">
                    Submit
                  </button>
                </form>
              </div>

              <div className="lg:col-span-5 hidden lg:flex justify-end">
                <img 
                  src="https://softbenz.com/static/site-assets/images/contact.svg" 
                  alt="Contact Us" 
                  className="w-full max-w-sm animate-float"
                />
              </div>
            </div>

            {/* Main Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary text-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <i className={`fa-solid ${info.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase text-muted-foreground mb-1 tracking-widest">{info.title}</h3>
                    <a href={info.link} className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Connect on <span className="text-primary">Social Media</span>
            </h2>
            <p className="text-muted-foreground text-lg">Follow me on social platforms to stay updated</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light p-8 rounded-3xl text-center hover:shadow-xl hover:-translate-y-1 transition-all group border border-transparent hover:border-primary/20"
              >
                <i className={`${social.icon} text-4xl text-foreground group-hover:text-primary transition-colors mb-3`}></i>
                <h3 className="text-sm font-bold text-foreground">{social.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 animate-slide-up">
        <div className="container mx-auto px-4 md:px-10">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4267262556894!2d85.31199931506234!3d27.70169998279968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc1f6e1c85%3A0x706c5a0e1c1e1c1e!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <CtaSection onOpenEnquiry={openEnquiry} />
    </div>
    </>
  )
}

export default ContactPage
