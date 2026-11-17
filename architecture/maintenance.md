# Maintenance, Asset Swap & Deployment Runbook

## 1. Swapping the Hero Spotlight Images (`front.jpg` & `back.jpg`)
1. Prepare two identically framed images (same aspect ratio & subject alignment).
2. Replace `public/front.jpg` (default visible image) and `public/back.jpg` (spotlight-revealed image).
   - Optionally keep root `front.jpg` / `back.jpg` synced if testing standalone previews.
3. Run `npm run build` and preview locally with `npm run preview`.

## 2. Updating Projects, Case Studies & Resume
- Edit `src/data/portfolioData.js` following `architecture/schemas.md`.
- To update the downloadable resume PDF or interactive ATS CV, replace `public/Zesrab-Tanjeel-Khan_CV.pdf` and `public/cv.html`.
- Run `npm test` to confirm all schema invariants and asset checks pass.

## 3. Deploying to Cloudflare Pages
1. Verify git cleanliness and checks:
   ```bash
   npm test
   npm run build
   git status
   ```
2. Push committed code to GitHub (`main` branch).
3. In **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**:
   - **Framework preset:** `Vite` (or `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Verify preview deployment URL first before promoting or binding custom domain.

## 4. Rollback Procedure
- **Instant CDN Rollback:** In Cloudflare Pages → **Deployments**, click `...` on the previous known-good deployment → **Rollback to this deployment** (zero rebuild needed).
- **Git Rollback:** `git revert <commit-sha>` and push to trigger an atomic clean rebuild.
