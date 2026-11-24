# Findings, Audits, 12-Layer Matrix & Threat Sketch (Cycle 02)

## 1. Selected Tier, Surface & Skill Pack Summary
- **Project Tier:** **T1 Production (Right-Sized Static / Edge Portfolio + Companion n8n Catalog Repo)**
- **Surface Classification:** Personal Engineering Portfolio Website (`kind: software`, 8-screen `100svh` / `200svh` cadence) + Companion Headless Automation Repository (`zeedan27/n8n-automations`).
- **Selected Host & Branch Flow:** **Cloudflare Pages** (`https://zesrab.pages.dev` on `main`; automatic Preview URLs `https://<branch>.zesrab.pages.dev` on non-`main` branches such as `dev`).
- **Active Skills (within 10 core / ~14 total cap):**
  - *Core:* `scope`, `verification-before-completion`, `systematic-debugging`, `test-driven-development`, `requesting-code-review`
  - *UI (Subphase 1B & Phase 4):* `design-taste-frontend` (`taste-skill` v2.5.1 — incumbent `DESIGN.md` owner), `impeccable` (delta UI structure, decluttering `#about`, polish/critique), `web-design-guidelines` (WCAG 2.1 AA contrast, keyboard & focus audit)

---

## 2. 12-Layer Infrastructure Decision Table (Revisit Triggers Audited for Cycle 02)
| # | Layer | Status | Selected Tech | Rationale | Revisit Trigger |
|---|---|---|---|---|---|
| **1** | **Frontend** | **Required** | Modular Vanilla ES6 + CSS3 (Vite) | Zero runtime overhead, 60fps spotlight canvas lerp, interactive multi-stage case reader, and animated UI fragments. | If multi-route authenticated dashboards are added. |
| **2** | **APIs & Backend** | **Lite** | Static validated data (`src/data/portfolioData.js`) | 0ms hydration, zero GitHub REST rate-limit failures (`60 req/hr/IP` unauthenticated). | If live contact form or webhook ingestion is added (add Cloudflare Pages Function). |
| **3** | **Database & Storage** | **Deferred** | Git-versioned JS/JSON + `public/` static assets | Read-only portfolio + Git-versioned n8n JSON repo need zero runtime DB. *(Cycle 02 check: not triggered.)* | If dynamic blog CMS or visitor telemetry is added (use Cloudflare D1). |
| **4** | **Auth & Permissions** | **Deferred** | Public Read-Only | Portfolio and curated n8n catalog are intentionally public for recruiters. *(Cycle 02 check: not triggered.)* | If NDA-restricted case studies are added (enable Cloudflare Access). |
| **5** | **Hosting & Deployment** | **Required** | Cloudflare Pages (`zesrab`) | Unlimited bandwidth for `~1.17 MB` dual hero portraits, free SSL, instant preview URLs per Git branch. | If stateful server containers are required. |
| **6** | **Cloud & Compute** | **Deferred** | Static Edge Only | All animations and diagrams run client-side. *(Cycle 02 check: not triggered.)* | If `/api/*` server endpoints are introduced (Cloudflare Workers). |
| **7** | **CI/CD & Version Control** | **Required** | Git Branch Flow (`dev` → Preview → `main`) + `npm test` / `npm run build` | Isolates active development on `dev` with live Cloudflare Preview URLs; `main` receives only Gate-2-verified merges. | Add GitHub Actions workflow if multi-matrix browser E2E checks are required on PRs. |
| **8** | **Security & RLS** | **Lite** | `.gitignore` + `public/_headers` + n8n JSON credential scrubber | Strict `nosniff`, `SAMEORIGIN`, `Referrer-Policy`, zero `.env` or n8n credential/instanceId leaks. | Enable DB RLS if Layer 3 is promoted. |
| **9** | **Rate Limiting** | **Lite** | Cloudflare Edge DDoS Mitigation | Built-in Anycast protection for static assets. | Add Turnstile + rate limiting if public API routes go live. |
| **10** | **Caching & CDN** | **Required** | Cloudflare Anycast CDN + `_headers` + `<link rel="preload">` | Preloads `/images/front.jpg` & `/images/back.jpg`; `immutable` cache on hashed Vite bundles; `must-revalidate` on `/images/*` & `/cv/*`. | If dynamic SSR cache invalidation is needed. |
| **11** | **Load Balancing & Scaling** | **Deferred** | Cloudflare Anycast Edge | Static assets scale globally at \$0 cost. *(Cycle 02 check: not triggered.)* | If origin compute servers are added. |
| **12** | **Error Tracking & Logs** | **Lite** | Schema & DOM test suite (`tests/portfolio.test.mjs`) + `progress.md` | Deterministic contract assertions catch missing assets, broken links, or schema drift pre-deploy. | Add Cloudflare Web Analytics on custom domain launch. |

---

## 3. Cycle 02 Delta Discovery & Audits

### 3.1 Academic & Role Identity Correction
- **Fact:** Zesrab Tanjeel Khan is a **B.Sc. in Computer Science and Engineering (CSE) student majoring in Data Science** at United International University (`CGPA 3.95 / 4.00`, Oct 2022 – Present, expected Feb 2027), **not** a standalone "Data Science student" degree holder.
- **Work Experience:** **Undergraduate Assistant (UGA)** in the Department of CSE at UIU (`Sep 2024 – Present`), assisting faculty across **6 core CSE lab courses** (`SPL, OOP, DSA I & II, DBMS, Software Engineering`) and running 1-on-1 consultations in `C/C++, Java, and SQL`.
- **Research:** In-progress undergraduate research *"Are NLP Gold Standards Truly Golden?"* supervised by **Asst. Prof. Md. Tarek Hasan (UIU)** — built **PERF** (LLM cascade and prompt-ensemble re-annotation pipeline) auditing ground-truth labels across `SST-2`, `SNLI`, and `HateXplain`.
- **UX Issue Identified in `#about`:** Cycle 01 crammed bio, research, certification, education, and UGA duties into one narrow text column (`span-5`) next to an oversized static hub diagram. Cycle 02 separates `education`, `workExperience`, and `research` into distinct structured blocks.

### 3.2 Live `@zeedan27` GitHub Repository Audit (`2026-11-24`, 17 Public Repos)
Major new and upgraded repositories shipped after Cycle 01 (`2026-11-18`):
1. **`skillverify`** (`https://github.com/zeedan27/skillverify`, TypeScript monorepo, updated `2026-11-24`): Proctored skill verification & hiring platform (`@skillverify/shared`, NestJS 10 + Mongoose + Passport JWT + Puppeteer/Handlebars verified CV engine + Tokens.bd/Ollama AI gateway + React 18 SPA). Replaces self-reported CVs with randomized proctored quizzes (`15s` grace timer), second-chance remedial grooming courses, Bronze/Silver/Gold 12-char hex badges (`/verify/:slug`), and scoped employer leaderboards. *(Evolved from `SkillVerify-Deprecated` in PHP — authentic v1 → v2 re-architecture story!)*
2. **`daak-app`** (`https://github.com/zeedan27/daak-app`, TypeScript + Python, updated `2026-11-23`): **Daak v2** Bangladesh Civic Dispatch & Safety Platform (`Next.js 16` 3-zone police command desk + `Expo React Native` citizen SOS & Safe Walk + `FastAPI` deterministic `40/35/25` safety & 5-factor false-report triage + `Supabase PostGIS` 1 km community corroboration & Bangla/Banglish DaakAI). *(Evolved from `Daak` v1!)*
3. **`mindweave`** (`https://github.com/zeedan27/mindweave`, TypeScript, updated `2026-11-20`): AI-Powered Visual Knowledge Mapping & Spatial Learning Workspace (`Next.js 16`, `React 19`, `@xyflow/react`, `ELK.js` 4-mode collision-free layouts, PDF page & YouTube `MM:SS` citations, Blind-Spot Detector, Active Recall Cloze & Feynman Grader, IndexedDB + Obsidian/Anki export).
4. **`papyr`** (`https://github.com/zeedan27/papyr`, Python + Next.js, updated `2026-11-20`): Universal Academic Manuscript Visualizer & 3Blue1Brown-Style Scrollytelling Generator (`FastAPI` + `PyMuPDF` band-barrier two-column PDF parser + `DirectorAgent` 4-act narrative choreographer + `Edge-TTS` word-timestamp voiceover + AST-gated `Manim` video sandbox & `PyAV` muxing + `Next.js` SSE reader). *(Cycle 01 mistakenly described Papyr as a "chunked SQLite slide quiz compiler" — fixing this immediately aligns `#projects` and `#cases` with the real repo!)*
5. **`ShishuCare`** (`https://github.com/zeedan27/ShishuCare`, Next.js 16 + Groq Llama-3.3, updated `2026-05-30`): **NurtureAI** bilingual (Bangla/English) rural maternal & child health web app featuring hybrid rule + AI IMCI symptom triage (Levels 1–4 + one-tap WhatsApp clinic alert), Bangladesh EPI vaccination tracker, age-band nutrition & MUAC malnutrition guide, and cache-first myth fact-checker.
6. **`scope-skill`** (`https://github.com/zeedan27/scope-skill`, JavaScript/Markdown) & **`baton-pass-skill`** (`https://github.com/zeedan27/baton-pass-skill`): S.C.O.P.E. 5-phase engineering framework (with Post-Launch Continuation cycles) and multi-agent `CHATS.md` path-ownership coordinator.
7. **`llm-prompt-injection-eval`** (`https://github.com/zeedan27/llm-prompt-injection-eval`, Python + Ollama): Modular indirect prompt injection evaluation pipeline (*"Not What You've Signed Up For"* PoC — core strict prompt engine & Ollama runner authored by Zesrab).
8. **`zeedan27`** (`https://github.com/zeedan27/zeedan27`, Python): Automated GitHub telemetry calculator rendering dynamic dark/light mode profile SVGs (`commits`, `LOC`, `repos`, `stars`).
- **Low-Signal / Superseded Repos to Exclude from Portfolio Showcase:** `SkillVerify-Deprecated` (superseded by `skillverify`), `Daak` (superseded by `daak-app`), `Aftersound` (empty README), `Lakkhya` (empty README), `bcf-2026-hackathon-preliminary` (superseded), `neetcode-submissions` (routine practice), `llm-prompt-injection-eval` (excluded from Public Repos per user direction), and `zeedan27` (excluded from Public Repos per user direction).

### 3.4 Locked Subphase 1A Decisions (`2026-11-24`)
1. **Case Studies (`#cases`):** Curated **7 high-yield volumes** (`SkillVerify`, `Daak v2`, `Papyr`, `MindWeave`, `NurtureAI / ShishuCare`, `PERF NLP`, `S.C.O.P.E. & Baton-Pass`) with **5–6 context-first stages** per project showing developer thought process rather than trivial bug minutiae.
2. **Featured 2×2 Project Cards (`#projects`):** **`MindWeave`**, **`Papyr`**, **`SkillVerify`**, and **`Daak v2`**, each paired with a domain-authentic UI animation (`diff-review`, `terminal-run`, `window`, `checklist`).
3. **Public Repositories Index (`#stack`):** **`ShishuCare` (NurtureAI)**, **`n8n-automations`**, **`scope-skill`**, **`baton-pass-skill`**, and **`rea-web-skill`** (explicitly omitting `llm-prompt-injection-eval` and `zeedan27`).
4. **Companion n8n Repo:** Public repo **`zeedan27/n8n-automations`** initialized locally at `D:\Tasks\n8n-automations` with categorized folders, deterministic credential/instanceId sanitizer (`scripts/sanitize-workflow.mjs`), `README.md` catalog, and seeded with sanitized `.json` workflows matching `#workflows`.
5. **Branch Workflow:** Long-lived **`dev`** staging branch (`https://dev.zesrab.pages.dev` preview on Cloudflare Pages), merging into `main` (`https://zesrab.pages.dev`) only after passing **Gate 2**.

### 3.3 Local n8n Automation Sources & Companion Repo Architecture
- **Source 1 (`Becreative _ Hubflow-n8n-templates-main`):** `742` real n8n workflow JSON definitions (stored as `.txt` files with complete `nodes` & `connections` graphs) across 24 domain folders (`OpenAI_and_LLMs`: 82, `AI_Research_RAG_and_Data_Analysis`: 41, `Other_Integrations_and_Use_Cases`: 30, `Gmail_and_Email_Automation`: 21, `Telegram`: 20, `PDF_and_Document_Processing`: 18, `Google_Drive_and_Google_Sheets`: 17, `Slack`: 11, `Notion`: 10, `Database_and_Storage`: 5, `HR_and_Recruitment`: 4, etc.).
- **Source 2 (`n8n Templates 3000 - Templates.csv`):** `1,987` scored workflows (`score` up to `9`), including *AI-Powered Automated Research Report Generator* (GPT-4 + SerpApi/NewsAPI + PDFShift + Gmail/Telegram), *AI-Powered Telegram Assistant with Email, Calendar & Tasks* (Voice/Text + Whisper/GPT-4 + Gmail + Google Calendar + Baserow), *AI-Powered RAG Chatbot with Google Drive & Qdrant* (Gemini/OpenAI embeddings + Qdrant + Telegram), and *Phishing URL Analyzer with URLScan and VirusTotal* (IMAP/Outlook + Python IOC parser + URLScan + VirusTotal + Slack).
- **Proposed Companion GitHub Repo (`zeedan27/n8n-automations`):**
  ```text
  n8n-automations/
  ├── README.md                     # Indexed catalog table, import guide & credential setup
  ├── workflows/
  │   ├── ai-research-and-rag/      # Paper/research digests, Qdrant/Supabase RAG agents
  │   ├── assistant-and-comms/      # Telegram voice/calendar/email assistants, HITL responders
  │   ├── document-and-data-ops/    # PDF extraction, Postgres/Sheets/Notion sync pipelines
  │   └── security-and-triage/      # URLScan/VirusTotal phishing triage & webhook routers
  ├── scripts/
  │   └── sanitize-workflow.mjs     # Strips instanceId, webhookId & credential IDs before commit
  └── .gitignore                    # Blocks .env*, raw credentials, and unsanitized scratch exports
  ```

---

## 4. T1 Threat Sketch
| Asset | Threat / Vector | Mitigation |
|---|---|---|
| **n8n Workflow Exports (`zeedan27/n8n-automations`)** | Accidental commit of n8n `credentials` blocks, `instanceId` hashes, personal webhook URLs, or API keys inside exported `.json` workflows. | Run deterministic `sanitize-workflow.mjs` scrubber stripping `meta.instanceId`, `webhookId`, and `credentials` IDs before staging; enforce `.gitignore` on `.env*`. |
| **Live Production Site (`zesrab.pages.dev`)** | Unverified schema/layout changes breaking production during multi-section refactor. | Isolate Cycle 02 work on `dev` branch; verify on local `vite preview` + Cloudflare Branch Preview (`dev.zesrab.pages.dev`) before Gate 2 merge to `main`. |
| **Static Client Bundle & Headers** | XSS, clickjacking, MIME sniffing, or broken external `target="_blank"` tabnabbing. | Keep `public/_headers` (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`), `escapeHtml()` on all rendered strings, and `rel="noopener noreferrer"` on external links. |
