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
  githubUrl?: string;
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
  {
    slug: "ling-chinese-lab",
    title: "Ling Chinese Lab",
    summary:
      "A production profile and landing site for a Mandarin learning service, designed to present programs, mentor credibility, testimonials, and consultation paths through a warm responsive frontend.",
    role: "Web Designer + Frontend",
    year: "2026",
    status: "Live Production Site",
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    cover: {
      src: "/projects/ling-chinese-lab/home.webp",
      alt: "Ling Chinese Lab homepage with panda brand illustration, Mandarin learning headline, and WhatsApp consultation CTA.",
      width: 1440,
      height: 1000,
    },
    gallery: [
      {
        src: "/projects/ling-chinese-lab/programs.webp",
        alt: "Ling Chinese Lab program section comparing simplified and traditional Mandarin tracks with Basic, Medium, and Advance cards.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/ling-chinese-lab/teachers.webp",
        alt: "Ling Chinese Lab teacher preview section showing Laoshi profile cards and certification highlights.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/ling-chinese-lab/about.webp",
        alt: "Ling Chinese Lab about page explaining the learning approach and reasons to study Mandarin.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/projects/ling-chinese-lab/testimonials.webp",
        alt: "Ling Chinese Lab testimonial carousel and footer with WhatsApp, Instagram, and TikTok contact paths.",
        width: 1440,
        height: 1000,
      },
    ],
    liveUrl: "https://www.lingchineselab.com/",
    overview:
      "Ling Chinese Lab is a production profile website for a Mandarin learning service. The site introduces the brand, explains program levels, presents mentor credibility, shares public testimonials, and routes interested visitors toward WhatsApp and social channels for consultation.",
    problem:
      "The business needed a credible public web presence that could communicate its learning offer clearly without requiring a complex backend. The main challenge was combining a friendly education brand, mentor proof points, program details, testimonials, and conversion-focused contact paths into a responsive site that stays easy to maintain.",
    solution:
      "The site was built as a Vite and React single-page app with React Router pages, reusable landing sections, Tailwind CSS styling, shadcn/ui primitives, structured in-code content modules, and static media assets. Vercel hosts the production build on a custom domain, while WhatsApp, Instagram, and TikTok remain the external channels for consultation and follow-up.",
    features: [
      "Warm landing page with panda brand assets, bilingual visual cues, and clear consultation CTA.",
      "Responsive layout for desktop and mobile visitors.",
      "Program section covering Basic, Medium, and Advance learning paths.",
      "Simplified and Traditional Mandarin comparison cards for visitor orientation.",
      "Teacher preview and about-page mentor profiles with school and certification context.",
      "Public testimonial carousel grouped by general, teacher-focused, and Taiwan-specialist feedback.",
      "WhatsApp-first conversion flow for price, schedule, and program questions.",
      "Instagram and TikTok links for social proof and ongoing content discovery.",
      "Static content modules that keep program, teacher, testimonial, and statistic data maintainable without a backend.",
    ],
    architecture: {
      intro:
        "The production site is a static Vite build served by Vercel. React components and React Router handle the public pages, local TypeScript data modules provide structured content, static assets render the brand/media layer, and external social links handle consultation and community traffic.",
      clientLabel: "Frontend",
      serviceLabel: "Content & channels",
      privilegedLabel: "Hosting boundary",
      boundaryTitle: "Static production boundary",
      diagramDescription:
        "Ling Chinese Lab architecture: a Vite and React frontend uses local content modules and static assets, links out to WhatsApp and social channels, and is hosted on Vercel.",
      client: {
        title: "Vite + React SPA",
        description:
          "Renders the homepage, about page, responsive sections, program cards, teacher previews, testimonials, and CTA interactions.",
      },
      services: [
        {
          title: "React Router pages",
          description: "Separates the landing page, about page, and fallback route inside the client app.",
        },
        {
          title: "Local content modules",
          description: "Stores programs, teachers, statistics, and testimonials as maintainable TypeScript data.",
        },
        {
          title: "Static media assets",
          description: "Serves panda illustrations, logos, school marks, teacher images, social icons, and short video assets.",
        },
        {
          title: "WhatsApp + social links",
          description: "Routes visitors to consultation and discovery channels without collecting form submissions in the site.",
        },
      ],
      privileged: {
        title: "Vercel custom-domain hosting",
        description:
          "Serves the static build and production domain without requiring a separate application backend.",
      },
    },
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI primitives",
      "Lucide React",
      "Vercel",
      "Static content modules",
      "Static media assets",
    ],
    challenges: [
      "Balancing a playful education brand with a credible service profile that parents, students, and adult learners can understand quickly.",
      "Keeping the landing page conversion-focused while still giving enough context about programs, mentors, and learning paths.",
      "Managing many visual assets, certificates, teacher profiles, and social media elements without introducing backend complexity.",
      "Making public sections responsive across mobile and desktop while preserving the soft visual identity of the brand.",
      "Designing the site around external consultation channels instead of a custom form system, reducing operational overhead for the business.",
    ],
    outcome: [
      "Ling Chinese Lab now has a live production website on its own domain for visitors to learn about the service and contact the team.",
      "The site communicates the learning programs, mentor credibility, and consultation paths through a maintainable frontend codebase.",
      "The implementation demonstrates how a service business can use a focused static frontend before investing in a more complex backend or CMS.",
    ],
    lessons: [
      "For a service landing site, clarity of offer and contact path matters more than adding backend complexity early.",
      "Structured local content can be enough for a production site when the update workflow is controlled and the content model is simple.",
      "Brand-heavy pages need responsive testing around real assets, not placeholder blocks, because logos, illustrations, and cards define the layout.",
      "External social and chat channels should be treated as part of the architecture when they own the real conversion flow.",
    ],
    sectionTitles: {
      overview: "A production landing site for Mandarin learning",
      problem: "Credibility and conversion without backend overhead",
      solution: "A static React site with structured content and social CTAs",
      features: "What the production site covers",
      architecture: "Vite/React frontend, local content, and Vercel hosting",
      gallery: "Live production screens",
      challenges: "What shaped the frontend implementation",
      lessons: "What this build clarified",
      outcome: "A focused production site for a service business",
    },
    disclaimerLabel: "Production site note",
    disclaimerVariant: "info",
    disclaimer:
      "This case study describes the public frontend and conversion flow only. Consultation, scheduling, pricing, and follow-up happen through Ling Chinese Lab's external communication channels, not through a custom backend in this portfolio case study.",
    seoDescription:
      "Ling Chinese Lab is a Vite, React, TypeScript, Tailwind CSS, shadcn/ui, and Vercel case study for a production Mandarin learning service website.",
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
