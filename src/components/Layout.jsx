import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#A31F34]/30 selection:text-[#A31F34] flex flex-col">
            <Header />
            <main className="flex-grow relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
