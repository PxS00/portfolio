export type TechCategory = 'backend' | 'database' | 'cloud' | 'tools' | 'other'

export type Tech = {
  name: string
  iconUrl: string
  category: TechCategory
}

export const technologies: Tech[] = [
  // BACKEND
  {
    name: 'Java',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    category: 'backend',
  },
  {
    name: 'Spring Boot',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    category: 'backend',
  },
  {
    name: 'Quarkus',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quarkus/quarkus-original.svg',
    category: 'backend',
  },
  {
    name: 'Python',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    category: 'other',
  },
  {
    name: 'C#',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    category: 'other',
  },

  // DATABASE
  {
    name: 'PostgreSQL',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    category: 'database',
  },
  {
    name: 'MySQL',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    category: 'database',
  },

  // CLOUD
  {
    name: 'AWS',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    category: 'cloud',
  },
  {
    name: 'Azure',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    category: 'cloud',
  },
  {
    name: 'OCI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
    category: 'cloud',
  },

  // TOOLS
  {
    name: 'Docker',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    category: 'tools',
  },
  {
    name: 'Swagger',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
    category: 'tools',
  },
  {
    name: 'Git',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    category: 'tools',
  },
]
