# Relatório de Implementação — A1

## Aula
Tosse Crônica e TB (intro) — porta-de-entrada da plataforma.

## Páginas implementadas (6)

| # | Slug | Estratégia E | Tipos de cards |
|---|---|---|---|
| 1 | porta-clinica | E1 pergunta central | Conceito + Síntese + Recuperação ativa |
| 2 | classificacao-duracao | E5 meta-checklist | Tabela duração + Mecanismo + Alerta + Recuperação ativa |
| 3 | tres-causas-mais-tb | E5 + E8 erro comum | Conceito × 4 + Prova + Alerta + Fluxograma + Recuperação ativa |
| 4 | caso-mariana-parte1 | E3 caso clínico | Timeline + Decisão + Alerta + Pergunta de caso |
| 5 | caso-mariana-parte2 | E4 achado-pegadinha | Timeline + Imagem máscara + Prova + Conceito + Pergunta + Síntese |
| 6 | roadmap-tb | E5 mapa do conhecimento | Frase-mãe destacada + Roadmap × 4 + Recuperação ativa + Síntese |

## Componentes reutilizáveis criados

1. **case-timeline** (`js/components/case-timeline.js` + `css/components/case-timeline.css`)
   - Caso clínico evolutivo com beats narrativos por página
   - Dados em `data/cases/mariana.js`
   - **Hooks A2-A4**: acrescentar beats com `aula` e `pagina` correspondentes
2. **duration-table** (`css/components/duration-table.css` — markup direto em página)
   - Grid 3 colunas (desktop) / 3 cards empilhados (mobile <880px)
3. **interactive-question** (`js/components/interactive-question.js` + `css/components/interactive-question.css`)
   - Botão `<button aria-expanded>` controlado por JS, persistência via localStorage
4. **roadmap-card** (`css/components/roadmap-card.css` — markup direto em página)
   - Grid 2×2 (desktop) / 4 cards empilhados (mobile <720px)

## Esqueleto técnico

- `index.html` (shell único, hash routing)
- `manifest.webmanifest` + `sw.js` (PWA com SKIP_WAITING + update-toast)
- Stack JS modular: `app.js` (boot) → `router.js` (hash routing) → `state.js`+`storage.js` (estado/localStorage) → `interactions.js` (UI) + componentes específicos
- Paleta verde-âmbar infecto via custom properties em `css/theme.css`
- 4 CSS de componentes + 1 CSS específico A1 + base+theme+layout+responsive

## Conformidade Bauer

- Anti-metalinguagem: 20 trechos da transcrição mapeados; metalinguagem reescrita como declarativo; refs externas omitidas
- Frase-mãe preservada literal ("a infecção é muito diferente da doença...")
- Caso Mariana preservado literal nos 3 trechos-âncora ("catarro brancassento com raias de sangue", "vomitou o coffee break em cima da Mariana", "máscara bico de pato")
- Páginas com layouts únicos (não repetidas)
- Cards adaptativos com função pedagógica (sem decoração vazia)
- Acessibilidade: ARIA, tap targets ≥ 44px, `prefers-reduced-motion`, contraste forte
- PWA: SW funcional offline + update-toast + botão install discreto

## Pendências sinalizadas pro Bauer

1. **Avatar Mariana inline em JS**: SVG autoral simples, sem rosto. Caso queira ilustração mais elaborada, invocar `ilustrador-medico-bauer` em iteração futura.
2. **Caso Lucita (A4)**: estrutura do `case-timeline.js` é específica pra `mariana`. Quando A4 entrar, refatorar pra aceitar caso via parâmetro — gap leve já registrado em `AGENTS.md` local.
3. **`assets/favicons/icon-192.png` e `icon-512.png`**: manifest referencia mas só `icon.svg` foi gerado (vetorial). Browsers modernos aceitam SVG no manifest; se quiser PNG raster, gerar em iteração futura.
4. **Quiz universal**: dossiê macro mencionou quiz universal 2-3 perguntas por aula. A1 implementou as duas perguntas internas do caso Mariana + 4 cards de recuperação ativa por página. Se Bauer quer quiz formal separado (acumulando respostas em localStorage), criar componente `quiz.js` em A2.
5. **Cobrança Mariana em A2-A4**: beats acrescentar conforme decisão MICRO §7.2 (Mariana diagnóstico/tratamento/contactantes).

## Próximo passo

**Pronto pra A2** — Dinâmica e Diagnóstico da TB.
