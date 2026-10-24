# LearnSphere – Educational Blog Platform

> **Tagline:** “Learn. Explore. Grow.”  
> **Course:** Design Process and Perspective (DPP)  
> **Global Objective:** Aligned with **UN Sustainable Development Goal 4 (SDG 4) – Quality Education**

---

## 🌟 Executive Summary

**LearnSphere** is a modern, responsive, and accessible educational blogging platform engineered for college-level students and lifelong learners. The platform addresses modern educational barriers—fragmented tutorials, overwhelming jargon, and poor digital structure—by delivering structured, high-clarity learning tracks in **Programming**, **Artificial Intelligence**, **Web Development**, **Data Science**, **Cybersecurity**, and **Career & Professional Skills**.

LearnSphere is designed according to **human-centered design principles**, incorporating **cognitive load theory**, **WCAG 2.1 AAA accessibility**, and responsive modern visual hierarchy.

---

## 🚀 Quick Start / How to Run

LearnSphere is built with **zero external compilation dependencies** so evaluators, professors, and students can run it instantaneously on any operating system.

### Option 1: Direct Browser Launch (Easiest)
1. Navigate to the project folder: `DPP/`
2. Double-click **`index.html`** to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.
3. Everything—routing, search, theme switcher, bookmarks, and illustrations—functions 100% locally offline!

### Option 2: Local HTTP Server (Recommended)
You can run a local development server using Python or Node:

**Using Python:**
```bash
python -m http.server 8000
```
Open your browser at `http://localhost:8000`.

**Using Node.js:**
```bash
npx serve .
```

---

## 📱 Interactive Evaluator Features

1. **Device Viewport Simulator (Top Toolbar):**
   - 🖥️ **Desktop Mode:** Full width responsive view.
   - 📟 **Tablet Mode:** Simulates an iPad Pro 768px frame.
   - 📱 **Mobile Frame:** Simulates an iPhone 15 viewport (directly satisfies Requirement #18: Mobile version of the Home Page).
2. **Reading Themes:**
   - ☀️ **Academic Light Mode** (High-contrast clean canvas)
   - 🌙 **Focused Dark Mode** (Reduced eye strain for night study)
   - 📖 **Warm Eye-Care Sepia Mode** (Gentle warm paper tones)
3. **Real-Time Search & Suggestions (`Ctrl + K` or `Cmd + K`):**
   - Real-time search engine with keyword highlighting and fuzzy suggestions.
4. **My Saved Reading List:**
   - Bookmark articles to `localStorage` for offline review prior to exams.
5. **Interactive Table of Contents (TOC):**
   - Active scrollspy tracks reading position and offers smooth section jumping.
6. **Reader Text Sizer (`A-`, `A`, `A+`):**
   - Dynamically adjusts typography size for enhanced readability.

---

## 📂 Project Architecture

```
DPP/
├── index.html                 # Semantic HTML5 single-page application entry point
├── css/
│   └── style.css              # Custom styling, themes (Light/Dark/Sepia), animations, typography
├── js/
│   ├── app.js                 # SPA hash router, view renderers, event controllers
│   ├── data.js                # Structured content store (categories, articles, authors, stats)
│   ├── search.js              # Real-time search engine with keyword highlighting
│   └── ui.js                  # Modals, bookmarks, reading progress, theme switcher, toasts
├── assets/
│   └── images/                # 100% custom lightweight SVG illustrations (offline reliable)
│       ├── hero-illustration.svg     # Modern educational hub illustration
│       ├── logo.svg                  # LearnSphere vector brandmark
│       ├── sdg4-badge.svg            # UN SDG 4 Quality Education emblem
│       ├── topic-ai.svg              # Artificial Intelligence neural cluster
│       ├── topic-programming.svg     # IDE code & syntax illustration
│       ├── topic-web.svg             # Web client-server API flow
│       ├── topic-security.svg        # Cybersecurity CIA triad shield
│       ├── topic-data.svg            # Data science dashboard & trendline
│       └── topic-career.svg          # Career roadmap & Git branch visualization
├── generate_assets.js         # Generator script for vector illustrations
├── test_suite.js              # Automated test suite validating all assignment criteria
├── DPP_Project_Report.md      # Comprehensive academic Design Process & Perspective report
└── README.md                  # Project overview & documentation
```

---

## 🎨 Visual Design System

| Element | Specification | Rationale |
| :--- | :--- | :--- |
| **Primary Blue** | `#2563EB` (Royal Blue) | Fosters cognitive calm, academic trust, and mental focus. |
| **Secondary Accent** | `#F59E0B` (Warm Amber) | Energizing highlight for active buttons, badges, and bookmarks. |
| **Canvas Background** | `#F8FAFC` (Slate 50) | Minimizes glare while maintaining pure contrast against dark text. |
| **Dark Text** | `#0F172A` & `#334155` | Exceeds WCAG AAA contrast ratio standards (9.8:1). |
| **Typography** | *Plus Jakarta Sans* | Crisp geometric humanist sans-serif optimized for screen reading. |
| **Code Typography** | *JetBrains Mono* | Monospaced font with distinct character shapes to prevent syntax confusion. |
| **Card Radii** | `16px` (`rounded-2xl`) | Friendly, modern aesthetic eliminating visual harshness. |

---

## 🌍 UN SDG 4 – Quality Education Alignment

LearnSphere actively advances the targets of **UN Sustainable Development Goal 4**:
* **Target 4.4 (Marketable Technical Skills):** Provides foundational literacy in programming, algorithms, AI, and cybersecurity to prepare students for real-world internships.
* **Target 4.7 (Lifelong Learning & Sustainability):** Cultivates curiosity and autonomous study habits outside the classroom.
* **Target 4.a (Equitable Digital Access):** 100% free open-access educational content without paywalls or login friction, optimized for low-bandwidth mobile devices.

---

## 🧪 Automated Testing & Verification

Run the automated test suite anytime using Node.js:
```bash
node test_suite.js
```

All 20+ checks verify category taxonomy, article contents, table of contents integrity, search mechanics, SVG image dimensions, and semantic markup.

---

*Created for the College Design Process & Perspective (DPP) Assignment • © 2026 LearnSphere*
