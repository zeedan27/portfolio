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

function buildDiffFragment() {
  return `
    <div class="ui ui-panel ui-diff" data-ui="diff-review">
      <div class="ui-diff__head">
        <svg class="ui-icon ui-diff__fold" viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 6.25 3.5 3.5 3.5-3.5"/></svg>
        <span class="ui-diff__tool" aria-hidden="true"><img src="/assets/icons/typescript.svg" alt="" width="14" height="14" loading="lazy"></span>
        <span class="ui-diff__repo">zeedan27/papyr</span><i class="ui-diff__slash" aria-hidden="true">/</i>
        <span class="ui-diff__path"><span class="ui-diff__dir">ingest/</span><b>scanner.ts</b></span>
        <span class="ui-spacer"></span>
        <span class="ui-diff__stat"><b class="is-add"><span class="ui-diff__was">+6</span><span class="ui-diff__now">+8</span></b><b class="is-del"><span class="ui-diff__was">&minus;1</span><span class="ui-diff__now">&minus;2</span></b></span>
      </div>
      <div class="ui-diff__hunk"><span>@@ -41,9 +41,12 @@</span> <em class="ui-diff__sig">indexDeckPages(deck, page = 0) {</em></div>
      <div class="ui-diff__lines">
        <div class="ui-diff__ln"><i>41</i><i>41</i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span><span class="k">const</span> text = <span class="f">extractText</span>(page);</span></div>
        <div class="ui-diff__ln is-del"><i>42</i><i></i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span><span class="k">if</span> (!text.length) <span class="k">return</span> [];</span></div>
        <div class="ui-diff__ln is-add"><i></i><i>42</i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span><span class="k">if</span> (text.length &lt; <mark class="ui-diff__w">MIN_CHARS</mark>) {</span></div>
        <div class="ui-diff__ln is-target" data-diff-target><i>43</i><i>43</i><span class="ui-diff__code" data-i="2"><span class="ui-diff__ind">    </span><span class="k">return</span> <span class="f">ocrFallback</span>(page.bitmap);</span></div>
        <div class="ui-diff__sug" data-diff-sug><div class="ui-diff__ln is-add"><i></i><i>43</i><span class="ui-diff__code" data-i="2"><span class="ui-diff__ind">    </span><span class="k">return</span> <span class="f">indexWithCitation</span>(page.num, <mark class="ui-diff__w">ocrFallback</mark>(page));</span></div></div>
        <div class="ui-diff__thread">
          <div class="ui-diff__by">
            <span class="ui-avatar" data-tone="4">ZK</span>
            <span class="ui-diff__name">Zesrab Khan</span>
            <span class="ui-diff__time">2m</span>
            <span class="ui-spacer"></span>
            <span class="ui-diff__act" data-diff-act>
              <button class="ui-btn ui-btn--sm ui-diff__apply" type="button" tabindex="-1" data-diff-apply><span class="ui-diff__lbl">Apply fix</span><i class="ui-diff__spin" aria-hidden="true"></i></button>
              <span class="ui-chip ui-diff__done"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 8.4 2.6 2.6L12 5.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>Applied</span>
            </span>
          </div>
          <div class="ui-diff__msg">Preserve slide page number on bitmap OCR fallback.</div>
        </div>
        <div class="ui-diff__ln"><i>44</i><i>44</i><span class="ui-diff__code" data-i="1"><span class="ui-diff__ind">  </span>}</span></div>
      </div>
    </div>
  `;
}

function buildTerminalFragment() {
  return `
    <div class="ui ui-panel ui-term" data-ui="terminal-run">
      <div class="ui-term__head">
        <span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="ui-term__title">zeedan27/prompt-eval</span>
        <span class="ui-meta">zsh</span>
        <span class="ui-spacer"></span>
        <span class="ui-chip ui-chip--plain ui-term__branch">main</span>
      </div>
      <div class="ui-term__screen" data-term-screen>
        <div class="ui-term__track" data-term-track>
          <div class="ui-term__ln ui-term__cmd"><span class="ui-term__cwd">~/eval</span><span class="ui-term__sig">$</span><span class="ui-term__typed" data-term-cmd>pytest probes/ --model llama3</span></div>
          <div class="ui-term__ln ui-term__meter" data-term-out data-term-meter><span class="ui-term__bar" style="--p:1"><i></i></span><span class="ui-term__count" data-term-count>4 of 4 suites</span></div>
          <div class="ui-term__ln ui-term__log" data-term-out data-term-step><svg class="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg><span class="ui-term__path">indirect_rag_leak.py</span><span class="ui-term__n">24 cases</span><span class="ui-term__t">640ms</span></div>
          <div class="ui-term__ln ui-term__log" data-term-out data-term-step><svg class="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg><span class="ui-term__path">tool_call_hijack.py</span><span class="ui-term__n">18 cases</span><span class="ui-term__t">510ms</span></div>
          <div class="ui-term__ln ui-term__log" data-term-out data-term-step><svg class="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg><span class="ui-term__path">system_prompt_exfil.py</span><span class="ui-term__n">32 cases</span><span class="ui-term__t">890ms</span></div>
          <div class="ui-term__ln ui-term__done" data-term-out data-term-done><span class="ui-term__ok"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.3 2.4 2.4 4.6-5"/></svg></span><b>Done</b><span class="ui-term__dim">98.6% defended</span></div>
        </div>
      </div>
    </div>
  `;
}

function buildWindowFragment() {
  return `
    <div class="ui ui-panel ui-win ui-win--compact" data-ui="window" data-open="Queued" data-work="Running" data-done="Scored">
      <div class="ui-win__bar">
        <span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="ui-win__crumb">SkillVerify <i>/</i> <b>Sandboxes</b></span>
        <span class="ui-spacer"></span>
        <span class="ui-win__search" aria-hidden="true"><span class="ui-win__ph">Filter</span><span class="ui-kbd">/</span></span>
      </div>
      <div class="ui-win__body">
        <nav class="ui-win__side" aria-hidden="true">
          <span class="ui-win__nav is-on">Queued<em>2</em></span>
          <span class="ui-win__nav">Scored<em>14</em></span>
          <span class="ui-win__nav">Alerts<em>0</em></span>
        </nav>
        <div class="ui-win__main">
          <ul class="ui-win__rows">
            <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="1">S1</span><span class="ui-win__who">sandbox-04</span><span class="ui-win__sub">LRU cache + lock</span><span class="ui-win__st" data-st>Queued</span></li>
            <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="3">S2</span><span class="ui-win__who">sandbox-05</span><span class="ui-win__sub">Rate limiter guard</span><span class="ui-win__st" data-st>Queued</span></li>
            <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="4">S3</span><span class="ui-win__who">sandbox-06</span><span class="ui-win__sub">Graph Dijkstra</span><span class="ui-win__st is-done" data-st>Scored</span></li>
            <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="2">S4</span><span class="ui-win__who">sandbox-07</span><span class="ui-win__sub">Deadlock retry</span><span class="ui-win__st is-done" data-st>Scored</span></li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function buildChecklistFragment() {
  return `
    <div class="ui ui-panel ui-checks" data-ui="checklist">
      <div class="ui-checks__head">
        <div class="ui-title">Offline field sync</div>
        <span class="ui-spacer"></span>
        <div class="ui-meta" data-checks-count>3 of 5</div>
      </div>
      <div class="ui-checks__bar"><i data-checks-bar style="--k:0.6"></i></div>
      <ul class="ui-checks__list">
        <li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Persist Room SQLite intake</span></li>
        <li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Compress 118-byte SMS SOS</span></li>
        <li class="ui-check is-done"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Assign UUIDv7 clinic keys</span></li>
        <li class="ui-check"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Sync PostGIS radius zone</span></li>
        <li class="ui-check"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">Verify delta ack receipt</span></li>
      </ul>
    </div>
  `;
}

function fragmentMarkup(kind) {
  switch (kind) {
    case "diff-review":
      return `<div class="at-corner" style="--ax:24px;--ay:28px" data-ui-loop>${buildDiffFragment()}</div>`;
    case "terminal-run":
      return `<div class="at-corner" style="--ax:24px;--ay:28px">${buildTerminalFragment()}</div>`;
    case "window":
      return `<div class="at-rise fit" style="--fit-max:456px;--ax:max(24px, 50% - 228px);--ay:28px;--ay-sm:20px">${buildWindowFragment()}</div>`;
    case "checklist":
      return `<div class="at-rise fit" style="--fit-max:380px;--ax:max(24px, 50% - 190px);--ay:28px;--ay-sm:20px">${buildChecklistFragment()}</div>`;
    default:
      return "";
  }
}

export function renderAbout(mountId, data) {
  const host = document.getElementById(mountId);
  if (!host || !data) return;

  host.innerHTML = `
    <div class="section-head">
      <h2 id="about-h">${escapeHtml(data.heading)}</h2>
    </div>
    <div class="grid">
      <div class="span-5 stack-4">
        <p class="t-lead">${escapeHtml(data.summary)}</p>
        <p class="t-body about-note">${escapeHtml(data.exploringNote)}</p>
        <ul class="rows">
          <li>
            <div>
              <span class="rows__name">${escapeHtml(data.education.institution)}</span>
              <p class="t-small">${escapeHtml(data.education.degree)} · ${escapeHtml(data.education.period)}</p>
            </div>
            <span class="rows__value mono">CGPA ${escapeHtml(data.education.cgpa)}</span>
          </li>
          ${data.experience
            .map(
              (exp) => `
            <li>
              <div>
                <span class="rows__name">${escapeHtml(exp.course)} · ${escapeHtml(exp.term)}</span>
                <p class="t-small">${escapeHtml(exp.detail)}</p>
              </div>
              <span class="rows__value mono">UTA</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="span-6 start-7">
        <div class="panel about-panel">
          <div class="dg" data-dg-still data-diagram='${escapeHtml(JSON.stringify(data.diagram))}'></div>
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
        <div class="stage stage--fade-b">${fragmentMarkup(proj.fragment)}</div>
      </div>
    </article>
  `;

  host.innerHTML = `
    <div class="group">
      <div class="section-head section-head--row">
        <h2 id="projects-h">Featured software, systems <span class="muted">and security projects</span></h2>
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

export function renderWorkflows(mountId, workflows) {
  const host = document.getElementById(mountId);
  if (!host || !Array.isArray(workflows) || !workflows.length) return;

  let activeIdx = 0;

  host.innerHTML = `
    <div class="grid">
      <div class="span-5 stack-5">
        <div class="section-head">
          <h2 id="workflows-h">Automated engineering workflows <span class="muted">on webhooks and crons</span></h2>
        </div>
        <ul class="rows" role="tablist" aria-label="Automation pipelines">
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
          <p>Languages, runtimes, databases, and automation platforms shipped across UIU coursework and projects.</p>
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
          <p class="t-h3">Public repositories on GitHub</p>
          <p class="t-small">Additional systems, agent tooling skills, and hackathon builds under @zeedan27.</p>
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
        <a class="link" href="${escapeHtml(contact.cvHtmlUrl)}" target="_blank" rel="noopener noreferrer">Interactive ATS CV</a>
        <a class="link" href="${escapeHtml(contact.linkedinUrl)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="link" href="${escapeHtml(contact.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub @zeedan27</a>
      </div>
    </div>
    <div class="closing__links">
      <div class="grid">
        <div class="span-4 stack-4">
          <a class="nav__logo" href="#top"><span class="mark" data-mark="dots" aria-hidden="true"></span>Zesrab Khan</a>
          <p class="footer__lede">UIU CSE senior building reliable full-stack and security systems.</p>
        </div>
        <div class="span-2 footer__col">
          <p class="t-card footer__col-title">Profile</p>
          <ul>
            <li><a href="#top">Spotlight</a></li>
            <li><a href="#about">About &amp; UTA</a></li>
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
