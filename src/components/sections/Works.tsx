import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';

interface Project {
  id: number;
  title: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    tags: ["Web Design", "Frontend"],
    color: "from-violet-500/20 to-indigo-500/20"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    tags: ["UI/UX", "React"],
    color: "from-rose-500/20 to-orange-500/20"
  },
  {
    id: 3,
    title: "Brand Website",
    tags: ["Web Design", "Animation"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    tags: ["Landing Page", "Webflow"],
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    id: 5,
    title: "Portfolio Redesign",
    tags: ["UI Design", "GSAP"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Mobile App Design",
    tags: ["UI/UX", "Figma"],
    color: "from-pink-500/20 to-purple-500/20"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Hover animation
      const card = cardRef.current;
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            y: -10,
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(card.querySelector('.card-overlay'), {
            opacity: 1,
            duration: 0.3
          });
          gsap.to(card.querySelector('.card-title'), {
            color: 'hsl(var(--primary))',
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(card.querySelector('.card-overlay'), {
            opacity: 0,
            duration: 0.3
          });
          gsap.to(card.querySelector('.card-title'), {
            color: 'hsl(var(--foreground))',
            duration: 0.3
          });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border cursor-pointer"
      style={{ opacity: 0 }}
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center transition-transform duration-700 group-hover:scale-110`}>
          <span className="text-muted-foreground text-sm font-mono">Project {project.id}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="card-title text-xl font-bold mb-2 transition-colors">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
        </div>
      </div>

      {/* Hover overlay */}
      <div className="card-overlay absolute inset-0 bg-primary/5 opacity-0 pointer-events-none" />
    </div>
  );
};

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label animation
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Title animation with clip path
      gsap.fromTo(
        titleRef.current,
        { 
          opacity: 0, 
          y: 80,
          clipPath: 'inset(100% 0% 0% 0%)'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-16">
          <span ref={labelRef} className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block opacity-0">
            Featured Works
          </span>
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-black">
            Selected Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
