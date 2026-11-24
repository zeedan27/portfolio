# Data Schemas & Deterministic Contracts (`src/data/portfolioData.js` — Cycle 02 Locked)

Every portfolio section reads from validated, exported structures aligned with `design-taste-frontend` (`taste-skill` v2.5.1) copy rules (zero placeholder copy, zero em-dashes).

## 1. `navLinks` & `heroData`
```ts
interface HeroConfig {
  logoName: string;
  notice: string; // e.g., "UIU CSE (Data Science major) · 3.95 CGPA · CSE UGA"
  headline: string;
  description: string;
  primaryCta: { label: string; href: "/cv/Zesrab-Tanjeel-Khan_CV.pdf"; external?: boolean };
  secondaryCta: { label: string; href: string };
  frontImage: "/images/front.jpg";
  backImage: "/images/back.jpg";
  stats: Array<{ label: string; value: string }>; // Exactly 3 bottom-right telemetry stats
}
```

## 2. `aboutData` (Separated Academic, Work Experience & Research Domains)
Replaces Cycle 01's cramped prose+diagram split with distinct, scannable domains so recruiters immediately distinguish **Education**, **Work Experience (UGA)**, and **Research**:
```ts
interface AboutData {
  heading: string;
  summary: string; // Concise CSE + Data Science major framing (1–2 sentences max)
  education: {
    institution: string; // "United International University (UIU)"
    degree: string;      // "B.Sc. in Computer Science and Engineering"
    major: string;       // "Major in Data Science"
    period: string;      // "Oct 2022 - Present (Expected Feb 2027)"
    cgpa: string;        // "3.95 / 4.00"
    prior: string;       // "HSC & SSC (Science): GPA 5.00 / 5.00"
  };
  workExperience: {
    role: string;         // "Undergraduate Assistant (UGA)"
    organization: string; // "Dept. of CSE, United International University"
    period: string;       // "Sep 2024 - Present"
    courses: string[];    // ["SPL", "OOP", "DSA I", "DSA II", "DBMS", "Software Engineering"]
    highlights: string[]; // Short scannable bullets (lab instruction + 1-on-1 C/C++, Java, SQL mentorship)
  };
  research: {
    title: string;        // "Are NLP Gold Standards Truly Golden?"
    status: string;       // "In progress"
    supervisor: string;   // "Asst. Prof. Md. Tarek Hasan, UIU"
    pipeline: string;     // "PERF (LLM Cascade & Prompt-Ensemble Re-Annotation)"
    datasets: string[];   // ["SST-2", "SNLI", "HateXplain"]
    summary: string;      // Concise 1–2 sentence research goal & contribution
    certification: string; // "IBM Data Science Foundations (May 2024)"
  };
}
```

## 3. `caseStudyBooks` (Variable-Stage Developer Thought-Process Format)
Upgrades Cycle 01's rigid 4-page bug-centric object into a **variable-length `stages` array (`4` to `7` stages per volume)** tailored to each project's real arc and focused on **contextual developer thinking** (real-world problem → why existing solutions missed → solution framing → architecture/build → real product/workflow challenge → how it was resolved):
```ts
interface CaseStudyStage {
  step: string;     // e.g., "01 · What I Noticed", "02 · Why Existing Tools Missed", ..., "05 · Second-Order Challenge", "06 · How I Solved It"
  shortTab: string; // Concise tab pill label (e.g., "01 Context", "02 Gap", "03 Idea", "04 Build", "05 Roadblock", "06 Resolution")
  heading: string;  // Plain-English takeaway of this thinking step
  body: string;     // Contextual narrative (problem & product/engineering reasoning, not low-level bug trivia)
  contextNote: string; // Concrete decision, trade-off, or real outcome anchor
}

interface CaseStudyBook {
  id: string;
  spineCode: string; // "CASE 01" .. "CASE 0N"
  title: string;
  subtitle: string;
  year: string;
  icon: string;      // "/assets/icons/*.svg"
  repoUrl: string;
  stack: string[];
  stages: CaseStudyStage[]; // Minimum 4, typically 5–6 stages depending on project complexity
}
```

## 4. `projectsData` (Flagship Cards + Project-Authentic Animated UI Fragments)
Each of the 4 `features-2x2` flagship cards binds its interactive `assets/ui` fragment (`diff-review`, `terminal-run`, `window`, `checklist`) directly to **authentic domain operations from that specific repository**:
```ts
interface ProjectCard {
  id: string;
  shortName: string;
  title: string;
  description: string;
  repoUrl: string;
  fragment: "diff-review" | "terminal-run" | "window" | "checklist";
  loop: boolean;       // Exactly 1 card has loop: true (WCAG motion budget)
  groundSeed: number;
  stack: string[];
  fragmentSpec: Record<string, unknown>; // Repo path, stages/rows, and telemetry rendered inside the UI animation
}
```

## 5. `workflowsData` (Real Curated n8n Workflows + Companion Repo Link)
Grounded in real n8n JSON workflows from the curated template library and linked to `@zeedan27`'s dedicated n8n repository:
```ts
interface WorkflowsSection {
  repoUrl: string; // e.g., "https://github.com/zeedan27/n8n-automations"
  items: Array<{
    id: string;
    name: string;
    category: string;
    summary: string;
    tag: string;
    workflowPath: string; // Path inside the n8n GitHub repo
    diagram: {
      layout: "lanes";
      alt: string;
      input: { label: string; icon: string; sub: string; kindCompact: "pill" };
      core: { label: string; icon: string; kindCompact: "core-pill" };
      lanes: Array<{ label: string; icon: string; done: boolean; sub: string; kindCompact: "pill" }>;
    };
  }>;
}
```

## 6. `skillsData`, `archiveRepos` & `contactData`
- `skillsData`: 5 capability rows pairing verified CSE + Data Science major tools with local SVGs (`/assets/icons/*.svg`).
- `archiveRepos`: Curated high-signal `@zeedan27` public repositories (zero deprecated/empty/practice repos), each with `name`, `summary`, `tag`, and `url`.
- `contactData`: Closing statement, `email: "ztkhan000@gmail.com"`, `cvPdfUrl: "/cv/Zesrab-Tanjeel-Khan_CV.pdf"`, `githubUrl`, and `linkedinUrl`.
