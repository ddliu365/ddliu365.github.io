import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Award } from 'lucide-react';

const Honors = () => {
    return (
        <section id="honors" className="py-24 bg-[#F9F9F9]">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-16"
                >
                    {/* Sticky Sidebar Title (MIT Style) */}
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-6 uppercase">Honors + Awards</h2>
                            <div className="h-1.5 w-20 bg-[#FF530D] mb-6"></div>
                            <p className="text-slate-500 text-sm leading-relaxed font-light uppercase tracking-wider">
                                Recognition of academic excellence, research contributions, and innovative engineering.
                            </p>
                        </div>
                    </div>

                    {/* Awards List */}
                    <div className="md:w-2/3">
                        <div className="bg-white border-l border-t border-slate-200">
                            <ul className="grid grid-cols-1 divide-y divide-slate-100">
                                {content.honors.map((award, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.03 }}
                                        className="p-8 hover:bg-slate-50 transition-colors flex items-start gap-6 group border-r border-b border-slate-100"
                                    >
                                        <div className="mt-2 w-2 h-2 bg-[#FF530D]/20 group-hover:bg-[#FF530D] shrink-0 transition-colors" />
                                        <div className="space-y-1">
                                            <span className="text-slate-800 text-sm font-bold font-sans tracking-tight leading-relaxed uppercase group-hover:text-[#A31F34] transition-colors">
                                                {award.split(',')[0]}
                                            </span>
                                            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                {award.split(',').slice(1).map((part, i) => (
                                                    <span key={i} className={i > 0 ? "border-l border-slate-200 pl-3" : ""}>{part.trim()}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Honors;
