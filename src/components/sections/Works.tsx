import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "@/hooks/useGSAP";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, type ProjectCaseStudy, type ProjectCategory } from "@/data/projects";

type WorkFilter = "all" | ProjectCategory;

const categoryLabels: Record<ProjectCategory, string> = {
  "product-engineering": "Product & Engineering",
  "data-ai": "Data & AI",
};

const workFilters: Array<{ value: WorkFilter; label: string }> = [
  { value: "all", label: "All Work" },
  { value: "product-engineering", label: "Product & Engineering" },
  { value: "data-ai", label: "Data & AI" },
];

const getProjectsForFilter = (filter: WorkFilter) =>
  filter === "all" ? projects : projects.filter((project) => project.category === filter);

const ProjectCard = ({ project, index }: { project: ProjectCaseStudy; index: number }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cleanup: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          y: 32,
          scale: 0.98,
        },
        {
          y: 0,
          scale: 1,
          duration: 0.65,
          delay: index * 0.04,
          ease: "power3.out",
        },
      );

      const card = cardRef.current;

      if (card) {
        const activateCard = () => {
          gsap.to(card, {
            scale: 1.01,
            y: -8,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-overlay"), {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to(card.querySelector(".card-title"), {
            color: "hsl(var(--primary))",
            duration: 0.3,
          });
          gsap.to(card.querySelector(".card-image"), {
            scale: 1.04,
            duration: 0.7,
            ease: "power2.out",
          });
        };

        const deactivateCard = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".card-overlay"), {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(card.querySelector(".card-title"), {
            color: "hsl(var(--foreground))",
            duration: 0.3,
          });
          gsap.to(card.querySelector(".card-image"), {
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", activateCard);
        card.addEventListener("mouseleave", deactivateCard);
        card.addEventListener("focus", activateCard);
        card.addEventListener("blur", deactivateCard);

        cleanup.push(() => {
          card.removeEventListener("mouseenter", activateCard);
          card.removeEventListener("mouseleave", deactivateCard);
          card.removeEventListener("focus", activateCard);
          card.removeEventListener("blur", deactivateCard);
        });
      }
    }, cardRef);

    return () => {
      cleanup.forEach((fn) => fn());
      ctx.revert();
    };
  }, [index]);

  return (
    <Link
      ref={cardRef}
      to={`/projects/${project.slug}`}
      aria-label={`Read the ${project.title} case study`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          loading="lazy"
          className="card-image h-full w-full object-cover transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-background/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground backdrop-blur-md">
          {categoryLabels[project.category]}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span>{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
            <span>{project.status}</span>
          </div>
          <div className="mt-4 flex items-start justify-between gap-5">
            <h3 className="card-title text-2xl font-black tracking-tight transition-colors md:text-3xl">
              {project.title}
            </h3>
            <ArrowUpRight
              className="mt-2 h-6 w-6 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
            {project.summary}
          </p>
        </div>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[11px] text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 ? (
              <span className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
                +{project.tags.length - 4}
              </span>
            ) : null}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
            View case study
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="card-overlay pointer-events-none absolute inset-0 bg-primary/5 opacity-0" />
    </Link>
  );
};

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );

      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 80,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-16">
          <span ref={labelRef} className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block opacity-0">
            Featured Work
          </span>
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-black">
            Projects by Discipline
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Product engineering, applied AI, and data stories—organized for faster browsing without hiding the full case studies.
          </p>
        </div>

        <Tabs defaultValue="all">
          <TabsList
            className="h-auto w-full justify-start gap-2 overflow-x-auto rounded-none bg-transparent p-1"
            aria-label="Filter portfolio projects by discipline"
          >
            {workFilters.map((filter) => (
              <TabsTrigger
                key={filter.value}
                value={filter.value}
                className="gap-2 rounded-full border border-border bg-card px-4 py-2.5 font-mono text-xs uppercase tracking-wider data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {filter.label}
                <span
                  className="rounded-full bg-background/70 px-2 py-0.5 text-[10px] text-foreground"
                  aria-label={`${getProjectsForFilter(filter.value).length} projects`}
                >
                  {getProjectsForFilter(filter.value).length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {workFilters.map((filter) => {
            const filteredProjects = getProjectsForFilter(filter.value);

            return (
              <TabsContent key={filter.value} value={filter.value} className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Works;
