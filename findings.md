# Findings, Hosting Audit & 12-Layer Infrastructure Matrix

## 1. Selected Tier & Hosting Conclusion
- **Project Tier:** **T1 Production (Right-Sized Static / Edge Portfolio)**
- **Selected Host:** **Cloudflare Pages** (Runner-up: **GitHub Pages**)
- **Primary Driver:** The dual full-screen Spotlight Hero loads both `front.jpg` (540 KB) and `back.jpg` (628 KB) per initial session (~1.17 MB hero imagery alone). Firebase Spark (`360 MB/day`), Render Hobby (`5 GB/month`), and Netlify Free (`300 credits/month` = `15 credits/deploy` + `20 credits/GB`) are vulnerable to deploy or traffic spikes. Cloudflare Pages provides **unlimited static bandwidth**, **500 builds/month**, **automatic SPA fallback**, and **zero non-commercial or AI-training clauses** (unlike Vercel Hobby ToS §2 & §4).

## 2. 12-Layer Infrastructure Decision Table
| # | Layer | Status | Selected Tech | Rationale | Revisit Trigger |
|---|---|---|---|---|---|
| **1** | **Frontend** | **Required** | Modular Vanilla ES6 + CSS3 (Vite) | Zero runtime overhead, direct DOM control for 60fps mask lerp and 3D page flips. | If multi-route stateful app dashboards are added. |
| **2** | **APIs & Backend** | **Lite** | Static validated data (`src/data/portfolioData.js`) | 0ms data load, zero GitHub API rate-limit errors (`60 req/hr` unauthenticated). | If live dynamic form handling or GitHub webhook sync is added (add Cloudflare Pages Function). |
| **3** | **Database & Storage** | **Deferred** | Git-versioned JS/JSON + `public/` static assets | Content changes via Git commits; DB adds zero user value for read-only portfolio. | If dynamic blog CMS or visitor telemetry is added (use Cloudflare D1). |
| **4** | **Auth & Permissions** | **Deferred** | Public Read-Only | Portfolio is intentionally public for recruiters. | If private/NDA case studies are added (enable Cloudflare Access). |
| **5** | **Hosting & Deployment** | **Required** | Cloudflare Pages | Unlimited static bandwidth, free SSL, preview URLs, `_headers` security. | If stateful containers are required. |
| **6** | **Cloud & Compute** | **Deferred** | Static Edge Only | Spotlight & Bookshelf execute smoothly client-side. | If server-side form API `/api/contact` is added (Cloudflare Workers Free: 100k req/day). |
| **7** | **CI/CD & Version Control** | **Required** | Git + GitHub + Cloudflare Git Integration | Atomic deploys + instant rollbacks on every commit. | If complex E2E matrix pipelines are needed (add GitHub Actions). |
| **8** | **Security & RLS** | **Lite** | `.gitignore` + `public/_headers` | Strict `nosniff`, `SAMEORIGIN`, `Referrer-Policy`, zero secret exposure. | Enable RLS if Layer 3 DB is introduced. |
| **9** | **Rate Limiting** | **Lite** | Cloudflare Edge DDoS Mitigation | Built-in edge protection for static assets. | Add Turnstile + rate limiting if Layer 2 form endpoint goes live. |
| **10** | **Caching & CDN** | **Required** | Cloudflare Anycast CDN + `_headers` + `<link rel="preload">` | Preloads `front.jpg` & `back.jpg`; immutable cache on hashed Vite bundles. | If dynamic SSR cache invalidation is needed. |
| **11** | **Load Balancing & Scaling** | **Deferred** | Cloudflare Edge Distribution | Static edge scales automatically at \$0 cost. | If origin compute servers are added. |
| **12** | **Error Tracking & Logs** | **Lite** | Defensive UI fallbacks + `progress.md` + `npm test` | Schema validation tests + graceful fallback UI. | Add Cloudflare Web Analytics on custom domain launch. |

## 3. Asset & Alignment Constraints
- User supplied `front.jpeg` (540,898 bytes) and `back.jpg` (628,012 bytes) with matching subject framing (studio portrait on dark void vs. `S-07 Tactical Unit` HUD exosuit).
- Both files are mirrored to `public/front.jpg` and `public/back.jpg` (with `public/front.jpeg` also preserved) so root/relative swaps of `front.jpg` and `back.jpg` work seamlessly.
- Left-side text overlay requires a soft horizontal dark scrim so white/cyan monospace typography maintains >= 7:1 contrast while keeping the portrait crisp on the right (`62% center`).
