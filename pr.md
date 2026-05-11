# feat(ci): implement professional CI/CD, security and governance workflows

## 🎯 Overview
This PR introduces a complete CI/CD and governance infrastructure focused on code quality, performance monitoring, security analysis and maintainability.

The goal is to establish an enterprise-grade development workflow with automated quality gates, standardized conventions and improved project documentation.

---

## ✨ Features & Improvements

### 🤖 CI/CD Automation
- Implemented modular GitHub Actions workflows with isolated jobs for:
  - Lint
  - Typecheck
  - Build

- Added PNPM dependency caching for faster workflow execution.
- Added Conventional Commit validation for Pull Request titles.
- Integrated Lighthouse CI using Vercel Preview Deployments.
- Added CodeQL static analysis for automated security scanning.

### 📊 Quality Gates
Automatic PR validation now enforces:

- Performance >= 90
- Accessibility >= 95
- Best Practices >= 95
- SEO >= 90

### 📝 Documentation & Governance
- Reworked README with:
  - Technology badges
  - Architecture overview
  - Deployment information
  - Author section

- Migrated fully to ESLint v9 Flat Config.
- Removed legacy `.eslintrc.json` configuration.
- Improved `.gitignore` governance for workflow and lockfile tracking.
- Standardized project tooling and formatting configuration.

---

## 🛠️ Technical Details

### Stack
- GitHub Actions
- Lighthouse CI
- CodeQL
- ESLint v9 (Flat Config)
- PNPM

### Architecture
```txt
.github/workflows/
├── ci.yml
├── lighthouse.yml
├── codeql.yml
└── pr-title.yml
```
