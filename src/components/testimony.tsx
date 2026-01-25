import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            {/* Changed to match hero section container */}
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h6>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4">
                        What Our <span className="text-primary">Clients Say</span>
                    </h2>
                </div>

                {/* Added responsive gap and max-width constraint */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {TESTIMONIALS.map(t => (
                        <div key={t.id} className="bg-light p-8 sm:p-10 rounded-3xl relative">
                            <div className="flex items-center mb-6">
                                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md mr-4" />
                                <div>
                                    <h4 className="font-bold text-secondary">{t.name}</h4>
                                    <p className="text-xs text-primary font-semibold">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed mb-6">
                                "{t.content}"
                            </p>
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <div className="absolute top-8 right-8 sm:top-10 sm:right-10 opacity-10">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56928 13 5.017 13H3.017V21H5.017Z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;