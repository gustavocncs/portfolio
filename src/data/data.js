export const profile = {
  name: 'Gustavo Conceição',
  role: 'Desenvolvedor Frontend',
  location: 'Brasília, DF',
  initials: 'GC',
  about: [
    'Sou estudante de <strong>Engenharia de Software</strong> e tenho grande paixão por aprendizado contínuo e evolução profissional. Estou sempre em busca de novos desafios que me tirem da zona de conforto e me permitam crescer, tanto tecnicamente quanto pessoalmente.',
    'Tenho interesse constante em me manter atualizado com as tendências e inovações do mundo da tecnologia, buscando compreender não apenas como as ferramentas funcionam, mas como podem ser aplicadas para gerar <strong>soluções eficientes e de impacto</strong>.',
    'Acredito que disciplina, curiosidade e dedicação são fundamentais para construir uma carreira sólida na área de tecnologia, e é com esse mindset que sigo desenvolvendo minhas habilidades.',
  ],
  socials: {
    github:    'https://github.com/gustavocncs',
    linkedin:  'https://www.linkedin.com/in/gustavo-concei%C3%A7%C3%A3o-310ba4248/',
    instagram: 'https://www.instagram.com/gustavocnc_/',
  },
}

export const stats = [
  { num: '6',  label: 'Projetos no portfólio', highlight: true },
  { num: '8+', label: 'Tecnologias dominadas' },
]

export const hardSkills = [
  { name: 'HTML5',        color: '#e34f26', bg: '#fff3ee' },
  { name: 'CSS3',         color: '#1572b6', bg: '#eef3ff' },
  { name: 'JavaScript',   color: '#c9a800', bg: '#fffbee' },
  { name: 'React',        color: '#61dafb', bg: '#e8f9ff' },
  { name: 'TypeScript',   color: '#3178c6', bg: '#eef3ff' },
  { name: 'Git & GitHub', color: '#f05032', bg: '#fff0ee' },
  { name: 'Vite',         color: '#646cff', bg: '#f3eeff' },
  { name: 'Figma',        color: '#f24e1e', bg: '#fff0f5' },
]

export const softSkills = [
  { icon: '💬', name: 'Comunicação',         desc: 'Clareza ao transmitir ideias e facilidade para trabalhar em equipe.' },
  { icon: '🤝', name: 'Trabalho em equipe',  desc: 'Colaborativo, respeitoso e comprometido com os resultados do grupo.' },
  { icon: '📚', name: 'Aprendizado contínuo',desc: 'Busca constante por conhecimento e atualização com as tendências do mercado.' },
  { icon: '🎯', name: 'Foco e disciplina',   desc: 'Dedicação consistente para entregar resultados com qualidade.' },
]

export const projects = [
  {
    name: 'Cinerama',
    desc: 'App de busca de filmes com integração à API do TMDB. Filmes em cartaz, busca em tempo real, página de detalhes com elenco e trailer, e favoritos salvos.',
    emoji: '🎬',
    bg: '#f0e8ff',
    tags: ['React', 'Vite', 'Tailwind', 'React Router', 'TMDB API'],
    github: 'https://github.com/gustavocncs/Cinerama',
    demo: 'https://cinerama-cbai.vercel.app',
  },
  {
    name: 'Clima App',
    desc: 'App de previsão do tempo com busca por cidade e dados em tempo real. Exibe temperatura, umidade, sensação térmica e velocidade do vento.',
    emoji: '🌤️',
    bg: '#e8f4ff',
    tags: ['React', 'Vite', 'OpenWeather API', 'CSS'],
    github: 'https://github.com/gustavocncs/clima-app',
    demo: 'https://clima-app-lovat.vercel.app',
  },
  {
    name: 'Teste de Digitação',
    desc: 'App para testar velocidade de digitação com métricas em tempo real, níveis de dificuldade, timer com alerta visual e registro de melhor marca.',
    emoji: '⌨️',
    bg: '#e8fff4',
    tags: ['React', 'Vite', 'CSS', 'localStorage'],
    github: 'https://github.com/gustavocncs/TesteDigitacao',
    demo: 'https://teste-digita-o.vercel.app',
  },
  {
    name: 'Lista Todo',
    desc: 'App de lista de tarefas com filtros por status, animações de entrada e saída, contador de pendências e persistência no localStorage.',
    emoji: '✅',
    bg: '#fff8e8',
    tags: ['React', 'Vite', 'Framer Motion', 'localStorage'],
    github: 'https://github.com/gustavocncs/ListaTodo',
    demo: 'https://lista-todo-six.vercel.app',
  },
  {
    name: 'Clone do Spotify',
    desc: 'Recriação da interface do Spotify com player funcional, playlists, controle de volume e barra de progresso clicável.',
    emoji: '🎵',
    bg: '#e8fff0',
    tags: ['React', 'CSS Modules', 'Vite', 'Hooks'],
    github: 'https://github.com/gustavocncs',
    demo: null,
  },
  {
    name: 'Landing Page — Básico&Co',
    desc: 'Landing page de loja de roupas casual com tema dark, carrossel de produtos, newsletter e layout 100% responsivo.',
    emoji: '🛍️',
    bg: '#fff3e8',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
    github: 'https://github.com/gustavocncs',
    demo: null,
  },
]
