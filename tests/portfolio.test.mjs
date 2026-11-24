import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  heroData,
  navLinks,
  aboutData,
  caseStudyBooks,
  projectsData,
  archiveRepos,
  workflowsData,
  workflowsSection,
  skillsData,
  contactData
} from "../src/data/portfolioData.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

test("S.C.O.P.E. governance and architecture documentation exist", () => {
  const requiredDocs = [
    "AGENTS.md",
    "PRODUCT.md",
    "DESIGN.md",
    "task_plan.md",
    "findings.md",
    "progress.md",
    ".gitignore",
    ".env.example",
    "architecture/schemas.md",
    "architecture/decisions.md",
    "architecture/maintenance.md",
    "architecture/frontend-motion.md"
  ];

  for (const relPath of requiredDocs) {
    const absPath = path.join(rootDir, relPath);
    assert.ok(fs.existsSync(absPath), `Missing S.C.O.P.E. file: ${relPath}`);
    assert.ok(fs.statSync(absPath).size > 0, `Empty S.C.O.P.E. file: ${relPath}`);
  }

  const agentsText = fs.readFileSync(path.join(rootDir, "AGENTS.md"), "utf8");
  assert.ok(!agentsText.startsWith("---"), "AGENTS.md must not start with YAML frontmatter");
  assert.ok(agentsText.split(/\r?\n/).length <= 150, "AGENTS.md must stay under 150 lines");
});

test("Public hero images, CV assets, favicon, and taste-skill kit assets exist", () => {
  const requiredPublic = [
    "public/images/front.jpg",
    "public/images/back.jpg",
    "public/images/share.jpg",
    "public/cv/Zesrab-Tanjeel-Khan_CV.pdf",
    "public/_headers",
    "public/favicon.svg",
    "public/assets/system.css",
    "public/assets/system.js",
    "public/assets/layout/layout.css",
    "public/assets/ui/cards.css",
    "public/assets/diagrams/diagram.js",
    "public/assets/icons/typescript.svg",
    "public/assets/icons/n8n.svg"
  ];

  for (const relPath of requiredPublic) {
    const absPath = path.join(rootDir, relPath);
    assert.ok(fs.existsSync(absPath), `Missing public asset: ${relPath}`);
    assert.ok(fs.statSync(absPath).size > 50, `Unexpectedly small asset: ${relPath}`);
  }

  const removedDuplicates = [
    "front.jpg",
    "front.jpeg",
    "back.jpg",
    "public/front.jpg",
    "public/front.jpeg",
    "public/back.jpg",
    "public/share.jpg",
    "public/Zesrab-Tanjeel-Khan_CV.pdf",
    "public/cv.html",
    "public/cv/cv.html"
  ];

  for (const relPath of removedDuplicates) {
    assert.ok(!fs.existsSync(path.join(rootDir, relPath)), `Unarranged/duplicate file should not exist: ${relPath}`);
  }
});

test("HeroConfig and navLinks match CSE Data Science identity and Spotlight Reveal", () => {
  assert.equal(heroData.frontImage, "/images/front.jpg");
  assert.equal(heroData.backImage, "/images/back.jpg");
  assert.equal(heroData.primaryCta.href, "/cv/Zesrab-Tanjeel-Khan_CV.pdf");
  assert.equal(contactData.cvPdfUrl, "/cv/Zesrab-Tanjeel-Khan_CV.pdf");
  assert.equal(contactData.cvHtmlUrl, undefined);
  assert.ok(heroData.notice.includes("CSE") && heroData.notice.includes("Data Science"));
  assert.ok(!heroData.notice.includes("B.Sc. in Data Science"));
  assert.equal(heroData.stats.length, 3);
  assert.ok(heroData.headline.length > 10);
  assert.equal(heroData.primaryCta.label, "Download CV");
  assert.equal(navLinks.length, 4);
});

test("AboutData separates Education, 6-Course CSE Work Experience, and Research", () => {
  assert.equal(aboutData.education.degree, "B.Sc. in Computer Science and Engineering");
  assert.equal(aboutData.education.major, "Major in Data Science");
  assert.equal(aboutData.workExperience.courses.length, 6);
  assert.ok(aboutData.workExperience.highlights.length >= 2);
  assert.equal(aboutData.research.title, "Are NLP Gold Standards Truly Golden?");
  assert.deepEqual(aboutData.research.datasets, ["SST-2", "SNLI", "HateXplain"]);
  assert.ok(aboutData.research.certification.includes("IBM"));
});

test("All 7 Case-Study Books implement variable-stage developer thought-process contract", () => {
  assert.equal(caseStudyBooks.length, 7);
  assert.deepEqual(
    caseStudyBooks.map((b) => b.id),
    ["skillverify", "daak", "papyr", "mindweave", "nurtureai", "perf-nlp", "scope-baton"]
  );

  const stageCounts = new Set();
  for (const book of caseStudyBooks) {
    assert.ok(book.id && book.title && book.spineCode && book.repoUrl);
    assert.ok(book.icon && book.icon.startsWith("/assets/icons/"));
    assert.ok(fs.existsSync(path.join(rootDir, "public", book.icon.slice(1))), `Missing icon: ${book.icon}`);
    assert.ok(Array.isArray(book.stack) && book.stack.length > 0);
    assert.ok(Array.isArray(book.stages) && book.stages.length >= 5, `Book ${book.id} must have >= 5 stages`);
    stageCounts.add(book.stages.length);

    for (const stage of book.stages) {
      assert.ok(stage.step && stage.shortTab);
      assert.ok(stage.heading.length > 5);
      assert.ok(stage.body.length > 40);
      assert.ok(stage.contextNote.length > 8);
    }
  }
  assert.ok(stageCounts.size >= 2, "Case-study books should vary in stage count across projects");
});

test("Projects, Workflows, Skills, Curated Repos, and Contact contain Cycle 02 real data", () => {
  assert.equal(projectsData.length, 4);
  assert.deepEqual(
    projectsData.map((p) => p.id),
    ["mindweave-proj", "papyr-proj", "skillverify-proj", "daak-proj"]
  );
  for (const proj of projectsData) {
    assert.ok(proj.fragmentSpec && Object.keys(proj.fragmentSpec).length > 0);
  }
  assert.equal(projectsData[0].repoUrl, "https://github.com/zeedan27/mindweave");
  assert.equal(projectsData[1].repoUrl, "https://github.com/zeedan27/papyr");
  assert.equal(projectsData[2].repoUrl, "https://github.com/zeedan27/skillverify");
  assert.equal(projectsData[3].repoUrl, "https://github.com/zeedan27/daak-app");

  assert.equal(workflowsSection.repoUrl, "https://github.com/zeedan27/n8n-automations");
  assert.equal(workflowsSection.items.length, 4);
  assert.equal(workflowsData.length, 4);
  for (const wf of workflowsSection.items) {
    assert.ok(wf.workflowPath && wf.workflowPath.endsWith(".json"));
    assert.equal(wf.diagram.layout, "lanes");
    assert.ok(wf.diagram.input?.icon && wf.diagram.core?.icon);
    assert.equal(wf.diagram.lanes.length, 3);
  }

  assert.deepEqual(
    archiveRepos.map((r) => r.name),
    ["ShishuCare", "n8n-automations", "scope-skill", "baton-pass-skill", "rea-web-skill"]
  );
  for (const excluded of ["llm-prompt-injection-eval", "zeedan27"]) {
    assert.ok(!archiveRepos.some((r) => r.name === excluded), `Excluded repo found: ${excluded}`);
  }

  assert.equal(skillsData.length, 5);
  assert.equal(contactData.email, "ztkhan000@gmail.com");

  const serializedRaw = JSON.stringify({
    heroData,
    aboutData,
    caseStudyBooks,
    projectsData,
    archiveRepos,
    workflowsSection,
    skillsData,
    contactData
  });
  assert.ok(!serializedRaw.includes("\u2014"), "Portfolio data must contain zero em-dashes");
  assert.ok(!serializedRaw.toLowerCase().includes("lorem ipsum"), "Portfolio data must never contain placeholder copy");
});

test("Interactive components implement dynamic variable-stage bookshelf, 3-domain About, and authentic fragments", () => {
  const shelfSrc = fs.readFileSync(path.join(rootDir, "src/components/caseStudyBookshelf.js"), "utf8");
  const sectionsSrc = fs.readFileSync(path.join(rootDir, "src/components/sections.js"), "utf8");
  const mainSrc = fs.readFileSync(path.join(rootDir, "src/main.js"), "utf8");

  assert.ok(!shelfSrc.includes("PAGE_KEYS"), "caseStudyBookshelf.js must drop hardcoded PAGE_KEYS");
  assert.ok(!shelfSrc.includes("book.pages["), "caseStudyBookshelf.js must read book.stages[] dynamically");
  assert.ok(shelfSrc.includes("book.stages"), "caseStudyBookshelf.js must iterate book.stages");
  assert.ok(shelfSrc.includes("book.icon"), "caseStudyBookshelf.js must read book.icon");

  assert.ok(sectionsSrc.includes("Education"), "sections.js renderAbout must render Education domain");
  assert.ok(sectionsSrc.includes("Work experience"), "sections.js renderAbout must render Work experience domain");
  assert.ok(sectionsSrc.includes("about-research"), "sections.js renderAbout must render dedicated research panel");
  assert.ok(sectionsSrc.includes("Certification"), "sections.js renderAbout must render Certification domain");
  assert.ok(sectionsSrc.includes("fragmentSpec"), "sections.js must build project fragments from proj.fragmentSpec");
  assert.ok(sectionsSrc.includes("n8n-automations") || sectionsSrc.includes("repoUrl"), "sections.js renderWorkflows must link companion repoUrl");
  assert.ok(mainSrc.includes("workflowsSection"), "main.js must pass workflowsSection to renderWorkflows");

  for (const [name, txt] of [["caseStudyBookshelf.js", shelfSrc], ["sections.js", sectionsSrc], ["main.js", mainSrc]]) {
    assert.ok(!txt.includes("\u2014"), `${name} must contain zero em-dashes`);
  }
});

test("HTML & CSS implement taste-skill structure and dual-layer Spotlight Reveal", () => {
  const html = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
  const css = fs.readFileSync(path.join(rootDir, "src/styles/page.css"), "utf8");
  const tasteSkillPath = path.join(
    process.env.USERPROFILE || process.env.HOME || "",
    ".gemini",
    "config",
    "skills",
    "design-taste-frontend",
    "SKILL.md"
  );

  assert.ok(fs.existsSync(tasteSkillPath), "design-taste-frontend SKILL.md should be installed globally");
  assert.ok(html.includes('href="/images/front.jpg"'), "index.html should preload /images/front.jpg");
  assert.ok(html.includes('href="/images/back.jpg"'), "index.html should preload /images/back.jpg");
  assert.ok(html.includes('content="/images/share.jpg"'), "index.html should set og:image /images/share.jpg");
  assert.ok(html.includes('href="/cv/Zesrab-Tanjeel-Khan_CV.pdf"'), "index.html should link /cv/Zesrab-Tanjeel-Khan_CV.pdf");
  assert.ok(css.includes("url('/images/front.jpg')"), "page.css should use /images/front.jpg fallback");
  assert.ok(html.includes('data-type="software"'), "index.html should declare data-type=software");
  assert.ok(html.includes('data-ground="sky"'), "index.html should declare lit UI ground");
  assert.ok(html.includes("Instrument Sans"), "index.html should load Instrument Sans");
  assert.ok(html.includes("DM Mono"), "index.html should load DM Mono");
  assert.ok(html.includes("assets/system.css"), "index.html should link verbatim system.css");
  assert.ok(css.includes(".hero-spot__canvas"), "page.css must style spotlight canvas layer");
  assert.ok(css.includes(".frame.ui.app.cases-app"), "page.css must define two-pane bookshelf frame");
});
