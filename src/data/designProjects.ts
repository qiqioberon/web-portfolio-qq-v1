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
  | "portrait"
  | "landscape"
  | "mosaic";

export type DesignCoverLayout =
  | "square-triptych"
  | "landscape-grid"
  | "portrait-grid";

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
  platform: "instagram" | "pinterest" | "website";
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
  thumbnail(
    "business-02-graduate-money-knowledge.jpg",
    "YouTube thumbnail stating that 99% of graduates do not know this, featuring Robert Kiyosaki against a vivid pink and black backdrop.",
    1280,
  ),
  thumbnail(
    "business-03-passive-income.jpg",
    "YouTube thumbnail titled Make Money Passively, showing a person surrounded by floating dollar bills in a bright green composition.",
    1280,
  ),
  thumbnail(
    "business-04-ai-income.jpg",
    "YouTube thumbnail about earning one thousand dollars with AI, featuring a humanoid robot, money imagery, and neon green accents.",
    1280,
  ),
  thumbnail(
    "business-05-elon-twitter-worth.jpg",
    "YouTube thumbnail asking whether Twitter is worth it, featuring Elon Musk, the Twitter logo, and stacks of cash.",
    1280,
  ),
  thumbnail(
    "business-06-how-money-works.jpg",
    "YouTube thumbnail titled How Money Works, centered on a burning one-hundred-dollar bill with an energetic orange treatment.",
    1280,
  ),
  thumbnail(
    "business-07-shopify-dropshipping.jpg",
    "YouTube thumbnail about growing a Shopify dropshipping business from zero to one thousand dollars, featuring the Shopify logo and a shipping box.",
    1280,
  ),
  thumbnail(
    "business-08-what-is-dropshipping.jpg",
    "YouTube thumbnail titled What Is Dropship, featuring an open parcel, flying money, and a red financial backdrop.",
    1280,
  ),
  thumbnail(
    "business-09-money-tips-playstation.jpg",
    "YouTube thumbnail about money tips, contrasting the cost of a PlayStation 5 with a larger potential return.",
    1280,
  ),
  thumbnail(
    "business-10-social-media-addiction.jpg",
    "YouTube thumbnail titled Addicted, combining major social media icons with money imagery in a high-energy composition.",
    1280,
  ),
];

const productThumbnails = [
  thumbnail(
    "product-01-best-podcast-microphone.jpg",
    "YouTube product thumbnail titled Best Microphone for Podcast, featuring a Blue Yeti microphone in a studio setting.",
    1280,
  ),
  thumbnail(
    "product-02-blue-yeti-podcast.jpg",
    "YouTube product thumbnail positioning the Blue Yeti as the best microphone for podcasting.",
    1280,
  ),
  thumbnail(
    "product-03-blue-yeti-worth-buying.jpg",
    "YouTube product thumbnail asking whether the Blue Yeti microphone is worth buying.",
    1280,
  ),
];

const gamingThumbnails = [
  thumbnail(
    "gaming-01-modern-warfare-2.jpg",
    "YouTube gaming thumbnail for Call of Duty: Modern Warfare 2, featuring Ghost and two supporting characters amid sparks and smoke.",
    1280,
  ),
];

const educationThumbnails = [
  thumbnail(
    "education-01-rms-lusitania-vibration.jpg",
    "YouTube documentary thumbnail about RMS Lusitania and why the ship cannot stop vibrating, combining a ship illustration with an engineering graph.",
    1280,
  ),
  thumbnail(
    "education-02-fisika-djancok.jpg",
    "Goodstudent YouTube thumbnail titled Fisika Djancok, featuring a meme-style dog character, a durian, and physics formulas.",
    1280,
  ),
  thumbnail(
    "education-03-cape-student.jpg",
    "Goodstudent YouTube thumbnail titled Cape, showing an exhausted student asleep over schoolwork.",
    1280,
  ),
  thumbnail(
    "education-04-belajar-mode-racing.jpg",
    "Goodstudent YouTube thumbnail titled Belajar Mode Racing, using Cars characters to visualize common classroom struggles.",
    1280,
  ),
  thumbnail(
    "education-05-menggendong-beban.jpg",
    "Goodstudent YouTube thumbnail titled Menggendong Beban, showing a dumbbell labeled Temen Beban against a dramatic landscape.",
    1280,
  ),
  thumbnail(
    "education-06-punten-absen.jpg",
    "Goodstudent YouTube thumbnail titled Punten Absen, featuring a humorous teacher character in a classroom.",
    1280,
  ),
  thumbnail(
    "education-07-ngantuk-banyak-setan.jpg",
    "Goodstudent YouTube thumbnail titled Ngantuk: Kemasukan Banyak Setan, featuring a yawning monkey in a dark temple setting.",
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

const boostBasePath = "/design/boost-and-maximize";

const boostPortrait = (
  filename: string,
  alt: string,
  width = 1000,
  height = 1500,
): DesignImage => ({
  src: `${boostBasePath}/${filename}`,
  alt,
  width,
  height,
});

const boostModularTemplates = [
  boostPortrait(
    "modular-01-home-gains.jpg",
    "Boost and Maximize Pinterest design titled Home Is Where the Gains Are, featuring a woman exercising at home in a modular white-grid layout.",
  ),
  boostPortrait(
    "modular-02-active-healthy-home.jpg",
    "Boost and Maximize educational Pinterest design explaining how to stay active and healthy at home with two practical steps.",
  ),
  boostPortrait(
    "modular-03-transformation-start.jpg",
    "Boost and Maximize Pinterest design titled Your Transformation Starts Here, featuring an athlete in a framed editorial composition.",
  ),
  boostPortrait(
    "modular-04-body-recomposition.jpg",
    "Boost and Maximize educational Pinterest design presenting two steps for losing fat and improving body recomposition.",
  ),
  boostPortrait(
    "modular-05-fitness-journey.jpg",
    "Boost and Maximize Pinterest design titled How to Begin Your Fitness Journey, pairing a bold headline with an exercise photograph.",
  ),
  boostPortrait(
    "modular-06-beginner-workout.jpg",
    "Boost and Maximize educational Pinterest design outlining how to start working out as a beginner.",
  ),
  boostPortrait(
    "modular-07-lift-your-mood.jpg",
    "Boost and Maximize Pinterest design titled Move Your Body, Lift Your Mood, connecting fitness with mental well-being.",
  ),
  boostPortrait(
    "modular-08-emotional-balance.jpg",
    "Boost and Maximize educational Pinterest design presenting two ways to achieve emotional balance.",
  ),
];

const boostPerformanceWellness = [
  boostPortrait(
    "performance-01-family-fun-fitness.jpg",
    "Boost and Maximize Pinterest design titled Family Fun Fitness, featuring parents and children exercising together in a vivid dark composition.",
  ),
  boostPortrait(
    "performance-02-intermittent-fasting.jpg",
    "Boost and Maximize Pinterest design explaining one-week intermittent fasting results with a bold clock-based visual hook.",
  ),
  boostPortrait(
    "performance-03-no-gym-no-problem.jpg",
    "Boost and Maximize Pinterest design titled No Gym, No Problem, promoting an energetic home-workout routine.",
  ),
  boostPortrait(
    "performance-04-strengthen-core.jpg",
    "Boost and Maximize Pinterest design titled Strengthen Your Core, featuring an athlete and a high-contrast purple visual system.",
  ),
  boostPortrait(
    "performance-05-aromatherapy-focus.jpg",
    "Boost and Maximize Pinterest design titled Elevate Your Mind with Aromatherapy, featuring essential oils and flowers.",
  ),
  boostPortrait(
    "performance-06-find-balance.jpg",
    "Boost and Maximize Pinterest design titled Find Your Balance, focused on emotional well-being and personal balance.",
  ),
  boostPortrait(
    "performance-07-find-your-why.jpg",
    "Boost and Maximize Pinterest design asking Are You Really Need Motivation and encouraging viewers to find their why.",
  ),
  boostPortrait(
    "performance-08-virtual-recovery.jpg",
    "Boost and Maximize Pinterest design titled New Ways to Relax, featuring a virtual-reality headset in a dark neon composition.",
  ),
];

const boostNutritionRecovery = [
  boostPortrait(
    "nutrition-01-sleep-quality.jpg",
    "Boost and Maximize Pinterest design explaining how to improve sleep quality with a mustard and green editorial treatment.",
  ),
  boostPortrait(
    "nutrition-02-nutrient-density.jpg",
    "Boost and Maximize Pinterest design explaining how to maximize nutrient density in every meal.",
  ),
  boostPortrait(
    "nutrition-03-choose-food-wisely.jpg",
    "Boost and Maximize Pinterest design titled Choose Your Food Wisely, featuring nutrient-rich foods in a high-energy composition.",
  ),
  boostPortrait(
    "nutrition-04-milk-metabolism.jpg",
    "Boost and Maximize Pinterest design titled Milk and Metabolism: What's the Truth, using a bold mustard editorial system.",
  ),
  boostPortrait(
    "nutrition-05-plant-based-living.jpg",
    "Boost and Maximize Pinterest design titled Plant-Based Living, featuring a colorful whole-food bowl and checkerboard pattern.",
  ),
  boostPortrait(
    "nutrition-06-metabolism-hacks.jpg",
    "Boost and Maximize Pinterest design presenting metabolism hacks for faster fat burning with a food-focused visual hook.",
  ),
  boostPortrait(
    "nutrition-07-fiber-weight-loss.jpg",
    "Boost and Maximize Pinterest design positioning fiber-rich foods as a practical tool for weight management.",
  ),
];

const boostLifestyleTechnology = [
  boostPortrait(
    "lifestyle-01-find-peace-online.jpg",
    "Boost and Maximize Pinterest design titled Find Your Peace Online, featuring a virtual-reality meditation experience.",
    963,
    1449,
  ),
  boostPortrait(
    "lifestyle-02-fitness-supplements.jpg",
    "Boost and Maximize Pinterest design titled Boost Your Fitness with the Right Supplements, using a product-led editorial layout.",
  ),
  boostPortrait(
    "lifestyle-03-focus-through-scent.jpg",
    "Boost and Maximize Pinterest design titled Find Focus Through Scent, pairing aromatherapy guidance with a warm lifestyle palette.",
  ),
  boostPortrait(
    "lifestyle-04-yoga-gear.jpg",
    "Boost and Maximize Pinterest design titled Find Your Flow with the Perfect Yoga Gear, featuring a beach yoga photograph.",
  ),
  boostPortrait(
    "lifestyle-05-breast-cancer-awareness.jpg",
    "Boost and Maximize breast cancer awareness Pinterest campaign design titled Join the Fight Right Now.",
    963,
    1449,
  ),
  boostPortrait(
    "lifestyle-06-wearable-wellness.jpg",
    "Boost and Maximize Pinterest design titled Track Your Wellness with Wearable Tech, featuring a smartwatch in a red editorial frame.",
  ),
  boostPortrait(
    "lifestyle-07-digital-detox.jpg",
    "Boost and Maximize Pinterest design titled Clear Your Mind for Fresh Ideas, illustrating a digital-detox concept.",
  ),
];

export const designProjects: DesignProject[] = [
  {
    slug: "boost-and-maximize",
    title: "Boost and Maximize — Pinterest Content System",
    shortTitle: "Boost and Maximize",
    summary:
      "A native 2:3 Pinterest content system that turns fitness, nutrition, mindful wellness, and health-technology topics into bold, recognizable editorial stories.",
    role: "Graphic & Content Designer",
    year: "2024–2025",
    status: "Pinterest & Wellness Content Design",
    tags: ["Pinterest Design", "Social Media", "Content Design", "Editorial Layout"],
    coverLayout: "portrait-grid",
    coverImages: [
      boostModularTemplates[0],
      boostPerformanceWellness[1],
      boostLifestyleTechnology[5],
    ],
    seoImage: boostModularTemplates[0],
    overview:
      "Boost and Maximize is a wellness platform built around practical guidance for healthier routines and sustainable lifestyle changes. The Pinterest system translated long-form articles into native vertical graphics that could introduce a topic quickly, establish a recognizable visual promise, and guide readers toward the full story on the website.",
    challenge:
      "The content library spans workouts, weight management, nutrition, mental well-being, recovery, wearable technology, and broader health education. Each pin needed to feel specific to its subject while remaining identifiable as Boost and Maximize in a dense, visually competitive Pinterest feed.",
    approach:
      "I designed a flexible 2:3 system around bold editorial headlines, modular information blocks, topic-led color families, framed photography, and recurring brand signatures. Educational templates make practical steps easy to scan, while higher-energy campaign graphics and softer lifestyle layouts give each content pillar an appropriate emotional tone without losing brand continuity.",
    deliverables: [
      "Native 1000 × 1500 Pinterest graphics",
      "Modular educational and article-promotion templates",
      "Fitness, nutrition, wellness, and technology content pillars",
      "Headline, supporting copy, image, and website CTA hierarchy",
      "Thirty selected production-ready branded pins",
    ],
    tools: [
      "Content Design",
      "Copywriting",
      "Editorial Layout",
      "Photo Compositing",
      "Typography",
      "Pinterest Creative",
    ],
    visualDirection: [
      {
        label: "Format",
        value: "Native 2:3 storytelling",
        description:
          "Every composition uses Pinterest's vertical reading pattern to create a clear headline, image, supporting message, and destination flow.",
      },
      {
        label: "System",
        value: "Modular editorial templates",
        description:
          "Repeatable grids, cards, frames, and information blocks support high-volume production without making every post look identical.",
      },
      {
        label: "Color",
        value: "Topic-coded visual families",
        description:
          "Teal and coral support education, yellow and green signal nutrition, while dark neon and red systems increase energy for performance and technology.",
      },
      {
        label: "Handoff",
        value: "Pin-to-article continuity",
        description:
          "Prominent headlines and branded website calls to action turn each pin into a concise entry point for a longer editorial story.",
      },
    ],
    collections: [
      {
        id: "modular-education-templates",
        title: "Modular Education Templates",
        description:
          "A cohesive white-grid system alternates image-led hooks with structured two-step explainers for workouts, body recomposition, and emotional well-being.",
        layout: "portrait",
        images: boostModularTemplates,
      },
      {
        id: "high-energy-fitness-wellness",
        title: "High-Energy Fitness & Wellness",
        description:
          "Bold contrast, expressive display type, and energetic imagery create immediate hooks for performance, motivation, fasting, focus, and recovery topics.",
        layout: "portrait",
        images: boostPerformanceWellness,
      },
      {
        id: "nutrition-metabolism-recovery",
        title: "Nutrition, Metabolism & Recovery",
        description:
          "Mustard, green, and food-led compositions make practical nutrition and recovery concepts recognizable while preserving a clear editorial hierarchy.",
        layout: "portrait",
        images: boostNutritionRecovery,
      },
      {
        id: "lifestyle-health-technology",
        title: "Lifestyle & Health Technology",
        description:
          "Softer editorial layouts and campaign-focused treatments cover wearables, mindful technology, aromatherapy, fitness products, yoga, and health awareness.",
        layout: "portrait",
        images: boostLifestyleTechnology,
      },
    ],
    externalLinks: [
      {
        label: "View Pinterest",
        url: "https://id.pinterest.com/boostandmaximize/",
        platform: "pinterest",
      },
      {
        label: "Visit Website",
        url: "https://boostandmaximize.com/",
        platform: "website",
      },
    ],
    sectionCopy: {
      overviewTitle: "Turning wellness articles into visual entry points",
      challengeTitle: "One brand across a broad wellness library",
      approachTitle: "Flexible templates with topic-specific energy",
      deliverablesTitle: "A scalable Pinterest publishing system",
      toolsTitle: "Content and visual production disciplines",
      visualDirectionTitle: "Designed for vertical discovery and fast scanning",
      galleryTitle: "Pinterest content gallery",
      presentation: {
        eyebrow: "Curated Portfolio",
        title: "Thirty originals selected from a larger publishing system",
        description:
          "This case study focuses on thirty distinct branded designs selected from the account's broader Pinterest presence. Repeated saves and third-party pins are excluded so the gallery represents the original Boost and Maximize visual system clearly.",
      },
    },
    seoDescription:
      "Boost and Maximize Pinterest content design case study by Aqil, featuring vertical wellness graphics for fitness, nutrition, mindful living, and health technology.",
  },
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
        platform: "instagram",
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
      "A cross-niche thumbnail portfolio built for instant recognition, clear visual hierarchy, and strong curiosity across business, product, gaming, education, and faith-based content.",
    role: "YouTube Thumbnail Designer",
    year: "2021–2025",
    status: "Thumbnail Design Portfolio",
    tags: ["YouTube Thumbnails", "Photo Compositing", "Typography", "Adobe Photoshop"],
    coverLayout: "landscape-grid",
    coverImages: [
      availableBusinessThumbnails[2],
      productThumbnails[1],
      gamingThumbnails[0],
      educationThumbnails[0],
    ],
    seoImage: availableBusinessThumbnails[0],
    overview:
      "This collection brings together thumbnail systems created for multiple YouTube niches. Each design turns a video premise into a single, readable visual promise that can compete for attention at feed scale while preserving the tone of its subject.",
    challenge:
      "Business, technology, product reviews, gaming, education, campus humor, and faith-based content each rely on different audience expectations. The challenge was to keep every thumbnail immediately legible and emotionally specific without forcing unrelated topics into one repetitive visual formula.",
    approach:
      "I reduced each concept to one focal subject, one concise headline, and one dominant emotional contrast. Photo compositing, controlled color grading, bold typography, lighting, depth, and directional cues were then used to create hierarchy that remains readable on small screens.",
    deliverables: [
      "Business and technology thumbnail concepts",
      "Product review and creator-focused visual hooks",
      "Gaming and entertainment compositions",
      "Education, documentary, and campus-humor concepts",
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
        id: "product-creator-gear",
        title: "Product & Creator Gear",
        description:
          "A focused Blue Yeti series exploring product-review hooks, benefit-led headlines, and purchase-intent framing for podcast creators.",
        layout: "landscape",
        images: productThumbnails,
      },
      {
        id: "gaming-entertainment",
        title: "Gaming & Entertainment",
        description:
          "A cinematic gaming composition built around recognizable characters, dramatic lighting, sparks, and depth for immediate genre recognition.",
        layout: "landscape",
        images: gamingThumbnails,
      },
      {
        id: "education-campus",
        title: "Education & Campus",
        description:
          "Documentary storytelling and Indonesian student humor, ranging from an engineering-history explainer to meme-led Goodstudent concepts.",
        layout: "landscape",
        images: educationThumbnails,
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
      "YouTube thumbnail design portfolio by Aqil, featuring business, technology, product, gaming, education, campus humor, and ScriptureRevived visual concepts.",
  },
];

export const getDesignProjectBySlug = (slug?: string) =>
  designProjects.find((project) => project.slug === slug);
