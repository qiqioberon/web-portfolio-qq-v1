import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Instagram } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import DesignLightbox from "@/components/design/DesignLightbox";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getDesignProjectBySlug,
  type DesignCollection,
  type DesignImage,
  type DesignProject,
} from "@/data/designProjects";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import NotFound from "./NotFound";

const DesignHeader = () => (
  <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
      <Link
        to="/"
        className="inline-flex items-center gap-3 rounded-full text-sm font-semibold text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Go to portfolio homepage"
      >
        <img src="/logo/dark.svg" alt="" className="h-8 w-8" />
        <span>Qiqi</span>
      </Link>
      <a
        href="/#design"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Design
      </a>
    </div>
  </header>
);

const SectionEyebrow = ({ children }: { children: string }) => (
  <span className="font-mono text-sm uppercase tracking-wider text-primary">
    {children}
  </span>
);

const GalleryImageButton = ({
  image,
  index,
  onOpen,
  className,
  imageClassName,
}: {
  image: DesignImage;
  index: number;
  onOpen: (index: number) => void;
  className?: string;
  imageClassName?: string;
}) => (
  <button
    type="button"
    onClick={() => onOpen(index)}
    data-design-image-index={index}
    className={cn(
      "group relative overflow-hidden rounded-2xl border border-border bg-[#121827] text-left outline-none transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      className,
    )}
    aria-label={`Open full-size design: ${image.alt}`}
  >
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      className={cn(
        "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.015] group-focus-visible:scale-[1.015]",
        imageClassName,
      )}
    />
    <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
      Expand
      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
    </span>
  </button>
);

const DesignCollectionGallery = ({
  collection,
  getImageIndex,
  onOpen,
}: {
  collection: DesignCollection;
  getImageIndex: (image: DesignImage) => number;
  onOpen: (index: number) => void;
}) => {
  if (collection.layout === "editorial") {
    const [overview, ...supportingImages] = collection.images;

    return (
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <GalleryImageButton
          image={overview}
          index={getImageIndex(overview)}
          onOpen={onOpen}
          className="lg:sticky lg:top-28"
          imageClassName="max-h-[52rem]"
        />
        <div className="grid grid-cols-2 gap-4">
          {supportingImages.map((image) => (
            <GalleryImageButton
              key={image.src}
              image={image}
              index={getImageIndex(image)}
              onOpen={onOpen}
              className="aspect-square"
            />
          ))}
        </div>
      </div>
    );
  }

  if (collection.layout === "feature") {
    return (
      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
        {collection.images.map((image, index) => (
          <GalleryImageButton
            key={image.src}
            image={image}
            index={getImageIndex(image)}
            onOpen={onOpen}
            className={index === 0 ? "lg:row-span-2" : "aspect-square"}
            imageClassName={index === 0 ? "max-h-[54rem]" : undefined}
          />
        ))}
      </div>
    );
  }

  if (collection.layout === "stories") {
    return (
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {collection.images.map((image) => (
          <GalleryImageButton
            key={image.src}
            image={image}
            index={getImageIndex(image)}
            onOpen={onOpen}
            className="aspect-[9/16]"
          />
        ))}
      </div>
    );
  }

  const isMosaic = collection.id === "winner-announcement";

  return (
    <div
      className={cn(
        "mt-10 grid gap-3 md:gap-5",
        isMosaic ? "grid-cols-3" : "grid-cols-2 lg:grid-cols-3",
      )}
    >
      {collection.images.map((image) => (
        <GalleryImageButton
          key={image.src}
          image={image}
          index={getImageIndex(image)}
          onOpen={onOpen}
          className="aspect-square"
        />
      ))}
    </div>
  );
};

const DesignCaseStudyContent = ({ project }: { project: DesignProject }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const allImages = useMemo(
    () => project.collections.flatMap((collection) => collection.images),
    [project],
  );

  usePageMetadata({
    title: `${project.title} — Qiqi`,
    description: project.seoDescription,
    image: project.seoImage.src,
    type: "article",
  });

  const getImageIndex = (image: DesignImage) =>
    allImages.findIndex((galleryImage) => galleryImage.src === image.src);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <DesignHeader />
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-28">
          <div className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow>Visual Case Study</SectionEyebrow>
              <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {project.summary}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ["Role", project.role],
                  ["Year", project.year],
                  ["Status", project.status],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-border bg-card/70 p-4">
                    <dt className="font-mono text-xs uppercase tracking-wider text-primary">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold text-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.externalLinks.map((link) => (
                  <Button asChild size="lg" className="glow-sm" key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${link.label} for ${project.shortTitle} in a new tab`}
                    >
                      <Instagram className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-3xl border border-white/10 bg-[#121827] p-5 shadow-2xl shadow-fuchsia-950/30 md:p-8 lg:min-h-[38rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,0,148,0.28),transparent_60%)]" />
              <div className="relative grid h-full grid-cols-3 items-center gap-3 md:gap-5">
                {project.coverImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={`overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${
                      index === 1 ? "-translate-y-6" : "translate-y-6"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="eager"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionEyebrow>Overview</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                A social system for local film stories
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              {project.overview}
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-8">
              <SectionEyebrow>Challenge</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black">One brand, two audiences</h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                {project.challenge}
              </p>
            </article>
            <article className="rounded-3xl border border-fuchsia-500/25 bg-fuchsia-500/10 p-8">
              <SectionEyebrow>Creative Approach</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black">Modular visual storytelling</h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                {project.approach}
              </p>
            </article>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Deliverables</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Campaign content across the full funnel
              </h2>
              <ul className="mt-8 space-y-4">
                {project.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex gap-4 rounded-2xl border border-border bg-card/70 p-5 leading-7 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionEyebrow>Tools and Disciplines</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                From visual direction to final export
              </h2>
              <ul className="mt-8 flex flex-wrap gap-3" aria-label="Design tools and disciplines">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-secondary-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/20 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow>Visual Direction</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              A recognizable language for every content type
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {project.visualDirection.map((direction) => (
                <article key={direction.label} className="rounded-2xl border border-border bg-background/70 p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    {direction.label}
                  </p>
                  <h3 className="mt-3 text-xl font-black">{direction.value}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {direction.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl rounded-3xl border border-primary/25 bg-primary/5 p-7 md:p-10">
            <SectionEyebrow>Original Presentation</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Restoring the intended square-feed compositions
            </h2>
            <p className="mt-5 max-w-4xl leading-8 text-muted-foreground">
              The original work was designed around 1:1 posts and three-column
              profile mosaics. This case study reconstructs those sequences
              directly from the source exports, preserving the intended order
              and composition without profile-grid cropping or reflow.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow>Selected Work</SectionEyebrow>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Campaign gallery
            </h2>

            <div className="mt-16 space-y-24">
              {project.collections.map((collection, index) => (
                <section key={collection.id} aria-labelledby={`collection-${collection.id}`}>
                  <div className="grid gap-5 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-10">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                      Collection {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 id={`collection-${collection.id}`} className="text-3xl font-black tracking-tight md:text-4xl">
                        {collection.title}
                      </h3>
                      <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                        {collection.description}
                      </p>
                    </div>
                  </div>

                  <DesignCollectionGallery
                    collection={collection}
                    getImageIndex={getImageIndex}
                    onOpen={setActiveImageIndex}
                  />
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DesignLightbox
        images={allImages}
        activeIndex={activeImageIndex}
        onActiveIndexChange={setActiveImageIndex}
      />
    </div>
  );
};

const DesignCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getDesignProjectBySlug(slug);

  if (!project) return <NotFound />;

  return <DesignCaseStudyContent project={project} />;
};

export default DesignCaseStudy;
