export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
  features?: string[];
}

export interface ArchitectureNode {
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  title?: string;
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

export interface TechnologyGroup {
  title: string;
  description?: string;
  items: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ProjectExternalLink {
  label: string;
  url: string;
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
  externalLinks?: ProjectExternalLink[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: ProjectArchitecture;
  additionalArchitectures?: ProjectArchitecture[];
  stack: string[];
  technologyGroups?: TechnologyGroup[];
  metricsTitle?: string;
  metrics?: ProjectMetric[];
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
    slug: "big-five-voice-ai",
    title: "Big Five Voice AI",
    summary:
      "An end-to-end machine-learning research project and live web demo for estimating apparent Big Five personality traits from 15 seconds of speech, covering leakage-aware dataset design, pretrained speech representations, parameter-efficient fine-tuning, model packaging, and production inference on Vercel and Hugging Face.",
    role: "Machine Learning Researcher & Full-stack Developer",
    year: "2026",
    status: "Live Research Demo",
    tags: ["PyTorch", "WavLM", "HuBERT", "wav2vec 2.0", "LoRA", "Hugging Face", "Next.js", "Vercel"],
    cover: {
      src: "/projects/big-five-voice-ai/landing.webp",
      alt: "Big Five Voice AI landing page inviting users to discover apparent personality traits from a voice recording.",
      width: 1440,
      height: 1000,
    },
    gallery: [
      {
        src: "/projects/big-five-voice-ai/landing.webp",
        alt: "Dark themed TA Personality landing page with a voice analysis headline, demo actions, privacy note, and three-step workflow.",
        width: 1440,
        height: 1000,
        title: "Research translated into a public demo",
        description:
          "The production landing page turns a multi-stage speech research pipeline into a clear product proposition: provide 15 seconds of audio, choose a model, and inspect five continuous OCEAN trait estimates.",
        features: [
          "English and Indonesian localization with light and dark themes.",
          "Explicit experimental-use, audio-duration, privacy, and decision-safety messaging.",
          "Direct navigation from research context to the interactive prediction workspace.",
        ],
      },
      {
        src: "/projects/big-five-voice-ai/models-section.webp",
        alt: "Model overview comparing fine-tuned HuBERT and WavLM checkpoints with eGeMAPS and frozen SSL Ridge baselines.",
        width: 1440,
        height: 1000,
        title: "Model families exposed transparently",
        description:
          "The interface does not hide the experimental alternatives behind a single opaque score. It explains the fine-tuned checkpoints and lets reviewers compare them with the complete Ridge baseline family.",
        features: [
          "Fine-tuned HuBERT and WavLM checkpoints adapted with LoRA.",
          "Baseline options based on eGeMAPS, wav2vec 2.0, HuBERT, and WavLM representations.",
          "Plain-language explanation of all five Big Five dimensions.",
        ],
      },
      {
        src: "/projects/big-five-voice-ai/demo.webp",
        alt: "Voice Personality Analysis demo with audio upload and recording, model selectors, result panel, Big Five explanation, and disclaimers.",
        width: 1440,
        height: 1000,
        title: "Interactive inference workspace",
        description:
          "The demo accepts an uploaded clip or an in-browser microphone recording, enforces the 15-second input contract, discovers the available models from the inference service, and renders the resulting trait profile.",
        features: [
          "Drag-and-drop upload, microphone capture, playback, validation, and client-side trimming.",
          "Dynamic fine-tuned and baseline model manifests served through same-origin Next.js APIs.",
          "Trait visualization, latency feedback, local result recovery, and shareable result links.",
        ],
      },
      {
        src: "/projects/big-five-voice-ai/research-flow.png",
        alt: "Research workflow from the dataset and audio extraction through preprocessing, strict split, representation scenarios, and final evaluation.",
        width: 2688,
        height: 1536,
        title: "End-to-end research workflow",
        description:
          "The study begins with videos from ChaLearn First Impressions V2, extracts and standardizes their audio, builds both official and speaker-independent evaluation paths, then compares representations before adapting the selected backbone.",
        features: [
          "Traceable transition from raw video to model-ready audio manifests.",
          "Official split retained for comparability; strict split used for realistic speaker generalization.",
          "A locked test set is kept outside feature and hyperparameter selection.",
        ],
      },
      {
        src: "/projects/big-five-voice-ai/preprocessing.png",
        alt: "Audio preprocessing workflow covering extraction, mono conversion, 16 kHz resampling, fixed duration, voice activity detection, and quality-control manifests.",
        width: 2432,
        height: 2240,
        title: "Audio standardization and quality control",
        description:
          "Every clip is normalized to the same signal contract before representation learning. Silero VAD identifies clips dominated by silence or noise, followed by targeted re-extraction and tuned re-checks for recoverable samples.",
        features: [
          "Mono, 16 kHz PCM audio trimmed or zero-padded to 15 seconds.",
          "Speech coverage threshold with a tuned VAD pass for quiet or difficult clips.",
          "9,974 clean clips retained from 10,000 after 16 recoveries and 26 final removals.",
        ],
      },
      {
        src: "/projects/big-five-voice-ai/strict-split.png",
        alt: "Strict speaker-independent split procedure grouping related clips and stratifying groups before train, validation, and test assignment.",
        width: 2432,
        height: 1856,
        title: "Leakage-aware strict split",
        description:
          "YouTube-derived clips can share the same source speaker across samples. The strict protocol groups clips by channel-derived identity and assigns each group to exactly one subset, preventing identity leakage between training and evaluation.",
        features: [
          "3,054 clean groups split at approximately 60/20/20.",
          "Gender and ethnicity stratification selected for stable demographic balance.",
          "5,936 training, 1,999 validation, and 2,039 test clips with zero group overlap.",
        ],
      },
      {
        src: "/projects/big-five-voice-ai/model-scenarios.png",
        alt: "Representation comparison showing eGeMAPS handcrafted features and embeddings from wav2vec 2.0, HuBERT, and WavLM feeding standardized Ridge regression.",
        width: 2176,
        height: 3168,
        title: "Controlled representation benchmark",
        description:
          "The baseline study isolates representation quality by keeping the downstream estimator consistent. Handcrafted acoustic descriptors and frozen self-supervised speech embeddings are standardized and evaluated with the same multi-output Ridge protocol.",
        features: [
          "88-dimensional eGeMAPS functionals extracted with OpenSMILE.",
          "768-dimensional mean-pooled embeddings from wav2vec 2.0, HuBERT, and WavLM.",
          "Validation-only alpha sweep followed by one locked test evaluation using MAE, RMSE, R², and 1−MAE.",
        ],
      },
      {
        src: "/projects/big-five-voice-ai/lora-fine-tuning.png",
        alt: "WavLM fine-tuning workflow with a frozen backbone, LoRA adapters, Big Five regression head, hyperparameter search, fixed-seed runs, and exported checkpoints.",
        width: 3104,
        height: 2400,
        title: "Parameter-efficient WavLM adaptation",
        description:
          "WavLM was selected from the strict baseline study and adapted without updating the full backbone. LoRA modules and a five-output regression head reduce the trainable parameter budget while preserving a repeatable evaluation process.",
        features: [
          "LoRA adapters target the attention q_proj and v_proj modules.",
          "Two-stage search over learning rate and rank, followed by fixed-seed final runs.",
          "Best thesis configuration: learning rate 2×10⁻⁴, rank 4, and up to 20 epochs.",
        ],
      },
    ],
    liveUrl: "https://deploy-tugas-akhir.vercel.app/",
    githubUrl: "https://github.com/qiqioberon/tugas-akhir-qq",
    externalLinks: [
      {
        label: "HF Space",
        url: "https://huggingface.co/spaces/QiqiOberon/personality-with-audio-demo",
      },
      {
        label: "Model Hub",
        url: "https://huggingface.co/QiqiOberon/ta-personality-models",
      },
    ],
    overview:
      "Big Five Voice AI is the production-facing result of my undergraduate thesis on audio-only apparent personality estimation. The work spans dataset auditing, signal preprocessing, leakage-aware evaluation, handcrafted acoustic features, frozen self-supervised speech representations, Ridge regression, LoRA adaptation, experiment tracking, model packaging, and a bilingual web application. The system estimates continuous Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism scores from a short speech sample; it measures perceived personality cues in the recording rather than a speaker's clinical or self-reported identity.",
    problem:
      "Voice carries prosodic and paralinguistic cues, but evaluating personality estimation from speech is difficult because recording conditions vary, labels are subjective observer impressions, and multiple clips from the same online source can leak speaker identity across splits. A convincing result therefore needed more than a high headline score: the data contract, group separation, model-selection boundary, reproducibility, and production preprocessing all had to remain explicit and consistent.",
    solution:
      "I built a traceable audio-only pipeline around ChaLearn First Impressions V2. It standardizes and quality-checks 10,000 short clips, forms a speaker-disjoint strict split, benchmarks eGeMAPS against frozen wav2vec 2.0, HuBERT, and WavLM embeddings with the same Ridge regressor, then adapts the selected WavLM backbone with LoRA. The deployable artifacts are hosted on Hugging Face; a Gradio Space performs preprocessing and inference, while a Next.js application on Vercel provides a safer, localized product interface and same-origin API boundary.",
    features: [
      "Audio-only multivariate regression for the five continuous Big Five apparent-personality traits.",
      "Reproducible 15-second, mono, 16 kHz audio preprocessing with traceable manifests.",
      "Silero VAD quality control, targeted channel-aware re-extraction, and final sample auditing.",
      "Speaker-independent group split with demographic stratification and formal overlap checks.",
      "Controlled eGeMAPS, wav2vec 2.0, HuBERT, and WavLM representation benchmark.",
      "Validation-only Ridge alpha sweep with StandardScaler and multi-output regression artifacts.",
      "MAE, RMSE, R², 1−MAE, per-trait, distribution, and naive-baseline diagnostics.",
      "Parameter-efficient WavLM adaptation with LoRA on q_proj/v_proj and a five-output head.",
      "Hyperparameter tuning plus fixed-seed final runs, checkpoint selection, and exported metrics.",
      "Hugging Face model repository containing scalers, Ridge models, metadata, and LoRA checkpoints.",
      "Gradio inference service that discovers available artifacts and caches downloaded model components.",
      "Next.js demo with recording/upload, model selection, visual results, localization, and safety disclaimers.",
    ],
    metricsTitle: "Research outcomes reported in the final thesis",
    metrics: [
      {
        label: "Clean dataset",
        value: "9,974",
        description: "Usable clips retained from 10,000 after VAD quality control and targeted re-extraction.",
      },
      {
        label: "Speaker overlap",
        value: "0",
        description: "Shared group IDs across train, validation, and test in the strict speaker-independent split.",
      },
      {
        label: "Best strict MAE",
        value: "0.1013",
        description: "Mean five-trait test MAE reported for the selected frozen WavLM plus Ridge baseline.",
      },
      {
        label: "Best strict R²",
        value: "0.2877",
        description: "Mean five-trait test R² reported for the selected frozen WavLM plus Ridge baseline.",
      },
    ],
    architecture: {
      title: "Research and model-selection pipeline",
      intro:
        "The experimental boundary prevents the locked strict test set from influencing representation choice, Ridge regularization, or LoRA tuning. Every stage exports manifests, metadata, predictions, metrics, and plots so results can be traced back to the exact data and configuration.",
      clientLabel: "Research input",
      serviceLabel: "Pipeline stage",
      privilegedLabel: "Evaluation boundary",
      boundaryTitle: "Leakage-aware experiment boundary",
      diagramDescription:
        "ChaLearn videos become standardized audio and speaker-independent splits, then flow through representation benchmarks, Ridge selection, WavLM LoRA adaptation, and locked final evaluation.",
      client: {
        title: "ChaLearn First Impressions V2",
        description:
          "10,000 roughly 15-second video clips with observer-rated continuous Big Five labels form the single controlled dataset for the audio-only study.",
      },
      services: [
        {
          title: "Audio extraction and QC",
          description:
            "FFmpeg, SoundFile, librosa, and Silero VAD produce consistent mono 16 kHz clips and remove samples with insufficient speech.",
        },
        {
          title: "Strict group split",
          description:
            "Channel-derived group IDs and gender/ethnicity stratification create disjoint train, validation, and test subsets.",
        },
        {
          title: "Representation benchmark",
          description:
            "eGeMAPS functionals and frozen wav2vec 2.0, HuBERT, and WavLM embeddings are compared under an identical downstream protocol.",
        },
        {
          title: "Ridge model selection",
          description:
            "Standardized features feed multi-output Ridge models; validation MAE selects alpha before one final test evaluation.",
        },
        {
          title: "WavLM + LoRA",
          description:
            "A frozen WavLM backbone receives q/v attention adapters and a five-output regression head tuned on strict train/validation data.",
        },
        {
          title: "Diagnostics and artifacts",
          description:
            "Per-trait predictions, error metrics, R² diagnostics, loss curves, metadata, scalers, and checkpoints are exported for review.",
        },
      ],
      privileged: {
        title: "Locked strict test set",
        description:
          "The 2,039-clip test partition remains outside model and hyperparameter selection, preserving an honest generalization estimate for unseen speaker groups.",
      },
    },
    additionalArchitectures: [
      {
        title: "Production inference architecture",
        intro:
          "The web product separates presentation, request orchestration, model serving, and artifact storage. This keeps large Python and PyTorch dependencies out of Vercel while preserving a stable same-origin API for the browser.",
        clientLabel: "Product client",
        serviceLabel: "Deployment capability",
        privilegedLabel: "Request boundary",
        boundaryTitle: "Vercel-to-Hugging Face inference boundary",
        diagramDescription:
          "A Next.js application on Vercel forwards validated model and audio requests to a Gradio Hugging Face Space, which downloads model artifacts from the Hugging Face Hub and returns five trait scores.",
        client: {
          title: "Next.js 14 demo on Vercel",
          description:
            "The React interface handles recording, upload, 15-second validation, localization, model selection, charting, local result recovery, and user-facing safeguards.",
        },
        services: [
          {
            title: "Same-origin API routes",
            description:
              "Node.js handlers validate multipart inputs, expose the model manifest, proxy predictions, and allow an extended inference timeout.",
          },
          {
            title: "Gradio client orchestration",
            description:
              "A cached server-side client connects to the Space, coerces response formats, retries transient failures once, and enforces a five-minute timeout.",
          },
          {
            title: "Hugging Face Space",
            description:
              "Python inference reproduces mono 16 kHz trimming, extracts eGeMAPS or SSL representations, and executes Ridge or LoRA checkpoints.",
          },
          {
            title: "Hugging Face Model Hub",
            description:
              "Versioned metadata, StandardScaler/Ridge artifacts, and fine-tuned HuBERT/WavLM checkpoints are discovered and downloaded on demand.",
          },
          {
            title: "Dynamic model manifest",
            description:
              "The Space scans the model repository so newly packaged baselines or fine-tuned checkpoints can appear without hardcoding the frontend list.",
          },
          {
            title: "Result presentation",
            description:
              "Five finite trait scores return to the browser for visualization, explanation, local persistence, and optional result-link sharing.",
          },
        ],
        privileged: {
          title: "Ephemeral audio request",
          description:
            "Audio is submitted only when the user explicitly requests inference; the application implements no user account or application database for recordings.",
        },
      },
    ],
    stack: [
      "Python",
      "PyTorch",
      "Transformers",
      "PEFT",
      "Optuna",
      "OpenSMILE",
      "Silero VAD",
      "scikit-learn",
      "Gradio",
      "Hugging Face Hub",
      "Next.js 14",
      "TypeScript",
      "Vercel",
    ],
    technologyGroups: [
      {
        title: "Research and training",
        description: "Experiment design, representation learning, tuning, reproducibility, and diagnostics.",
        items: ["Python", "Jupyter", "PyTorch", "Transformers", "PEFT", "Optuna", "Pandas", "NumPy"],
      },
      {
        title: "Audio and dataset pipeline",
        description: "Signal extraction, standardization, speech quality control, and grouped dataset construction.",
        items: ["FFmpeg", "librosa", "SoundFile", "Silero VAD", "OpenSMILE", "eGeMAPS", "scikit-learn"],
      },
      {
        title: "Models and evaluation",
        description: "Handcrafted and self-supervised representations under controlled regression and adaptation protocols.",
        items: ["wav2vec 2.0", "HuBERT", "WavLM", "Ridge Regression", "LoRA", "MAE", "RMSE", "R²"],
      },
      {
        title: "Serving and product",
        description: "Model artifact hosting, Python inference, web orchestration, and interactive result presentation.",
        items: ["Gradio", "Hugging Face Spaces", "Hugging Face Hub", "Next.js 14", "TypeScript", "Recharts", "Vercel"],
      },
    ],
    challenges: [
      "Preventing speaker-identity leakage in a dataset where multiple clips can originate from the same YouTube channel or source speaker.",
      "Recovering quiet or phase-cancelled recordings without weakening a reproducible quality-control rule for the remaining dataset.",
      "Keeping the comparison fair across an 88-dimensional handcrafted descriptor set and three 768-dimensional pretrained speech representations.",
      "Running repeated Transformer experiments under limited compute while retaining fixed seeds, saved histories, and a locked test protocol.",
      "Accepting that additional model flexibility was not automatically better: the final LoRA model improved Extraversion but slightly reduced aggregate performance.",
      "Reproducing training-time audio and model configuration inside a cold-start-prone hosted inference service with checkpoints hundreds of megabytes in size.",
    ],
    outcome: [
      "A validated 9,974-clip research dataset and speaker-disjoint evaluation protocol with reusable manifests and quality-control evidence.",
      "Evidence that frozen self-supervised speech embeddings outperform eGeMAPS, with WavLM selected as the strongest and most stable strict-split baseline.",
      "A live bilingual research demo connecting Vercel, Hugging Face Spaces, and a versioned model repository across multiple baseline and fine-tuned variants.",
    ],
    lessons: [
      "Data partitioning is part of the model: a speaker-disjoint split provides a more credible claim than a stronger metric produced by identity leakage.",
      "Frozen pretrained representations plus a regularized linear head can outperform parameter-efficient fine-tuning when labels and compute are limited.",
      "MAE must be read alongside R²; a small absolute error can coexist with weak explanation of target variance when labels are narrowly distributed.",
      "Training and serving must share the same sample-rate, channel, duration, pooling, scaler, label order, and checkpoint metadata contracts.",
      "Separating web orchestration, inference compute, and model artifacts makes a heavy research stack deployable without hiding its experimental limitations.",
    ],
    sectionTitles: {
      overview: "From undergraduate research to a live speech-AI system",
      problem: "Estimating perceived personality without leaking speaker identity",
      solution: "A controlled research pipeline with production parity",
      features: "Dataset, modeling, evaluation, and deployment capabilities",
      architecture: "Research and production system boundaries",
      gallery: "Live product and original research artifacts",
      challenges: "Scientific and engineering constraints",
      lessons: "What the experiments demonstrated",
      outcome: "A reproducible study with a reviewer-ready deployment",
    },
    disclaimerLabel: "Research and responsible-use notice",
    disclaimerVariant: "info",
    disclaimer:
      "This system estimates apparent personality cues perceived from a short recording; it does not recover a person's clinical condition, identity, or self-reported personality. Predictions are probabilistic research outputs and must not be used for medical, clinical, employment, admissions, or other high-impact decisions. Public screenshots show the live interface without uploading audio or generating a synthetic result.",
    seoDescription:
      "Case study of Big Five Voice AI: a leakage-aware audio personality estimation thesis comparing eGeMAPS, wav2vec 2.0, HuBERT, WavLM, Ridge regression, and LoRA, deployed with Next.js, Vercel, Gradio, and Hugging Face.",
  },
  {
    slug: "asteria-learn-hub",
    title: "Asteria Learn Hub",
    summary:
      "A production learning ecosystem for Asteria Academy that combines a public education website, student authentication, and two browser-based Blockly workspaces: a software lab for interactive projects and a hardware lab for Arduino Uno and ESP32 programming.",
    role: "Full-stack & Learning Platform Developer",
    year: "2025–2026",
    status: "Live Production Site",
    tags: ["React", "TypeScript", "Blockly", "Web Serial", "Arduino", "ESP32", "EdTech"],
    cover: {
      src: "/projects/asteria-learn-hub/home.webp",
      alt: "Asteria Academy homepage introducing coding, STEM, AI, and robotics programs for children.",
      width: 1440,
      height: 1000,
    },
    gallery: [
      {
        src: "/projects/asteria-learn-hub/home.webp",
        alt: "Asteria Academy homepage with its education proposition, program actions, learner count, and event carousel.",
        width: 1440,
        height: 1000,
        title: "Education platform landing page",
        description:
          "The homepage positions Asteria as a project-based learning platform for coding, STEM, AI, and robotics while giving parents, students, and partners clear entry points.",
        features: [
          "Program, free-learning, parent registration, collaboration, and Asteria Lab calls to action.",
          "Responsive event carousel, learner proof points, partner visibility, and light/dark theme support.",
          "Shared navigation and footer patterns across the public experience.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/about.webp",
        alt: "Asteria Academy about page explaining the organization's vision, mission, values, and team background.",
        width: 1440,
        height: 1000,
        title: "About, mission, and team",
        description:
          "The company profile translates Asteria's educational direction into a structured story covering its vision, mission, values, and multidisciplinary team.",
        features: [
          "Dedicated organization profile with consistent branded illustration and typography.",
          "Team and institutional background presented for parent and partner trust.",
          "Reusable marketing shell shared with the remaining public pages.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/programs.webp",
        alt: "Asteria Academy program page presenting coding, artificial intelligence, robotics, and STEM learning tracks.",
        width: 1440,
        height: 1000,
        title: "Programs and curriculum paths",
        description:
          "The program catalog makes the learning offer easier to compare across age groups and disciplines, connecting curriculum information to enrollment actions.",
        features: [
          "Coding, AI and machine learning, robotics, and STEM program coverage.",
          "Age-appropriate curriculum positioning and parent-focused decision support.",
          "Direct progression from program discovery into consultation or registration.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/resources.webp",
        alt: "Asteria Academy resources page with educational materials and learning content.",
        width: 1440,
        height: 1000,
        title: "Learning resources",
        description:
          "A dedicated resource area extends the platform beyond course promotion and gives families a place to discover educational material and supporting content.",
        features: [
          "Centralized learning-resource discovery.",
          "Card-based content hierarchy designed for scanning and expansion.",
          "Consistent pathways back to programs and the learning platform.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/shop.webp",
        alt: "Asteria Academy shop showing STEM, robotics, electronics, and programmable learning kits.",
        width: 1440,
        height: 1000,
        title: "STEM and robotics shop",
        description:
          "The shop connects curriculum with physical learning kits, presenting equipment for early STEM, electronics, robotics, programming, and maker activities.",
        features: [
          "Catalog presentation for grade-based STEM material and hardware kits.",
          "Product imagery, category context, and purchase-oriented calls to action.",
          "A unified brand experience between education services and physical products.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/collaboration.webp",
        alt: "Asteria Academy collaboration page inviting schools, communities, and organizations to partner on education programs.",
        width: 1440,
        height: 1000,
        title: "Partnership and collaboration",
        description:
          "A purpose-built collaboration page supports school partnerships, community programs, CSR initiatives, and other institutional opportunities.",
        features: [
          "Partner-oriented messaging separate from parent and student conversion flows.",
          "Clear collaboration categories and contact actions.",
          "Evidence-led presentation of Asteria's educational ecosystem.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/contact.webp",
        alt: "Asteria Academy contact page with contact information and inquiry form.",
        width: 1440,
        height: 1000,
        title: "Contact and consultation",
        description:
          "The contact experience gives parents and partners a direct route to ask questions, request consultation, or continue the enrollment conversation.",
        features: [
          "Structured inquiry form with accessible labels and clear completion actions.",
          "Visible email, phone, and organization contact context.",
          "Responsive layout aligned with the rest of the marketing site.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/login.webp",
        alt: "Asteria Academy student sign-in page with email, password, and Google authentication options.",
        width: 1440,
        height: 1000,
        title: "Student authentication",
        description:
          "The account gateway protects student workspaces while keeping email/password and Google sign-in inside the same branded experience.",
        features: [
          "Token-based account session integrated with the Asteria API.",
          "Email/password and Google identity entry points.",
          "Authenticated routing into the dashboard and Asteria Lab.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/register.webp",
        alt: "Asteria Academy registration page for creating a student account.",
        width: 1440,
        height: 1000,
        title: "Account registration",
        description:
          "New learners can create an account without leaving the platform, using a registration state that shares validation and visual language with sign-in.",
        features: [
          "Name, email, password, and confirmation workflow.",
          "Client-side validation, feedback states, and API-backed registration.",
          "Fast transition between registration and existing-account sign-in.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/scratch-software.webp",
        alt: "Asteria Lab software workspace with Blockly categories, programming canvas, game canvas, generated code, logs, chat, sprites, and backgrounds.",
        width: 1440,
        height: 1000,
        title: "Asteria Lab — software workspace",
        description:
          "The software mode turns Blockly programs into interactive browser projects. Learners combine visual blocks, sprites, backgrounds, runtime controls, generated JavaScript, logs, and an AI-assisted workspace in one interface.",
        features: [
          "Custom Motion, Looks, Sound, Events, Control, Sensing, Operators, Variables, and My Blocks toolboxes.",
          "Sprite and background asset management with a live game canvas and synchronized runtime state.",
          "Run/stop controls, generated JavaScript, console logs, AI chat surface, and portable .ap1 project files.",
        ],
      },
      {
        src: "/projects/asteria-learn-hub/scratch-hardware.webp",
        alt: "Asteria IoT Lab hardware workspace with Arduino blocks, board controls, C++ code, serial monitor, compiler controls, and flashing logs.",
        width: 1440,
        height: 1000,
        title: "Asteria IoT Lab — hardware workspace",
        description:
          "Hardware mode converts board-aware visual blocks into Arduino C++, sends the sketch to a compiler service, and flashes supported boards directly from a compatible browser through Web Serial.",
        features: [
          "Arduino Uno and ESP32 profiles with board-aware pins, options, and incompatible-block handling.",
          "Pin, serial, sensor, data, control, operator, variable, list, and custom block categories.",
          "Generated C++, Web Serial connection, remote compilation, AVR/ESP32 flashing, serial monitor, logs, and portable IoT project files.",
        ],
      },
    ],
    liveUrl: "https://www.asteriaacademy.id/",
    githubUrl: "https://github.com/Asteria-Academy/asteria-learn-hub",
    overview:
      "Asteria Learn Hub is the digital product layer of Asteria Academy. The project brings public program discovery, organizational storytelling, learning resources, physical STEM products, partnership acquisition, student accounts, and hands-on programming into one React application. Its defining capability is Asteria Lab: a dual-mode Blockly environment where children can build software projects in the browser or generate, compile, and flash programs for Arduino Uno and ESP32 hardware.",
    problem:
      "Asteria needed more than a conventional education landing page. Parents and partners needed clear information and conversion paths, while students needed a safe, approachable bridge from visual programming concepts to real interactive software and physical electronics. Supporting both audiences in one product introduced different navigation, authentication, runtime, persistence, hardware compatibility, and deployment requirements.",
    solution:
      "I implemented a responsive React and TypeScript platform with reusable public-page components, account flows, and protected learning routes. The software editor extends Blockly with a sprite-oriented runtime, JavaScript generation, project import/export, asset management, logs, and multiple output panels. The hardware editor uses board profiles to generate Arduino C++, calls a dedicated compiler service, and uses Web Serial plus separate AVR and ESP32 flashers to program connected boards from the browser.",
    features: [
      "Responsive public website for programs, resources, shop, partnerships, contact, and organization information.",
      "Student registration, email/password login, Google sign-in, token sessions, dashboard, and protected lab routes.",
      "Dual Asteria Lab modes for browser software projects and Arduino/ESP32 hardware projects.",
      "Custom Blockly categories, fields, generators, themes, board profiles, and context-aware toolbox behavior.",
      "Sprite runtime with motion, looks, sound, events, sensing, clones, variables, custom blocks, and backgrounds.",
      "Live canvas, generated JavaScript/C++, logs, serial monitor, and AI chat work surfaces.",
      "Local workspace recovery plus typed .ap1 project export/import for software and IoT projects.",
      "Authenticated asset library and uploads for sprites and project backgrounds.",
      "Arduino Uno and ESP32 compilation with board options and incompatible-block safeguards.",
      "Browser-to-device Web Serial connection, AVR flashing, ESP32 flashing, progress reporting, and cleanup.",
      "Dark/light theming and responsive layouts across marketing and learning interfaces.",
      "Production deployment on custom web, API, and compiler domains.",
    ],
    architecture: {
      title: "Platform architecture",
      intro:
        "The browser application coordinates public content, authenticated account and asset APIs, client-side Blockly runtimes, and a separate compiler boundary. Hardware access stays permission-based in the browser through Web Serial.",
      clientLabel: "Experience layer",
      serviceLabel: "Platform capability",
      privilegedLabel: "Device boundary",
      boundaryTitle: "Service and hardware boundaries",
      diagramDescription:
        "Asteria Learn Hub architecture: the React client connects to account and asset APIs, Blockly software and IoT runtimes, an Arduino compiler, and permission-gated Web Serial devices.",
      client: {
        title: "React learning platform",
        description:
          "Vite, React Router, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, and Zustand power the public site, account flows, dashboard, and both lab modes.",
      },
      services: [
        {
          title: "Account API",
          description:
            "Registration, email and Google login, token validation, protected routing, and student identity are handled through the Asteria API.",
        },
        {
          title: "Asset API",
          description:
            "Authenticated asset discovery and uploads provide reusable sprites and backgrounds for student projects.",
        },
        {
          title: "Software runtime",
          description:
            "Blockly generates JavaScript that runs against a synchronized sprite, event, canvas, sound, and logging engine in the browser.",
        },
        {
          title: "IoT generator",
          description:
            "Board-aware Blockly blocks generate Arduino C++ for Uno and ESP32 profiles with compatible pins and configuration options.",
        },
        {
          title: "Compiler service",
          description:
            "A dedicated service invokes the Arduino toolchain and returns AVR or ESP32 firmware artifacts for browser-side flashing.",
        },
        {
          title: "Project persistence",
          description:
            "Local recovery and versioned .ap1 exports preserve workspace blocks, sprites, assets, UI state, and board configuration.",
        },
      ],
      privileged: {
        title: "Web Serial and connected boards",
        description:
          "Explicit browser permission gates serial monitoring and firmware transfer to Arduino Uno or ESP32 devices; no device access occurs without user selection.",
      },
    },
    additionalArchitectures: [
      {
        title: "Learning workspace pipeline",
        intro:
          "Both modes share the visual-programming interaction model while producing different targets: an in-browser JavaScript runtime for software and compiled firmware for physical boards.",
        clientLabel: "Learner input",
        serviceLabel: "Transformation",
        privilegedLabel: "Output target",
        boundaryTitle: "Two execution paths",
        diagramDescription:
          "Blockly blocks flow either to JavaScript and a browser canvas or to Arduino C++, remote compilation, and a serial-connected board.",
        client: {
          title: "Custom Blockly workspace",
          description:
            "Learners assemble typed, themed visual blocks using continuous toolboxes, custom fields, variables, procedures, and project-specific categories.",
        },
        services: [
          {
            title: "Software path",
            description:
              "Blocks generate JavaScript, synchronize sprite state, and execute inside the game canvas with code and log inspection.",
          },
          {
            title: "Hardware path",
            description:
              "Blocks generate Arduino C++, validate board compatibility, and package board-specific compile options.",
          },
          {
            title: "Authoring support",
            description:
              "Save/load, local recovery, assets, backgrounds, code previews, logs, and assistant surfaces support iterative learning.",
          },
          {
            title: "Runtime feedback",
            description:
              "Canvas state, compiler output, flash progress, device status, and serial data make execution observable to the learner.",
          },
        ],
        privileged: {
          title: "Canvas or physical device",
          description:
            "Software projects run in the browser; hardware projects cross the permission boundary only when the learner connects and flashes a board.",
        },
      },
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "Blockly",
      "JavaScript Generator",
      "Arduino C++",
      "Web Serial API",
      "esptool-js",
      "Firebase Google Auth",
      "Express",
      "Arduino CLI",
    ],
    technologyGroups: [
      {
        title: "Web application",
        description: "Public pages, account experience, dashboard, and protected learning routes.",
        items: ["React 18", "TypeScript", "Vite", "React Router", "Tailwind CSS", "shadcn/ui", "Motion"],
      },
      {
        title: "State, data, and identity",
        description: "Server state, editor state, account sessions, and reusable learning assets.",
        items: ["TanStack Query", "Zustand", "Axios", "Token Auth", "Firebase Google Auth", "Asteria API"],
      },
      {
        title: "Visual programming",
        description: "Custom blocks, fields, generators, toolboxes, themes, and project serialization.",
        items: ["Blockly 12", "JavaScript Generator", "Custom Runtime", ".ap1 Projects", "AI SDK UI"],
      },
      {
        title: "Hardware toolchain",
        description: "Board-aware code generation, compilation, flashing, and serial communication.",
        items: ["Arduino C++", "Arduino CLI", "Web Serial API", "esptool-js", "AVR Flasher", "Express"],
      },
    ],
    challenges: [
      "Keeping Blockly workspace serialization, Zustand sprite state, uploaded assets, generated code, and the live canvas synchronized without creating destructive update loops.",
      "Designing one visual-programming product for two execution models: immediate JavaScript in the browser and asynchronous compile-and-flash workflows for physical boards.",
      "Representing Uno and ESP32 pin capabilities, board options, and incompatible blocks clearly enough to prevent invalid programs before compilation.",
      "Managing serial-port ownership, monitor disconnects, compiler errors, firmware formats, flash progress, and cleanup across browser and device boundaries.",
      "Preserving a friendly child-oriented interface while exposing professional concepts such as generated code, logs, procedures, variables, sensors, and board configuration.",
    ],
    outcome: [
      "A live custom-domain education platform that serves parents, students, schools, and collaboration partners in one coherent product.",
      "A browser-based software lab where learners can build, run, inspect, save, and reopen sprite-driven Blockly projects.",
      "A hardware lab that progresses from visual blocks to Arduino C++, remote compilation, Web Serial flashing, and live serial monitoring.",
    ],
    lessons: [
      "Visual programming still requires strict domain modeling; custom blocks are most reliable when runtime, serialization, and generated-code contracts are designed together.",
      "Hardware UX must make state explicit. Connection, compilation, flashing, monitoring, and recovery each need distinct feedback and guarded transitions.",
      "Portable project files need version and project-type metadata so incompatible software and IoT workspaces fail safely instead of corrupting learner work.",
      "The public education journey and the technical learning workspace can share one brand while keeping their information architecture and interaction density appropriately different.",
    ],
    sectionTitles: {
      overview: "One platform from discovery to hands-on creation",
      problem: "Bridging education marketing, software, and physical computing",
      solution: "A dual-mode visual programming ecosystem",
      features: "Public platform and Asteria Lab capabilities",
      architecture: "Browser, service, runtime, and device boundaries",
      gallery: "Public website and both Blockly workspaces",
      challenges: "Building across browser and hardware constraints",
      lessons: "What the platform clarified",
      outcome: "A live end-to-end learning product",
    },
    disclaimerLabel: "Screenshot note",
    disclaimerVariant: "info",
    disclaimer:
      "Public-page screenshots were captured from the live site at a consistent desktop viewport. The authenticated Software and Hardware Lab screenshots were rendered locally from the same Asteria Learn Hub source with a temporary preview identity, so no production account, learner data, or connected device was used.",
    seoDescription:
      "Case study of Asteria Learn Hub, a live React and Blockly education platform with public program pages, student accounts, a browser software lab, and Arduino Uno/ESP32 programming through Web Serial.",
  },
  {
    slug: "brp-marketplace",
    title: "BRP Marketplace",
    summary:
      "A full-stack commerce platform for PT. Bumi Rekayasa Persada, covering product discovery, checkout, payments, shipping, realtime support, inventory, orders, customers, reporting, and company operations. The public link is a frontend-only demo with synthetic mock data because the original server is currently offline.",
    role: "Full-stack Developer",
    year: "2025–2026",
    status: "Live Frontend Demo",
    tags: ["Next.js", "TypeScript", "Bun", "Hono", "PostgreSQL", "Realtime", "Full-stack"],
    cover: {
      src: "/projects/brp-marketplace/storefront-catalog.webp",
      alt: "BRP Marketplace synthetic demo storefront showing catalog filters and product cards.",
      width: 1440,
      height: 1000,
    },
    gallery: [
      {
        src: "/projects/brp-marketplace/storefront-catalog.webp",
        alt: "BRP Marketplace synthetic storefront catalog with search, product limit, advanced filters, and product cards.",
        width: 1440,
        height: 1000,
        title: "Storefront and product catalog",
        description:
          "The customer storefront introduces the agricultural product line and turns the catalog into the main purchase entry point. The live demo returns deterministic products from a same-origin mock API.",
        features: [
          "Debounced product search, page-size control, pagination, and advanced filtering by type, packaging, and price.",
          "Product cards surface category, variant pricing, imagery, and a direct path to product details.",
          "Authenticated cart count and customer profile controls remain visible across the shopping flow.",
        ],
      },
      {
        src: "/projects/brp-marketplace/product-detail.webp",
        alt: "BRP Marketplace synthetic product detail with image gallery, packaging variants, stock, price, and quantity controls.",
        width: 1440,
        height: 1000,
        title: "Product detail and variants",
        description:
          "Each product expands into a detailed purchasing view where customers can compare packaging variants before adding a specific SKU and quantity to the cart.",
        features: [
          "Primary and variant image gallery with an enlarged preview.",
          "Packaging, weight, price, stock, and quantity controls for every product variant.",
          "Composition, benefits, usage instructions, storage guidance, and expiry information.",
        ],
      },
      {
        src: "/projects/brp-marketplace/cart.webp",
        alt: "BRP Marketplace synthetic shopping cart with an item, quantity controls, total, and checkout button.",
        width: 1440,
        height: 1000,
        title: "Shopping cart",
        description:
          "The cart keeps product variants and quantities synchronized with the customer session while calculating the purchase subtotal before checkout.",
        features: [
          "Increment, decrement, remove, and clear-cart operations.",
          "Variant-aware pricing and total item calculation.",
          "Protected transition into the checkout workflow.",
        ],
      },
      {
        src: "/projects/brp-marketplace/checkout.webp",
        alt: "BRP Marketplace synthetic checkout showing customer information, address fields, delivery method, PPN, and order summary.",
        width: 1440,
        height: 1000,
        title: "Checkout and shipping selection",
        description:
          "Checkout combines customer identity, fulfillment method, Indonesian address hierarchy, tax, shipping, and cart totals into one validated order flow.",
        features: [
          "Delivery or manual pickup modes with conditional form behavior.",
          "Cascading province, city, district, and sub-district selectors with automatic postal code handling.",
          "Shipping options, PPN calculation, order summary, and validated order creation.",
        ],
      },
      {
        src: "/projects/brp-marketplace/sign-in.webp",
        alt: "BRP Marketplace sign-in page with regular credentials and synthetic Demo User and Demo Admin shortcuts.",
        width: 1440,
        height: 1000,
        title: "Authentication and demo roles",
        description:
          "The original application supports registration, email verification, login, profile management, and password recovery. The portfolio build adds explicit one-click roles so reviewers never need a real BRP account.",
        features: [
          "JWT-backed authentication and role authorization in the original Bun API.",
          "Registration verification, forgot-password, reset-token, and profile update flows.",
          "Cookie-based Demo User and Demo Admin shortcuts backed only by synthetic identities.",
        ],
      },
      {
        src: "/projects/brp-marketplace/transaction-history.webp",
        alt: "BRP Marketplace synthetic transaction history with date, fulfillment method, status, and stock-issue filters.",
        width: 1440,
        height: 1000,
        title: "Customer transaction history",
        description:
          "Customers can review current and previous orders without leaving the marketplace account experience.",
        features: [
          "Filtering by date range, delivery method, order status, and stock issues.",
          "Paginated order cards with product, price, fulfillment method, and status context.",
          "Direct navigation from each record to its operational detail view.",
        ],
      },
      {
        src: "/projects/brp-marketplace/transaction-detail.webp",
        alt: "BRP Marketplace synthetic order detail with status timeline, shipping tracking, delivery address, payment summary, and product items.",
        width: 1440,
        height: 1000,
        title: "Order detail, payment, and tracking",
        description:
          "A single order view explains what happens after checkout: payment state, fulfillment progress, shipment events, purchased items, tax, delivery cost, and cancellation conditions.",
        features: [
          "Separate status timelines for delivery and manual fulfillment.",
          "Midtrans payment request and refund handling in the original system; deterministic payment messaging in the demo.",
          "RajaOngkir waybill tracking in production and clearly labeled synthetic tracking events in the public demo.",
        ],
      },
      {
        src: "/projects/brp-marketplace/admin-dashboard.webp",
        alt: "BRP Marketplace synthetic admin dashboard with KPI cards, best-selling products, and recent orders.",
        width: 1440,
        height: 1000,
        title: "Admin operations dashboard",
        description:
          "The admin landing page compresses daily commerce health into an actionable view for staff responsible for products, orders, and customers.",
        features: [
          "Daily orders, monthly sales, product count, and active-customer KPIs.",
          "Best-selling product ranking and recent-order queue.",
          "Quick access to order detail and stock-issue resolution workflows.",
        ],
      },
      {
        src: "/projects/brp-marketplace/admin-products.webp",
        alt: "BRP Marketplace synthetic admin product table with search, type filter, advanced filters, and product actions.",
        width: 1440,
        height: 1000,
        title: "Product and inventory management",
        description:
          "Administrators manage the catalog as related product, type, packaging, and variant records instead of a single flat inventory table.",
        features: [
          "Create, inspect, update, soft-delete, search, and filter products.",
          "Manage product types, packaging definitions, variant images, weights, prices, and stock adjustments.",
          "Crop and optimize uploaded product and variant images before storage.",
        ],
      },
      {
        src: "/projects/brp-marketplace/admin-orders.webp",
        alt: "BRP Marketplace synthetic admin order table with search, date, method, status, stock issue, and order actions.",
        width: 1440,
        height: 1000,
        title: "Order management",
        description:
          "The order workspace supports both delivery and manual transactions, with different status transitions and operational actions for each method.",
        features: [
          "Search and filtering by ID, customer, date, fulfillment method, status, and stock issue.",
          "Update statuses, add manual shipping costs, assign receipts, cancel orders, and resolve unavailable stock.",
          "Export selected operational tables for a chosen date range.",
        ],
      },
      {
        src: "/projects/brp-marketplace/admin-chat.webp",
        alt: "BRP Marketplace synthetic admin chat showing a customer conversation, message history, and composer.",
        width: 1440,
        height: 1000,
        title: "Realtime customer support",
        description:
          "A shared chat model connects the storefront widget to an admin inbox, keeping support context inside the transaction platform.",
        features: [
          "Conversation search, unread totals, pagination, presence, and typing indicators.",
          "Text messages plus image, video, and file attachments.",
          "Socket.IO delivery in the original backend; deterministic HTTP-backed messages in the public demo.",
        ],
      },
      {
        src: "/projects/brp-marketplace/admin-customers.webp",
        alt: "BRP Marketplace synthetic admin customer table with search, status filter, order totals, and customer actions.",
        width: 1440,
        height: 1000,
        title: "Customer management",
        description:
          "Customer records give administrators a concise account-level view while preserving role-based access to private operations.",
        features: [
          "Search by name or email and filter by customer status.",
          "Account identity, join date, activity state, and total-order overview.",
          "Protected customer detail access for administrator roles.",
        ],
      },
      {
        src: "/projects/brp-marketplace/admin-reports.webp",
        alt: "BRP Marketplace synthetic sales report with KPI cards, monthly trend chart, product distribution, recent transactions, and export controls.",
        width: 1440,
        height: 1000,
        title: "Sales reporting and exports",
        description:
          "Reporting transforms transaction records into a management view with period-aware metrics and portable operational exports.",
        features: [
          "Revenue, order, product-sold, and active-customer KPIs with period comparisons.",
          "Monthly revenue trend and best-selling product distribution charts.",
          "Configurable month range and CSV/ZIP export generated by the original backend.",
        ],
      },
      {
        src: "/projects/brp-marketplace/admin-settings.webp",
        alt: "BRP Marketplace synthetic company settings showing identity, address, PPN, and NPWP configuration.",
        width: 1440,
        height: 1000,
        title: "Company and tax settings",
        description:
          "Operational settings keep company identity and tax values configurable so checkout, invoices, and public contact details share one source of truth.",
        features: [
          "Company name, logo, email, phone number, and Indonesian address hierarchy.",
          "Editable PPN percentage used by checkout and transaction totals.",
          "NPWP configuration and administrator-only updates.",
        ],
      },
    ],
    liveUrl: "https://brp-marketplace-fe-demo.vercel.app/",
    overview:
      "BRP Marketplace was built as an end-to-end commerce and operations platform for PT. Bumi Rekayasa Persada. I worked across the customer storefront, administrator workflows, API design, relational data model, authentication, realtime chat, payment and shipping integrations, background email delivery, reporting, and containerized deployment. The production application originally ran at shop.bumirp.co.id/dashboard. Because that server is currently offline, this case study links to a separate portfolio-safe frontend reconstruction with synthetic accounts, products, transactions, and messages.",
    problem:
      "The business needed more than a product landing page: customers required a clear way to compare fertilizer variants, calculate delivery, place and track orders, and contact support, while staff needed reliable controls for inventory, payment state, shipping, stock exceptions, customers, reports, company identity, and tax. The original deployment later became unavailable when its server stopped, which also made a normal portfolio walkthrough impossible.",
    solution:
      "I implemented a role-aware Next.js interface backed by a Bun and Hono service layer. Prisma and PostgreSQL model catalog, cart, transaction, company, and chat data; Redis supports temporary auth state and cached shipping lookups; Socket.IO handles presence and typing; Kafka decouples transactional email; Midtrans handles payment lifecycle operations; and RajaOngkir supplies Indonesian destination, cost, and waybill data. For portfolio review, I preserved the frontend contracts and replaced production services with same-origin mock handlers, deterministic fixtures, demo-role cookies, and explicit synthetic-data messaging on Vercel.",
    features: [
      "Customer storefront with searchable, filterable, paginated products and packaging variants.",
      "Variant-aware cart, stock checks, delivery/manual checkout, PPN, and shipping calculation.",
      "Customer transaction history, detail timelines, payment state, cancellation, and shipment tracking.",
      "Registration, email verification, login, JWT sessions, password reset, profile updates, and USER/ADMIN authorization.",
      "Admin dashboard with sales KPIs, top products, recent orders, and operational alerts.",
      "Product, product-type, packaging, variant, stock, price, and image management.",
      "Order status workflows, manual shipping cost, receipts, cancellation/refund, and stock-issue resolution.",
      "Realtime customer/admin chat with presence, typing, unread state, and attachments.",
      "Customer directory, company profile, logo, address, PPN, and NPWP settings.",
      "Revenue and product analytics with date filtering and CSV/ZIP exports.",
      "Midtrans payment/refund and RajaOngkir address, rate, and waybill integrations in the original system.",
      "Portfolio-safe frontend demo with synthetic fixtures and no production side effects.",
    ],
    architecture: {
      title: "Original production architecture",
      intro:
        "The production system separated the Next.js client from a Bun runtime that served Hono REST endpoints and Socket.IO. Stateful services and third-party integrations remained behind authenticated, role-aware backend boundaries.",
      clientLabel: "Frontend",
      serviceLabel: "Backend capability",
      privilegedLabel: "Runtime boundary",
      boundaryTitle: "Production service boundary",
      diagramDescription:
        "Original BRP Marketplace architecture: Next.js customer and admin interfaces connect to Bun and Hono REST services, Socket.IO, PostgreSQL through Prisma, Redis, Kafka email jobs, file processing, Midtrans, and RajaOngkir.",
      client: {
        title: "Next.js App Router UI",
        description:
          "Renders customer catalog, checkout, transactions, support chat, and role-protected administration with React Query and Zustand state.",
      },
      services: [
        {
          title: "Bun + Hono REST API",
          description:
            "Owns validation, authentication, role checks, catalog, cart, checkout, transaction, reporting, and company operations.",
        },
        {
          title: "Prisma + PostgreSQL",
          description:
            "Stores users, products, variants, packaging, carts, transactions, tax configuration, company details, rooms, messages, and attachments.",
        },
        {
          title: "Redis",
          description:
            "Supports verification and reset tokens, rate limiting, and cached RajaOngkir destination lookups.",
        },
        {
          title: "Socket.IO",
          description:
            "Provides authenticated presence and typing signals for customer and administrator support sessions.",
        },
        {
          title: "Kafka + Nodemailer",
          description:
            "Moves verification, invoice, cancellation, and shipping email work out of request handling.",
        },
        {
          title: "Midtrans + RajaOngkir",
          description:
            "Handles payment creation/status/refund and Indonesian destination, delivery cost, and waybill workflows.",
        },
      ],
      privileged: {
        title: "Bun and Docker Compose deployment",
        description:
          "Runs the API, PostgreSQL, Redis, and Kafka with persistent uploads, invoices, exports, logs, and environment-scoped secrets.",
      },
    },
    additionalArchitectures: [
      {
        title: "Public portfolio demo architecture",
        intro:
          "The public demo deliberately stops at the frontend boundary. It keeps the screen flows and client request contracts reviewable while replacing private infrastructure and external side effects with deterministic synthetic responses.",
        clientLabel: "Demo frontend",
        serviceLabel: "Demo capability",
        privilegedLabel: "Disabled boundary",
        boundaryTitle: "Portfolio-safe demo boundary",
        diagramDescription:
          "BRP Marketplace public demo architecture: Next.js screens call a same-origin mock route handler with synthetic fixtures and cookie-based demo roles on Vercel; production integrations are disabled.",
        client: {
          title: "Next.js customer + admin UI",
          description:
            "Preserves catalog, cart, checkout, transactions, chat, products, orders, customers, reports, and settings for browser review.",
        },
        services: [
          {
            title: "Same-origin /api/mock",
            description:
              "Implements the frontend's expected endpoint shapes through a Next.js catch-all route handler.",
          },
          {
            title: "Synthetic fixtures",
            description:
              "Returns deterministic demo users, products, carts, transactions, tracking events, analytics, and messages.",
          },
          {
            title: "Demo role cookies",
            description:
              "Unlocks USER and ADMIN screens without collecting credentials or creating production accounts.",
          },
          {
            title: "Vercel deployment",
            description:
              "Hosts the frontend and mock route together so reviewers do not need the original offline server.",
          },
        ],
        privileged: {
          title: "No production side effects",
          description:
            "The demo does not run the Bun backend, persist orders, charge payments, request live shipping rates, send email, or connect to Socket.IO.",
        },
      },
    ],
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Bun",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Kafka",
      "Docker Compose",
      "Midtrans",
      "RajaOngkir",
      "Vercel",
    ],
    technologyGroups: [
      {
        title: "Frontend application",
        description: "Customer and administrator experiences built from a shared typed UI and request layer.",
        items: [
          "Next.js App Router",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "TanStack Query",
          "Zustand",
          "Axios",
          "React Hook Form",
          "Zod",
          "Radix UI",
          "Recharts",
        ],
      },
      {
        title: "Original backend",
        description: "Authenticated business logic, persistence, realtime support, background jobs, and generated files.",
        items: [
          "Bun",
          "Hono REST API",
          "Prisma",
          "PostgreSQL",
          "JWT + RBAC",
          "Redis",
          "Socket.IO",
          "Kafka",
          "Nodemailer",
          "Sharp",
          "PDFKit",
          "CSV + ZIP",
          "Docker Compose",
        ],
      },
      {
        title: "Production integrations",
        description: "External services used by the original application, not by the public demo.",
        items: ["Midtrans Snap", "Midtrans refunds", "RajaOngkir destinations", "Shipping rates", "Waybill tracking"],
      },
      {
        title: "Public demo layer",
        description: "A portfolio-safe replacement for the currently unavailable production server.",
        items: ["Next.js Route Handler", "Synthetic fixtures", "Demo role cookies", "Mock payment state", "Mock tracking", "Vercel"],
      },
    ],
    challenges: [
      "Designing one domain model that supports catalog variants, packaging, inventory, carts, delivery orders, manual orders, tax, stock exceptions, and reporting.",
      "Keeping USER and ADMIN authorization enforced at the backend service layer rather than relying only on protected frontend routes.",
      "Coordinating payment notifications, cancellation, refunds, stock reservation, shipping status, and customer-facing timelines without producing contradictory states.",
      "Integrating Indonesian destination and shipping data while caching stable lookups and retaining a mock tracking path for development.",
      "Combining HTTP chat history with authenticated Socket.IO presence and typing signals while maintaining unread state for both roles.",
      "Making the project reviewable after the original server went offline without exposing company data or pretending that mocked services were production integrations.",
    ],
    outcome: [
      "Delivered an end-to-end marketplace and operational admin system spanning customer purchase flows and internal commerce management.",
      "Established a typed Bun/Hono service architecture with relational persistence, realtime support, background email delivery, and external payment/shipping integrations.",
      "Created a standalone public frontend demo that preserves the product story with 14 reviewable synthetic screens while clearly documenting its limitations.",
    ],
    lessons: [
      "Commerce status design needs explicit transitions for payment, fulfillment, stock exceptions, cancellation, and refund failure before UI work begins.",
      "Role checks belong beside backend operations even when the frontend already hides administrator routes.",
      "Realtime UX is easier to reason about when durable message history remains HTTP/database-backed and sockets carry only timely events.",
      "A credible portfolio demo should preserve request contracts and workflows while labeling every replacement for production infrastructure.",
      "Operational settings such as company identity, PPN, NPWP, and shipping origin are part of the product architecture, not incidental admin fields.",
    ],
    sectionTitles: {
      overview: "A commerce platform spanning customers and operations",
      problem: "Sales, fulfillment, and support were one connected workflow",
      solution: "A typed Next.js and Bun platform with clear service boundaries",
      features: "Customer, administrator, and backend capabilities",
      architecture: "Original full-stack system and public demo boundary",
      gallery: "Fourteen customer and administrator screens",
      challenges: "What required full-stack coordination",
      lessons: "What the production build and demo clarified",
      outcome: "A complete platform with a reviewable synthetic demo",
    },
    disclaimerLabel: "Project and demo context",
    disclaimerVariant: "info",
    disclaimer:
      "I built the BRP Marketplace deployed at shop.bumirp.co.id/dashboard as a full-stack developer; that original deployment is currently unavailable because its server is offline. The Live Demo is a frontend-only reconstruction backed by synthetic mock responses. It does not run the Bun backend, persist orders, charge payments, request live shipping rates, send transactional email, or expose production data. The corporate website at www.bumirp.co.id is owned by PT. Bumi Rekayasa Persada and was not created by me.",
    seoDescription:
      "BRP Marketplace is a full-stack Next.js, TypeScript, Bun, Hono, Prisma, PostgreSQL, Redis, Socket.IO, Kafka, Midtrans, and RajaOngkir commerce case study with a public synthetic frontend demo.",
  },
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
