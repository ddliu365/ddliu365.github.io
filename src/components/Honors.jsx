import { motion } from 'framer-motion';
import { content } from '../data/content';

const Honors = () => {
    return (
        <section id="honors" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Honors</h2>
                    <div className="h-1 w-16 bg-[#A31F34]"></div>
                </motion.div>

                <div className="space-y-0 border-t border-slate-100">
                    {content.honors.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="py-6 border-b border-slate-100 flex items-baseline gap-6 group hover:pl-2 transition-all duration-300"
                        >
                            <span className="text-slate-300 text-[12px] font-mono shrink-0">0{index + 1}</span>
                            <div className="flex-grow">
                                <span className="text-slate-800 text-[16px] font-medium block group-hover:text-[#A31F34] transition-colors">
                                    {award.split(',')[0]}
                                </span>
                                <span className="text-slate-400 text-[13px] font-light block mt-1">
                                    {award.split(',').slice(1).join(', ').trim()}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Honors;
