import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FileText, Youtube, ExternalLink } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-4 text-slate-900 tracking-tight uppercase">Publications</h2>
                        <div className="h-1.5 w-24 bg-[#A31F34]"></div>
                    </div>
                </motion.div>

                <div className="space-y-4">
                    {content.publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group p-8 bg-white border border-slate-200 hover:border-[#A31F34]/40 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 group-hover:bg-[#A31F34] transition-colors"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">
                                <div className="flex-grow">
                                    <h3 className="text-xl font-medium mb-3 text-slate-900 group-hover:text-[#A31F34] transition-colors leading-snug tracking-tight">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-500 mb-3 text-[14px] leading-relaxed font-light">
                                        <span dangerouslySetInnerHTML={{
                                            __html: pub.authors.replace(content.name, `<span class="text-slate-900 font-medium underline decoration-slate-200">${content.name}</span>`)
                                        }} />
                                    </p>
                                    <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF530D]">
                                        <span className="bg-slate-50 px-2 py-0.5 border border-slate-100">{pub.conference}</span>
                                        <span className="text-slate-400 font-medium">{pub.year}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 shrink-0">
                                    {pub.links?.pdf && (
                                        <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-[#A31F34] hover:border-[#A31F34] transition-all" title="PDF">
                                            <FileText size={14} className="mr-2" /> PDF
                                        </a>
                                    )}
                                    {pub.links?.video && (
                                        <a href={pub.links.video} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-[#FF530D] hover:border-[#FF530D] transition-all" title="Video">
                                            <Youtube size={14} className="mr-2" /> Video
                                        </a>
                                    )}
                                    {pub.links?.project && (
                                        <a href={pub.links.project} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-black hover:border-black transition-all" title="Project Page">
                                            <ExternalLink size={14} className="mr-2" /> Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
