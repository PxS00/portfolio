import type { Language } from '../../../shared/types/language'
import { ENERGIAI_HACKATHON_CREDENTIAL_URL } from './credentials'

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
  screenshots?: Array<{
    src: string
    width: number
    height: number
    caption: Record<Language, string>
  }>
  links: Array<{ url: string; label: Record<Language, string> }>
  copy: Record<Language, StoryCopy>
}

const energiRepo = 'https://github.com/PxS00/energi-ai-g9-br-team-09/blob/develop'
const lavandaRepo = 'https://github.com/PxS00/lavanda-flow/blob/main'

export const PROJECT_STORIES: Record<string, ProjectStory> = {
  'alura-corporate-agent': {
    name: 'Assistente de conhecimento com RAG',
    category: {
      'pt-BR': 'IA aplicada · Challenge ONE',
      'en-GB': 'Applied AI · ONE Challenge',
    },
    stack: ['Python', 'RAG', 'Gemini API', 'ChromaDB', 'Streamlit', 'pytest', 'Docker', 'OCI'],
    screenshots: [
      {
        src: '/images/projects/rag-oci-1.jpg',
        width: 1672,
        height: 971,
        caption: {
          'pt-BR':
            'Captura de execução na OCI: consulta à base corporativa fictícia com resposta e fonte.',
          'en-GB':
            'OCI execution capture: a query against fictional corporate documents with an answer and source.',
        },
      },
      {
        src: '/images/projects/rag-oci-2.jpg',
        width: 1557,
        height: 947,
        caption: {
          'pt-BR':
            'Captura de execução na OCI: fallback quando a base não contém a informação solicitada.',
          'en-GB':
            'OCI execution capture: fallback when the requested information is absent from the knowledge base.',
        },
      },
    ],
    links: [
      {
        url: 'https://github.com/PxS00/alura-corporate-agent/blob/main/README.md',
        label: {
          'pt-BR': 'Como executar o projeto',
          'en-GB': 'Project setup instructions',
        },
      },
      {
        url: 'https://github.com/PxS00/alura-corporate-agent/tree/main/docs/images',
        label: {
          'pt-BR': 'Documentação e evidências na OCI',
          'en-GB': 'OCI documentation and evidence',
        },
      },
    ],
    copy: {
      'pt-BR': {
        summary:
          'Assistente em Python que consulta documentos corporativos fictícios com RAG, busca semântica e respostas acompanhadas de fontes.',
        context:
          'Informações internas ficam dispersas em documentos de diferentes formatos. O projeto explora como consultar essa base em linguagem natural e indicar quando não há evidência suficiente para responder.',
        role: 'Desenvolvimento do assistente para o Challenge AluraAgente — ONE IA for Tech, da ingestão documental à interface e implantação na OCI.',
        contributions: [
          'Ingestão, normalização e divisão de documentos em trechos com sobreposição e metadados de origem.',
          'Geração de embeddings com Gemini e persistência no ChromaDB para busca semântica.',
          'Integração do LLM com contexto recuperado, referências às fontes e fallback para ausência de contexto relevante.',
          'Interface Streamlit, testes com pytest, containerização Docker e implantação na OCI Compute.',
        ],
        decisions: [
          {
            title: 'Recuperação antes da geração',
            description:
              'A busca filtra os trechos por distância semântica e seleciona o resultado mais relevante antes de chamar o LLM.',
          },
          {
            title: 'Resposta rastreável',
            description:
              'A interface apresenta referências aos documentos utilizados. Quando não há contexto relevante, retorna uma mensagem explícita de ausência de informação.',
          },
          {
            title: 'Implantação reproduzível',
            description:
              'Docker empacota a aplicação e o índice vetorial é persistido no ChromaDB. O README documenta a execução local e a implantação na OCI Compute.',
          },
        ],
        outcome:
          'Aplicação acadêmica concluída, com pipeline RAG, interface Streamlit, testes automatizados e evidências de implantação na OCI. A demonstração utiliza documentos fictícios e permite verificar respostas com fontes e o fallback quando a informação está ausente.',
        walkthrough: [
          'Executar o projeto conforme o README e indexar a base documental fictícia.',
          'Perguntar sobre uma política presente nos documentos e consultar a fonte da resposta.',
          'Perguntar sobre algo ausente na base e verificar o fallback.',
        ],
      },
      'en-GB': {
        summary:
          'A Python assistant that queries fictional corporate documents using RAG, semantic search and answers accompanied by source references.',
        context:
          'Internal information is spread across documents in different formats. This project explores natural-language queries with an explicit response when the evidence is insufficient.',
        role: 'Developed the assistant for the AluraAgente — ONE IA for Tech Challenge, from document ingestion to the interface and OCI deployment.',
        contributions: [
          'Document ingestion, normalisation and overlapping chunks with source metadata.',
          'Gemini embeddings persisted in ChromaDB for semantic search.',
          'LLM integration with retrieved context, source references and fallback for insufficient relevant context.',
          'Streamlit interface, pytest tests, Docker packaging and OCI Compute deployment.',
        ],
        decisions: [
          {
            title: 'Retrieve before generating',
            description:
              'Semantic distance filters retrieved chunks and selects the strongest match before calling the LLM.',
          },
          {
            title: 'Traceable answers',
            description:
              'The interface references the source documents and explicitly reports when no relevant context is available.',
          },
          {
            title: 'Reproducible deployment',
            description:
              'Docker packages the application and ChromaDB persists its vector index. The README documents local setup and OCI Compute deployment.',
          },
        ],
        outcome:
          'Completed academic application with a RAG pipeline, Streamlit interface, automated tests and OCI deployment evidence. The demonstration uses fictional documents to show sourced answers and fallback when information is absent.',
        walkthrough: [
          'Run the project following the README and index the fictional documents.',
          'Ask about a policy present in the documents and inspect its source.',
          'Ask about information absent from the base and check the fallback.',
        ],
      },
    },
  },
  'ceu-de-lavanda-catalog': {
    name: 'Catálogo Céu de Lavanda',
    category: { 'pt-BR': 'Freelance · Catálogo digital', 'en-GB': 'Freelance · Digital catalogue' },
    stack: ['Next.js', 'React', 'TypeScript', 'Cloudflare Pages'],
    screenshots: [
      {
        src: '/images/projects/ceu-de-lavanda.jpg',
        width: 1390,
        height: 1089,
        caption: {
          'pt-BR':
            'Seleção da página inicial com fotos e preços de quatro perfumes, na versão do PR #1 executada localmente.',
          'en-GB':
            'Homepage selection with photos and prices for four perfumes, from PR #1 running locally.',
        },
      },
      {
        src: '/images/projects/ceu-de-lavanda-collection.jpg',
        width: 1390,
        height: 1089,
        caption: {
          'pt-BR':
            'Busca por Acquaré com fotografia, disponibilidade e preços por volume, na prévia local do PR #1.',
          'en-GB':
            'Search for Acquaré with its photo, availability and volume pricing, in the local preview of PR #1.',
        },
      },
      {
        src: '/images/projects/ceu-de-lavanda-product.jpg',
        width: 1390,
        height: 1089,
        caption: {
          'pt-BR':
            'Detalhe do Acquaré com fotografia, descrição, preços de 50 e 100 ml e pirâmide olfativa, na prévia local do PR #1.',
          'en-GB':
            'Acquaré detail with its photo, description, 50 and 100 ml pricing and fragrance pyramid, in the local preview of PR #1.',
        },
      },
    ],
    links: [
      {
        url: 'https://ceu-de-lavanda.pages.dev/',
        label: { 'pt-BR': 'Abrir catálogo', 'en-GB': 'Open catalogue' },
      },
      {
        url: 'https://github.com/PxS00/ceu-de-lavanda-catalog/pull/1',
        label: { 'pt-BR': 'Atualização em revisão', 'en-GB': 'Update under review' },
      },
    ],
    copy: {
      'pt-BR': {
        summary:
          'Catálogo digital da Céu de Lavanda para apresentar fragrâncias, explorar categorias e consultar produtos em celulares, tablets e computadores.',
        context:
          'A marca precisava de um espaço próprio para apresentar perfumes, body splash e perfumes capilares, preservando sua identidade visual e facilitando a descoberta da coleção.',
        role: 'Desenvolvimento freelance do catálogo digital, com organização da coleção, navegação e adaptação da interface à identidade da Céu de Lavanda.',
        contributions: [
          'Organização dos produtos por categoria, com páginas individuais para cada fragrância.',
          'Busca por nome com suporte a acentos, filtros por inicial, ordenação alfabética e paginação.',
          'Interface responsiva que preserva o logo e a paleta da marca, com tipografia editorial e detalhes botânicos.',
          'Navegação por teclado com foco visível e respeito à preferência por redução de movimento.',
        ],
        decisions: [
          {
            title: 'Descoberta da coleção',
            description:
              'Categorias, busca e filtros permitem encontrar uma fragrância de diferentes formas, sem exigir que a pessoa percorra a coleção inteira.',
          },
          {
            title: 'Identidade e acessibilidade',
            description:
              'O visual acompanha a marca enquanto mantém foco visível e redução de movimento para apoiar diferentes formas de navegação.',
          },
          {
            title: 'Informação comercial confirmada',
            description:
              'Fotografias, descrições, preços e disponibilidade são incorporados conforme aprovação da empresa. Informações pendentes são sinalizadas nas páginas.',
          },
        ],
        outcome:
          'Catálogo publicado no Cloudflare Pages, com ampliação em revisão no PR #1 para 112 perfumes, 20 fotografias e preços por volume. As capturas mostram essa versão executada localmente. O cadastro da coleção continua em andamento; o site apresenta os produtos e não realiza finalização de compras online.',
        walkthrough: [
          'Abrir o catálogo e explorar as categorias de fragrâncias.',
          'Pesquisar um nome ou filtrar a coleção pela inicial.',
          'Abrir um produto para consultar as informações disponíveis e identificar o que ainda aguarda confirmação.',
        ],
      },
      'en-GB': {
        summary:
          'A digital catalogue for Céu de Lavanda, presenting fragrances, categories and individual products across phones, tablets and computers.',
        context:
          'The brand needed its own space to present perfumes, body splashes and hair perfumes while preserving its visual identity and making the collection easier to discover.',
        role: 'Freelance development of the digital catalogue, organising the collection, navigation and interface around the Céu de Lavanda identity.',
        contributions: [
          'Organised products into categories with an individual page for each fragrance.',
          'Implemented accent-aware name search, initial-letter filters, alphabetical sorting and pagination.',
          'Built a responsive interface preserving the brand logo and palette, with editorial typography and botanical details.',
          'Provided visible keyboard focus and support for reduced motion preferences.',
        ],
        decisions: [
          {
            title: 'Discovering the collection',
            description:
              'Categories, search and filters offer different ways to find a fragrance without browsing the entire collection.',
          },
          {
            title: 'Identity and accessibility',
            description:
              'The interface follows the brand while preserving visible keyboard focus and reduced motion support.',
          },
          {
            title: 'Confirmed commercial information',
            description:
              'Photos, descriptions, prices and availability are added as the company approves them. Pending information is identified on product pages.',
          },
        ],
        outcome:
          'Published on Cloudflare Pages, with an expansion to 112 perfumes, 20 photographs and volume pricing under review in PR #1. Screenshots show that version running locally. Collection data entry is ongoing; the site presents products and does not provide online checkout.',
        walkthrough: [
          'Open the catalogue and explore the fragrance categories.',
          'Search for a name or filter the collection by initial letter.',
          'Open a product to review the available information and see what is awaiting confirmation.',
        ],
      },
    },
  },
  'lavanda-flow': {
    name: 'Lavanda Flow',
    category: {
      'pt-BR': 'Gestão de estoque e produção',
      'en-GB': 'Inventory and production management',
    },
    stack: ['Java', 'Spring Boot', 'Spring Modulith', 'PostgreSQL', 'Angular', 'Docker'],
    screenshots: [
      {
        src: '/images/projects/lavanda-flow-inventory.jpg',
        width: 1280,
        height: 720,
        caption: {
          'pt-BR':
            'Operações de estoque na versão 0.8.1, executada localmente com item e lote fictícios de demonstração.',
          'en-GB':
            'Inventory operations in version 0.8.1, running locally with a fictional demonstration item and batch.',
        },
      },
      {
        src: '/images/projects/lavanda-flow-item.jpg',
        width: 1280,
        height: 720,
        caption: {
          'pt-BR': 'Detalhes de um item fictício no ambiente local de demonstração.',
          'en-GB': 'Details of a fictional item in the local demonstration environment.',
        },
      },
      {
        src: '/images/projects/lavanda-flow-dashboard.jpg',
        width: 1280,
        height: 720,
        caption: {
          'pt-BR':
            'Painel operacional no ambiente local de demonstração, com indicadores calculados pelo sistema.',
          'en-GB':
            'Operational dashboard in the local demonstration environment, with indicators calculated by the system.',
        },
      },
      {
        src: '/images/projects/lavanda-flow-batches.jpg',
        width: 1404,
        height: 1000,
        caption: {
          'pt-BR':
            'Lote e histórico auditável após entrada de 2.500 mL e saída de 100 mL por FEFO; dados fictícios.',
          'en-GB':
            'Batch and audit history after a 2,500 mL receipt and a 100 mL FEFO withdrawal; fictional data.',
        },
      },
      {
        src: '/images/projects/lavanda-flow-formulas.jpg',
        width: 1404,
        height: 1000,
        caption: {
          'pt-BR':
            'Fórmula fictícia cadastrada no ambiente local para mostrar o módulo de produção; não representa uma receita comercial.',
          'en-GB':
            'Fictional formula registered locally to show the production module; it does not represent a commercial recipe.',
        },
      },
    ],
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
    screenshots: [
      {
        src: '/images/projects/energiai-result.jpg',
        width: 1404,
        height: 1000,
        caption: {
          'pt-BR':
            'Resultado calculado pelo modelo preditivo V2 no ambiente local, com consumo e hábitos fictícios de demonstração.',
          'en-GB':
            'Result calculated by the V2 predictive model locally, using fictional demonstration consumption and habits.',
        },
      },
      {
        src: '/images/projects/energiai-analysis.jpg',
        width: 1404,
        height: 1000,
        caption: {
          'pt-BR':
            'Questionário de análise energética executado localmente, com seleção do tipo de imóvel.',
          'en-GB':
            'Energy analysis questionnaire running locally, showing property type selection.',
        },
      },
      {
        src: '/images/projects/energiai-dashboard.jpg',
        width: 1404,
        height: 1000,
        caption: {
          'pt-BR':
            'Painel local com indicadores agregados de três análises fictícias, persistidas no banco H2.',
          'en-GB':
            'Local dashboard with aggregated indicators from three fictional analyses persisted in H2.',
        },
      },
      {
        src: '/images/projects/energiai-history.jpg',
        width: 1390,
        height: 990,
        caption: {
          'pt-BR':
            'Histórico autenticado com três análises de demonstração registradas pelo fluxo real da aplicação local.',
          'en-GB':
            'Authenticated history showing three demonstration analyses recorded through the local application’s actual workflow.',
        },
      },
      {
        src: '/images/projects/energiai.jpg',
        width: 1905,
        height: 888,
        caption: {
          'pt-BR': 'Página pública de apresentação do EnergiAI.',
          'en-GB': 'Public EnergiAI introduction page.',
        },
      },
      {
        src: '/images/projects/energiai-architecture.jpg',
        width: 1390,
        height: 990,
        caption: {
          'pt-BR':
            'Apresentação pública do modelo preditivo e do fluxo entre frontend, Spring Boot e FastAPI.',
          'en-GB':
            'Public explanation of the predictive model and the flow between the frontend, Spring Boot and FastAPI.',
        },
      },
    ],
    links: [
      {
        url: 'https://github.com/No-Country-simulation/g9-br-team-09/pull/122#pullrequestreview-4821791044',
        label: {
          'pt-BR': 'Minha revisão de dados e modelagem',
          'en-GB': 'My data and modelling review',
        },
      },
      {
        url: 'https://energiai.vercel.app',
        label: { 'pt-BR': 'Abrir apresentação', 'en-GB': 'Open introduction' },
      },
      {
        url: `${energiRepo}/docs/delivery/demo-script.md`,
        label: { 'pt-BR': 'Apresentação do Demo Day', 'en-GB': 'Demo Day presentation' },
      },
      {
        url: ENERGIAI_HACKATHON_CREDENTIAL_URL,
        label: { 'pt-BR': 'Certificado do hackathon', 'en-GB': 'Hackathon certificate' },
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
          'Revisão dos dados e do pipeline de modelagem: identifiquei falhas na normalização e recomendei validações de valores nulos, tipos inválidos, NaN e infinito, com testes de regressão.',
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
          'A entrega documentada inclui autenticação, análise, histórico individual e dashboard. O banco OCI da demonstração pública foi desativado; as capturas do fluxo autenticado foram feitas localmente com H2 e o modelo V2, usando dados fictícios. O modelo foi avaliado em dados sintéticos; seus resultados não comprovam economia real nem desempenho equivalente em dados reais. A tarifa é uma referência do MVP.',
        walkthrough: [
          'Executar frontend, backend com o profile local (H2) e FastAPI com o modelo V2, seguindo o README; criar uma conta de demonstração local.',
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
          'Reviewed data and the modelling pipeline, identifying normalisation risks and recommending validation and regression tests for nulls, invalid types, NaN and infinity.',
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
          'The documented delivery includes authentication, analysis, individual history and a dashboard. The public demo’s OCI database has been deactivated; authenticated workflow screenshots were captured locally with H2 and the V2 model, using fictional data. The model was evaluated on synthetic data; results do not demonstrate real savings or equivalent performance on real data. The tariff is an MVP reference.',
        walkthrough: [
          'Run the frontend, backend with the local H2 profile and FastAPI with the V2 model following the README, then register a local demonstration account.',
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
