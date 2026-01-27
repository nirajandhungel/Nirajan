"use client";

import React from "react";
import CtaSection from "@/components/consultant";
import { localBusinessSchema } from "@/lib/structured-data";
import { useEnquiryModal } from "../EnquiryContext";
import { CONTACT, SOCIAL_LINKS, WHATSAPP } from "@/data/contact";
import { getWhatsAppLink } from "@/lib/smart-links";

// Note: Metadata cannot be exported from client components
// Add metadata in a parent server component or layout if needed

const ContactPage: React.FC = () => {
  const { openEnquiry } = useEnquiryModal();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  const contactInfo = [
    {
      title: "Phone Number",
      value: CONTACT.phone.display,
      icon: "fa-phone",
      link: `tel:${CONTACT.phone.tel}`,
    },
    {
      title: "Email Address",
      value: CONTACT.email,
      icon: "fa-envelope",
      link: `mailto:${CONTACT.email}?subject=Inquiry from Website`,
    },
    {
      title: "Location",
      value: CONTACT.location,
      icon: "fa-location-dot",
      link: "https://www.google.com/maps/place/Kathmandu,+Nepal",
    },
    {
      title: "Availability",
      value: "Available for Freelance",
      icon: "fa-briefcase",
      link: getWhatsAppLink(WHATSAPP.fullNumber),
    },
  ];

  const socialLinks = [
    {
      name: SOCIAL_LINKS.github.name,
      url: SOCIAL_LINKS.github.url,
      icon: "fa-brands fa-github",
    },
    {
      name: SOCIAL_LINKS.linkedin.name,
      url: SOCIAL_LINKS.linkedin.url,
      icon: "fa-brands fa-linkedin",
    },
    {
      name: SOCIAL_LINKS.instagram.name,
      url: SOCIAL_LINKS.instagram.url,
      icon: "fa-brands fa-instagram",
    },
    {
      name: SOCIAL_LINKS.facebook.name,
      url: SOCIAL_LINKS.facebook.url,
      icon: "fa-brands fa-facebook",
    },
    {
      name: SOCIAL_LINKS.twitter.name,
      url: SOCIAL_LINKS.twitter.url,
      icon: "fa-brands fa-twitter",
    },
    {
      name: SOCIAL_LINKS.medium.name,
      url: SOCIAL_LINKS.medium.url,
      icon: "fa-brands fa-medium",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div className="animate-fade-in">
        {/* Title Section */}
        <section className="py-20 ">
          <div className="container mx-auto px-4 md:px-10 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground uppercase tracking-tight">
              Contact <span className="text-primary">Nirajan Dhungel</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get in touch for professional website development services in
              Nepal
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-10">
            <div className="bg-[#f2f6ff] rounded-[2.5rem] p-8 md:p-16 overflow-hidden border border-border/40">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-7">
                  <h2 className="text-3xl font-extrabold text-foreground mb-2">
                    Get In Touch
                  </h2>
                  <h6 className="text-muted-foreground font-semibold mb-10">
                    We are Here For You. Can we Help?
                  </h6>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Subject *"
                        className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                      />
                    </div>
                    <textarea
                      required
                      placeholder="Message *"
                      rows={5}
                      className="w-full bg-white border border-transparent focus:border-primary p-4 rounded-xl outline-none shadow-sm transition-all"
                    ></textarea>

                    <button
                      type="submit"
                      className="px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-black transition-all"
                    >
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
                      <h3 className="text-xs font-bold uppercase text-muted-foreground mb-1 tracking-widest">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                      >
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
              <p className="text-muted-foreground text-lg">
                Follow me on social platforms to stay updated
              </p>
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
                  <i
                    className={`${social.icon} text-4xl text-foreground group-hover:text-primary transition-colors mb-3`}
                  ></i>
                  <h3 className="text-sm font-bold text-foreground">
                    {social.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>



        <CtaSection onOpenEnquiry={openEnquiry} />
      </div>
    </>
  );
};

export default ContactPage;
