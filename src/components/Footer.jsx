import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="py-12 bg-slate-900 text-white border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-center md:text-left">
                    {/* Brand & Rights */}
                    <div className="space-y-4 w-full md:w-auto">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="w-10 h-10 bg-[#A31F34] flex items-center justify-center font-bold text-lg shadow-sm">
                                {content.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-light tracking-tight uppercase">
                                {content.name}
                            </h3>
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-500 text-xs">
                                &copy; {new Date().getFullYear()} All rights reserved.
                            </p>
                            <p className="text-[#FF530D] text-[10px] font-bold uppercase tracking-[0.2em]">
                                Last Updated: {content.lastUpdated}
                            </p>
                        </div>
                    </div>

                    {/* Navigation & Analytics */}
                    <div className="flex flex-col items-center md:items-end gap-8 w-full md:w-auto">
                        <nav className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                            <a href="#home" className="hover:text-white transition-colors">Home</a>
                            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                            <a href={`mailto:${content.email}`} className="hover:text-white transition-colors">Contact</a>
                        </nav>

                        {/* Analytics Section - MIT Style */}
                        <div className="flex flex-col items-center md:items-end gap-2 px-4 py-2 border border-white/5 bg-white/5">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">Total Visits</span>
                            <div className="opacity-70 hover:opacity-100 transition-opacity">
                                <a href="https://www.hitwebcounter.com/" target="_blank">
                                    <img src="https://hitwebcounter.com/counter/counter.php?page=21476500&style=0007&nbdigits=5&type=page&initCount=8088" title="Free Tools" Alt="Free Tools" border="0" className="h-4 brightness-110" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
