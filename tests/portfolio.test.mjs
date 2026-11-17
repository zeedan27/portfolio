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

test("Public hero images, CV assets, and Cloudflare _headers exist and are non-empty", () => {
  const requiredPublic = [
    "public/front.jpg",
    "public/front.jpeg",
    "public/back.jpg",
    "public/Zesrab-Tanjeel-Khan_CV.pdf",
    "public/cv.html",
    "public/_headers"
  ];

  for (const relPath of requiredPublic) {
    const absPath = path.join(rootDir, relPath);
    assert.ok(fs.existsSync(absPath), `Missing public asset: ${relPath}`);
    assert.ok(fs.statSync(absPath).size > 100, `Unexpectedly small asset: ${relPath}`);
  }
});

test("HeroConfig satisfies schema and dual-image spotlight requirements", () => {
  assert.equal(heroData.frontImage, "/front.jpg");
  assert.equal(heroData.backImage, "/back.jpg");
  assert.equal(heroData.stats.length, 3);
  assert.ok(heroData.headline.length > 10);
  assert.ok(heroData.primaryCta.href.startsWith("#"));
  assert.equal(navLinks.length, 6);
});

test("All 5 Case-Study Books implement the 4-stage problem-solving contract", () => {
  assert.equal(caseStudyBooks.length, 5);
  const expectedStages = [
    ["observation", "01", "OBSERVATION"],
    ["research", "02", "RESEARCH & GAP"],
    ["build", "03", "THE BUILD"],
    ["frictionFix", "04", "FRICTION & FIX"]
  ];

  for (const book of caseStudyBooks) {
    assert.ok(book.id && book.title && book.code && book.repoUrl);
    assert.ok(Array.isArray(book.techStack) && book.techStack.length > 0);
    for (const [key, step, tag] of expectedStages) {
      const page = book.pages[key];
      assert.ok(page, `Book ${book.id} missing stage ${key}`);
      assert.equal(page.step, step);
      assert.equal(page.tag, tag);
      assert.ok(page.title.length > 5);
      assert.ok(page.body.length > 30);
      assert.ok(page.evidence.length > 10);
    }
  }
});

test("Projects, Workflows, Skills, About, and Contact contain valid real data with no lorem ipsum", () => {
  assert.ok(projectsData.length >= 8);
  assert.ok(workflowsData.length >= 4);
  assert.equal(skillsData.length, 5);
  assert.equal(aboutData.experience.length, 2);
  assert.equal(contactData.email, "ztkhan000@gmail.com");
  assert.ok(contactData.eyebrow.startsWith("06 //"), "Contact eyebrow should follow sequential 06 numbering");

  const serialized = JSON.stringify({
    heroData,
    aboutData,
    caseStudyBooks,
    projectsData,
    workflowsData,
    skillsData,
    contactData
  }).toLowerCase();
  assert.ok(!serialized.includes("lorem ipsum"), "Portfolio data must never contain placeholder copy");
});

test("HTML & CSS implement spotlight mask, mobile nav overlay, and image preload", () => {
  const html = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
  const css = fs.readFileSync(path.join(rootDir, "src/styles/main.css"), "utf8");

  assert.ok(html.includes('href="/front.jpg"'), "index.html should preload /front.jpg");
  assert.ok(html.includes('href="/back.jpg"'), "index.html should preload /back.jpg");
  assert.ok(css.includes("mask-image: radial-gradient"), "CSS must define radial spotlight mask");
  assert.ok(css.includes(".mobile-nav-overlay.is-open"), "CSS must define mobile full-screen overlay state");
});
