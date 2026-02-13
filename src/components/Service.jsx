import { motion } from 'framer-motion';
import { content } from '../data/content';

const Service = () => {
    return (
        <section id="service" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Service</h2>
                    <div className="h-1 w-16 bg-[#A31F34]"></div>
                </motion.div>

                <div className="flex flex-col gap-16 md:gap-24 max-w-3xl">
                    {/* Reviewer / Program Committee */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                            Review / Program Committee
                            <div className="h-px flex-grow bg-slate-200"></div>
                        </h3>
                        <ul className="space-y-4">
                            {content.reviewer.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-1.5 h-1.5 bg-[#FF530D] mt-2 shrink-0" />
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[15px] text-slate-700 hover:text-[#A31F34] transition-colors leading-tight"
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Teaching */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                            Teaching
                            <div className="h-px flex-grow bg-slate-200"></div>
                        </h3>
                        <div className="space-y-8">
                            {content.teaching.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-6 border-l-2 border-slate-100 hover:border-[#A31F34] transition-colors"
                                >
                                    <h4 className="text-[16px] font-semibold text-slate-900 mb-1">{item.course}</h4>
                                    <p className="text-[14px] text-slate-500 mb-2 font-medium">{item.role}</p>
                                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">{item.period}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
