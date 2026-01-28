'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const TECH_DATA = {
    'Web Development': [
        { name: 'JavaScript', icon: '/media/tech/javascript.png' },
        { name: 'Node JS', icon: '/media/tech/nodejs.png' },
        { name: 'Python', icon: '/media/tech/python.png' },
        { name: 'Django', icon: '/media/tech/django.png' },
        { name: 'HTML5', icon: '/media/tech/html5.png' },
        { name: 'Next JS', icon: '/media/tech/nextjs.png' },
    ],
    'App Development': [
        { name: 'Flutter', icon: '/media/tech/flutter.png' },
        { name: 'iOS', icon: '/media/tech/ios.png' },
        { name: 'Kotlin', icon: '/media/tech/kotlin.png' },
        { name: 'React Native', icon: '/media/tech/react-native.png' },
    ],
    'Database': [
        { name: 'MongoDB', icon: '/media/tech/mongodb.png' },
        { name: 'MySQL', icon: '/media/tech/mysql.png' },
        { name: 'PostgreSQL', icon: '/media/tech/postgresql.png' },
    ],
    'Cloud Platform': [
        { name: 'AWS', icon: '/media/tech/aws.png' },
        { name: 'GCP', icon: '/media/tech/gcp.png' },
        { name: 'Docker', icon: '/media/tech/docker.png' },
    ]
};

const Expertise: React.FC = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof TECH_DATA>('Web Development');

    return (
        <section className="relative bg-light overflow-hidden">
            <div className="container relative z-10 mx-auto px-4 lg:px-8 py-14 sm:py-20 lg:py-24">
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">
                    
                    {/* Left Content - Takes 2/3 on large screens */}
                    <div className="lg:col-span-2">
                        <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6">
                            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary rounded-full" />
                            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
                                Software Expertise in Kathmandu
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-foreground">
                            Technologies We Rely On to{' '}
                            <span className="text-primary">Achieve Success in Nepal</span>
                        </h2>

                        {/* Tabs - Updated with hero-like styling */}
                        <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
                            {Object.keys(TECH_DATA).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as any)}
                                    className={`
                                        px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm
                                        transition-all shadow-sm hover:shadow-md
                                        ${activeTab === tab 
                                            ? 'bg-primary text-white shadow-lg' 
                                            : 'bg-white text-secondary hover:bg-gray-50 border border-gray-200'
                                        }
                                    `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tech Icons Grid - Adjusted for consistency */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                            {TECH_DATA[activeTab].map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center group">
                                    <div className="
                                        w-14 h-14 sm:w-16 sm:h-16 
                                        bg-white p-3 rounded-xl 
                                        shadow-sm border border-gray-100 
                                        flex items-center justify-center 
                                        group-hover:shadow-md transition-all 
                                        group-hover:scale-105 hover:border-primary/20
                                        relative
                                    ">
                                        <Image 
                                            src={tech.icon} 
                                            alt={`${tech.name} developer in Kathmandu, Nepal`} 
                                            title={`${tech.name} Expertise - Nirajan Dhungel`}
                                            width={64}
                                            height={64}
                                            className="max-w-full max-h-full object-contain" 
                                        />
                                    </div>
                                    <span className="mt-2 text-xs font-medium text-gray-600">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image - Takes 1/3 on large screens */}
                    <div className="relative lg:mt-16">
                        <div className="sticky top-24">
                            <Image 
                                src="/media/expertise-visualization.svg" 
                                width={500}
                                height={500}
                                className="w-full max-w-md mx-auto lg:mx-0 relative z-10" 
                                alt="Software Development Expertise Visualization - Nirajan Dhungel"
                                title="Comprehensive Tech Stack for Software Solutions in Nepal"
                            />
                            <div className="
                                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0
                            "></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Expertise;
