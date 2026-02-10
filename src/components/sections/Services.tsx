import { useEffect, useRef } from 'react';
import { Palette, Code, Layout, Sparkles } from 'lucide-react';
import { gsap } from '@/hooks/useGSAP';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  useEffect(() => {
    const cleanup: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0, 
          y: 60,
          rotateX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          delay: index * 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );

      // Icon animation on hover
      const card = cardRef.current;
      const icon = card?.querySelector('.service-icon');
      
      if (card && icon) {
        const handleMouseEnter = () => {
          gsap.to(icon, {
            scale: 1.1,
            rotate: 5,
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(card, {
            borderColor: 'hsl(var(--primary) / 0.3)',
            duration: 0.3
          });
        };

        const handleMouseLeave = () => {
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(card, {
            borderColor: 'hsl(var(--border))',
            duration: 0.3
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        cleanup.push(() => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    }, cardRef);

    return () => {
      cleanup.forEach((fn) => fn());
      ctx.revert();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group p-8 rounded-2xl bg-card border border-border transition-all duration-500"
      style={{ opacity: 0, perspective: '1000px' }}
    >
      <div className="service-icon w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services = () => {
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
          toggleActions: 'play none none none',
          once: true
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
    <section ref={sectionRef} id="services" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-16">
          <span ref={labelRef} className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block opacity-0">
            What I Do
          </span>
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 opacity-0">
            Services
          </h2>
          <p ref={descRef} className="text-muted-foreground text-lg max-w-2xl opacity-0">
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
