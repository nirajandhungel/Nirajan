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
        <section className="relative bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div 
                    className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
                    }}
                />
                <div 
                    className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
                    }}
                />
            </div>
            
            <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20 sm:py-24 lg:py-32">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Content - Takes 2/3 on large screens */}
                    <div className="lg:col-span-2">


                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 text-white">
                            Technologies I{' '}
                            <span className="text-heading-gold">Master</span>
                        </h2>
                        
                        <p className="text-white/60 mb-10 max-w-xl">
                            Using cutting-edge technologies to deliver world-class solutions for clients globally.
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {Object.keys(TECH_DATA).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as keyof typeof TECH_DATA)}
                                    className={`
                                        px-5 py-3 rounded-sm font-bold text-sm
                                        transition-all duration-300
                                        ${activeTab === tab 
                                            ? 'bg-red-600 text-white shadow-lg shadow-primary/30' 
                                            : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                                        }
                                    `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tech Icons Grid */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                            {TECH_DATA[activeTab].map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center group">
                                    <div className="
                                        w-16 h-16 sm:w-20 sm:h-20 
                                        bg-white/5 p-4 rounded-2xl 
                                        border border-white/10 
                                        flex items-center justify-center 
                                        group-hover:border-primary/50 
                                        group-hover:bg-primary/10
                                        group-hover:scale-105
                                        transition-all duration-300
                                    ">
                                        <Image 
                                            src={tech.icon} 
                                            alt={`${tech.name} developer`} 
                                            title={`${tech.name} Expertise - Nirajan Dhungel`}
                                            width={48}
                                            height={48}
                                            className="max-w-full max-h-full object-contain" 
                                        />
                                    </div>
                                    <span className="mt-3 text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative hidden lg:block">
                        <div className="sticky top-24">
                            {/* Red Circle Behind */}
                            <div 
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full -z-10"
                                style={{
                                    background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
                                }}
                            />
                            <Image 
                                src="/media/expertise-visualization.svg" 
                                width={400}
                                height={400}
                                className="w-full max-w-sm mx-auto relative z-10" 
                                alt="Software Development Expertise"
                                title="Tech Stack Visualization"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Expertise;
