# DESIGN.md — Single Source of Truth for Visual & Motion Tokens

## 1. Aesthetic Direction
- **Theme:** Minimalist dark-mode engineering terminal meets tactile tactical HUD, directly color-matched to `front.jpg` and `back.jpg` (obsidian shadows, cyan visor rim light, warm amber/orange motion streak glow).
- **Anti-Patterns Avoided:** No purple/pink AI gradients, no cluttered particle trails fighting the Hero Spotlight, no generic 3-blob feature cards, no auto-playing audio.

## 2. Color Tokens
| Token | Value | Role |
|---|---|---|
| `--bg-void` | `#040609` | Page canvas & deepest obsidian background |
| `--bg-surface` | `#0a0e14` | Primary section & reader surface |
| `--bg-card` | `#101620` | Project, workflow & book spine cards |
| `--bg-elevated` | `#161f2e` | Hover states, active pills & elevated panels |
| `--border-subtle` | `rgba(255, 255, 255, 0.09)` | Hairline structural borders |
| `--border-strong` | `rgba(0, 229, 255, 0.35)` | Active card / focus border |
| `--accent-cyan` | `#00e5ff` | Primary technical telemetry, active links, visor rim glow |
| `--accent-teal` | `#14b8a6` | Secondary verification badges & success feedback |
| `--accent-amber` | `#f59e0b` | Highlight callouts, friction/fix badges, warm streak contrast |
| `--accent-orange` | `#ff6b00` | Secondary warm highlight accents |
| `--text-primary` | `#f4f6fb` | High-contrast white headings & foreground text |
| `--text-secondary` | `#9ba6b8` | Body prose & descriptions |
| `--text-muted` | `#647084` | Metadata indices, footers & tertiary labels |

## 3. Typography Scale
- **Display & UI Monospace:** `'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
  - Hero Headline: `clamp(2.1rem, 4.4vw, 3.85rem)`, line-height `1.06`, letter-spacing `-0.03em`, weight `700`
  - Section Titles: `clamp(1.5rem, 2.8vw, 2.25rem)`, weight `700`
  - Telemetry / Eyebrows / Nav: `0.75rem – 0.85rem`, uppercase, tracking `0.12em`
- **Long-Form Reading (Case-Study Pages & Bio):** `'Inter', system-ui, -apple-system, sans-serif`
  - Body Prose: `0.975rem – 1.05rem`, line-height `1.68`

## 4. Layout & Motion Budget
- **Hero Viewport:** `100dvh` (`min-height: 680px`), identical `background-size: cover; background-position: 62% center` across `.hero-layer-front` and `.hero-layer-back`.
- **Spotlight Mask Physics:** `requestAnimationFrame` lerp (`factor = 0.11`), feathered radial mask (`0% → 32% → 68% → 100%`) over `--spot-radius` (`280px` desktop, `180px` mobile).
- **Reduced Motion:** Under `@media (prefers-reduced-motion: reduce)`, disable smooth autonomous drift and 3D flip keyframes; provide instant layer toggle button and crisp opacity transitions.
- **Accessibility:** Minimum 4.5:1 contrast for body copy over dark scrims; visible `2px solid var(--accent-cyan)` `:focus-visible` outlines on every interactive control; full keyboard navigation (`Escape` for mobile overlay, `ArrowLeft`/`ArrowRight` for Bookshelf pages).
