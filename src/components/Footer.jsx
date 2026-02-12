import { content } from '../data/content';

const Footer = () => {
    return (
        <footer className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-6 max-w-6xl text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">{content.name}</h3>
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6 text-sm text-gray-400">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href={`mailto:${content.email}`} className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
