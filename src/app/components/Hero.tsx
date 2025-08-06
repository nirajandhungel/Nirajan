'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image src="/profile.png" priority={true} alt="Profile Image" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Nirajan Dhungel
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | MERN | Open Source Contributor
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/nirajandhungel"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="Visit Nirajan Dhungel's GitHub profile"
              className="text-2xl text-gray-600 hover:text-icon dark:text-gray-300 dark:hover:text-icon transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nirajan-dhungel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nirajan Dhungel's Linkedin profile"
              className="text-2xl text-gray-600 hover:text-icon dark:text-gray-300 dark:hover:text-icon transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/nirajan.dhungel19/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nirajan Dhungel's Instagram profile"
              className="text-2xl text-gray-600 hover:text-icon dark:text-gray-300 dark:hover:text-icon transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://x.com/SubashDhungel18"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="Visit Nirajan Dhungel's Twitter / X profile"
              className="text-2xl text-gray-600 hover:text-icon dark:text-gray-300 dark:hover:text-icon transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@nirajan.dhungel"
              target="_blank"
              rel="noopener noreferrer"
               aria-label="Visit Nirajan Dhungel's Youtube Channel"
              className="text-2xl text-gray-600 hover:text-icon dark:text-gray-300 dark:hover:text-icon transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className=" inline-block w-full bg-gray-300  md:w-auto text-gray-800 dark:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 