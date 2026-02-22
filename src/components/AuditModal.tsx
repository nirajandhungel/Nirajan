'use client';

import React, { useState } from 'react';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleClose = () => {
    if (status !== 'submitting') {
      setEmail('');
      setWebsite('');
      setStatus('idle');
      setStatusMessage('');
      onClose();
    }
  };

  const handleSubmit = async () => {
    if (!email?.trim()) {
      setStatus('error');
      setStatusMessage('Please enter your email.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/checklist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), website: website.trim() || undefined }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage(
          result.message ||
            "Check your inbox for the SEO checklist. I'll send your personalised audit with actionable fixes soon."
        );
        setEmail('');
        setWebsite('');
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.4,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg bg-[#111111] border border-white/10 rounded-sm shadow-[0_0_50px_rgba(196,30,58,0.15)] overflow-hidden cursor-default"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-sm blur-[80px] animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent/5 rounded-sm blur-[80px]" />
            <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-white/10 rounded-tl-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-40 h-40 border-r border-b border-white/5 rounded-br-full pointer-events-none" />

            <button
              onClick={handleClose}
              disabled={status === 'submitting'}
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-white rounded-sm hover:bg-white/5 transition-all disabled:opacity-50 z-20"
            >
              <X size={20} />
            </button>

            <div className="relative p-8 md:p-10 z-10">
              <div className="mb-8">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-black text-heading-gold uppercase tracking-tight"
                >
                  Free SEO / Website Audit
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground mt-2 text-sm max-w-[320px] leading-relaxed"
                >
                  Tell me about your site and I&apos;ll send you a <span className="text-accent">personalised audit</span> with
                  actionable fixes — plus the free SEO checklist. No strings attached.
                </motion.p>
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-accent uppercase tracking-widest px-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm text-white placeholder:text-muted-foreground/50 hover:bg-white/[0.08]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-accent uppercase tracking-widest px-1">
                    Your site URL <span className="text-muted-foreground/70">(optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://yoursite.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm text-white placeholder:text-muted-foreground/50 hover:bg-white/[0.08]"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`flex items-center gap-3 p-4 rounded-sm text-sm border ${
                        status === 'success'
                          ? 'bg-green-500/10 text-green-400 border-green-500/20'
                          : 'bg-primary/10 text-primary-light border-primary/20'
                      }`}
                    >
                      {status === 'success' ? (
                        <CheckCircle size={18} className="flex-shrink-0" />
                      ) : (
                        <AlertCircle size={18} className="flex-shrink-0" />
                      )}
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full btn-primary-cinematic text-white py-4 px-6 rounded-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 text-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      Done
                    </>
                  ) : (
                    <>
                      Request Free Audit
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider text-center">
                  You&apos;ll get the checklist PDF and next steps in your inbox.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;
