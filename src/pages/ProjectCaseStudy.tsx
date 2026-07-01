import { ArrowLeft, ArrowUp, ExternalLink, Github } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, type ProjectArchitecture, type ProjectCaseStudy } from "@/data/projects";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import NotFound from "./NotFound";

const SectionEyebrow = ({ children }: { children: ReactNode }) => (
  <span className="text-primary text-sm font-mono tracking-wider uppercase">{children}</span>
);

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground md:text-4xl">{children}</h2>
);

const ProjectHeader = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link
        to="/"
        className="inline-flex items-center gap-3 rounded-full text-sm font-semibold text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Go to portfolio homepage"
      >
        <img src="/logo/dark.svg" alt="" className="h-8 w-8" />
        <span>Qiqi</span>
      </Link>
      <a
        href="/#works"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Portfolio
      </a>
    </div>
  </header>
);

const ArchitectureDiagram = ({
  architecture,
  projectTitle,
  diagramIndex,
}: {
  architecture: ProjectArchitecture;
  projectTitle: string;
  diagramIndex: number;
}) => (
  <div
    className="rounded-3xl border border-border bg-card/60 p-5 shadow-2xl shadow-primary/5 md:p-8"
    aria-labelledby={`architecture-diagram-title-${diagramIndex}`}
  >
    {architecture.title ? <h3 className="mb-6 text-2xl font-black">{architecture.title}</h3> : null}
    <p id={`architecture-diagram-title-${diagramIndex}`} className="sr-only">
      {architecture.diagramDescription || `${projectTitle} architecture diagram.`}
    </p>
    <div className="grid gap-5 lg:grid-cols-[1fr_auto_1.5fr] lg:items-center">
      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">
          {architecture.clientLabel || "Client"}
        </p>
        <h4 className="mt-3 text-2xl font-black">{architecture.client.title}</h4>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{architecture.client.description}</p>
      </div>

      <div className="hidden h-px w-16 bg-gradient-to-r from-primary/20 via-primary to-primary/20 lg:block" />

      <div className="grid gap-4 sm:grid-cols-2">
        {architecture.services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-border bg-background/60 p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              {architecture.serviceLabel || "Service"}
            </p>
            <h4 className="mt-3 text-xl font-bold">{service.title}</h4>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto_1.5fr] lg:items-center">
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">
          {architecture.privilegedLabel || "Privileged path"}
        </p>
        <h4 className="mt-3 text-xl font-bold">{architecture.privileged.title}</h4>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{architecture.privileged.description}</p>
      </div>

      <div className="hidden h-px w-16 bg-gradient-to-r from-primary/20 via-primary to-primary/20 lg:block" />

      <div className="rounded-2xl border border-border bg-background/60 p-5">
        <h4 className="text-xl font-bold">{architecture.boundaryTitle || "Backend boundary"}</h4>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{architecture.intro}</p>
      </div>
    </div>
  </div>
);

const ProjectCaseStudyContent = ({ project }: { project: ProjectCaseStudy }) => {
  const noticeClasses =
    project.disclaimerVariant === "info"
      ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
      : "border-amber-300/30 bg-amber-300/10 text-amber-100";

  usePageMetadata({
    title: `${project.title} Case Study — Qiqi`,
    description: project.seoDescription,
    image: project.cover.src,
    type: "article",
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ProjectHeader />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-28">
          <div className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionEyebrow>Case Study</SectionEyebrow>
                <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">{project.title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{project.summary}</p>

                <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    ["Role", project.role],
                    ["Year", project.year],
                    ["Status", project.status],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-border bg-card/70 p-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-primary">{label}</dt>
                      <dd className="mt-2 text-sm font-semibold text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg" className="glow-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open live demo for ${project.title} in a new tab`}
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  {project.githubUrl ? (
                    <Button asChild size="lg" variant="outline">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open GitHub repository for ${project.title} in a new tab`}
                      >
                        GitHub
                        <Github className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  ) : null}
                  {project.externalLinks?.map((link) => (
                    <Button asChild size="lg" variant="outline" key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${link.label} for ${project.title} in a new tab`}
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
                <img
                  src={project.cover.src}
                  alt={project.cover.alt}
                  width={project.cover.width}
                  height={project.cover.height}
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionEyebrow>Overview</SectionEyebrow>
              <SectionTitle>{project.sectionTitles.overview}</SectionTitle>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">{project.overview}</p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-8">
              <SectionEyebrow>Problem</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black">{project.sectionTitles.problem}</h2>
              <p className="mt-5 leading-8 text-muted-foreground">{project.problem}</p>
            </article>
            <article className="rounded-3xl border border-primary/30 bg-primary/10 p-8">
              <SectionEyebrow>Solution</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black">{project.sectionTitles.solution}</h2>
              <p className="mt-5 leading-8 text-muted-foreground">{project.solution}</p>
            </article>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow>Key Features</SectionEyebrow>
            <SectionTitle>{project.sectionTitles.features}</SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <article key={feature} className="rounded-2xl border border-border bg-card/70 p-5">
                  <h3 className="text-base font-semibold leading-7">{feature}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {project.metrics?.length ? (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-7xl">
              <SectionEyebrow>Research Metrics</SectionEyebrow>
              <SectionTitle>{project.metricsTitle || "Measured outcomes"}</SectionTitle>
              <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-border bg-card/70 p-6">
                    <dt className="font-mono text-xs uppercase tracking-wider text-primary">{metric.label}</dt>
                    <dd className="mt-3 text-3xl font-black tracking-tight text-foreground">{metric.value}</dd>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{metric.description}</p>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ) : null}

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow>Architecture</SectionEyebrow>
            <SectionTitle>{project.sectionTitles.architecture}</SectionTitle>
            <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">{project.architecture.intro}</p>
            <div className="mt-10 space-y-8">
              {[project.architecture, ...(project.additionalArchitectures || [])].map((architecture, index) => (
                <ArchitectureDiagram
                  key={architecture.title || index}
                  architecture={architecture}
                  projectTitle={project.title}
                  diagramIndex={index}
                />
              ))}
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-black">Tech stack</h3>
              {project.technologyGroups ? (
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {project.technologyGroups.map((group) => (
                    <article key={group.title} className="rounded-2xl border border-border bg-card/70 p-5">
                      <h4 className="text-lg font-bold">{group.title}</h4>
                      {group.description ? (
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
                      ) : null}
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow>Gallery</SectionEyebrow>
            <SectionTitle>{project.sectionTitles.gallery}</SectionTitle>
            {project.gallery.some((image) => image.title || image.description || image.features) ? (
              <div className="mt-10 space-y-8">
                {project.gallery.map((image, index) => (
                  <figure
                    key={image.src}
                    className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[1.45fr_0.85fr]"
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        className="h-auto w-full border-b border-border object-cover lg:h-full lg:border-b-0 lg:object-contain"
                      />
                    </div>
                    <figcaption className="flex flex-col justify-center p-6 md:p-8">
                      <p className="font-mono text-xs uppercase tracking-wider text-primary">
                        Screen {String(index + 1).padStart(2, "0")}
                      </p>
                      {image.title ? <h3 className="mt-3 text-2xl font-black">{image.title}</h3> : null}
                      {image.description ? (
                        <p className="mt-4 leading-7 text-muted-foreground">{image.description}</p>
                      ) : null}
                      {image.features?.length ? (
                        <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                          {image.features.map((feature) => (
                            <li key={feature} className="flex gap-3 leading-6">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" aria-hidden="true" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {project.gallery.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-3xl border border-border bg-card">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-8">
              <SectionEyebrow>Migration Challenges</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black">{project.sectionTitles.challenges}</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="leading-7">
                    {challenge}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-border bg-card p-8">
              <SectionEyebrow>Lessons Learned</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black">{project.sectionTitles.lessons}</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                {project.lessons.map((lesson) => (
                  <li key={lesson} className="leading-7">
                    {lesson}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl rounded-3xl border border-primary/30 bg-primary/10 p-8 md:p-10">
            <SectionEyebrow>Outcome</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black">{project.sectionTitles.outcome}</h2>
            <ul className="mt-6 grid gap-4 text-muted-foreground md:grid-cols-3">
              {project.outcome.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mt-8 rounded-2xl border p-5 text-sm leading-7 ${noticeClasses}`}>
              <span className="font-mono text-xs uppercase tracking-wider">{project.disclaimerLabel || "Notice"}</span>
              <span className="mt-2 block">{project.disclaimer}</span>
            </p>
          </div>
        </section>
      </main>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
      <Footer />
    </div>
  );
};

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  return <ProjectCaseStudyContent project={project} />;
};

export default ProjectCaseStudy;
