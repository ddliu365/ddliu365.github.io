import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Mail, Github, Linkedin, GraduationCap, ChevronDown } from 'lucide-react';

const Hero = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 25 }
        }
    };

    return (
        <section id="home" className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#0a0a0a] font-sans">
            {/* Background Media - Higher Visibility for Robot */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent z-10"></div>
                <img
                    src="/background.gif"
                    alt="Background Animation"
                    className="w-full h-full object-cover opacity-90 scale-100 transition-transform duration-1000"
                />
            </div>

            {/* Content Container - Far Right Placement (MIT Style) */}
            <div className="absolute inset-0 z-20 container mx-auto px-6 max-w-[1400px] flex flex-col justify-end items-end pb-16 md:pb-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } }
                    }}
                    className="w-full max-w-sm md:max-w-md bg-[#111111]/90 backdrop-blur-xl border border-white/5 p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative mr-[-5%] md:mr-[-10%]"
                >
                    {/* Orange accent line top - MIT branding style (MechE Orange) */}
                    <div className="absolute top-0 left-0 w-24 h-1.5 bg-[#FF530D]"></div>

                    <div className="space-y-6">
                        {/* Integrated Avatar & Name Group */}
                        <div className="flex items-center gap-6">
                            <motion.div variants={itemVariants} className="shrink-0">
                                <div className="w-16 h-16 border border-white/10 overflow-hidden shadow-inner bg-black rounded-sm">
                                    <img
                                        src={content.avatar}
                                        alt={content.name}
                                        className="w-full h-full object-cover opacity-90 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </motion.div>

                            <div>
                                <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-light tracking-tight text-white mb-0 uppercase">
                                    {content.name}
                                </motion.h1>
                                <motion.div variants={itemVariants} className="h-0.5 w-12 bg-[#FF530D] mt-2"></motion.div>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <motion.p variants={itemVariants} className="text-gray-400 text-xs md:text-[13px] leading-relaxed font-medium uppercase tracking-[0.2em]">
                                {content.title}
                            </motion.p>

                            <motion.div variants={itemVariants} className="space-y-4 text-gray-300 text-[12px] md:text-[14px] leading-relaxed font-light">
                                {content.bio.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{
                                        __html: paragraph
                                            .replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-medium">$1</span>')
                                            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#FF530D] border-b border-white/20 hover:border-[#FF530D] transition-all pb-0.5">$1</a>')
                                    }} />
                                ))}
                            </motion.div>
                        </div>

                        {/* Social Links - Clean & Minimalist */}
                        <motion.div variants={itemVariants} className="flex gap-6 pt-6 border-t border-white/5 mt-6">
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
                                    className="text-gray-500 hover:text-[#FF530D] transition-colors duration-300"
                                    aria-label={label}
                                >
                                    <Icon size={20} strokeWidth={1.2} />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* MIT-style Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-10 left-10 z-30 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="h-12 w-px bg-gradient-to-t from-[#FF530D] to-transparent group-hover:h-16 transition-all duration-500"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 group-hover:text-white transition-colors [writing-mode:vertical-lr]">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
