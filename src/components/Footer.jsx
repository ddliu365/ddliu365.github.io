import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-6 max-w-6xl text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">{content.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs italic">
                        Last Updated: {content.lastUpdated}
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6 text-sm text-gray-400">
                    <div className="flex space-x-6">
                        <a href="#home" className="hover:text-white transition-colors">Home</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href={`mailto:${content.email}`} className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Analytics Section */}
                    <div className="flex flex-col items-center md:items-end gap-2 border-t border-gray-800 pt-6">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Site Analytics</span>
                        <div className="flex items-center gap-4 bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                            {/* Visitor Counter */}
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fddliu365.github.io&count_bg=%233B82F6&title_bg=%231F2937&icon=&icon_color=%23E7E7E7&title=Visitors&edge_flat=false"
                                    alt="Hits"
                                    className="h-5"
                                />
                            </div>

                            {/* Global Map Placeholder - Using a stylized representative icon/link or embed */}
                            <div className="h-8 w-1px bg-gray-700"></div>
                            <div className="text-[10px] text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-center">
                                <p className="mb-0.5 font-semibold">Global Traffic</p>
                                <div className="flex items-center justify-center gap-1 opacity-60">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                    <span>Live Map</span>
                                </div>
                            </div>
                        </div>

                        {/* ClustrMaps Embed Placeholder */}
                        <div id="clustrmaps-container" className="mt-2 opacity-80 hover:opacity-100 transition-opacity">
                            {/* Note to User: Insert your ClustrMaps widget script here if you have a specific ID */}
                            {/* For now, we use a generic placeholder or a small iframe if available */}
                            <a href="https://clustrmaps.com/site/1c6s0" title="Visit tracker" className="hidden">
                                <img src="//www.clustrmaps.com/map_v2.png?d=your-id&cl=ffffff" alt="Map" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
