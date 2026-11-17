# Architecture Decision Records (ADR Log)

## ADR-001: Host on Cloudflare Pages (Tier T1 Static/Edge)
- **Context:** The portfolio uses a dual full-screen `100dvh` Spotlight Hero (`front.jpg` + `back.jpg` totaling ~1.17 MB) plus PDF CV and project showcases.
- **Decision:** Deploy via GitHub integration to **Cloudflare Pages** with `public/_headers`.
- **Consequences:** Unlimited static bandwidth and requests at \$0, 500 builds/month, automatic HTTPS, instant rollbacks, and zero non-commercial or AI-training terms restrictions (compared to Vercel Hobby ToS §2/§4, Firebase 360 MB/day cap, Render 5 GB/month cap, and Netlify 300-credit cap).

## ADR-002: Modular Vite + Vanilla ES6 + CSS3 (Zero Runtime Frameworks)
- **Context:** The user requested a modular architecture capable of building cleanly while keeping runtime lightweight and fast.
- **Decision:** Use **Vite** (dev/build only) with modular ES6 components (`heroSpotlight.js`, `caseStudyBookshelf.js`, `sections.js`) and design-token CSS (`src/styles/main.css`), with zero runtime UI framework dependencies.
- **Consequences:** Sub-20 KB JS bundle size, instant execution for the `requestAnimationFrame` spotlight mask, and clean separation of data (`src/data/`), styles (`src/styles/`), and interactive engines (`src/components/`).

## ADR-003: Four-Stage Engineering Case-Study Bookshelf
- **Context:** Recruiters value seeing how an engineer observes gaps, researches constraints, ships software, and resolves real bugs in their own work—especially across both polished and rough hackathon/GitHub builds.
- **Decision:** Structure the Interactive Case-Study Bookshelf around 5 real repositories (`Papyr`, `S.C.O.P.E. & Baton-Pass`, `SkillVerify`, `Daak`, `ShishuCare / NurtureAI`) using four sequential pages: `01 // OBSERVATION → 02 // RESEARCH & GAP → 03 // THE BUILD → 04 // FRICTION & FIX`.
- **Consequences:** Turns every project (including hackathon friction) into verifiable proof of engineering judgment.

## ADR-004: Pre-Validated Static Project Data Over Live Browser GitHub API Calls
- **Context:** Unauthenticated browser requests to `api.github.com` are strictly rate-limited (`60 requests/hour/IP`) and would fail for recruiters browsing behind shared corporate NATs.
- **Decision:** Store verified repository metadata in `src/data/portfolioData.js` (refreshable locally via `tools/` when desired) rather than hitting the GitHub REST API on every page load.
- **Consequences:** Zero runtime API failures, 0ms data hydration, and zero risk of leaking a `GITHUB_TOKEN` client-side.

## ADR-005: `design-taste-frontend` (`taste-skill` v2.5.1) Integration
- **Context:** Per S.C.O.P.E. `skills-and-safety.md`, `design-taste-frontend` provides anti-slop art direction, copy linting (`copy-lint.mjs`), browser layout/perf verification (`perf.mjs`), equal-edge alignment, and interactive quality checks.
- **Decision:** Vetted and installed `https://github.com/Leonxlnx/taste-skill` at commit `f6b76575f949707b4e3c37cd86cb44b0b98643e8` (MIT License) globally as `design-taste-frontend`; merged its dealt `software` pairing (`Onest + JetBrains Mono`) and neutral ground alternation (`--g-main` / `--g-alt`) with the portrait-matched cyan/amber accents in `DESIGN.md`.
- **Consequences:** Enforces `0 FAIL, 0 WARN` copy discipline, unified left/right container edges across all sections, `>= 44px` interactive tap targets, and browser-checked FCP/LCP/CLS budgets.
