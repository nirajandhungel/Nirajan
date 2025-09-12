"use client";

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaRocket,
  FaLightbulb,
  FaTrophy,
  FaStar,
  FaChevronRight
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
} from "@/utils/animations";

export default function About() {
  const skills = {
    frontend: [
      { name: "React / Next.js", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 40, icon: "🔷" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "HTML5 / CSS3", level: 95, icon: "🌐" },
    ],
    backend: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express", level: 80, icon: "🚀" },
      { name: "MySQL", level: 75, icon: "🗄️" },
      { name: "MongoDB", level: 80, icon: "🍃" },
    ],
    tools: [
      { name: "Git / GitHub", level: 90, icon: "📚" },
      { name: "Docker", level: 60, icon: "🐳" },
      { name: "CI/CD", level: 35, icon: "🔄" },
      { name: "AWS", level: 25, icon: "☁️" },
    ],
  };

  const experiences = [
    {
      title: "IT Intern",
      company: "Nepal Tourism Board",
      period: "2025",
      location: "Kathmandu, Nepal",
      type: "Internship",
      icon: "🏢",
      achievements: [
        "Led development of multiple web applications using React and Node.js",
        "Implemented CI/CD pipelines reducing deployment time by 50%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
      ],
    },
  ];

  const education = [
    {
      degree: "BSc. (Hons) in Software Engineering",
      institution: "University of Bedfordshire",
      period: "2024 - 2027",
      location: "PCPS College",
      website: "https://patancollege.edu.np/",
      description:
        "Pursuing with honors. Focused on software engineering and AI/ML.",
      status: "In Progress",
      icon: "🎓",
      gpa: "First Class Honours Track"
    },
    {
      degree: "School Leaving Certificate (SLC)",
      institution: "National Examinations Board",
      period: "2022 - 2024",
      location: "V. S. Niketan College",
      website: "https://vsniketan.edu.np/",
      description:
        "Completed 10+2 (Science Stream) under NEB, Nepal, with a GPA of 3.71.",
      status: "Completed",
      icon: "📚",
      gpa: "3.71 GPA"
    },
  ];

  const highlights = [
    { icon: FaRocket, title: "MERN Stack Developer", desc: "Full-stack expertise", color: "from-blue-500 to-blue-600" },
    { icon: FaLightbulb, title: "Tech Entrepreneur", desc: "Innovation focused", color: "from-green-500 to-green-600" },
    { icon: FaTrophy, title: "YouTube Creator", desc: "Knowledge sharing", color: "from-yellow-500 to-yellow-600" },
    { icon: FaStar, title: "Problem Solver", desc: "Creative solutions", color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="min-h-screen  py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          {...fadeInDown}
        >

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-lg border border-emerald-100 dark:border-emerald-800/30">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="font-medium">Kathmandu, Nepal</span>
            </div>
          </motion.div>

          <motion.p
            className="text-l md:text-xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Software Engineering student with a passion for building impactful
            technology and exploring entrepreneurial opportunities. I specialize
            in developing MERN stack applications, launching innovative tech
            projects, and sharing knowledge through YouTube.
          </motion.p>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-800/30 hover:shadow-xl transition-all duration-300 "
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="text-xl text-white" />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-2">{highlight.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{highlight.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          className="mb-24"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              Technical Skills
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-l text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive skill set spanning full-stack development and modern technologies
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Frontend Skills */}
            <motion.div
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-emerald-100 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaCode className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Frontend</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">User Interface</p>
                </div>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group/item p-2 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full "
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-emerald-100 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaLaptopCode className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Backend</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Server Side</p>
                </div>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group/item p-2 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.9 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Others */}
            <motion.div
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-emerald-100 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Tools & DevOps</h3>
                  <p className="text-yellow-600 dark:text-yellow-400 font-medium">Development</p>
                </div>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group/item p-2 rounded-2xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-teal-600 dark:text-teal-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 1.0 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-24"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              Professional Experience
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-l text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Real-world experience building solutions and leading development teams
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border-2 border-emerald-100 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {exp.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <FaBriefcase className="text-xl text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-">
                            {exp.title}
                          </h3>
                          <p className="text-l text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
                          <FaCalendarAlt className="text-black dark:text-white" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/30 rounded-full">
                          <FaMapMarkerAlt className="text-red-600 dark:text-red-400" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{exp.location}</span>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg">
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-start gap-4 p-4 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 + 0.5 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1">
                          <FaChevronRight className="text-white text-xs" />
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              Education
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-l text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Academic foundation in software engineering and computer science
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border-2 border-emerald-100 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {edu.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0 lg:pr-8">
                      <div className="flex items-start mb-4">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <FaGraduationCap className="text-xl text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {edu.institution}
                          </p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                            <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">{edu.gpa}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
                          <FaCalendarAlt className="text-emerald-600 dark:text-white" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{edu.period}</span>
                        </div>
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-green-900/30 rounded-full hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 group/link"
                        >
                          <FaMapMarkerAlt className="text-red-600 dark:text-red-400" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{edu.location}</span>
                          <FaExternalLinkAlt className="text-blue-600 dark:text-blue-400 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>

                      <p className="text-l text-slate-700 dark:text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <motion.div
                        className={`px-6 py-3 rounded-2xl font-bold text-lg shadow-lg ${
                          edu.status === "In Progress"
                            ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white"
                            : "bg-gradient-to-r from-green-500 to-green-600 text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {edu.status}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}