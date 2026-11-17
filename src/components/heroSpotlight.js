/**
 * Spotlight Reveal Hero Component & Responsive Navigation Overlay.
 * Governs RAF cursor lerp, feathered mask reveal, touch drag, and mobile overlay.
 */

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderHero(container, hero, links) {
  if (!container) return;

  container.setAttribute("data-scan-mode", "flashlight");

  container.innerHTML = `
    <div
      class="hero-layer hero-layer-front"
      style="background-image: url('${escapeHtml(hero.frontImage)}');"
      aria-hidden="true"
    ></div>
    <div
      class="hero-layer hero-layer-back"
      style="background-image: url('${escapeHtml(hero.backImage)}');"
      aria-hidden="true"
    ></div>
    <div class="hero-spotlight-glow" aria-hidden="true"></div>
    <div class="hero-scrim" aria-hidden="true"></div>
    <div class="hero-grid-overlay" aria-hidden="true"></div>

    <div class="hero-topbar">
      <a href="#hero" class="brand-mark" aria-label="Home">
        <span class="brand-pulse" aria-hidden="true"></span>
        <span class="brand-text-group">
          <span class="brand-code">${escapeHtml(hero.logoCode)}</span>
          <span class="brand-sub">${escapeHtml(hero.logoSub)}</span>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        ${links
          .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
          .join("")}
      </nav>

      <button
        id="nav-toggle"
        class="nav-hamburger"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="mobile-nav-overlay"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div id="mobile-nav-overlay" class="mobile-nav-overlay" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div class="mobile-overlay-header">
        <div class="brand-mark">
          <span class="brand-pulse" aria-hidden="true"></span>
          <span class="brand-text-group">
            <span class="brand-code">${escapeHtml(hero.logoCode)}</span>
            <span class="brand-sub">NAVIGATION</span>
          </span>
        </div>
        <button id="nav-close" class="mobile-close-btn" type="button" aria-label="Close navigation menu">✕</button>
      </div>

      <nav class="mobile-overlay-links" aria-label="Mobile navigation links">
        ${links
          .map(
            (item, idx) =>
              `<a href="${escapeHtml(item.href)}" class="mobile-nav-link"><span>${escapeHtml(item.label)}</span><span class="idx">0${idx + 1}</span></a>`
          )
          .join("")}
      </nav>

      <div class="mobile-overlay-footer">
        <span>${escapeHtml(hero.eyebrow)}</span>
        <span>DHAKA // BD</span>
      </div>
    </div>

    <div class="hero-bottom-grid">
      <div class="hero-left-col">
        <div class="hero-eyebrow">${escapeHtml(hero.eyebrow)}</div>
        <h1 class="hero-headline">${escapeHtml(hero.headline)}</h1>
        <p class="hero-description">${escapeHtml(hero.description)}</p>
        <div class="hero-actions">
          <a href="${escapeHtml(hero.primaryCta.href)}" class="btn btn-primary">${escapeHtml(hero.primaryCta.label)}</a>
          <a href="${escapeHtml(hero.secondaryCta.href)}" class="btn btn-secondary" download>${escapeHtml(hero.secondaryCta.label)}</a>
          <button id="scan-mode-toggle" type="button" class="btn btn-scan-toggle" aria-pressed="false">
            [MODE: FLASHLIGHT]
          </button>
        </div>
      </div>

      <aside class="hero-stats" aria-label="Key career highlights">
        ${hero.stats
          .map(
            (stat) => `
            <div class="hero-stat-item">
              <div class="hero-stat-value-row">
                <span class="hero-stat-value">${escapeHtml(stat.value)}</span>
                <span class="hero-stat-unit">${escapeHtml(stat.unit)}</span>
              </div>
              <span class="hero-stat-label">${escapeHtml(stat.label)}</span>
            </div>`
          )
          .join("")}
      </aside>
    </div>
  `;

  initSpotlightPhysics(container);
  initMobileNavOverlay(container);
}

function initSpotlightPhysics(heroEl) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let currentX = 62;
  let currentY = 38;
  let targetX = 62;
  let targetY = 38;
  let hasUserInteracted = false;
  let idleTick = 0;

  const modes = [
    { key: "flashlight", label: "[MODE: FLASHLIGHT]" },
    { key: "exosuit", label: "[MODE: FULL EXOSUIT]" },
    { key: "front", label: "[MODE: BASELINE]" }
  ];
  let modeIdx = prefersReducedMotion ? 1 : 0;

  const toggleBtn = heroEl.querySelector("#scan-mode-toggle");
  const applyMode = () => {
    const active = modes[modeIdx];
    heroEl.setAttribute("data-scan-mode", active.key);
    if (toggleBtn) {
      toggleBtn.textContent = active.label;
      toggleBtn.setAttribute("aria-pressed", String(active.key === "exosuit"));
    }
  };
  applyMode();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      modeIdx = (modeIdx + 1) % modes.length;
      applyMode();
    });
  }

  const updatePointerTarget = (clientX, clientY) => {
    const rect = heroEl.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    hasUserInteracted = true;
    targetX = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    targetY = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
  };

  heroEl.addEventListener("pointermove", (e) => {
    updatePointerTarget(e.clientX, e.clientY);
  });

  heroEl.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches && e.touches[0]) {
        updatePointerTarget(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    { passive: true }
  );

  if (prefersReducedMotion) {
    heroEl.style.setProperty("--spot-x", "62%");
    heroEl.style.setProperty("--spot-y", "38%");
    return;
  }

  const animate = () => {
    if (!hasUserInteracted && heroEl.getAttribute("data-scan-mode") === "flashlight") {
      idleTick += 0.018;
      const baseX = window.innerWidth <= 860 ? 50 : 56;
      const baseY = window.innerWidth <= 860 ? 28 : 38;
      // Gentle figure-8 orbital scan across visor & exosuit chest
      targetX = baseX + Math.sin(idleTick) * 6;
      targetY = baseY + Math.sin(idleTick * 2) * 5;
    }

    currentX += (targetX - currentX) * 0.11;
    currentY += (targetY - currentY) * 0.11;

    heroEl.style.setProperty("--spot-x", `${currentX.toFixed(2)}%`);
    heroEl.style.setProperty("--spot-y", `${currentY.toFixed(2)}%`);

    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);
}

function initMobileNavOverlay(heroEl) {
  const openBtn = heroEl.querySelector("#nav-toggle");
  const closeBtn = heroEl.querySelector("#nav-close");
  const overlay = heroEl.querySelector("#mobile-nav-overlay");
  const mobileLinks = heroEl.querySelectorAll(".mobile-nav-link");

  if (!openBtn || !closeBtn || !overlay) return;

  const setMenuState = (open, restoreFocus = true) => {
    overlay.classList.toggle("is-open", open);
    overlay.setAttribute("aria-hidden", String(!open));
    openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      closeBtn.focus();
    } else if (restoreFocus) {
      openBtn.focus();
    }
  };

  openBtn.addEventListener("click", () => setMenuState(true));
  closeBtn.addEventListener("click", () => setMenuState(false, true));

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false, false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      setMenuState(false);
    }
  });
}
