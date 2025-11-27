import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    tags: ["Web Design", "Frontend"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    tags: ["UI/UX", "React"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Brand Website",
    tags: ["Web Design", "Animation"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    tags: ["Landing Page", "Webflow"],
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Portfolio Redesign",
    tags: ["UI Design", "GSAP"],
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Mobile App Design",
    tags: ["UI/UX", "Figma"],
    image: "/placeholder.svg"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border card-hover cursor-pointer
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Project Preview</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
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
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

const Works = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
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
