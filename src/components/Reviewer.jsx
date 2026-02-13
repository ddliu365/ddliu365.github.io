import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const Reviewer = () => {
    return (
        <section id="service" className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-16"
                >
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-6 uppercase">Service / Review</h2>
                            <div className="h-1 w-20 bg-[#A31F34] mb-6"></div>
                            <p className="text-slate-500 text-sm leading-relaxed font-light uppercase tracking-wider">
                                Contributing to the robotics research community through peer review for leading journals and conferences.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <div className="bg-slate-50 border border-slate-100 p-10 relative overflow-hidden group">
                            {/* Accent Line */}
                            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-200 group-hover:bg-[#FF530D] transition-colors"></div>

                            <ul className="grid grid-cols-1 gap-6">
                                {content.reviewer.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-5 text-slate-700 hover:text-[#A31F34] transition-all group/link"
                                        >
                                            <div className="w-1.5 h-1.5 bg-slate-300 group-hover/link:bg-[#A31F34] mt-2 shrink-0 transition-colors" />
                                            <div className="flex-1">
                                                <span className="text-sm font-bold uppercase tracking-tight leading-normal">
                                                    {item.name}
                                                </span>
                                                <div className="mt-1 flex items-center gap-1.5 opacity-0 group-hover/link:opacity-100 transition-all transform translate-y-1 group-hover/link:translate-y-0">
                                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A31F34]">Official Venue</span>
                                                    <ExternalLink size={10} className="text-[#A31F34]" />
                                                </div>
                                            </div>
                                        </a>
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

export default Reviewer;
