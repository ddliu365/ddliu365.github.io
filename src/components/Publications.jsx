import { motion } from 'framer-motion';
import { content } from '../data/content';

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

                <div className="space-y-2 max-w-5xl">
                    {content.publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="py-6 border-b border-slate-200 last:border-0 hover:pl-2 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                                <span className="text-slate-400 text-[13px] font-mono w-12 shrink-0">[{pub.year}]</span>
                                <div className="flex-grow">
                                    <h3 className="text-[16px] font-semibold text-slate-900 group-hover:text-[#A31F34] transition-colors leading-snug mb-1">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-500 text-[14px] leading-relaxed mb-1">
                                        {pub.authors.split(',').map((author, i, arr) => {
                                            const trimmedAuthor = author.trim();
                                            const isMe = trimmedAuthor.includes('Dongdong Liu');
                                            return (
                                                <span key={i}>
                                                    <span className={isMe ? 'text-slate-900 font-medium' : ''}>
                                                        {trimmedAuthor}
                                                    </span>
                                                    {i < arr.length - 1 ? ', ' : ''}
                                                </span>
                                            );
                                        })}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-x-3 text-[13px] text-slate-500">
                                        <span className="font-medium text-[#FF530D]">{pub.conference || pub.venue}</span>
                                        {pub.links && (
                                            <div className="flex gap-3">
                                                {Object.entries(pub.links).map(([key, url]) => (
                                                    <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#A31F34] transition-colors font-mono uppercase text-[10px] tracking-widest border-b border-transparent hover:border-[#A31F34]">
                                                        {key}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
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
