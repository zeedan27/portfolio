export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Projects", href: "#projects" },
  { label: "Workflows", href: "#workflows" }
];

export const heroData = {
  logoName: "Zesrab Khan",
  notice: "UIU B.Sc. Data Science · 3.95 CGPA · CSE Undergraduate Assistant",
  headline: "Data science and full-stack engineer",
  description:
    "Building full-stack TypeScript web platforms with Next.js, NestJS, and React alongside LLM cascade pipelines for NLP benchmark auditing in Dhaka.",
  primaryCta: { label: "Download CV", href: "/cv/Zesrab-Tanjeel-Khan_CV.pdf", external: true },
  secondaryCta: { label: "Open case logs", href: "#cases" },
  frontImage: "/images/front.jpg",
  backImage: "/images/back.jpg",
  stats: [
    { label: "UIU CGPA", value: "3.95 / 4.00" },
    { label: "Experience", value: "6-Course CSE UGA" },
    { label: "Research", value: "PERF NLP Audit" }
  ]
};

export const aboutData = {
  heading: "About UIU data science, research and teaching",
  summary:
    "B.Sc. in Data Science student at United International University (3.95 CGPA, expected Feb 2027) with hands-on web development experience, seeking a software engineering internship to build production-quality full-stack products.",
  exploringNote:
    "In-progress research with Asst. Prof. Md. Tarek Hasan (Are NLP Gold Standards Truly Golden?): built the PERF LLM cascade and prompt-ensemble re-annotation pipeline across SST-2, SNLI, and HateXplain. Certified in IBM Data Science Foundations (May 2024).",
  education: {
    institution: "United International University (UIU)",
    degree: "B.Sc. in Data Science · HSC & SSC GPA 5.00/5.00",
    period: "Oct 2022 - Present (Expected Feb 2027)",
    cgpa: "3.95 / 4.00"
  },
  experience: [
    {
      course: "Dept. of CSE · 6 Core Lab Courses",
      role: "Undergraduate Assistant (UGA) - Lab Sessions",
      term: "Sep 2024 - Present",
      detail: "Assisted faculty in lab sessions across SPL, OOP, DSA I & II, DBMS, and Software Engineering at UIU."
    },
    {
      course: "Dept. of CSE · 1-on-1 Consultations",
      role: "Undergraduate Assistant (UGA) - Student Mentorship",
      term: "Sep 2024 - Present",
      detail: "Conducted 1-on-1 consultations in C/C++, Java, and SQL, guiding students through debugging, algorithm design, and ER/schema modeling."
    }
  ],
  diagram: {
    layout: "hub",
    motion: { pulse: "none" },
    alt: "Zesrab Tanjeel Khan engineering pillars connecting UIU Data Science, Next.js and NestJS web platforms, PERF NLP research, and 6-course CSE UGA mentorship.",
    center: { label: "UIU DS", icon: "github" },
    spokes: [
      { label: "TypeScript", icon: "typescript" },
      { label: "React/Next", icon: "react" },
      { label: "PERF NLP", icon: "python" },
      { label: "C++ / DSA", icon: "c-plusplus" },
      { label: "Java / SQL", icon: "java" }
    ]
  },
  stackIcons: [
    { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
    { name: "Python", icon: "/assets/icons/python.svg" },
    { name: "React", icon: "/assets/icons/react.svg" },
    { name: "PostgreSQL", icon: "/assets/icons/postgres.svg" },
    { name: "Docker", icon: "/assets/icons/docker.svg" },
    { name: "n8n", icon: "/assets/icons/n8n.svg" }
  ]
};

export const caseStudyBooks = [
  {
    id: "skillverify",
    spineCode: "CASE 01",
    title: "SkillVerify",
    subtitle: "Automated hiring & skill verification",
    year: "2025",
    repoUrl: "https://github.com/zeedan27/skillverify-platform",
    stack: ["NestJS", "React", "TypeScript", "REST API", "SQL"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Static resumes fail to prove hands-on coding competency",
        body: "Hiring pipelines relied on self-reported CVs and disconnected quiz links without anti-cheat monitoring or tailored learning feedback for applicants.",
        artifact: "skillverify/audit -> unverified claims across applicant submissions"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Standalone quiz tools lack role workflows and CV generation",
        body: "Existing assessment portals separated test execution from personalized learning modules and could not automatically issue verified CVs across role tiers.",
        artifact: "gap -> missing unified applicant, employer, and admin workflows"
      },
      build: {
        stage: "03 · The Build",
        heading: "Full-stack NestJS and React platform with verified CV engine",
        body: "Built dynamic assessment quizzes with anti-cheat monitoring, personalized learning modules, automated verified CV generation, and secure role-based workflows.",
        artifact: "skillverify/api -> NestJS + React RBAC across 3 portal roles"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Tab switches and reload events disrupted active quiz telemetry",
        body: "Candidates switching windows or refreshing mid-quiz risked inconsistent attempt records. Added focus-event anti-cheat logging and server-authoritative timers.",
        artifact: "anti-cheat guard -> deterministic quiz state & verified CV output"
      }
    }
  },
  {
    id: "daak",
    spineCode: "CASE 02",
    title: "DAAK",
    subtitle: "Public safety & SOS web platform",
    year: "2025",
    repoUrl: "https://github.com/zeedan27/Daak",
    stack: ["Next.js", "TypeScript", "Firebase", "React"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Delayed incident reporting leaves communities without live warnings",
        body: "Residents facing safety incidents needed a responsive web platform to file crime reports, trigger SOS alerts, and view real-time public safety updates.",
        artifact: "daak/intake -> fragmented emergency and crime report channels"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Static complaint forms lack real-time SOS synchronization",
        body: "Legacy reporting portals used slow multi-step forms without live Firebase synchronization, instant SOS broadcast, or structured incident monitoring.",
        artifact: "gap -> zero real-time SOS stream or live safety dashboard"
      },
      build: {
        stage: "03 · The Build",
        heading: "Full-stack Next.js, TypeScript, and Firebase safety platform",
        body: "Built DAAK using Next.js, TypeScript, and Firebase to facilitate structured crime reporting, instant SOS alerts, and real-time data management for public safety monitoring.",
        artifact: "daak/firebase -> live SOS alert dispatch & real-time crime feed"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Rapid repeated SOS triggers created duplicate live alert rows",
        body: "High-stress panic clicks and unvalidated report payloads risked flooding live listeners. Added TypeScript schema validation and idempotent SOS dispatch guards.",
        artifact: "fix -> deduplicated Firebase SOS writes & verified status updates"
      }
    }
  },
  {
    id: "perf-nlp",
    spineCode: "CASE 03",
    title: "PERF NLP",
    subtitle: "LLM cascade benchmark re-annotation",
    year: "2026",
    repoUrl: "https://github.com/zeedan27",
    stack: ["Python", "LLM Cascade", "Prompt Ensemble", "SST-2", "SNLI", "HateXplain"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Are NLP gold-standard benchmark labels truly golden?",
        body: "Investigating standard NLP benchmarks under Asst. Prof. Md. Tarek Hasan exposed noisy and ambiguous ground-truth labels across sentiment, NLI, and hate-speech datasets.",
        artifact: "research audit -> label noise in SST-2, SNLI & HateXplain"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Single-pass LLM relabeling amplifies single-prompt bias",
        body: "Using one prompt template or a single model pass to audit thousands of benchmark rows either missed subtle annotation errors or wasted inference budget.",
        artifact: "gap -> single-prompt judges drift on borderline gold labels"
      },
      build: {
        stage: "03 · The Build",
        heading: "LLM cascade and prompt-ensemble re-annotation pipeline (PERF)",
        body: "Developed the PERF pipeline combining multi-stage LLM cascades with prompt-ensemble consensus to audit and refine ground-truth labels across SST-2, SNLI, and HateXplain.",
        artifact: "perf/cascade.py -> ensemble consensus across 3 NLP benchmarks"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Disputed multi-annotator rows caused ensemble tie votes",
        body: "Ambiguous entailment pairs in SNLI and rationale spans in HateXplain produced split ensemble votes. Added confidence-weighted tie-breaking and adjudication prompts.",
        artifact: "adjudicator -> deterministic ground-truth refinement on ties"
      }
    }
  },
  {
    id: "papyr",
    spineCode: "CASE 04",
    title: "Papyr",
    subtitle: "Chunked RAG exam compiler",
    year: "2025",
    repoUrl: "https://github.com/zeedan27",
    stack: ["TypeScript", "React", "Python", "FastAPI", "SQLite"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Students drowned in unindexed slide decks before midterms",
        body: "Watching classmates prepare for UIU exams showed the same bottleneck: five 80-page PDF slide decks open at once, with zero fast way to drill past question patterns against lecture citations.",
        artifact: "papyr/ingest/scanner.ts -> 412 raw PDF pages queued"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Naive cloud wrappers dropped formulas and hallmarked wrong pages",
        body: "Existing PDF summarizers uploaded entire syllabi into single prompts, losing page numbers, mangling complexity notation, and billing tokens repeatedly for static lecture slides.",
        artifact: "benchmark -> 38% citation drift in unchunked 64k context calls"
      },
      build: {
        stage: "03 · The Build",
        heading: "Local heading-aware chunking paired with FastAPI retrieval",
        body: "Built an ingestion worker that splits decks by slide header hierarchy, indexes embeddings locally in SQLite, and compiles timed quiz banks citing exact slide numbers.",
        artifact: "papyr/worker.ts -> query latency 140ms p95 across 12 decks"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Scanned image handouts returned empty text layers",
        body: "Course packets exported as flat bitmaps broke text extraction silently. Added a page-density gate that routes sparse pages to OCR fallback before indexing.",
        artifact: "fix commit -> zero silent empty chunks on scanned PDFs"
      }
    }
  },
  {
    id: "scope-baton",
    spineCode: "CASE 05",
    title: "S.C.O.P.E.",
    subtitle: "Deterministic agent gates",
    year: "2026",
    repoUrl: "https://github.com/zeedan27/scope-skill",
    stack: ["Markdown SOP", "Node.js", "Git", "CHATS.md"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Long coding sessions drifted away from schema contracts",
        body: "Across multi-hour AI-assisted builds, assistants silently invented extra CSS tokens, rewrote working APIs, and modified overlapping files across parallel chat windows.",
        artifact: "session audit -> 4 conflicting edits in shared styles"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Single-prompt rules decayed once context compacted",
        body: "Static system instructions faded after tool outputs stacked up. Nothing enforced a hard specification gate or clear file ownership between parallel sessions.",
        artifact: "gap -> zero machine-checkable boundary before edits"
      },
      build: {
        stage: "03 · The Build",
        heading: "Five-phase S.C.O.P.E. workflow and CHATS.md lane locking",
        body: "Authored scope-skill and baton-pass-skill so every vertical slice declares a schema contract, file ownership lanes, and mandatory build plus browser verification gates.",
        artifact: "scope-skill + baton-pass-skill -> 0 merge collisions across slices"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Strict upfront gates slowed quick UI hotfixes",
        body: "Applying heavy governance to tiny copy edits added friction. Split rules into Tier 0 quick fixes versus Tier 1/2 multi-file slices with explicit escalation triggers.",
        artifact: "tiered gate -> sub-2m hotfixes, gated architectural slices"
      }
    }
  }
];

export const projectsData = [
  {
    id: "papyr-proj",
    shortName: "Papyr",
    title: "Compile slide decks into cited study quizzes",
    description:
      "Papyr splits multi-deck course PDFs by slide structure and serves fast SQLite retrieval with page citations.",
    repoUrl: "https://github.com/zeedan27",
    fragment: "diff-review",
    loop: true,
    groundSeed: 14,
    stack: ["TypeScript", "FastAPI", "SQLite"]
  },
  {
    id: "perf-nlp-proj",
    shortName: "PERF NLP",
    title: "Audit NLP benchmark gold labels with LLM cascades",
    description:
      "PERF runs an LLM cascade and prompt-ensemble re-annotation pipeline across SST-2, SNLI, and HateXplain datasets.",
    repoUrl: "https://github.com/zeedan27",
    fragment: "terminal-run",
    loop: false,
    groundSeed: 37,
    stack: ["Python", "LLM Cascade", "NLP"]
  },
  {
    id: "skillverify-proj",
    shortName: "SkillVerify",
    title: "Automate skill verification and verified CV generation",
    description:
      "Full-stack NestJS and React platform with anti-cheat assessment quizzes, personalized learning modules, and role-based workflows.",
    repoUrl: "https://github.com/zeedan27/skillverify-platform",
    fragment: "window",
    loop: false,
    groundSeed: 62,
    stack: ["NestJS", "React", "TypeScript"]
  },
  {
    id: "daak-proj",
    shortName: "DAAK",
    title: "Coordinate crime reporting and real-time SOS alerts",
    description:
      "Full-stack Next.js, TypeScript, and Firebase web platform for public safety incident reporting and real-time data management.",
    repoUrl: "https://github.com/zeedan27/Daak",
    fragment: "checklist",
    loop: false,
    groundSeed: 89,
    stack: ["Next.js", "TypeScript", "Firebase"]
  }
];

export const archiveRepos = [
  {
    name: "scope-skill",
    summary: "Five-phase agent governance gates, schema contracts, and verification checklists.",
    tag: "AI Agents",
    url: "https://github.com/zeedan27/scope-skill"
  },
  {
    name: "baton-pass-skill",
    summary: "Parallel multi-chat registry with file path ownership locks and request routing.",
    tag: "Tooling",
    url: "https://github.com/zeedan27/baton-pass-skill"
  },
  {
    name: "rea-web-skill",
    summary: "Runtime DOM and bundle reverse-engineering workflow for web inspection.",
    tag: "Web Systems",
    url: "https://github.com/zeedan27/rea-web-skill"
  },
  {
    name: "bcf-2026-hackathon-preliminary",
    summary: "Rapid prototype built under 24-hour hackathon constraints with full deploy pipeline.",
    tag: "Hackathon",
    url: "https://github.com/zeedan27/bcf-2026-hackathon-preliminary"
  },
  {
    name: "neetcode-submissions",
    summary: "Structured C++ and Python solutions tracking algorithm patterns for DSA coursework.",
    tag: "Algorithms",
    url: "https://github.com/zeedan27/neetcode-submissions"
  }
];

export const workflowsData = [
  {
    id: "n8n-triage",
    name: "Webhook lead triage",
    summary: "Classifies inbound project requests, writes Gmail OAuth drafts, and logs rows in Postgres.",
    tag: "n8n + OpenAI",
    diagram: {
      layout: "lanes",
      alt: "Inbound webhook enters classifier and branches into Gmail draft, Postgres log, and Telegram ping.",
      input: { label: "Hook", icon: "n8n", sub: "/intake", kindCompact: "pill" },
      core: { label: "Triage", icon: "openai", kindCompact: "core-pill" },
      lanes: [
        { label: "Gmail", icon: "gmail", done: true, sub: "Draft", kindCompact: "pill" },
        { label: "DB", icon: "postgres", done: true, sub: "Log", kindCompact: "pill" },
        { label: "Ping", icon: "telegram", done: true, sub: "Alert", kindCompact: "pill" }
      ]
    }
  },
  {
    id: "eval-digest",
    name: "Security eval digest",
    summary: "Nightly adversarial prompt suite compares block rates across Ollama models and opens GitHub issues.",
    tag: "Python + GitHub",
    diagram: {
      layout: "lanes",
      alt: "GitHub commit triggers Ollama test runner and outputs regression summary, SQLite metrics, and Slack alert.",
      input: { label: "Push", icon: "github", sub: "main", kindCompact: "pill" },
      core: { label: "Eval", icon: "ollama", kindCompact: "core-pill" },
      lanes: [
        { label: "Stats", icon: "postgres", done: true, sub: "Rate", kindCompact: "pill" },
        { label: "Note", icon: "notion", done: true, sub: "Diff", kindCompact: "pill" },
        { label: "Slack", icon: "slack", done: true, sub: "Alert", kindCompact: "pill" }
      ]
    }
  },
  {
    id: "scope-runner",
    name: "Deterministic slice gate",
    summary: "Validates data schemas, copy lint, static builds, and real-browser layout metrics before commits.",
    tag: "Node + Chrome",
    diagram: {
      layout: "lanes",
      alt: "Commit change runs schema check, copy linter, and Vite build before Cloudflare deploy.",
      input: { label: "Diff", icon: "github", sub: "slice", kindCompact: "pill" },
      core: { label: "Gate", icon: "docker", kindCompact: "core-pill" },
      lanes: [
        { label: "Tests", icon: "typescript", done: true, sub: "Pass", kindCompact: "pill" },
        { label: "Build", icon: "vitejs", done: true, sub: "Dist", kindCompact: "pill" },
        { label: "Edge", icon: "cloudflare", done: true, sub: "Live", kindCompact: "pill" }
      ]
    }
  },
  {
    id: "neetcode-sync",
    name: "Coursework solution sync",
    summary: "Normalizes verified DSA implementations from lab sessions directly into indexed repository directories.",
    tag: "C++ + Git",
    diagram: {
      layout: "lanes",
      alt: "Passed lab test formats C++ or Python solution, commits to GitHub, and updates study tracker.",
      input: { label: "Run", icon: "python", sub: "DSA", kindCompact: "pill" },
      core: { label: "Sync", icon: "n8n", kindCompact: "core-pill" },
      lanes: [
        { label: "Repo", icon: "github", done: true, sub: "Push", kindCompact: "pill" },
        { label: "Docs", icon: "notion", done: true, sub: "Index", kindCompact: "pill" },
        { label: "Ping", icon: "telegram", done: true, sub: "Done", kindCompact: "pill" }
      ]
    }
  }
];

export const skillsData = [
  {
    category: "Languages",
    items: "Python, JavaScript, TypeScript, C/C++, Java, SQL, HTML, CSS",
    icons: [
      { name: "Python", icon: "/assets/icons/python.svg" },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
      { name: "C++", icon: "/assets/icons/c-plusplus.svg" },
      { name: "Java", icon: "/assets/icons/java.svg" }
    ]
  },
  {
    category: "Frameworks and Web",
    items: "React, Next.js, NestJS, REST APIs, Role-Based Authentication, Responsive Web UI",
    icons: [
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "Vite", icon: "/assets/icons/vitejs.svg" }
    ]
  },
  {
    category: "Databases and Backend",
    items: "Firebase, SQL, ER/Schema Modeling, FastAPI, PostgreSQL",
    icons: [
      { name: "PostgreSQL", icon: "/assets/icons/postgres.svg" },
      { name: "Supabase", icon: "/assets/icons/supabase.svg" },
      { name: "FastAPI", icon: "/assets/icons/fastapi.svg" }
    ]
  },
  {
    category: "Data Science and ML",
    items: "LLM Cascades (PERF), Data Analysis, CNNs, Image Segmentation, Morphological Operations",
    icons: [
      { name: "PyTorch", icon: "/assets/icons/pytorch.svg" },
      { name: "Python", icon: "/assets/icons/python.svg" },
      { name: "Hugging Face", icon: "/assets/icons/hugging-face.svg" }
    ]
  },
  {
    category: "Tools and Certifications",
    items: "Git, GitHub, VS Code, Claude Code, AI-Assisted Development · IBM Data Science Foundations",
    icons: [
      { name: "GitHub", icon: "/assets/icons/github.svg" },
      { name: "Anthropic", icon: "/assets/icons/anthropic.svg" },
      { name: "Docker", icon: "/assets/icons/docker.svg" },
      { name: "Cloudflare", icon: "/assets/icons/cloudflare.svg" }
    ]
  }
];

export const contactData = {
  heading: "Seeking a software engineering internship",
  lead: "Based in Mohammadpur, Dhaka (UTC+6). Direct replies within 24 hours via ztkhan000@gmail.com.",
  email: "ztkhan000@gmail.com",
  phone: "+880 1738-262554",
  location: "Mohammadpur, Dhaka",
  githubUrl: "https://github.com/zeedan27",
  linkedinUrl: "https://linkedin.com/in/zesrabkhan",
  cvPdfUrl: "/cv/Zesrab-Tanjeel-Khan_CV.pdf"
};
