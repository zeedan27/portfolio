# Maintenance, Asset Swap & Deployment Runbook

## 1. Swapping the Hero Spotlight Images (`public/images/front.jpg` & `public/images/back.jpg`)
1. Prepare two identically framed images (same aspect ratio & subject alignment).
2. Replace `public/images/front.jpg` (default visible image) and `public/images/back.jpg` (spotlight-revealed image), and update `public/images/share.jpg` if changing the social preview.
3. Run `npm run build` and preview locally with `npm run preview`.

## 2. Updating Projects, Case Studies & Resume
- Edit `src/data/portfolioData.js` following `architecture/schemas.md`.
- To update the downloadable resume PDF, replace `public/cv/Zesrab-Tanjeel-Khan_CV.pdf`.
- Run `npm test` to confirm all schema invariants and asset checks pass.

## 3. Branch Preview (`dev`) & Deploying to Cloudflare Pages
1. Develop and verify all changes on the long-lived `dev` branch (`npm test`, `npm run build`, `git status` clean).
2. Push `dev` to GitHub (`git push origin dev`) so Cloudflare Pages builds the staging preview URL (`https://dev.zesrab.pages.dev`).
3. Verify the preview URL via `/browser` and satisfy **Gate 2** before merging `dev` into `main` (`https://zesrab.pages.dev`).
4. **Companion n8n Repository (`D:\Tasks\n8n-automations` → `zeedan27/n8n-automations`):**
   - Import new workflow exports via `npm run sanitize -- --import <raw.json> workflows/<category>/<slug>.json --name "<Title>"`.
   - Verify `npm run check` passes (`0` credentials, `instanceId`, `webhookId`, or secret hits) before committing and pushing.
5. Cloudflare Pages build settings for `zesrab`:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

## 4. Rollback Procedure
- **Instant CDN Rollback:** In Cloudflare Pages → **Deployments**, click `...` on the previous known-good deployment → **Rollback to this deployment** (zero rebuild needed).
- **Git Rollback:** `git revert <commit-sha>` and push to trigger an atomic clean rebuild.
