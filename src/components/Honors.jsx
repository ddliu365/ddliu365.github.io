import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Award } from 'lucide-react';

const Honors = () => {
    return (
        <section id="honors" className="py-24 bg-[#F7F7F7]">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12"
                >
                    {/* Sticky Sidebar Title (MIT Style) */}
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[#FF530D]/10 rounded-lg text-[#FF530D]">
                                    <Award size={24} />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-[#FF530D]">Honors + Awards</h2>
                            </div>
                            <div className="h-1 w-20 bg-[#FF530D] mb-6"></div>
                            <p className="text-slate-600 text-lg leading-relaxed font-light">
                                Recognition of academic excellence, research contributions, and innovative engineering.
                            </p>
                        </div>
                    </div>

                    {/* Awards List */}
                    <div className="md:w-2/3">
                        <div className="bg-white border border-slate-100 rounded-sm shadow-sm overflow-hidden">
                            <ul className="divide-y divide-slate-100">
                                {content.honors.map((award, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                        className="p-6 hover:bg-slate-50 transition-colors flex items-start gap-4 group"
                                    >
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF530D]/40 group-hover:bg-[#FF530D] shrink-0 transition-colors" />
                                        <span className="text-slate-700 text-[15px] font-medium leading-relaxed">
                                            {award}
                                        </span>
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
