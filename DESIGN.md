# DESIGN.md — Single Source of Truth for Visual & Motion Tokens

## 1. Aesthetic Direction (`design-taste-frontend` / `taste-skill` v2.5.1 + Portrait Tokens)
- **Site Kind / Page Type:** `software` (AI Systems, Security & Full-Stack Engineering Portfolio).
- **Theme:** Minimalist neutral-dark engineering system (90–95% neutral obsidian & slate grounds) accented with portrait-matched HUD cyan (`#00e5ff`), amber (`#f59e0b`), and teal (`#14b8a6`).
- **Dealt Pairing (`onest`):** **`Onest`** (display & long-form prose, weight `500–600`, tight `-0.035em` display tracking) paired with **`JetBrains Mono`** (telemetry indices, nav, stats, code tags, pipeline labels).
- **Anti-Patterns Avoided:** Zero unprompted purple/violet gradients, zero carousel gimmicks, zero scroll-linked card fades, zero em-dash AI copy tics (`0 FAIL, 0 WARN` under `copy-lint.mjs`).

## 2. Color & Alternating Ground Tokens
| Token | Value | Role |
|---|---|---|
| `--g-main` (`--bg-void`) | `#05070b` | Primary canvas & odd sections (`#about`, `#projects`, `#skills`) |
| `--g-alt` (`--bg-surface`) | `#0a0e16` | Alternating section ground (`#case-studies`, `#workflows`, `#contact`) |
| `--bg-card` | `#101622` | Project, workflow & book spine cards |
| `--bg-elevated` | `#161f2e` | Hover & active interactive surfaces |
| `--border-subtle` | `rgba(255, 255, 255, 0.09)` | Hairline structural borders |
| `--border-strong` | `rgba(0, 229, 255, 0.42)` | Active card & focus ring border |
| `--accent-cyan` | `#00e5ff` | Primary technical telemetry, active tabs, visor rim glow |
| `--accent-teal` | `#14b8a6` | Verified traces & success states |
| `--accent-amber` | `#f59e0b` | Friction/Fix highlights & warm motion streak accents |
| `--text-primary` (`--ink`) | `#edf0f7` | High-contrast headings & foreground (`>= 7:1` contrast) |
| `--text-secondary` | `#9ba6b8` | Readable `16px+` body prose (`>= 4.5:1`) |
| `--text-muted` | `#748196` | Metadata indices, timestamps & tertiary labels |

## 3. Equal-Edge Grid & Tap-Target Standards
- **Equal Left & Right Content Edges:** `.hero-topbar`, `.hero-bottom-grid`, `.section-inner`, and `.footer-inner` share the exact same container rule:
  - `--container-max: 1280px`
  - `--gut: clamp(20px, 5vw, 80px)`
  - `max-width: calc(var(--container-max) + 2 * var(--gut)); padding-inline: var(--gut);`
- **Minimum Interactive Target:** `--btn-h: 44px` (`min-height: 44px`) enforced on `.btn`, `.filter-btn`, `.stage-tab`, `.page-btn`, `.book-spine`, and `.nav-hamburger`.
- **Spacing Scale:** `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

## 4. Motion & Accessibility Budget
- **Hero Entrance (`data-enter`):** Subtle single load entrance on `.hero-left-col` and `.hero-stats`.
- **Spotlight Reveal:** `requestAnimationFrame` lerp (`factor = 0.11`), feathered radial mask over `--spot-radius` (`265px` desktop, `175px` mobile), plus `[MODE: FLASHLIGHT]` / `[MODE: FULL EXOSUIT]` / `[MODE: BASELINE]` toggle.
- **Micro-Interactions:** `2px` card lift on hover, button step-on-hover (`-1px`) & press-on-active (`+1px`), animated link underlines.
- **Workflow Pulse Loop + Pause:** Inline SVG data-pulse connector in `#workflows` with explicit `[PAUSE PULSE]` toggle (`[loop-pause]` compliance) and automatic pause under `prefers-reduced-motion: reduce`.
