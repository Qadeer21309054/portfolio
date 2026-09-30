# Muhammad Qadeer Ashraf — Official Portfolio & Academic Dossier
**Advocate, Punjab Bar Council • Associate, Legal Capitol • Published Researcher in AI & Law (AJEE)**

This is the official portfolio web application for Muhammad Qadeer Ashraf.

---

## ⚡ How to Run in Visual Studio Code (Quick Start)

### Why did opening `index.html` directly in the browser show a blank page?
Modern React applications use TypeScript (`.tsx`) files located in `src/`. Web browsers cannot execute TypeScript directly without compiling. Opening raw `index.html` without running a server causes the browser to reject `<script type="module" src="/src/main.tsx">`.

### The Proper Way to Run in VS Code:
1. Open the project folder in **Visual Studio Code**.
2. Open the built-in terminal (`Ctrl + ~` or **Terminal > New Terminal**).
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Click on the local link: **`http://localhost:3000`**.
   The website will run smoothly in your browser with full interactivity!

### Quick Debug / Run Shortcut in VS Code:
- We have configured `.vscode/launch.json` and `.vscode/tasks.json`.
- Press **`F5`** or click **Run and Debug** in VS Code to launch the site automatically in your browser!

---

## 🐙 How to Run & Deploy on GitHub Pages (Fixing Blank / 404 Screen)

When you upload this repository to GitHub, follow these simple steps to make it go live:

### Recommended: Automated GitHub Actions (1-Click)
1. Push your code to your repository: `https://github.com/Qadeer21309054/portfolio`
2. Go to **Settings > Pages** on GitHub.
3. Under **Build and deployment > Source**, select **GitHub Actions** from the dropdown.
4. That's all! Our workflow in `.github/workflows/deploy.yml` will automatically build the site and publish it live at:
   **`https://qadeer21309054.github.io/portfolio/`**

### Alternative: Deploy the Pre-Built `dist/` Folder
If you prefer not using GitHub Actions:
1. Run `npm run build` on your computer.
2. Upload the files inside `dist/` (`index.html`, `assets/`, `.nojekyll`) directly into the root of your GitHub repository or `gh-pages` branch.
3. Go to **Settings > Pages**, set **Source** to **Deploy from a branch** (`main` or `gh-pages`), and save.

---

## 📸 Profile & Event Photo Persistence

- **Saved Across Page Refreshes**: Whenever you upload your profile picture or category event photos, they are automatically saved into your browser's persistent storage (`localStorage`).
- **No More Re-Uploading**: When you refresh or reload the page, your uploaded photo remains intact across the **Navigation Bar**, **Hero Profile Card**, and **Footer**.
- **Instant Controls**: Click the camera icon or "Upload Photo / Change Photo" link directly on the Hero profile card or through the category upload manager to update your picture anytime.
