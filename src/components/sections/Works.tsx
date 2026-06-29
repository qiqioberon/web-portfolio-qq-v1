import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "@/hooks/useGSAP";
import { projects, type ProjectCaseStudy } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: ProjectCaseStudy; index: number }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cleanup: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
            once: true,
          },
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
      className="group relative grid overflow-hidden rounded-3xl border border-border bg-card text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:grid-cols-[1.35fr_0.95fr]"
      style={{ opacity: 0 }}
    >
      <div className="relative min-h-[280px] overflow-hidden bg-muted md:min-h-[420px]">
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          loading="lazy"
          className="card-image h-full w-full object-cover transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/80" />
      </div>

      <div className="relative flex flex-col justify-between gap-10 p-6 md:p-10">
        <div>
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Featured Case Study</span>
          <div className="mt-5 flex items-start justify-between gap-6">
            <h3 className="card-title text-3xl font-black tracking-tight transition-colors md:text-5xl">
              {project.title}
            </h3>
            <ArrowUpRight
              className="mt-2 h-6 w-6 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground">
              {tag}
            </span>
          ))}
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
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
