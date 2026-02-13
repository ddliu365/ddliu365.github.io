import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-4 text-slate-900 tracking-tight uppercase">Engineering Demos</h2>
                        <div className="h-1.5 w-24 bg-[#FF530D]"></div>
                    </div>
                    <p className="text-slate-500 max-w-md text-sm leading-relaxed font-light uppercase tracking-wider">
                        Selected projects demonstrating full-stack robotic system design, control, and implementation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-slate-100">
                    {content.projects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border-r border-b border-slate-100 flex flex-col h-full group transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Media Container - Square */}
                                <div className="relative h-64 overflow-hidden bg-slate-50">
                                    <img
                                        src={project.media}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-0 left-0 bg-[#A31F34] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold px-2 py-0.5 border border-slate-200 text-slate-500 uppercase tracking-widest group-hover:border-[#FF530D] group-hover:text-[#FF530D] transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-light mb-2 leading-tight text-slate-900 group-hover:text-[#A31F34] transition-colors uppercase tracking-tight">
                                        {project.title}
                                    </h3>
                                    <h4 className="text-[10px] font-bold text-[#FF530D] mb-4 uppercase tracking-[0.2em]">
                                        {project.subtitle}
                                    </h4>
                                    <p className="text-slate-600 mb-6 text-[13px] leading-relaxed flex-grow font-light">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#A31F34] transition-colors flex items-center">
                                            Documentation Pending <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </span>
                                    </div>
                                </div>

                                {/* Overlay Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#A31F34] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
