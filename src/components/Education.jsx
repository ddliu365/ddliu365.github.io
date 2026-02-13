import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-0 bg-[#F4F4F4]">
                    {/* Vertical Side Header */}
                    <div className="md:w-16 bg-[#FF530D] flex items-center justify-center py-8 md:py-0">
                        <h2 className="text-white text-3xl font-light tracking-tight origin-center md:-rotate-90 whitespace-nowrap px-4 font-sans">
                            Education
                        </h2>
                    </div>

                    {/* Horizontal Grid */}
                    <div className="flex-grow py-16 px-10 md:px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200/50">
                            {content.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="flex flex-col items-center text-center px-4"
                                >
                                    {/* Large Year */}
                                    <div className="text-7xl md:text-8xl font-thin text-slate-400/40 mb-6 font-sans tracking-tight">
                                        {edu.year}
                                    </div>

                                    {/* University */}
                                    <h3 className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-2 px-2 leading-tight">
                                        {edu.university}
                                    </h3>

                                    {/* Degree */}
                                    <div className="text-[12px] font-black text-slate-800 uppercase tracking-widest">
                                        {edu.degree}
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
