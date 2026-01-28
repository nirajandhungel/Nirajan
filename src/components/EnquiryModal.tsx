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

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && status !== 'submitting') {
            handleClose();
        }
    };

    const handleClose = () => {
        if (status !== 'submitting') {
            // Reset form when closing
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
                // Reset form data
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
                <div 
                    className="fixed inset-0 z-9999 flex items-center justify-center p-4"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/40"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 w-full max-w-lg bg-white rounded-xl shadow-2xl"
                    >
                        <button 
                            onClick={handleClose}
                            disabled={status === 'submitting'}
                            className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-foreground font-outfit">
                                    Quick Enquiry
                                </h2>
                                <p className="text-muted-foreground mt-1 text-sm">
                                    We'll get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-foreground block mb-1.5">
                                        Name *
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground block mb-1.5">
                                        Email *
                                    </label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground block mb-1.5">
                                        Phone
                                    </label>
                                    <input 
                                        type="tel" 
                                        placeholder="+1 (123) 456-7890"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground block mb-1.5">
                                        Service
                                    </label>
                                    <select 
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                        className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-foreground transition-all text-sm"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="web">Website Development</option>
                                        <option value="app">App Development</option>
                                        <option value="seo">SEO & Digital Marketing</option>
                                        <option value="design">UI/UX Design</option>
                                        <option value="consulting">Others</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-foreground block mb-1.5">
                                        Message *
                                    </label>
                                    <textarea 
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        rows={4}
                                        disabled={status === 'submitting'}
                                        className="w-full px-3.5 py-2.5 bg-white border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
                                {statusMessage && (
                                    <div className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                                        status === 'success' 
                                            ? 'bg-green-50 text-green-700 border border-green-200' 
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                    }`}>
                                        {status === 'success' ? (
                                            <CheckCircle size={16} className="flex-shrink-0" />
                                        ) : (
                                            <AlertCircle size={16} className="flex-shrink-0" />
                                        )}
                                        <span>{statusMessage}</span>
                                    </div>
                                )}

                                <button
                                    onClick={handleSubmit}
                                    disabled={status === 'submitting' || status === 'success'}
                                    className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle size={16} />
                                            Sent Successfully
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="mt-6 pt-4 border-t border-border">
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span>9825883910</span>
                                    <span>•</span>
                                    <span>info@nirajandhungel.com.np</span>
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