import React from 'react';
import { Github, Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light text-gray-900 pt-24 pb-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    {/* Development Services */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b border-black/10 pb-2">Development Services</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm">
                            <li><Link href="/services/website-development-in-nepal" className="hover:text-primary transition-colors">Website Development</Link></li>
                            <li><Link href="/services/mobile-app-development" className="hover:text-primary transition-colors">App Development</Link></li>
                            <li><Link href="/services/system-software-development" className="hover:text-primary transition-colors">System/Software Development</Link></li>
                            <li><Link href="/services/ui-ux-design" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                        </ul>
                    </div>

                    {/* Marketing Services */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b border-black/10 pb-2">Marketing Services</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm">
                            <li><Link href="/services/seo-in-nepal" className="hover:text-primary transition-colors">SEO Services</Link></li>
                            <li><Link href="/services/social-media-marketing" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
                            <li><Link href="/services/graphics-design" className="hover:text-primary transition-colors">Graphic Design</Link></li>
                            <li><Link href="/services/content-writing" className="hover:text-primary transition-colors">Content Writing</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b border-black/10 pb-2">Quick Links</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">My Projects</Link></li>
                            <li><Link href="/work" className="hover:text-primary transition-colors">How We Work</Link></li>
                            <li><Link href="/team" className="hover:text-primary transition-colors">Team</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b border-black/10 pb-2">Get In Touch</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm">
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                                <a href="tel:+9779825883910" className="hover:text-primary transition-colors">+977-9825883910</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                                <a href="mailto:info@nirajandhungel.com.np" className="hover:text-primary transition-colors">info@nirajandhungel.com.np</a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0" />
                                <span>Kathmandu, Nepal</span>
                            </li>
                        </ul>
                        
                        {/* Social Media */}
                        <div className="mt-6">
                            <h4 className="font-bold text-foreground mb-3 text-sm">Follow Me:</h4>
                            <div className="flex space-x-3">
                                {[
                                    { Icon: Github, href: 'https://github.com/nirajandhungel' },
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/nirajan-dhungel' },
                                    { Icon: Instagram, href: 'https://www.instagram.com/nirajan.dhungel19' },
                                    { Icon: Facebook, href: 'https://www.facebook.com/subash.dhungel.712' },
                                    { Icon: Twitter, href: 'https://x.com/SubashDhungel18' },
                                ].map(({ Icon, href }, idx) => (
                                    <a 
                                        key={idx} 
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Nirajan Dhungel. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Built with Next.js & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;