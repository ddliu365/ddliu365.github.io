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
        <section id="skills" className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Technical Skills</h2>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-center mb-8">
                                <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <category.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold ml-4 text-slate-900">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold border border-slate-100 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-default"
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
