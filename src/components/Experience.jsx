import { motion } from 'framer-motion';
import { content } from '../data/content';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-4 text-slate-900 tracking-tight uppercase">Experience</h2>
                        <div className="h-1.5 w-24 bg-[#A31F34]"></div>
                    </div>
                </motion.div>

                <div className="relative">
                    {/* Minimalist Timeline Line */}
                    <div className="absolute left-[8px] md:left-[180px] top-0 bottom-0 w-px bg-slate-200"></div>

                    <div className="space-y-16">
                        {content.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative pl-10 md:pl-0"
                            >
                                {/* Square Timeline Marker */}
                                <div className="absolute left-[8px] md:left-[180px] top-2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#A31F34] z-10"></div>

                                <div className="flex flex-col md:flex-row md:gap-20">
                                    {/* Date Column - Increased width for visibility */}
                                    <div className="md:w-[180px] shrink-0 mb-4 md:mb-0 md:text-right pt-1.5">
                                        <span className="text-[12px] font-bold text-[#A31F34] tracking-widest block uppercase">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Content Column */}
                                    <div className="flex-grow">
                                        <div className="bg-white p-8 md:p-10 border border-slate-200 shadow-sm relative group hover:border-[#A31F34]/30 transition-colors">
                                            {/* Decorative Corner Accent */}
                                            <div className="absolute top-0 right-0 w-12 h-12 bg-slate-100 border-l border-b border-slate-200 group-hover:bg-[#FF530D]/5 group-hover:border-[#FF530D]/20 transition-all"></div>

                                            <div className="relative z-10">
                                                <div className="mb-6">
                                                    <h3 className="text-2xl font-medium text-slate-900 group-hover:text-[#A31F34] transition-colors tracking-tight">{exp.role}</h3>
                                                    <div className="flex flex-wrap items-center text-slate-400 mt-2 text-[12px] font-bold tracking-widest uppercase">
                                                        <span className="text-slate-600 border-r border-slate-300 pr-4 mr-4">{exp.company}</span>
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>

                                                <ul className="space-y-4">
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex items-start text-slate-600 leading-relaxed text-[15px] font-light">
                                                            <div className="mt-2 w-1.5 h-1.5 bg-[#FF530D] shrink-0 mr-4"></div>
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
            </div>
        </section>
    );
};

export default Experience;
