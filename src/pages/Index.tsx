import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="px-4 md:px-8 lg:px-16 py-12">
          <About />
        </section>
        <section id="projects" className="px-4 md:px-8 lg:px-16 py-12">
          <Projects />
        </section>
        <section id="contact" className="px-4 md:px-8 lg:px-16 py-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

