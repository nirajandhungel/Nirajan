'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaStar} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-green-900/20 dark:to-blue-900/20">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            My Projects
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            A collection of projects showcasing my expertise in full-stack development, 
            modern web technologies, and creative problem-solving.
          </motion.p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title + index}
              variants={itemVariants}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl border border-green-100 dark:border-green-900/50 overflow-hidden transition-all duration-500"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)"
              }}
            >
              {/* Project Image with Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 text-green-600 rounded-full shadow-lg backdrop-blur-sm hover:bg-green-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 text-blue-600 rounded-full shadow-lg backdrop-blur-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                  </motion.a>
                </motion.div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <motion.div 
                    className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FaStar className="h-3 w-3" />
                    Featured
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Links */}
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 font-medium shadow-lg"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaCode className="h-4 w-4" />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaEye className="h-4 w-4" />
                    <span>Live</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.section
          className="text-center mt-20"
          {...fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-black to-green-600 p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Have a Project in Mind ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-white\/10 {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  )
}