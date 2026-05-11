## 🎯 Overview
This PR implements a robust CI/CD infrastructure and professionalizes the project's documentation and governance standards. The focus was on creating an "enterprise-ready" workflow that ensures code quality, performance monitoring, and security.

---

## ✨ Features & Improvements

### 🤖 CI/CD Automation (GitHub Actions)
- **Modular Pipeline:** Split CI into parallel jobs (Lint, Typecheck, Build) for better log isolation and faster feedback.
- **PNPM Caching:** Implemented advanced caching to reduce installation time.
- **PR Title Validator:** Enforced Conventional Commits at the PR level to maintain a clean project history.
- **Lighthouse CI:** Automatic performance, accessibility, and SEO auditing on every PR (using Vercel Preview URLs).
- **CodeQL Security:** Integrated static analysis to detect vulnerabilities and maintain high security standards.

### 📝 Documentation & Configs
- **Professional README:** Complete rewrite with tech badges (React, TS, Tailwind, Vite, Vercel), architecture overview, and author section.
- **Config Sync:** Synchronized ESLint (Flat Config) with Prettier and removed redundant legacy `.eslintrc.json`.
- **Git Governance:** Adjusted `.gitignore` to ensure `pnpm-lock.yaml` and workflows are correctly tracked while maintaining local instructions private.

---

## 🛠️ Technical Details
- **CI/CD:** GitHub Actions
- **Quality Gates:** 
  - Performance >= 90
  - Accessibility >= 95
  - Best Practices >= 95
  - SEO >= 90
- **Linter:** ESLint v9 (Flat Config)
- **Lockfile:** pnpm-lock.yaml

---

## 📸 Preview
*CI Pipeline status and Lighthouse reports will be visible in the Checks section of this PR.*
