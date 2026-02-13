import { motion } from 'framer-motion';
import { content } from '../data/content';

const Teaching = () => {
    return (
        <section id="teaching" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-4 text-slate-900 tracking-tight uppercase">Teaching</h2>
                        <div className="h-1.5 w-24 bg-[#A31F34]"></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
                    {content.teaching.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-12 border border-slate-200 shadow-sm relative group hover:border-[#A31F34]/30 transition-colors"
                        >
                            {/* Sharp Corner Accent */}
                            <div className="absolute top-0 right-0 w-14 h-14 bg-slate-50 border-l border-b border-slate-200 group-hover:bg-[#A31F34]/5 transition-all"></div>

                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#A31F34] transition-colors tracking-tight leading-tight uppercase">{item.course}</h3>
                                    <div className="h-0.5 w-16 bg-[#FF530D] mt-4 group-hover:w-24 transition-all duration-500"></div>
                                </div>

                                <p className="text-slate-500 mb-8 text-[15px] font-light italic">{item.role}</p>

                                <div className="pt-8 border-t border-slate-50">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-4 py-1.5 border border-slate-100">
                                        {item.period}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teaching;
