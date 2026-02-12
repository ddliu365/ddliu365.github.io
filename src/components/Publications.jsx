import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FileText, Youtube, ExternalLink } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Publications</h2>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                </motion.div>

                <div className="space-y-6">
                    {content.publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                <div>
                                    <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                                        {pub.authors}
                                    </p>
                                    <p className="text-slate-500 text-sm font-medium">
                                        <span className="italic">{pub.conference}</span>, {pub.year}
                                    </p>
                                </div>

                                <div className="flex gap-3 shrink-0">
                                    {pub.links?.pdf && (
                                        <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-slate-50 rounded-xl text-sm font-semibold text-slate-600 hover:text-white hover:bg-slate-900 transition-all" title="PDF">
                                            <FileText size={16} className="mr-2" /> PDF
                                        </a>
                                    )}
                                    {pub.links?.video && (
                                        <a href={pub.links.video} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-slate-50 rounded-xl text-sm font-semibold text-slate-600 hover:text-white hover:bg-red-600 transition-all" title="Video">
                                            <Youtube size={16} className="mr-2" /> Video
                                        </a>
                                    )}
                                    {pub.links?.project && (
                                        <a href={pub.links.project} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-slate-50 rounded-xl text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 transition-all" title="Project Page">
                                            <ExternalLink size={16} className="mr-2" /> Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
