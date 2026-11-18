# Data Schemas & Deterministic Contracts (`src/data/portfolioData.js`)

Every portfolio section reads from validated, exported structures aligned with `design-taste-frontend` (`taste-skill` v2.5.1) copy rules.

## 1. `navLinks` & `heroData`
```ts
interface HeroConfig {
  logoName: string;
  notice: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string };
  frontImage: "/images/front.jpg";
  backImage: "/images/back.jpg";
  stats: Array<{ label: string; value: string }>; // Exactly 3 bottom-right telemetry stats
}
```

## 2. `aboutData`
```ts
interface AboutData {
  heading: string;
  summary: string;
  exploringNote: string;
  education: { institution: string; degree: string; period: string; cgpa: string };
  experience: Array<{ course: string; role: string; term: string; detail: string }>;
  stackIcons: Array<{ name: string; icon: string }>;
}
```

## 3. `caseStudyBooks` (4-Stage Engineering Problem-Solving Format)
```ts
interface CaseStudyPage {
  stage: "01 · Observation" | "02 · Research & Gap" | "03 · The Build" | "04 · Friction & Fix";
  heading: string;
  body: string;
  artifact: string;
}

interface CaseStudyBook {
  id: string;
  spineCode: string;
  title: string;
  subtitle: string;
  year: string;
  repoUrl: string;
  stack: string[];
  pages: {
    observation: CaseStudyPage;
    research: CaseStudyPage;
    build: CaseStudyPage;
    frictionFix: CaseStudyPage;
  };
}
```

## 4. `projectsData`, `archiveRepos`, `workflowsData`, `skillsData` & `contactData`
- `projectsData`: 4 flagship systems paired with interactive UI fragment keys (`diff-review`, `terminal-run`, `window`, `checklist`) and `gradient-mesh` seed IDs.
- `archiveRepos`: 5 public GitHub repositories under `@zeedan27` rendered in the archive list.
- `workflowsData`: 4 autonomous pipelines each defining a `diagram` spec (`layout: "lanes"`, `input`, `core`, `lanes`) rendered by `assets/diagrams/diagram.js`.
- `skillsData`: 5 capability rows pairing real domain expertise with fetched local SVG icons (`/assets/icons/*.svg`).
- `contactData`: Closing statement, `email: "ztkhan000@gmail.com"`, CV PDF path (`/cv/Zesrab-Tanjeel-Khan_CV.pdf`), GitHub, and LinkedIn links.
