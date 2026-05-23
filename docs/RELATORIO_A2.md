# Relatório Executor — A2 Dinâmica e Diagnóstico da Tuberculose

Implementação técnica da pipeline Bauer A2 sobre `tosse-cronica-premium/` partindo de A1 já implementada (commit `fb5d72e`).

## Artefatos produzidos

**Páginas HTML** (`pages/a2/`, 14 arquivos):
- `dinamica-introducao.html` — 76 pares HTML balanceados
- `tb-primaria-crianca.html` — 94 pares
- `tb-pos-primaria-adulto.html` — 91 pares (com case-timeline beats 10-11)
- `comparativo-primaria-pos-primaria.html` — 83 pares (1ª aparição comparison-table--2col)
- `metodos-pcr-genexpert.html` — 85 pares (case-timeline beats 12-13)
- `metodos-baciloscopia-cultura.html` — 92 pares
- `metodos-lflam-lavado-gastrico.html` — 93 pares (1ª aparição card--atualizacao)
- `comparativo-metodos-diagnosticos.html` — 120 pares (comparison-table--5col)
- `escore-child-pediatrico.html` — 94 pares (1ª aparição score-diagram interativo)
- `cavitacao-sequelas.html` — 76 pares (1ª aparição cross-link-card pra A5)
- `extrapulmonar-panorama.html` — 109 pares (panorama-grid 8 formas)
- `tb-pleural.html` — 79 pares
- `tb-meningea.html` — 133 pares (E7 ddx-mini-table 8 aspectos)
- `tb-miliar-bcg-sintese.html` — 135 pares (case-timeline beats 14-15)

**Componentes novos** (`css/components/` + `js/components/`):
- `comparison-table.css` — tabela responsiva 2-5 colunas
- `score-diagram.css` + `score-diagram.js` — diagrama interativo de escore configurável (`SCORE_CONFIGS` pré-populado com CHILD; extensível pra CURB-65/ABPA Bedside Index/etc.)
- `cross-link-card.css` — card discreto pra link cruzado entre módulos

**CSS de página** (`css/pages/a2.css`):
- Classes específicas: `illu-rx`, `illu-schema`, `ddx-mini-table`, `panorama-grid`, `panorama-card`, `card--atualizacao`

**Data layer atualizado**:
- `data/pages.js` — +14 entries A2 + novo export `AULAS`
- `data/cases/mariana.js` — +6 beats (ordens 10-15) + 1 pergunta nova (p-a2-q1); estrutura preservada

**Infraestrutura**:
- `sw.js` — cache incrementado v1→v2 + 14 páginas + 3 CSS + 1 JS + 8 SVGs adicionados ao `PRECACHE_ASSETS`
- `index.html` — registrados 3 CSS componentes novos + `css/pages/a2.css`
- `js/router.js` — contador de páginas dinâmico via `getPagesByAula().length`; `renderAulaNav` re-renderiza por loadPage com destaque da aula corrente; integra `initScoreDiagrams` em `enhancePage`; `renderNotFound` mais didático pra cross-link cair em fallback útil
- `js/app.js` — comentário pra ciclo de re-render do nav
- `css/layout.css` — estilos pra `aula-nav-section` (multi-aula com destaque na corrente)
- `AGENTS.md` — atualizado estado A2 + hooks pra A3-A7

**Assets ilustrativos** (`assets/illustrations/`, 8 SVGs autorais):
- `dinamica-infeccao-tb.svg` — esquema alvéolo → granuloma → cavidade
- `radiografia-adenopatia-unilateral.svg` — TB primária pediátrica
- `radiografia-adenopatia-bilateral.svg` — DDx sarcoidose
- `radiografia-cavitacao-apical.svg` — TB pós-primária adulta
- `radiografia-aspergiloma.svg` — sinal do menisco / lua crescente
- `esquema-cavitacao-pulmonar.svg` — fisiopatologia em 3 etapas
- `liquido-pleural-tb.svg` — frasco com 4 parâmetros + ADA
- `score-child-componentes.svg` — 5 letras CHILD em destaque

Todos os SVGs com `role="img"` + `aria-label` descritivo; vocabulário visual coerente com `mascara-bico-de-pato.svg` (gradientes sutis com tokens da paleta, stroke 1.4-2.5, fundo glass).

## Commits locais (7 sequenciais, sem push)

1. `5269db9` — Componentes A2: comparison-table, score-diagram, cross-link-card
2. `769d0b4` — Data layer + router multi-aula (14 páginas A2 em pages.js, Mariana estendida, sw v2, nav dinâmico)
3. `373c3b7` — 8 SVGs autorais didáticos para A2
4. `15bbbb0` — Páginas A2 bloco 1 (P1-P4): dinâmica, primária, pós-primária, comparativo
5. `3ef6ef5` — Páginas A2 bloco 2 (P5-P8): métodos diagnósticos
6. `bbd6be9` — Páginas A2 bloco 3 (P9-P11): CHILD interativo, cavitação+aspergiloma, panorama
7. `d7d81e3` — Páginas A2 bloco 4 (P12-P14): pleural, meníngea, miliar/BCG/síntese

## Validações finais executadas

| Validação | Resultado |
|---|---|
| Anti-metalinguagem grep proibida (`conforme demonstrado`, `de acordo com a aula`, `o professor menciona`, `no próximo bloco`, `como vimos anteriormente`) | ✅ Zero hits |
| Uso técnico de "conforme" / "de acordo com" | ✅ Apenas 2 ocorrências em contexto válido ("conforme A3", "conforme protocolo MS") |
| Balanceamento HTML por arquivo (`<tag>` × `</tag>`) | ✅ 14/14 páginas com pares balanceados |
| TODOs/placeholders/lorem ipsum proibidos | ✅ Zero ocorrências de "TODO", "FIXME", "lorem ipsum", "substitua aqui", "como IA", "gerado por IA" |
| Variabilidade visual ≥ ⌈14/4⌉ = 4 componentes distintos | ✅ 7 distintos: case-timeline, interactive-question, comparison-table (2 variantes), score-diagram, cross-link-card, panorama-grid, ddx-mini-table |
| Cobertura NÚMERO-VFP do laudo Especificador | ✅ 27/27 itens cobertos (14 com nota técnica de versão didática × oficial) |
| Cobertura REGRA-DE-OURO do laudo | ✅ 13/13 transformadas em cards-prova / E4 / E7 |
| Cobertura CONSTRUÇÕES COMPLEMENTARES (6 blocos) | ✅ TB miliar em P14; extrapulmonares em P11; HIV-TB básico distribuído em P5/P7/P11; aspergiloma com cross-link em P10; DDx adenopatia bilateral em P2; atualização LF-LAM em P7 |
| Quiz universal (2 perguntas por página) | ✅ 28 perguntas implementadas |
| Mariana preservada estruturalmente | ✅ 6 beats novos com ordens 10-15 + 1 pergunta nova; nenhuma reescrita |
| ARIA em interativos | ✅ score-diagram com `role="group"` + `aria-live="polite"` na pontuação total; chips com `aria-pressed`; cross-link-card com `aria-label` |
| Service worker incrementado | ✅ tb-bauer-v1 → tb-bauer-v2 (dispara update-toast em quem usou A1) |
| Prompt-injection detectada nos artefatos prévios | ❌ Nenhuma |

## Decisões técnicas tomadas durante implementação

1. **Versão CHILD didática como núcleo do score-diagram**: opção (a) do Especificador — manter 5/10 mm + 30-39/≥40 (mnemônico fácil) com nota técnica lateral (card--atualizacao) explicando que MS-TB 2024 técnica considera tempo desde BCG nos cortes TST. Reflete a realidade do estudante de medicina.
2. **Cross-link-card pra A5 como link normal (não placeholder)**: opção (c) do MICRO — router fallback estilizado de "Página não encontrada" é suficientemente claro; quando A5 entrar em `pages.js`, link ativa automaticamente sem retorno pra A2.
3. **CHILD pediátrico sem caso clínico (sem criança hipotética)**: opção (b) do MICRO — score-diagram interativo é forte por si só; adicionar criança hipotética criaria personagem que não retorna em outras aulas.
4. **Cache v1→v2 em vez de v1.1**: incremento maior pra garantir que update-toast dispare em quem instalou A1 como PWA.
5. **Nav lateral re-renderiza por loadPage**: solução pra menu multi-aula destacar "is-current" da aula da página atual; alternativa seria CSS-only com classes na raiz, mas re-render é mais limpo e cabe na pegada PWA leve.
6. **Comparison-table com scroll horizontal em mobile** (`min-width: 920px` em variante 5col): preferência sobre virar cards empilhados — preserva legibilidade comparativa em telas grandes e dá experiência aceitável de swipe horizontal em mobile.

## Pendências sinalizadas (não bloqueantes)

- **Cross-link A5**: A5 ainda não implementada; quando entrar com slug `aspergilose-formas` em `pages.js`, link do cavitacao-sequelas.html ativa automaticamente. Se Didata A5 escolher slug diferente, adicionar alias no router OU atualizar `href` pontual em A2.
- **PWA install + update-toast**: validados em A1, herdados em A2 sem mudança. Score-diagram NÃO usa localStorage pra persistir pontuação simulada (decisão: simulação é exploratória, não progresso real do aluno).
- **Acompanhamento de tratamento (baciloscopia mensal)**: A2 só anuncia; conteúdo operacional fica em A3.
- **BCG técnica/contraindicações/RN contactante**: A2 cobre função protetora; A4 cobre operacional.

## Próximo passo

Pronto pra A3.
