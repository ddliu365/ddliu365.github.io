import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = content.projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const renderContent = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, index) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('### ')) {
                return (
                    <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        key={index}
                        className="text-2xl font-light mt-12 mb-6 text-slate-900 border-l-4 border-[#A31F34] pl-6 uppercase tracking-tight"
                    >
                        {trimmed.replace('### ', '')}
                    </motion.h3>
                );
            }
            if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return <h4 key={index} className="text-lg font-bold mt-8 mb-4 text-slate-800 uppercase tracking-wide">{trimmed.replace(/\*\*/g, '')}</h4>;
            }
            if (trimmed.startsWith('- ')) {
                return (
                    <li key={index} className="flex items-start mb-4 text-slate-600 leading-relaxed font-light">
                        <div className="mt-2 w-1.5 h-1.5 bg-[#FF530D] shrink-0 mr-4"></div>
                        <span>{trimmed.replace('- ', '')}</span>
                    </li>
                );
            }
            if (trimmed.startsWith('1. ')) {
                return (
                    <li key={index} className="flex items-start mb-4 text-slate-600 leading-relaxed font-light">
                        <span className="text-[#A31F34] font-bold mr-4 text-sm">{trimmed.match(/^\d+/)[0]}.</span>
                        <span>{trimmed.replace(/^\d+\. /, '')}</span>
                    </li>
                );
            }
            if (trimmed === '') return null;

            const parts = trimmed.split(/(\*\*.*?\*\*)/g);
            return (
                <p key={index} className="mb-6 text-slate-600 leading-relaxed text-[16px] font-light">
                    {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="text-slate-900 font-medium">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    })}
                </p>
            );
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-20 min-h-screen bg-slate-50"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <Link to="/" className="inline-flex items-center text-slate-500 hover:text-[#A31F34] mb-12 transition-colors group text-[11px] font-bold uppercase tracking-[0.2em]">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Research
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border border-slate-200 overflow-hidden shadow-sm"
                >
                    {/* Hero Image - Sharp */}
                    <div className="h-64 md:h-[450px] w-full relative">
                        <img
                            src={project.media}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale-[20%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-10">
                            <div className="h-1 w-20 bg-[#FF530D] mb-6"></div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-5xl font-light mb-2 text-white tracking-tight uppercase"
                            >
                                {project.title}
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg md:text-xl text-slate-300 font-light tracking-wide italic"
                            >
                                {project.subtitle}
                            </motion.h2>
                        </div>
                    </div>

                    <div className="p-10 md:p-16">
                        <div className="flex flex-wrap gap-2 mb-12">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 border border-slate-100 text-[10px] font-bold uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="max-w-none">
                            {project.details ? renderContent(project.details) : <p className="text-slate-600 text-lg font-light leading-relaxed">{project.description}</p>}
                        </div>

                        {project.link && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="mt-20 pt-10 border-t border-slate-100"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#A31F34] transition-all hover:shadow-lg shadow-black/10"
                                >
                                    Visit Project Repository <ExternalLink size={16} className="ml-3" />
                                </a>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
