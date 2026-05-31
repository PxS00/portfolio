export type TranslationKeys =
  | 'nav_home'
  | 'nav_projects'
  | 'nav_contact'
  | 'hero_subtitle'
  | 'hero_download_cv'
  | 'about_title_pre'
  | 'about_title_post'
  | 'about_intro'
  | 'about_tech_title'
  | 'about_tech_subtitle'
  | 'card_backend_title'
  | 'card_backend_desc'
  | 'card_data_title'
  | 'card_data_desc'
  | 'card_arch_title'
  | 'card_arch_desc'
  | 'card_cloud_title'
  | 'card_cloud_desc'
  | 'card_front_title'
  | 'card_front_desc'
  | 'card_security_title'
  | 'card_security_desc'
  | 'card_docs_title'
  | 'card_docs_desc'
  | 'card_ai_title'
  | 'card_ai_desc'
  | 'academic_highlight_title'
  | 'academic_highlight_desc'
  | 'academic_highlight_link'
  | 'cert_desc'
  | 'cert_skills'
  | 'cert_status'
  | 'cert_badge_link'
  | 'cert_pdf_link'
  | 'projects_title'
  | 'projects_recent_title'
  | 'projects_section_subtitle'
  | 'projects_grid_subtitle'
  | 'projects_view_all'
  | 'projects_loading'
  | 'projects_displaying'
  | 'project_card_fallback_desc'
  | 'project_detail_back_to_list'
  | 'project_detail_not_found'
  | 'project_detail_back'
  | 'project_detail_view_github'
  | 'project_detail_no_readme'
  | 'contact_subtitle'

export const TRANSLATIONS: Record<'pt-BR' | 'en-GB', Record<TranslationKeys, string>> = {
  'pt-BR': {
    nav_home: 'Menu',
    nav_projects: 'Projetos',
    nav_contact: 'Contato',
    hero_subtitle: 'Desenvolvendo arquiteturas escaláveis para soluções digitais modernas.',
    hero_download_cv: 'Baixar currículo',
    about_title_pre: 'Sobre ',
    about_title_post: 'mim',
    about_intro:
      'Desenvolvedor Back-end com foco em Java e Spring Boot, atuando na construção de APIs e soluções escaláveis. Possui forte base em arquitetura de software, integração de sistemas e boas práticas de desenvolvimento, com foco em código limpo e sustentável.',
    about_tech_title: 'Tecnologias',
    about_tech_subtitle: 'Ferramentas e tecnologias que utilizo no dia a dia',
    card_backend_title: 'Backend & APIs',
    card_backend_desc:
      'Construção de APIs utilizando Java e Spring Boot, com foco na organização de serviços, implementação de regras de negócio e arquitetura em camadas.',
    card_data_title: 'Dados & Persistência',
    card_data_desc:
      'Desenvolvimento de soluções de persistência com SQL, aplicando boas práticas de modelagem, integridade e performance de dados.',
    card_arch_title: 'Arquitetura & Boas\u00A0Práticas',
    card_arch_desc:
      'Aplicação de SOLID, Clean Code e padrões arquiteturais na construção de sistemas sustentáveis, escaláveis e de fácil manutenção.',
    card_cloud_title: 'Cloud & Infraestrutura',
    card_cloud_desc:
      'Utilização de ambientes em nuvem e conteinerização com Docker, com foco em deploy, escalabilidade e eficiência operacional.',
    card_front_title: 'Frontend & UI',
    card_front_desc:
      'Desenvolvimento de interfaces modernas e responsivas com React, Angular, HTML, CSS e JavaScript, integrando APIs REST e aplicações backend.',
    card_security_title: 'Segurança & Autenticação',
    card_security_desc:
      'Implementação de práticas de segurança, autenticação e controle de acesso para APIs e aplicações modernas.',
    card_docs_title: 'Docs & Integração',
    card_docs_desc:
      'Documentação e organização de APIs com foco em manutenção, padronização e comunicação eficiente entre serviços.',
    card_ai_title: 'IA & Automação',
    card_ai_desc:
      'Desenvolvimento de soluções inteligentes com foco em automação, integração de APIs e experiências orientadas por IA.',
    academic_highlight_title: 'Destaque Acadêmico',
    academic_highlight_desc:
      'Selecionado entre os 10 melhores projetos do curso de Análise e Desenvolvimento de Sistemas da FIAP para apresentação no FIAP NEXT. Atuou no desenvolvimento de uma solução tecnológica para o Hospital das Clínicas, em colaboração com uma equipe multidisciplinar, atuando na resolução de um problema real por meio da aplicação de engenharia de software.',
    academic_highlight_link: 'Ver projeto Luma',
    cert_desc: 'Certificação concluída pela Oracle University.',
    cert_skills:
      'Competências: OCI, Compute, Networking, Storage, Security, IAM, Compartments, VCNs e Cloud Architecture.',
    cert_status: 'Concluída',
    cert_badge_link: 'Credencial Oficial',
    cert_pdf_link: 'Visualizar PDF',
    projects_title: 'Meus Projetos',
    projects_recent_title: 'Projetos Recentes',
    projects_section_subtitle:
      'Confira os projetos e soluções que venho desenvolvendo recentemente.',
    projects_grid_subtitle:
      'Explore todos os meus repositórios públicos no GitHub. Abaixo estão os projetos em que venho trabalhando, ordenados pelas atualizações mais recentes.',
    projects_view_all: 'Ver todos os projetos',
    projects_loading: 'Carregando repositórios...',
    projects_displaying: 'Exibindo {count} repositórios',
    project_card_fallback_desc: 'Nenhuma descrição fornecida.',
    project_detail_back_to_list: 'Voltar aos projetos',
    project_detail_not_found: 'Projeto não encontrado.',
    project_detail_back: 'Voltar',
    project_detail_view_github: 'Ver no GitHub',
    project_detail_no_readme: 'Este repositório não possui README.',
    contact_subtitle:
      'Vamos construir algo juntos. Se você tem um projeto em mente, uma pergunta técnica ou apenas quer trocar uma ideia sobre engenharia de software, sinta-se à vontade para me chamar!',
  },
  'en-GB': {
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_subtitle: 'Developing scalable architectures for modern digital solutions.',
    hero_download_cv: 'Download CV',
    about_title_pre: 'About ',
    about_title_post: 'me',
    about_intro:
      'Backend Developer focused on Java and Spring Boot, acting in the construction of APIs and scalable solutions. Has a strong foundation in software architecture, systems integration, and development best practices, with a focus on clean and sustainable code.',
    about_tech_title: 'Technologies',
    about_tech_subtitle: 'Tools and technologies I use daily',
    card_backend_title: 'Backend & APIs',
    card_backend_desc:
      'Building APIs using Java and Spring Boot, focusing on service organisation, business rule implementation, and layered architecture.',
    card_data_title: 'Data & Persistence',
    card_data_desc:
      'Developing persistence solutions with SQL, applying data modelling best practices, integrity, and performance.',
    card_arch_title: 'Architecture & Best Practices',
    card_arch_desc:
      'Application of SOLID, Clean Code, and architectural patterns in building sustainable, scalable, and easy-to-maintain systems.',
    card_cloud_title: 'Cloud & Infrastructure',
    card_cloud_desc:
      'Use of cloud environments and containerisation with Docker, focusing on deployment, scalability, and operational efficiency.',
    card_front_title: 'Frontend & UI',
    card_front_desc:
      'Developing modern and responsive interfaces with React, Angular, HTML, CSS, and JavaScript, integrating REST APIs and backend applications.',
    card_security_title: 'Security & Authentication',
    card_security_desc:
      'Implementation of security, authentication, and access control practices for modern APIs and applications.',
    card_docs_title: 'Docs & Integration',
    card_docs_desc:
      'Documentation and organisation of APIs with a focus on maintenance, standardisation, and efficient communication between services.',
    card_ai_title: 'AI & Automation',
    card_ai_desc:
      'Developing smart solutions focusing on automation, API integration, and AI-driven experiences.',
    academic_highlight_title: 'Academic Highlight',
    academic_highlight_desc:
      'Selected among the top 10 projects of the Systems Analysis and Development course at FIAP to be presented at FIAP NEXT. Worked on developing a technological solution for Hospital das Clínicas, in collaboration with a multidisciplinary team, solving a real-world problem through the application of software engineering.',
    academic_highlight_link: 'View Luma project',
    cert_desc: 'Certification completed by Oracle University.',
    cert_skills:
      'Skills: OCI, Compute, Networking, Storage, Security, IAM, Compartments, VCNs, and Cloud Architecture.',
    cert_status: 'Completed',
    cert_badge_link: 'Official Credential',
    cert_pdf_link: 'View PDF',
    projects_title: 'My Projects',
    projects_recent_title: 'Recent Projects',
    projects_section_subtitle:
      'Check out the projects and solutions I have been developing recently.',
    projects_grid_subtitle:
      'Explore all my public repositories on GitHub. Below are the projects I have been working on, sorted by the most recent updates.',
    projects_view_all: 'View all projects',
    projects_loading: 'Loading repositories...',
    projects_displaying: 'Displaying {count} repositories',
    project_card_fallback_desc: 'No description provided.',
    project_detail_back_to_list: 'Back to projects',
    project_detail_not_found: 'Project not found.',
    project_detail_back: 'Back',
    project_detail_view_github: 'View on GitHub',
    project_detail_no_readme: 'This repository does not have a README.',
    contact_subtitle:
      "Let's build something together. If you have a project in mind, a technical question, or just want to chat about software engineering, feel free to contact me!",
  },
}
