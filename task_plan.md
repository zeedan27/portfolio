# Task Plan — Zesrab Tanjeel Khan Portfolio (`S.C.O.P.E.`)

## Active Phase: Phase 4 & 5 — Polish Complete · Ready for Cloudflare Pages Deploy

### Phase 0: Initialization
- [x] `git init`, `.gitignore`, `.env.example`, `package.json`, `public/_headers`
- [x] Stage `front.jpg` / `front.jpeg`, `back.jpg`, `Zesrab-Tanjeel-Khan_CV.pdf`, `cv.html` into `public/`
- [x] Create `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, `task_plan.md`, `findings.md`, `progress.md`
- [x] Initialize `architecture/` SOPs (`schemas.md`, `decisions.md`, `maintenance.md`, `frontend-motion.md`)

### Phase 1 & 2: Specification & Asset Handshake
- [x] Verify `front.jpeg` & `back.jpg` visual alignment and palette tokens
- [x] Extract verified academic, UTA, GitHub, hackathon, and local project data (`@zeedan27`)
- [x] Gate 1 Plan approved by Planning Model; executed build slices

### Phase 3: Vertical Slice Implementation (`src/`)
- [x] **Slice 1:** `src/data/portfolioData.js` (strictly conforming to `architecture/schemas.md`)
- [x] **Slice 2:** `index.html` + `src/styles/main.css` (DESIGN.md tokens, Spotlight Hero layers, responsive layout)
- [x] **Slice 3:** `src/components/heroSpotlight.js` (RAF lerp spotlight mask, touch + idle scan, layer toggle, mobile full-screen nav overlay)
- [x] **Slice 4:** `src/components/caseStudyBookshelf.js` (5 tactile book spines + 4-stage interactive page-turn manual)
- [x] **Slice 5:** `src/components/sections.js` + `src/main.js` (About, Filterable Projects, n8n/Agent Workflows, Skills Matrix, Contact + CV CTA)

### Phase 4 & 5: Polish, Testing & Verification (Gate 2)
- [x] Automated verification suite `tests/portfolio.test.mjs` (`6/6` passing)
- [x] Production Vite build (`npm run build`) outputting `dist/` cleanly
- [x] Live browser inspection across desktop (`1440×900`) and mobile (`390×844`) viewports with mobile scrim & `01..06` numbering fixes verified
- [x] Update `progress.md` with terminal & browser verification evidence
- [ ] Push to GitHub and connect repo to Cloudflare Pages (user step)
