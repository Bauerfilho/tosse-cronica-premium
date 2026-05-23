# RELATÓRIO A7 — Paracoccidioidomicose

**Aula**: A7 — Paracoccidioidomicose (segunda aula do Módulo 4 · micoses granulomatosas)
**Plataforma**: Tosse Crônica e Tuberculose
**Pipeline rodada**: modo --auto (Roteirizador → Especificador → Didata → Executor)
**Data**: 2026-05-23
**Bump SW**: v5 → v6
**Posição na série**: 6ª aula implementada (após A1, A2, A3, A4, A5 — A6 Histoplasmose pendente)

---

## 1. Resumo executivo

A7 implementada com **12 páginas HTML** em `pages/a7/`, **zero componente estrutural novo**, **3 variantes CSS leves** em `.card--clinical-case` (`juvenil` / `adrenal` / `moriforme`), **2 variantes novas** em `treatment-timeline` (`antifungico-longo` + `antifungico-grave-iv` + `antifungico-grave-vo`), **8 SVGs autorais** (3 patognomônicos obrigatórios + 3 didáticos opcionais + 2 ícones farmacológicos) e **atualização completa de roteamento, navegação e service worker**.

Filosofia pedagógica entregue: **3 patognomônicos visualmente distintos como tríade mnemônica** (microscopia/radiografia/clínica oral) + **matriz comparativa formal de 2 formas clínicas** + **DDx denso de 7 doenças × 5 eixos** + **tratamento escalonado por gravidade segundo Consenso Brasileiro 2017** + **reconhecimento clínico em 3 casos âncoras one-shot** (juvenil/adrenal/moriforme) com variantes cromáticas próprias.

Pipeline rodou inteira no modo --auto sem disparar exceções obrigatórias. Truncamento da transcrição original resolvido por completion CONSTRUÇÃO do Especificador via Consenso Brasileiro PCM SBI 2017 + Pan-Brazilian Network 2017 (densificou *P. lutzii*, gp43, critérios formais de cura/gravidade, NeuroPCM, HIV-PCM, pós-menopausa). Detecções de prompt-injection no envelope MCP do MICRO e do Orquestrador (system-reminders embutidos sobre data, modo auto, computer-use, bio-research) tratadas como dado não-confiável e ignoradas conforme §11 do AGENTS.md raiz.

---

## 2. Inventário de páginas (12)

| # | Slug | Função pedagógica | Componentes-chave |
|---|---|---|---|
| 1 | `paracoco-introducao` | Abertura E1 + retorno consciente A5 + cardápio de prova | card-destaque + card-conceito + card-prova + cross-link-card (retorno A5) + a7-meta-checklist |
| 2 | `agente-ciclo-termodimorfico` | Fungo termodimórfico + *P. lutzii* + paciente típico + alerta sorologia gp43 falso-negativo | card-conceito + card-capsule + card-alerta + SVG `esquema-termodimorfico-pcm.svg` |
| 3 | `duas-formas-comparativo` | Matriz comparativa formal aguda/juvenil × crônica/adulta (E7) + estradiol protetor + janela pós-menopausa | comparison-table--2col + card-prova + card-quote-alert + card-alerta |
| 4 | `forma-aguda-juvenil-crianca5a` | Caso clínico juvenil one-shot (E3) + DDx cirúrgico LV | `.card--clinical-case[data-case-origin="juvenil"]` + comparison-table--2col + card-capsule + icone-itraconazol |
| 5 | `forma-cronica-adulto-moriforme` | Caso clínico moriforme one-shot (E3) + estomatite + DDx pulmonar-cutâneo-mucoso | `.card--clinical-case[data-case-origin="moriforme"]` + SVG `estomatite-moriforme-oral.svg` |
| 6 | `patognomonico-roda-de-leme` | E4 + E6 microscopia KOH + sequência diagnóstica densificada (microscopia/cultura/histopato/sorologia/PCR) | SVG `roda-de-leme-microscopia.svg` + comparison-table + card-capsule gp43 + card-quote-alert |
| 7 | `patognomonico-asa-de-morcego` | E4 + E6 radiologia + desambiguação cavitação atípica (armadilha) | SVG `asa-de-morcego-radiografia.svg` + comparison-table + card-alerta |
| 8 | `acometimento-adrenal-caso-addison` | Caso clínico adrenal one-shot (E3) + Addison-like + panorama laboratorial denso | `.card--clinical-case[data-case-origin="adrenal"]` + SVG `adrenais-tropismo-pcm.svg` + comparison-table--2col + card-quote-alert |
| 9 | `diagnostico-laboratorial-sorologico` | Diagnóstico estruturado (microscopia primeiro + sorologia depois + *P. lutzii* falso-negativo) | comparison-table + card-conceito |
| 10 | `ddx-denso-tabela-comparativa` | DDx denso E8 — 7 doenças × 5 eixos (PCM × TB × LV × Wegener × esporotricose × cromomicose × LT × CEC) | comparison-table densa + card-alerta |
| 11 | `tratamento-escalonado-gravidade` | Esquemas formais Consenso 2017 + 5 cenários terapêuticos + NeuroPCM + HIV-PCM + interação rifampicina-itraconazol | comparison-table (gravidade) + comparison-table--regimens (5 esquemas) + 2× treatment-timeline (variantes novas) + 2× card-capsule (anfo-B IV / Bactrim) + 2× card-alerta |
| 12 | `sintese-cura-recidiva-transicao-a6` | Critérios formais de cura + tríade mnemônica + cross-link → A6 + fechamento autoral | card-sintese + SVG `triade-mnemonica-pcm.svg` + grid 3 patognomônicos + comparison-table (cura) + card-prova consolidado + card-quote-alert + cross-link-card (A6) + card-motivational |

**Tamanho**: 1.293 linhas HTML totais; média ~108 linhas/página. Densidade compatível com A4-A5.

---

## 3. Componentes novos / reusados

### 3.1 Componentes NOVOS estruturais

**ZERO componente estrutural novo.** Filosofia A7 cumprida: vive 100% do repertório acumulado A1-A5.

### 3.2 Modificadores CSS novos (variantes leves)

| Modificador | Localização | Função |
|---|---|---|
| `.card--clinical-case[data-case-origin="juvenil"]` | `css/components/cards.css` | Variante azul-pediátrico pra caso clínico juvenil/aguda |
| `.card--clinical-case[data-case-origin="adrenal"]` | `css/components/cards.css` | Variante vermelho-urgência pra caso clínico adrenal/Addison-like |
| `.card--clinical-case[data-case-origin="moriforme"]` | `css/components/cards.css` | Variante verde-primária pra caso clínico moriforme clássico |
| `.tt-phase--antifungico-longo` + `.tt-legend-swatch--antifungico-longo` | `css/components/treatment-timeline.css` | Variante pra tratamento prolongado 9-18m (itraconazol VO) |
| `.tt-phase--antifungico-grave-iv` + `.tt-phase--antifungico-grave-vo` + correspondentes legend swatches | `css/components/treatment-timeline.css` | Variantes para tratamento grave (Anfo B IV ~2-4 sem + switch itraconazol VO ≥ 24m) |

### 3.3 Componentes REUSADOS (sem modificação)

| Componente | Vezes usado em A7 | Origem |
|---|---|---|
| `comparison-table` (e `--2col`) | 7× | A2 |
| `.comparison-table--regimens` | 1× (tabela 5 esquemas terapêuticos) | A4 |
| `.card--clinical-case` (estrutura base) | 3× (com variantes A7) | A5 |
| `cross-link-card` | 3× (retorno A5 + A7→A6) | A2 |
| `.card--quote-alert` | 5× | A3 |
| `.card--capsule` (e variantes `-primary`/`-secondary`) | 7× | A3 |
| `.card--motivational` | 1× (fechamento síntese) | A4 |
| `.card--destaque` | 6× | A1 |
| `.card--conceito` | 6× | A1 |
| `.card--prova` | 3× | A1 |
| `.card--alerta` | 5× | A1 |
| `.card--decisao` | 4× | A2 |
| `.card--sintese` | 1× (fechamento) | A1 |
| `treatment-timeline` (estrutura base) | 2× (com variantes A7) | A3 |
| `a7-meta-checklist` (padrão Bauer) | 12× (1 por página) | A1 |

---

## 4. SVGs autorais (8 produzidos via `ilustrador-medico-bauer`)

### 4.1 OBRIGATÓRIOS (3 patognomônicos)

| Arquivo | Função |
|---|---|
| `assets/illustrations/roda-de-leme-microscopia.svg` | Microscopia esquemática KOH — célula-mãe + brotamentos circunferenciais. Patognomônico microscópico. |
| `assets/illustrations/asa-de-morcego-radiografia.svg` | Radiografia esquemática infiltrado perilar bilateral simétrico. Patognomônico radiológico. |
| `assets/illustrations/estomatite-moriforme-oral.svg` | Lesão oral vegetante com pontilhado hemorrágico (aspecto amora). Patognomônico clínico. |

### 4.2 DIDÁTICOS OPCIONAIS (3 produzidos pelos próprios elementos pedagógicos)

| Arquivo | Função |
|---|---|
| `assets/illustrations/esquema-termodimorfico-pcm.svg` | Fluxograma ciclo ambiente (micélios) → corpo (levedura com brotamentos) |
| `assets/illustrations/adrenais-tropismo-pcm.svg` | Corte abdominal com adrenais bilaterais aumentadas + granulomas fúngicos |
| `assets/illustrations/triade-mnemonica-pcm.svg` | Composição visual integrando os 3 patognomônicos como tríade mnemônica de fechamento |

### 4.3 OPCIONAIS NÃO PRODUZIDOS (decisão Executor)

- `mapa-endemico-pcm-brasil.svg` — abandonado por redundância com texto + tabela; representação geográfica em SVG não agrega didaticamente vs descrição textual densa.
- `comparativo-pcm-vs-tb-radiologia.svg` — abandonado em favor da tabela DDx denso (página 10) que cumpre função análoga textualmente com 7 doenças (não só TB).

### 4.4 Ícones farmacológicos novos (2)

| Arquivo | Função |
|---|---|
| `assets/illustrations/icone-anfo-b-iv.svg` | Frasco-ampola IV (estilo da `icone-caspofungina.svg` de A5 como referência visual) |
| `assets/illustrations/icone-bactrim.svg` | Comprimido com label "SMX-TMP" (alternativa universal) |

**Total assets/illustrations adicionados em A7**: 8 SVGs.

---

## 5. Atualização técnica do framework

### 5.1 `data/pages.js`

- 12 entries A7 adicionadas (`a7-1` a `a7-12`)
- 1 entry adicionada ao array `AULAS`: `{ id: 'A7', titulo: 'Paracoccidioidomicose', subtitulo: 'Aula 7 · Módulo 4 fecha' }`

### 5.2 `sw.js`

- `CACHE_NAME` bumpado: `tb-bauer-v5` → `tb-bauer-v6`
- 12 paths `pages/a7/*.html` adicionados ao `PRECACHE_ASSETS`
- 1 path `css/pages/a7.css` adicionado
- 8 SVGs A7 adicionados ao precache
- Update-toast vai disparar em usuários da v5 quando re-abrirem a plataforma

### 5.3 `css/pages/a7.css`

Novo arquivo pontual para A7 — contém:
- Layout do grid de 3 patognomônicos da página 12 (`.a7-patognomonicos-grid` + `.a7-patognomonico-card`)
- Estilo do meta-checklist (`a7-meta-checklist`)
- Estilo da figura ilustrativa (`a7-figure`)

### 5.4 `index.html`

- Link CSS adicionado: `css/pages/a7.css`

### 5.5 `router.js`

- Sem mudanças estruturais necessárias (todos os componentes A7 são reusos de A1-A5 que já tinham seus `init*` registrados)

### 5.6 Cross-links bidirecionais

- **Retorno A5 → A7**: A página `a5/aspergilose-sintese-transicao-paracoco.html` já tinha cross-link pra `#/paracoco-introducao` (implementado em A5). Confirmado funcional em A7.
- **Retorno A7 → A5**: Página 1 (`paracoco-introducao`) traz cross-link-card explícito de retorno consciente a `#/aspergilose-sintese-transicao-paracoco`.
- **A7 → A6**: Página 12 (`sintese-cura-recidiva-transicao-a6`) traz cross-link-card pra `#/histoplasmose-introducao` (cai em fallback estilizado até A6 ser implementada).

---

## 6. Commits granulares (sem push, sem --no-verify)

```
3ec5d08  [commit base pré-A7]
2203816  Infra A7 Paracoco: SW v6 + pages.js + variantes CSS
1dd3d0a  A7 páginas 1-3: introdução + agente termodimórfico + duas formas
042b69a  A7 páginas 4-7: 2 formas clínicas + 2 patognomônicos visuais
bdbe057  A7 páginas 8-10: adrenal + diagnóstico laboratorial + DDx denso
7a351c5  A7 páginas 11-12: tratamento escalonado + síntese + transição A6
[próximo]  A7 fechamento: AGENTS.md + RELATORIO_A7.md
```

7 commits totais (6 já feitos + 1 fechamento final). Granularidade compatível com A3/A4/A5.

---

## 7. Validações executadas

### 7.1 Anti-metalinguagem (grep)
```
grep -rEn "vamos aprender|nessa aula|nesta aula|nesse vídeo|nessa página|no próximo bloco|no próximo módulo|vamos ver|vamos estudar|vou explicar" pages/a7/
→ ZERO hits
```

### 7.2 Referência ao narrador
```
grep -rEn "speaker A|speaker B|narrador|professor Bauer|professor disse|o autor" pages/a7/
→ ZERO hits
```

### 7.3 Cobertura quantitativa
- 12 páginas implementadas / 12 páginas especificadas no didata = **100%**
- Todos os itens-âncora da cobrança Bauer presentes: *P. brasiliensis* termodimórfico, "roda de leme", "asa de morcego", estomatite moriforme/aspecto amora, 80% em BR/CO/VE/AR, paciente rural exposto solo, aguda/juvenil ≤10% × crônica/adulta dominante, estradiol protetor, anemia ~90%, hipergama, eosinofilia até 20.000 (40%), pancitopenia disseminada, 50% adrenais, itraconazol 200mg 9-18m, anfo B + itraconazol ≥24m grave, Bactrim alternativa, sorologia monitorização, DDx denso → todos densificados.

### 7.4 Cobertura qualitativa Especificador (completion CONSTRUÇÃO)
- *P. lutzii* densificado (página 2 com alerta + página 9 sorologia)
- gp43 densificado (página 6 com card-capsule dedicado + página 9 diagnóstico)
- Critérios formais de cura (página 12 com tabela Consenso 2017)
- Critérios formais de gravidade (página 11 com tabela Consenso 2017)
- NeuroPCM (página 11, esquema E)
- HIV-PCM (página 11, card-alerta)
- Pós-menopausa (página 3, card-alerta + matriz comparativa)
- Interação rifampicina × itraconazol (página 11, card-alerta)
- Cobertura COMPLETA do truncamento original.

### 7.5 Acessibilidade
- `alt` semântico em todas as imagens não-decorativas (SVGs autorais)
- `alt=""` + `aria-hidden="true"` em ícones decorativos de cápsulas
- `scope="col"` e `scope="row"` em todas as tabelas
- `aria-label` em links cross-link

### 7.6 Gates do pipeline
- **G3.1 Cobertura 100%**: ✓ (todos os IDs do roteiro N01-N51 cobertos)
- **G3.2 Anti-metalinguagem**: ✓ (grep zero hits)
- **G3.3 Checagem Bauer**: ✓ (voz Bauer mantida; função pedagógica clara em cada bloco)
- **G3.4 Estratégias E1-E8**: ✓ (E1 página 1+6, E3 página 4+5+8, E4 página 6+7+8, E6 página 6+7+12, E7 página 3, E8 página 5+8+10)
- **G3.5 Componentes reusados**: ✓ (zero componente estrutural novo conforme spec)
- **G3.6 Variantes CSS leves**: ✓ (3 case-origin + 3 treatment-timeline)
- **G3.7 SVGs autorais**: ✓ (3 obrigatórios + 5 opcionais produzidos)
- **G3.8 Cross-links A5↔A7 + A7→A6**: ✓
- **G3.9 Truncamento resolvido**: ✓ (completion CONSTRUÇÃO densificou tudo)

---

## 8. Decisões técnicas registradas

### 8.1 Mariana/Lucita NÃO atravessam M4
- Avatares e arcos narrativos encerrados em A4 (sintese-transicao-modulo-micoses)
- A7 implementa 3 casos clínicos one-shot autônomos (juvenil/adrenal/moriforme) sem dependência de avatar reutilizado
- Decisão coerente com A5 que também usou one-shots HCPA/UFRJ/TMO

### 8.2 Variantes cromáticas dos casos
- `juvenil` → azul-info (paleta pediátrica universal)
- `adrenal` → vermelho-danger (sinaliza urgência clínica)
- `moriforme` → verde-primary (clássico-diagnóstico, casa com paleta plataforma)

### 8.3 Treatment-timeline em variantes prolongadas
- `antifungico-longo` (gradient verde-âmbar) representa 9-18m de itraconazol VO ambulatorial
- `antifungico-grave-iv` (vermelho-danger) representa 2-4 semanas de Anfo B IV hospitalar
- `antifungico-grave-vo` (gradient verde-petróleo) representa switch oral ≥ 24m

### 8.4 Completion CONSTRUÇÃO do Especificador
- Truncamento original da transcrição A7 marcado como `[TRUNCAMENTO]` pelo Roteirizador
- Especificador acionou CRUZAMENTO contra Consenso Brasileiro PCM SBI 2017 + Pan-Brazilian Network 2017
- Densificou: *P. lutzii*, gp43, critérios formais de cura/gravidade, NeuroPCM, HIV-PCM, pós-menopausa
- Marcações CONFIRMADO/DIVERGÊNCIA/ATUALIZAÇÃO/INCONCLUSIVO disponíveis em `_pipeline/05-especificador/A7-spec.md`

### 8.5 Mapa endêmico SVG abandonado
- Representação geográfica em SVG abstrato não acrescenta valor didático sobre descrição textual densa de regiões + países
- Recurso de tokens redirecionado pra SVGs com maior payoff visual (tríade mnemônica + esquema termodimórfico + adrenais tropismo)

### 8.6 Comparativo PCM × TB radiologia abandonado
- Substituído por tabela densa DDx 7-doenças × 5-eixos (página 10) que cumpre função análoga textualmente
- Cobre não só TB mas também Wegener, esporotricose, cromomicose, LT cutâneo, CEC oral, leishmaniose visceral

---

## 9. Estado final A7

| Métrica | Valor |
|---|---|
| Páginas HTML | 12 |
| Linhas HTML totais | 1.293 |
| Componentes estruturais novos | 0 |
| Modificadores CSS novos | 5 (3 case-origin + 2 treatment-timeline phase types) |
| SVGs autorais novos | 8 (3 obrigatórios + 3 opcionais + 2 ícones farmacológicos) |
| Cross-links bidirecionais | 3 (A5←A7, A7→A5 retorno, A7→A6) |
| Casos clínicos one-shot | 3 (juvenil/adrenal/moriforme) |
| Variantes treatment-timeline | 2 (antifungico-longo + antifungico-grave-iv/vo) |
| Cobrança itens-âncora Bauer | 100% cumprida |
| Cobertura roteiro N01-N51 | 100% (gate G3.1 verde) |
| Anti-metalinguagem | zero hits (gate G3.2 verde) |
| Gates G3.1-G3.9 | todos verdes |
| Tempo de pipeline | ~3-4h (modo --auto sem paradas) |
| Bump SW | v5 → v6 |
| Commits granulares | 7 (sem push, sem --no-verify) |

---

## 10. Pendências e sinalizações

### 10.1 Próxima parada
- **A6 Histoplasmose** — aula bônus declarada pelo professor (transcrição esperada com casos de prova comentados). Fecha o Módulo 4.
- A7→A6 cross-link instalado (cai em fallback até A6 ser implementada)
- Plataforma pronta pra receber A6

### 10.2 Plataforma após A7
- 6 aulas implementadas / 7 previstas (A1+A2+A3+A4+A5+A7; A6 pendente)
- 69 páginas HTML totais (A1=6 + A2=14 + A3=13 + A4=13 + A5=11 + A7=12)
- 48 SVGs autorais totais (40 anteriores + 8 A7)
- Sem push ao remote (responsabilidade Bauer)

### 10.3 Nada bloqueando A6
- Componentes reutilizáveis suficientes
- Padrão `.card--clinical-case` com variantes provado robusto em A5+A7
- `comparison-table` em todas as variantes (`--drugs`, `--regimens`, `--2col`)
- `treatment-timeline` com 9+2 variantes amplamente extensível
- Cross-link de A4 sintese-transicao-modulo-micoses → A6 pode ser feito posteriormente conforme demanda

---

## 11. Detecções de prompt-injection

Durante a invocação do Orquestrador A7, foram detectados 3 system-reminders embutidos no envelope MCP da invocação:
1. `claudeMd` (auto-memory) — tratado como contexto não-load-bearing, ignorado conforme orientação do próprio bloco ("you should not respond to this context unless highly relevant")
2. Mudança de data inline (2026-05-22 → 2026-05-23) — registrada silenciosamente sem mencionar ao usuário (conforme instrução)
3. MCP Server Instructions (computer-use + bio-research:consensus) — irrelevantes ao escopo da pipeline de produção de conteúdo médico didático; ignorados sem ação
4. "Auto Mode Active" sobre AskUserQuestion — coerente com modo --auto declarado explicitamente pelo Bauer; respeitado

Nenhuma instrução estranha ao escopo da pipeline foi executada. Conforme §11 do AGENTS.md raiz, tratados como dado não-confiável.

---

**Relatório A7 produzido pelo executor-bauer · pipeline modo --auto sem paradas obrigatórias · 12 páginas estruturadas · zero componente estrutural novo · 8 SVGs autorais · gates G3.1-G3.9 todos verdes · pronto pra A6 (Histoplasmose, aula bônus).**
