/* state.js — estado global volátil + persistência fina */

import * as storage from './storage.js';

const state = {
  currentSlug: null,
  currentAula: null,
  visitedPages: storage.getSet('visited'),
  revealedAnswers: storage.getSet('revealed'),
};

export function setCurrent(slug, aula) {
  state.currentSlug = slug;
  state.currentAula = aula;
  storage.set('lastSlug', slug);
  markVisited(slug);
}

export function getCurrent() {
  return { slug: state.currentSlug, aula: state.currentAula };
}

export function markVisited(slug) {
  state.visitedPages.add(slug);
  storage.addToSet('visited', slug);
}

export function isVisited(slug) {
  return state.visitedPages.has(slug);
}

export function markRevealed(qid) {
  state.revealedAnswers.add(qid);
  storage.addToSet('revealed', qid);
}

export function isRevealed(qid) {
  return state.revealedAnswers.has(qid);
}

export function getLastSlug() {
  return storage.get('lastSlug', null);
}
