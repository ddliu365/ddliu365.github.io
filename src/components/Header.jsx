import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Calculate scroll progress
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress(currentScroll / totalScroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Education', href: '/#education' },
        { name: 'Publications', href: '/#publications' },
        { name: 'Service', href: '/#service' },
        { name: 'Skills', href: '/#skills' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || mobileMenuOpen
                ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                : 'bg-transparent py-6'
                }`}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF530D] to-[#A31F34] z-51"
                style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
            />

            <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
                <a href="/" className="text-xl font-black tracking-tighter text-white uppercase group">
                    <span className="text-white group-hover:text-[#FF530D] transition-colors duration-300">Dongdong</span>
                    <span className="text-[#FF530D] group-hover:text-white transition-colors duration-300 ml-1">Liu</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase font-black tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#FF530D] transition-all duration-500 group-hover:w-full shadow-[0_0_10px_#FF530D]"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-[#FF530D] transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center space-y-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-3xl font-black tracking-tighter text-white hover:text-[#FF530D] transition-colors uppercase"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
