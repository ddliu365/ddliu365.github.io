import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-0 border border-slate-100 shadow-sm bg-slate-50/50">
                    {/* Vertical Side Header */}
                    <div className="md:w-16 bg-[#FF530D] flex items-center justify-center py-8 md:py-0">
                        <h2 className="text-white text-xl font-bold tracking-[0.2em] uppercase origin-center md:-rotate-90 whitespace-nowrap px-4 font-mono">
                            Education
                        </h2>
                    </div>

                    {/* Horizontal Grid */}
                    <div className="flex-grow p-10 md:p-14">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
                            {content.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex flex-col"
                                >
                                    {/* Large Background Year */}
                                    <div className="absolute -top-10 -left-4 text-7xl md:text-8xl font-light text-slate-200/50 pointer-events-none select-none font-mono">
                                        {edu.year}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 pt-4">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 font-mono">
                                            {edu.university}
                                        </h3>
                                        <div className="text-[14px] font-semibold text-slate-900 leading-snug mb-4 tracking-tight min-h-[40px]">
                                            {edu.degree}
                                        </div>

                                        <div className="space-y-2 border-t border-slate-200 pt-4">
                                            <div className="text-[10px] font-bold text-[#A31F34] uppercase tracking-widest font-mono">
                                                {edu.period}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
