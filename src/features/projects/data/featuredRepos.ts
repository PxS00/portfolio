import type { GithubRepo } from '../types/github.types'

// Editorial selection; metadata is refreshed when GitHub is available.
export const FEATURED_REPO_SNAPSHOTS: GithubRepo[] = [
  {
    id: 1337795974,
    name: 'lavanda-flow',
    description: null,
    html_url: 'https://github.com/PxS00/lavanda-flow',
    language: 'Java',
    updated_at: '2026-10-20T16:04:50Z',
    fork: false,
    default_branch: 'main',
  },
  {
    id: 1293753196,
    name: 'energi-ai-g9-br-team-09',
    description:
      'MVP EnergiAI — análise inteligente de consumo energético com Ciência de Dados, API REST e OCI.',
    html_url: 'https://github.com/PxS00/energi-ai-g9-br-team-09',
    language: 'Jupyter Notebook',
    updated_at: '2026-08-14T22:33:23Z',
    fork: true,
    default_branch: 'develop',
  },
  {
    id: 1089880524,
    name: 'Luma',
    description:
      'Full-stack telemedicine support platform built with React, TypeScript, TailwindCSS, and Quarkus, providing scheduling, authentication, accessibility features, email reminders, interactive tutorials, and device verification tools for digital healthcare experiences',
    html_url: 'https://github.com/PxS00/Luma',
    language: 'TypeScript',
    updated_at: '2026-05-10T22:12:59Z',
    fork: true,
    default_branch: 'main',
  },
]

export const FEATURED_REPOS = FEATURED_REPO_SNAPSHOTS.map((repo) => repo.name)
