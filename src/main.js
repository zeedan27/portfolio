import "./styles/page.css";
import {
  aboutData,
  archiveRepos,
  caseStudyBooks,
  contactData,
  heroData,
  projectsData,
  skillsData,
  workflowsSection
} from "./data/portfolioData.js";
import { initHeroSpotlight } from "./components/heroSpotlight.js";
import { renderCaseStudyBookshelf } from "./components/caseStudyBookshelf.js";
import {
  renderAbout,
  renderClosing,
  renderProjects,
  renderStack,
  renderWorkflows
} from "./components/sections.js";

function bootstrap() {
  initHeroSpotlight(heroData);
  renderAbout("about-mount", aboutData);
  renderCaseStudyBookshelf("cases-mount", caseStudyBooks);
  renderProjects("projects-mount", projectsData);
  renderWorkflows("workflows-mount", workflowsSection);
  renderStack("stack-mount", skillsData, archiveRepos);
  renderClosing("contact-mount", contactData);
}

bootstrap();
