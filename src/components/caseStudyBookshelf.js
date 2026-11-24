/**
 * Interactive Two-Pane Case-Study Bookshelf (.frame.ui.app).
 * Dynamically renders 7 horizontal volumes and variable-length (5-6+) context-first developer thinking stages,
 * updating ARIA selection, tabindex, and keyboard focus in place without destroying active DOM nodes.
 */

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function padTwo(num) {
  return String(num).padStart(2, "0");
}

export function renderCaseStudyBookshelf(mountId, books) {
  const host = document.getElementById(mountId);
  if (!host || !Array.isArray(books) || !books.length) return;

  let activeBookIdx = 0;
  let activePageIdx = 0;
  let renderedBookIdx = -1;

  if (!host.querySelector(".cases-app")) {
    host.innerHTML = `
      <div class="section-head section-head--row">
        <h2 id="cases-h">Engineering case studies <span class="muted">from problem to architecture</span></h2>
        <a class="link" href="https://github.com/zeedan27" target="_blank" rel="noopener noreferrer">Browse @zeedan27</a>
      </div>
      <div class="frame ui ui-cases-shelf app fill cases-app" role="region" aria-label="Interactive engineering case-study shelf">
        <div class="cases-app__shelf">
          <div class="cases-app__spines" role="tablist" aria-label="Engineering case volumes"></div>
          <div class="cases-app__hint mono">
            <span>Select a project</span>
            <span id="shelf-counter">01 / ${padTwo(books.length)}</span>
          </div>
        </div>
        <div class="cases-app__reader" id="reader-sheet">
          <div class="reader-head">
            <div class="reader-title-row">
              <img class="ic ic-24" id="reader-icon" src="/assets/icons/typescript.svg" alt="" width="24" height="24" loading="lazy" aria-hidden="true">
              <div>
                <p class="t-card reader-book-name" id="reader-book-title"></p>
                <p class="t-small" id="reader-book-sub"></p>
              </div>
            </div>
            <a class="link mono" id="reader-repo-link" target="_blank" rel="noopener noreferrer">Open GitHub repo</a>
          </div>
          <div class="reader-tabs" role="tablist" aria-label="Developer thinking stages"></div>
          <div class="reader-body">
            <p class="reader-sheet__stage mono" id="sheet-stage"></p>
            <p class="t-card reader-sheet__heading" id="sheet-heading"></p>
            <p id="sheet-body"></p>
            <pre class="reader-sheet__artifact mono" id="sheet-artifact"></pre>
          </div>
          <div class="reader-foot">
            <span class="t-small mono" id="reader-stack"></span>
            <div class="reader-pager">
              <button class="btn btn--secondary" type="button" id="case-prev-page">Previous stage</button>
              <button class="btn btn--secondary" type="button" id="case-next-page">Next stage</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const spinesEl = host.querySelector(".cases-app__spines");
  const counterEl = host.querySelector("#shelf-counter");
  const titleEl = host.querySelector("#reader-book-title");
  const subEl = host.querySelector("#reader-book-sub");
  const repoEl = host.querySelector("#reader-repo-link");
  const iconEl = host.querySelector("#reader-icon");
  const tabsEl = host.querySelector(".reader-tabs");
  const sheetEl = host.querySelector("#reader-sheet");
  const bodyWrapEl = host.querySelector(".reader-body");
  const stageEl = host.querySelector("#sheet-stage");
  const headingEl = host.querySelector("#sheet-heading");
  const bodyEl = host.querySelector("#sheet-body");
  const artifactEl = host.querySelector("#sheet-artifact");
  const stackEl = host.querySelector("#reader-stack");
  const prevBtn = host.querySelector("#case-prev-page");
  const nextBtn = host.querySelector("#case-next-page");

  const getActiveStages = () => {
    const book = books[activeBookIdx];
    return Array.isArray(book?.stages) ? book.stages : [];
  };

  let spineButtons = [];
  let tabButtons = [];

  const updateSpinesState = (focusActive = false) => {
    spineButtons.forEach((btn, idx) => {
      const active = idx === activeBookIdx;
      btn.setAttribute("aria-selected", String(active));
      btn.tabIndex = active ? 0 : -1;
      if (active && focusActive) btn.focus();
    });
  };

  const updateTabsState = (focusActive = false) => {
    tabButtons.forEach((btn, idx) => {
      const active = idx === activePageIdx;
      btn.setAttribute("aria-selected", String(active));
      btn.tabIndex = active ? 0 : -1;
      if (active && focusActive) btn.focus();
    });
  };

  const mountSpines = () => {
    spinesEl.innerHTML = books
      .map(
        (b, idx) => `
      <button
        class="book-spine"
        type="button"
        role="tab"
        aria-selected="${idx === activeBookIdx}"
        tabindex="${idx === activeBookIdx ? 0 : -1}"
        data-book-index="${idx}"
      >
        <span class="book-spine__code mono">${escapeHtml(b.spineCode)}</span>
        <span class="book-spine__title">${escapeHtml(b.title)}</span>
        <span class="book-spine__year mono">${escapeHtml(b.stages?.length || 0)} steps</span>
      </button>
    `
      )
      .join("");

    spineButtons = [...spinesEl.querySelectorAll(".book-spine")];
    spineButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        activeBookIdx = idx;
        activePageIdx = 0;
        render(true);
      });
      btn.addEventListener("keydown", (e) => {
        const delta =
          e.key === "ArrowDown" || e.key === "ArrowRight"
            ? 1
            : e.key === "ArrowUp" || e.key === "ArrowLeft"
              ? -1
              : 0;
        if (!delta) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        activeBookIdx = (idx + delta + books.length) % books.length;
        activePageIdx = 0;
        render(true, "spine");
      });
    });
  };

  const mountStageTabs = (stages) => {
    tabsEl.innerHTML = stages
      .map(
        (s, idx) => `
      <button
        class="reader-tab mono"
        type="button"
        role="tab"
        aria-selected="${idx === activePageIdx}"
        tabindex="${idx === activePageIdx ? 0 : -1}"
        data-page-index="${idx}"
      >${escapeHtml(s.shortTab)}</button>
    `
      )
      .join("");

    tabButtons = [...tabsEl.querySelectorAll(".reader-tab")];
    tabButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        activePageIdx = idx;
        render(true);
      });
      btn.addEventListener("keydown", (e) => {
        const delta =
          e.key === "ArrowRight" || e.key === "ArrowDown"
            ? 1
            : e.key === "ArrowLeft" || e.key === "ArrowUp"
              ? -1
              : 0;
        if (!delta) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        activePageIdx = (idx + delta + stages.length) % stages.length;
        render(true, "tab");
      });
    });
  };

  const render = (animate = false, focusTarget = null) => {
    const book = books[activeBookIdx];
    const stages = getActiveStages();
    if (!book || !stages.length) return;
    if (activePageIdx >= stages.length) activePageIdx = 0;

    if (renderedBookIdx !== activeBookIdx) {
      mountStageTabs(stages);
      renderedBookIdx = activeBookIdx;
    }

    updateSpinesState(focusTarget === "spine");
    updateTabsState(focusTarget === "tab");

    const stage = stages[activePageIdx];
    counterEl.textContent = `${padTwo(activeBookIdx + 1)} / ${padTwo(books.length)}`;
    titleEl.textContent = book.title;
    subEl.textContent = `${book.subtitle} · ${book.year}`;
    repoEl.href = book.repoUrl;
    repoEl.textContent = "Open GitHub repo";
    if (iconEl) iconEl.src = book.icon || "/assets/icons/github.svg";

    stageEl.textContent = `${stage.step} (${activePageIdx + 1}/${stages.length})`;
    headingEl.textContent = stage.heading;
    bodyEl.textContent = stage.body;
    artifactEl.textContent = stage.contextNote;
    stackEl.textContent = book.stack.join(" · ");

    prevBtn.disabled = activePageIdx === 0;
    nextBtn.disabled = activePageIdx === stages.length - 1;

    if (animate) {
      bodyWrapEl.classList.remove("is-turning");
      void bodyWrapEl.offsetWidth;
      bodyWrapEl.classList.add("is-turning");
    }
  };

  prevBtn.addEventListener("click", () => {
    if (activePageIdx > 0) {
      activePageIdx -= 1;
      render(true);
    }
  });

  nextBtn.addEventListener("click", () => {
    const stages = getActiveStages();
    if (activePageIdx < stages.length - 1) {
      activePageIdx += 1;
      render(true);
    }
  });

  sheetEl.addEventListener("keydown", (e) => {
    if (e.target.closest?.('[role="tab"]')) return;
    const stages = getActiveStages();
    if (e.key === "ArrowRight" && activePageIdx < stages.length - 1) {
      e.preventDefault();
      activePageIdx += 1;
      render(true);
    } else if (e.key === "ArrowLeft" && activePageIdx > 0) {
      e.preventDefault();
      activePageIdx -= 1;
      render(true);
    }
  });

  mountSpines();
  render(false);
}
