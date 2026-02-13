import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ShieldCheck } from 'lucide-react';

const Reviewer = () => {
    return (
        <section id="service" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12"
                >
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Professional Service</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Contributing to the robotics research community through peer review for leading journals and conferences.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Journal & Conference Reviewer</h3>
                            </div>

                            <ul className="space-y-4">
                                {content.reviewer.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 text-slate-700"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                        <span className="text-base font-medium leading-normal">{item}</span>
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
