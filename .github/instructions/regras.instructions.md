---
applyTo: '**'
---
# 📋 Manual de Regras do Projeto

## 1. 🎯 Visão Geral & Objetivos

Este documento define as regras e padrões obrigatórios para o desenvolvimento do projeto.

Seu objetivo é garantir:

* Padronização de código
* Qualidade técnica
* Organização do fluxo de trabalho
* Escalabilidade do projeto

Este documento deve ser considerado a **fonte única da verdade** para decisões técnicas e de desenvolvimento.

---

## 2. 🔄 Fluxo de Trabalho (Workflow & Git)

### 📌 Issues

Todas as tarefas devem ser registradas como Issues.

#### 🐛 Bug

* Descrição do problema
* Passos para reproduzir
* Comportamento esperado
* Evidências (logs/prints)

#### 🚀 Feature

* Descrição da funcionalidade
* Justificativa
* Critérios de aceite
* Abordagem técnica (opcional)

---

### 🌿 Git Flow

Estrutura de branches:

* `main` → produção
* `develop` → integração
* `feature/*` → novas funcionalidades
* `bugfix/*` → correções
* `hotfix/*` → correções urgentes em produção

---

### 🔁 Pull Requests (PRs)

Regras obrigatórias:

* Todo PR deve estar vinculado a uma Issue (`Closes #ID`)
* Descrição obrigatória contendo:

  * Contexto
  * O que foi feito
  * Como testar
* Deve passar em:

  * ESLint
  * Build
* Revisão obrigatória (mínimo 1 aprovação)
* Proibido merge direto na `main`
* PRs devem ser pequenos e focados

---

### 🧩 Squash and Merge

* Todo PR deve ser mergeado utilizando **Squash and Merge**
* Todos os commits da branch devem ser condensados em um único commit na `develop`
* O commit final deve seguir o padrão **Conventional Commits**

Exemplo:

```
feat(auth): implementa login com JWT
```

---

## 3. 💻 Padrões de Código

### 🛠 Ferramental

Uso obrigatório de:

* ESLint
* Prettier

---

### 🔤 Nomenclatura

* `PascalCase` → Componentes
* `camelCase` → Variáveis e funções

---

### ⚛️ React & Estrutura

* Uso exclusivo de **Arrow Functions**
* Uso de **Hooks** (proibido classes)
* Evitar lógica dentro do JSX
* Separar lógica de UI
* Tipagem obrigatória com TypeScript

---

## 4. 🎨 Design System & UI

### 📱 Mobile First

* Desenvolvimento baseado em Mobile First
* Uso consistente de breakpoints

---

### 🎨 Cores e Tailwind

* Tema Dark obrigatório
* Uso de Tailwind CSS
* Padronização de cores e espaçamentos

---

### 🧱 Componentes

* Componentes reutilizáveis
* Separação entre componentes de layout e de lógica

#### Botões:

* Variante sólida → ação principal
* Variante outline → ação secundária

---

### 🎞 Animações

* Uso de Framer Motion
* Animações devem ser suaves e sutis
* Evitar excesso de animações

---

## 5. 🧱 Stack Tecnológica

* React
* Tailwind CSS
* Framer Motion
* Lucide React
* ESLint
* Prettier

---

## 6. 📁 Estrutura do Projeto

Estrutura baseada em organização por domínio (feature-based):

```
src/
 ├── app/
 │   ├── routes/
 │   ├── providers/
 │   └── store/
 │
 ├── features/
 │   ├── auth/
 │   ├── dashboard/
 │
 ├── shared/
 │   ├── components/
 │   ├── hooks/
 │   ├── utils/
 │   ├── services/
 │   └── types/
 │
 ├── assets/
 ├── styles/
 ├── App.tsx
 └── main.tsx
```

Regras:

* Cada feature deve ser isolada
* Código compartilhado deve ficar em `shared/`
* Evitar dependência direta entre features

---

## 7. ✅ Qualidade de Código

* Evitar duplicação de código
* Funções pequenas e com responsabilidade única
* Priorizar legibilidade
* Código deve ser autoexplicativo