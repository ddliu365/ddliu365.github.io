import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Cpu, Code, Settings } from 'lucide-react';

const Skills = () => {
    const categories = [
        { id: 'robotics', title: 'Robotics', icon: Cpu, items: content.skills.robotics },
        { id: 'programming', title: 'Programming', icon: Code, items: content.skills.programming },
        { id: 'mechatronics', title: 'Mechatronics', icon: Settings, items: content.skills.mechatronics },
    ];

    return (
        <section id="skills" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 tracking-tight">Skills</h2>
                        <div className="h-1 w-16 bg-[#A31F34]"></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-slate-100 shadow-sm">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 md:p-10 border-r border-b border-slate-100 hover:bg-slate-50 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-[#A31F34] group-hover:h-full transition-all duration-500"></div>

                            <div className="flex items-center mb-8">
                                <div className="p-3 bg-slate-50 text-slate-300 group-hover:bg-[#A31F34] group-hover:text-white transition-all duration-300">
                                    <category.icon size={22} strokeWidth={1} />
                                </div>
                                <h3 className="text-lg font-semibold ml-4 text-slate-900 tracking-tight">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 bg-white text-slate-500 text-[10px] font-bold border border-slate-100 uppercase tracking-widest hover:border-[#FF530D] hover:text-[#FF530D] transition-colors cursor-default font-mono"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
