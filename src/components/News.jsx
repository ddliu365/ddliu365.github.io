import { motion } from 'framer-motion';
import { content } from '../data/content';

const News = () => {
    return (
        <section id="news" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900 tracking-tight uppercase">News</h2>
                        <div className="h-1.5 w-24 bg-[#A31F34]"></div>
                    </div>
                </motion.div>

                <div className="space-y-4 max-w-4xl">
                    {content.news.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="flex flex-col md:flex-row md:items-start p-10 bg-slate-50 border border-slate-100 group relative overflow-hidden"
                        >
                            {/* Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-[#FF530D] transition-colors"></div>

                            <div className="md:w-32 shrink-0 mb-4 md:mb-0">
                                <span className="text-[11px] font-bold text-[#A31F34] uppercase tracking-[0.2em] block font-mono">
                                    {item.date}
                                </span>
                            </div>
                            <div className="flex-grow">
                                <p className="text-slate-700 leading-relaxed text-[16px] font-light">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
