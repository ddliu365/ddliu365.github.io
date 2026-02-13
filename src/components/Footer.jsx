const Footer = () => {
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

                    {/* Analytics Section - Updated Counter, Removed Globe */}
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-center gap-1.5">
                            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold font-mono">Visits</span>
                            <div className="bg-slate-50 px-2 py-1 border border-slate-100 shadow-inner">
                                <a href="https://www.hitwebcounter.com/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://hitwebcounter.com/counter/counter.php?page=21476554&style=0007&nbdigits=6&type=page&initCount=8088"
                                        title="Free Tools"
                                        alt="Free Tools"
                                        className="h-4 opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            </div>
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
