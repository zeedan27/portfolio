# Task Plan — Cycle 02: Portfolio Evolution & Companion n8n Repo (`Track A: Delta S.C.O.P.E.`)

## Active Status: **Phase 5 — Execution (Gate 2)** (Phase 4 Checkpoint Approved)

### Context Sync & Cycle Rollover (Completed)
- [x] Read updated `scope` skill (`SKILL.md`, `references/skills-and-safety.md`, `references/stack-matrix.md`, `templates/AGENTS.template.md`)
- [x] Sync `AGENTS.md`, `findings.md`, `architecture/schemas.md`, `PRODUCT.md`, `DESIGN.md`, `task_plan.md`, `progress.md`, and `git log -5`
- [x] Create dedicated local staging branch `dev` (`git checkout -b dev`) so `main` (`zesrab.pages.dev`) remains untouched
- [x] Archive Cycle 01 checklist & timeline to `architecture/archive/cycle-01.md` and upgrade `AGENTS.md`

### Subphase 1A: Delta Functional, Stack & Data Specification (Locked)
- [x] Audit all 17 public `@zeedan27` GitHub repositories and local n8n template collections (`742` JSON files + `1,987` CSV rows) in `findings.md`
- [x] Audit 12-Layer Decision Table revisit triggers and add T1 Threat Sketch (n8n credential/instanceId scrubbing + branch isolation) in `findings.md`
- [x] Lock Cycle 02 Delta contracts in `architecture/schemas.md` (`AboutData` 3-domain split, variable-stage `CaseStudyBook`, project-authentic `ProjectCard` fragments, real `WorkflowsSection`, curated `ArchiveRepo`)
- [x] Confirm Subphase 1A scope with user:
  - **7 Case Studies (`5–6` context-first stages each):** `SkillVerify`, `Daak v2`, `Papyr`, `MindWeave`, `NurtureAI`, `PERF NLP`, `S.C.O.P.E.`
  - **4 Featured Cards:** `MindWeave`, `Papyr`, `SkillVerify`, `Daak v2`
  - **5 Public Repo Rows (omitting `prompt-eval` & `zeedan27`):** `ShishuCare (NurtureAI)`, `n8n-automations`, `scope-skill`, `baton-pass-skill`, `rea-web-skill`
  - **Companion n8n Repo:** `zeedan27/n8n-automations` at `D:\Tasks\n8n-automations` seeded with sanitized `.json` workflows
  - **Branch Flow:** Long-lived `dev` branch → `dev.zesrab.pages.dev` preview → Gate 2 merge into `main`

### Subphase 1B: Delta Design & UI Specification (Locked — Incumbent `DESIGN.md` Preserved)
- [x] Read `design-taste-frontend` (`SKILL.md`, `references/cards.md`) and `impeccable` (`SKILL.md`, `reference/shape.md`, `reference/layout.md`) via `read_file`
- [x] Author Cycle 02 screen-by-screen UI specification in `PRODUCT.md` strictly within existing `DESIGN.md` tokens (`blue-black-cornflower` + `sky` lit ground + `Instrument Sans` / `DM Mono`):
  - **Screen 1 (`#top`):** Clarify CSE undergraduate (Major in Data Science) + 6-Course CSE UGA identity
  - **Screen 2 (`#about`):** Replace cramped prose+hub split with clean `span-6` + `span-6` separation (**Left:** Education + 6-Course UGA Work Experience; **Right:** PERF NLP Research panel + IBM Certification)
  - **Screen 3 (`#cases`):** 7 horizontal readable shelf items + dynamic variable-stage (`5–6` tabs) context-first developer thought-process reader
  - **Screens 4–5 (`#projects`):** Bind `diff-review` → `MindWeave`, `terminal-run` → `Papyr`, `window` → `SkillVerify`, `checklist` → `Daak v2`
  - **Screen 6 (`#workflows`):** 4 real sanitized n8n pipelines + direct link to `zeedan27/n8n-automations`
  - **Screen 7 (`#stack`):** Updated CSE + Data Science capability rows + 5 curated public repos (`ShishuCare`, `n8n-automations`, `scope-skill`, `baton-pass-skill`, `rea-web-skill`)

### 🛑 Gate 1 Checklist (Macro Blueprint — Hard Stop Before Phase 2 & Code Edits)
- [x] **Subphase 1A locked:** Discovery, Tier (`T1`), 12-Layer Decision Table, Threat Sketch (`findings.md`), and schemas (`architecture/schemas.md`) confirmed.
- [x] **Subphase 1B locked:** `design-taste-frontend` & `impeccable` `SKILL.md` read and applied to `PRODUCT.md` and screen plan while preserving `DESIGN.md`.
- [x] **User Gate 1 Approval:** Approved (`Proceed`) on `2026-11-24`.

---

### Phase 2: Connections — Detailed Plan (Active — Stop at Phase 2 Checkpoint)
- [x] Read `references/config-templates.md` and inspect node graphs of 6 real n8n workflows from `Becreative _ Hubflow-n8n-templates-main`
- [x] Create `.agents/rules/ui-components.md` with valid `trigger: glob` frontmatter (`references/config-templates.md` §5)
- [x] Scaffold `D:\Tasks\n8n-automations` with `.gitignore`, `.env.example`, `package.json`, categorized workflow directories (`workflows/{ai-research-and-rag,assistant-and-comms,document-and-data-ops,security-and-triage}/`), `scripts/sanitize-workflow.mjs`, and `README.md` catalog
- [x] Import and sanitize 6 real n8n JSON workflows (`hf-paper-digest-to-notion.json`, `notion-supabase-vector-rag.json`, `postgres-natural-language-agent.json`, `hitl-gmail-triage-responder.json`, `telegram-multimodal-agent.json`, `suspicious-email-analyzer.json`) and verify with `npm run check` (`PASS` on all 6, 0 leaked credentials, 0 `instanceId` / `webhookId`)
- [x] Initialize git in `D:\Tasks\n8n-automations`, create public GitHub repository `https://github.com/zeedan27/n8n-automations` (`HTTP 201`), and push `main` (`947ba00`)
- [x] Commit Cycle 2 governance/spec updates on branch `dev` in `D:\Tasks\portfolio`, push `origin/dev`, and verify GitHub remote handshake & Cloudflare Pages `dev` branch preview readiness
- [x] **Phase 2 Checkpoint — Approved:** Logged all handshake verification evidence in `progress.md` and received user approval (`Proceed to phase 3`) on `2026-11-24`.

---

### Phase 3: Organization — Detailed Plan (Active — Stop at Phase 3 Checkpoint)
- [x] Update Layer 1 SOPs (`architecture/frontend-motion.md` & `architecture/maintenance.md`) before touching code
- [x] **Vertical Slice 1 (`<= 2` code files: `tests/portfolio.test.mjs`, `src/data/portfolioData.js`):**
  - [x] RED: Write failing Cycle 02 schema & content assertions in `tests/portfolio.test.mjs` and verify RED via `npm test`
  - [x] GREEN: Rewrite `src/data/portfolioData.js` (CSE + Data Science major, separated `education`/`workExperience`/`research`, 7 variable-stage case studies, 4 authentic flagship projects, 4 real n8n workflows + repo link, 5 curated public repos) → verified `npm test` & `npm run build` → committed (`10a908a`)
- [x] **Vertical Slice 2 (`<= 4` code files: `tests/portfolio.test.mjs`, `src/components/caseStudyBookshelf.js`, `src/components/sections.js`, `src/main.js`):**
  - [x] RED: Add component contract tests in `tests/portfolio.test.mjs` and verify RED via `npm test`
  - [x] GREEN: Update `caseStudyBookshelf.js` (dynamic `book.stages[]` + `book.icon`), `sections.js` (6+6 `#about` split, authentic fragments, `workflowsSection` repo link, zero em-dashes), and `main.js` → verified `npm test` & `npm run build` → committed (`a88704d`)
- [x] **Vertical Slice 3 (`<= 3` code files: `tests/portfolio.test.mjs`, `index.html`, `src/styles/page.css`):**
  - [x] RED: Update HTML/CSS assertions in `tests/portfolio.test.mjs` and verify RED via `npm test`
  - [x] GREEN: Update `index.html` SSR markup and `src/styles/page.css` (`.about-domain`, `.about-research`, `.about-courses`, horizontal `.book-spine`, wrapping `.reader-tabs`) → verified `npm test` & `npm run build` → committed (`7cf0d09`)
- [x] **Fresh Code Review & Review Fixes:** Dispatched `research` subagent for `requesting-code-review` across `371e1c8..7cf0d09`; resolved all 3 Important issues (`[data-term-next]` + 4th Papyr step, in-place `#cases` focus/tabIndex management + `#workflows` arrow-key `selectWorkflow` sync, `.cases-app__reader` `--action: #0f4c81` focus contrast) and 5 Minor polish items with TDD verification (`8/8` passing)
- [x] **Phase 3 Checkpoint — Approved:** User approved advancing to Phase 4 (`Proceed to phase 4`) on `2026-11-24`.

---

### Phase 4: Polish — Detailed Plan (Active — Stop at Phase 4 Checkpoint)
- [x] Read `impeccable` (`SKILL.md`, `reference/polish.md`, `reference/audit.md`, `reference/craft-floor.md`), `design-taste-frontend` (`SKILL.md`), and `web-design-guidelines` (`SKILL.md`) via `read_file`
- [x] Remediate `consistency.mjs` and `check.mjs` findings across `src/data/portfolioData.js`, `src/components/sections.js`, `index.html`, and `src/styles/page.css` (`<= 5` files)
- [x] Run `npm test`, `npm run build`, `copy-lint.mjs`, `check.mjs` (all 5 viewports), `consistency.mjs --quick`, `perf.mjs`, and `gate.mjs` (`GATE: PASS`)
- [x] Run desktop and mobile interactive verification via `browser` subagent against local preview server
- [x] **Phase 4 Checkpoint — Approved:** User approved advancing to Phase 5 (`Proceed`) on `2026-11-24`.

---

### Phase 5: Execution & Gate 2 — Detailed Plan (Active — Stop at Gate 2 Before `main` Merge)
- [x] Read `references/caching-and-scaling.md`, `references/skills-and-safety.md` (Deploy Rule), `requesting-code-review/SKILL.md`, `wrangler/SKILL.md`, `architecture/maintenance.md`, `public/_headers`, and `.gitignore`
- [x] Fresh `npm test` (`8/8`) and `npm run build` pass on `dev`
- [x] Dependency security audit clean (`npm audit`: `0` vulnerabilities)
- [x] Secret scan clean (`gitleaks git` on `D:\Tasks\portfolio` & `D:\Tasks\n8n-automations`, plus `npm --prefix D:\Tasks\n8n-automations run check`: `6/6 PASS`, `.env.example` & `.gitignore` verified)
- [x] Final fresh-context code review completed via `requesting-code-review` (`26318d8..34c62dd`) with `0` unfixed Critical/Important issues
- [x] Caching/security headers (`public/_headers`) and rollback runbook (`architecture/maintenance.md` §4) verified; Deferred layers confirmed (`Auth`, `RLS`, `DB Migrations`, `Health Probes` — Deferred per `findings.md` Layer Decision Table; `Rate Limiting` & `Cost Caps` — Cloudflare Pages Free Tier Edge DDoS)
- [x] Push committed `dev` branch (`git push origin dev`, `7419df3`) per Deploy Rule (`git status` clean, staging/preview first)
- [x] Live staging smoke test passed via `browser` subagent on `https://dev.zesrab.pages.dev/` (desktop `1440×900` & mobile `390×844`)
- [ ] **🛑 Gate 2 Hard Stop:** Present Gate 2 proof & live preview URL (`https://dev.zesrab.pages.dev/`) and await explicit user approval before merging `dev` → `main` and verifying `https://zesrab.pages.dev/`
