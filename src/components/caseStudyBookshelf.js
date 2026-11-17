import { escapeHtml } from "./heroSpotlight.js";

const PAGE_KEYS = ["observation", "research", "build", "frictionFix"];

/**
 * Interactive 4-Stage Engineering Case-Study Bookshelf.
 * Displays real repositories structured as:
 * 01 Observation -> 02 Research & Gap -> 03 The Build -> 04 Friction & Fix
 */
export function renderCaseStudyBookshelf(container, books) {
  if (!container) return;

  if (!Array.isArray(books) || books.length === 0) {
    container.innerHTML = `
      <div class="section-inner">
        <div class="section-header">
          <span class="section-eyebrow">02 // ENGINEERING CASE LOGS</span>
          <h2 id="cases-heading" class="section-title">No case studies configured.</h2>
        </div>
      </div>
    `;
    return;
  }

  let activeBookIdx = 0;
  let activePageIdx = 0;

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-header">
        <span class="section-eyebrow">02 // INTERACTIVE CASE-STUDY BOOKSHELF</span>
        <h2 id="cases-heading" class="section-title">How I diagnose gaps, build systems, and fix what breaks.</h2>
        <p class="section-lead">
          Select any engineering manual from the shelf and turn through the four stages of real-world problem solving—from initial observation and research to production friction and resolution.
        </p>
      </div>

      <div class="bookshelf-layout">
        <div class="shelf-rack" role="tablist" aria-label="Case study manuals">
          <div class="shelf-rack-label">SELECT FIELD MANUAL (${books.length})</div>
          <div id="shelf-spines" style="display: contents;"></div>
        </div>

        <div class="book-reader-shell">
          <article id="book-reader" class="book-reader" tabindex="0" aria-live="polite" aria-label="Case study page reader"></article>
        </div>
      </div>
    </div>
  `;

  const spinesEl = container.querySelector("#shelf-spines");
  const readerEl = container.querySelector("#book-reader");

  const renderSpines = () => {
    spinesEl.innerHTML = books
      .map(
        (book, idx) => `
        <button
          type="button"
          class="book-spine ${idx === activeBookIdx ? "is-active" : ""}"
          data-book-idx="${idx}"
          data-accent="${escapeHtml(book.accentColor)}"
          role="tab"
          aria-selected="${String(idx === activeBookIdx)}"
        >
          <span class="spine-code">${escapeHtml(book.code)}</span>
          <span class="spine-title">${escapeHtml(book.spineTitle)}</span>
          <span class="spine-sub">${escapeHtml(book.subtitle)}</span>
        </button>`
      )
      .join("");

    spinesEl.querySelectorAll(".book-spine").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextIdx = Number(btn.getAttribute("data-book-idx"));
        if (nextIdx !== activeBookIdx) {
          activeBookIdx = nextIdx;
          activePageIdx = 0;
          renderSpines();
          renderReader(true);
        }
      });
    });
  };

  const renderReader = (animateFlip = false) => {
    const book = books[activeBookIdx];
    const pageKey = PAGE_KEYS[activePageIdx];
    const page = book.pages[pageKey];

    if (animateFlip) {
      readerEl.classList.remove("is-turning");
      // Trigger reflow so the 3D turn animation replays cleanly
      void readerEl.offsetWidth;
      readerEl.classList.add("is-turning");
    }

    readerEl.innerHTML = `
      <div>
        <div class="reader-top">
          <div>
            <div class="reader-book-code">${escapeHtml(book.code)}</div>
            <h3 class="reader-book-title">${escapeHtml(book.title)}</h3>
            <p class="reader-book-sub">${escapeHtml(book.subtitle)}</p>
          </div>
          <a
            href="${escapeHtml(book.repoUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            class="reader-repo-link"
          >
            VIEW REPO ↗
          </a>
        </div>

        <div class="stage-tabs" role="tablist" aria-label="Problem solving stages" style="margin: 18px 0;">
          ${PAGE_KEYS.map((key, idx) => {
            const p = book.pages[key];
            return `
              <button
                type="button"
                class="stage-tab ${idx === activePageIdx ? "is-active" : ""}"
                data-stage-idx="${idx}"
                role="tab"
                aria-selected="${String(idx === activePageIdx)}"
              >
                <span class="stage-tab-step">STAGE ${escapeHtml(p.step)}</span>
                <span class="stage-tab-label">${escapeHtml(p.tag)}</span>
              </button>`;
          }).join("")}
        </div>

        <div class="page-sheet">
          <div>
            <span class="page-tag">${escapeHtml(page.step)} // ${escapeHtml(page.tag)}</span>
            <h4 class="page-title">${escapeHtml(page.title)}</h4>
            <p class="page-body">${escapeHtml(page.body)}</p>
          </div>
          <div class="page-evidence">
            <strong>VERIFIED TRACE:</strong> ${escapeHtml(page.evidence)}
          </div>
        </div>
      </div>

      <div class="reader-footer">
        <div class="tech-pill-row">
          ${book.techStack.map((tech) => `<span class="tech-pill">${escapeHtml(tech)}</span>`).join("")}
        </div>

        <div class="page-controls">
          <button
            type="button"
            class="page-btn"
            id="book-prev-btn"
            ${activePageIdx === 0 ? "disabled" : ""}
          >
            ← PREV
          </button>
          <span class="page-counter">${activePageIdx + 1} / ${PAGE_KEYS.length}</span>
          <button
            type="button"
            class="page-btn"
            id="book-next-btn"
            ${activePageIdx === PAGE_KEYS.length - 1 ? "disabled" : ""}
          >
            NEXT →
          </button>
        </div>
      </div>
    `;

    readerEl.querySelectorAll(".stage-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextStage = Number(btn.getAttribute("data-stage-idx"));
        if (nextStage !== activePageIdx) {
          activePageIdx = nextStage;
          renderReader(true);
        }
      });
    });

    const prevBtn = readerEl.querySelector("#book-prev-btn");
    const nextBtn = readerEl.querySelector("#book-next-btn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (activePageIdx > 0) {
          activePageIdx -= 1;
          renderReader(true);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (activePageIdx < PAGE_KEYS.length - 1) {
          activePageIdx += 1;
          renderReader(true);
        }
      });
    }
  };

  readerEl.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && activePageIdx < PAGE_KEYS.length - 1) {
      e.preventDefault();
      activePageIdx += 1;
      renderReader(true);
    } else if (e.key === "ArrowLeft" && activePageIdx > 0) {
      e.preventDefault();
      activePageIdx -= 1;
      renderReader(true);
    }
  });

  renderSpines();
  renderReader(false);
}
