# AGENTS.md — Tosse Crônica e Tuberculose (Plataforma Bauer)

Este arquivo herda integralmente os contratos:
- `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/AGENTS.md` (identidade operacional)
- `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/AGENTS-PLATAFORMAS.md` (contrato técnico)

## Assinatura visual

- **Especialidade**: infectologia / pneumologia
- **Primária**: `#34D399` (verde infecto)
- **Secundária**: `#FBBF24` (âmbar)
- **Glow**: verde-âmbar
- **Base**: `#0E2A2F` (petróleo profundo)

## Estado atual

| Aula | Status | Páginas | Componentes novos |
|---|---|---|---|
| A1 — Tosse crônica e TB (intro) | ✅ implementada | 6 | case-timeline, duration-table, interactive-question, roadmap-card |
| A2 — Dinâmica e diagnóstico TB | ✅ implementada | 14 | comparison-table, score-diagram, cross-link-card |
| A3 — Tratamento TB | ✅ implementada | 13 | treatment-timeline, .comparison-table--drugs, .card--quote-alert, .card--capsule |
| A4 — Contactantes e controle | pendente | — | — |
| A5 — Aspergilose | pendente | — | — |
| A6 — Histoplasmose | pendente | — | — |
| A7 — Paracoccidioidomicose | pendente | — | — |

## Hooks pra aulas futuras

- **Adicionar página**: criar `pages/a{N}/{slug}.html` + acrescentar entry em `data/pages.js`. Service worker faz cache no próximo deploy se entrada estiver listada em `PRECACHE_ASSETS` de `sw.js`. Incrementar `CACHE_NAME` em `sw.js` (tb-bauer-vN → tb-bauer-vN+1) pra disparar update-toast em usuários da versão anterior.
- **Adicionar aula ao menu lateral**: acrescentar entry no array `AULAS` exportado por `data/pages.js`. Router re-renderiza nav lateral por loadPage destacando aula atual (`is-current`).
- **Estender caso Mariana**: acrescentar beats em `data/cases/mariana.js` com `aula: 'A3'`/`A4'` + `pagina: '<slug>'` + `ordem` sequencial a partir de 16. Componente `case-timeline` renderiza filtrando por `pagina`.
- **Lucita (A4)**: criar `data/cases/lucita.js` no mesmo formato; reaproveitar `case-timeline.js` (ele aceita qualquer caso desde que o adapter inverta `mariana` por parâmetro — atualmente hardcoded em `case-timeline.js`, refatorar em A4 antes de adicionar Lucita).
- **Componentes reusáveis prontos (A2 criou)**:
  - `comparison-table` (2-5 colunas, responsiva) → A3 (RIPE × adversos com modificador `.comparison-table--drugs`), A4 (esquemas latente), A5 (3 formas), A6 (3 formas), A7 (aguda × crônica)
  - `score-diagram` (escore interativo configurável via `SCORE_CONFIGS` em `score-diagram.js`) → adicionar config nova: CURB-65, ABPA Bedside Index, qualquer escore com 3-7 componentes pontuáveis + 3 zonas de interpretação
  - `cross-link-card` → todas as aulas que cruzem com outros módulos (link aponta pra slug futura; router cai em fallback estilizado se módulo destino não estiver pronto)
- **Componentes reusáveis prontos (A3 criou)**:
  - `treatment-timeline` (barra temporal com 4 variantes: `padrao` 6m / `prolongado-12m` / `pediatrico-4m` / `sequencial-rhp`) → A4 (esquemas TB latente: rifapentina+isoniazida 12 doses, isoniazida 9m, rifampicina 4m), A5/A6/A7 (esquemas antifúngicos 6-18m), qualquer aula com esquemas terapêuticos temporais. Renderizado via `initTreatmentTimelines(root)` no router.
  - `.comparison-table--drugs` (modificador CSS) → qualquer tabela farmacológica com ícone-cápsula + destaque visual da coluna "conduta"
  - `.card--quote-alert` (modificador CSS) → qualquer aula com citação literal preservada que precise virar alerta clínico
  - `.card--capsule` (modificador CSS) → cápsulas informativas compactas com ícone à esquerda + texto à direita (3 grupos pra piridoxina, etc.)
- **Componentes adicionais previstos**: `decision-tree` (A4: contactante chegou na UBS) — A3 implementou versão minimalista inline (`.a3-decision-tree` em `css/pages/a3.css`); pode ser promovida a componente reusável em A4.

## Convenções aplicadas

- HTML+CSS+Vanilla JS+PWA (sem framework)
- Hash routing (`#/<slug>`)
- localStorage com namespace `tb-bauer:`
- Service worker com cache estratégico + update-toast obrigatório
- Botão PWA install no header (oculto até `beforeinstallprompt`)
- Acessibilidade: ARIA explícito, `<button aria-expanded>` em vez de `<details>`, tap targets ≥ 44px, `prefers-reduced-motion` respeitado
- Anti-metalinguagem aplicada: 20 trechos de metalinguagem da transcrição A1 omitidos ou reescritos

## Decisões técnicas registradas

- Avatar Mariana: SVG inline em `case-timeline.js` (autoral, sem foto)
- "Máscara bico de pato": SVG em `assets/illustrations/mascara-bico-de-pato.svg`
- Ícones do roadmap: SVG inline na própria página (4 pilares com glifos lineares stroke 1.75)
- Quiz universal: ativado em A2 (28 perguntas, 2 por página)
- Mariana ganhou 6 beats novos em A2 (ordens 10-15) cobrindo TB pós-primária + PCR/Xpert + isolamento por aerossol + transição A3; estrutura preservada por extensão
- Mariana ganhou 6 beats novos em A3 (ordens 16-21) cobrindo início RIPE na UBS + fase intensiva + urina alaranjada (humor seco preservado) + baciloscopia mensal negativando + alta por cura + gancho narrativo pra A4 (Lucita como contactante de Mariana — colega de plantão); 2 perguntas novas em `mariana.perguntas`
- Anti-metalinguagem grep validado em A2 e A3 (zero hits proibidos); "conforme" e "de acordo com" aparecem apenas em uso técnico válido ("conforme protocolo MS", "conforme A4")
- Service worker incrementado v1→v2 em A2 → v2→v3 em A3 (dispara update-toast em quem usou versão anterior)
- Cross-link cards apontam pra slugs futuras (A4 `triagem-contactantes`, A5 `aspergilose-formas`); router cai em fallback estilizado de "Página não encontrada" enquanto módulo destino não existe — quando entrar em `pages.js` ativa automaticamente
- A3 introduziu 4 ilustrações didáticas farmacológicas (4 cápsulas R/I/P/E coloridas autorais) + 1 ilustração leve (frasco com urina alaranjada — humor visual sutil preservando autoral) + 1 esquema de neurite óptica (olho com escotoma central + alteração verde-vermelho) + 1 fluxograma sequencial de reintrodução R → I → P + 4 ícones de cápsula piridoxina/gestante/diabético/HIV+
- Decisão Lucita = contactante de Mariana (não caso paralelo): consolidada via MICRO A3 §6.4 e confirmada no beat 21 (cross-link narrativo pra A4)

## Servir local

```bash
cd /Users/bauervieiracesarfilhovieira/Documents/tosse-cronica-premium
python3 -m http.server 8000
open http://localhost:8000
```
