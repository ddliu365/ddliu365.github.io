import { motion } from 'framer-motion';
import { content } from '../data/content';

const News = () => {
    return (
        <section id="news" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-slate-900 tracking-tight">News</h2>
                        <div className="h-1 w-16 bg-[#A31F34]"></div>
                    </div>
                </motion.div>

                <div className="space-y-4 max-w-4xl">
                    {content.news.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="flex flex-col md:flex-row md:items-start p-6 bg-slate-50 border border-slate-100 group relative overflow-hidden"
                        >
                            {/* Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-[#FF530D] transition-colors"></div>

                            <div className="md:w-32 shrink-0 mb-2 md:mb-0">
                                <span className="text-[10px] font-bold text-[#A31F34] uppercase tracking-widest block font-mono">
                                    {item.date}
                                </span>
                            </div>
                            <div className="flex-grow">
                                <p className="text-slate-700 leading-normal text-[15px] font-light">
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
