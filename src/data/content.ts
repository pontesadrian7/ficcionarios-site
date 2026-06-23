/**
 * Ficcionarios Podcast — conteúdo central da landing page.
 * Toda a copy vive aqui para manter os componentes limpos e a edição simples.
 */

export const site = {
  name: 'Ficcionarios',
  fullName: 'Ficcionarios Podcast',
  tagline: 'Ficção dos sonhos em realidade.',
  youtube: 'https://www.youtube.com/@ficcionariospodcast',
  instagram: 'https://www.instagram.com/ficcionarios.pc/',
  instagramHandle: '@ficcionarios.pc',
  linkedin: 'https://www.linkedin.com/company/ficcionariosbr',
  linktree: 'https://linktr.ee/FICCIONARIOS',
} as const

export const nav = {
  links: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Convidados', href: '#convidados' },
    { label: 'Episódios', href: '#episodios' },
  ],
  cta: { label: 'Assistir Podcast', href: 'https://www.youtube.com/@ficcionariospodcast' },
} as const

export const hero = {
  eyebrow: 'Ação · Negócios · Conexão',
  badge: 'Podcast de empreendedorismo',
  headlineLead: 'Seja',
  headlineAccent: 'Ficcionário',
  body:
    'O agente transformador que molda o futuro dos negócios através da estratégia, do desenvolvimento pessoal e do legado. Empreendedorismo e execução na veia — a ficção dos sonhos em realidade.',
  primary: { label: 'Assistir Podcast', href: 'https://www.youtube.com/@ficcionariospodcast' },
  secondary: { label: 'Ser um convidado', href: '#valor' },
} as const

export const sobre = {
  eyebrow: 'O Manifesto',
  scriptLine: 'Alma, coração e poesia.',
  lines: [
    { text: 'Ficção dos', accent: false },
    { text: 'sonhos', accent: true },
    { text: 'em', accent: false },
    { text: 'realidade.', accent: true },
  ],
  paragraph:
    'Ficcionarios é um podcast sobre empreendedorismo e execução na veia. Conversas profundas com quem construiu algo do zero — ou do quase fim — para extrair as ferramentas, as estratégias e as conexões humanas que transformam sonhos em legado.',
  pillars: [
    { title: 'Empreendedorismo', text: 'Histórias reais de quem cria, arrisca e constrói.' },
    { title: 'Execução na veia', text: 'Do plano à prática — estratégia que vira resultado.' },
    { title: 'Sonhos em realidade', text: 'A ficção que se materializa em negócios e legado.' },
    { title: 'Alma, coração e poesia', text: 'Desenvolvimento pessoal por trás de cada conquista.' },
  ],
  stats: [
    { value: '180+', label: 'Episódios publicados' },
    { value: '21+', label: 'Convidados no estúdio' },
    { value: '1.5k+', label: 'Comunidade engajada' },
    { value: '19H', label: 'Episódios ao vivo' },
  ],
} as const

export const featured = {
  eyebrow: 'Episódio em destaque',
  title: 'Do zero ao legado — a jornada de quem construiu',
  body:
    'Acompanhe a jornada de quem construiu algo do zero ou do quase fim. Descubra ferramentas para a sua prosperidade nos negócios e desenvolvimento pessoal.',
  videoId: 'E5hlEIB4W1Q',
  cta: { label: 'Assistir Episódio', href: 'https://www.youtube.com/watch?v=E5hlEIB4W1Q' },
} as const

export type Schedule = {
  name: string
  role: string
  photo: string
}

export const programacao = {
  eyebrow: 'Especial',
  title: 'Agrishow 2026',
  intro:
    'Direto da maior feira de tecnologia agrícola da América Latina — quatro convidados que constroem o futuro do agro e dos negócios.',
  time: '19H',
  items: [
    {
      name: 'Fábio Tenório',
      role: 'CEO FIC Capital S.A.',
      photo: '/agenda/fabio-tenorio.jpg',
    },
    {
      name: 'Thiago Moura',
      role: 'Fundador AgroeBio · Eng. Agrônomo',
      photo: '/agenda/thiago-moura.jpg',
    },
    {
      name: 'Luana Martins',
      role: 'Fundadora Lumni Imóveis',
      photo: '/agenda/luana-martins.jpg',
    },
    {
      name: 'Ricardo Magalhães',
      role: 'Investidor',
      photo: '/agenda/ricardo-magalhaes.jpg',
    },
  ] as Schedule[],
} as const

export type Guest = { name: string; handle: string; instagram: string }

export const convidados = {
  eyebrow: 'Mentes brilhantes',
  title: 'Quem já passou por aqui',
  intro:
    'Empreendedores, especialistas e construtores que dividiram a mesa e abriram o jogo sobre estratégia, negócios e vida.',
  seeAll: { label: 'Ver todos', href: 'https://www.youtube.com/@ficcionariospodcast' },
  items: [
    { name: 'Albertoni Cavalcante', handle: '@albertoneofc', instagram: 'https://www.instagram.com/albertoneofc/' },
    { name: 'Chileno Gomez', handle: '@chilenogomez_', instagram: 'https://www.instagram.com/chilenogomez_/' },
    { name: 'Daniel Nejaim', handle: '@danielnejaim', instagram: 'https://www.instagram.com/danielnejaim/' },
    { name: 'Daniel Scott', handle: '@odanielscott', instagram: 'https://www.instagram.com/odanielscott/' },
    { name: 'Elton Veras', handle: '@elton_verass', instagram: 'https://www.instagram.com/elton_verass/' },
    { name: 'Emmanuel Alencar', handle: '@maneldez', instagram: 'https://www.instagram.com/maneldez/' },
    { name: 'Enio Almeida', handle: '@enioalmeida', instagram: 'https://www.instagram.com/enioalmeida/' },
    { name: 'Erasmo Cirqueira', handle: '@erasmocirqueira', instagram: 'https://www.instagram.com/erasmocirqueira/' },
    { name: 'Guilherme Agostineto', handle: '@guilhermeagostineto', instagram: 'https://www.instagram.com/guilhermeagostineto/' },
    { name: 'Kleber Santos', handle: '@prof.kleber.santos', instagram: 'https://www.instagram.com/prof.kleber.santos/' },
    { name: 'Marcos Bernardo', handle: '@marcosmathb', instagram: 'https://www.instagram.com/marcosmathb/' },
    { name: 'Matheus De Nadai', handle: '@matheusdenadai', instagram: 'https://www.instagram.com/matheusdenadai/' },
    { name: 'Nezio Monteiro', handle: '@neziomonteiro', instagram: 'https://www.instagram.com/neziomonteiro/' },
    { name: 'Pedro Rehn', handle: '@pedrorehn88', instagram: 'https://www.instagram.com/pedrorehn88/' },
    { name: 'Ramon Saldanha', handle: '@ramonsaldanhaa', instagram: 'https://www.instagram.com/ramonsaldanhaa/' },
    { name: 'Ricardo Assmann', handle: '@ricardo.allbiom', instagram: 'https://www.instagram.com/ricardo.allbiom/' },
    { name: 'Ricardo Villar', handle: '@ricardo.villar.advogado', instagram: 'https://www.instagram.com/ricardo.villar.advogado/' },
    { name: 'Suen Tominaga', handle: '@suentominaga', instagram: 'https://www.instagram.com/suentominaga/' },
    { name: 'Victor Reis', handle: '@vreiss', instagram: 'https://www.instagram.com/vreiss/' },
    { name: 'Wagner Santos', handle: '@eusouwagnersantos', instagram: 'https://www.instagram.com/eusouwagnersantos/' },
    { name: 'Witold Ramasauskas', handle: '@witold_113', instagram: 'https://www.instagram.com/witold_113/' },
  ] as Guest[],
} as const

export const valor = {
  eyebrow: 'Faça parte',
  title: 'Gere valor real para os seus negócios',
  body:
    'Aprenda com quem já trilhou o caminho do sucesso. Assista aos nossos episódios e descubra insights práticos para o seu desenvolvimento pessoal e profissional.',
  primary: { label: 'Assistir Podcast', href: 'https://www.youtube.com/@ficcionariospodcast' },
  secondary: { label: 'Ser um convidado', href: 'https://www.instagram.com/ficcionarios.pc/' },
} as const

export type Episode = { n: number; videoId: string; title: string; description: string }

export const acervo = {
  eyebrow: 'O Acervo',
  title: 'Episódios anteriores',
  intro: 'Toda a jornada Ficcionarios, do primeiro episódio ao mais recente.',
  cta: { label: 'Inscreva-se no canal', href: 'https://www.youtube.com/@ficcionariospodcast?sub_confirmation=1' },
  episodes: [
    {
      n: 1,
      videoId: 'mtMo1oi1MQs',
      title: 'Ficcionarios — Episódio 1',
      description: 'Primeiro episódio do podcast trazendo discussões profundas sobre negócios e estratégias.',
    },
    {
      n: 2,
      videoId: '7WZP8Ochx9I',
      title: 'Ficcionarios — Episódio 2',
      description: 'Liderança, visão de futuro e inovação no mercado atual.',
    },
    {
      n: 3,
      videoId: 'iKzPc41I6Lg',
      title: 'Ficcionarios — Episódio 3',
      description: 'Táticas sobre modelagem de negócios e as conexões humanas necessárias para o sucesso.',
    },
    {
      n: 4,
      videoId: '1js6wtq0X_k',
      title: 'Ficcionarios — Episódio 4',
      description: 'Insights ricos de sobrevivência empresarial e transformação de processos.',
    },
  ] as Episode[],
} as const

export const momentos = {
  eyebrow: 'Por trás das câmeras',
  title: 'Momentos exclusivos',
  intro:
    'Os bastidores das conversas — risadas, tensões e as melhores tiradas que ficaram fora do corte principal.',
  cta: { label: 'Ver no Instagram', href: 'https://www.instagram.com/ficcionarios.pc/' },
} as const

export const footer = {
  tagline:
    'Empreendedorismo, execução na veia e a ficção dos sonhos em realidade. Alma, coração e poesia.',
  navLabel: 'Navegação',
  socialLabel: 'Siga-nos',
  copyright: '© 2026 Ficcionarios. Todos os direitos reservados.',
  legal: [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos e Condições', href: '#' },
  ],
} as const

/** Build a YouTube thumbnail URL from a video id. hqdefault exists for every public video. */
export const ytThumb = (id: string, quality: 'hq' | 'maxres' | 'mq' = 'hq') =>
  `https://i.ytimg.com/vi/${id}/${quality}default.jpg`

export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`
