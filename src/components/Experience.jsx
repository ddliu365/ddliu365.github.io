import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Experience</h2>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {content.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line for desktop */}
                            <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-px bg-slate-200"></div>
                            <div className="hidden md:block absolute left-[180px] top-8 w-4 h-4 bg-white border-4 border-blue-600 rounded-full -translate-x-2 z-10"></div>

                            <div className="flex flex-col md:flex-row md:gap-16 group">
                                {/* Date Column */}
                                <div className="md:w-[180px] shrink-0 mb-4 md:mb-0 md:text-right md:pt-6">
                                    <span className="inline-flex items-center text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                        <Calendar size={14} className="mr-2 md:hidden" />
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Content Column */}
                                <div className="md:flex-grow">
                                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300 relative">
                                        {/* Decorative blob */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100px] -z-0"></div>

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                                                    <div className="flex items-center text-slate-500 mt-2 text-sm font-medium">
                                                        <Briefcase size={16} className="mr-2" />
                                                        <span className="mr-6 text-slate-700">{exp.company}</span>
                                                        <MapPin size={16} className="mr-2" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start text-slate-600 leading-relaxed text-base">
                                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 shrink-0"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
