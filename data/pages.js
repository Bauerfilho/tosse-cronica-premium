/* pages.js — manifest de páginas da plataforma */

export const PAGES = [
  // Aula 1 — Tosse Crônica e TB (intro)
  {
    id: 'a1-1',
    aula: 'A1',
    aulaTitulo: 'Tosse crônica e tuberculose',
    ordem: 1,
    slug: 'porta-clinica',
    titulo: 'Quando uma tosse vira porta clínica',
    arquivo: 'pages/a1/porta-clinica.html',
  },
  {
    id: 'a1-2',
    aula: 'A1',
    aulaTitulo: 'Tosse crônica e tuberculose',
    ordem: 2,
    slug: 'classificacao-duracao',
    titulo: 'Classificação pela duração',
    arquivo: 'pages/a1/classificacao-duracao.html',
  },
  {
    id: 'a1-3',
    aula: 'A1',
    aulaTitulo: 'Tosse crônica e tuberculose',
    ordem: 3,
    slug: 'tres-causas-mais-tb',
    titulo: 'Tríade da tosse crônica — e a quarta causa',
    arquivo: 'pages/a1/tres-causas-mais-tb.html',
  },
  {
    id: 'a1-4',
    aula: 'A1',
    aulaTitulo: 'Tosse crônica e tuberculose',
    ordem: 4,
    slug: 'caso-mariana-parte1',
    titulo: 'Mariana — primeiro tempo',
    arquivo: 'pages/a1/caso-mariana-parte1.html',
  },
  {
    id: 'a1-5',
    aula: 'A1',
    aulaTitulo: 'Tosse crônica e tuberculose',
    ordem: 5,
    slug: 'caso-mariana-parte2',
    titulo: 'Mariana — a virada no congresso',
    arquivo: 'pages/a1/caso-mariana-parte2.html',
  },
  {
    id: 'a1-6',
    aula: 'A1',
    aulaTitulo: 'Tosse crônica e tuberculose',
    ordem: 6,
    slug: 'roadmap-tb',
    titulo: 'A tuberculose em quatro pilares',
    arquivo: 'pages/a1/roadmap-tb.html',
  },
  // Aulas A2-A7 são adicionadas aqui conforme processadas pela pipeline
];

export function getPageBySlug(slug) {
  return PAGES.find(p => p.slug === slug);
}

export function getPagesByAula(aula) {
  return PAGES.filter(p => p.aula === aula).sort((a, b) => a.ordem - b.ordem);
}

export function getNeighbors(slug) {
  const page = getPageBySlug(slug);
  if (!page) return { prev: null, next: null };
  const aulaPages = getPagesByAula(page.aula);
  const i = aulaPages.findIndex(p => p.slug === slug);
  return {
    prev: i > 0 ? aulaPages[i - 1] : null,
    next: i < aulaPages.length - 1 ? aulaPages[i + 1] : null,
  };
}
