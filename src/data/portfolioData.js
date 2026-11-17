export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Projects", href: "#projects" },
  { label: "Workflows", href: "#workflows" }
];

export const heroData = {
  logoName: "Zesrab Khan",
  notice: "UIU CSE senior · 3.95 CGPA · Spring 2025 2× UTA",
  headline: "Full-stack and security engineer",
  description:
    "Building RAG study compilers, adversarial LLM evaluation harnesses, and offline-first civic apps from Dhaka.",
  primaryCta: { label: "Download CV", href: "/Zesrab-Tanjeel-Khan_CV.pdf", external: true },
  secondaryCta: { label: "Open case logs", href: "#cases" },
  frontImage: "/front.jpg",
  backImage: "/back.jpg",
  stats: [
    { label: "UIU CGPA", value: "3.95 / 4.00" },
    { label: "Teaching", value: "2× CSE Lab UTA" },
    { label: "GitHub", value: "10+ public repos" }
  ]
};

export const aboutData = {
  heading: "About UIU background and systems teaching",
  summary:
    "Tenth-trimester Computer Science and Engineering student at United International University. Most of my engineering hours go into full-stack TypeScript web software, local-first Android and Kotlin builds, and Python evaluation pipelines.",
  exploringNote:
    "Currently exploring research papers in indirect LLM prompt injection, adversarial evaluation, and multimodal document intelligence.",
  education: {
    institution: "United International University (UIU)",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2022 – Present (10th Trimester)",
    cgpa: "3.95 / 4.00"
  },
  experience: [
    {
      course: "CSE 2216",
      role: "Undergraduate Teaching Assistant — Data Structures & Algorithms I Lab",
      term: "Spring 2025",
      detail: "Debugged C++ pointers, trees, and graph traversals with 40+ undergraduates during timed lab exams."
    },
    {
      course: "CSE 1116",
      role: "Undergraduate Teaching Assistant — Object-Oriented Programming Lab",
      term: "Spring 2025",
      detail: "Reviewed Java inheritance, Swing GUIs, and exception handling assignments during weekly lab sessions."
    }
  ],
  diagram: {
    layout: "hub",
    motion: { pulse: "none" },
    alt: "Zesrab Tanjeel Khan engineering pillars connecting UIU CSE coursework, DSA and OOP teaching, RAG systems, and LLM security.",
    center: { label: "UIU CSE", icon: "github" },
    spokes: [
      { label: "DSA", icon: "c-plusplus" },
      { label: "OOP", icon: "java" },
      { label: "RAG", icon: "typescript" },
      { label: "Eval", icon: "python" },
      { label: "Docker", icon: "docker" }
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
    id: "papyr",
    spineCode: "CASE 01",
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
    spineCode: "CASE 02",
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
  },
  {
    id: "skillverify",
    spineCode: "CASE 03",
    title: "SkillVerify",
    subtitle: "Sandboxed code evaluation",
    year: "2025",
    repoUrl: "https://github.com/zeedan27/skillverify-platform",
    stack: ["TypeScript", "Docker", "PostgreSQL", "React"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Take-home coding assessments rewarded copy-pasted boilerplate",
        body: "Reviewing junior screening tasks showed candidates submitting identical repositories with zero test coverage, while automated judges lacked rubric traceability.",
        artifact: "audit -> 60% submissions failed hidden boundary inputs"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Binary pass/fail hides time complexity and error handling",
        body: "Standard online judges only printed Accepted or Wrong Answer, giving hiring teams zero visibility into edge-case resilience, memory caps, or code structure.",
        artifact: "gap -> missing deterministic resource telemetry per run"
      },
      build: {
        stage: "03 · The Build",
        heading: "Isolated container runner with weighted rubric scoring",
        body: "Built ephemeral Docker sandboxes that execute untrusted submissions with strict CPU/RAM quotas, streaming stdout/stderr logs into a structured PostgreSQL rubric table.",
        artifact: "runner -> 1.8s median cold sandbox execution"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Orphaned child processes stalled container cleanup",
        body: "Infinite loops inside user binaries left zombie subprocesses holding container file locks. Switched to cgroup pid limits and SIGKILL process-group reaping on timeout.",
        artifact: "cgroup reap -> 100% container teardown under timeout load"
      }
    }
  },
  {
    id: "daak",
    spineCode: "CASE 04",
    title: "Daak SOS",
    subtitle: "Offline civic emergency relay",
    year: "2025",
    repoUrl: "https://github.com/zeedan27/Daak",
    stack: ["Kotlin", "Android", "PostGIS", "Supabase"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Emergency reporting apps fail when mobile data drops",
        body: "During crowded transit incidents in Dhaka, cellular data stalls first, rendering web-only panic buttons useless when someone needs nearby verification fastest.",
        artifact: "field test -> 3G/4G packet timeout in congested zones"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Centralized dispatch portals miss local SMS fallback",
        body: "Consumer reporting tools assumed persistent HTTPS websockets, omitting compressed SMS coordinate payloads and spatial clustering for false-alarm filtering.",
        artifact: "gap -> zero offline transport fallback in local safety apps"
      },
      build: {
        stage: "03 · The Build",
        heading: "Kotlin dual-transport dispatcher backed by PostGIS zones",
        body: "Implemented a hardware-button trigger that attempts HTTPS geofenced broadcast first and falls back to compact GPS coordinates over native SMS.",
        artifact: "daak/relay -> 118-byte compressed SOS payload fits 1 SMS"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Background GPS polling drained student battery rapidly",
        body: "Continuous high-accuracy location listeners halved battery life in four hours. Replaced polling with passive geofence transitions and on-trigger fused location bursts.",
        artifact: "fused burst -> under 2% idle daily battery draw"
      }
    }
  },
  {
    id: "shishucare",
    spineCode: "CASE 05",
    title: "Shishu Care",
    subtitle: "Offline maternal health tracker",
    year: "2025",
    repoUrl: "https://github.com/zeedan27/ShishuCare",
    stack: ["Kotlin", "Room SQLite", "WorkManager", "REST"],
    pages: {
      observation: {
        stage: "01 · Observation",
        heading: "Community clinics track immunization schedules on paper cards",
        body: "Visiting peri-urban healthcare records showed missed follow-up vaccines whenever paper cards were misplaced or rural clinics lost connectivity during intake.",
        artifact: "clinic flow -> paper ledger re-entry delayed updates"
      },
      research: {
        stage: "02 · Research & Gap",
        heading: "Online-first patient portals lose unsubmitted triage forms",
        body: "Web forms cleared partial child growth entries whenever session tokens expired offline, forcing health workers to re-interview mothers.",
        artifact: "gap -> zero deterministic conflict resolution offline"
      },
      build: {
        stage: "03 · The Build",
        heading: "Room SQLite local source with WorkManager delta sync",
        body: "Architected an Android client where every vaccine milestone writes immediately to encrypted local Room tables and queues idempotent deltas when connectivity returns.",
        artifact: "sync engine -> zero lost intake forms across offline drops"
      },
      frictionFix: {
        stage: "04 · Friction & Fix",
        heading: "Duplicate patient rows appeared after multi-device edits",
        body: "Two nurses editing the same child record offline created colliding primary keys on sync. Introduced UUIDv7 client keys and field-level timestamp reconciliation.",
        artifact: "uuidv7 merge -> deterministic idempotent clinic sync"
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
    id: "prompt-eval-proj",
    shortName: "prompt-eval",
    title: "Benchmark LLMs against indirect prompt injections",
    description:
      "Python evaluation suite running adversarial OWASP payloads and tracking policy bypass latency.",
    repoUrl: "https://github.com/zeedan27/llm-prompt-injection-eval",
    fragment: "terminal-run",
    loop: false,
    groundSeed: 37,
    stack: ["Python", "Ollama", "Pytest"]
  },
  {
    id: "skillverify-proj",
    shortName: "SkillVerify",
    title: "Score untrusted code inside isolated sandboxes",
    description:
      "SkillVerify queues candidate submissions through resource-capped Docker runners with live rubric status.",
    repoUrl: "https://github.com/zeedan27/skillverify-platform",
    fragment: "window",
    loop: false,
    groundSeed: 62,
    stack: ["React", "Docker", "PostgreSQL"]
  },
  {
    id: "daak-proj",
    shortName: "Daak",
    title: "Relay verified alerts across offline Android channels",
    description:
      "Daak SOS and Shishu Care persist local field state in Room SQLite and synchronize deltas when online.",
    repoUrl: "https://github.com/zeedan27/Daak",
    fragment: "checklist",
    loop: false,
    groundSeed: 89,
    stack: ["Kotlin", "Android", "PostGIS"]
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
    items: "TypeScript, JavaScript, Python, C++, Java, Kotlin, SQL",
    icons: [
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "Python", icon: "/assets/icons/python.svg" },
      { name: "C++", icon: "/assets/icons/c-plusplus.svg" },
      { name: "Kotlin", icon: "/assets/icons/kotlin.svg" }
    ]
  },
  {
    category: "Frontend and Mobile",
    items: "React, Vite, HTML5, CSS3, Android Jetpack & Room",
    icons: [
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "Vite", icon: "/assets/icons/vitejs.svg" },
      { name: "JavaScript", icon: "/assets/icons/javascript.svg" }
    ]
  },
  {
    category: "Backend and Data",
    items: "FastAPI, Node.js, PostgreSQL, Supabase, SQLite, PostGIS",
    icons: [
      { name: "FastAPI", icon: "/assets/icons/fastapi.svg" },
      { name: "PostgreSQL", icon: "/assets/icons/postgres.svg" },
      { name: "Supabase", icon: "/assets/icons/supabase.svg" }
    ]
  },
  {
    category: "AI and Security",
    items: "Prompt injection evaluation, RAG chunking, LangChain, PyTorch, Ollama",
    icons: [
      { name: "PyTorch", icon: "/assets/icons/pytorch.svg" },
      { name: "LangChain", icon: "/assets/icons/langchain.svg" },
      { name: "Ollama", icon: "/assets/icons/ollama.svg" }
    ]
  },
  {
    category: "Infrastructure",
    items: "Docker, Linux, Git, GitHub Actions, n8n workflows, Cloudflare Pages",
    icons: [
      { name: "Docker", icon: "/assets/icons/docker.svg" },
      { name: "Linux", icon: "/assets/icons/linux-tux.svg" },
      { name: "n8n", icon: "/assets/icons/n8n.svg" },
      { name: "Cloudflare", icon: "/assets/icons/cloudflare.svg" }
    ]
  }
];

export const contactData = {
  heading: "Open for engineering internships and security roles",
  lead: "Based in Dhaka (UTC+6). Direct replies within 24 hours via ztkhan000@gmail.com.",
  email: "ztkhan000@gmail.com",
  phone: "+880-1738-262554",
  location: "Dhaka, Bangladesh",
  githubUrl: "https://github.com/zeedan27",
  linkedinUrl: "https://linkedin.com/in/zesrabkhan",
  cvPdfUrl: "/Zesrab-Tanjeel-Khan_CV.pdf",
  cvHtmlUrl: "/cv.html"
};
