# 👨‍💻 Lucas Rossoni - Developer Portfolio

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</div>

### 🛠️ Quality & Automation
[![CI Pipeline](https://github.com/PxS00/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/PxS00/portfolio/actions/workflows/ci.yml)
[![Lighthouse CI](https://github.com/PxS00/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/PxS00/portfolio/actions/workflows/lighthouse.yml)
[![CodeQL](https://github.com/PxS00/portfolio/actions/workflows/codeql.yml/badge.svg)](https://github.com/PxS00/portfolio/actions/workflows/codeql.yml)

---

Um portfólio moderno, performático e inspirado na estética de terminais e IDEs, focado em demonstrar engenharia de software de alta qualidade e design centrado no desenvolvedor.


## 🚀 Tecnologias

- **Core:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS (v4)
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Qualidade:** ESLint (Flat Config), Prettier, Lighthouse CI
- **Infra:** GitHub Actions, Vercel

## ✨ Diferenciais Técnicos

### 🏛️ Feature-Based Architecture
O projeto segue uma estrutura modular onde cada funcionalidade (Hero, Projects, Contact) é auto-contida, facilitando a manutenção e escalabilidade.

### ⚡ Resiliência e Performance (GitHub API)
- **Cache Layer:** Implementação de cache customizado via `localStorage` com expiração de 30 minutos.
- **Fail-safe:** Mecanismos de fallback que garantem a exibição dos dados mesmo em cenários de *Rate Limit* da API do GitHub.

### 🤖 CI/CD "Startup-Grade"
- **Modular Jobs:** Pipeline paralela para Lint, Typecheck e Build.
- **Automated QA:** Verificação automática de performance via Lighthouse CI em cada Pull Request.
- **Security First:** Análise estática de vulnerabilidades com CodeQL.
- **Conventional PRs:** Validação semântica de títulos de PR para um histórico limpo.

## 🛠️ Como rodar o projeto

### Pré-requisitos
- Node.js 20+
- pnpm (recomendado)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/PxS00/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

---
Desenvolvido com 💜 por [Lucas Rossoni](https://github.com/PxS00)
