'use client'

import { useState } from 'react'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'subashdhungel555@gmail.com',
      href: 'mailto:subashdhungel555@gmail.com',
      color: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+977 9825883910',
      href: 'tel:+9779825883910',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+977 9825883910',
      href: 'https://wa.me/9779825883910',
      color: 'text-green-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Kathmandu, Nepal',
      href: 'https://maps.google.com/?q=Kathmandu,Nepal',
      color: 'text-teal-600 dark:text-teal-400'
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nirajan-dhungel',
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/nirajandhungel',
      color: 'hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/20'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/SubashDhungel18',
      color: 'hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://instagram.com/nirajan.dhungel19',
      color: 'hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >

                  <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Let&apos;t Connect
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I&apos;d love to hear about your project and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            {...slideInLeft}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-800/30">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-3"></span>
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-700/50"
                    whileHover={{ x: 8, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`text-xl ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm break-all">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <motion.div 
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-800/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-3"></span>
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <social.icon className="text-xl" />
                    <span className="font-medium text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            {...slideInRight}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-emerald-100 dark:border-emerald-800/30">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-3"></span>
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    className="relative"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-4 rounded-2xl border-2 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'name' 
                          ? 'border-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/30' 
                          : 'border-slate-200 dark:border-slate-600'
                      } hover:border-emerald-300 dark:hover:border-emerald-600`}
                      placeholder="Enter your full name"
                      animate={{
                        scale: focusedField === 'name' ? 1.02 : 1,
                      }}
                    />
                  </motion.div>

                  <motion.div 
                    className="relative"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-4 rounded-2xl border-2 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/30' 
                          : 'border-slate-200 dark:border-slate-600'
                      } hover:border-emerald-300 dark:hover:border-emerald-600`}
                      placeholder="Enter your email address"
                      animate={{
                        scale: focusedField === 'email' ? 1.02 : 1,
                      }}
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="relative"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-4 rounded-2xl border-2 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm transition-all duration-300 focus:outline-none ${
                      focusedField === 'subject' 
                        ? 'border-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/30' 
                        : 'border-slate-200 dark:border-slate-600'
                    } hover:border-emerald-300 dark:hover:border-emerald-600`}
                    placeholder="What's this about?"
                    animate={{
                      scale: focusedField === 'subject' ? 1.02 : 1,
                    }}
                  />
                </motion.div>

                <motion.div 
                  className="relative"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`w-full px-4 py-4 rounded-2xl border-2 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message' 
                        ? 'border-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/30' 
                        : 'border-slate-200 dark:border-slate-600'
                    } hover:border-emerald-300 dark:hover:border-emerald-600`}
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    animate={{
                      scale: focusedField === 'message' ? 1.02 : 1,
                    }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-green-700 dark:text-green-400"
                    >
                      <FaCheckCircle className="text-xl flex-shrink-0" />
                      <p className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-700 dark:text-red-400"
                    >
                      <FaExclamationCircle className="text-xl flex-shrink-0" />
                      <p className="font-medium">Failed to send message. Please try again or contact me directly.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-full text-emerald-700 dark:text-emerald-300">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Usually responds within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}