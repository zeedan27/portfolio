---
trigger: glob
globs: "src/**/*.js, src/styles/**/*.css, index.html"
description: Visual standards, accessibility, and DESIGN.md token adherence for portfolio UI components.
---

# UI Component Standards (Cycle 02)
- Preserve incumbent `DESIGN.md` palette (`blue-black-cornflower` `#0a0d14` / `#131824` / `#5ab9fc` + `data-ground="sky"`) and typography (`Instrument Sans` + `DM Mono`). Never introduce violet/lavender or re-deal tokens during Track A delta work.
- Keep cards and panels at most two boxes deep (`card > lit panel > fragment`). Never nest cards inside cards for text blocks.
- Ensure every interactive element (shelf volumes, stage tabs, workflow tabs, links, buttons) exposes `:focus-visible`, supports keyboard navigation, meets `>= 44px` tap target height where outside running text, and escapes interpolated strings via `escapeHtml()`.
- Keep zero em-dashes (`—`) in user-facing copy (`src/` and `index.html`).
