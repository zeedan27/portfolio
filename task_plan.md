# Task Plan — Cycle 02: Portfolio Evolution & Companion n8n Repo (`Track A: Delta S.C.O.P.E.`)

## Active Status: **Phase 2 — Connections** (Gate 1 Approved)

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
- [ ] **Phase 2 Checkpoint — Stop:** Log all handshake verification evidence in `progress.md` and wait for user approval before entering Phase 3

---

### High-Level Phase 3–5 Placeholders (Expanded one phase at a time after each checkpoint)
- [ ] **Phase 3 — Organization (`<= 5` code files per vertical slice):** Read TDD/review skills; update SOPs (`architecture/frontend-motion.md`, `architecture/maintenance.md`); implement Slice 1 (Data + Tests) and Slice 2 (Components + Static HTML + CSS) with red → green TDD → **Stop at Phase 3 Checkpoint**.
- [ ] **Phase 4 — Polish:** Read `impeccable`, `design-taste-frontend`, and `web-design-guidelines`; run `copy-lint.mjs`, `check.mjs`, `perf.mjs`, `gate.mjs`, and `/browser` desktop/mobile verification → **Stop at Phase 4 Checkpoint**.
- [ ] **Phase 5 — Execution (Gate 2):** Run `requesting-code-review`, verify `dev.zesrab.pages.dev` preview via `/browser`, merge `dev` → `main`, verify live `zesrab.pages.dev`, and record learnings.
