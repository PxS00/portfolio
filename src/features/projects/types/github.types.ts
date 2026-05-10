export interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  updated_at: string
  fork: boolean
  default_branch: string
}
