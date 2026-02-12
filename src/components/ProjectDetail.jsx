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

    // Function to render markdown-like text safely
    const renderContent = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, index) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('### ')) {
                return (
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        key={index}
                        className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-slate-900 border-l-4 border-blue-600 pl-4"
                    >
                        {trimmed.replace('### ', '')}
                    </motion.h3>
                );
            }
            if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return <h4 key={index} className="text-xl font-bold mt-8 mb-4 text-slate-800">{trimmed.replace(/\*\*/g, '')}</h4>;
            }
            if (trimmed.startsWith('- ')) {
                return <li key={index} className="ml-6 list-disc mb-3 text-slate-600 pl-2 leading-relaxed">{trimmed.replace('- ', '')}</li>;
            }
            if (trimmed.startsWith('1. ')) {
                return <li key={index} className="ml-6 list-decimal mb-3 text-slate-600 pl-2 leading-relaxed">{trimmed.replace(/^\d+\. /, '')}</li>;
            }
            if (trimmed === '') {
                return null;
            }
            // Handle inline bolding simple case
            const parts = trimmed.split(/(\*\*.*?\*\*)/g);
            return (
                <p key={index} className="mb-4 text-slate-600 leading-loose text-lg">
                    {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
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
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 min-h-screen bg-white"
        >
            <div className="container mx-auto px-6 max-w-4xl">
                <Link to="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-10 transition-colors group font-medium">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
                >
                    {/* Hero Image */}
                    <div className="h-64 md:h-[500px] w-full relative group">
                        <img
                            src={project.media}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-90"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md"
                            >
                                {project.title}
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-blue-200 font-semibold tracking-wide"
                            >
                                {project.subtitle}
                            </motion.h2>
                        </div>
                    </div>

                    <div className="p-8 md:p-16">
                        <div className="flex flex-wrap gap-3 mb-12">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-5 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-bold border border-slate-100 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600">
                            {project.details ? renderContent(project.details) : <p className="text-slate-600 text-lg leading-loose">{project.description}</p>}
                        </div>

                        {project.link && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="mt-20 pt-10 border-t border-slate-100 text-center"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-600/30"
                                >
                                    Visit Original Project Page <ExternalLink size={20} className="ml-3" />
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
