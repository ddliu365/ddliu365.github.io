import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Mail, Github, Linkedin, GraduationCap, ChevronDown } from 'lucide-react';

const Hero = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900 font-sans">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/20 z-10 transition-colors duration-700"></div>
                <img
                    src="/background.gif"
                    alt="Background Animation"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Content Container - Bottom Right Placement (MIT Style) */}
            <div className="absolute inset-0 z-20 container mx-auto px-6 max-w-7xl flex flex-col justify-end items-end pb-12 md:pb-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                    }}
                    className="w-full max-w-md md:max-w-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/50 p-6 md:p-8 rounded-sm shadow-2xl relative"
                >
                    {/* Orange accent line top */}
                    <div className="absolute top-0 left-0 w-16 h-1 bg-orange-500"></div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Smaller Avatar Integrated */}
                        <motion.div variants={itemVariants} className="shrink-0">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm border border-slate-700 overflow-hidden shadow-lg">
                                <img
                                    src={content.avatar}
                                    alt={content.name}
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>

                        <div className="flex-1 space-y-4">
                            <div>
                                <motion.span variants={itemVariants} className="text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] block mb-1">
                                    Robotics Engineer @ Apple
                                </motion.span>
                                <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl font-light tracking-tight text-white mb-1">
                                    {content.name}
                                </motion.h1>
                                <motion.div variants={itemVariants} className="h-px w-24 bg-slate-800 my-4"></motion.div>
                                <motion.p variants={itemVariants} className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
                                    {content.title}
                                </motion.p>
                            </div>

                            <motion.div variants={itemVariants} className="space-y-3 text-slate-300 text-[11px] md:text-[13px] leading-relaxed">
                                {content.bio.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{
                                        __html: paragraph
                                            .replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-medium">$1</span>')
                                            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 border-b border-transparent hover:border-blue-300 transition-all">$1</a>')
                                    }} />
                                ))}
                            </motion.div>

                            {/* Social Icons - Smaller & Inline */}
                            <motion.div variants={itemVariants} className="flex gap-4 pt-4 border-t border-slate-900/50 mt-4">
                                {[
                                    { icon: Mail, href: `mailto:${content.email}`, label: "Email" },
                                    { icon: Github, href: content.socials.github, label: "GitHub" },
                                    { icon: Linkedin, href: content.socials.linkedin, label: "LinkedIn" },
                                    { icon: GraduationCap, href: content.socials.scholar, label: "Scholar" },
                                ].map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-white transition-colors"
                                        aria-label={label}
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Bottom Center */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer text-slate-400"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[9px] uppercase tracking-widest font-bold">Explore Demos</span>
                <ChevronDown size={18} className="animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
