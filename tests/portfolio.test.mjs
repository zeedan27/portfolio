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

test("HeroConfig and navLinks match Spotlight Reveal and taste-skill constraints", () => {
  assert.equal(heroData.frontImage, "/images/front.jpg");
  assert.equal(heroData.backImage, "/images/back.jpg");
  assert.equal(heroData.primaryCta.href, "/cv/Zesrab-Tanjeel-Khan_CV.pdf");
  assert.equal(contactData.cvPdfUrl, "/cv/Zesrab-Tanjeel-Khan_CV.pdf");
  assert.equal(contactData.cvHtmlUrl, undefined);
  assert.equal(heroData.stats.length, 3);
  assert.ok(heroData.headline.length > 10);
  assert.equal(heroData.primaryCta.label, "Download CV");
  assert.equal(navLinks.length, 4);
});

test("All 5 Case-Study Books implement the 4-stage problem-solving contract", () => {
  assert.equal(caseStudyBooks.length, 5);
  const expectedStages = [
    ["observation", "01 · Observation"],
    ["research", "02 · Research & Gap"],
    ["build", "03 · The Build"],
    ["frictionFix", "04 · Friction & Fix"]
  ];

  for (const book of caseStudyBooks) {
    assert.ok(book.id && book.title && book.spineCode && book.repoUrl);
    assert.ok(Array.isArray(book.stack) && book.stack.length > 0);
    for (const [key, stageLabel] of expectedStages) {
      const page = book.pages[key];
      assert.ok(page, `Book ${book.id} missing stage ${key}`);
      assert.equal(page.stage, stageLabel);
      assert.ok(page.heading.length > 5);
      assert.ok(page.body.length > 30);
      assert.ok(page.artifact.length > 8);
    }
  }
});

test("Projects, Workflows, Skills, About, and Contact contain real data and valid diagram specs", () => {
  assert.equal(projectsData.length, 4);
  assert.equal(archiveRepos.length, 5);
  assert.equal(workflowsData.length, 4);
  for (const wf of workflowsData) {
    assert.equal(wf.diagram.layout, "lanes");
    assert.ok(wf.diagram.input?.icon && wf.diagram.core?.icon);
    assert.equal(wf.diagram.lanes.length, 3);
  }
  assert.equal(skillsData.length, 5);
  assert.equal(aboutData.experience.length, 2);
  assert.equal(contactData.email, "ztkhan000@gmail.com");

  const serialized = JSON.stringify({
    heroData,
    aboutData,
    caseStudyBooks,
    projectsData,
    archiveRepos,
    workflowsData,
    skillsData,
    contactData
  }).toLowerCase();
  assert.ok(!serialized.includes("lorem ipsum"), "Portfolio data must never contain placeholder copy");
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
