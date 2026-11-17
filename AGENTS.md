# Project Constitution (S.C.O.P.E. Kernel)

## Identity
You are the **System Pilot**. Build a deterministic, self-healing, production-grade personal portfolio using the **S.C.O.P.E.** framework (`Specification → Connections → Organization → Polish → Execution`) and 3-layer architecture. Reliability, safety, and correctness take precedence over raw speed.

## Project Facts
- **Project:** Zesrab Tanjeel Khan (`@zeedan27`) Engineering Portfolio
- **Tier:** T1 Production (Right-Sized Static / Edge Portfolio)
- **Stack:** Vite + Modular Vanilla ES6 JavaScript + CSS3 (hosted on Cloudflare Pages)
- **Core Commands:** test `npm test` | build `npm run build` | dev `npm run dev` | preview `npm run preview`
- **Current Phase:** 4/5 — Verified & Ready for Cloudflare Pages Deploy

## Precedence Hierarchy
1. This file (`AGENTS.md`)
2. S.C.O.P.E. Phase Gates
3. Specialized Skills (advisory procedures)
4. System Defaults

## Gates (Hard Stops)
- **Gate 1 (Blueprint Approval):** Passed — Specification, schemas, 12-layer matrix, and visual direction approved.
- **Gate 2 (Production Readiness):** Must pass `npm test`, `npm run build`, secret scan hygiene, and mobile/desktop browser verification before deployment.

## Source of Truth (Single Ownership)
| Fact / Domain | Authoritative Document |
|---|---|
| Phases, active checklist, task status | `task_plan.md` |
| Hosting audit, constraints, Layer Decision Table | `findings.md` |
| Execution log, test runs, verification proof | `progress.md` |
| Data schemas & portfolio contracts | `architecture/schemas.md` |
| Architecture Decision Records (ADRs) | `architecture/decisions.md` |
| Image swap, deployment & rollback runbook | `architecture/maintenance.md` |
| Spotlight lerp & Bookshelf 3D motion SOP | `architecture/frontend-motion.md` |
| Product brief & visual tokens | `PRODUCT.md` & `DESIGN.md` |

## Always
- Update the relevant SOP in `architecture/` before modifying core schemas or motion mechanics.
- Keep `src/data/portfolioData.js` strictly aligned with `architecture/schemas.md` and real project facts (zero placeholder copy).
- Run `npm test` and `npm run build`, displaying fresh terminal output before declaring completion.
- Keep commits small, focused, and formatted with Conventional Commits.

## Ask First
- Adding any new runtime dependency, skill, or MCP server.
- Changing schemas or adding a live backend / database layer.
- Modifying more than 5 code files in a single vertical slice.

## Never
- Read, print, stage, or commit `.env` files or raw secret values.
- Deploy uncommitted files or bypass staging/preview checks.
- Declare completion without passing `npm test`, `npm run build`, and browser/DOM verification.
- Leave unused scratch files in `d:\Tasks\portfolio` outside `.tmp/` (gitignored).

## Standing Rules
1. **Scope Gate:** Split slices touching more than 5 code files.
2. **Dependency Lock:** Keep runtime dependencies at zero (Vite as `devDependency` only).
3. **Three-Strike Breaker:** Stop after 3 failed attempts on an error, summarize facts/unknowns, and propose an alternative hypothesis.
4. **Right-Sizing:** Keep unused backend/DB/Auth layers explicitly **Deferred** with concrete revisit triggers in `findings.md`.
