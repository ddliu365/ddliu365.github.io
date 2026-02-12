import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white relative">
            {/* Decorative diagonal line */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30">
                <div className="absolute -top-[20%] right-[10%] w-[1000px] h-[1000px] bg-slate-50 rotate-12 rounded-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Engineering Demos</h2>
                    <p className="text-slate-500 max-w-2xl text-xl leading-relaxed mx-auto md:mx-0">
                        Selected projects demonstrating full-stack robotic system design, control, and implementation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {content.projects.map((project, index) => {
                        const isInternal = !!project.details;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 50 }}
                                className="bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col h-full group hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] transition-all duration-500 hover:-translate-y-2 relative"
                            >
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div className="relative h-56 overflow-hidden bg-slate-50">
                                    <img
                                        src={project.media}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                                            FEATURED
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[11px] font-bold px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded-full uppercase tracking-wider group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                                        {project.subtitle}
                                    </h4>
                                    <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                        {isInternal ? (
                                            <Link
                                                to={`/project/${project.id}`}
                                                className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                                            >
                                                View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        ) : project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                                            >
                                                View Project <ExternalLink size={16} className="ml-2" />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
