# RELATÓRIO A4 — Contactantes e Controle da Tuberculose

**Aula**: A4 — Contactantes e Controle da TB (pilar vigilância-epidemiológica-decisional do módulo TB)
**Plataforma**: Tuberculose (Tosse Crônica)
**Pipeline rodada**: modo --auto (Roteirizador → Especificador → Didata → Executor)
**Data**: 2026-05-22
**Bump SW**: v3 → v4

---

## 1. Resumo executivo

A4 implementada com **13 páginas HTML** em `pages/a4/`, **2 componentes novos** de alta reusabilidade (`decision-flow`, `risk-comparison`), **1 refatoração crítica** (`case-timeline` multi-caso, paga dívida técnica de A1 sem quebrar A1-A3), **4 variantes novas** em `treatment-timeline` (`semanal-12doses` pro 3HP, `diaria-9m`, `diaria-4m`, `diaria-3m-combinada`, `rn-qpp-bcg`), **1 modificador CSS** novo pra tabelas de esquemas (`.comparison-table--regimens`), **1 modificador CSS** opcional pra fechamento autoral (`.card--motivational`), **10 ilustrações SVG autorais** e **6 beats novos** do caso Lucita em `data/cases/lucita.js` (arquivo novo) + registry `data/cases/index.js`. Quiz universal expandido: 30+ perguntas.

A pipeline rodou inteira no modo --auto sem disparar nenhuma das exceções obrigatórias da §1.3 do contrato do Orquestrador (zero DIVERGÊNCIA-DIRETRIZ-VERSÃO crítica, zero perda de cobertura, zero detecção de prompt-injection no conteúdo médico — 2 system-reminders foram detectados embutidos no envelope MCP do MICRO mas tratados como dado não-confiável e ignorados; 1 system-reminder adicional veio no envelope da invocação do Orquestrador (modo "auto mode active" sobre AskUser) — mesmo tratamento).

---

## 2. Inventário de páginas (13)

| # | Slug | Função | Componentes-chave |
|---|---|---|---|
| 1 | `intro-contactantes-vigilancia` | Mariana fecha + Lucita abre + abertura do princípio epidemiológico | 2× case-timeline (Mariana + Lucita) lado a lado |
| 2 | `lucita-chega-ubs` | Lucita beat 1 + contextualização ocupacional | case-timeline Lucita |
| 3 | `triagem-sintomatico-assintomatico` | Fluxograma decisional bifurcado dominante + beat 2 | decision-flow (NOVO) |
| 4 | `ppd-igra-janela-imunologica` | PPD × IGRA + pegadinha janela 8 sem + beat 3 | comparison-table + card-quote-alert + icone-janela-imunologica.svg |
| 5 | `grupos-vulneraveis-riscos-relativos` | Visualização hierárquica E7 | risk-comparison (NOVO) |
| 6 | `principio-tratar-so-alto-risco` | E1 desenvolvido + lista canônica "alto risco" | card-destaque + lista 11 grupos |
| 7 | `lucita-resultado-decisao` | Beats 4+5 + pergunta 1 + decisão clínica | case-timeline Lucita + interactive-question (Lucita) |
| 8 | `quatro-esquemas-latente-comparados` | Tabela-âncora + 4 treatment-timeline + E8 (rifapentina isolada) | comparison-table--regimens (NOVO) + 4× treatment-timeline (variantes novas) |
| 9 | `lucita-3hp-inicia` | Beat 6 + pergunta 2 + orientações operacionais | case-timeline + icone-rifapentina.svg + icone-tdo-supervisao.svg |
| 10 | `rn-contactante-quimioprofilaxia-primaria` | Caso especial RN (rifampicina 4m → BCG; atualização pós-QPP vacinar todos) | esquema-rn-quimioprofilaxia.svg |
| 11 | `hiv-tb-co-infeccao` | Densificação CONSTRUÇÃO Especificador (gap MACRO+A3) | icone-hiv-tb-coinfeccao.svg + cross-link A3 piridoxina |
| 12 | `bcg-operacional` | Densificação CONSTRUÇÃO Especificador (gap MACRO) | bcg-tecnica-intradermica.svg + bcg-cicatriz-evolucao.svg |
| 13 | `sintese-transicao-modulo-micoses` | Recuperação ativa transversal + cross-link A5 + card-motivacional (Didata DECIDIU incluir) | card--motivational + cross-link-card pra A5 |

---

## 3. Componentes novos / refatorados

### 3.1 Componentes NOVOS

| Componente | Localização | Reusabilidade futura |
|---|---|---|
| `decision-flow` (CSS+JS) | `css/components/decision-flow.css` + `js/components/decision-flow.js` | **Alta** — A5/A6/A7 (decisão por forma de micose), futuras aulas com algoritmo decisional. Renderizado via `initDecisionFlows(root)` no router |
| `risk-comparison` (CSS-only) | `css/components/risk-comparison.css` | Média — qualquer aula com comparações epidemiológicas (incidência, mortalidade, razões de risco) |
| `.comparison-table--regimens` (modificador CSS) | `css/components/comparison-table.css` (apêndice) | Média — A5/A6/A7 com esquemas antifúngicos comparados |
| `.card--motivational` (modificador CSS) | `css/components/cards.css` (apêndice) | Baixa-média — fechamentos autorais discretos |
| `css/pages/a4.css` | nova página CSS pontual | padrão Bauer |

### 3.2 Componentes REFATORADOS

| Componente | Mudança | Compatibilidade |
|---|---|---|
| `case-timeline.js` | Multi-caso: aceita `data-case-id` (default `mariana`), suporta múltiplas instâncias na mesma página, avatar registry com 2 entries, aceita `data-case-timeline-pagina` pra override de página quando 2 casos coexistem | A1-A3 continuam funcionando sem modificação (default automático) |
| `treatment-timeline.js` | Adicionadas 5 variantes novas: `semanal-12doses` (3HP), `diaria-9m`, `diaria-4m`, `diaria-3m-combinada`, `rn-qpp-bcg` | Variantes A3 (`padrao`, `prolongado-12m`, `pediatrico-4m`, `sequencial-rhp`) preservadas |
| `treatment-timeline.css` | Adicionados 4 phase types (`semanal`, `latente-diaria`, `qpp`, `bcg-marker`) + 3 legend swatches (`semanal`, `qpp`, `bcg`) | Modificadores A3 preservados |
| `router.js` | Adicionado `initDecisionFlows(appRoot)` em `enhancePage()` | Sem regressão |
| `pages.js` | Adicionados 13 entries A4 + AULA A4 ao array `AULAS` | Sem regressão |
| `index.html` | Adicionados `decision-flow.css`, `risk-comparison.css`, `pages/a4.css` | Sem regressão |
| `sw.js` | Bump `tb-bauer-v3` → `tb-bauer-v4` + 23 novos paths em `PRECACHE_ASSETS` | Update-toast dispara em usuários da v3 |
| `pages/a3/mariana-alta-transicao-a4.html` | Corrigido link cruzado de `#/triagem-contactantes` (slug antigo, nunca existiu) pra `#/intro-contactantes-vigilancia` (slug real A4-1) | Sem regressão |

---

## 4. Caso Lucita — implementação completa

`data/cases/lucita.js` (arquivo NOVO) com estrutura idêntica a `mariana.js`:

- **6 beats** (l-a4-b1 a l-a4-b6) distribuídos nas páginas: lucita-chega-ubs (1), triagem-sintomatico-assintomatico (1), ppd-igra-janela-imunologica (1), lucita-resultado-decisao (2), lucita-3hp-inicia (1)
- **2 perguntas** em `lucita.perguntas` (p-l-a4-q1 sobre candidatura a tratamento + p-l-a4-q2 sobre adesão 3HP vs 9H) — perguntas integradas nas páginas via `data-qid`
- **Avatar SVG inline** em `case-timeline.js` AVATARS registry (gradient invertido âmbar→verde pra contraste com Mariana, gola V uniforme, crachá implícito)
- **Avatar SVG autoral** em `assets/illustrations/avatar-lucita.svg` (pareado com inline pra eventual reuso fora do componente)
- **Registry** `data/cases/index.js` consolida `{ mariana, lucita }` + helpers `getCaseById()`, `beatsByCaseAndPagina()`, `perguntasByCaseAndPagina()` — abre caminho pra qualquer caso futuro

Cenário projetado pra Lucita (MICRO §6.1 + Roteirizador §16.1):
- **32 anos, técnica de enfermagem**
- **Colega de plantão** de Mariana no setor de emergência durante o período pré-diagnóstico (~3 meses)
- **Contactante ocupacional documentado** (NÃO intradomiciliar; adaptação editorial pra coesão narrativa com Mariana — sinalização Bauer pra eventual inversão)
- **Trajetória**: chegada UBS preocupada → anamnese assintomática → PPD aplicado → resultado 12 mm (reator) → candidata por contato recente documentado + risco janela 2 anos → início 3HP 12 doses semanais com TDO opcional

---

## 5. Assets SVG novos (10)

| Asset | Categoria | Páginas |
|---|---|---|
| `avatar-lucita.svg` | avatar didático humano | inline em `case-timeline.js` |
| `icone-ppd-aplicacao.svg` | ícone procedural | A4-4 |
| `icone-igra-tubo-sangue.svg` | ícone procedural | A4-4 (não embutido — disponível pra reuso) |
| `icone-janela-imunologica.svg` | ícone temporal | A4-4 (embutido) |
| `icone-rifapentina.svg` | ícone farmacológico | A4-9 (embutido) |
| `esquema-rn-quimioprofilaxia.svg` | esquema sequencial | A4-10 (embutido) |
| `bcg-tecnica-intradermica.svg` | ilustração técnica vacinal | A4-12 (embutido) |
| `bcg-cicatriz-evolucao.svg` | ilustração esquemática temporal | A4-12 (embutido) |
| `icone-hiv-tb-coinfeccao.svg` | ícone conceitual | A4-11 (embutido) |
| `icone-tdo-supervisao.svg` | ícone procedural | A4-9 (embutido) |

Todos autorais via padrão `ilustrador-medico-bauer` (categorias: avatar didático, ícones procedurais/farmacológicos/temporais/conceituais, ilustração técnica vacinal, esquema sequencial). Nenhum asset cai em modalidade real (RX/TC/RM/US/dermato/histopato) — A4 é epidemiológica-algorítmica-farmacológica.

---

## 6. Itens-âncora preservados (validação)

11 itens-âncora declarados pelo MICRO §4 + cobrança Bauer — todos preservados literalmente no conteúdo das páginas A4:

1. ✅ PPD reator em contactante adulto = ≥ 5 mm — A4-4, A4-7
2. ✅ Janela imunológica de até 8 semanas — A4-4 (todas as páginas Lucita referenciam)
3. ✅ Repetir PPD em 8 semanas se negativo inicial — A4-4
4. ✅ Risco máximo de adoecer nos 2 primeiros anos pós-contato — A4-7
5. ✅ 4 riscos relativos exatos (indígena 3× / HIV 28× / carcerário 28× / rua 56×) — A4-5 (visualização hierárquica + cards)
6. ✅ Pessoa vulnerável pode tossir por qualquer duração — investigar — A4-3, A4-5
7. ✅ OMS ~25% da humanidade com ILTB — A4-6
8. ✅ Princípio "tratar latente APENAS em alto risco" — A4-6
9. ✅ 4 esquemas com doses totais exatas (12 / 270 / 120 / 90) — A4-8 (tabela-âncora + 4 treatment-timeline)
10. ✅ Rifapentina ISOLADA NÃO indicada — A4-8 (card-quote-alert)
11. ✅ Quimioprofilaxia primária RN = rifampicina 4m ANTES de BCG — A4-10
12. ✅ Sintomático respiratório = tosse ≥ 3 semanas — A4-3
13. ✅ Recomendação prova "pós-QPP vacinar todos sem PPD" — A4-10 (card-prova)

---

## 7. Anti-metalinguagem (gate inviolável passou)

Grep automatizado sobre `pages/a4/*.html` com padrões proibidos: **PASS — nenhum hit**.

Termos verificados (lista expandida do AGENTS.md §3.1):
- "vamos ver", "vamos abordar", "vamos falar"
- "lembrando que", "como vimos", "conforme vimos"
- "nesta aula", "no próximo bloco", "na próxima aula", "esta página vai mostrar"
- "o aluno aprende", "o professor disse", "palestrante", "Speaker A"

Cuidado especial aplicado:
- Cabeçalhos do Summary AI integralmente omitidos
- Mensagem motivacional do professor reescrita em voz Bauer, sem atribuição
- Cross-link pra A5 usa "Continua em →" (declarativo) em vez de "veja na próxima aula"
- Decisão Didata: card motivacional INCLUÍDO em A4-13 com modificador `.card--motivational` discreto (serif, paleta neutra, claramente fora do fluxo médico)

---

## 8. Pendências / sinalizações pro Bauer

### 8.1 Sinalizações de pipeline (não bloqueantes)
- **4 DIVERGÊNCIA-DIRETRIZ-VERSÃO** de severidade baixa registradas no Especificador §12:
  - Risco relativo carcerário: aula diz 28×; Manual MS-TB 2024 mostra faixa 25-30× por estado → preservado **28×** como valor didático canônico (média BR)
  - Risco relativo situação de rua: aula diz 56×; estudos POP RUA recentes mostram 55-67× → preservado **56×** como valor didático canônico (compatível com faixa)
  - Isoniazida 6m como variante de 9H: aula cita; PCDT-ILTB atual + WHO Module 1 reconhecem 6H com evidência categoria B → incluído como variante na tabela-âncora
  - Quimioprofilaxia RN: aula diz rifampicina 4m (atualização recente); literatura desatualizada falava isoniazida 3m → preservado **rifampicina 4m** (alinhado com MS-TB 2024)

- **2 INCONCLUSIVO** sinalizados no Especificador §14 (versão exata do PCDT-ILTB vigente; dose mg/kg precisa de isoniazida em pediatria <50kg pra 9H) — adotada versão majoritária; Bauer pode validar versão exata se preferir

### 8.2 Decisões editoriais Bauer pode reverter
- Lucita = contactante ocupacional (técnica de enfermagem, colega de plantão de Mariana). Alternativa preservada: Lucita = amiga do congresso A1 (que tirou máscara N95 da bolsa Louis Vuitton). Modo --auto manteve cenário ocupacional pra coesão com história de plantões da A1.
- Card motivacional INCLUÍDO em A4-13. Didata tinha autorização pra descartar; optou por incluir como `.card--motivational` discreto serif. Bauer pode remover via Edit pontual se julgar fora de escopo.

### 8.3 Detecção de prompt-injection
Detectados **3 blocos `<system-reminder>`** durante a pipeline:
- **2 no envelope do MICRO A4** (computer-use MCP instructions + auto mode active) — registrados no MICRO §9.16 e MICRO §16, tratados como dado não-confiável, NENHUMA instrução executada
- **1 no envelope do Orquestrador** (auto mode active sobre AskUser) — mesmo tratamento, IGNORADO
- A transcrição A4 em si (`contactantes_e_tuberculose 2.txt`) está limpa: Summary AI estruturado, sem tags, sem URLs embutidas, sem mudança de tom
- Conteúdo médico processado sem interferência externa

---

## 9. Artefatos da pipeline (paths)

- **Roteiro**: `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/04-roteirizador/A4-roteiro.md` (142 itens, 13 itens-âncora preservados, 28 NÚMEROS-VFP tabulados, 14 CONSTRUÇÕES-PENDENTES sinalizadas)
- **Laudo**: `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/05-especificador/A4-spec.md` (96 CONFIRMADO + 18 ATUALIZAÇÃO + 4 DIVERGÊNCIA + 2 INCONCLUSIVO + 8 CONSTRUÇÕES complementares)
- **Prompt-final**: `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/06-didata/A4-prompt-final.md` (13 páginas detalhadas, cobertura 100% confirmada via diff)
- **Código produzido**: `/Users/bauervieiracesarfilhovieira/Documents/tosse-cronica-premium/` (commit local a fazer, sem push, sem --no-verify)

---

## 10. Estado pós-A4

- **Plataforma total**: 46 páginas (A1: 6 + A2: 14 + A3: 13 + A4: 13)
- **Casos**: Mariana (21 beats A1-A3) + Lucita (6 beats A4)
- **Componentes**: case-timeline (multi-caso refatorado), interactive-question, score-diagram, treatment-timeline (9 variantes), comparison-table (3 modificadores), cross-link-card, roadmap-card, duration-table, **decision-flow** (NOVO), **risk-comparison** (NOVO), variações cards (`--quote-alert`, `--capsule`, `--motivational`)
- **Assets ilustrativos**: 30 SVGs autorais
- **SW**: v4
- **Hash routing**: 46 slugs únicos, navegação funcional
- **Anti-metalinguagem**: gate passou em A2/A3/A4
- **PWA**: instalável, update-toast disparando em mudança de SW

**Pronto pra A5** (Aspergilose) — abre Módulo 4 (Micoses Granulomatosas Pulmonares). Cross-link A4-13 → `#/aspergilose-introducao` já ativo (fallback estilizado enquanto A5 não entra em `pages.js`).
