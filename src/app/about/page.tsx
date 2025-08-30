"use client";

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  const skills = {
    frontend: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 40 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
    tools: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "CI/CD", level: 35 },
      { name: "AWS", level: 25 },
    ],
  };

  const experiences = [
    {
      title: "IT Intern",
      company: "Nepal Tourism Board",
      period: "2025",
      location: "Kathmandu, Nepal",
      type: "Internship",
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
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <div className="container max-w-7xl mx-auto py-16 px-4">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" {...fadeInDown}>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 text-lg text-gray-600 dark:text-gray-300 mb-6"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <FaMapMarkerAlt className="text-red-500" />
            <span>Kathmandu, Nepal</span>
          </motion.div>

          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Software Engineering student with a passion for building impactful
            technology and exploring entrepreneurial opportunities. I specialize
            in developing MERN stack applications, launching innovative tech
            projects, and sharing knowledge through YouTube.
          </motion.p>
        </motion.div>

        {/* Skills Section - Option 3: Simplified Text-Based List */}
        <motion.section
          className="mb-20"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Frontend Skills */}
            <motion.div
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl mr-4">
                  <FaCode className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Frontend
                </h3>
              </div>
              <ul className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 rounded-full mr-3" />
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl mr-4">
                  <FaLaptopCode className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Backend
                </h3>
              </div>
              <ul className="space-y-3">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 rounded-full mr-3" />
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools & Others */}
            <motion.div
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl mr-4">
                  <FaGraduationCap className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Tools & Others
                </h3>
              </div>
              <ul className="space-y-3">
                {skills.tools.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1 h-6 bg-blue-500 rounded-full mr-3" />
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-20"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                        <FaBriefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <FaCalendarAlt className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                variants={fadeInUp}
                {...cardHoverSmall}
              >
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full -translate-y-12 -translate-x-12"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-start mb-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg mr-3 mt-1">
                        <FaGraduationCap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <FaCalendarAlt className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{edu.period}</span>
                      </div>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <FaMapMarkerAlt className="h-4 w-4 mr-2" />
                        <span>{edu.location}</span>
                        <FaExternalLinkAlt className="h-3 w-3 ml-1" />
                      </a>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        edu.status === "In Progress"
                          ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400"
                          : "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center mt-20"
          {...fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-black to-green-600 p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Let&apos;s Build Something Amazing Together!
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to collaborate with like-minded developers
              and creators. Whether you have a project idea or just want to
              connect, let&apos;s make it happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
