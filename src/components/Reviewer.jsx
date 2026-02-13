import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const Reviewer = () => {
    return (
        <section id="service" className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12"
                >
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4 whitespace-nowrap">Reviewer / Program Committee</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Contributing to the robotics research community through peer review for leading journals and conferences.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <ul className="space-y-5">
                                {content.reviewer.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group"
                                    >
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-4 text-slate-700 hover:text-blue-600 transition-colors"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 mt-2.5 shrink-0 transition-colors" />
                                            <span className="text-base font-medium leading-normal flex-1">
                                                {item.name}
                                            </span>
                                            <ExternalLink size={16} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 group-hover:text-blue-500" />
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
