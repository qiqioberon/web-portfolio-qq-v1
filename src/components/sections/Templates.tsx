import { useEffect, useRef } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';

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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Hover animations
      const card = cardRef.current;
      const arrow = card?.querySelector('.arrow-icon');

      if (card && arrow) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            borderColor: 'hsl(var(--primary) / 0.3)',
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(arrow, {
            x: 4,
            y: -4,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            borderColor: 'hsl(var(--border))',
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(arrow, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative p-6 rounded-2xl bg-card border border-border transition-all duration-500 cursor-pointer"
      style={{ opacity: 0 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
          <Layers className="w-6 h-6 text-primary" />
        </div>
        <ArrowUpRight className="arrow-icon w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <span className="text-xs text-primary font-mono uppercase tracking-wider">{template.type}</span>
      <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
        {template.title}
      </h3>
      <p className="text-muted-foreground text-sm">{template.description}</p>
    </div>
  );
};

const Templates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="templates" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-16">
          <span ref={labelRef} className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block opacity-0">
            Resources
          </span>
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 opacity-0">
            Templates & Experiments
          </h2>
          <p ref={descRef} className="text-muted-foreground text-lg max-w-2xl opacity-0">
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
