'use client'

import React, { useState } from 'react';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [honeypot, setHoneypot] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');
    const [statusMessage, setStatusMessage] = useState('');


    const handleClose = () => {
        if (status !== 'submitting') {
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            setHoneypot('');
            setStatus('idle');
            setStatusMessage('');
            onClose();
        }
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setStatusMessage('Please fill in all required fields.');
            return;
        }

        setStatus('submitting');
        setStatusMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    formSource: 'Quick Enquiry',
                    honeypot
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setStatusMessage(result.message || "Your message has been sent successfully. We'll get back to you shortly.");
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(result.message || 'Failed to send message. Please try again.');
            }
        } catch {
            setStatus('error');
            setStatusMessage('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
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
                            type: "spring", 
                            damping: 25, 
                            stiffness: 300,
                            duration: 0.4 
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 w-full max-w-lg bg-[#111111] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(196,30,58,0.15)] overflow-hidden cursor-default"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse-glow" />
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
                        
                        {/* Organic Decorative Arcs */}
                        <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-white/10 rounded-tl-full pointer-events-none" />
                        <div className="absolute bottom-10 right-10 w-40 h-40 border-r border-b border-white/5 rounded-br-full pointer-events-none" />

                        <button 
                            onClick={handleClose}
                            disabled={status === 'submitting'}
                            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-white rounded-full hover:bg-white/5 transition-all disabled:opacity-50 z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative p-8 md:p-10 z-10">
                            <div className="mb-8">
                                <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-3xl font-black text-heading-gold font-outfit uppercase tracking-tight"
                                >
                                    Quick Enquiry
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-muted-foreground mt-2 text-sm max-w-[280px] leading-relaxed"
                                >
                                    Have a vision? Let&apos;s bring it to life. I&apos;ll get back to you within <span className="text-accent underline underline-offset-4">24 hours</span>.
                                </motion.p>
                            </div>

                            <div className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-accent uppercase tracking-widest px-1">
                                            Name
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm text-white placeholder:text-muted-foreground/50 hover:bg-white/[0.08]"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-accent uppercase tracking-widest px-1">
                                            Email
                                        </label>
                                        <input 
                                            type="email" 
                                            placeholder="hello@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm text-white placeholder:text-muted-foreground/50 hover:bg-white/[0.08]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-accent uppercase tracking-widest px-1">
                                            Phone
                                        </label>
                                        <input 
                                            type="tel" 
                                            placeholder="+977 98..."
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm text-white placeholder:text-muted-foreground/50 hover:bg-white/[0.08]"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-accent uppercase tracking-widest px-1">
                                            Service
                                        </label>
                                        <select 
                                            value={formData.service}
                                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                                            className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none text-sm text-white transition-all appearance-none cursor-pointer hover:bg-[#222]"
                                        >
                                            <option value="" disabled className="bg-[#1a1a1a]">Select Service</option>
                                            <option value="web" className="bg-[#1a1a1a]">Website Development</option>
                                            <option value="app" className="bg-[#1a1a1a]">App Development</option>
                                            <option value="seo" className="bg-[#1a1a1a]">SEO & Digital Marketing</option>
                                            <option value="design" className="bg-[#1a1a1a]">UI/UX Design</option>
                                            <option value="consulting" className="bg-[#1a1a1a]">Others</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-accent uppercase tracking-widest px-1">
                                        Project Details
                                    </label>
                                    <textarea 
                                        placeholder="Tell me about your amazing project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        rows={4}
                                        disabled={status === 'submitting'}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none resize-none transition-all text-sm text-white placeholder:text-muted-foreground/50 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/[0.08]"
                                    ></textarea>
                                </div>

                                {/* Honeypot field - hidden from users, visible to bots */}
                                <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                                    <label htmlFor="website-url">Website</label>
                                    <input 
                                        type="text" 
                                        id="website-url"
                                        name="website"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                    />
                                </div>

                                {/* Status message */}
                                <AnimatePresence mode="wait">
                                    {statusMessage && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className={`flex items-center gap-3 p-4 rounded-xl text-sm border ${
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
                                    className="w-full btn-primary-cinematic text-white py-4 px-6 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 text-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Processing...
                                        </>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle size={18} />
                                            Sent Successfully
                                        </>
                                    ) : (
                                        <>
                                            Launch Enquiry
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                    <div className="flex items-center gap-4">
                                        <span className="hover:text-accent transition-colors cursor-default">+977 9825883910</span>
                                        <span className="w-1 h-1 bg-white/20 rounded-full hidden md:block" />
                                        <span className="hover:text-accent transition-colors lowercase cursor-default">info@nirajandhungel.com.np</span>
                                    </div>
                                    <div className="text-white/30 italic font-mono lowercase tracking-normal">
                                        nirajandhungel.com.np
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;