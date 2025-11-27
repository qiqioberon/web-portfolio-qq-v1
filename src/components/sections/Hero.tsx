import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tag */}
        <div className="opacity-0-initial animate-fade-in-up mb-8">
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground">
            Web Designer & Frontend Developer
          </span>
        </div>

        {/* Main headline */}
        <h1 className="opacity-0-initial animate-fade-in-up animation-delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8">
          <span className="block">Crafting Bold &</span>
          <span className="block text-gradient">Playful Web</span>
          <span className="block">Experiences</span>
        </h1>

        {/* Subtitle */}
        <p className="opacity-0-initial animate-fade-in-up animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm Aqil — a freelance web designer and frontend developer passionate about 
          creating immersive digital experiences that captivate and convert.
        </p>

        {/* CTA */}
        <div className="opacity-0-initial animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={scrollToWorks}
            size="lg" 
            className="group px-8 py-6 text-lg font-semibold glow"
          >
            View Selected Works
            <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-border hover:bg-card hover:border-primary/50"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-initial animate-fade-in animation-delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
