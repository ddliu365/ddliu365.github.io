import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-1 bg-[#A31F34]"></div>
                        <div>
                            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                                Dongdong Liu
                            </span>
                            <p className="text-[10px] text-slate-400 font-medium tracking-[0.2em] uppercase mt-0.5">
                                Robotics Engineer
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
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
