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
                    <div className="flex flex-col items-center md:items-end gap-3 border-t border-gray-800 pt-6">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Visitors & Traffic</span>
                        <div className="flex flex-col items-center md:items-end gap-4">
                            {/* Visitor Counter Badge */}
                            <img
                                src="https://komarev.com/ghpvc/?username=ddliu365&color=3b82f6&style=flat-square&label=SITE+VISITORS"
                                alt="Visitor Count"
                                className="h-5"
                            />

                            {/* Flag Counter as the 'Global Map' of countries */}
                            <div className="bg-gray-800/30 p-2 rounded border border-gray-800 hover:border-blue-500/30 transition-colors">
                                <a href="https://info.flagcounter.com/8v7F">
                                    <img
                                        src="https://s11.flagcounter.com/count2/8v7F/bg_111827/txt_FFFFFF/border_111827/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/"
                                        alt="Flag Counter"
                                        border="0"
                                        className="max-w-[120px] opacity-90"
                                    />
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
