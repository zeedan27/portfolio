import "./styles/main.css";
import {
  heroData,
  navLinks,
  aboutData,
  caseStudyBooks,
  projectsData,
  workflowsData,
  skillsData,
  contactData
} from "./data/portfolioData.js";
import { renderHero } from "./components/heroSpotlight.js";
import { renderCaseStudyBookshelf } from "./components/caseStudyBookshelf.js";
import {
  renderAbout,
  renderProjects,
  renderWorkflows,
  renderSkills,
  renderContact,
  renderFooter
} from "./components/sections.js";

function bootstrapPortfolio() {
  renderHero(document.getElementById("hero"), heroData, navLinks);
  renderAbout(document.getElementById("about"), aboutData);
  renderCaseStudyBookshelf(document.getElementById("case-studies"), caseStudyBooks);
  renderProjects(document.getElementById("projects"), projectsData);
  renderWorkflows(document.getElementById("workflows"), workflowsData);
  renderSkills(document.getElementById("skills"), skillsData);
  renderContact(document.getElementById("contact"), contactData);
  renderFooter(document.getElementById("site-footer"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrapPortfolio);
} else {
  bootstrapPortfolio();
}
