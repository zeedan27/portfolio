# Frontend Motion SOP (`heroSpotlight.js`, `caseStudyBookshelf.js` & `taste-skill` Motion)

## 1. System Motion Layers (`motion.css` / `motion.js`)
- **Entrance (`data-enter`):** Single load entrance on `.hero` (`headline-arrives`-style masked rise synced with `.m-enter` head guard). No scroll-reveal fading on sections, cards, or project tiles.
- **Section Moment (`line-carries-colour`):** Scroll-linked ground wipe revealing `#stack.ground-inverse` cleanly via `assets/moments/line-carries-colour/moment.js`.
- **UI Loop Governance:** At most one timed UI fragment loop (`data-ui-loop` inside `#projects` card #1 `diff-review` + automatic WCAG `.loop-pause` button). Sibling project cards remain still until pointer hover/focus. `diagrams.js` pulsing graph in `#workflows` provides its own native pause toggle.

## 2. Spotlight Reveal Hero (`heroSpotlight.js`)
- **Layer Stacking inside `100svh` `.hero`:**
  - `.hero__layer--front` renders `/images/front.jpg` (studio portrait, natural dark obsidian void on left & bottom-right).
  - `.hero__layer--back` renders `/images/back.jpg` (`S-07 Tactical Unit` HUD exosuit) directly aligned (`object-position: 62% 38%` / responsive crop) underneath a smoothed feathered radial `mask-image`.
- **Smooth Trailing Feathered Flashlight:**
  - `requestAnimationFrame` lerps `curX += (tgtX - curX) * 0.14` and `curY += (tgtY - curY) * 0.14`.
  - Soft penumbra stop curve (`100%` solid core to `0%` transparent edge over `270px` desktop / `175px` mobile radius) so the circle never looks hard-edged.
  - Gentle orbital idle drift before first pointer interaction; pauses immediately on pointer input, click/keyboard mode toggle (`Flashlight` / `Exosuit` / `Baseline`), or `prefers-reduced-motion: reduce`.
- **Responsive Phone Menu:** Managed via `system.js`'s `.nav__toggle` + `.nav.is-open` full-height overlay (`top: var(--nav)` to `bottom: 0`, Escape key, focus restore) without duplicate event handlers.

## 3. About Domain Split (`#about`) & Two-Pane Bookshelf Case-Study Frame (`caseStudyBookshelf.js`)
- **`#about` 6+6 Domain Layout:** Replaces the decorative static hub diagram with a clean two-column layout (`span-6` Education + 6-Course CSE UGA Work Experience on the left; `span-6` `sky` lit-ground Research panel + IBM Certification on the right) for clear scannability.
- **Two-Pane `.ui.app.fill` Bookshelf Architecture:**
  - Left pane (`.cases-app__shelf`): 7 horizontal readable volume rows (`SkillVerify`, `Daak v2`, `Papyr`, `MindWeave`, `NurtureAI`, `PERF NLP`, `S.C.O.P.E.`) with active selection highlight and year/code metadata.
  - Right pane (`.cases-app__reader` styled on `--ground-bg` / `--ground-surface` sky-lit tokens): displays each selected book's dynamic variable-stage (`book.stages[]`, typically 5–6 context-first developer thinking stages) with wrapping `.reader-tabs`, keyboard Left/Right arrow navigation, previous/next stage buttons, context-note artifact block, and direct GitHub repository link.
