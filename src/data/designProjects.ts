export interface DesignImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type DesignCollectionLayout =
  | "editorial"
  | "grid"
  | "feature"
  | "stories"
  | "landscape"
  | "mosaic";

export type DesignCoverLayout = "square-triptych" | "landscape-grid";

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

export interface DesignSectionCopy {
  overviewTitle: string;
  challengeTitle: string;
  approachTitle: string;
  deliverablesTitle: string;
  toolsTitle: string;
  visualDirectionTitle: string;
  galleryTitle: string;
  presentation?: {
    eyebrow: string;
    title: string;
    description: string;
  };
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
  coverLayout: DesignCoverLayout;
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
  sectionCopy: DesignSectionCopy;
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

const youtubeBasePath = "/design/youtube-thumbnails";

const thumbnail = (filename: string, alt: string, width = 1920): DesignImage => ({
  src: `${youtubeBasePath}/${filename}`,
  alt,
  width,
  height: width === 1280 ? 720 : 1080,
});

const availableBusinessThumbnails = [
  thumbnail(
    "business-01-how-to-rich.webp",
    "YouTube thumbnail titled How to Rich, featuring Elon Musk, Jack Ma, and Bill Gates against a blue financial backdrop.",
    1280,
  ),
];

const scriptureThumbnails = [
  thumbnail(
    "scripture-01-mind-renewal-formula.webp",
    "ScriptureRevived thumbnail titled The Mind Renewal Formula, showing a visual transition from distress to prayer.",
  ),
  thumbnail(
    "scripture-02-seven-habits.webp",
    "ScriptureRevived thumbnail titled 7 Habits That Rewire Your Brain, with a split dark-to-light transformation.",
  ),
  thumbnail(
    "scripture-03-setback-to-comeback.webp",
    "ScriptureRevived thumbnail titled 5 Secrets from Setback to Comeback, with before-and-after emotional contrast.",
  ),
  thumbnail(
    "scripture-04-morning-habits.webp",
    "ScriptureRevived thumbnail titled 3 Morning Habits That Changed Everything, contrasting stress and calm.",
  ),
  thumbnail(
    "scripture-05-break-obstacles.webp",
    "ScriptureRevived thumbnail titled 4 Steps to Break Any Obstacle, showing a journey from struggle to confidence.",
  ),
  thumbnail(
    "scripture-06-ancient-wisdom-productivity.webp",
    "ScriptureRevived thumbnail comparing a modern productivity method with Solomon's ancient wisdom system.",
  ),
  thumbnail(
    "scripture-07-five-biblical-practices.webp",
    "ScriptureRevived thumbnail titled 5 Biblical Practices That Changed Everything, centered on an open Bible.",
  ),
  thumbnail(
    "scripture-08-anxiety-to-peace.webp",
    "ScriptureRevived thumbnail presenting Jesus' three-step method for moving from anxiety to peace.",
  ),
  thumbnail(
    "scripture-09-burnout-cure.webp",
    "ScriptureRevived thumbnail titled God's 4-Step Cure for Burnout, contrasting exhaustion with renewal.",
  ),
  thumbnail(
    "scripture-10-pauls-joy-formula.webp",
    "ScriptureRevived thumbnail titled Paul's Joy Formula, presenting five keys for difficult situations.",
  ),
  thumbnail(
    "scripture-11-three-biblical-habits.webp",
    "ScriptureRevived thumbnail titled 3 Biblical Habits That Rewire Your Brain, using red and blue emotional contrast.",
  ),
  thumbnail(
    "scripture-12-heal-your-emotions.webp",
    "ScriptureRevived thumbnail titled 4 Ancient Practices Heal Your Emotions, with an illuminated Bible at the center.",
  ),
  thumbnail(
    "scripture-13-seven-day-mind-reset.webp",
    "ScriptureRevived thumbnail titled 7-Day Mind Reset, contrasting mental distress and spiritual peace.",
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
    coverLayout: "square-triptych",
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
        layout: "mosaic",
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
    sectionCopy: {
      overviewTitle: "A social system for local film stories",
      challengeTitle: "One brand, two audiences",
      approachTitle: "Modular visual storytelling",
      deliverablesTitle: "Campaign content across the full funnel",
      toolsTitle: "From visual direction to final export",
      visualDirectionTitle: "A recognizable language for every content type",
      galleryTitle: "Campaign gallery",
      presentation: {
        eyebrow: "Original Presentation",
        title: "Restoring the intended square-feed compositions",
        description:
          "The original work was designed around 1:1 posts and three-column profile mosaics. This case study reconstructs those sequences directly from the source exports, preserving the intended order and composition without profile-grid cropping or reflow.",
      },
    },
    seoDescription:
      "Filin Movie social media and campaign design case study by Aqil, featuring an Instagram feed system, creator education, contest communication, and vertical story design.",
  },
  {
    slug: "youtube-thumbnail-design",
    title: "YouTube Thumbnail Design",
    shortTitle: "YouTube Thumbnails",
    summary:
      "A cross-niche thumbnail portfolio built for instant recognition, clear visual hierarchy, and strong curiosity across business, entertainment, product, and faith-based content.",
    role: "YouTube Thumbnail Designer",
    year: "2021–2025",
    status: "Thumbnail Design Portfolio",
    tags: ["YouTube Thumbnails", "Photo Compositing", "Typography", "Adobe Photoshop"],
    coverLayout: "landscape-grid",
    coverImages: [
      availableBusinessThumbnails[0],
      scriptureThumbnails[4],
      scriptureThumbnails[8],
      scriptureThumbnails[10],
    ],
    seoImage: availableBusinessThumbnails[0],
    overview:
      "This collection brings together thumbnail systems created for multiple YouTube niches. Each design turns a video premise into a single, readable visual promise that can compete for attention at feed scale while preserving the tone of its subject.",
    challenge:
      "Business, technology, product reviews, gaming, anime, and faith-based content each rely on different audience expectations. The challenge was to keep every thumbnail immediately legible and emotionally specific without forcing unrelated topics into one repetitive visual formula.",
    approach:
      "I reduced each concept to one focal subject, one concise headline, and one dominant emotional contrast. Photo compositing, controlled color grading, bold typography, lighting, depth, and directional cues were then used to create hierarchy that remains readable on small screens.",
    deliverables: [
      "Business and technology thumbnail concepts",
      "Product review and creator-focused visual hooks",
      "Gaming and anime entertainment compositions",
      "A 13-thumbnail visual system for ScriptureRevived",
    ],
    tools: [
      "Adobe Photoshop",
      "Photo Compositing",
      "Typography",
      "Color Grading",
      "Image Retouching",
      "Visual Storytelling",
    ],
    visualDirection: [
      {
        label: "Hierarchy",
        value: "One immediate promise",
        description:
          "A dominant subject and short headline communicate the video's value before supporting details enter the composition.",
      },
      {
        label: "Color",
        value: "High-contrast palettes",
        description:
          "Focused color families separate subjects from the background and establish the intended emotion at a glance.",
      },
      {
        label: "Typography",
        value: "Feed-scale readability",
        description:
          "Bold display type, compact wording, outlines, and shadows preserve legibility when thumbnails appear at small sizes.",
      },
      {
        label: "Composition",
        value: "Faces, symbols, and tension",
        description:
          "Expressions, recognizable objects, split scenes, and directional cues create curiosity without obscuring the core idea.",
      },
    ],
    collections: [
      {
        id: "business-technology",
        title: "Business & Technology",
        description:
          "High-energy concepts that frame wealth, technology, entrepreneurship, and creator-economy topics as immediate visual questions.",
        layout: "landscape",
        images: availableBusinessThumbnails,
      },
      {
        id: "scripture-revived",
        title: "ScriptureRevived",
        description:
          "A consistent faith-based series using before-and-after emotion, bold numerical hooks, biblical imagery, and a recognizable channel signature.",
        layout: "landscape",
        images: scriptureThumbnails,
      },
    ],
    externalLinks: [],
    sectionCopy: {
      overviewTitle: "Designing for the split-second decision",
      challengeTitle: "Clarity across very different niches",
      approachTitle: "One focal point, one promise, one emotional hook",
      deliverablesTitle: "Production-ready 16:9 thumbnails",
      toolsTitle: "From image sourcing to final export",
      visualDirectionTitle: "High-contrast systems built for small screens",
      galleryTitle: "Thumbnail gallery",
      presentation: {
        eyebrow: "Presentation Strategy",
        title: "Designed and reviewed at feed scale",
        description:
          "Every composition is presented in its native 16:9 ratio and evaluated at reduced sizes, where headline length, subject separation, contrast, and visual tension have the greatest impact.",
      },
    },
    seoDescription:
      "YouTube thumbnail design portfolio by Aqil, featuring business, technology, entertainment, product, and ScriptureRevived visual concepts.",
  },
];

export const getDesignProjectBySlug = (slug?: string) =>
  designProjects.find((project) => project.slug === slug);
