import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Works from '@/components/sections/Works';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Templates from '@/components/sections/Templates';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { ScrollTrigger } from '@/hooks/useGSAP';

const Index = () => {
  useEffect(() => {
    const refreshScrollTrigger = () => ScrollTrigger.refresh();
    const timeout = window.setTimeout(refreshScrollTrigger, 100);
    const raf = window.requestAnimationFrame(refreshScrollTrigger);

    document.fonts?.ready.then(refreshScrollTrigger);
    window.addEventListener('load', refreshScrollTrigger);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(raf);
      window.removeEventListener('load', refreshScrollTrigger);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Works />
      <Services />
      <Templates />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
