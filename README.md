# 👨‍💻 Lucas Rossoni - Backend Software Engineer Portfolio

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</div>

### 🌐 Live Portfolio: [https://lucas-rossoni.vercel.app](https://lucas-rossoni.vercel.app)

### 🛠️ Quality & Automation
![CI Pipeline](https://img.shields.io/github/actions/workflow/status/PxS00/portfolio/ci.yml?style=flat-square&label=CI%20Pipeline&logo=github)
![Lighthouse](https://img.shields.io/badge/Lighthouse-Pass-success?style=flat-square&logo=lighthouse)
![Security](https://img.shields.io/github/actions/workflow/status/PxS00/portfolio/codeql.yml?style=flat-square&label=CodeQL&logo=github-actions)

---

A modern, high-performance portfolio inspired by terminal and IDE aesthetics, focused on demonstrating high-quality software engineering and developer-centric design.

## 🚀 Technologies

- **Core:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Quality:** ESLint (Flat Config), Prettier, Lighthouse CI
- **Infrastructure:** GitHub Actions, Vercel

## ✨ Technical Highlights

### 🏛️ Feature-Based Architecture
The project follows a modular structure where each feature is self-contained, simplifying maintenance and scalability.

### ⚡ Resilience and Performance (GitHub API)
- **Cache Layer:** Custom cache implementation via `localStorage` with a 30-minute expiration.
- **Fail-safe:** Fallback mechanisms that guarantee data rendering even in rate-limiting scenarios.

### 🤖 CI/CD "Startup-Grade"
- **Modular Jobs:** Parallel pipelines for Lint, Typecheck, and Build.
- **Automated QA:** Performance verification via Lighthouse CI on every Pull Request.
- **Security First:** Static analysis of vulnerabilities with CodeQL.

## 📁 Project Structure

The project uses a **Feature-Based** architecture, focused on high cohesion and low coupling. Each primary function of the site is isolated into its own domain.

```text
.
├── .github/               # Automations, Workflows (CI/CD) and Issue/PR templates
├── src/
│   ├── app/               # Global settings: Providers, routing, and base layouts
│   ├── features/          # Independent business domains
│   │   ├── about/         # Biography section and technical stack
│   │   ├── contact/       # Contact management and copy-to-clipboard system
│   │   ├── hero/          # Landing and first impression (Typewriter)
│   │   ├── projects/      # GitHub API integration, Cache, and repository listing
│   │   └── ...
│   ├── shared/            # Reusable global resources
│   │   ├── components/    # Generic UI components (Cards, Buttons, Badges)
│   │   ├── hooks/         # Custom hooks (useTypewriter, useTheme)
│   │   └── utils/         # Helper functions and formatters
│   ├── styles/            # Design System: Global CSS, Variables, and Tailwind tokens
│   └── main.tsx           # Application entry point
└── public/                # Static assets (Images, Favicons)
```

## 👥 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/PxS00">
        <img src="https://github.com/PxS00.png" width="100px;" alt="Lucas Rossoni"/><br>
        <b>Lucas Rossoni Dieder</b>
      </a><br>
      <a href="https://www.linkedin.com/in/lucas-rossoni-dieder-32242a353/">LinkedIn</a>
    </td>
  </tr>
</table>

---
Developed with 💜 by [Lucas Rossoni](https://github.com/PxS00)
