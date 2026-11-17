# Frontend Motion SOP (`heroSpotlight.js` & `caseStudyBookshelf.js`)

## 1. Spotlight Reveal Hero Physics (`heroSpotlight.js`)
- **Layer Stacking:**
  - `.hero-layer-front` renders `/front.jpg` (`z-index: 1`).
  - `.hero-layer-back` renders `/back.jpg` (`z-index: 2`) clipped by CSS `mask-image` / `-webkit-mask-image`.
  - Both layers MUST share `background-size: cover` and `background-position: 62% center` (`55% center` on narrow viewports) so subject features align pixel-for-pixel.
- **Mask Gradient Formula:**
  ```css
  radial-gradient(
    circle var(--spot-radius, 280px) at var(--spot-x, 62%) var(--spot-y, 42%),
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.92) 32%,
    rgba(0, 0, 0, 0.35) 68%,
    rgba(0, 0, 0, 0) 100%
  )
  ```
- **Interpolation Loop:**
  - `requestAnimationFrame` lerps `currentX += (targetX - currentX) * 0.11` and `currentY += (targetY - currentY) * 0.11` for smooth flashlight lag.
  - Before the first pointer/touch event, run a subtle slow figure-8 orbital scan near `(62%, 40%)` so first-time visitors immediately perceive the dual-layer reveal.
  - Provide a manual `[SCAN: FLASHLIGHT | EXOSUIT | DEFAULT]` toggle button so users on touchscreens or `prefers-reduced-motion` can inspect the full `back.jpg` layer effortlessly.
- **Mobile Nav Overlay:**
  - Below `768px`, collapse top-right nav links into `#nav-toggle`.
  - Opening `#mobile-nav-overlay` locks `document.body.style.overflow = 'hidden'`, traps/moves focus cleanly, and closes on `Escape` or link selection.

## 2. Interactive Case-Study Bookshelf (`caseStudyBookshelf.js`)
- **Shelf State:** Displays 5 tactile book spines; selecting a spine updates `activeBookId` and resets `activePageIndex` to `0` (Observation).
- **Page-Turn Transition:** Applies a subtle 3D fold/flip animation (`transform-origin: left center; perspective: 1400px`) between pages `1..4` (`Observation → Research & Gap → The Build → Friction & Fix`).
- **Keyboard & Reduced-Motion Support:** Supports `ArrowLeft` / `ArrowRight` when focus is inside the reader, and degrades 3D page-turn animations to instant opacity transitions when `prefers-reduced-motion: reduce` is active.
