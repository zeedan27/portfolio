export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Projects", href: "#projects" },
  { label: "Workflows", href: "#workflows" }
];

export const heroData = {
  logoName: "Zesrab Khan",
  notice: "UIU CSE · Data Science Major · 3.95 CGPA · CSE UGA",
  headline: "Full-stack and AI systems engineer",
  description:
    "Computer Science and Engineering undergraduate (Data Science major) building proctored hiring platforms, civic dispatch systems, and interactive AI workspaces in Dhaka.",
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
  heading: "Background, CSE teaching and NLP research",
  summary:
    "Computer Science and Engineering undergraduate majoring in Data Science at United International University, seeking a software engineering internship to build production-quality products.",
  education: {
    institution: "United International University (UIU)",
    degree: "B.Sc. in Computer Science and Engineering",
    major: "Major in Data Science",
    period: "Oct 2022 - Present (Expected Feb 2027)",
    cgpa: "3.95 / 4.00",
    prior: "HSC (Saint Joseph) & SSC (JESC): GPA 5.00 / 5.00"
  },
  workExperience: {
    role: "Undergraduate Assistant (UGA)",
    organization: "Dept. of CSE, United International University",
    period: "Sep 2024 - Present",
    courses: ["SPL", "OOP", "DSA I", "DSA II", "DBMS", "Software Eng."],
    highlights: [
      "Assisted faculty in weekly laboratory sessions across 6 core CSE courses from structured programming to database systems.",
      "Conducted 1-on-1 consultations in C/C++, Java, and SQL, guiding students through debugging, algorithm design, and ER/schema modeling."
    ]
  },
  research: {
    title: "Are NLP Gold Standards Truly Golden?",
    status: "In progress",
    supervisor: "Asst. Prof. Md. Tarek Hasan, UIU",
    pipeline: "PERF (LLM Cascade & Prompt-Ensemble Re-Annotation)",
    datasets: ["SST-2", "SNLI", "HateXplain"],
    summary:
      "Built a multi-stage LLM cascade and prompt-ensemble re-annotation pipeline (PERF) to audit and refine noisy ground-truth benchmark labels.",
    certification: "IBM Data Science Foundations: Tools, Careers & Real-World Applications (May 2024)"
  }
};

export const caseStudyBooks = [
  {
    id: "skillverify",
    spineCode: "CASE 01",
    title: "SkillVerify",
    subtitle: "Proctored hiring & verified credentials",
    year: "2026",
    icon: "/assets/icons/typescript.svg",
    repoUrl: "https://github.com/zeedan27/skillverify",
    stack: ["NestJS 10", "React 18", "TypeScript", "MongoDB", "Puppeteer"],
    stages: [
      {
        step: "01 · What I Noticed",
        shortTab: "01 Context",
        heading: "Self-reported resumes hid real skill gaps",
        body: "Entry-level hiring pipelines drowned in near-identical static PDFs. Recruiters spent hours screening inflated skill lists because there was no lightweight way to verify hands-on competency before an interview.",
        contextNote: "Context -> applicants lacked credible proof; employers lacked signal"
      },
      {
        step: "02 · Why Existing Tools Missed",
        shortTab: "02 Gap",
        heading: "Existing quiz sites punished near-miss learners",
        body: "Traditional assessment portals treated hiring as binary pass or fail. A candidate who barely missed a cutoff got rejected silently with zero structured guidance on which concepts to close before reapplying.",
        contextNote: "Gap -> no closed loop between assessment and remedial learning"
      },
      {
        step: "03 · How I Framed It",
        shortTab: "03 Concept",
        heading: "Proctored assessments plus a second-chance grooming track",
        body: "I designed SkillVerify so passing a role-specific proctored quiz unlocks application submission, while a failed first attempt unlocks an employer-curated grooming track with checkpoint micro-quizzes that earn a second attempt.",
        contextNote: "Concept -> verify real skill first, mentor near-misses second"
      },
      {
        step: "04 · What I Built",
        shortTab: "04 Build",
        heading: "Re-architecting from PHP v1 into a typed TypeScript monorepo",
        body: "After validating the idea in an early PHP prototype, I rebuilt SkillVerify as a TypeScript monorepo sharing contracts across NestJS, React, MongoDB, Puppeteer verified CV rendering, and cryptographic Bronze, Silver, and Gold badges.",
        contextNote: "Architecture -> @skillverify/shared DTOs + NestJS + Puppeteer CV engine"
      },
      {
        step: "05 · Product Tension",
        shortTab: "05 Challenge",
        heading: "Keeping public badge verification useful without leaking private data",
        body: "Employers needed instant URL verification for earned skill badges and generated CVs, yet candidates could not have personal phone numbers, email addresses, or competing peer rankings exposed publicly.",
        contextNote: "Tension -> public credential trust vs. candidate PII and rank privacy"
      },
      {
        step: "06 · How I Solved It",
        shortTab: "06 Resolution",
        heading: "Scoped company leaderboards and privacy-safe /verify/:slug pages",
        body: "Separated public verification pages backed by 12-character hex badge codes and zero contact PII from strictly scoped employer leaderboards where applicants only ever see their own rank and score.",
        contextNote: "Outcome -> tamper-proof public verification with strict tenant privacy"
      }
    ]
  },
  {
    id: "daak",
    spineCode: "CASE 02",
    title: "Daak v2",
    subtitle: "Bangladesh civic dispatch & safety",
    year: "2026",
    icon: "/assets/icons/react.svg",
    repoUrl: "https://github.com/zeedan27/daak-app",
    stack: ["Next.js 16", "Expo", "FastAPI", "Supabase PostGIS"],
    stages: [
      {
        step: "01 · What I Noticed",
        shortTab: "01 Context",
        heading: "Emergency reporting in Dhaka lacked unified citizen-to-police coordination",
        body: "During street incidents, citizens rarely know the nearest Thana jurisdiction or how to share verified live context, while local responders deal with fragmented phone tips without spatial awareness.",
        contextNote: "Context -> disconnected citizen reporting and police dispatch"
      },
      {
        step: "02 · Why Existing Tools Missed",
        shortTab: "02 Gap",
        heading: "Unfiltered panic buttons overwhelm responders with false alarms",
        body: "Simple SOS apps treat every single tap as an emergency with no community corroboration or false-report scoring, quickly eroding dispatcher trust when accidental triggers or prank reports arrive.",
        contextNote: "Gap -> zero spatial corroboration or structured triage signal"
      },
      {
        step: "03 · How I Framed It",
        shortTab: "03 Approach",
        heading: "Dual-surface civic dispatch backed by community corroboration",
        body: "I split the system into two synchronized experiences: a fast citizen mobile client for 5-second cancelable SOS and Safe Walk timers, and a 3-zone dispatcher desk ranking nearby reports by credibility and SLA urgency.",
        contextNote: "Approach -> citizen safety app + SLA-tracked police command desk"
      },
      {
        step: "04 · What I Built",
        shortTab: "04 Build",
        heading: "Connecting Next.js, Expo, FastAPI, and PostGIS spatial checks",
        body: "Evolved the early Daak prototype into a monorepo pairing a Next.js command desk, Expo mobile app, FastAPI 5-factor triage service, PostGIS 1 km community corroboration, and Bangla/Banglish DaakAI Thana lookup.",
        contextNote: "Architecture -> Next.js + Expo + FastAPI (40/35/25) + PostGIS"
      },
      {
        step: "05 · Product Tension",
        shortTab: "05 Challenge",
        heading: "Balancing public citizen anonymity against anti-abuse moderation",
        body: "Witnesses hesitate to report local crime if their identity appears on community feeds, yet moderators still need accountability to stop coordinated false alerts from flooding dispatch queues.",
        contextNote: "Tension -> safe anonymous reporting vs. moderation accountability"
      },
      {
        step: "06 · How I Solved It",
        shortTab: "06 Resolution",
        heading: "Public anonymity with internal staff accountability",
        body: "Masked reporter identities as Anonymous Citizen across all public views and PostGIS summaries while retaining protected internal reporter accountability behind role-enforced Supabase policies.",
        contextNote: "Outcome -> safe community reporting without blind moderation"
      }
    ]
  },
  {
    id: "papyr",
    spineCode: "CASE 03",
    title: "Papyr",
    subtitle: "Academic manuscript scrollytelling",
    year: "2026",
    icon: "/assets/icons/python.svg",
    repoUrl: "https://github.com/zeedan27/papyr",
    stack: ["Next.js", "FastAPI", "Manim", "PyMuPDF", "Edge-TTS"],
    stages: [
      {
        step: "01 · What I Noticed",
        shortTab: "01 Context",
        heading: "Dense two-column research papers slow down intuitive understanding",
        body: "Reading NeurIPS or IEEE PDFs means jumping constantly between abstract equations, captions, and appendix notes, making complex methods much harder to grasp than visual mathematical explainers.",
        contextNote: "Context -> static PDFs hide visual intuition behind dense layout"
      },
      {
        step: "02 · Why Existing Tools Missed",
        shortTab: "02 Gap",
        heading: "Text summaries strip out spatial math intuition",
        body: "Standard chat-with-PDF tools flatten derivations into generic bullet lists and lose the step-by-step visual pacing that makes formats like 3Blue1Brown memorable.",
        contextNote: "Gap -> prose summaries fail to animate mathematical structure"
      },
      {
        step: "03 · How I Framed It",
        shortTab: "03 Concept",
        heading: "Turning any manuscript into a 4-act narrated scrollytelling video",
        body: "Instead of another chat sidebar, I framed Papyr as a manuscript-to-cinema pipeline: parse structured sections and equations cleanly, choreograph four grounded narrative acts, and sync neural voiceover with Manim animations.",
        contextNote: "Concept -> structured PDF -> 4-act Director -> synced Manim + audio"
      },
      {
        step: "04 · What I Built",
        shortTab: "04 Build",
        heading: "Four-phase PDF parsing, DirectorAgent scripting, Edge-TTS, and Manim muxing",
        body: "Built a FastAPI backend combining PyMuPDF band-barrier layout extraction, multi-provider DirectorAgent story planning, Edge-TTS word-boundary timestamps, PyAV muxing, and a Next.js scrollytelling reader.",
        contextNote: "Architecture -> PyMuPDF + DirectorAgent + Edge-TTS + Manim + SSE UI"
      },
      {
        step: "05 · Challenge & Resolution",
        shortTab: "05 Resolution",
        heading: "Running LLM-generated Manim code safely without stalling render jobs",
        body: "Generated animation scripts can fail LaTeX compilation or emit unsafe operations. I added an AST security gatekeeper, LaTeX pre-validation, and deterministic procedural fallback scenes so every paper finishes cleanly.",
        contextNote: "Outcome -> sandboxed rendering with zero dead-end paper uploads"
      }
    ]
  },
  {
    id: "mindweave",
    spineCode: "CASE 04",
    title: "MindWeave",
    subtitle: "Source-grounded spatial knowledge canvas",
    year: "2026",
    icon: "/assets/icons/vitejs.svg",
    repoUrl: "https://github.com/zeedan27/mindweave",
    stack: ["Next.js 16", "React 19", "@xyflow/react", "ELK.js", "IndexedDB"],
    stages: [
      {
        step: "01 · What I Noticed",
        shortTab: "01 Context",
        heading: "Learning across PDFs, YouTube lectures, and notes fragments mental models",
        body: "When studying a technical topic from papers, recorded lectures, and personal markdown notes, insight lives across disconnected browser tabs with no clear map of where sources agree or contradict.",
        contextNote: "Context -> fragmented multi-source study across PDFs and video"
      },
      {
        step: "02 · Why Existing Tools Missed",
        shortTab: "02 Gap",
        heading: "Auto-generated mind maps become unreadable spiderwebs with zero citations",
        body: "Most AI diagram tools dump overlapping boxes with hallucinated summaries and no link back to the original PDF page or lecture timestamp, leaving learners unsure what is verified.",
        contextNote: "Gap -> ungrounded AI maps cannot be trusted for real study"
      },
      {
        step: "03 · How I Framed It",
        shortTab: "03 Concept",
        heading: "A source-grounded spatial canvas built for active recall",
        body: "I designed MindWeave around three pillars: multi-source consensus vs. contradiction synthesis, collision-free spatial layouts, and built-in active recall loops rather than passive reading.",
        contextNote: "Concept -> cited multi-source synthesis + ELK layouts + recall"
      },
      {
        step: "04 · What I Built",
        shortTab: "04 Build",
        heading: "Four-mode ELK.js layouts, timestamped citations, and Feynman grading",
        body: "Built Balanced, Tree, Radial, and Flowchart views on React Flow and ELK.js with clickable PDF page anchors, YouTube MM:SS pills, Blind-Spot Detection, Cloze recall, and exports to Obsidian and Anki.",
        contextNote: "Architecture -> Next.js 16 + React Flow + ELK.js + Obsidian/Anki"
      },
      {
        step: "05 · Challenge & Resolution",
        shortTab: "05 Resolution",
        heading: "Removing onboarding friction for visitors without API keys",
        body: "Requiring sign-up and paid keys upfront stops users from experiencing the canvas. I added local-first IndexedDB storage, a full interactive demo workspace, and optional BYOK provider settings.",
        contextNote: "Outcome -> zero-login workspace ready in one click"
      }
    ]
  },
  {
    id: "nurtureai",
    spineCode: "CASE 05",
    title: "NurtureAI",
    subtitle: "Bilingual maternal & child health",
    year: "2026",
    icon: "/assets/icons/fastapi.svg",
    repoUrl: "https://github.com/zeedan27/ShishuCare",
    stack: ["Next.js 16", "Tailwind v4", "Zustand", "Groq Llama-3.3"],
    stages: [
      {
        step: "01 · What I Noticed",
        shortTab: "01 Context",
        heading: "Rural mothers in Bangladesh face language barriers and delayed pediatric guidance",
        body: "Parents and community health workers in rural areas often rely on scattered advice or miss national immunization windows when trustworthy pediatric tools are only written in dense English.",
        contextNote: "Context -> urgent need for accessible Bangla maternal care guidance"
      },
      {
        step: "02 · Why Existing Tools Missed",
        shortTab: "02 Gap",
        heading: "Pure LLM health chatbots risk unsafe hallucinations during urgent symptoms",
        body: "Handing infant symptom triage directly to a free-form language model risks missing red-flag clinical danger signs or failing completely when users need immediate structured escalation.",
        contextNote: "Gap -> generative chatbots lack deterministic IMCI safety rails"
      },
      {
        step: "03 · How I Framed It",
        shortTab: "03 Approach",
        heading: "Deterministic clinical safety net first, empathetic bilingual AI second",
        body: "I grounded NurtureAI in official WHO IMCI triage rules and the Bangladesh EPI vaccine schedule first, using Groq Llama-3.3 strictly to explain guidance clearly in Bangla and English.",
        contextNote: "Approach -> rule-based IMCI triage + bilingual AI explanation"
      },
      {
        step: "04 · What I Built",
        shortTab: "04 Build",
        heading: "Bilingual IMCI triage, EPI tracker, MUAC nutrition, and myth fact-checker",
        body: "Shipped Level 1-4 triage classification with one-tap WhatsApp clinic alerts, interactive EPI vaccine cards, age-band local nutrition guides, and a 30+ entry traditional myth fact-checker.",
        contextNote: "Architecture -> Next.js 16 + Zustand local state + Groq Llama-3.3"
      },
      {
        step: "05 · Challenge & Resolution",
        shortTab: "05 Resolution",
        heading: "Designing calm guidance for stressed caregivers on small phones",
        body: "Caregivers checking a sick child cannot navigate nested menus. I added automatic age-band selection, high-contrast MUAC color bands, and cache-first myth answers for instant clarity.",
        contextNote: "Outcome -> low-friction mobile workflows in Bangla and English"
      }
    ]
  },
  {
    id: "perf-nlp",
    spineCode: "CASE 06",
    title: "PERF NLP",
    subtitle: "Auditing benchmark gold labels",
    year: "2026",
    icon: "/assets/icons/pytorch.svg",
    repoUrl: "https://github.com/zeedan27",
    stack: ["Python", "LLM Cascade", "Prompt Ensemble", "SST-2", "SNLI", "HateXplain"],
    stages: [
      {
        step: "01 · What I Noticed",
        shortTab: "01 Context",
        heading: "NLP models are ranked on gold-standard benchmarks assumed to be error-free",
        body: "Working with Asst. Prof. Md. Tarek Hasan at UIU, I set out to test a foundational assumption in machine learning: whether ground-truth labels in popular NLP evaluation datasets are truly golden.",
        contextNote: "Research -> Are NLP Gold Standards Truly Golden? (In progress)"
      },
      {
        step: "02 · Why Existing Tools Missed",
        shortTab: "02 Gap",
        heading: "Single-prompt LLM relabeling inherits prompt bias and wastes budget",
        body: "Running one expensive model with one prompt template across thousands of examples neither separates clear label noise from genuine ambiguity nor scales economically across multi-task datasets.",
        contextNote: "Gap -> single-pass relabeling lacks consensus and calibration"
      },
      {
        step: "03 · How I Framed It",
        shortTab: "03 Approach",
        heading: "Cascaded models paired with prompt-ensemble consensus",
        body: "I framed PERF as a staged verification funnel: fast initial filtering flags suspect labels, and diverse prompt-ensembles evaluate disputed items to produce auditable confidence signals.",
        contextNote: "Approach -> LLM cascade escalation + prompt-ensemble voting"
      },
      {
        step: "04 · What I Built",
        shortTab: "04 Build",
        heading: "Auditing SST-2, SNLI, and HateXplain at dataset scale",
        body: "Implemented reproducible auditing passes across sentiment classification (SST-2), natural language inference (SNLI), and explainable hate-speech detection (HateXplain) to surface noisy ground truth.",
        contextNote: "Scope -> multi-benchmark auditing across 3 distinct NLP tasks"
      },
      {
        step: "05 · Challenge & Resolution",
        shortTab: "05 Resolution",
        heading: "Resolving genuinely ambiguous human disagreements cleanly",
        body: "Not every disputed item is a clear mistake; many entailment and hate-speech samples split human raters too. Separating unanimous ensemble corrections from borderline ties kept refinements principled.",
        contextNote: "Outcome -> structured label audit separating noise from ambiguity"
      }
    ]
  },
  {
    id: "scope-baton",
    spineCode: "CASE 07",
    title: "S.C.O.P.E.",
    subtitle: "Deterministic AI engineering gates",
    year: "2026",
    icon: "/assets/icons/github.svg",
    repoUrl: "https://github.com/zeedan27/scope-skill",
    stack: ["Markdown SOP", "Node.js", "Git", "CHATS.md"],
    stages: [
      {
        step: "01 · What I Noticed",
        shortTab: "01 Context",
        heading: "Multi-session AI coding builds quietly drifted away from architecture specs",
        body: "Across multi-day projects, coding assistants forgot earlier schema decisions, invented competing styling tokens, and collided on shared files whenever work spanned multiple chat sessions.",
        contextNote: "Context -> multi-session drift and parallel chat file collisions"
      },
      {
        step: "02 · Why Existing Tools Missed",
        shortTab: "02 Gap",
        heading: "One-off system prompts fade as soon as context compacts",
        body: "Static prompt instructions degrade as tool logs accumulate, leaving no hard checkpoint between specification, design, connections, build slices, and deployment verification.",
        contextNote: "Gap -> no persistent gates or multi-chat file ownership"
      },
      {
        step: "03 · How I Framed It",
        shortTab: "03 Approach",
        heading: "A gated five-phase lifecycle plus multi-chat lane locking",
        body: "I authored scope-skill to enforce single-ownership law documents and phased human checkpoints, paired with baton-pass-skill to coordinate parallel coding windows via a shared CHATS.md registry.",
        contextNote: "Approach -> S.C.O.P.E. gates + CHATS.md ownership lanes"
      },
      {
        step: "04 · What I Built",
        shortTab: "04 Build",
        heading: "Law documents, vertical slices, and post-launch continuation tracks",
        body: "Structured Specification (1A/1B), Connections, Organization (<=5-file TDD slices), Polish, and Execution gates, powering real builds across SkillVerify, Daak v2, Papyr, and this portfolio.",
        contextNote: "Proof -> reusable engineering governance across 4+ shipped repos"
      },
      {
        step: "05 · Challenge & Resolution",
        shortTab: "05 Resolution",
        heading: "Keeping governance helpful on post-launch updates without restarting from zero",
        body: "Re-running greenfield initialization after launch added unnecessary overhead. Adding Cycle N+1 Continuation Tracks (Delta, Bugfix, Refinement) preserved design and schema safety while moving quickly.",
        contextNote: "Outcome -> cycle rollover tracks protecting live production apps"
      }
    ]
  }
];

export const projectsData = [
  {
    id: "mindweave-proj",
    shortName: "MindWeave",
    title: "MindWeave maps papers and lectures into cited spatial graphs",
    description:
      "Next.js 16 and React Flow workspace synthesizing PDFs, YouTube timestamps, ELK.js layouts, and active recall.",
    repoUrl: "https://github.com/zeedan27/mindweave",
    fragment: "diff-review",
    loop: true,
    groundSeed: 14,
    stack: ["Next.js 16", "React 19", "ELK.js"],
    fragmentSpec: {
      repo: "zeedan27/mindweave",
      dir: "canvas/",
      file: "elkLayout.ts",
      signature: "layoutKnowledgeMap(nodes, mode) {",
      delLine: "return runElkLayout(nodes, mode);",
      addCondition: "if (!node.citations.length) {",
      targetLine: "return attachPlaceholder(node);",
      suggestionCall: "attachCitationPill",
      suggestionArgs: "node.youtubeTs, node.pdfPage",
      reviewer: "Zesrab Khan",
      comment: "Preserve YouTube MM:SS and PDF page citation pills before ELK radial layout."
    }
  },
  {
    id: "papyr-proj",
    shortName: "Papyr",
    title: "Papyr compiles research manuscripts into 4-act Manim videos",
    description:
      "FastAPI and PyMuPDF scrollytelling generator pairing DirectorAgent narration, Edge-TTS timing, and AST-gated Manim.",
    repoUrl: "https://github.com/zeedan27/papyr",
    fragment: "terminal-run",
    loop: false,
    groundSeed: 37,
    stack: ["FastAPI", "Manim", "PyMuPDF"],
    fragmentSpec: {
      title: "zeedan27/papyr",
      cwd: "~/papyr",
      cmd: "papyr build paper.pdf",
      meter: "4 of 4 stages",
      steps: [
        { path: "pdf_engine.py", count: "2-col PDF", status: "ok" },
        { path: "director.py", count: "4-act plan", status: "ok" },
        { path: "voiceover.py", count: "Edge-TTS", status: "ok" },
        { path: "sandbox.py", count: "Manim MP4", status: "ok" }
      ],
      done: "4-act scrollytelling MP4 ready"
    }
  },
  {
    id: "skillverify-proj",
    shortName: "SkillVerify",
    title: "SkillVerify runs proctored quizzes and verified CV pipelines",
    description:
      "NestJS 10 and React 18 hiring platform with remedial grooming tracks, Puppeteer CVs, and Gold/Silver hex badges.",
    repoUrl: "https://github.com/zeedan27/skillverify",
    fragment: "window",
    loop: false,
    groundSeed: 62,
    stack: ["NestJS 10", "React 18", "MongoDB"],
    fragmentSpec: {
      crumb: "SkillVerify",
      section: "Hiring Pipeline",
      states: { open: "Proctored", work: "Grooming", done: "Verified" },
      nav: [
        { label: "Active", count: "2", active: true },
        { label: "Verified", count: "14", active: false },
        { label: "Badges", count: "9", active: false }
      ],
      rows: [
        { initials: "NR", tone: "1", who: "Nadia R.", sub: "Gold hex badge", status: "Proctored", done: false },
        { initials: "TA", tone: "3", who: "Tanvir A.", sub: "Remedial track", status: "Proctored", done: false },
        { initials: "SK", tone: "4", who: "Sadia K.", sub: "Verified CV PDF", status: "Verified", done: true },
        { initials: "RH", tone: "2", who: "Rafiq H.", sub: "Scoped rank #1", status: "Verified", done: true }
      ]
    }
  },
  {
    id: "daak-proj",
    shortName: "Daak v2",
    title: "Daak v2 coordinates emergency SOS and PostGIS police dispatch",
    description:
      "Dual-surface Next.js, Expo, and FastAPI safety platform with 1 km corroboration and 5-factor triage.",
    repoUrl: "https://github.com/zeedan27/daak-app",
    fragment: "checklist",
    loop: false,
    groundSeed: 89,
    stack: ["Next.js 16", "Expo", "PostGIS"],
    fragmentSpec: {
      title: "Daak v2 · 999 Civic Dispatch",
      count: "3 of 5",
      items: [
        { label: "Trigger 5s cancelable citizen SOS", done: true },
        { label: "Corroborate 1 km PostGIS radius", done: true },
        { label: "Score 5-factor false-report triage", done: true },
        { label: "Route to nearest Dhaka Metro Thana", done: false },
        { label: "Track live MM:SS police SLA", done: false }
      ]
    }
  }
];

export const archiveRepos = [
  {
    name: "ShishuCare",
    summary: "NurtureAI bilingual Bangla/English maternal and child health app with IMCI triage, EPI tracker, and Groq Llama-3.3.",
    tag: "Health AI",
    url: "https://github.com/zeedan27/ShishuCare"
  },
  {
    name: "n8n-automations",
    summary: "Sanitized, import-ready n8n blueprints for Hugging Face digests, Supabase RAG, Postgres SQL agents, and email triage.",
    tag: "Automation",
    url: "https://github.com/zeedan27/n8n-automations"
  },
  {
    name: "scope-skill",
    summary: "Five-phase S.C.O.P.E. engineering framework with post-launch continuation tracks and verification gates.",
    tag: "AI Agents",
    url: "https://github.com/zeedan27/scope-skill"
  },
  {
    name: "baton-pass-skill",
    summary: "Parallel AI chat coordinator using a shared CHATS.md registry, path ownership lanes, and handoff briefs.",
    tag: "Dev Tooling",
    url: "https://github.com/zeedan27/baton-pass-skill"
  },
  {
    name: "rea-web-skill",
    summary: "Web-first runtime DOM, bundle, and API contract reverse-engineering workflow for Antigravity.",
    tag: "Web Systems",
    url: "https://github.com/zeedan27/rea-web-skill"
  }
];

export const workflowsSection = {
  repoUrl: "https://github.com/zeedan27/n8n-automations",
  items: [
    {
      id: "hf-paper-digest",
      name: "Hugging Face papers to Notion",
      category: "AI Research & RAG",
      summary: "Daily schedule fetches Hugging Face papers, parses HTML abstracts, summarizes via OpenAI, and writes Notion rows.",
      tag: "Schedule + OpenAI",
      workflowPath: "workflows/ai-research-and-rag/hf-paper-digest-to-notion.json",
      diagram: {
        layout: "lanes",
        alt: "Daily schedule fetches Hugging Face papers, summarizes with OpenAI, and updates Notion database.",
        input: { label: "HF", icon: "hugging-face", sub: "Daily", kindCompact: "pill" },
        core: { label: "Digest", icon: "openai", kindCompact: "core-pill" },
        lanes: [
          { label: "Parse", icon: "python", done: true, sub: "HTML", kindCompact: "pill" },
          { label: "Split", icon: "n8n", done: true, sub: "Batch", kindCompact: "pill" },
          { label: "Notion", icon: "notion", done: true, sub: "Store", kindCompact: "pill" }
        ]
      }
    },
    {
      id: "notion-supabase-rag",
      name: "Notion pages to Supabase RAG",
      category: "AI Research & RAG",
      summary: "Watches Notion updates, chunks tokens, embeds with OpenAI, and upserts vectors into Supabase pgvector.",
      tag: "Notion + Supabase",
      workflowPath: "workflows/ai-research-and-rag/notion-supabase-vector-rag.json",
      diagram: {
        layout: "lanes",
        alt: "Notion trigger feeds OpenAI embeddings, splits tokens, and stores vectors in Supabase.",
        input: { label: "Notion", icon: "notion", sub: "Watch", kindCompact: "pill" },
        core: { label: "Embed", icon: "openai", kindCompact: "core-pill" },
        lanes: [
          { label: "Chunk", icon: "langchain", done: true, sub: "Tokens", kindCompact: "pill" },
          { label: "Vector", icon: "supabase", done: true, sub: "Upsert", kindCompact: "pill" },
          { label: "Index", icon: "postgres", done: true, sub: "pgvec", kindCompact: "pill" }
        ]
      }
    },
    {
      id: "postgres-sql-agent",
      name: "PostgreSQL natural language agent",
      category: "Document & Data Ops",
      summary: "Chat trigger routes user questions through a LangChain OpenAI agent with windowed memory and Postgres SQL tool.",
      tag: "LangChain + SQL",
      workflowPath: "workflows/document-and-data-ops/postgres-natural-language-agent.json",
      diagram: {
        layout: "lanes",
        alt: "Chat trigger enters LangChain agent with OpenAI SQL reasoning, memory buffer, and Postgres queries.",
        input: { label: "Chat", icon: "n8n", sub: "Query", kindCompact: "pill" },
        core: { label: "Agent", icon: "langchain", kindCompact: "core-pill" },
        lanes: [
          { label: "SQL", icon: "openai", done: true, sub: "Plan", kindCompact: "pill" },
          { label: "DB", icon: "postgres", done: true, sub: "Run", kindCompact: "pill" },
          { label: "Audit", icon: "github", done: true, sub: "Schema", kindCompact: "pill" }
        ]
      }
    },
    {
      id: "hitl-gmail-rag",
      name: "Human-in-the-loop Gmail RAG",
      category: "Assistant & Comms",
      summary: "Reads inbound IMAP mail, retrieves context via OpenAI and LangChain summarization, and pauses for Gmail Yes/No approval.",
      tag: "IMAP + Approval",
      workflowPath: "workflows/assistant-and-comms/hitl-gmail-triage-responder.json",
      diagram: {
        layout: "lanes",
        alt: "IMAP inbox feeds OpenAI summarization and vector lookup, then waits for human approval before sending Gmail reply.",
        input: { label: "IMAP", icon: "gmail", sub: "Inbox", kindCompact: "pill" },
        core: { label: "Agent", icon: "openai", kindCompact: "core-pill" },
        lanes: [
          { label: "Draft", icon: "langchain", done: true, sub: "RAG", kindCompact: "pill" },
          { label: "Approve", icon: "telegram", done: true, sub: "Yes/No", kindCompact: "pill" },
          { label: "Reply", icon: "gmail", done: true, sub: "Send", kindCompact: "pill" }
        ]
      }
    }
  ]
};

export const workflowsData = workflowsSection.items;

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
