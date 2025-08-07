import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="px-4 md:px-8 lg:px-16 py-12">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
