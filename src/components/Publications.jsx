import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FileText, Youtube } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 tracking-tight">Publications</h2>
                        <div className="h-1 w-16 bg-[#A31F34]"></div>
                    </div>
                </motion.div>

                <div className="space-y-6 max-w-5xl">
                    {content.publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group p-6 bg-white border border-slate-200 hover:border-[#A31F34]/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 group-hover:bg-[#A31F34] transition-colors"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold mb-3 text-slate-900 group-hover:text-[#A31F34] transition-colors leading-tight tracking-tight">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-500 mb-4 text-[14px] font-light leading-normal">
                                        {pub.authors.split(',').map((author, i, arr) => {
                                            const trimmedAuthor = author.trim();
                                            const isMe = trimmedAuthor.includes('Dongdong Liu');
                                            return (
                                                <span key={i}>
                                                    <span className={isMe ? 'text-slate-900 font-medium border-b border-[#FF530D]/40' : ''}>
                                                        {trimmedAuthor}
                                                    </span>
                                                    {i < arr.length - 1 ? ', ' : ''}
                                                </span>
                                            );
                                        })}
                                    </p>
                                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#FF530D] font-mono">
                                        <span className="bg-slate-50 px-2.5 py-1 border border-slate-100">
                                            {pub.venue}
                                        </span>
                                        <span className="opacity-40">{pub.year}</span>
                                    </div>
                                </div>

                                <div className="flex md:flex-col gap-2 shrink-0">
                                    {pub.links.pdf && (
                                        <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-[#A31F34] hover:border-[#A31F34] transition-all font-mono" title="PDF">
                                            <FileText size={12} className="mr-2" /> PDF
                                        </a>
                                    )}
                                    {pub.links.video && (
                                        <a href={pub.links.video} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white hover:bg-[#FF530D] hover:border-[#FF530D] transition-all font-mono" title="Video">
                                            <Youtube size={12} className="mr-2" /> Video
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
