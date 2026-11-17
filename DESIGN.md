# DESIGN.md — Single Source of Truth (`taste-skill` v2.5.1 + S.C.O.P.E.)

## 1. Dealt System & Tokens (`start.mjs deal --trade devtool --seed 2702`)
- **Site Kind / Page Type:** `software` (`<meta name="site-kind" content="software">`, `<meta name="page-type" content="software">`).
- **Palette (`blue-black-cornflower`):**
  - `--p-bg`: `#0a0d14` (obsidian base)
  - `--p-surface`: `#131824` (elevated slate surface)
  - `--p-ink`: `#e9edf3` (primary crisp foreground)
  - `--p-muted`: `#8891a1` (secondary metadata)
  - `--p-accent` / `--p-action`: `#5ab9fc` (sky cornflower HUD accent; `--p-accent-ink: #0a0d14`)
  - `--p-inv-bg`: `#e9edf3`, `--p-inv-surface`: `#d7dbe1`, `--p-inv-ink`: `#0a0d14`, `--p-inv-muted`: `#54575f` (light calm break band)
- **Lit UI Ground (`data-ground="sky"`):** `--ground-bg: #c6d3df`, `--ground-surface: #d6e0e9`, `--ground-ink: #25303a`, `--ground-muted: #4d5964`, `--ground-accent: #3f6a92`. Ensures project card panels and open notebook UI panes read clearly without dark-on-dark-on-dark layering (`cards.md`).
- **Type (`instrument`):** **`Instrument Sans`** (`400`/`500` display & prose, `--display-weight: 500`, `--display-tracking: -0.028em`, `--display-tracking-xl: -0.036em`, `--display-stretch: 96%`, `--ly-scale: 1.04`) paired with **`DM Mono`** (`400`/`500` telemetry stats, diff lines, terminal logs, spine indices). Sentence case enforced across headings, buttons, and labels (`--t-label: 13px`).

## 2. Dealt Kits, Effects, Backgrounds & Moments
- **Kit Components Copied Unmodified to `public/assets/`:** `system.css`, `system.js`, `layout/layout.css`, `layout/layout.js`, `ui/cards.css`, `ui/base.css`, `ui/ui.js` (plus `diff-review`, `terminal-run`, `window`, `checklist`), `motion/motion.css`, `motion/motion.js`, `backgrounds/backgrounds.css`, `backgrounds/backgrounds.js`, `diagrams/diagram.css`, `diagrams/diagram.js`, `diagrams/mount.js`, `moments/moments.js`, `moments/lib.js`, `moments/line-carries-colour/`, `icons/icon.css`.
- **Icons (`icons.mjs scan --colour`):** Real full-colour brand & tool SVGs fetched locally under `public/assets/icons/` (no runtime CDN icon requests, no hand-drawn placeholders).
- **Card Grounds (`gradient-mesh` / lit `sky` panel mesh):** Used on the `features-2x2` `#projects` card group with subtle seeded variation and one timed interactive UI loop (`data-ui-loop` + pause disc on card #1).
- **Dealt Section Moment (`line-carries-colour`):** Reveals the `#stack` inverse paper break (`ground-inverse`) cleanly as a hairline accent rule climbs across its inset surface.

## 3. Structural Rhythm & Layout Rules (`layout-v4.md`)
- Every `main > section` and `footer.closing` runs `height: calc(var(--h, 1) * 100svh)` at `1440×900` (`--h: 1` for single screens, `.g2` `--h: 2` for `#projects`), with zero inter-section `border-top` rules (ground transitions only).
- Equal `.wrap` container alignment (`min(100% - 2 * var(--gut), 1280px)`, `--gut: 80px` desktop, `48px` tablet, `24px` phone) shared across fixed `.nav`, `.hero`, every section, and `footer.closing`.
- All buttons follow `data-buttons="arrow"`, `44px` (`--btn-h`) minimum tap target, max 2 boxes deep on cards (`card > lit panel > UI fragment`).
