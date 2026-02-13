import { useEffect } from 'react';
import { content } from '../data/content';

const Footer = () => {
    useEffect(() => {
        // Load MapMyVisitors Globe Script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mmvst_globe';
        script.src = "//mapmyvisitors.com/globe.js?d=qnXaKL7Xoup1Mw0O-sps2S-UKyvOZ4b8UDtct9Bc724";
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
        <footer className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* Brand Section */}
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-1 bg-[#A31F34]"></div>
                        <div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">
                                Dongdong Liu
                            </span>
                            <p className="text-[10px] text-slate-400 font-medium tracking-[0.2em] uppercase mt-0.5">
                                Robotics Expert
                            </p>
                        </div>
                    </div>

                    {/* Analytics Section - Restored Counter and Globe */}
                    <div className="flex items-center gap-8">
                        {/* Visitor Counter */}
                        <div className="flex flex-col items-center gap-1.5">
                            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold font-mono">Visits</span>
                            <div className="bg-slate-50 px-2 py-1 border border-slate-100 shadow-inner">
                                <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hitwebcounter.com/counter/counter.php?page=ddliu365_portfolio&style=0007&nbdigits=6&type=page&initCount=0"
                                        title="Free Counter"
                                        alt="Free Counter"
                                        className="h-4 opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-slate-100 hidden sm:block"></div>

                        {/* Globe Container */}
                        <div className="flex flex-col items-center gap-1.5">
                            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold font-mono">Globe</span>
                            <div id="globe-container" className="w-[120px] h-[40px] flex items-center justify-center overflow-hidden opacity-60 hover:opacity-100 transition-opacity scale-75" />
                        </div>
                    </div>

                    {/* Metadata Section */}
                    <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                            <span>Last Updated: {content.lastUpdated}</span>
                        </div>
                        <p className="text-slate-400 text-[11px] font-light">
                            © {new Date().getFullYear()} All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
