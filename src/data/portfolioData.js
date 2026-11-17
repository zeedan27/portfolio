/**
 * Authoritative portfolio data store for Zesrab Tanjeel Khan (@zeedan27).
 * Strictly conforms to architecture/schemas.md.
 */

export const heroData = {
  logoCode: "ZTK // S-07",
  logoSub: "ZESRAB TANJEEL KHAN",
  eyebrow: "SYS.PILOT // CSE @ UIU · CGPA 3.95 / 4.00",
  headline: "ARCHITECTING DETERMINISTIC AI & RESILIENT SYSTEMS.",
  description:
    "Computer Science engineer, 2× Undergraduate Teaching Assistant (DSA I & OOP), and builder of fault-tolerant AI pipelines, reverse-engineering toolkits, and full-stack platforms. Move your cursor to scan beneath the surface.",
  primaryCta: {
    label: "OPEN CASE LOGS",
    href: "#case-studies"
  },
  secondaryCta: {
    label: "DOWNLOAD CV.PDF",
    href: "/Zesrab-Tanjeel-Khan_CV.pdf"
  },
  frontImage: "/front.jpg",
  backImage: "/back.jpg",
  stats: [
    {
      value: "3.95",
      unit: "/ 4.00",
      label: "CGPA · CSE @ UIU"
    },
    {
      value: "13+",
      unit: "REPOS",
      label: "AI, SECURITY & FULL-STACK"
    },
    {
      value: "2×",
      unit: "UTA",
      label: "DSA I & OOP LAB MENTOR"
    }
  ]
};

export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "CASE STUDIES", href: "#case-studies" },
  { label: "PROJECTS", href: "#projects" },
  { label: "WORKFLOWS", href: "#workflows" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" }
];

export const aboutData = {
  eyebrow: "01 // ENGINEER PROFILE",
  heading: "Built on fundamentals, tested under real constraints.",
  summary:
    "I am Zesrab Tanjeel Khan (Zeedan), a Computer Science & Engineering undergraduate at United International University (10th Trimester, CGPA 3.95/4.00). Beyond maintaining top academic standing, I serve as an Undergraduate Teaching Assistant for core Data Structures & Algorithms and Object-Oriented Programming labs, helping 30+ students per session reason about memory, complexity, and architecture. My engineering focus sits at the intersection of deterministic AI workflows, LLM security, and full-stack software.",
  exploringNote:
    "Currently exploring: research papers in indirect LLM prompt injection, adversarial evaluation, and multimodal document intelligence.",
  education: {
    institution: "United International University (UIU)",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2022 – Present · 10th Trimester",
    cgpa: "3.95 / 4.00",
    location: "Madani Ave, Dhaka 1212"
  },
  experience: [
    {
      role: "Undergraduate Teaching Assistant",
      course: "CSE 2216: Data Structures & Algorithms I Lab",
      institution: "United International University",
      period: "Spring 2025",
      highlights: [
        "Instructed lab sessions on arrays, linked lists, stacks, queues, and binary trees for efficient algorithmic implementation.",
        "Mentored students on Big-O complexity analysis to sharpen code optimization and problem-solving discipline.",
        "Collaborated with faculty to align lab problem sets with assessment rubrics."
      ]
    },
    {
      role: "Undergraduate Teaching Assistant",
      course: "CSE 1116: Object-Oriented Programming Lab",
      institution: "United International University",
      period: "Spring 2025",
      highlights: [
        "Guided 30+ students per session through Java OOP fundamentals: inheritance, polymorphism, encapsulation, and design patterns.",
        "Evaluated lab submissions with structured feedback that measurably improved assignment quality and completion rates."
      ]
    }
  ]
};

export const caseStudyBooks = [
  {
    id: "papyr",
    code: "CASE-01 // MULTIMODAL AI",
    spineTitle: "PAPYR",
    title: "Papyr: Universal Paper-to-Manim Scrollytelling Engine",
    subtitle: "Breaking single-repository lock-in for scientific PDF visualization",
    accentColor: "cyan",
    techStack: ["Next.js", "FastAPI", "PyMuPDF", "Gemini Multimodal", "ManimCE", "Edge-TTS"],
    repoUrl: "https://github.com/zeedan27",
    pages: {
      observation: {
        step: "01",
        tag: "OBSERVATION",
        title: "Great visual paper tools were locked behind a single arXiv gate.",
        body: "While studying AI paper visualization tools like arXivisual, I noticed how dramatically animated 3Blue1Brown-style Manim walkthroughs improved comprehension compared to dense walls of text. However, researchers working with IEEE, ACM, Springer, bioRxiv, or local institutional PDFs couldn't use the tool at all.",
        evidence: "Initial UX audit showed non-arXiv PDFs and DOI URLs were rejected upfront with 422 errors."
      },
      research: {
        step: "02",
        tag: "RESEARCH & GAP",
        title: "Reverse-engineering revealed deep coupling to arXiv IDs & fragile parsers.",
        body: "Inspecting the ingestion pipeline exposed four root bottlenecks: (1) POST /api/process enforced an arXiv regex, (2) SQL schemas used arxiv_id as the primary key, (3) single-column text extractors mangled multi-column equations, and (4) audio generation required paid ElevenLabs/Azure credentials.",
        evidence: "Regex lock: ^\\d{4}\\.\\d{4,5}(v\\d+)?$ + single-column pymupdf4llm parser failure on IEEE PDFs."
      },
      build: {
        step: "03",
        tag: "THE BUILD",
        title: "Content-addressable PDF ingestion + 4-stage Manim validation gates.",
        body: "I engineered Papyr around SHA-256 PDF hashing, PyMuPDF vector/block extraction paired with Gemini Multimodal vision for KaTeX recovery, a 4-stage Manim validator (AST import safety, spatial bounds check, 0.2s dry-run construct test, and rhythm checks), and zero-config Edge-TTS neural voiceovers streamed over SSE.",
        evidence: "FastAPI + SSE live pipeline: [PDF Parse] → [Concept Map] → [Manim Render] → [Scrollytelling Sync]."
      },
      frictionFix: {
        step: "04",
        tag: "FRICTION & FIX",
        title: "Two-column IEEE scramble & Groq TPM rate-limit crashes.",
        body: "During testing on multi-column IEEE manuscripts, bounding boxes interleaved left and right columns mid-sentence, conference footers leaked into prompts, and parallel scene generation hit Groq TPM limits. I implemented two-column layout ordering, conference banner & Roman numeral filtering, and multi-provider fallback routing across Gemini, Mistral, and Groq with TPM bounds.",
        evidence: "Verified fixes in commits 4215450, c0f171e, and bd6e15f (two-column ordering & TPM guardrails)."
      }
    }
  },
  {
    id: "scope-baton",
    code: "CASE-02 // AGENT PROTOCOLS",
    spineTitle: "S.C.O.P.E.",
    title: "S.C.O.P.E. & Baton-Pass: Deterministic Agent Engineering",
    subtitle: "Replacing fragile single-prompt coding loops with gated schemas and parallel lanes",
    accentColor: "amber",
    techStack: ["Markdown SOPs", "JavaScript", "Protocol Engineering", "Multi-Agent Registry"],
    repoUrl: "https://github.com/zeedan27/scope-skill",
    pages: {
      observation: {
        step: "01",
        tag: "OBSERVATION",
        title: "Long AI coding sessions drift, hallucinate schemas, and overwrite each other.",
        body: "Running end-to-end builds inside one marathon AI conversation consistently bloated the context window, burned tokens, and caused agents to invent unverified business logic or clobber unrelated modules when fixing bugs.",
        evidence: "Observed across multi-service builds where un-gated edits broke API/UI type parity."
      },
      research: {
        step: "02",
        tag: "RESEARCH & GAP",
        title: "Legacy frameworks lacked right-sized tiers and multi-chat ownership boundaries.",
        body: "Evaluating older workflows like B.L.A.S.T. showed two gaps: they didn't scale cleanly between quick prototypes and production security (no RLS/rate-limit gates), and they had zero protocol for handing off out-of-scope errors between parallel AI chats without file collisions.",
        evidence: "Missing: pre-code schema lock, explicit deferral triggers, and path-ownership lanes."
      },
      build: {
        step: "03",
        tag: "THE BUILD",
        title: "Two modular skills: S.C.O.P.E. (5-phase gate) + Baton-Pass (CHATS.md lanes).",
        body: "I authored scope-skill (Specification → Connections → Organization → Polish → Execution) featuring a 12-layer T0/T1/T2 stack matrix and hard Gate 1/Gate 2 checks, alongside baton-pass-skill, a zero-dependency coordinator assigning numbered chat IDs (C01, C02), strict Owns(paths) lanes, and a cross-chat request queue (R1, R2).",
        evidence: "Published open-source at github.com/zeedan27/scope-skill & baton-pass-skill."
      },
      frictionFix: {
        step: "04",
        tag: "FRICTION & FIX",
        title: "Protocol ceremony overhead on tiny fixes & unbounded log growth.",
        body: "Making multi-chat tracking mandatory for small single-file tasks slowed down quick iterations, and CHATS.md grew noisy after multiple handoffs. I added a Dormant-on-Small-Tasks rule, an 80-line automatic archive rotation to CHATS.archive.md, and a Three-Strike Breaker that halts repair loops after 3 failed attempts.",
        evidence: "Dormant trigger + 80-line auto-archiver + Three-Strike Breaker enforced in core skill rules."
      }
    }
  },
  {
    id: "skillverify",
    code: "CASE-03 // FULL-STACK PLATFORM",
    spineTitle: "SKILLVERIFY",
    title: "SkillVerify: Gated Assessment, Grooming & Verified Portfolios",
    subtitle: "Closing the skill-verification gap with state machines & integrity telemetry",
    accentColor: "teal",
    techStack: ["TypeScript", "React", "NestJS", "PostgreSQL", "State Machines"],
    repoUrl: "https://github.com/zeedan27/skillverify-platform",
    pages: {
      observation: {
        step: "01",
        tag: "OBSERVATION",
        title: "Resume keyword screening fails both candidates and engineering teams.",
        body: "Skilled junior developers without brand-name internships get filtered out by ATS keywords, while traditional pass/fail coding quizzes reject candidates with potential instead of giving them a structured path to close weak spots.",
        evidence: "Observed high false-rejection rates in standard single-shot technical screening portals."
      },
      research: {
        step: "02",
        tag: "RESEARCH & GAP",
        title: "Assessment tools disconnected learning from verified hiring signals.",
        body: "Existing platforms treated skill quizzes, upskilling courses, and CV portfolios as three separate tools, and unmonitored browser assessments were trivial to bypass using tab switching, window blurring, or copy-pasting.",
        evidence: "Needed shared TypeScript contracts across applicant quizzes, grooming loops, and employer alerts."
      },
      build: {
        step: "03",
        tag: "THE BUILD",
        title: "A 10-state candidate lifecycle with automated grooming & dynamic CV generation.",
        body: "I built SkillVerify (TypeScript/React/NestJS) governed by locked shared schemas: applicants move through NOT_STARTED → ATTEMPTED → GROOMING_REQUIRED → GROOMING_COMPLETE → FINAL_PASSED, unlocking Bronze/Silver/Gold badges and a verified public portfolio & dynamic ATS CV generator.",
        evidence: "Implemented in commits 1d2590c, 8730e15, and 91548e6 (Quiz Engine, Badges, Dynamic CV)."
      },
      frictionFix: {
        step: "04",
        tag: "FRICTION & FIX",
        title: "Securing browser quizzes against tab-switching & clipboard cheating.",
        body: "During timed evaluations, browser-only timers couldn't detect off-screen lookups or pasted solutions. I engineered a deterministic Integrity Event Telemetry pipeline capturing TAB_SWITCH, WINDOW_BLUR, FULLSCREEN_EXIT, COPY_PASTE, and CONTEXT_MENU events and dispatching real-time INTEGRITY_ALERT records to employers.",
        evidence: "5 IntegrityEventType signals synced between quiz client and NestJS backend schema."
      }
    }
  },
  {
    id: "daak",
    code: "CASE-04 // PUBLIC SAFETY TECH",
    spineTitle: "DAAK",
    title: "Daak: Anonymous Crime Reporting & Police SOS Dispatch",
    subtitle: "Real-time distress telemetry, crime heatmaps, and role-gated Firestore rules",
    accentColor: "cyan",
    techStack: ["Next.js", "TypeScript", "Firebase", "Firestore Rules", "Geolocation"],
    repoUrl: "https://github.com/zeedan27/Daak",
    pages: {
      observation: {
        step: "01",
        tag: "OBSERVATION",
        title: "Reporting urban safety incidents carries fear of exposure and slow dispatch.",
        body: "Citizens in Dhaka often hesitate to report street crime due to privacy concerns or lack of direct emergency routing, while passersby have no quick visual map of recent incident clusters.",
        evidence: "Scoped public safety requirements around instant 5-second panic triggers and anonymity."
      },
      research: {
        step: "02",
        tag: "RESEARCH & GAP",
        title: "Public reporting apps broke down between citizen writes and police dispatch reads.",
        body: "Standard contact forms were too slow for active emergencies, while open databases risked leaking reporter identities or failing silently when strict role boundaries were applied between regular citizens and police accounts.",
        evidence: "Documented dual-role flow: /distress (Citizen Panic Button) ↔ /police/sos (Dispatch Monitor)."
      },
      build: {
        step: "03",
        tag: "THE BUILD",
        title: "Real-time SOS broadcaster, interactive crime heatmaps & AI safety assistant.",
        body: "Built Daak with Next.js and Firebase featuring anonymous incident submission, GPS-tagged distress signals after a 5-second safety countdown, interactive neighborhood crime heatmaps, emergency contact sync, and a live police SOS monitoring console.",
        evidence: "Full-stack Next.js + Firestore schema linking users/{uid} roles and distressSignals docs."
      },
      frictionFix: {
        step: "04",
        tag: "FRICTION & FIX",
        title: "SOS alerts disappeared on the /police/sos console during live tests.",
        body: "After firing a distress signal from a citizen device, the /police/sos dashboard returned 0 alerts. Auditing the trace revealed two breaks: Firestore rules rejected cross-user reads without role lookup, and active status filtering expected lowercase/exact policeStatus: 'Active'. I authored an isPolice() Firestore rule check on users/{uid}.role and standardized payload state.",
        evidence: "Resolved and documented in SOS_ALERT_TROUBLESHOOTING.md & FIRESTORE_SECURITY_RULES.md."
      }
    }
  },
  {
    id: "shishucare",
    code: "CASE-05 // HEALTH AI & ML",
    spineTitle: "SHISHUCARE",
    title: "ShishuCare / NurtureAI: Rural Maternal & Child Health AI",
    subtitle: "Deterministic WHO IMCI triage + PyTorch DeepInfant & NutriMind microservices",
    accentColor: "amber",
    techStack: ["Python", "FastAPI", "PyTorch", "scikit-learn", "React Native", "Node.js"],
    repoUrl: "https://github.com/zeedan27/ShishuCare",
    pages: {
      observation: {
        step: "01",
        tag: "OBSERVATION",
        title: "Rural mothers & CHWs lack fast, trustworthy Bangla guidance during infant distress.",
        body: "Parents and Community Health Workers in rural Bangladesh navigate fragmented vaccine schedules, harmful traditional newborn myths, and delayed symptom assessment over unreliable 2G connections.",
        evidence: "Built for mobile-first, low-bandwidth contexts in both Bangla and English."
      },
      research: {
        step: "02",
        tag: "RESEARCH & GAP",
        title: "Raw LLM chatbots hallucinate dosages and break offline clinical safety.",
        body: "Relying purely on generative LLMs for pediatric triage creates unacceptable clinical risk (inconsistent urgency levels or invented medication dosages), while heavy Python ML models cannot run smoothly inside an Expo mobile bundle.",
        evidence: "Enforced clinical guardrails: zero medicine dosages + WHO/DGHS IMCI alignment."
      },
      build: {
        step: "03",
        tag: "THE BUILD",
        title: "Hybrid rule-first triage + FastAPI microservices for cry & nutrition ML.",
        body: "Architected ShishuCare combining an offline-capable WHO IMCI Level 1–4 rule engine, Groq Llama-3.3 care checklists with one-tap WhatsApp clinic alerts, Bangladesh EPI vaccine tracking, NutriMind (KNN cosine-similarity over 500k+ recipes), and DeepInfant (PyTorch CNN + Bi-LSTM infant cry classifier at 89% accuracy).",
        evidence: "Multi-tier stack: Expo React Native + Express API + FastAPI ML services (PyTorch & scikit-learn)."
      },
      frictionFix: {
        step: "04",
        tag: "FRICTION & FIX",
        title: "Preventing heavy ML inference & LLM latency from blocking emergency triage.",
        body: "Loading a 95MB nutrition dataset and PyTorch audio inference inline with the Express API risked timeouts on mobile requests and non-deterministic urgency classifications. I decoupled DeepInfant and NutriMind into isolated FastAPI microservices and placed the deterministic IMCI rule engine strictly ahead of AI enrichment.",
        evidence: "Deterministic safety gate always returns local Level 1–4 classification before LLM/ML calls."
      }
    }
  }
];

export const projectsData = [
  {
    id: "proj-papyr",
    name: "Papyr: Visual Paper Scrollytelling",
    category: "AI & Security",
    status: "ACTIVE BUILD",
    language: "Python / Next.js",
    summary:
      "Transforms any uploaded research PDF (IEEE, ACM, bioRxiv, arXiv) into synchronized Manim math animations, KaTeX manuscripts, and Edge-TTS narration.",
    highlights: [
      "4-stage Manim AST/spatial/dry-run validation gates",
      "Two-column IEEE layout ordering & multi-LLM fallback"
    ],
    stack: ["Next.js", "FastAPI", "PyMuPDF", "ManimCE", "Gemini"],
    repoUrl: "https://github.com/zeedan27"
  },
  {
    id: "proj-prompt-eval",
    name: "llm-prompt-injection-eval",
    category: "AI & Security",
    status: "SECURITY POC",
    language: "Python",
    summary:
      "Modular evaluation harness measuring Attack Success Rate (ASR) of indirect prompt injection payloads against local Llama-3 models via Ollama.",
    highlights: [
      "Separated benign vs. poisoned JSON dataset pipelines",
      "Delimited prompt builder & automated ASR analytics"
    ],
    stack: ["Python", "Ollama", "Llama 3", "JSON Contracts"],
    repoUrl: "https://github.com/zeedan27/llm-prompt-injection-eval"
  },
  {
    id: "proj-shishucare",
    name: "ShishuCare / NurtureAI",
    category: "AI & Security",
    status: "HACKATHON",
    language: "Python / JS / RN",
    summary:
      "Bilingual Bangla/English maternal & child health platform pairing deterministic WHO IMCI triage with DeepInfant cry classification and NutriMind meal planning.",
    highlights: [
      "89% accuracy CNN + Bi-LSTM infant cry classifier",
      "Offline-first rule engine + one-tap WhatsApp emergency alerts"
    ],
    stack: ["PyTorch", "FastAPI", "React Native", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/zeedan27/ShishuCare"
  },
  {
    id: "proj-scope",
    name: "scope-skill (S.C.O.P.E. Protocol)",
    category: "Systems & Skills",
    status: "OPEN SOURCE",
    language: "JavaScript / SOPs",
    summary:
      "Deterministic 5-phase engineering protocol with a 12-layer T0/T1/T2 stack matrix and mandatory pre-code schema & production readiness gates.",
    highlights: [
      "Prevents hallucinated schemas via Gate 1 & Gate 2 hard stops",
      "Compatible with Google Antigravity & Claude Code"
    ],
    stack: ["S.C.O.P.E.", "Architecture SOPs", "Git Hygiene", "Security"],
    repoUrl: "https://github.com/zeedan27/scope-skill"
  },
  {
    id: "proj-baton-pass",
    name: "baton-pass-skill",
    category: "Systems & Skills",
    status: "OPEN SOURCE",
    language: "Markdown Protocol",
    summary:
      "Zero-dependency parallel AI agent coordinator using a shared CHATS.md registry, strict file-path ownership lanes, and cross-chat bug request queues.",
    highlights: [
      "Eliminates context-window bloat & edit collisions",
      "Includes 80-line auto-archiving & dormant small-task mode"
    ],
    stack: ["Multi-Agent", "CHATS.md", "Workflow Design"],
    repoUrl: "https://github.com/zeedan27/baton-pass-skill"
  },
  {
    id: "proj-rea",
    name: "rea-web-skill",
    category: "Systems & Skills",
    status: "TOOLKIT",
    language: "Reverse Engineering",
    summary:
      "Web-first reverse engineering and clean-room specification toolkit for analyzing shipped web bundles, API contracts, and runtime behavior.",
    highlights: [
      "6-phase routing workflow with clean-room provenance rules",
      "Bundle reconstruction & verification ledgers"
    ],
    stack: ["Web RE", "Bundle Analysis", "Clean-Room Specs"],
    repoUrl: "https://github.com/zeedan27/rea-web-skill"
  },
  {
    id: "proj-skillverify",
    name: "skillverify-platform",
    category: "Full-Stack & Mobile",
    status: "FULL-STACK",
    language: "TypeScript",
    summary:
      "End-to-end hiring platform combining anti-cheat quiz telemetry, adaptive applicant grooming modules, gamified badges, and dynamic ATS CV exports.",
    highlights: [
      "10-state QuizAttemptState workflow & integrity alerts",
      "Automated dynamic CV & public applicant portfolio builder"
    ],
    stack: ["TypeScript", "React", "NestJS", "PostgreSQL"],
    repoUrl: "https://github.com/zeedan27/skillverify-platform"
  },
  {
    id: "proj-daak",
    name: "Daak: Crime & SOS Network",
    category: "Full-Stack & Mobile",
    status: "FULL-STACK",
    language: "TypeScript / Dart",
    summary:
      "Public safety web & mobile platform supporting anonymous crime reports, live neighborhood heatmaps, and real-time police SOS alert monitoring.",
    highlights: [
      "5-second countdown distress signal synced to /police/sos",
      "Role-gated Firestore security rules for police verification"
    ],
    stack: ["Next.js", "Flutter", "Firebase", "Firestore"],
    repoUrl: "https://github.com/zeedan27/Daak"
  },
  {
    id: "proj-bcf-2026",
    name: "bcf-2026-hackathon-preliminary",
    category: "AI & Security",
    status: "HACKATHON",
    language: "Python",
    summary:
      "BUET CSE FEST 2026 AI / API preliminary round repository integrating external API specs, database queries, and automated validation tests.",
    highlights: [
      "Rapid API & database prototyping under timed competition rules",
      "Structured test-harness verification"
    ],
    stack: ["Python", "REST APIs", "Database Setup"],
    repoUrl: "https://github.com/zeedan27/bcf-2026-hackathon-preliminary"
  },
  {
    id: "proj-neetcode",
    name: "neetcode-submissions",
    category: "Systems & Skills",
    status: "DSA LOG",
    language: "Python",
    summary:
      "Automated repository tracking accepted NeetCode.io algorithmic solutions organized by data structure and problem pattern.",
    highlights: [
      "Automated GitHub sync on accepted submissions",
      "Supports ongoing DSA mentorship & complexity practice"
    ],
    stack: ["Python", "Algorithms", "Data Structures", "GitHub Sync"],
    repoUrl: "https://github.com/zeedan27/neetcode-submissions"
  }
];

export const workflowsData = [
  {
    id: "wf-n8n-triage",
    code: "WF-01 // N8N AUTOMATION",
    title: "Form & Telegram AI Triage Pipeline",
    platform: "n8n Self-Hosted / Cloud",
    summary:
      "Automated intake workflow capturing structured form or Telegram triggers, classifying intent, and routing formatted alerts without manual triage.",
    trigger: "n8n Form Trigger / Telegram Webhook",
    nodes: ["Payload Validator", "Context Router", "LLM / Rule Classifier", "Alert Dispatch"],
    output: "Structured Notification & Logged Record"
  },
  {
    id: "wf-scope-gates",
    code: "WF-02 // S.C.O.P.E. PIPELINE",
    title: "Gated 5-Phase Software Delivery Flow",
    platform: "S.C.O.P.E. Protocol",
    summary:
      "Deterministic engineering pipeline enforcing schema contracts and 12-layer infrastructure checks before allowing source file generation.",
    trigger: "Specification Brief + Layer Matrix",
    nodes: ["Gate 1: Schema Lock", "5-File Vertical Slice", "Test & Build Check", "Gate 2: Prod Audit"],
    output: "Verified Release + Architecture SOPs"
  },
  {
    id: "wf-baton-sync",
    code: "WF-03 // PARALLEL AGENTS",
    title: "Baton-Pass Cross-Chat Error Handoff",
    platform: "CHATS.md Registry",
    summary:
      "Prevents context rot by splitting frontend, backend, and verification agents into isolated path-owned lanes with structured R<n> handoffs.",
    trigger: "Out-of-Scope Error / Context Threshold",
    nodes: ["Lane Ownership Check", "Append R<n> Request", "Scoped Handoff Brief", "80-Line Archive"],
    output: "Zero File-Collision Multi-Agent Merge"
  },
  {
    id: "wf-neetcode-sync",
    code: "WF-04 // GIT AUTOMATION",
    title: "NeetCode → GitHub Topic Sync",
    platform: "GitHub Sync Automation",
    summary:
      "Continuously archives accepted algorithmic problem submissions into topic-indexed repository folders for versioned interview readiness.",
    trigger: "Accepted Code Submission",
    nodes: ["Status Filter", "Topic Folder Mapper", "Commit Formatter", "Push to zeedan27"],
    output: "Clean Topic-Indexed DSA History"
  }
];

export const skillsData = [
  {
    id: "languages",
    label: "01 // LANGUAGES",
    items: ["Python", "TypeScript", "JavaScript (ES6+)", "Java", "C++", "C", "SQL"]
  },
  {
    id: "frontend-mobile",
    label: "02 // FRONTEND & MOBILE",
    items: ["HTML5 & CSS3", "React", "Next.js", "React Native (Expo)", "Flutter", "Tailwind CSS", "Vite"]
  },
  {
    id: "backend-db",
    label: "03 // BACKEND & DATA",
    items: ["Node.js", "Express.js", "NestJS", "FastAPI", "PostgreSQL", "Prisma", "Firebase / Firestore"]
  },
  {
    id: "ai-security",
    label: "04 // AI, ML & SECURITY",
    items: [
      "PyTorch",
      "scikit-learn",
      "Gemini Multimodal",
      "Ollama / Llama-3",
      "ManimCE",
      "Prompt Injection Eval",
      "Deterministic Agent SOPs"
    ]
  },
  {
    id: "infra-tools",
    label: "05 // INFRA & AUTOMATION",
    items: ["Git & GitHub", "Cloudflare Pages", "n8n Workflows", "Docker", "Linux CLI", "PyMuPDF"]
  }
];

export const contactData = {
  eyebrow: "06 // CONTACT & DOSSIER",
  heading: "Ready for software engineering internships & full-stack roles.",
  subtext:
    "Based in Dhaka, Bangladesh · Available for engineering teams building deterministic AI tooling, resilient backends, and high-craft web applications.",
  email: "ztkhan000@gmail.com",
  phone: "+880-1738-262554",
  location: "Notun Bazar, Dhaka, Bangladesh",
  githubUrl: "https://github.com/zeedan27",
  linkedinUrl: "https://linkedin.com/in/zesrabkhan",
  cvPdfUrl: "/Zesrab-Tanjeel-Khan_CV.pdf",
  cvHtmlUrl: "/cv.html"
};
