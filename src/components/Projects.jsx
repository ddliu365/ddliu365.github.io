import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-10"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 tracking-tight">Projects</h2>
                        <div className="h-1 w-16 bg-[#A31F34]"></div>
                    </div>
                    <p className="text-slate-500 max-w-md text-sm leading-normal font-light">
                        Selected projects demonstrating full-stack robotic system design and control.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {content.projects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border border-slate-100 flex flex-col h-full group transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md"
                            >
                                {/* Media Container */}
                                <div className="relative h-56 overflow-hidden bg-slate-50 border-b border-slate-100">
                                    <img
                                        src={project.media}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-0 left-0 bg-[#A31F34] px-3 py-1 text-[9px] font-bold text-white uppercase tracking-widest font-mono">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold px-2 py-0.5 border border-slate-100 text-slate-400 uppercase tracking-widest group-hover:border-[#FF530D] group-hover:text-[#FF530D] transition-colors font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 leading-tight text-slate-900 group-hover:text-[#A31F34] transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    <h4 className="text-[10px] font-bold text-[#FF530D] mb-4 tracking-widest uppercase font-mono">
                                        {project.subtitle}
                                    </h4>
                                    <p className="text-slate-600 mb-6 text-[13px] leading-normal flex-grow font-light">
                                        {project.description}
                                    </p>

                                </div>

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
