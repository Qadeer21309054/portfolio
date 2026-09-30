# Muhammad Qadeer Ashraf — Website Deployment & GitHub Pages Guide
**Advocate, Punjab Bar Council • Associate, Legal Capitol • Published Researcher (AJEE)**

This guide explains how to deploy Muhammad Qadeer Ashraf's portfolio website and **solves the GitHub Pages 404 error**.

---

## 🔍 Why did you get a 404 Error on GitHub Pages?

If your URL was `https://qadeer21309054.github.io/portfolio/muhammad-qadeer-ashraf_portfolio/index.html` and returned 404, here are the 3 reasons and how they are now fixed:

1. **Vite Absolute Path vs Relative Path (Fixed in `vite.config.ts`)**:
   - By default, Vite was generating absolute links like `/assets/index.js`.
   - On GitHub Pages under a subfolder, the browser looked for `https://qadeer21309054.github.io/assets/index.js` (which does not exist), causing a 404.
   - **Fix Applied**: `vite.config.ts` has been configured with `base: './'`, making all asset URLs relative so they work under ANY folder or subpath.

2. **Uploading Raw Source Code vs Built Website**:
   - Modern React/Vite websites have source files (`src/App.tsx`, `src/main.tsx`) that web browsers cannot run directly without being compiled first.
   - If GitHub Pages serves raw `index.html` referencing `<script type="module" src="/src/main.tsx">`, it cannot load in the browser.
   - **Fix Applied**: We added an automated **GitHub Actions Workflow** (`.github/workflows/deploy.yml`). When you push your code, GitHub will automatically run `npm run build` and deploy the live site for you!

3. **Subfolder Nesting vs Repository Root**:
   - If your repository is named `portfolio`, placing the files inside an extra subfolder `muhammad-qadeer-ashraf_portfolio/` makes the URL long and easy to misconfigure.
   - Best practice: place your files directly in the root of the repository so your URL is clean: `https://qadeer21309054.github.io/portfolio/` or `https://qadeer21309054.github.io/`.

---

## 🐙 Step-by-Step: How to Deploy to GitHub Pages with Zero Errors

### Method A: Automated GitHub Actions (Recommended — Zero Manual Builds)

We have added `.github/workflows/deploy.yml` directly into your repository.

1. Push all files to your GitHub repository (e.g. `portfolio`).
2. Go to your repository on GitHub: `https://github.com/Qadeer21309054/portfolio`.
3. Click on **Settings** (top tab).
4. On the left sidebar, click **Pages**.
5. Under **Build and deployment > Source**, click the dropdown and select **GitHub Actions** (instead of "Deploy from a branch").
6. That's it! GitHub will automatically trigger the workflow, build the Vite app, and publish your website.
7. Your site will be live at:
   **`https://qadeer21309054.github.io/portfolio/`**

---

### Method B: Deploying the Pre-Built `dist` Folder Directly

If you prefer to deploy static HTML/CSS/JS without GitHub Actions:

1. In your project directory, run:
   ```bash
   npm run build
   ```
2. This creates a `dist/` directory containing `index.html`, `assets/`, and `.nojekyll`.
3. Upload the **contents** of `dist/` directly to the root of your GitHub Pages branch (`main` or `gh-pages`).
4. Ensure `Settings > Pages > Source` is set to **Deploy from a branch** (`main` / root).
5. The site will load immediately without 404.

---

## 📱 Fully Responsive on Every Device

The portfolio has been optimized for all screen form factors:
- **Mobile Phones (320px - 480px)**: Compact navigation bar, slide-out drawer with direct scholar profile links (ORCiD, ResearchGate, GitHub, LinkedIn), full-width touch CTA buttons, horizontal swipeable category chips, and readable mobile typography.
- **Tablets (768px - 1024px)**: Adaptive 2-column grid layout for courtroom litigation practice and peer-reviewed publication dossiers.
- **Laptops & Desktops (1280px+)**: High-definition presentation with interactive photo slider, two-page printable CV modal, and citation copy tools.

---

## 🚀 OPTION 1: Netlify Drop (FASTEST & EASIEST — Under 30 Seconds)
*Zero terminal commands, zero Git, zero build setup. Automatic free HTTPS and SSL.*

1. Click **"Deploy Website (.ZIP)"** or **"Deploy / Download ZIP"** on the website to download the complete package.
2. Unzip `Muhammad_Qadeer_Ashraf_Portfolio_Website.zip` on your computer.
3. Open your web browser and navigate to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**.
4. Drag and drop the unzipped folder directly onto the upload area.
5. **Done!** Your website is instantly live with a public HTTPS URL (e.g. `https://muhammad-qadeer-ashraf.netlify.app`).
6. *(Optional)* Go to **Site Configuration > Domain management** to connect your custom domain (e.g., `qadeerashraf.com`).

---

## 🐙 OPTION 2: GitHub Pages (Free Lifetime Personal URL)
*Host under your official GitHub profile: `https://Qadeer21309054.github.io`*

1. Log into your GitHub account at **[https://github.com](https://github.com)**.
2. Click **New Repository** (`+` icon at top right).
3. Set Repository Name to: `Qadeer21309054.github.io` (must match your GitHub username).
4. Set the repository visibility to **Public**.
5. Upload all the unzipped files (`index.html`, `images/`, `README.md`, etc.) directly to the root of the repository:
   - On GitHub, click **Add file > Upload files**, drag the files, and click **Commit changes**.
6. Navigate to **Settings > Pages** in your repository.
7. Under **Build and deployment > Source**, ensure **Deploy from a branch** is selected with `main` / `/ (root)`.
8. Within 60 seconds, your website will be live at:
   **`https://Qadeer21309054.github.io`**

---

## ⚡ OPTION 3: Vercel (Edge Network Deployment)
1. Go to **[https://vercel.com](https://vercel.com)** and sign in with GitHub.
2. Click **Add New... > Project**.
3. Select your GitHub repository or drag and drop using the Vercel CLI (`npx vercel`).
4. Click **Deploy**. Your site is automatically built and deployed worldwide.

---

## 🌐 OPTION 4: Traditional Web Hosting / cPanel (Hostinger, Namecheap, GoDaddy, Bluehost)
1. Log into your hosting control panel (cPanel, hPanel, etc.).
2. Open **File Manager** and enter the `public_html` directory (document root).
3. Upload:
   - `index.html` (must be placed directly inside `public_html`)
   - `images/` folder (containing `mqa_profile.jpg`)
4. Visit your registered domain in any browser — your website is immediately live!

---

## 📁 Package Directory Structure:
```text
├── index.html                    <- Standalone production single-page website with Tailwind CSS & fonts
├── DEPLOYMENT_GUIDE.md           <- Step-by-step instructions (this file)
├── README.md                     <- Professional summary, bar admissions, publications & contact info
├── Muhammad_Qadeer_Ashraf_CV.txt <- Plain-text verified CV with Bar admission
├── CNAME.example                 <- Template for custom domain mapping
├── package.json                  <- Project metadata & build scripts
├── vite.config.js                <- Build tool configuration
└── images/
    ├── mqa_profile.jpg           <- Authentic portrait of Muhammad Qadeer Ashraf
    └── README_PHOTOS.txt         <- Expected filenames for the 6 verified event categories
```

---

## 🖼️ Adding Authentic Event Photographs
To display photos across the verified summit, moot court, and academic program cards, simply place your photos into the `images/` directory with these filenames:
1. `kakuma_refugee_summit.jpg` — Summit on Mobility and Immobility, Kakuma Refugee Camp, Kenya
2. `bangladesh_space_law_conference.jpg` — Conference on Aviation & Space Law, BSMRAAU, Bangladesh
3. `vilnius_moot_court.jpg` — European Humanities University, Vilnius, Lithuania
4. `copenhagen_research_school.jpg` — University of Copenhagen iCourts/MOBILE PhD Summer School
5. `ceu_budapest_seminar.jpg` — Central European University Budapest
6. `brac_university_graduation.jpg` — 4-Year Bachelor of Laws, LL.B. (Hons.) BRAC University
