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
| A2 — Dinâmica e diagnóstico TB | pendente | — | — |
| A3 — Tratamento TB | pendente | — | — |
| A4 — Contactantes e controle | pendente | — | — |
| A5 — Aspergilose | pendente | — | — |
| A6 — Histoplasmose | pendente | — | — |
| A7 — Paracoccidioidomicose | pendente | — | — |

## Hooks pra aulas futuras

- **Adicionar página**: criar `pages/a{N}/{slug}.html` + acrescentar entry em `data/pages.js`. Service worker faz cache no próximo deploy se entrada estiver listada em `PRECACHE_ASSETS` de `sw.js`.
- **Estender caso Mariana**: acrescentar beats em `data/cases/mariana.js` com `aula: 'A2'`/`A3'`/`A4'` + `pagina: '<slug>'`. Componente `case-timeline` renderiza filtrando por `pagina`.
- **Lucita (A4)**: criar `data/cases/lucita.js` no mesmo formato; reaproveitar `case-timeline.js` (ele aceita qualquer caso desde que o adapter inverta `mariana` por parâmetro — atualmente hardcoded em `case-timeline.js`, refatorar em A4 antes de adicionar Lucita).
- **Componentes adicionais previstos**: `comparison-table` (A2: primária × pós-primária), `decision-tree` (A4: contactante chegou na UBS), `drug-grid` (A3: RIPE).

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
- Quiz universal: não populado em A1 (planejado pra A2+)

## Servir local

```bash
cd /Users/bauervieiracesarfilhovieira/Documents/tosse-cronica-premium
python3 -m http.server 8000
open http://localhost:8000
```
