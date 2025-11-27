import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Works from '@/components/sections/Works';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Templates from '@/components/sections/Templates';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Works />
      <Services />
      <About />
      <Templates />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
