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
| A4 — Contactantes e controle | ✅ implementada | 13 | decision-flow, risk-comparison, .comparison-table--regimens, .card--motivational, treatment-timeline (4 variantes novas), case-timeline (REFATORADO multi-caso), avatar Lucita |
| A5 — Aspergilose (3 formas) | ✅ implementada | 11 | `.card--clinical-case` (modificador leve, cards one-shot HCPA/UFRJ/TMO sem evolução temporal), 10 SVGs autorais (3 esquemas radiológicos + 1 comparativo 3 formas + 1 diagrama tríade + 4 ícones azólicos/equinocandina + 1 esquema galactomanana) |
| A7 — Paracoccidioidomicose | ✅ implementada | 12 | 3 novas variantes `.card--clinical-case` (`juvenil` azul / `adrenal` vermelho / `moriforme` verde), 2 novas variantes `treatment-timeline` (`antifungico-longo` 9-18m + `antifungico-grave` anfo-B IV + switch oral ≥ 24m), 8 SVGs autorais (3 patognomônicos OBRIGATÓRIOS — roda de leme microscopia + asa de morcego radiografia + estomatite moriforme oral + 3 didáticos opcionais — tríade mnemônica + ciclo termodimórfico + adrenais tropismo + 2 ícones farmacológicos — anfo-B IV + Bactrim) |
| A6 — Histoplasmose (AULA BÔNUS) | ✅ implementada | 11 + 1 síntese transversal | **componente NOVO** `interactive-question --exam-breakdown` (variante multi-alternativa A/B/C/D clicáveis com revelação de gabarito + comentário por alternativa); 3 novas variantes `.card--clinical-case` (`caverna-aguda` azul-noturno / `centro-oeste-nodulo` âmbar / `disseminada-hiv-sintetico` vermelho); badge `.badge--bonus` + `.card--bonus-opener` com glow âmbar discreto mantendo paleta; flag `bonus:true` em `data/pages.js` + renderização de badge no menu lateral via router; nova variante `comparison-table --differential` (5 colunas wide com pinning de coluna-eixo para síntese transversal); 5 SVGs autorais (caverna-morcego-cenario, radiografia-histoplasmose-aguda, lesoes-molusco-umbilicacao, triade-cenarios-exposicao, quatro-doencas-modulo4) |
| **SÍNTESE TRANSVERSAL MÓDULO 4** (página final da plataforma) | ✅ implementada | 1 | tabela 4 colunas (TB × Aspergilose × Histoplasmose × Paracoco) × 9 eixos (agente / transmissão / paciente típico / clínica dominante / achado radiológico-âncora / achado microscópico / marcador laboratorial / tratamento / prognóstico) via `comparison-table --differential` + sintese-m4-costura (5 pontos de costura clínica entre as 4 doenças) + `card--motivational` de fechamento autoral |

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
- **Componentes adicionais previstos**: `decision-tree` (A4: contactante chegou na UBS) — A3 implementou versão minimalista inline (`.a3-decision-tree` em `css/pages/a3.css`); A4 entregou `decision-flow` (CSS+JS) responsivo (cards empilhados em mobile, bifurcação espacial em desktop) — promovida a componente reusável.
- **Componentes reusáveis prontos (A4 criou)**:
  - `decision-flow` (fluxograma decisional bifurcado responsivo, com 6 tipos de nó: root/question/branch/treat/monitor/result/action) → A5 (decisão "qual forma de aspergilose"), A6/A7 (decisão por forma de micose) — render via `initDecisionFlows(root)` no router
  - `risk-comparison` (CSS-only, barras horizontais proporcionais com baseline) → comparações epidemiológicas, mortalidade comparada, qualquer hierarquia visual de razões de risco
  - `.comparison-table--regimens` (modificador CSS pra tabela de esquemas terapêuticos com pill colorido + badge de adesão) → A5/A6/A7 (esquemas antifúngicos comparados)
  - `.card--motivational` (modificador CSS, serif, paleta neutra) → qualquer aula com fechamento autoral discreto fora do fluxo médico
  - Avatar Lucita (SVG inline em `case-timeline.js`) — pareado com Mariana (gradient invertido âmbar→verde, gola V uniforme, crachá implícito)
  - **REFATORAÇÃO `case-timeline.js`** (paga dívida técnica de A1): aceita `data-case-id` com default `mariana`, suporta múltiplas instâncias na mesma página (intro A4 = Mariana fecha + Lucita abre lado a lado), avatar registry com 2 entries, aceita `data-case-timeline-pagina` pra override de página quando 2 timelines coexistem
  - **Variantes novas em `treatment-timeline`**: `semanal-12doses` (3HP) + `diaria-9m` (9H) + `diaria-4m` (4R) + `diaria-3m-combinada` (3HR) + `rn-qpp-bcg` (RN sequencial); 3 phase types novos (`semanal`, `latente-diaria`, `qpp`, `bcg-marker`) + 3 legend swatches novos

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
- Anti-metalinguagem grep validado em A2, A3 e A4 (zero hits proibidos); "conforme" e "de acordo com" aparecem apenas em uso técnico válido ("conforme protocolo MS", "conforme A4")
- Service worker incrementado v1→v2 em A2 → v2→v3 em A3 → v3→v4 em A4 (dispara update-toast em quem usou versão anterior)
- Cross-link cards apontam pra slugs futuras (A5 `aspergilose-introducao`); router cai em fallback estilizado de "Página não encontrada" enquanto módulo destino não existe — quando entrar em `pages.js` ativa automaticamente
- A3 introduziu 4 ilustrações didáticas farmacológicas (4 cápsulas R/I/P/E coloridas autorais) + 1 ilustração leve (frasco com urina alaranjada — humor visual sutil preservando autoral) + 1 esquema de neurite óptica (olho com escotoma central + alteração verde-vermelho) + 1 fluxograma sequencial de reintrodução R → I → P + 4 ícones de cápsula piridoxina/gestante/diabético/HIV+
- A4 introduziu 10 ilustrações didáticas: avatar Lucita (SVG inline pareado com Mariana) + ícone PPD aplicação intradérmica + ícone IGRA tubo verde QuantiFERON + ícone janela imunológica (gráfico temporal 0-8 sem) + ícone rifapentina (cápsula rosa-magenta) + esquema RN quimioprofilaxia sequencial (rifampicina 4m → BCG) + ilustração técnica BCG intradérmica deltoide direito + ilustração evolução cicatriz BCG 6-12 sem + ícone HIV-TB co-infecção (bacilo + vírus hexagonal) + ícone TDO supervisão profissional-paciente-cápsula
- Decisão Lucita = contactante DE MARIANA confirmada e implementada: técnica de enfermagem 32a, colega de plantão no setor de emergência, contactante ocupacional. 6 beats em `data/cases/lucita.js` (chegada → triagem → PPD → resultado 12mm → critério alto risco → início 3HP). 2 perguntas em `lucita.perguntas`. Avatar SVG inline pareado com Mariana (gradient invertido)
- Refatoração crítica do `case-timeline.js` paga em A4: agora aceita `data-case-id` com fallback Mariana; suporta múltiplas instâncias na mesma página (página intro tem 2 timelines lado a lado em desktop); aceita `data-case-timeline-pagina` pra override de página quando 2 casos coexistem; A1-A3 continuam funcionando sem modificação (default automático)
- `decision-flow` é componente NOVO crítico: substitui SVG estático por estrutura responsiva (cards verticais em mobile, bifurcação 2D em desktop com bordas conectoras CSS). Estrutura semântica completa (role="note"/"group", aria-label automático extraído do texto). Pronto pra reuso em A5/A6/A7
- A4 página motivacional opcional incluída em `sintese-transicao-modulo-micoses` (decisão Didata): card discreto serif paleta neutra, voz Bauer, conteúdo de fechamento "Uma palavra sobre o caminho" reescrito a partir da mensagem motivacional do professor sem atribuir ao palestrante
- A5 abre Módulo 4 (Micoses Granulomatosas Pulmonares) — primeira aula com instrutor diferente (Marcos, NÃO Speaker A); voz Bauer preservada na superfície, substância clínica integral de Marcos preservada
- A5 NÃO usa Mariana nem Lucita (decisão MACRO §10 reforçada — fio condutor TB encerra em A4); os 3 casos de A5 (HCPA/UFRJ/TMO) são one-shot estáticos sem evolução temporal
- A5 introduziu componente NOVO `.card--clinical-case` (modificador leve em `cards.css`) — 4 seções fixas (História/Achado-chave/Hipótese/Conduta), 3 variantes de cor por `data-case-origin` (hcpa=info azul / ufrj=secondary âmbar / tmo=danger vermelho); SEM avatar/foto/case-timeline porque casos são one-shot; pronto pra reuso em A6/A7 (histoplasmose casos comentados + paracoco casos típicos)
- A5 atualizou cross-link A2→A5 — slug destino alterado de `aspergilose-formas` (não existia) pra `aspergilose-cronica-sinal-menisco-manejo` (página onde está o detalhamento radiológico + IgG)
- A5 adicionou Especificador-densificações pós-IDSA 2016: isavuconazol como 1ª linha alternativa (ESCMID 2017 + SECURE trial Maertens 2016 + FDA 2015), cutoffs galactomanana EORTC/MSGERC 2020 (≥0,5 soro / ≥1,0 BAL), critérios ISHAM 2013 ABPA estruturados formalmente, definições EORTC 2020 (provada/provável/possível), desambiguação 3 sinais "crescente" (lua crescente aspergiloma vs halo precoce invasiva vs air-crescent tardio invasiva), DDx denso de massa intracavitária (TB ativa, aspergiloma, cisto hidático com sinal do nenúfar, abscesso, hematoma, carcinoma, cisto broncogênico), manejo intervencionista hemoptise (broncoscopia rígida, ácido tranexâmico inalado, balão endobrônquico)
- A5 resolveu DIVERGÊNCIA-DIRETRIZ-VERSÃO IgE ABPA: adotado ≥ 500 UI/mL como operacional canônico (Agarwal 2020); ≥ 1000 UI/mL preservado como referência histórica (Rosenberg-Patterson 1977 / ISHAM 2013 oficial em paciente sem corticoide prévio)
- Service worker incrementado v4→v5 em A5 (dispara update-toast em quem usou versão anterior)
- A5 introduziu 10 ilustrações didáticas: aspergilose-3-formas-comparativo (esquema integrador usado em página 1 e 9) + bronquiectasias-centrais-abpa (corte axial com anel e trilho de trem + finger-in-glove) + sinal-lua-crescente-aspergiloma (cavidade com bola móvel + halo aéreo + painel comparativo decúbito) + infiltrado-bilateral-invasiva (nódulos com sinal do halo precoce + air-crescent sign tardio coexistindo) + triade-invasiva-diagrama (radial: febre + dor pleurítica + hemoptise convergindo em "imunossuprimido") + esquema-galactomanana-diagnostico (fluxo parede fúngica → liberação → 3 compartimentos coleta → ELISA + cutoffs) + 4 ícones farmacológicos coerentes com padrão da plataforma (voriconazol azólico azul, isavuconazol azólico estendido violeta com estrela de "atualização", caspofungina equinocandina frasco-ampola IV verde, itraconazol azólico âmbar)
- A6 (aula bônus) fecha o Módulo 4 e a plataforma como um todo. Speaker A volta após A7 (mesma voz de A1-A4). Decisões técnicas A6:
  - **Badge "aula bônus" + glow âmbar discreto**: modificador CSS `.badge--bonus` (paleta âmbar `#FBBF24`) + container `.card--bonus-opener` com box-shadow âmbar leve preservando paleta dominante verde-âmbar da plataforma. NÃO criada paleta alternativa pra aula — coerência visual sobre destaque cromático
  - Flag `bonus:true` adicionada às entries A6 em `data/pages.js` + ao array `AULAS`; router renderiza badge "bônus" sutil no menu lateral via classe `.aula-nav-bonus`
  - **Componente NOVO `interactive-question --exam-breakdown`**: variante multi-alternativa do componente existente; 4 botões A/B/C/D clicáveis com aria-pressed; revelação de comentário por alternativa (verde discreto se gabarito, vermelho-rosa se errada); botão `iq-reveal-all` revela todas simultaneamente; persistência localStorage opcional via state.markRevealed; reuso esperado em qualquer aula futura com casos de prova comentados. CSS + JS dispatcher initClassic/initExamBreakdown preserva legado
  - 3 novas variantes `.card--clinical-case[data-case-origin]`: `caverna-aguda` (tom #6366F1 azul-noturno discreto evocando caverna), `centro-oeste-nodulo` (tom âmbar evocando paisagem Centro-Oeste BR), `disseminada-hiv-sintetico` (tom vermelho-discreto urgência); caso #3 é sintético (Speaker A não traz caso pra forma disseminada — Didata recomendou criar pra completude pedagógica)
  - Nova variante `comparison-table --differential`: 5 colunas wide (980px min-width) com pinning de coluna-eixo (`position: sticky; left: 0`) + classes `.ct-col-tb/-asp/-histo/-paracoco` com tints sutis por doença; criada pra suportar síntese transversal Módulo 4 sem estourar layout
  - Cross-links: A7 → A6 (já existia em `pages/a7/sintese-cura-recidiva-transicao-a6.html` apontando pra `#/histoplasmose-introducao`) + A6 → A2 (`cavitacao-sequelas` na página 4 forma crônica) + A6 → A7 (`acometimento-adrenal-caso-addison` na página 5 paralelo adrenal) + A6 → SM4 (`sintese-modulo-4-comparativa` na página 11 síntese A6)
  - Resoluções DIVERGÊNCIA-DIRETRIZ-VERSÃO (DDV001 do Especificador): duração total da forma grave estruturada em 2 caixas separadas na página 7 — "pulmonar aguda grave ~ 12 SEMANAS" vs "disseminada grave 12 MESES" + profilaxia secundária HIV. Speaker A simplifica como "12 semanas" referindo-se à pulmonar aguda; pra disseminada, leitura literal estaria incompleta
  - Densificações DC001-DC031 do Especificador integradas: doses estruturadas itraconazol (200 mg 3x/dia 3 dias ataque → 200 mg 1-2x/dia manutenção) + anfo B lipossomal (3-5 mg/kg/dia) e desoxicolato (0,7-1,0 mg/kg/dia) + 3 interações CYP3A4 (rifampicina/inibidores de protease/estatinas) + sensibilidade antígeno urinário ~ 95% disseminada vs ~ 30% crônica + HIV-histoplasmose CD4 < 150 + profilaxia primária e secundária CDC/NIH OI 2024 + mediastinite fibrosante 1-3% prognóstico ruim sem tratamento farmacológico eficaz (paralelo síndrome SVC)
  - Hierarquia BR de prova (paracoco > aspergilose > histoplasmose) preservada como nota epidemiológica/empírica do professor sem inventar referência canônica formal; renderizada como visual de 3 medalhas (`.a6-hierarquia-grid`)
  - Página de síntese transversal Módulo 4 (`sintese-modulo-4-comparativa.html`) alocada em `pages/a6/` por proximidade temporal de criação; aula virtual `SM4` adicionada às entries em `data/pages.js` com ordem 1 e arquivo `pages/a6/sintese-modulo-4-comparativa.html`. Costura clínica entre as 4 doenças em 5 pontos (aspergiloma sequela TB / paracoco e histo mimetizam TB / coinfecções / aspergilose em TB imunossuprimido / HIV como fio transversal)
- Service worker incrementado v6→v7 em A6 (dispara update-toast em quem usou A7 v6)

## Servir local

```bash
cd /Users/bauervieiracesarfilhovieira/Documents/tosse-cronica-premium
python3 -m http.server 8000
open http://localhost:8000
```
