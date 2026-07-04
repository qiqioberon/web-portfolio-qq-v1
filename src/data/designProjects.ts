export interface DesignImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type DesignCollectionLayout = "editorial" | "grid" | "feature" | "stories";

export interface DesignCollection {
  id: string;
  title: string;
  description: string;
  layout: DesignCollectionLayout;
  images: DesignImage[];
}

export interface DesignDirection {
  label: string;
  value: string;
  description: string;
}

export interface DesignExternalLink {
  label: string;
  url: string;
}

export interface DesignProject {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  role: string;
  year: string;
  status: string;
  tags: string[];
  coverImages: DesignImage[];
  seoImage: DesignImage;
  overview: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  tools: string[];
  visualDirection: DesignDirection[];
  collections: DesignCollection[];
  externalLinks: DesignExternalLink[];
  seoDescription: string;
}

const basePath = "/design/filin-movie";

const square = (filename: string, alt: string): DesignImage => ({
  src: `${basePath}/${filename}`,
  alt,
  width: filename === "contest-main-poster.webp" ? 1400 : 1080,
  height: filename === "contest-main-poster.webp" ? 1400 : 1080,
});

const story = (filename: string, alt: string): DesignImage => ({
  src: `${basePath}/${filename}`,
  alt,
  width: 900,
  height: 1600,
});

const feedOverview: DesignImage = {
  src: `${basePath}/feed-system-overview.webp`,
  alt: "Complete Filin Movie launch feed showing an 18-tile Instagram grid with creator education, platform introductions, and campaign announcements.",
  width: 1800,
  height: 3600,
};

const contestOverview: DesignImage = {
  src: `${basePath}/contest-campaign-overview.webp`,
  alt: "Full Filin Movie contest campaign composition combining the prize announcement and a step-by-step video upload tutorial.",
  width: 1800,
  height: 3000,
};

const brandIntroduction = [
  square(
    "brand-introduction-01.webp",
    "Opening carousel slide asking what Filin Movie is, illustrated with a film reel and vintage movie camera.",
  ),
  square(
    "brand-introduction-02.webp",
    "Filin Movie introduction explaining its goal of connecting filmmakers and film audiences in Indonesia.",
  ),
];

const ottComparison = [
  square(
    "filin-vs-ott-01.webp",
    "Opening comparison slide positioning Filin Movie alongside other over-the-top streaming platforms.",
  ),
  square(
    "filin-vs-ott-02.webp",
    "Comparison slide highlighting the creator-focused content upload model used by Filin Movie.",
  ),
  square(
    "filin-vs-ott-03.webp",
    "Comparison conclusion describing how Filin Movie supports local film creators and audiences.",
  ),
];

const eligibleContent = [
  square(
    "eligible-content-01.webp",
    "Opening educational slide asking what kinds of content can be uploaded to Filin Movie.",
  ),
  square(
    "eligible-content-02.webp",
    "Educational carousel slide explaining accepted movie and series content categories.",
  ),
  square(
    "eligible-content-03.webp",
    "Educational carousel conclusion reinforcing creator ownership and upload requirements.",
  ),
];

const creatorAccess = [
  square(
    "creator-access-01.webp",
    "Opening carousel slide asking who can submit films to Filin Movie.",
  ),
  square(
    "creator-access-02.webp",
    "Creator access slide explaining who can publish film content on the platform.",
  ),
];

const creatorMonetization = [
  square(
    "creator-monetization-01.webp",
    "Opening creator monetization slide asking whether uploaded content can earn revenue.",
  ),
  square(
    "creator-monetization-02.webp",
    "Monetization carousel slide introducing creator earnings within Filin Movie.",
  ),
  square(
    "creator-monetization-03.webp",
    "Monetization carousel slide explaining the platform payment concept for creators.",
  ),
  square(
    "creator-monetization-04.webp",
    "Monetization carousel slide visualizing the relationship between uploaded films and audience support.",
  ),
  square(
    "creator-monetization-05.webp",
    "Final creator monetization slide with a call to publish film content on Filin Movie.",
  ),
];

const winnerAnnouncement = Array.from({ length: 6 }, (_, index) =>
  square(
    `winner-announcement-${String(index + 1).padStart(2, "0")}.webp`,
    `Tile ${index + 1} of the Filin Movie contest winner announcement mosaic.`,
  ),
);

const stories = [
  story(
    "winner-story.webp",
    "Instagram Story announcing the conclusion and winner communication for the Filin Movie contest.",
  ),
  story(
    "story-brand-introduction.webp",
    "Instagram Story introducing Filin Movie as a video-on-demand platform for Indonesian film creators and audiences.",
  ),
  story(
    "story-filin-vs-ott.webp",
    "Instagram Story comparing Filin Movie with other streaming platforms.",
  ),
  story(
    "story-eligible-content.webp",
    "Instagram Story explaining which film content can be uploaded to Filin Movie.",
  ),
  story(
    "story-creator-access.webp",
    "Instagram Story explaining who is eligible to submit film content.",
  ),
  story(
    "story-highlight-template.webp",
    "Pink and purple Instagram Story highlight template with a retro television frame for featured video content.",
  ),
];

export const designProjects: DesignProject[] = [
  {
    slug: "filin-movie",
    title: "Filin Movie — Social Media Design",
    shortTitle: "Filin Movie",
    summary:
      "A modular social content system for an Indonesian video-on-demand startup, spanning brand education, creator onboarding, campaign promotion, contest communication, and Instagram Stories.",
    role: "Graphic & Social Media Designer",
    year: "2023",
    status: "Social Media & Campaign Design",
    tags: ["Social Media", "Campaign Design", "Content System", "Adobe Photoshop"],
    coverImages: [
      square(
        "brand-introduction-01.webp",
        "Filin Movie brand introduction artwork with a film reel and movie camera.",
      ),
      square(
        "creator-monetization-01.webp",
        "Filin Movie creator monetization artwork with illustrated money and coins.",
      ),
      square(
        "contest-main-poster.webp",
        "Filin Movie contest poster announcing a total prize of thirty million rupiah.",
      ),
    ],
    seoImage: square(
      "contest-main-poster.webp",
      "Filin Movie contest poster announcing a total prize of thirty million rupiah.",
    ),
    overview:
      "Filin Movie was an Indonesian video-on-demand startup focused on creating a bridge between local filmmakers and film audiences. The social media work translated a broad product story—watching, publishing, creator ownership, monetization, and campaigns—into a visual language that could be understood one post at a time while still forming a recognizable feed.",
    challenge:
      "The communication needed to serve two audiences at once: viewers looking for Indonesian film content and creators learning how to publish and earn from their work. Each topic required a clear standalone message, but the combined feed also needed to feel like one brand rather than unrelated promotional posts.",
    approach:
      "I built a repeatable visual system around a midnight-navy base, magenta callout panels, bold uppercase headlines, cinematic illustrations, and a recurring mascot. Square carousel slides handled educational narratives, larger mosaics created campaign moments across the profile grid, and vertical adaptations carried the same hierarchy into Instagram Stories.",
    deliverables: [
      "Launch feed and three-column profile compositions",
      "Brand introduction and platform comparison carousels",
      "Creator onboarding and monetization education",
      "Contest launch, tutorial, extension, and winner communication",
      "Vertical Instagram Story adaptations and highlight templates",
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Social Media Design",
      "Campaign Design",
      "Editorial Layout",
      "Visual Storytelling",
    ],
    visualDirection: [
      {
        label: "Palette",
        value: "Midnight navy + magenta",
        description:
          "A dark cinema-inspired foundation keeps the feed cohesive while bright magenta panels create immediate hierarchy and calls to action.",
      },
      {
        label: "Typography",
        value: "Bold uppercase display",
        description:
          "Large headlines and compact supporting copy make educational topics scannable in a fast-moving social feed.",
      },
      {
        label: "Imagery",
        value: "Cinema symbols + mascot",
        description:
          "Film reels, cameras, tickets, popcorn, and the Filin mascot turn product concepts into approachable visual cues.",
      },
      {
        label: "Formats",
        value: "1:1 tiles + 9:16 stories",
        description:
          "Modular layouts preserve the same brand voice across feed mosaics, educational carousels, announcements, and vertical stories.",
      },
    ],
    collections: [
      {
        id: "brand-feed-system",
        title: "Brand and Feed System",
        description:
          "The launch grid establishes the complete visual rhythm, followed by full brand-introduction and platform-comparison carousel sequences.",
        layout: "editorial",
        images: [feedOverview, ...brandIntroduction, ...ottComparison],
      },
      {
        id: "creator-education",
        title: "Creator Education",
        description:
          "Three complete carousel series explain eligible content, creator access, and the platform's monetization proposition without losing the shared visual grammar.",
        layout: "grid",
        images: [...eligibleContent, ...creatorAccess, ...creatorMonetization],
      },
      {
        id: "contest-campaign",
        title: "Contest Campaign",
        description:
          "A high-energy campaign system combines the primary prize announcement with a full profile composition and a visual upload tutorial.",
        layout: "feature",
        images: [
          contestOverview,
          square(
            "contest-main-poster.webp",
            "Filin Movie contest poster announcing a total prize of thirty million rupiah for creators and viewers.",
          ),
        ],
      },
      {
        id: "winner-announcement",
        title: "Winner Announcement",
        description:
          "Six square tiles reconstruct the intended three-column announcement mosaic independently from later changes to Instagram's profile-grid presentation.",
        layout: "grid",
        images: winnerAnnouncement,
      },
      {
        id: "instagram-stories",
        title: "Instagram Stories",
        description:
          "Vertical adaptations carry brand education, creator guidance, contest communication, and video highlights into a native 9:16 format.",
        layout: "stories",
        images: stories,
      },
    ],
    externalLinks: [
      {
        label: "View Instagram",
        url: "https://www.instagram.com/filinmovie/",
      },
    ],
    seoDescription:
      "Filin Movie social media and campaign design case study by Aqil, featuring an Instagram feed system, creator education, contest communication, and vertical story design.",
  },
];

export const getDesignProjectBySlug = (slug?: string) =>
  designProjects.find((project) => project.slug === slug);
