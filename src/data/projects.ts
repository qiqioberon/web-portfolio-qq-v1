export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ArchitectureNode {
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  intro: string;
  client: ArchitectureNode;
  services: ArchitectureNode[];
  privileged: ArchitectureNode;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  status: string;
  tags: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  liveUrl: string;
  githubUrl: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: ProjectArchitecture;
  stack: string[];
  challenges: string[];
  outcome: string[];
  lessons: string[];
  disclaimer: string;
  seoDescription: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "atomics-lite",
    title: "Atomics Lite",
    summary:
      "A portfolio-safe reconstruction of a crossmatch record workflow for synthetic demo data, image review, collaboration, statistics, and reporting.",
    role: "Full-stack Developer",
    year: "2026",
    status: "Live Portfolio Demo",
    tags: ["React", "Vite", "Supabase", "Vercel", "Realtime", "Synthetic Demo"],
    cover: {
      src: "/projects/atomics-lite/dashboard.webp",
      alt: "Atomics Lite dashboard showing synthetic blood storage statistics and recent demo tests.",
      width: 1440,
      height: 1000,
    },
    gallery: [
      {
        src: "/projects/atomics-lite/history.webp",
        alt: "Atomics Lite history table with six seeded synthetic demo documents.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/atomics-lite/document-detail.webp",
        alt: "Atomics Lite document detail page for a synthetic crossmatch record.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/atomics-lite/prediction-workflow.webp",
        alt: "Atomics Lite prediction workflow using bundled synthetic images and demo-only segmentation results.",
        width: 1440,
        height: 1000,
      },
    ],
    liveUrl: "https://atomics-lite.vercel.app/",
    githubUrl: "https://github.com/qiqioberon/atomics-lite",
    overview:
      "Atomics Lite demonstrates the core workflow of a crossmatch record system: creating and reviewing documents, checking uploaded images, collaborating through comments, watching realtime notifications, reading operational statistics, and exporting reports. The public demo is intentionally scoped to synthetic data so the project can be explored safely from a portfolio.",
    problem:
      "The original campus-hosted system depended on a stopped university server, local filesystem uploads, MongoDB, Socket.IO, and a legacy machine-learning service. Those choices were reasonable for the original environment but were not suitable for a standalone public portfolio demo because they required private infrastructure and operational assumptions that could not be reproduced reliably.",
    solution:
      "The portfolio version was rebuilt with Vite, Vercel, and Supabase. Authentication, relational records, object storage, and realtime updates move to managed services, while privileged operations run through Vercel Functions. The demo prediction path uses deterministic client-side behavior and seeded synthetic records instead of medical data or a live ML service.",
    features: [
      "One-click anonymous demo workspace with six seeded synthetic documents.",
      "Document workflow for pending, accepted, and rejected crossmatch records.",
      "Image upload and review flow with portfolio-safe bundled sample images.",
      "Deterministic demo segmentation and prediction output for repeatable walkthroughs.",
      "History table with search, filtering, statuses, document actions, and pagination affordances.",
      "Statistics dashboard for synthetic blood type and test distribution.",
      "Comment thread for collaboration on a document.",
      "Realtime notification pattern for record activity.",
      "Role-aware screens for demo doctor, admin, and workflow ownership patterns.",
      "PDF/report export path for document handoff.",
    ],
    architecture: {
      intro:
        "The app is a client-first Vite SPA on Vercel. Supabase owns identity, records, files, and realtime events; Vercel Functions handle operations that should not run directly from the browser.",
      client: {
        title: "React + Vite SPA",
        description:
          "Renders the dashboard, history, document detail, upload, prediction, collaboration, statistics, and report UI.",
      },
      services: [
        {
          title: "Supabase Auth",
          description: "Handles demo identity, roles, and session state.",
        },
        {
          title: "PostgreSQL",
          description: "Stores synthetic crossmatch documents, statuses, comments, and audit-friendly records.",
        },
        {
          title: "Storage",
          description: "Stores image assets used by the document and review workflows.",
        },
        {
          title: "Realtime",
          description: "Powers notification and collaboration patterns without a custom Socket.IO server.",
        },
      ],
      privileged: {
        title: "Vercel Functions",
        description:
          "Runs registration, invite activation, admin operations, demo seeding, and other privileged tasks outside the browser.",
      },
    },
    stack: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Vercel",
      "Vercel Functions",
      "Supabase Auth",
      "Supabase PostgreSQL",
      "Supabase Storage",
      "Supabase Realtime",
      "Client-side PDF generation",
    ],
    challenges: [
      "Replacing a campus-only server with a deployable public architecture without changing the story of the product.",
      "Moving local uploads and database records into Supabase while keeping the demo easy to reset and inspect.",
      "Reworking Socket.IO-style behavior into Supabase Realtime so notifications remain demonstrable on Vercel.",
      "Designing deterministic prediction behavior that communicates the workflow without implying medical validity.",
      "Keeping demo data synthetic and scoped so screenshots, public sessions, and exported reports remain portfolio-safe.",
    ],
    outcome: [
      "Atomics Lite is now a standalone live demo that communicates the original workflow without relying on private campus infrastructure.",
      "The project can be opened, seeded, explored, and reviewed from a browser with no manual backend setup.",
      "The codebase documents a practical migration path from a local/full-stack prototype into a managed, deployable portfolio application.",
    ],
    lessons: [
      "A portfolio rebuild should preserve the product story, not every implementation detail of the original system.",
      "Synthetic demo data needs to be designed as a first-class feature, especially when the domain resembles healthcare.",
      "Managed services reduce operational friction, but sensitive actions still need a clear server-side boundary.",
      "Deterministic demos are better for reviewers than fragile model calls when the purpose is to evaluate product and engineering decisions.",
    ],
    disclaimer:
      "Atomics Lite is not a medical device. All names, identifiers, images, segmentation, predictions, and reports in the public demo are synthetic and must not be used for diagnosis, treatment, blood compatibility decisions, or any other clinical purpose.",
    seoDescription:
      "Atomics Lite is a portfolio-safe React, Vite, Vercel, and Supabase case study for a synthetic crossmatch record workflow demo.",
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
