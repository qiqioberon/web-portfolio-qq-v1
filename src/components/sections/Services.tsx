import { useEffect, useRef } from "react";
import { BrainCircuit, Code2, Smartphone } from "lucide-react";
import { gsap } from "@/hooks/useGSAP";

const services = [
  {
    icon: Code2,
    title: "Full-stack Web Products",
    description:
      "End-to-end web applications with thoughtful interfaces, secure data flows, APIs, authentication, and production-ready deployment.",
    capabilities: ["React & Next.js", "TypeScript", "Supabase", "Vercel"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile experiences with persistent user data, platform integrations, localized journeys, and Google Play delivery.",
    capabilities: ["Flutter & Dart", "Supabase", "Android", "Google Play"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & Data Analytics",
    description:
      "Research-backed ML systems and analytical dashboards that turn models and complex datasets into useful, explainable products.",
    capabilities: ["PyTorch", "Hugging Face", "SQL", "Tableau"],
  },
] as const;

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".services-header > *", {
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".service-card", {
        y: 48,
        rotateX: -8,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-secondary/30 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="services-header mb-16">
          <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-primary">
            What I Do
          </span>
          <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
            Services
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            I build complete digital products—from full-stack web and mobile
            applications to machine-learning and data solutions that turn
            research into usable experiences.
          </p>
        </div>

        <div className="services-grid grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="service-card group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/30"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-8 flex-1 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${service.title} capabilities`}
                >
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
