import type { Language } from '../../../app/providers/LanguageContext'

type StoryCopy = {
  summary: string
  context: string
  role: string
  contributions: string[]
  decisions: Array<{ title: string; description: string }>
  outcome: string
  walkthrough: string[]
}

export type ProjectStory = {
  name: string
  category: Record<Language, string>
  stack: string[]
  links: Array<{ url: string; label: Record<Language, string> }>
  copy: Record<Language, StoryCopy>
}

const energiRepo = 'https://github.com/PxS00/energi-ai-g9-br-team-09/blob/develop'
const lavandaRepo = 'https://github.com/PxS00/lavanda-flow/blob/main'

export const PROJECT_STORIES: Record<string, ProjectStory> = {
  'lavanda-flow': {
    name: 'Lavanda Flow',
    category: {
      'pt-BR': 'Gestão de estoque e produção',
      'en-GB': 'Inventory and production management',
    },
    stack: ['Java', 'Spring Boot', 'Spring Modulith', 'PostgreSQL', 'Angular', 'Docker'],
    links: [
      {
        url: `${lavandaRepo}/docs/architecture/architecture.md`,
        label: { 'pt-BR': 'Decisões de arquitetura', 'en-GB': 'Architecture decisions' },
      },
      {
        url: `${lavandaRepo}/docs/product/scope-v1.md`,
        label: { 'pt-BR': 'Escopo e documentação', 'en-GB': 'Scope and documentation' },
      },
    ],
    copy: {
      'pt-BR': {
        summary:
          'Sistema para a Céu de Lavanda que conecta estoque, fórmulas e produção, com controle de validade e rastreabilidade dos lotes.',
        context:
          'Uma produção consome matérias-primas e pode utilizar produtos intermediários. O desafio é preservar a origem dos insumos, controlar saldos e registrar cada transformação sem deixar o estoque inconsistente.',
        role: 'Desenvolvimento do sistema de gestão da Céu de Lavanda, com foco em regras de negócio, backend e integração da interface operacional.',
        contributions: [
          'Organização dos domínios de catálogo, estoque, fornecedores e produção em um monólito modular.',
          'Controle de lotes, movimentações, vencimentos e alocação FEFO: consumir primeiro os lotes elegíveis que vencem antes.',
          'Registro de produção com consumo dos insumos, criação do lote de saída e rastreabilidade entre as etapas.',
          'Integração da interface Angular com APIs e validações autoritativas no backend.',
        ],
        decisions: [
          {
            title: 'Módulos com responsabilidades claras',
            description:
              'Spring Modulith verifica fronteiras entre os domínios. Um módulo acessa outro por contratos públicos, preservando a organização sem exigir serviços separados.',
          },
          {
            title: 'Produção em uma única transação',
            description:
              'Consumo de estoque, lote produzido e vínculos de rastreabilidade precisam ser confirmados juntos. Se uma etapa falhar, a operação deve ser desfeita por inteiro.',
          },
          {
            title: 'Origem dos lotes preservada',
            description:
              'A genealogia utiliza relações explícitas entre produção e lotes consumidos, permitindo investigar a origem e o destino dos materiais em múltiplas etapas.',
          },
        ],
        outcome:
          'O escopo V1 documentado reúne estoque e produção. O projeto continua evoluindo; funcionalidades e decisões de versões posteriores são acompanhadas no repositório.',
        walkthrough: [
          'Consultar lotes disponíveis e suas validades.',
          'Selecionar uma fórmula e registrar a produção com os insumos consumidos.',
          'Consultar o lote gerado e rastrear sua origem pelas etapas de produção.',
        ],
      },
      'en-GB': {
        summary:
          'An inventory and production system for Céu de Lavanda, connecting formulas and stock with expiry control and batch traceability.',
        context:
          'Production consumes raw materials and may use intermediate products. The challenge is to preserve material provenance, control balances and record every transformation without leaving inconsistent stock.',
        role: 'Development of the Céu de Lavanda management system, focusing on business rules, backend development and operational interface integration.',
        contributions: [
          'Organised catalogue, inventory, supplier and production domains within a modular monolith.',
          'Implemented batches, movements, expiry control and FEFO allocation: using eligible batches with the earliest expiry first.',
          'Connected production registration, input consumption, output batches and traceability across production stages.',
          'Integrated the Angular interface with APIs and backend-authoritative validation.',
        ],
        decisions: [
          {
            title: 'Clear module responsibilities',
            description:
              'Spring Modulith verifies domain boundaries. Modules communicate through public contracts, preserving structure without requiring separate services.',
          },
          {
            title: 'One production transaction',
            description:
              'Input consumption, output creation and traceability links commit together. If any step fails, the entire operation rolls back.',
          },
          {
            title: 'Preserving batch provenance',
            description:
              'Explicit relationships between production and consumed batches support upstream and downstream tracing across multiple stages.',
          },
        ],
        outcome:
          'The documented V1 scope covers inventory and production. The project continues to evolve; later features and decisions are tracked in the repository.',
        walkthrough: [
          'Review available batches and expiry dates.',
          'Choose a formula and register production with the consumed inputs.',
          'Inspect the output batch and trace its origins through production stages.',
        ],
      },
    },
  },
  'energi-ai-g9-br-team-09': {
    name: 'EnergiAI',
    category: {
      'pt-BR': 'Hackathon Oracle ONE + Alura · 2026',
      'en-GB': 'Oracle ONE + Alura Hackathon · 2026',
    },
    stack: ['Java 21', 'Spring Boot', 'Oracle Database', 'OCI', 'Terraform', 'FastAPI', 'React'],
    links: [
      {
        url: 'https://energiai.vercel.app',
        label: { 'pt-BR': 'Abrir demonstração', 'en-GB': 'Open demo' },
      },
      {
        url: `${energiRepo}/docs/delivery/demo-script.md`,
        label: { 'pt-BR': 'Apresentação do Demo Day', 'en-GB': 'Demo Day presentation' },
      },
      {
        url: `${energiRepo}/docs/delivery/architecture.md`,
        label: { 'pt-BR': 'Arquitetura da entrega', 'en-GB': 'Delivery architecture' },
      },
    ],
    copy: {
      'pt-BR': {
        summary:
          'MVP de análise de consumo energético desenvolvido em equipe, com backend Java, integração com Machine Learning e infraestrutura na Oracle Cloud.',
        context:
          'Criado no hackathon Oracle ONE + Alura, o EnergiAI transforma dados simples de consumo elétrico em classificação de perfil, recomendações e estimativa mensal de custo para residências e pequenos estabelecimentos.',
        role: 'Backend e infraestrutura cloud, organização de issues e pull requests, além de colaboração com Data Science nas revisões dos modelos.',
        contributions: [
          'Desenvolvimento do backend Java 21 e Spring Boot, persistência e integração com a FastAPI de inferência.',
          'Segurança da API e isolamento das análises por usuário autenticado.',
          'Configuração da OCI e IAM, provisionamento com Terraform e deploy do backend, com automação de CI/CD.',
          'Organização e acompanhamento de issues e pull requests durante a entrega em equipe.',
          'Colaboração nas revisões dos modelos com a equipe de Data Science e apoio técnico à preparação do Demo Day.',
        ],
        decisions: [
          {
            title: 'Backend como fronteira pública',
            description:
              'O frontend conversa com Spring Boot. O backend centraliza segurança, regras, persistência e a integração interna com o serviço de inferência.',
          },
          {
            title: 'Contingência explícita para a inferência',
            description:
              'Quando a FastAPI falha, expira ou retorna uma resposta inválida, o backend utiliza regras locais. A resposta distingue esse caminho do resultado produzido pelo modelo de ML.',
          },
          {
            title: 'Da implementação ao deploy',
            description:
              'A entrega conecta aplicação, acesso na OCI, infraestrutura e automação. A API foi implantada em OCI Compute com HTTPS e persistência em Oracle Autonomous Database.',
          },
        ],
        outcome:
          'A entrega documentada inclui autenticação, análise, histórico individual e dashboard. O modelo foi avaliado em dados sintéticos; seus resultados não comprovam economia real nem desempenho equivalente em dados reais. A tarifa é uma referência do MVP.',
        walkthrough: [
          'Acessar a demonstração e criar ou utilizar uma conta própria.',
          'Informar o consumo e as características de uso para solicitar uma análise.',
          'Examinar a classificação, as recomendações e a estimativa de custo; consultar o histórico individual.',
        ],
      },
      'en-GB': {
        summary:
          'A team-built energy analysis MVP combining a Java backend, Machine Learning integration and Oracle Cloud infrastructure.',
        context:
          'Built for the Oracle ONE + Alura hackathon, EnergiAI turns simple electricity usage inputs into a profile classification, recommendations and a monthly cost estimate for homes and small businesses.',
        role: 'Backend and cloud infrastructure, issue and pull request coordination, and collaboration with Data Science on model reviews.',
        contributions: [
          'Developed the Java 21 and Spring Boot backend, persistence and integration with the FastAPI inference service.',
          'Implemented API security and analysis isolation for authenticated users.',
          'Configured OCI and IAM, provisioned infrastructure with Terraform and deployed the backend with CI/CD automation.',
          'Organised and tracked issues and pull requests throughout the team delivery.',
          'Collaborated with Data Science on model reviews and provided technical support for Demo Day preparation.',
        ],
        decisions: [
          {
            title: 'Backend as the public boundary',
            description:
              'The frontend calls Spring Boot. The backend centralises security, business rules, persistence and internal inference integration.',
          },
          {
            title: 'An explicit inference fallback',
            description:
              'If FastAPI fails, times out or returns an invalid response, the backend uses local rules. Responses distinguish this path from an ML model result.',
          },
          {
            title: 'From implementation to deployment',
            description:
              'Delivery connects the application, OCI access, infrastructure and automation. The API was deployed on OCI Compute with HTTPS and Oracle Autonomous Database persistence.',
          },
        ],
        outcome:
          'The documented delivery includes authentication, analysis, individual history and a dashboard. The model was evaluated on synthetic data; results do not demonstrate real savings or equivalent performance on real data. The tariff is an MVP reference.',
        walkthrough: [
          'Open the demo and register or use your own account.',
          'Enter consumption and usage characteristics to request an analysis.',
          'Review the classification, recommendations and cost estimate, then inspect the individual history.',
        ],
      },
    },
  },
}

export const getProjectStory = (repoName: string): ProjectStory | undefined => {
  const key = repoName.toLowerCase()
  return Object.hasOwn(PROJECT_STORIES, key) ? PROJECT_STORIES[key] : undefined
}
