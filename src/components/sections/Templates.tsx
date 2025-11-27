import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight, Layers } from 'lucide-react';

const templates = [
  {
    id: 1,
    title: "Portfolio Starter",
    type: "Template",
    description: "A minimal portfolio template for designers and developers."
  },
  {
    id: 2,
    title: "SaaS Landing Kit",
    type: "Template",
    description: "Complete landing page kit for SaaS products."
  },
  {
    id: 3,
    title: "Animated Navigation",
    type: "UI Experiment",
    description: "Creative navigation patterns with smooth animations."
  },
  {
    id: 4,
    title: "Scroll Effects Library",
    type: "Code Resource",
    description: "Collection of scroll-based animation effects."
  }
];

const TemplateCard = ({ template, index }: { template: typeof templates[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer card-hover
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
          <Layers className="w-6 h-6 text-primary" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
      <span className="text-xs text-primary font-medium uppercase tracking-wider">{template.type}</span>
      <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
        {template.title}
      </h3>
      <p className="text-muted-foreground text-sm">{template.description}</p>
    </div>
  );
};

const Templates = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="templates" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Resources
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Templates & Experiments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Side projects, templates, and UI experiments I've been working on.
          </p>
        </div>

        {/* Templates grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
