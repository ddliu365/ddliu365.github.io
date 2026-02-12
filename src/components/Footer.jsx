import { useEffect } from 'react';
import { content } from '../data/content';

const Footer = () => {
    useEffect(() => {
        // Load MapMyVisitors Globe Script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mmvst_globe';
        script.src = "//mapmyvisitors.com/globe.js?d=U6fy5o6WfZnFlM_ZejyssGtr36hPNPmcfpyDbiASbHM";
        script.async = true;

        const container = document.getElementById('globe-container');
        if (container) {
            container.appendChild(script);
        }

        return () => {
            if (container && script.parentNode === container) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-center md:text-left">
                    {/* Brand & Rights */}
                    <div className="space-y-4 w-full md:w-auto">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/20">
                                {content.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">{content.name}</h3>
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-400 text-sm">
                                &copy; {new Date().getFullYear()} All rights reserved.
                            </p>
                            <p className="text-slate-500 text-[11px] font-medium uppercase tracking-widest">
                                Last Updated: {content.lastUpdated}
                            </p>
                        </div>
                    </div>

                    {/* Navigation & Analytics */}
                    <div className="flex flex-col items-center md:items-end gap-8 w-full md:w-auto">
                        <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
                            <a href="#home" className="hover:text-white transition-colors">Home</a>
                            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                            <a href={`mailto:${content.email}`} className="hover:text-white transition-colors">Contact</a>
                        </nav>

                        {/* Analytics Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-800/10 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
                            {/* Numeric Counter */}
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Total Visits</span>
                                <div className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/50 shadow-inner">
                                    <a href="https://www.hitwebcounter.com/" target="_blank">
                                        <img src="https://hitwebcounter.com/counter/counter.php?page=21476500&style=0007&nbdigits=5&type=page&initCount=8088" title="Free Tools" Alt="Free Tools" border="0" className="h-5 opacity-90 hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>

                            <div className="hidden sm:block w-px h-10 bg-slate-800"></div>

                            {/* Visitor Globe */}
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Global Traffic</span>
                                <div id="globe-container" className="flex items-center justify-center min-w-[150px] overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                                    {/* The MapMyVisitors Globe will be injected here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
