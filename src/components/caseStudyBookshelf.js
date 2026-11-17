/**
 * Interactive Two-Pane Case-Study Bookshelf (.frame.ui.app).
 * Progressively enhances SSR/static HTML in #cases-mount or builds from `books` if empty.
 */
const PAGE_KEYS = [
  { key: "observation", short: "01 Observation" },
  { key: "research", short: "02 Research & Gap" },
  { key: "build", short: "03 The Build" },
  { key: "frictionFix", short: "04 Friction & Fix" }
];

const BOOK_ICONS = {
  papyr: "/assets/icons/typescript.svg",
  "scope-baton": "/assets/icons/n8n.svg",
  skillverify: "/assets/icons/docker.svg",
  daak: "/assets/icons/kotlin.svg",
  shishucare: "/assets/icons/postgres.svg"
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function renderCaseStudyBookshelf(mountId, books) {
  const host = document.getElementById(mountId);
  if (!host || !Array.isArray(books) || !books.length) return;

  let activeBookIdx = 0;
  let activePageIdx = 0;

  if (!host.querySelector(".cases-app")) {
    host.innerHTML = `
      <div class="section-head section-head--row">
        <h2 id="cases-h">Five engineering case studies <span class="muted">from shipped projects</span></h2>
        <a class="link" href="https://github.com/zeedan27" target="_blank" rel="noopener noreferrer">Browse @zeedan27</a>
      </div>
      <div class="frame ui ui-cases-shelf app fill cases-app" role="region" aria-label="Interactive engineering case-study shelf">
        <div class="cases-app__shelf">
          <div class="cases-app__spines" role="tablist" aria-label="Engineering case volumes"></div>
          <div class="cases-app__hint mono">
            <span>Select a volume</span>
            <span id="shelf-counter">01 / 05</span>
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
          <div class="reader-tabs" role="tablist" aria-label="Case study stages"></div>
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

  const renderSpines = () => {
    spinesEl.innerHTML = books
      .map(
        (b, idx) => `
      <button
        class="book-spine"
        type="button"
        role="tab"
        aria-selected="${idx === activeBookIdx}"
        data-book-index="${idx}"
      >
        <span class="book-spine__code mono">${escapeHtml(b.spineCode)}</span>
        <span class="book-spine__title">${escapeHtml(b.title)}</span>
        <span class="book-spine__year mono">${escapeHtml(b.year)}</span>
      </button>
    `
      )
      .join("");

    spinesEl.querySelectorAll(".book-spine").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeBookIdx = Number(btn.dataset.bookIndex);
        activePageIdx = 0;
        render(true);
      });
    });
  };

  const renderTabs = () => {
    tabsEl.innerHTML = PAGE_KEYS.map(
      (p, idx) => `
      <button
        class="reader-tab mono"
        type="button"
        role="tab"
        aria-selected="${idx === activePageIdx}"
        data-page-index="${idx}"
      >${escapeHtml(p.short)}</button>
    `
    ).join("");

    tabsEl.querySelectorAll(".reader-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activePageIdx = Number(btn.dataset.pageIndex);
        render(true);
      });
    });
  };

  const render = (animate = false) => {
    const book = books[activeBookIdx];
    const pageMeta = PAGE_KEYS[activePageIdx];
    const page = book.pages[pageMeta.key];

    renderSpines();
    renderTabs();

    counterEl.textContent = `0${activeBookIdx + 1} / 0${books.length}`;
    titleEl.textContent = book.title;
    subEl.textContent = `${book.subtitle} · ${book.year}`;
    repoEl.href = book.repoUrl;
    repoEl.textContent = "Open GitHub repo";
    if (iconEl) iconEl.src = BOOK_ICONS[book.id] || "/assets/icons/github.svg";

    stageEl.textContent = page.stage;
    headingEl.textContent = page.heading;
    bodyEl.textContent = page.body;
    artifactEl.textContent = page.artifact;
    stackEl.textContent = book.stack.join(" · ");

    prevBtn.disabled = activePageIdx === 0;
    nextBtn.disabled = activePageIdx === PAGE_KEYS.length - 1;

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
    if (activePageIdx < PAGE_KEYS.length - 1) {
      activePageIdx += 1;
      render(true);
    }
  });

  sheetEl.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && activePageIdx < PAGE_KEYS.length - 1) {
      activePageIdx += 1;
      render(true);
    } else if (e.key === "ArrowLeft" && activePageIdx > 0) {
      activePageIdx -= 1;
      render(true);
    }
  });

  render(false);
}
