import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { designProjects } from "@/data/designProjects";
import { gsap } from "@/hooks/useGSAP";

const GraphicDesign = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".design-reveal", {
        y: 36,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="design"
      className="border-y border-border/60 bg-card/20 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="design-reveal mb-14">
          <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-primary">
            Visual Work
          </span>
          <h2 className="text-4xl font-black md:text-5xl lg:text-6xl">
            Graphic Design
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Brand systems, campaign visuals, and social content designed to
            make complex messages clear, recognizable, and worth exploring.
          </p>
        </div>

        <div className="space-y-8">
          {designProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/design/${project.slug}`}
              aria-label={`View the ${project.title} visual case study`}
              className="design-reveal group grid overflow-hidden rounded-3xl border border-border bg-card outline-none transition-colors duration-300 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="flex flex-col p-7 md:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <span>{project.role}</span>
                  <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  <span>{project.year}</span>
                </div>

                <h3 className="mt-6 text-3xl font-black tracking-tight transition-colors group-hover:text-primary group-focus-visible:text-primary md:text-5xl">
                  {project.shortTitle}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                  {project.summary}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${project.shortTitle} design disciplines`}>
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 font-mono text-[11px] text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary group-focus-visible:text-primary">
                  View visual case study
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>

              <div className="relative min-h-[22rem] overflow-hidden bg-[#121827] p-5 md:p-8 lg:min-h-[34rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,0,148,0.22),transparent_58%)]" />
                <div className="relative grid h-full grid-cols-3 items-center gap-3 md:gap-5">
                  {project.coverImages.map((image, index) => (
                    <div
                      key={image.src}
                      className={`overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.025] group-focus-visible:scale-[1.025] ${
                        index === 1 ? "-translate-y-5" : "translate-y-5"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
