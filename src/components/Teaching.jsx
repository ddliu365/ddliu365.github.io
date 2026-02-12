import { motion } from 'framer-motion';
import { content } from '../data/content';
import { BookOpen } from 'lucide-react';

const Teaching = () => {
    return (
        <section id="teaching" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Teaching</h2>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                    {content.teaching.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.course}</h3>
                                <div className="p-3 bg-slate-50 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                    <BookOpen className="text-slate-400" size={24} />
                                </div>
                            </div>
                            <p className="text-slate-600 mb-6 text-lg font-medium">{item.role}</p>
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-full uppercase tracking-wide">
                                {item.period}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teaching;
