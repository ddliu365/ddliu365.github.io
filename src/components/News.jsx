import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Bell } from 'lucide-react';

const News = () => {
    return (
        <section id="news" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 rounded-full">
                            <Bell className="text-red-500 animate-pulse" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900">News</h2>
                    </div>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                </motion.div>

                <div className="space-y-6 max-w-4xl">
                    {content.news.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row md:items-start p-6 rounded-3xl hover:bg-slate-50 transition-colors group"
                        >
                            <div className="md:w-32 shrink-0 mb-3 md:mb-0">
                                <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wide group-hover:bg-white group-hover:shadow-sm transition-all">
                                    {item.date}
                                </span>
                            </div>
                            <p className="text-slate-700 leading-relaxed pl-4 border-l-2 border-slate-200 md:border-none md:pl-0 text-lg">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
