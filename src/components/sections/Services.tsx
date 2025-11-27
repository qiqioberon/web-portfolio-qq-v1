import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Palette, Code, Layout, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Creating visually stunning and user-centered designs that communicate your brand's story and engage your audience."
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building fast, responsive, and interactive websites using modern technologies like React, TypeScript, and Next.js."
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture attention and drive action with compelling layouts and copy."
  },
  {
    icon: Sparkles,
    title: "Web Animations",
    description: "Bringing interfaces to life with smooth, purposeful animations using GSAP, Framer Motion, and CSS."
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I help brands and startups create digital experiences that stand out and drive results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
