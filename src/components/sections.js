import { escapeHtml } from "./heroSpotlight.js";

/**
 * Renders About & Teaching, Projects Grid, n8n/Agent Workflows,
 * Skills Matrix, Contact/Resume CTA, and Footer.
 */

export function renderAbout(container, about) {
  if (!container) return;

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-header">
        <span class="section-eyebrow">${escapeHtml(about.eyebrow)}</span>
        <h2 id="about-heading" class="section-title">${escapeHtml(about.heading)}</h2>
      </div>

      <div class="about-grid">
        <div class="about-bio-card">
          <p class="about-bio-text">${escapeHtml(about.summary)}</p>
          <div class="exploring-note">${escapeHtml(about.exploringNote)}</div>
        </div>

        <div class="about-side-stack">
          <div class="edu-card">
            <div class="edu-header">
              <span class="edu-school">${escapeHtml(about.education.institution)}</span>
              <span class="edu-cgpa">CGPA ${escapeHtml(about.education.cgpa)}</span>
            </div>
            <div class="edu-degree">${escapeHtml(about.education.degree)}</div>
            <div class="edu-meta">${escapeHtml(about.education.period)} · ${escapeHtml(about.education.location)}</div>
          </div>
        </div>
      </div>

      <div class="exp-list">
        ${about.experience
          .map(
            (exp) => `
          <article class="exp-card">
            <div class="exp-top">
              <h3 class="exp-role">${escapeHtml(exp.role)}</h3>
              <span class="exp-period">${escapeHtml(exp.period)}</span>
            </div>
            <div class="exp-course">${escapeHtml(exp.course)}</div>
            <ul class="bullet-list">
              ${exp.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>`
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderProjects(container, projects) {
  if (!container) return;

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  let activeFilter = "All";

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-header">
        <span class="section-eyebrow">03 // GITHUB & HACKATHON REPOSITORIES</span>
        <h2 id="projects-heading" class="section-title">Shipped codebases, security PoCs &amp; agent toolkits.</h2>
        <p class="section-lead">
          Real repositories from <a href="https://github.com/zeedan27" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan);">@zeedan27</a> spanning multimodal AI, prompt-injection security, full-stack web apps, and developer protocols.
        </p>
      </div>

      <div id="project-filters" class="filter-bar" role="group" aria-label="Filter projects by domain"></div>
      <div id="projects-grid" class="projects-grid"></div>
    </div>
  `;

  const filterBar = container.querySelector("#project-filters");
  const grid = container.querySelector("#projects-grid");

  const renderGrid = () => {
    const visible =
      activeFilter === "All"
        ? projects
        : projects.filter((item) => item.category === activeFilter);

    if (visible.length === 0) {
      grid.innerHTML = `<div class="exp-card">No projects matched filter "${escapeHtml(activeFilter)}".</div>`;
      return;
    }

    grid.innerHTML = visible
      .map(
        (proj) => `
        <article class="project-card">
          <div>
            <div class="project-card-meta">
              <span class="project-status">${escapeHtml(proj.status)}</span>
              <span class="project-lang">${escapeHtml(proj.language)}</span>
            </div>
            <h3 class="project-title">${escapeHtml(proj.name)}</h3>
            <p class="project-summary">${escapeHtml(proj.summary)}</p>
            <ul class="bullet-list">
              ${proj.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
            </ul>
          </div>

          <div class="project-footer">
            <div class="tech-pill-row">
              ${proj.stack.map((t) => `<span class="tech-pill">${escapeHtml(t)}</span>`).join("")}
            </div>
            <a
              href="${escapeHtml(proj.repoUrl)}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              github.com/zeedan27 ↗
            </a>
          </div>
        </article>`
      )
      .join("");
  };

  const renderFilters = () => {
    filterBar.innerHTML = categories
      .map(
        (cat) => `
        <button
          type="button"
          class="filter-btn ${cat === activeFilter ? "is-active" : ""}"
          data-filter="${escapeHtml(cat)}"
          aria-pressed="${String(cat === activeFilter)}"
        >
          ${escapeHtml(cat.toUpperCase())}
        </button>`
      )
      .join("");

    filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.getAttribute("data-filter");
        renderFilters();
        renderGrid();
      });
    });
  };

  renderFilters();
  renderGrid();
}

export function renderWorkflows(container, workflows) {
  if (!container) return;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pulsePaused = Boolean(prefersReduced);

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-header-row">
        <div class="section-header" style="margin-bottom: 0;">
          <span class="section-eyebrow">04 // N8N &amp; AUTONOMOUS PIPELINES</span>
          <h2 id="workflows-heading" class="section-title">Repeatable automation over ad-hoc manual glue.</h2>
          <p class="section-lead">
            Structured workflows connecting webhooks, n8n forms, Telegram bots, GitHub sync triggers, and deterministic multi-agent orchestration gates.
          </p>
        </div>
        <button
          id="workflow-pulse-toggle"
          type="button"
          class="btn btn-scan-toggle"
          aria-pressed="${String(pulsePaused)}"
        >
          ${pulsePaused ? "[RESUME PULSE]" : "[PAUSE PULSE]"}
        </button>
      </div>

      <div id="workflows-grid" class="workflows-grid ${pulsePaused ? "is-paused" : ""}">
        ${workflows
          .map(
            (wf) => `
          <article class="workflow-card">
            <div class="workflow-head">
              <span class="workflow-code">${escapeHtml(wf.code)}</span>
              <span class="workflow-platform">${escapeHtml(wf.platform)}</span>
            </div>
            <h3 class="workflow-title">${escapeHtml(wf.title)}</h3>
            <p class="workflow-summary">${escapeHtml(wf.summary)}</p>
            <div class="pipeline-diagram">
              <svg class="pipeline-pulse-svg" viewBox="0 0 360 16" fill="none" aria-hidden="true">
                <line x1="8" y1="8" x2="352" y2="8" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                <line class="pipeline-pulse-line" x1="8" y1="8" x2="352" y2="8" stroke="#00e5ff" stroke-width="2" stroke-linecap="round" stroke-dasharray="38 306" />
                <circle cx="8" cy="8" r="3.5" fill="#f59e0b" />
                <circle cx="180" cy="8" r="3" fill="#00e5ff" />
                <circle cx="352" cy="8" r="3.5" fill="#14b8a6" />
              </svg>
              <div class="pipeline-track" aria-label="Workflow execution graph">
                <span class="pipeline-node is-trigger">${escapeHtml(wf.trigger)}</span>
                ${wf.nodes
                  .map(
                    (node) =>
                      `<span class="pipeline-arrow" aria-hidden="true">→</span><span class="pipeline-node">${escapeHtml(node)}</span>`
                  )
                  .join("")}
                <span class="pipeline-arrow" aria-hidden="true">→</span>
                <span class="pipeline-node is-output">${escapeHtml(wf.output)}</span>
              </div>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </div>
  `;

  const pulseBtn = container.querySelector("#workflow-pulse-toggle");
  const grid = container.querySelector("#workflows-grid");
  if (pulseBtn && grid) {
    pulseBtn.addEventListener("click", () => {
      pulsePaused = !pulsePaused;
      grid.classList.toggle("is-paused", pulsePaused);
      pulseBtn.setAttribute("aria-pressed", String(pulsePaused));
      pulseBtn.textContent = pulsePaused ? "[RESUME PULSE]" : "[PAUSE PULSE]";
    });
  }
}

export function renderSkills(container, skillCategories) {
  if (!container) return;

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-header">
        <span class="section-eyebrow">05 // TECHNICAL STACK</span>
        <h2 id="skills-heading" class="section-title">Core languages, frameworks &amp; infrastructure.</h2>
      </div>

      <div class="skills-matrix">
        ${skillCategories
          .map(
            (group) => `
          <div class="skill-group-card">
            <div class="skill-group-label">${escapeHtml(group.label)}</div>
            <div class="skill-chip-list">
              ${group.items.map((item) => `<span class="skill-chip">${escapeHtml(item)}</span>`).join("")}
            </div>
          </div>`
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderContact(container, contact) {
  if (!container) return;

  container.innerHTML = `
    <div class="section-inner">
      <div class="contact-box">
        <div>
          <span class="section-eyebrow">${escapeHtml(contact.eyebrow)}</span>
          <h2 id="contact-heading" class="section-title" style="margin-top: 10px;">${escapeHtml(contact.heading)}</h2>
          <p class="section-lead" style="margin-top: 12px;">${escapeHtml(contact.subtext)}</p>

          <div class="contact-actions">
            <a href="${escapeHtml(contact.cvPdfUrl)}" class="btn btn-primary" download>
              DOWNLOAD CV (PDF)
            </a>
            <a href="${escapeHtml(contact.cvHtmlUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              VIEW ATS RESUME ↗
            </a>
            <button id="copy-email-btn" type="button" class="btn btn-scan-toggle">
              COPY EMAIL
            </button>
          </div>
        </div>

        <div class="contact-meta-list">
          <a href="mailto:${escapeHtml(contact.email)}" class="contact-meta-item">
            <span class="contact-meta-key">EMAIL</span>
            <span>${escapeHtml(contact.email)}</span>
          </a>
          <a href="${escapeHtml(contact.githubUrl)}" target="_blank" rel="noopener noreferrer" class="contact-meta-item">
            <span class="contact-meta-key">GITHUB</span>
            <span>github.com/zeedan27 ↗</span>
          </a>
          <a href="${escapeHtml(contact.linkedinUrl)}" target="_blank" rel="noopener noreferrer" class="contact-meta-item">
            <span class="contact-meta-key">LINKEDIN</span>
            <span>in/zesrabkhan ↗</span>
          </a>
          <div class="contact-meta-item">
            <span class="contact-meta-key">LOCATION</span>
            <span>${escapeHtml(contact.location)}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const copyBtn = container.querySelector("#copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(contact.email);
        }
        copyBtn.textContent = "[COPIED: " + contact.email + "]";
        setTimeout(() => {
          copyBtn.textContent = "COPY EMAIL";
        }, 2200);
      } catch {
        window.location.href = `mailto:${contact.email}`;
      }
    });
  }
}

export function renderFooter(container) {
  if (!container) return;
  const year = new Date().getFullYear();
  container.innerHTML = `
    <div class="footer-inner">
      <span>ZESRAB TANJEEL KHAN (@zeedan27) · ENGINEERED UNDER S.C.O.P.E.</span>
      <span>STATIC EDGE TARGET: CLOUDFLARE PAGES · © ${year}</span>
    </div>
  `;
}
