import { SECTION_IDS } from '../constants/sectionIds'

export interface NavItem {
  id: string
  label: string
}

export interface Stat {
  value: string
  suffix?: string
  label: string
}

export interface SkillGroup {
  title: string
  items: string[]
  isHighlighted?: boolean
}

export type LinkKind = 'github' | 'site' | 'play'

export interface Project {
  title: string
  tag: string
  description: string
  href: string
  kind: LinkKind
}

export interface FeaturedProject {
  title: string
  technologies: string
  description: string
  demoUrl: string
  repositoryUrl: string
}

export interface ContactInfo {
  whatsappUrl: string
  linkedinUrl: string
  githubUrl: string
  email: string
  resumePath: string
}

export const navItems: NavItem[] = [
  { id: SECTION_IDS.home, label: 'Início' },
  { id: SECTION_IDS.about, label: 'Sobre' },
  { id: SECTION_IDS.projects, label: 'Projetos' },
  { id: SECTION_IDS.contact, label: 'Contato' },
]

export const stats: Stat[] = [
  { value: '7', suffix: '+', label: 'Anos de experiência' },
  { value: '5', suffix: '+', label: 'Projetos' },
  { value: '8', suffix: '+', label: 'Tecnologias' },
  { value: '3', label: 'Idiomas' },
]

export const aboutParagraphs: string[] = [
  'Sou desenvolvedor em formação com trajetória profissional diversificada. Antes de ingressar na área de tecnologia, atuei em RH e faturamento hospitalar, na gestão de restaurante e atualmente no setor financeiro de um laboratório farmacêutico.',
  'Essas experiências me deram visão analítica, capacidade organizacional e habilidade para resolver problemas complexos em ambientes de alta demanda — competências que levo diretamente para o desenvolvimento de software e análise de dados.',
  'Curso Análise e Desenvolvimento de Sistemas no IFSC e tenho foco crescente em dados e Business Intelligence, unindo experiência prática com ferramentas modernas de análise e visualização.',
]

export const skillGroups: SkillGroup[] = [
  { title: 'Dados & BI', items: ['Python', 'Pandas', 'Streamlit', 'Plotly'], isHighlighted: true },
  { title: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'] },
  { title: 'Outros', items: ['Java', 'Git', 'GitHub'] },
]

export const featuredProject: FeaturedProject = {
  title: 'Dashboard de Vendas & BI',
  technologies: 'Python · Pandas · Plotly · Streamlit · ETL',
  description:
    'Dashboard interativo de análise de vendas e lucratividade para restaurante, com KPIs em tempo real, gráficos interativos e filtros dinâmicos. Desenvolvido com Python, Pandas e Plotly — disponível ao vivo.',
  demoUrl: 'https://dashboard-restaurante.streamlit.app/',
  repositoryUrl: 'https://github.com/matheusposada/dashboard-restaurante',
}

export const projects: Project[] = [
  {
    title: 'Jogo da Memória',
    tag: 'JavaScript',
    description: 'Jogo da memória com temática do Corinthians, em JavaScript puro.',
    href: '/memoria.html',
    kind: 'play',
  },
  {
    title: 'Batalha Naval',
    tag: 'Java',
    description: 'Jogo em Java com interface de console aplicando OOP e estruturas de dados.',
    href: 'https://github.com/matheusposada/batalhaNaval',
    kind: 'github',
  },
  {
    title: 'Robocode',
    tag: 'Java',
    description: 'Agentes autônomos com estratégias de movimentação e tomada de decisão.',
    href: 'https://github.com/matheusposada/robocode',
    kind: 'github',
  },
  {
    title: 'Raíz Didática',
    tag: 'HTML · CSS · PHP',
    description: 'E-commerce com carrinho, filtros e integração com APIs de pagamento.',
    href: 'https://raizdidatica.com.br',
    kind: 'site',
  },
]

export const contactInfo: ContactInfo = {
  whatsappUrl: 'https://wa.me/5548988473924',
  linkedinUrl: 'https://www.linkedin.com/in/matheusposada',
  githubUrl: 'https://github.com/matheusposada',
  email: 'matheusposada@gmail.com',
  resumePath: '/CurriculoMatheusPosada.pdf',
}