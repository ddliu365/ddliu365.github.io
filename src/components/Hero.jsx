import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { content } from '../data/content';
import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

const Hero = () => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring effects for tilt
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);

        // Update CSS variables for the glow effect
        cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 25 }
        }
    };

    return (
        <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#050505] font-sans">
            {/* Immersive Background Layer */}
            <div className="absolute inset-0 z-0 scale-105">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent z-11"></div>

                {/* Technical Grid Overlay */}
                <div className="tech-grid tech-grid-pulse opacity-20"></div>

                <img
                    src="/background.gif"
                    alt="Background Animation"
                    className="w-full h-full object-cover object-left md:object-[20%] opacity-60"
                />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 z-20 container mx-auto px-6 max-w-[1400px] flex flex-col justify-end items-end pb-12 md:pb-24">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
                    }}
                    className="glass-card w-full max-w-sm md:max-w-3xl p-8 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.9)] relative mr-[-2%] md:mr-[-5%] border border-white/10"
                >
                    {/* Scan Line Animation Overlay */}
                    <div className="scan-line opacity-20"></div>

                    {/* Crimson accent line top */}
                    <div className="absolute top-0 left-0 w-32 h-1 bg-[#A31F34]"></div>

                    <div className="space-y-10" style={{ transform: "translateZ(50px)" }}>
                        {/* Avatar & Name Group */}
                        <div className="flex items-center gap-8">
                            <motion.div variants={itemVariants} className="shrink-0">
                                <div className="w-16 h-16 md:w-28 md:h-28 border border-white/20 overflow-hidden bg-black rounded-none ring-4 ring-white/5 shadow-2xl">
                                    <img
                                        src={content.avatar}
                                        alt={content.name}
                                        className="w-full h-full object-cover opacity-90 transition-all duration-700"
                                    />
                                </div>
                            </motion.div>

                            <div>
                                <motion.h1
                                    variants={itemVariants}
                                    className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-0 leading-tight text-gradient"
                                >
                                    {content.name}
                                </motion.h1>
                                <motion.div
                                    variants={itemVariants}
                                    className="h-1 w-20 bg-[#FF530D] mt-4 shadow-[0_0_15px_#FF530D]"
                                ></motion.div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <motion.p
                                variants={itemVariants}
                                className="text-[#FF530D] text-[11px] md:text-[15px] font-black tracking-[0.1em] font-mono whitespace-nowrap overflow-hidden border-p border-[#FF530D]/30 pl-5 uppercase relative group"
                            >
                                <span className="relative z-10">{content.title}</span>
                                <motion.span
                                    className="absolute inset-0 bg-[#FF530D]/5 -z-0"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.p>

                            <motion.div variants={itemVariants} className="space-y-4 text-gray-400 text-[14px] md:text-[16px] leading-relaxed font-light max-w-2xl">
                                {content.bio.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{
                                        __html: paragraph
                                            .replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-medium">$1</span>')
                                            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#FF530D] border-b border-white/20 hover:border-[#FF530D] transition-all pb-0.5">$1</a>')
                                    }} />
                                ))}
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex gap-8 pt-8 border-t border-white/10 mt-6">
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
                                    className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-125"
                                    aria-label={label}
                                >
                                    <Icon size={22} strokeWidth={1} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Technical Edge Accents */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/5"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-white/5 opacity-50"></div>
                </motion.div>
            </div>

            {/* MIT Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-8 z-30 flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-pointer group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="h-16 w-px bg-gradient-to-t from-[#FF530D] to-transparent group-hover:h-20 transition-all duration-700"></div>
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-500 group-hover:text-[#FF530D] transition-colors [writing-mode:vertical-lr] font-mono">DISCOVER</span>
            </motion.div>
        </section>
    );
};

export default Hero;
