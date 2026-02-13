import { motion } from 'framer-motion';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Publications from './Publications';
import Honors from './Honors';
import Service from './Service';
import Education from './Education';

const RevealSection = ({ children, id }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.section>
);

const Home = () => {
    return (
        <div className="bg-[#050505] relative space-y-0">
            {/* Background Ambient Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#A31F34]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF530D]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <Hero />

            <div className="relative z-10 space-y-0">
                <RevealSection id="projects">
                    <Projects />
                </RevealSection>

                <RevealSection id="experience">
                    <Experience />
                </RevealSection>

                <RevealSection id="education">
                    <Education />
                </RevealSection>

                <RevealSection id="skills">
                    <Skills />
                </RevealSection>

                <RevealSection id="publications">
                    <Publications />
                </RevealSection>

                <RevealSection id="honors">
                    <Honors />
                </RevealSection>

                <RevealSection id="service">
                    <Service />
                </RevealSection>
            </div>
        </div>
    );
};

export default Home;
