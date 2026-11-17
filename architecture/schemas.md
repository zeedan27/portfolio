# Data Schemas & Deterministic Contracts (`src/data/portfolioData.js`)

Every portfolio section reads from validated, exported objects matching the contracts below.

## 1. `HeroConfig`
```ts
interface HeroConfig {
  logoCode: string;       // e.g., "ZTK // S-07"
  logoSub: string;        // e.g., "ZESRAB TANJEEL KHAN"
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  frontImage: string;     // "/front.jpg"
  backImage: string;      // "/back.jpg"
  stats: Array<{
    value: string;
    unit: string;
    label: string;
  }>;                     // Exactly 3 bottom-right telemetry stats
}
```

## 2. `AboutData`
```ts
interface AboutData {
  eyebrow: string;
  heading: string;
  summary: string;
  exploringNote: string;  // Single deferred research line
  education: {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
    location: string;
  };
  experience: Array<{
    role: string;
    course: string;
    institution: string;
    period: string;
    highlights: string[];
  }>;
}
```

## 3. `CaseStudyBook` (4-Stage Engineering Problem-Solving Format)
```ts
interface CaseStudyPage {
  step: "01" | "02" | "03" | "04";
  tag: "OBSERVATION" | "RESEARCH & GAP" | "THE BUILD" | "FRICTION & FIX";
  title: string;
  body: string;
  evidence: string;       // Concrete metric, file, schema, or error condition
}

interface CaseStudyBook {
  id: string;
  code: string;           // e.g., "CASE-01 // MULTIMODAL AI"
  spineTitle: string;
  title: string;
  subtitle: string;
  accentColor: "cyan" | "amber" | "teal";
  techStack: string[];
  repoUrl: string;
  pages: {
    observation: CaseStudyPage;
    research: CaseStudyPage;
    build: CaseStudyPage;
    frictionFix: CaseStudyPage;
  };
}
```

## 4. `ProjectItem`
```ts
interface ProjectItem {
  id: string;
  name: string;
  category: "AI & Security" | "Systems & Skills" | "Full-Stack & Mobile";
  status: string;
  language: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
}
```

## 5. `WorkflowItem`
```ts
interface WorkflowItem {
  id: string;
  code: string;
  title: string;
  platform: string;
  summary: string;
  trigger: string;
  nodes: string[];
  output: string;
}
```

## 6. `SkillCategory` & `ContactData`
```ts
interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

interface ContactData {
  heading: string;
  subtext: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  cvPdfUrl: string;
  cvHtmlUrl: string;
}
```
