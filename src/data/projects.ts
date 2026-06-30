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
  clientLabel?: string;
  serviceLabel?: string;
  privilegedLabel?: string;
  boundaryTitle?: string;
  diagramDescription?: string;
  client: ArchitectureNode;
  services: ArchitectureNode[];
  privileged: ArchitectureNode;
}

export interface ProjectSectionTitles {
  overview: string;
  problem: string;
  solution: string;
  features: string;
  architecture: string;
  gallery: string;
  challenges: string;
  lessons: string;
  outcome: string;
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
  sectionTitles: ProjectSectionTitles;
  disclaimerLabel?: string;
  disclaimerVariant?: "warning" | "info";
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
      clientLabel: "Client",
      serviceLabel: "Supabase",
      privilegedLabel: "Privileged path",
      boundaryTitle: "Managed backend boundary",
      diagramDescription:
        "Atomics Lite architecture: React and Vite connect to Supabase services, with Vercel Functions for privileged operations.",
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
    sectionTitles: {
      overview: "Prototype workflow, rebuilt for a public demo",
      problem: "Private infrastructure stopped being portable",
      solution: "A managed stack with deterministic demo behavior",
      features: "What the demo covers",
      architecture: "React/Vite frontend, Supabase backend, Vercel privileged boundary",
      gallery: "Live demo screens",
      challenges: "What had to change",
      lessons: "What this rebuild clarified",
      outcome: "A deployable case study without medical claims",
    },
    disclaimerLabel: "Medical disclaimer",
    disclaimerVariant: "warning",
    disclaimer:
      "Atomics Lite is not a medical device. All names, identifiers, images, segmentation, predictions, and reports in the public demo are synthetic and must not be used for diagnosis, treatment, blood compatibility decisions, or any other clinical purpose.",
    seoDescription:
      "Atomics Lite is a portfolio-safe React, Vite, Vercel, and Supabase case study for a synthetic crossmatch record workflow demo.",
  },
  {
    slug: "its-expo-2024",
    title: "ITS Expo 2024 Frontend Demo",
    summary:
      "A public demo version of the ITS Expo 2024 frontend, preserving the event website experience, GIGS registration flow, admin review screens, and link shortener with a Vercel-hosted mock backend.",
    role: "Frontend Developer",
    year: "2024",
    status: "Live Frontend Demo",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Mock API"],
    cover: {
      src: "/projects/its-expo-2024/landing.webp",
      alt: "ITS Expo 2024 landing page with colorful paper-cut visual identity and event navigation.",
      width: 1440,
      height: 1000,
    },
    gallery: [
      {
        src: "/projects/its-expo-2024/gigs.webp",
        alt: "ITS Expo 2024 GIGS public event page with illustrated hero visuals.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/its-expo-2024/admin-gigs.webp",
        alt: "ITS Expo 2024 admin GIGS table populated with synthetic demo registrations.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/its-expo-2024/gigs-register.webp",
        alt: "ITS Expo 2024 GIGS registration form opened with a synthetic demo user session.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/its-expo-2024/link-shortener.webp",
        alt: "ITS Expo 2024 link shortener page running as a public demo with mock route handlers.",
        width: 1440,
        height: 1000,
      },
    ],
    liveUrl: "https://itsexpo-2024-fe-demo-phi.vercel.app/",
    githubUrl: "https://github.com/qiqioberon/itsexpo-2024-fe-demo",
    overview:
      "ITS Expo 2024 was a public event website with a strong visual identity and several functional frontend flows: landing content, event pages, GIGS registration, auth-protected admin screens, and a link shortener. This portfolio version keeps the frontend experience deployable for reviewers while replacing private backend dependencies with deterministic mock APIs.",
    problem:
      "The original frontend was built for a live event environment and depended on private backend services, event-specific infrastructure, and production data that should not be exposed in a public portfolio. Without a safe backend replacement, reviewers could see the static pages but could not explore the registration, admin, or short-link flows reliably.",
    solution:
      "The demo repo keeps the Next.js frontend intact and points API calls to same-origin `/api/mock` route handlers on Vercel. Authentication, GIGS submissions, admin table/detail data, and link shortener responses are all synthetic and deterministic, so the app can be deployed publicly without submitting real event data or depending on the original backend.",
    features: [
      "Responsive public landing page with ITS Expo 2024 visual direction and navigation.",
      "Public event pages for Convex, Gala Premiere, GIGS, Main Event, and What's On.",
      "GIGS registration flow that can be opened and submitted by a synthetic demo user.",
      "Admin GIGS dashboard table and detail page populated with deterministic synthetic registrations.",
      "Demo authentication where admin and user roles unlock the relevant protected frontend screens.",
      "Link shortener UI that creates a mock short link without persisting production data.",
      "Centralized Axios API client pointed to the same-origin mock backend by default.",
      "Portfolio-safe data model: no real accounts, submissions, or private event records are exposed.",
    ],
    architecture: {
      intro:
        "The demo is a Next.js App Router frontend deployed on Vercel. React pages use Axios and TanStack Query to call same-origin mock route handlers, while synthetic fixtures provide predictable data for auth, GIGS, and link-shortener flows.",
      clientLabel: "Frontend",
      serviceLabel: "Demo layer",
      privilegedLabel: "Hosting boundary",
      boundaryTitle: "Frontend-only public demo boundary",
      diagramDescription:
        "ITS Expo 2024 demo architecture: Next.js and React screens call Axios and React Query, which use Vercel-hosted mock API routes backed by synthetic in-code data.",
      client: {
        title: "Next.js + React UI",
        description:
          "Renders public event pages, auth screens, GIGS registration, admin review pages, and the link shortener experience.",
      },
      services: [
        {
          title: "Axios + React Query",
          description: "Centralizes client requests and table/detail loading while defaulting to `/api/mock`.",
        },
        {
          title: "Next API mock routes",
          description: "Handles demo login, current user, GIGS list/detail/submission, and short-link endpoints.",
        },
        {
          title: "Synthetic fixtures",
          description: "Returns deterministic users, roles, GIGS registrations, and short-link responses.",
        },
        {
          title: "Cookie + Zustand session",
          description: "Stores demo auth token and role state in the browser for protected frontend routes.",
        },
      ],
      privileged: {
        title: "Vercel deployment",
        description:
          "Hosts the frontend and mock route handlers together so reviewers can open the demo without a separate backend.",
      },
    },
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Vercel",
      "Next API Routes",
      "Synthetic mock data",
    ],
    challenges: [
      "Preserving the original event website look and navigation while removing private backend dependencies.",
      "Keeping auth-protected GIGS and admin flows reviewable without exposing real accounts or registrations.",
      "Matching the existing frontend API contract with mock route handlers so the UI code stayed close to the original app.",
      "Making the demo deployable on Vercel with no backend environment variables required.",
      "Fixing demo-specific flow issues such as registration guards, short-link state, and case-sensitive static assets.",
    ],
    outcome: [
      "The ITS Expo frontend can now be opened as a public live demo with no private backend setup.",
      "Reviewers can inspect the public pages, admin GIGS table/detail screens, registration flow, and link-shortener UI safely.",
      "The repo documents a practical way to convert an event frontend into a portfolio-safe demo by mocking backend behavior at the edge of the app.",
    ],
    lessons: [
      "A frontend portfolio demo should make private infrastructure boundaries explicit instead of pretending the original backend is still available.",
      "Mock APIs are most useful when they preserve the client contract and let the UI demonstrate real navigation and form behavior.",
      "Synthetic data should be obvious, deterministic, and scoped to the product story being reviewed.",
      "Visual event websites still benefit from engineering documentation that explains routes, state, auth, and data flow.",
    ],
    sectionTitles: {
      overview: "A public event frontend made reviewable",
      problem: "Private event infrastructure blocked a safe demo",
      solution: "Same-origin mock APIs on Vercel",
      features: "What the frontend demo covers",
      architecture: "Next.js frontend with Vercel-hosted mock routes",
      gallery: "Live demo screens",
      challenges: "What had to change for the demo repo",
      lessons: "What this migration clarified",
      outcome: "A deployable frontend case study with clear demo boundaries",
    },
    disclaimerLabel: "Demo data notice",
    disclaimerVariant: "info",
    disclaimer:
      "This portfolio demo uses synthetic mock data only. Login sessions, GIGS registrations, admin records, and short links are for demonstration purposes and do not create real ITS Expo accounts, event submissions, or production data.",
    seoDescription:
      "ITS Expo 2024 Frontend Demo is a Next.js, React, TypeScript, Tailwind CSS, and Vercel case study for a public event frontend with mocked backend flows.",
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
