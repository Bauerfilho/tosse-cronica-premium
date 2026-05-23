/* index.js — registry centralizado de casos clínicos da plataforma */

import { mariana, beatsByPagina as beatsMarianaByPagina, perguntasByPagina as perguntasMarianaByPagina } from './mariana.js';
import { lucita, beatsLucitaByPagina, perguntasLucitaByPagina } from './lucita.js';

export const CASES = { mariana, lucita };

export function getCaseById(id) {
  return CASES[id] || CASES.mariana;
}

export function beatsByCaseAndPagina(caseId, paginaSlug) {
  if (caseId === 'lucita') return beatsLucitaByPagina(paginaSlug);
  return beatsMarianaByPagina(paginaSlug);
}

export function perguntasByCaseAndPagina(caseId, paginaSlug) {
  if (caseId === 'lucita') return perguntasLucitaByPagina(paginaSlug);
  return perguntasMarianaByPagina(paginaSlug);
}
