"use client";

import Link from "next/link";
import Image from "next/image";
import { FaEnvelope } from 'react-icons/fa';


import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, scaleIn } from "@/utils/animations";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 min-h-screen flex items-center overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Image section */}
          <motion.div
            className="flex justify-center items-center mb-4"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              priority={true}
              alt="Profile Image"
              width={100}
              height={100}
              fetchPriority="high"
              className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
            />
          </motion.div>

          {/* Main Heading */}
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-800 dark:text-white">Hi, I&apos;m </span>
            <motion.span
              className="bg-gradient-to-r from-emerald-700  to-blue-700 bg-clip-text text-transparent"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Nirajan Dhungel
            </motion.span>
          </motion.h1>

          {/* Email */}
{/* Email */}
<motion.p
  className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8 mt-[-10px] tracking-wide"
  {...fadeInUp}
  transition={{ delay: 0.35 }}
>
  <a
    href="mailto:info@nirajandhungel.com.np"
    className="flex items-center gap-2 justify-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
  >
<FaEnvelope className="h-4 w-4 text-gray-600 dark:text-gray-300" />:
    info@nirajandhungel.com.np
  </a>
</motion.p>


          {/* Subtitle */}
          <motion.div
            className="mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Full Stack | MERN | Web Products Developer
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {["React", "Node.js", "MongoDB", "Express", "Next.js"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-10"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            {[
              {
                href: "https://github.com/nirajandhungel",
                icon: FaGithub,
                label: "GitHub",
                color: "hover:text-gray-800 dark:hover:text-white",
              },
              {
                href: "https://www.linkedin.com/in/nirajan-dhungel/",
                icon: FaLinkedin,
                label: "LinkedIn",
                color: "hover:text-blue-600",
              },
              {
                href: "https://www.instagram.com/nirajan.dhungel19/",
                icon: FaInstagram,
                label: "Instagram",
                color: "hover:text-pink-500",
              },
              {
                href: "https://x.com/SubashDhungel18",
                icon: FaTwitter,
                label: "Twitter",
                color: "hover:text-blue-400",
              },
              {
                href: "https://www.youtube.com/@nirajan.dhungel",
                icon: FaYoutube,
                label: "YouTube",
                color: "hover:text-red-500",
              },
            ].map(({ href, icon: Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Nirajan Dhungel's ${label} profile`}
                className={`text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-125`}
                whileHover={{
                  scale: 1.3,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link
                href="/nirajan_cv.pdf"
                target="_blank"
                download
                className="relative inline-block w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25"
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link
                href="/contact"
                className="relative inline-block w-full sm:w-auto overflow-hidden rounded-xl border-2 border-emerald-600 bg-transparent px-8 py-4 text-emerald-600 dark:text-emerald-400 font-semibold transition-all duration-300   hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <span className="relative z-10">Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
