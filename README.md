# 👨‍💻 Lucas Rossoni - Developer Portfolio

[![CI Pipeline](https://github.com/PxS00/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/PxS00/portfolio/actions/workflows/ci.yml)
[![Lighthouse CI](https://github.com/PxS00/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/PxS00/portfolio/actions/workflows/lighthouse.yml)
[![CodeQL](https://github.com/PxS00/portfolio/actions/workflows/codeql.yml/badge.svg)](https://github.com/PxS00/portfolio/actions/workflows/codeql.yml)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

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
