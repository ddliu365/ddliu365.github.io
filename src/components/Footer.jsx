import { content } from '../data/content';

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

                    {/* Analytics Section - Restored Original Trackers */}
                    <div className="flex items-center gap-6">
                        {/* Page Views Badge */}
                        <div className="flex flex-col items-center gap-2">
                            <a href="https://hits.seeyoufarm.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fddliu365.github.io&count_bg=%23A31F34&title_bg=%231F2937&icon=&icon_color=%23E7E7E7&title=VISITS&edge_flat=false"
                                    alt="Hits"
                                    className="h-5 opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </a>
                        </div>

                        {/* Flag Counter */}
                        <div className="flex flex-col items-center gap-2">
                            <a href="https://info.flagcounter.com/8v7F" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://s11.flagcounter.com/count2/8v7F/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/"
                                    alt="Flag Counter"
                                    className="h-10 opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply"
                                />
                            </a>
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
