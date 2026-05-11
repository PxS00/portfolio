# 👨‍💻 Lucas Rossoni - Backend Software Engineer Portfolio

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</div>

### 🌐 Live Demo: [https://lucas-rossoni.vercel.app](https://lucas-rossoni.vercel.app)

### 🛠️ Quality & Automation
![CI Pipeline](https://img.shields.io/github/actions/workflow/status/PxS00/portfolio/ci.yml?branch=main&style=flat-square&label=CI%20Pipeline&logo=github)
![Lighthouse](https://img.shields.io/badge/Lighthouse-Pass-success?style=flat-square&logo=lighthouse)
![Security](https://img.shields.io/github/actions/workflow/status/PxS00/portfolio/codeql.yml?branch=main&style=flat-square&label=CodeQL&logo=github-actions)

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
O projeto segue uma estrutura modular onde cada funcionalidade é auto-contida, facilitando a manutenção e escalabilidade.

### ⚡ Resiliência e Performance (GitHub API)
- **Cache Layer:** Implementação de cache customizado via `localStorage` com expiração de 30 minutos.
- **Fail-safe:** Mecanismos de fallback que garantem a exibição dos dados mesmo em cenários de *Rate Limit*.

### 🤖 CI/CD "Startup-Grade"
- **Modular Jobs:** Pipeline paralela para Lint, Typecheck e Build.
- **Automated QA:** Verificação de performance via Lighthouse CI em cada PR.
- **Security First:** Análise estática de vulnerabilidades com CodeQL.

## 📁 Estrutura do Projeto

```text
.
├── .github/          # Workflows de CI/CD e automações
├── src/
│   ├── app/          # Rotas e configurações globais
│   ├── features/     # Funcionalidades modulares (contact, projects, hero)
│   │   ├── contact/
│   │   ├── projects/
│   │   └── ...
│   ├── shared/       # Componentes, hooks e utils reutilizáveis
│   ├── styles/       # Tokens de design e CSS global
│   └── main.tsx      # Ponto de entrada
└── public/           # Ativos estáticos
```

## 👥 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/PxS00">
        <img src="https://github.com/PxS00.png" width="100px;" alt="Lucas Rossoni"/><br>
        <sub><b>Lucas Rossoni Dieder</b></sub>
      </a><br>
      <a href="https://www.linkedin.com/in/lucas-rossoni-dieder-32242a353/">LinkedIn</a>
    </td>
  </tr>
</table>

---
Desenvolvido com 💜 por [Lucas Rossoni](https://github.com/PxS00)
