/**
 * Section renderers following taste-skill system.css, cards.css, layout.css,
 * and diagram.js structural recipes for Zesrab Tanjeel Khan (@zeedan27).
 */

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildDiffFragment(spec = {}) {
  const repo = escapeHtml(spec.repo || "zeedan27/mindweave");
  const dir = escapeHtml(spec.dir || "canvas/");
  const file = escapeHtml(spec.file || "elkLayout.ts");
  const signature = escapeHtml(spec.signature || "layoutKnowledgeMap(nodes, mode) {");
  const delLine = escapeHtml(spec.delLine || "return runElkLayout(nodes, mode);");
  const addCondition = escapeHtml(spec.addCondition || "if (!node.citations.length) {");
  const targetLine = escapeHtml(spec.targetLine || "return attachPlaceholder(node);");
  const suggestionCall = escapeHtml(spec.suggestionCall || "attachCitationPill");
  const suggestionArgs = escapeHtml(spec.suggestionArgs || "node.youtubeTs, node.pdfPage");
  const reviewer = escapeHtml(spec.reviewer || "Zesrab Khan");
  const comment = escapeHtml(
    spec.comment || "Preserve YouTube MM:SS and PDF page citation pills before ELK radial layout."
  );

  return `
    <div class="ui ui-panel ui-diff" data-ui="diff-review">
      <div class="ui-diff__head">
        <svg class="ui-icon ui-diff__fold" viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 6.25 3.5 3.5 3.5-3.5"/></svg>
        <span class="ui-diff__tool" aria-hidden="true"><img src="/assets/icons/typescript.svg" alt="" width="14" height="14" loading="lazy"></span>
        <span class="ui-diff__repo">${repo}</span><i class="ui-diff__slash" aria-hidden="true">/</i>
        <span class="ui-diff__path"><span class="ui-diff__dir">${dir}</span><b>${file}</b></span>
        <span class="ui-spacer"></span>
        <span class="ui-diff__stat"><b class="is-add"><span class="ui-diff__was">+4</span><span class="ui-diff__now">+6</span></b><b class="is-del"><span class="ui-diff__was">&minus;1</span><span class="ui-diff__now">&minus;2</span></b></span>
      </div>
      <div class="ui-diff__hunk"><span>@@ -41,9 +41,12 @@</span> <em class="ui-diff__sig">${signature}</em></div>
      <div class="ui-diff__lines">
        <div class="ui-diff__ln"><i>41</i><i>41</i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span><span class="k">const</span> pills = <span class="f">readSources</span>(node);</span></div>
        <div class="ui-diff__ln is-del"><i>42</i><i></i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span>${delLine}</span></div>
        <div class="ui-diff__ln is-add"><i></i><i>42</i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span>${addCondition}</span></div>
        <div class="ui-diff__ln is-target" data-diff-target><i>43</i><i>43</i><span class="ui-diff__code" data-i="2"><span class="ui-diff__ind">    </span>${targetLine}</span></div>
        <div class="ui-diff__sug" data-diff-sug><div class="ui-diff__ln is-add"><i></i><i>43</i><span class="ui-diff__code" data-i="2"><span class="ui-diff__ind">    </span><span class="k">return</span> <span class="f">${suggestionCall}</span>(${suggestionArgs});</span></div></div>
        <div class="ui-diff__thread">
          <div class="ui-diff__by">
            <span class="ui-avatar" data-tone="4">ZK</span>
            <span class="ui-diff__name">${reviewer}</span>
            <span class="ui-diff__time">2m</span>
            <span class="ui-spacer"></span>
            <span class="ui-diff__act" data-diff-act>
              <button class="ui-btn ui-btn--sm ui-diff__apply" type="button" tabindex="-1" data-diff-apply><span class="ui-diff__lbl">Apply fix</span><i class="ui-diff__spin" aria-hidden="true"></i></button>
              <span class="ui-chip ui-diff__done"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 8.4 2.6 2.6L12 5.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>Applied</span>
            </span>
          </div>
          <div class="ui-diff__msg">${comment}</div>
        </div>
        <div class="ui-diff__ln"><i>44</i><i>44</i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span>}</span></div>
      </div>
    </div>
  `;
}

function buildTerminalFragment(spec = {}) {
  const title = escapeHtml(spec.title || "zeedan27/papyr");
  const cwd = escapeHtml(spec.cwd || "~/papyr");
  const cmd = escapeHtml(spec.cmd || "uv run papyr build attention.pdf --acts 4");
  const meter = escapeHtml(spec.meter || "4 of 4 stages");
  const steps = Array.isArray(spec.steps) ? spec.steps : [];
  const done = escapeHtml(spec.done || "4-act scrollytelling MP4 ready");

  return `
    <div class="ui ui-panel ui-term" data-ui="terminal-run">
      <div class="ui-term__head">
        <span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="ui-term__title">${title}</span>
        <span class="ui-meta">zsh</span>
        <span class="ui-spacer"></span>
        <span class="ui-chip ui-chip--plain ui-term__branch">main</span>
      </div>
      <div class="ui-term__screen" data-term-screen>
        <div class="ui-term__track" data-term-track>
          <div class="ui-term__ln ui-term__cmd"><span class="ui-term__cwd">${cwd}</span><span class="ui-term__sig">$</span><span class="ui-term__typed" data-term-cmd>${cmd}</span></div>
          <div class="ui-term__ln ui-term__meter" data-term-out data-term-meter><span class="ui-term__bar" style="--p:1"><i></i></span><span class="ui-term__count" data-term-count>${meter}</span></div>
          ${steps
            .map(
              (st) =>
                `<div class="ui-term__ln ui-term__log" data-term-out data-term-step><svg class="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg><span class="ui-term__path">${escapeHtml(st.path)}</span><span class="ui-term__n">${escapeHtml(st.count)}</span><span class="ui-term__t">${escapeHtml(st.status)}</span></div>`
            )
            .join("")}
          <div class="ui-term__ln ui-term__done" data-term-out data-term-done><span class="ui-term__ok"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.3 2.4 2.4 4.6-5"/></svg></span><b>Done</b><span class="ui-term__dim">${done}</span></div>
        </div>
      </div>
    </div>
  `;
}

function buildWindowFragment(spec = {}) {
  const crumb = escapeHtml(spec.crumb || "SkillVerify");
  const section = escapeHtml(spec.section || "Hiring Pipeline");
  const states = spec.states || { open: "Proctored", work: "Grooming", done: "Verified" };
  const navItems = Array.isArray(spec.nav) ? spec.nav : [];
  const rows = Array.isArray(spec.rows) ? spec.rows : [];

  return `
    <div class="ui ui-panel ui-win ui-win--compact" data-ui="window" data-open="${escapeHtml(states.open)}" data-work="${escapeHtml(states.work)}" data-done="${escapeHtml(states.done)}">
      <div class="ui-win__bar">
        <span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="ui-win__crumb">${crumb} <i>/</i> <b>${section}</b></span>
        <span class="ui-spacer"></span>
        <span class="ui-win__search" aria-hidden="true"><span class="ui-win__ph">Filter</span><span class="ui-kbd">/</span></span>
      </div>
      <div class="ui-win__body">
        <nav class="ui-win__side" aria-hidden="true">
          ${navItems
            .map(
              (n) =>
                `<span class="ui-win__nav${n.active ? " is-on" : ""}">${escapeHtml(n.label)}<em>${escapeHtml(n.count)}</em></span>`
            )
            .join("")}
        </nav>
        <div class="ui-win__main">
          <ul class="ui-win__rows">
            ${rows
              .map(
                (r) =>
                  `<li class="ui-win__row" data-row><span class="ui-avatar" data-tone="${escapeHtml(r.tone)}">${escapeHtml(r.initials)}</span><span class="ui-win__who">${escapeHtml(r.who)}</span><span class="ui-win__sub">${escapeHtml(r.sub)}</span><span class="ui-win__st${r.done ? " is-done" : ""}" data-st>${escapeHtml(r.status)}</span></li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function buildChecklistFragment(spec = {}) {
  const title = escapeHtml(spec.title || "Daak v2 · 999 Civic Dispatch");
  const count = escapeHtml(spec.count || "3 of 5");
  const items = Array.isArray(spec.items) ? spec.items : [];

  return `
    <div class="ui ui-panel ui-checks" data-ui="checklist">
      <div class="ui-checks__head">
        <div class="ui-title">${title}</div>
        <span class="ui-spacer"></span>
        <div class="ui-meta" data-checks-count>${count}</div>
      </div>
      <div class="ui-checks__bar"><i data-checks-bar style="--k:0.6"></i></div>
      <ul class="ui-checks__list">
        ${items
          .map(
            (it) =>
              `<li class="ui-check${it.done ? " is-done" : ""}"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">${escapeHtml(it.label)}</span></li>`
          )
          .join("")}
      </ul>
    </div>
  `;
}

function fragmentMarkup(proj) {
  const spec = proj.fragmentSpec || {};
  switch (proj.fragment) {
    case "diff-review":
      return `<div class="at-corner" style="--ax:24px;--ay:28px" data-ui-loop>${buildDiffFragment(spec)}</div>`;
    case "terminal-run":
      return `<div class="at-corner" style="--ax:24px;--ay:28px">${buildTerminalFragment(spec)}</div>`;
    case "window":
      return `<div class="at-rise fit" style="--fit-max:456px;--ax:max(24px, 50% - 228px);--ay:28px;--ay-sm:20px">${buildWindowFragment(spec)}</div>`;
    case "checklist":
      return `<div class="at-rise fit" style="--fit-max:380px;--ax:max(24px, 50% - 190px);--ay:28px;--ay-sm:20px">${buildChecklistFragment(spec)}</div>`;
    default:
      return "";
  }
}

export function renderAbout(mountId, data) {
  const host = document.getElementById(mountId);
  if (!host || !data) return;

  const edu = data.education || {};
  const work = data.workExperience || {};
  const res = data.research || {};

  host.innerHTML = `
    <div class="section-head">
      <h2 id="about-h">${escapeHtml(data.heading)}</h2>
      <p class="t-lead about-lead">${escapeHtml(data.summary)}</p>
    </div>
    <div class="grid">
      <div class="span-6 about-col">
        <div class="about-domain">
          <h3 class="about-domain__title mono">Education</h3>
          <ul class="rows">
            <li>
              <div>
                <span class="rows__name">${escapeHtml(edu.institution)}</span>
                <p class="t-small">${escapeHtml(edu.degree)} · ${escapeHtml(edu.major)}</p>
                <p class="t-small">${escapeHtml(edu.period)} · ${escapeHtml(edu.prior)}</p>
              </div>
              <span class="rows__value mono">CGPA ${escapeHtml(edu.cgpa)}</span>
            </li>
          </ul>
        </div>
        <div class="about-domain">
          <h3 class="about-domain__title mono">Work experience</h3>
          <div class="about-work__head">
            <div>
              <span class="rows__name">${escapeHtml(work.role)}</span>
              <p class="t-small">${escapeHtml(work.organization)}</p>
            </div>
            <span class="rows__value mono">${escapeHtml(work.period)}</span>
          </div>
          <div class="about-courses mono" aria-label="Assisted CSE courses">
            ${(work.courses || []).map((c) => `<span>${escapeHtml(c)}</span>`).join("")}
          </div>
          <ul class="about-list t-small">
            ${(work.highlights || []).map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="span-6 about-col">
        <div class="panel about-research">
          <h3 class="about-research__title">${escapeHtml(res.title)}</h3>
          <div class="about-research__head">
            <span class="mono">${escapeHtml(res.status)} · ${escapeHtml(res.supervisor)}</span>
          </div>
          <p class="about-research__pipe mono">${escapeHtml(res.pipeline)}</p>
          <p class="t-small">${escapeHtml(res.summary)}</p>
          <div class="about-courses about-courses--light mono" aria-label="Benchmark datasets audited">
            ${(res.datasets || []).map((d) => `<span>${escapeHtml(d)}</span>`).join("")}
          </div>
        </div>
        <div class="about-domain">
          <h3 class="about-domain__title mono">Certification</h3>
          <ul class="rows">
            <li>
              <div>
                <span class="rows__name">IBM Data Science Foundations</span>
                <p class="t-small">${escapeHtml(res.certification)}</p>
              </div>
              <span class="rows__value mono">IBM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

export function renderProjects(mountId, projects) {
  const host = document.getElementById(mountId);
  if (!host || !Array.isArray(projects) || projects.length < 4) return;
  if (host.querySelector(".card")) return;

  const renderCard = (proj) => `
    <article class="card card--row span-6">
      <h3>${escapeHtml(proj.title)}</h3>
      <p>${escapeHtml(proj.description)}</p>
      <a class="card__link" href="${escapeHtml(proj.repoUrl)}" target="_blank" rel="noopener noreferrer">View ${escapeHtml(proj.shortName)} repo<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 6h8M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <div class="panel panel--flush" data-fx="gradient-mesh" data-fx-seed="${proj.groundSeed}" data-fx-params='{"drift":0}'>
        <div class="stage stage--fade-b">${fragmentMarkup(proj)}</div>
      </div>
    </article>
  `;

  host.innerHTML = `
    <div class="group">
      <div class="section-head section-head--row">
        <h2 id="projects-h">Flagship full-stack, AI <span class="muted">and spatial systems</span></h2>
        <a class="link" href="https://github.com/zeedan27" target="_blank" rel="noopener noreferrer">All @zeedan27 repos</a>
      </div>
      <div class="grid">
        ${projects.slice(0, 2).map(renderCard).join("")}
      </div>
    </div>
    <div class="grid">
      ${projects.slice(2, 4).map(renderCard).join("")}
    </div>
  `;
}

export function renderWorkflows(mountId, workflowsInput) {
  const host = document.getElementById(mountId);
  const workflows = Array.isArray(workflowsInput) ? workflowsInput : workflowsInput?.items || [];
  const repoUrl = (!Array.isArray(workflowsInput) && workflowsInput?.repoUrl) || "https://github.com/zeedan27/n8n-automations";
  if (!host || !workflows.length) return;

  let activeIdx = 0;

  host.innerHTML = `
    <div class="section-head section-head--row">
      <h2 id="workflows-h">n8n automation blueprints <span class="muted">sanitized and ready to import</span></h2>
      <a class="link" href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer">Open n8n-automations repo</a>
    </div>
    <div class="grid">
      <div class="span-5 stack-5">
        <ul class="rows" role="tablist" aria-label="n8n automation workflows">
          ${workflows
            .map(
              (wf, idx) => `
            <li class="workflow-row" role="tab" tabindex="0" aria-selected="${idx === 0}" data-wf-idx="${idx}">
              <div>
                <span class="rows__name">${escapeHtml(wf.name)}</span>
                <p class="t-small">${escapeHtml(wf.summary)}</p>
              </div>
              <span class="rows__value mono">${escapeHtml(wf.tag)}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="span-6 start-7">
        <div class="panel workflow-panel" data-wf-panel>
          <div class="dg" id="workflow-diagram-host" data-diagram='${escapeHtml(JSON.stringify(workflows[0].diagram))}'></div>
        </div>
      </div>
    </div>
  `;

  const rowEls = host.querySelectorAll(".workflow-row");
  const dgHost = host.querySelector("#workflow-diagram-host");

  const selectWorkflow = async (idx) => {
    activeIdx = idx;
    rowEls.forEach((el, i) => el.setAttribute("aria-selected", String(i === activeIdx)));
    const spec = workflows[activeIdx].diagram;
    dgHost.setAttribute("data-diagram", JSON.stringify(spec));
    try {
      const modUrl = "/assets/diagrams/diagram.js";
      const mod = await import(/* @vite-ignore */ modUrl);
      const dg = mod.default;
      dgHost.innerHTML = "";
      dg.mount(dgHost, spec);
    } catch {
      // Fallback already intact via data-diagram attribute on initial load
    }
  };

  rowEls.forEach((row) => {
    row.addEventListener("click", () => selectWorkflow(Number(row.dataset.wfIdx)));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectWorkflow(Number(row.dataset.wfIdx));
      }
    });
  });
}

export function renderStack(mountId, skills, repos) {
  const host = document.getElementById(mountId);
  if (!host || !Array.isArray(skills)) return;
  if (host.querySelector(".rows")) return;

  host.innerHTML = `
    <div class="grid">
      <div class="span-6 stack-5">
        <div class="section-head">
          <h2 id="stack-h" class="mo-wh__text">Systems stack and <strong>engineering tools</strong></h2>
          <p>Languages, frameworks, databases, and research tooling shipped across UIU CSE and open-source builds.</p>
        </div>
        <ul class="rows">
          ${skills
            .map(
              (group) => `
            <li>
              <div>
                <span class="rows__name">${escapeHtml(group.category)}</span>
                <p class="t-small">${escapeHtml(group.items)}</p>
                <div class="stack-icons">
                  ${group.icons
                    .map(
                      (ic) =>
                        `<img class="ic ic-24" src="${escapeHtml(ic.icon)}" alt="${escapeHtml(ic.name)}" width="24" height="24" loading="lazy">`
                    )
                    .join("")}
                </div>
              </div>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="span-5 start-8 stack-5">
        <div class="section-head">
          <p class="t-h3">Portfolio-worthy public repositories</p>
          <p class="t-small">Curated engineering builds, automation catalogs, and agent frameworks under @zeedan27.</p>
        </div>
        <ul class="rows">
          ${(repos || [])
            .map(
              (repo) => `
            <li>
              <div>
                <a class="rows__name" href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}</a>
                <p class="t-small">${escapeHtml(repo.summary)}</p>
              </div>
              <span class="rows__value mono">${escapeHtml(repo.tag)}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;
}

export function renderClosing(mountId, contact) {
  const host = document.getElementById(mountId);
  if (!host || !contact) return;

  host.innerHTML = `
    <div class="closing__cta close--type">
      <div class="section-head">
        <h2 id="close-h">${escapeHtml(contact.heading)}</h2>
        <p>${escapeHtml(contact.lead)}</p>
      </div>
      <a class="btn btn--primary btn--xl btn--wide" href="${escapeHtml(contact.cvPdfUrl)}" target="_blank" rel="noopener noreferrer">Download CV<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a>
      <div class="closing__direct mono t-small">
        <a class="link" href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>
        <a class="link" href="${escapeHtml(contact.linkedinUrl)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="link" href="${escapeHtml(contact.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub @zeedan27</a>
      </div>
    </div>
    <div class="closing__links">
      <div class="grid">
        <div class="span-4 stack-4">
          <a class="nav__logo" href="#top"><span class="mark" data-mark="dots" aria-hidden="true"></span>Zesrab Khan</a>
          <p class="footer__lede">UIU Computer Science and Engineering undergraduate (Data Science major) and CSE UGA.</p>
        </div>
        <div class="span-2 footer__col">
          <p class="t-card footer__col-title">Profile</p>
          <ul>
            <li><a href="#top">Spotlight</a></li>
            <li><a href="#about">About &amp; UGA</a></li>
          </ul>
        </div>
        <div class="span-2 footer__col">
          <p class="t-card footer__col-title">Work</p>
          <ul>
            <li><a href="#cases">Case logs</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div class="span-2 footer__col">
          <p class="t-card footer__col-title">Systems</p>
          <ul>
            <li><a href="#workflows">Workflows</a></li>
            <li><a href="#stack">Tech stack</a></li>
          </ul>
        </div>
        <div class="span-2 footer__col">
          <p class="t-card footer__col-title">Connect</p>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="mailto:${escapeHtml(contact.email)}">Email</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__legal">
        <span>&copy; 2026 Zesrab Tanjeel Khan</span>
        <div class="socials"></div>
        <span class="credits">Product names and logos are trademarks of their owners · Portraits by Zesrab Khan</span>
      </div>
    </div>
  `;
}
