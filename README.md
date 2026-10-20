# Al-Tahoona General Contracting Co. Ltd.
### شركة الطاحونة للمقاولات العامة المحدودة

A static website built with React, Vite, and Tailwind CSS. Designed specifically for hosting on **GitHub Pages**, with bilingual support (English main, Arabic toggle), book-like paper light mode, and true OLED black dark mode.

---

## Features

- **Languages**: English (default) with one-click toggle for Arabic (`dir="rtl"` with authentic Amiri and IBM Plex Sans Arabic typography).
- **Themes**:
  - **Light**: Archival book paper aesthetic (`#FAF7F2`) with warm ink typography (`#1C1917`).
  - **Dark**: True OLED black (`#000000`) with refined low-contrast borders and glare-free readable text (`#F3F3F3`).
- **Smooth Animations**: Seamless, non-exaggerated transitions powered by Framer Motion.
- **Top Navigation**: Section links with active underlines (`About Us`, `Gallery`, `Services`, `Contact`), cleanly reserved for future content.
- **Main Section**: Showcases the official company name in Arabic (*شركة الطاحونة للمقاولات العامة المحدودة*) and English (*Al-Tahoona General Contracting Co. Ltd.*) with an editorial description container.
- **Interactive Description Preview**: Allows previewing any draft description in real-time in both languages and themes.

---

## Deploying to GitHub Pages

1. **Build the static site**:
   ```bash
   npm run build
   ```
   This compiles all assets into the `dist/` directory.

2. **Deploy to GitHub Pages**:
   - Option A: Push the contents of the `dist/` folder to your `gh-pages` branch.
   - Option B: In your GitHub repository settings under **Pages**, configure GitHub Actions with the standard static Vite deployment workflow.
