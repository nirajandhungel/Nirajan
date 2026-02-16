

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ContactCTA } from "@/components/contact-cta";

const leadDeveloper = {
  name: "Nirajan Dhungel",
  role: "Lead Developer & Founder",
  img: "/nirajandhungel3.png",
  bio: "Full-stack developer with strong system design fundamentals, experienced in building, deploying, and scaling modern web applications. Comfortable with load balancing, NGINX reverse proxy, CI/CD pipelines, and cloud-based deployments for production-ready systems.",
  skills: [
    "System Design",
    "Load Balancing",
    "NGINX & Reverse Proxy",
    "CI/CD Pipelines",
    "Cloud Deployment",
    "Backend Development",
  ],
};


const teamMembers = [
  {
    name: "Shishab Shrestha",
    role: "Senior Developer",
    img: "/media/team/shishab-shrestha.jpeg",
    bio: "Expert developer with 5+ years of experience in modern web technologies",
  },
  {
    name: "Dev Bhusan Bhatta",
    role: "Python Developer",
    img: "/media/team/dev-bhusan-bhatta.jpeg",
    bio: "Backend specialist focusing on scalable Python applications",
  },
  {
    name: "Nirush Man Shrestha",
    role: "Go Developer",
    img: "/media/team/nirush-man-shrestha.jpeg",
    bio: "Performance-driven developer specializing in Go applications",
  },
  {
    name: "Utsav Acharya",
    role: "Java Developer",
    img: "/media/team/utsav-acharya.jpeg",
    bio: "Enterprise Java developer with strong architecture skills",
  },
  {
    name: "Rohit Tandukar",
    role: "Flutter Developer",
    img: "/media/team/rohit-tandukar.png",
    bio: "Mobile app developer creating cross-platform solutions",
  },
  {
    name: "Rojan Maharjan",
    role: "MERN Developer",
    img: "/media/team/rojan-maharjan.jpeg",
    bio: "Full-stack developer specializing in MERN stack",
  },
  {
    name: "Utsab Acharya",
    role: "Django Developer",
    img: "/media/team/utsab-acharya.jpg",
    bio: "Django specialist building robust web applications",
  },
  {
    name: "Rijan Shrestha",
    role: "Frontend Developer",
    img: "/media/team/rijan-shrestha.jpeg",
    bio: "UI/UX focused developer creating beautiful interfaces",
  },
];

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meet the Team | Nirajan Dhungel - Software Engineers & Developers",
  description: "Get to know the expert team behind Nirajan Dhungel. A collective of skilled Software Engineers, Full Stack Developers, and Designers in Kathmandu dedicated to your success.",
  keywords: [
    'Nirajan Dhungel Team',
    'Software Engineers Kathmandu',
    'Web Developers Nepal',
    'Hire Developers Nepal',
    'IT Team Kathmandu',
    'React Developers Nepal'
  ],
  openGraph: {
    title: "Expert Software Engineering Team | Nirajan Dhungel",
    description: "Meet the talented professionals driving digital innovation in Nepal. Lead by Nirajan Dhungel, our team delivers world-class software solutions.",
    url: "https://nirajandhungel.com.np/team",
    type: "website",
    siteName: "Nirajan Dhungel",
    images: [
      {
        url: "/media/team/nirajan-dhungel-team.jpg", // Assuming a generic team image or reuse main one
        width: 1200,
        height: 630,
        alt: "Nirajan Dhungel Engineering Team",
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

const TeamPage = () => {
  return (
    <div className="animate-fade-in bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #ffd700 0%, transparent 70%)',
            }}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-sm text-primary font-bold uppercase tracking-widest">Expert Team</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Meet <span className="text-heading-gold">Our Team</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              A talented team of developers bringing years of experience to deliver 
              exceptional digital solutions for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Developer Section */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="card-cinematic p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative">
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full -z-10"
                    style={{
                      background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
                    }}
                  />
                  <Image
                    src={leadDeveloper.img}
                    alt={leadDeveloper.name}
                    width={400}
                    height={400}
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
                    }}
                  />
                </div>
                
                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      {leadDeveloper.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-[2px] bg-primary"></div>
                      <span className="text-primary font-bold uppercase tracking-wider text-sm">
                        {leadDeveloper.role}
                      </span>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      {leadDeveloper.bio}
                    </p>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Core Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {leadDeveloper.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Our <span className="text-heading-gold">Talented Developers</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Skilled professionals dedicated to delivering excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="card-cinematic overflow-hidden hover:-translate-y-2 transition-all duration-500">
                  {/* Image Container */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <Image
                      src={member.img}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>

                  {/* Info Section */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-white leading-tight">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-primary group-hover:w-12 transition-all duration-500"></div>
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">
                          {member.role}
                        </span>
                      </div>
                      <p className="text-white/80 text-xs mt-2 line-clamp-2">
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

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default TeamPage;
