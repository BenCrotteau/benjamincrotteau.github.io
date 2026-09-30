# Benjamin Crotteau — GitHub Pages portfolio

A static website with three accessible tabs: Resume, Statistics and Mathematics (7 PDFs), and Additional Projects (5 PDFs). The original PDFs are included without modification. No installation or build step is required.

## Publish on GitHub Pages

1. Create a GitHub repository named `YOUR-USERNAME.github.io`, replacing YOUR-USERNAME with your actual GitHub username.
2. Extract this ZIP and upload the **contents** of the `benjamin-crotteau-site` folder to the repository root. `index.html` must be at the root, alongside `style.css`, `script.js`, and `assets`. Include `.nojekyll` if uploading through Git.
3. In the repository's Settings → Pages, choose “Deploy from a branch,” select `main` and `/ (root)`, and save.
4. Once GitHub finishes deployment, the website will be available at `https://YOUR-USERNAME.github.io/`.

The site also works in a project repository, at `https://YOUR-USERNAME.github.io/REPOSITORY/`, because all asset paths are relative.

## Preview locally

Open `index.html` in your browser, or run `python -m http.server 8000` inside this folder and visit `http://localhost:8000`.

## Update documents

Replace `assets/Resume.pdf` to update the résumé. Project PDFs are stored under `assets/Statistics` and `assets/Miscellaneous`. Update the corresponding links in `index.html` when adding or renaming a project.
