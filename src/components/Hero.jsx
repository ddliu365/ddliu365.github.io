import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Mail, Github, Linkedin, Twitter, GraduationCap, ChevronDown } from 'lucide-react';

const Hero = () => {
    // Stagger variant for text elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-900 border-b border-slate-800">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/40 z-10 backdrop-blur-none"></div>
                <img
                    src="/background.gif"
                    alt="Background Animation"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-transparent z-10"></div>

            <div className="container mx-auto px-6 max-w-7xl flex md:justify-end py-12 md:py-0">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 max-w-5xl">
                    {/* Avatar Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 1.2, bounce: 0.5 }}
                        className="relative group shrink-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>
                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl relative z-10 bg-white ring-1 ring-white/20">
                            <img
                                src={content.avatar}
                                alt={content.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl pt-4 text-center md:text-left"
                    >
                        <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 relative z-20">
                            {content.name}
                        </motion.h1>
                        <motion.h2 variants={itemVariants} className="text-base md:text-xl text-blue-400 font-semibold mb-4 relative z-20">
                            {content.title}
                        </motion.h2>

                        <motion.div variants={itemVariants} className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed font-light relative z-20">
                            {content.bio.map((paragraph, index) => (
                                <p key={index} dangerouslySetInnerHTML={{
                                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-semibold">$1</span>')
                                }} />
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mt-10 relative z-20">
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
                                    className="p-3 bg-white hover:bg-white border border-slate-200 shadow-sm hover:shadow-lg rounded-full text-slate-500 hover:text-blue-600 transition-all hover:-translate-y-1 active:scale-95 group relative overflow-hidden"
                                    aria-label={label}
                                >
                                    <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
                                    <Icon size={22} className="relative z-10" />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
