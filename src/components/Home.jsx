import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import News from './News';
import Publications from './Publications';
import Reviewer from './Reviewer';
import Teaching from './Teaching';

const Home = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Publications />
            <Reviewer />
            <News />
            <Teaching />
        </>
    );
};

export default Home;
