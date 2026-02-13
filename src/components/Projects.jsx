import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ArrowRight } from 'lucide-react';

const ProjectMedia = ({ project }) => {
    const [showVideo, setShowVideo] = React.useState(false);
    const videoRef = React.useRef(null);
    const cardRef = React.useRef(null);
    const [isInView, setIsInView] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (!project.video || !isInView) {
            setShowVideo(false);
            return;
        }

        let timeout;
        if (!showVideo) {
            timeout = setTimeout(() => setShowVideo(true), 1500);
        }
        return () => clearTimeout(timeout);
    }, [showVideo, isInView, project.video]);

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    return (
        <div ref={cardRef} className="relative h-64 overflow-hidden bg-black/20">
            {/* Ambient Background Glow for Card Media */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

            {/* Static Image */}
            <motion.img
                initial={false}
                animate={{ opacity: showVideo ? 0.3 : 0.8, scale: showVideo ? 1.05 : 1 }}
                transition={{ duration: 1 }}
                src={project.media}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
            />

            {/* Video Layer */}
            {project.video && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showVideo ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full z-1"
                >
                    {showVideo && (
                        <video
                            ref={videoRef}
                            src={project.video}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-cover"
                        />
                    )}
                </motion.div>
            )}

            {project.featured && (
                <div className="absolute top-4 left-4 bg-[#FF530D] px-2 py-0.5 text-[8px] font-black text-white uppercase tracking-[0.3em] font-mono z-20 shadow-[0_0_10px_#FF530D]">
                    FEATURED
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12"
                >
                    <div className="space-y-4">
                        <div className="h-[2px] w-24 bg-[#A31F34]"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase font-sans">
                            Research Portfolio
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="h-0.5 w-12 bg-[#FF530D]"></div>
                            <span className="text-[#FF530D] text-[10px] font-black tracking-[0.4em] font-mono uppercase">Interactive Gallery</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {content.projects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card flex flex-col h-full group hover:shadow-[0_0_50px_rgba(255,83,13,0.1)] transition-all duration-700 relative border border-white/5"
                            >
                                <ProjectMedia project={project} />

                                <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black px-2 py-0.5 border border-white/10 text-gray-500 uppercase tracking-widest group-hover:border-[#FF530D]/50 group-hover:text-[#FF530D] transition-all duration-500 font-mono bg-white/[0.02]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight text-white group-hover:text-gradient transition-all duration-500 tracking-tighter uppercase font-sans">
                                        {project.title}
                                    </h3>
                                    <h4 className="text-[10px] md:text-[11px] font-black text-[#FF530D] mb-6 tracking-[0.2em] font-mono uppercase border-l-2 border-[#FF530D] pl-4">
                                        {project.subtitle}
                                    </h4>
                                    <p className="text-gray-400 mb-8 text-[14px] leading-relaxed flex-grow font-light">
                                        {project.description}
                                    </p>

                                    {/* Tech Accents on Card */}
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                        <div className="font-mono text-[8px] text-white">
                                            SYST_v4.2 // {index + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Bottom Border */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF530D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 shadow-[0_0_15px_#FF530D]"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Section Decoration Grid */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-tech-grid opacity-[0.03] pointer-events-none"></div>
        </section>
    );
};

export default Projects;
