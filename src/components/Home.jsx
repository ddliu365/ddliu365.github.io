import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Publications from './Publications';
import Honors from './Honors';
import Service from './Service';
import Education from './Education';

const Home = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <Education />
            <Skills />
            <Publications />
            <Honors />
            <Service />
        </>
    );
};

export default Home;
