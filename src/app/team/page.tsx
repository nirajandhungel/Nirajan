"use client";

import React, { useState } from "react";
import Head from "next/head";
import CtaSection from "../../components/consultant";
import Testimony from "../../components/testimony";

const teamMembers = [
  {
    name: "Shishab Shrestha",
    role: "Founder",
    img: "/media/team/shishab-shrestha.jpeg",
    bio: "Visionary leader with 5+ years in teaching languages",
  },
  {
    name: "Dev Bhusan Bhatta",
    role: "Python Developer",
    img: "/media/team/dev-bhusan-bhatta.jpeg",
    bio: "Operations expert driving efficiency",
  },
  {
    name: "Nirush Man Shrestha",
    role: "Go Developer",
    img: "/media/team/nirush-man-shrestha.jpeg",
    bio: "Agile PM delivering results on time",
  },
  {
    name: "Utsav Acharya",
    role: "Java Developer",
    img: "/media/team/utsav-acharya.jpeg",
    bio: "Growth strategist expanding horizons",
  },
  {
    name: "Rohit Tandukar",
    role: "Flutter Developer",
    img: "/media/team/rohit-tandukar.png",
    bio: "Financial precision and compliance",
  },
  {
    name: "Rojan Maharjan",
    role: "MERN Developer",
    img: "/media/team/rojan-maharjan.jpeg",
    bio: "Strategic financial planning leader",
  },
  {
    name: "Utsab Acharya",
    role: "Django Developer",
    img: "/media/team/utsab-acharya.jpg",
    bio: "Strategic financial planning leader",
  },
  {
    name: "Rijan Shrestha",
    role: "Frontend Developer",
    img: "/media/team/rijan-shrestha.jpeg",
    bio: "Strategic financial planning leader",
  },
];

const values = [
  {
    icon: "/media/trophy.gif",
    title: "Excellence",
    description:
      "We strive for perfection in every line of code and every client interaction",
  },
  {
    icon: "/media/contract.gif",
    title: "Collaboration",
    description:
      "Together we achieve more through teamwork and open communication",
  },
  {
    icon: "/media/innovation.gif",
    title: "Innovation",
    description:
      "Constantly learning and adapting to cutting-edge technologies",
  },
  {
    icon: "/media/growth.gif",
    title: "Growth",
    description: "Personal and professional development is at our core",
  },
];

const perks = [
  { icon: "💼", text: "Flexible Work Hours" },
  { icon: "🏠", text: "Remote Work Options" },
  { icon: "📚", text: "Learning & Development" },
  { icon: "🎉", text: "Team Events" },
  { icon: "🏥", text: "Health Benefits" },
  { icon: "🌴", text: "Paid Time Off" },
];

import { useEnquiryModal } from "../EnquiryContext";

import Image from 'next/image';

const TeamPage: React.FC = () => {
  const { openEnquiry } = useEnquiryModal();

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nirajan Dhungel IT Team - Kathmandu",
    url: "https://nirajandhungel.com.np/team",
    description:
      "Expert team of software engineers and web developers in Kathmandu, Nepal. Specializing in high-performance digital solutions.",
    founder: {
      "@type": "Person",
      name: "Nirajan Dhungel",
    },
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      worksFor: {
        "@type": "Organization",
        "name": "Nirajan Dhungel - Software engineering in Nepal",
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Expert IT Team in Kathmandu | Software Developers Nepal | Nirajan Dhungel</title>
        <meta
          name="description"
          content="Meet the professional software engineers and web developers in Kathmandu, Nepal at Nirajan Dhungel's team. Delivering top-tier IT services and app development."
        />
        <meta
          name="keywords"
          content="web development team Nepal, software developers Kathmandu, SEO experts Nepal, digital marketing team, React developers, full stack team"
        />
        <meta
          property="og:title"
          content="Our Team - Meet the Experts | Nirajan Dhungel"
        />
        <meta
          property="og:description"
          content="Talented professionals dedicated to delivering excellence in web development, design, and digital marketing solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nirajandhungel.com.np/nirajandhungel3.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@SubashDhungel18" />
        <link rel="canonical" href="https://nirajandhungel.com.np/team" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <article className="animate-fade-in">
        {/* Banner Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
              <div className="space-y-4 sm:space-y-6">
                <h6 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">
                  Our Kathmandu-Based Team
                </h6>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                  Expert <span className="text-primary">Software Engineers</span> in Nepal
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  We are a dedicated team of IT professionals in Kathmandu, bringing together years of experience in web and app development to solve your complex business challenges.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/media/office-work.svg"
                  alt="Professional IT team collaboration in Kathmandu, Nepal"
                  title="Software Development Team at Work"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg animate-float"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Core Values of Our <span className="text-primary">Kathmandu IT Team</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                The principles that guide our software development process in Nepal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/20"
                >
                  {/* Animated Icon */}
                  <div className="mb-5 flex justify-center lg:justify-start">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300 relative"
                    >
                      <Image
                        src={value.icon}
                        alt={`${value.title} - IT Service Value`}
                        title={value.title}
                        width={64}
                        height={64}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fafafa] to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Professional <span className="text-primary">Developers in Nepal</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
                Skilled engineers dedicated to delivering excellence in every IT project.
              </p>
            </div>

            {/* Team Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Card Container */}
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <Image
                        src={member.img}
                        alt={`${member.name} - ${member.role} in Kathmandu, Nepal`}
                        title={`${member.name} | ${member.role}`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-70 sm:opacity-60 sm:group-hover:opacity-90 transition-opacity duration-500"></div>
                    </div>

                    {/* Info Section - Always visible on mobile, animated on desktop */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 sm:transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-0.5 sm:w-8 bg-primary sm:group-hover:w-12 transition-all duration-500"></div>
                          <span className="text-primary text-[10px] sm:text-sm font-bold uppercase tracking-wider">
                            {member.role}
                          </span>
                        </div>
                        <p className="text-white/80 text-[10px] sm:text-xs mt-1 sm:mt-2 line-clamp-2">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="https://illustrations.popsy.co/amber/remote-work.svg"
                  alt="Remote software development culture in Nepal"
                  title="Collaborative Tech Culture"
                  className="w-full max-w-md mx-auto lg:max-w-full rounded-2xl"
                  width={600}
                  height={400}
                />
              </div>
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Why Join <span className="text-primary">Our Team?</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                  We believe in creating an environment where talent thrives.
                  Join a team that values innovation, collaboration, and
                  continuous growth. Here's what makes us different:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {perks.map((perk, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                    >
                      <span className="text-xl sm:text-2xl">{perk.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">
                        {perk.text}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={openEnquiry}
                  className="mt-4 sm:mt-6 w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Join Our Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
    <Testimony/>


        <CtaSection onOpenEnquiry={openEnquiry} />
      </article>
    </>
  );
};

export default TeamPage;
