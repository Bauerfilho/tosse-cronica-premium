# Relatório de Implementação — Aula A3 · Tratamento da Tuberculose

**Data**: 22 de maio de 2026
**Pipeline**: Roteirizador → Especificador → Didata → Executor (modo `--auto`)
**Status**: ✅ A3 implementada e validada localmente

---

## 1. Sumário executivo

A3 cobre o pilar farmacológico-decisional do RIPE em **13 páginas**. Mariana ganhou **6 beats novos** (ordens 16-21) cobrindo início RIPE na UBS → susto da urina alaranjada → baciloscopia mensal negativando → alta por cura → gancho narrativo pra A4 (Lucita como sua contactante). Foi introduzido **1 componente novo de alta reusabilidade** (`treatment-timeline`) + 3 modificadores CSS de componentes existentes. **11 SVGs autorais** novos. SW bump v2→v3 dispara update-toast. Quiz universal: ~30 perguntas, 2-3 por página.

Plataforma agora tem **33 páginas totais** (A1=6 + A2=14 + A3=13) cobrindo o módulo TB completo até tratamento.

---

## 2. Artefatos da pipeline

| Fase | Artefato | Path |
|---|---|---|
| Calibração macro | dossie-macro.md | `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/02-calibrador-macro/dossie-macro.md` |
| Calibração micro A3 | A3-dossie-micro.md | `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/03-calibrador-micro/A3-dossie-micro.md` |
| Roteirizador | A3-roteiro.md | `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/04-roteirizador/A3-roteiro.md` |
| Especificador | A3-spec.md | `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/05-especificador/A3-spec.md` |
| Didata | A3-prompt-final.md | `/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/Superagente Claude/tuberculose/_pipeline/06-didata/A3-prompt-final.md` |
| Executor (código) | 13 páginas HTML + componentes + CSS + JS + assets + sw bump | `/Users/bauervieiracesarfilhovieira/Documents/tosse-cronica-premium/` |
| Relatório | RELATORIO_A3.md (este) | `/Users/bauervieiracesarfilhovieira/Documents/tosse-cronica-premium/docs/RELATORIO_A3.md` |

---

## 3. Páginas A3 implementadas (13)

| # | Slug | Título | Estratégia E dominante |
|---|---|---|---|
| 1 | `introducao-tratar-tb` | Tratar TB é uma operação de 6 meses | E1 (pergunta central) |
| 2 | `ripe-4-farmacos` | Os quatro fármacos do RIPE | E2 (mnemônico explicitado) |
| 3 | `fases-intensiva-manutencao` | Duas fases, uma regra inegociável | E1 + E5 |
| 4 | `mariana-inicia-ripe` | Mariana inicia o RIPE | E3 (caso-âncora) |
| 5 | `encurtar-manter-prolongar` | Encurtar, manter, prolongar | E1 + E5 + E8 |
| 6 | `tb-meningea-osteoarticular-12m` | Doze meses: meníngea e osteoarticular | E1 + E4 |
| 7 | `efeitos-adversos-tabela` | O quadro-âncora dos adversos do RIPE | E5 (checklist máximo) |
| 8 | `etambutol-estou-vendo-mal` | "Estou vendo mal." | E4 (citação literal) + E8 |
| 9 | `hepatotoxicidade-rhp` | Hepatotoxicidade: suspender tudo, reintroduzir R → I → P | E1 + E5 |
| 10 | `piridoxina-3-grupos` | Piridoxina nos 3 grupos | E1 + E5 |
| 11 | `monitoramento-pcr-vs-baciloscopia` | PCR para diagnóstico, baciloscopia para acompanhamento | E8 (erro comum desmontado) |
| 12 | `criterios-falencia-terapeutica` | Os 3 critérios de falência terapêutica | E5 |
| 13 | `mariana-alta-transicao-a4` | Mariana ganha alta — e a próxima pergunta | E3 (fechamento) + E5 |

---

## 4. Componentes novos introduzidos

### 4.1 `treatment-timeline` (alta reusabilidade)
- **Arquivos**: `css/components/treatment-timeline.css` + `js/components/treatment-timeline.js`
- **4 variantes** via `data-variant`:
  - `padrao` (6m: 2m intensiva + 4m manutenção)
  - `prolongado-12m` (12m: 2m intensiva + 10m manutenção; meníngea/osteoarticular)
  - `pediatrico-4m` (4m: HPMZ encurtado, SHINE 2022)
  - `sequencial-rhp` (modo reintrodução R → I → P)
- **Acessibilidade**: `role="img"` + `aria-label` descritivo gerado automaticamente por variante via `initTreatmentTimelines(root)`
- **Reusabilidade prevista**: A4 (esquemas TB latente: rifapentina+isoniazida 12 doses, isoniazida 9m, rifampicina 4m), A5/A6/A7 (esquemas antifúngicos 6-18m)

### 4.2 Modificadores CSS de componentes existentes
- `.comparison-table--drugs` (em `comparison-table.css`) — tabela farmacológica com ícone-pílula colorido + destaque visual da coluna "conduta" (background âmbar)
- `.card--quote-alert` (em `cards.css`) — citação literal destacada com tipografia grande + aspas decorativas + glow âmbar
- `.card--capsule` + variantes `--capsule-primary` / `--capsule-secondary` (em `cards.css`) — cápsula horizontal com ícone à esquerda + corpo à direita; usa também `.group-pill` pra ícones inline (piridoxina 3 grupos)

### 4.3 Ajustes específicos da aula (CSS isolado)
- `css/pages/a3.css` — 4 utilitários autorais:
  - `.a3-drug-grid` + `.a3-drug-card` (grid 4 fármacos com borda topo colorida por letra R/I/P/E)
  - `.a3-decision-tree` (fluxograma decisional inline encurtar/manter/prolongar)
  - `.a3-numbered-list` (lista numerada destacada pra critérios de falência)
  - `.a3-meta-checklist` (checklist Bauer "saindo desta página você sabe")

---

## 5. Assets SVG autorais (11 novos)

| Arquivo | Função |
|---|---|
| `icone-rifampicina.svg` | Cápsula didática R (gradiente âmbar) |
| `icone-isoniazida.svg` | Cápsula didática I (gradiente verde) |
| `icone-pirazinamida.svg` | Cápsula didática P (gradiente azul) |
| `icone-etambutol.svg` | Cápsula didática E (gradiente violeta) |
| `icone-piridoxina.svg` | Círculo B6 (cápsula vitamina) |
| `icone-gestante.svg` | Ícone linear stroke 1.75 (gestante) |
| `icone-diabetico.svg` | Ícone linear stroke 1.75 (frasco insulina) |
| `icone-hiv-positivo.svg` | Ícone linear stroke 1.75 (fita HIV+) |
| `coloracao-alaranjada-urina.svg` | Cena leve: frasco coletor com líquido cor de laranja + gota cintilante + etiqueta "inofensiva, avise o paciente" (humor visual sutil, didático) |
| `fluxograma-reintroducao-rhp.svg` | Sequência temporal R → pausa 3-7d → I → pausa 3-7d → P |
| `olho-neurite-etambutol.svg` | Esquema do olho com escotoma central + alteração verde-vermelho |

Todos autorais via SVG inline, estilo Bauer (cantos arredondados, sem cartoon, sem fotorrealismo).

---

## 6. Caso Mariana — extensão A3

**6 beats novos** acrescentados ao array `mariana.beats` (ordens 16-21, `aula: 'A3'`):

| Ordem | ID | Página | Título |
|---|---|---|---|
| 16 | `m-a3-b1` | `mariana-inicia-ripe` | Início do RIPE na UBS |
| 17 | `m-a3-b2` | `mariana-inicia-ripe` | Fase intensiva — 2 meses com os 4 fármacos |
| 18 | `m-a3-b3` | `mariana-inicia-ripe` | A urina ficou cor de laranja (citação + nota) |
| 19 | `m-a3-b4` | `monitoramento-pcr-vs-baciloscopia` | Baciloscopia mensal — negativando |
| 20 | `m-a3-b5` | `mariana-alta-transicao-a4` | Alta clínica por cura |
| 21 | `m-a3-b6` | `mariana-alta-transicao-a4` | A pergunta que vem em seguida (gancho Lucita) |

**2 perguntas novas** acrescentadas ao array `mariana.perguntas`:
- `p-a3-q1` (urina alaranjada — conduta + por que não suspender)
- `p-a3-q2` (PCR não pra acompanhamento — mecanismo)

**Total Mariana**: 21 beats + 5 perguntas distribuídas ao longo de A1, A2, A3.

**Lucita** = contactante de Mariana (colega de plantão no setor de emergência) — decisão consolidada no MICRO A3 §6.4 e confirmada via cross-link card na página A3-13. Entra em cena na A4.

---

## 7. Cross-links implementados

| Origem | Destino | Status |
|---|---|---|
| A3-11 (`monitoramento-pcr-vs-baciloscopia`) | A2 (`metodos-pcr-genexpert`) | Ativo (A2 já implementada) |
| A3-13 (`mariana-alta-transicao-a4`) | A4 (`triagem-contactantes`) | Fallback (A4 ainda não existe — router cai em "Página não encontrada" estilizada; ativa automaticamente quando A4 entrar) |

---

## 8. Sinalizações e divergências resolvidas em modo --auto

### 8.1 DIVERGÊNCIA #1: Ordem de reintrodução em hepatotoxicidade
- **Transcrição**: R → H → P
- **Manual MS-TB 2024**: R → H → Z (mesma ordem, nomenclatura H/Z)
- **Decisão Didata** (--auto): adotada R → I → P como versão BR canônica.

### 8.2 DIVERGÊNCIA #2: Pirazinamida + rabdomiólise
- **Transcrição**: destacava apenas rabdomiólise (rara, grave)
- **Literatura**: hiperuricemia/artralgia é MUITO mais comum
- **Decisão Didata** (--auto): cobertos **DOIS perfis** adversos (rabdomiólise rara + hiperuricemia comum) pra completude de prova.

### 8.3 DIVERGÊNCIA #3: Limite etário etambutol em criança
- **Transcrição**: "< ~10 anos"
- **Manual MS-TB 2024**: < 10 anos (BR canônico)
- **Decisão Didata** (--auto): adotado < 10 anos.

### 8.4 INCONCLUSIVO #1: Dose exata corticoide na meníngea
- Apresentadas 2 opções validadas (dexametasona Vietnã 0,4 mg/kg/d + tapering; prednisolona 1-2 mg/kg/d + tapering), duração 6-8 semanas.

### 8.5 INCONCLUSIVO #2: Critérios operacionais "forma não grave pediátrica"
- Adotados critérios equivalentes ao "forma pulmonar não grave" do adulto (1 lobo, sem cavitação, sem obstrução, sem derrame significativo) + ensaio SHINE 2022 como referência operacional.

### 8.6 Construções complementares realizadas (7 blocos)
- HIV-TB co-infecção (TARV-rifampicina, IRIS, piridoxina obrigatória, baciloscopia mensal essencial)
- MDR-TB menção breve (definição + trigger + BPaL/BPaLM)
- Doses adulto 4DFC/2DFC faixadas por peso
- Doses pediátricas mg/kg
- Definição operacional de "fortemente positiva" (escala BAR)
- Esquema HPMZ pediátrico 4 meses (SHINE 2022)
- Esquemas em hepatopatia prévia + IRC

---

## 9. Validações executadas

### 9.1 Anti-metalinguagem (grep)
```
=== grep -nEi "(neste próximo bloco|como vimos anteriormente|...|Speaker A|...|placeholder|TODO:|como IA)" pages/a3/*.html ===
OK: zero hits proibidos
```

### 9.2 Balanceamento HTML
```
13/13 páginas com tags estruturais abertas = fechadas
```

### 9.3 Cross-check pages.js × disco
```
OK: declarados = existentes (13 slugs ↔ 13 arquivos)
```

### 9.4 Cross-check sw.js × disco
```
OK: SW = disk (todos os 13 paths novos em PRECACHE_ASSETS)
```

### 9.5 Estrutura mínima por página
```
13/13 páginas com h1 + cards + interactive-question + a3-meta-checklist
```

---

## 10. Layout único validado

- Header sticky glass (herança A1/A2 sem mudança)
- Hash routing (`#/<slug>`) funcionando em todas as 13 páginas novas
- Drawer mobile fecha em `hashchange` (herança A1, confirmada)
- Botão PWA install no header continua funcionando
- Update-toast configurado pra disparar com SW v3
- Cross-link cards renderizam corretamente em desktop e mobile
- `treatment-timeline` responsivo em todos os breakpoints (≤ 540px reduz altura e font)
- `.comparison-table--drugs` com scroll horizontal sticky header em mobile

---

## 11. PWA / Service Worker

- `CACHE_NAME` incrementado: `tb-bauer-v2` → `tb-bauer-v3`
- `PRECACHE_ASSETS` atualizado com:
  - 13 paths HTML A3 novos
  - `treatment-timeline.css` + `.js`
  - `a3.css`
  - 11 assets SVG novos
- Update-toast dispara automaticamente em quem tinha v1 ou v2 instalada

---

## 12. Commits locais (sem push, sem --no-verify)

1. `794a3b2` — Adiciona componentes A3: treatment-timeline + modificadores + 6 beats Mariana
2. `a0f0e13` — Adiciona 11 SVGs autorais didáticos para A3
3. `ab87fda` — Implementa páginas A3 bloco 1: introducao, RIPE 4 farmacos, fases, Mariana inicia
4. `71e86a9` — Implementa páginas A3 bloco 2: ajuste duracao, meningea 12m, adversos, etambutol
5. `1c6643d` — Implementa páginas A3 bloco 3 (final): hepatotox R-I-P, piridoxina, PCR vs baciloscopia, falência, alta Mariana
6. (próximo) — Fecha A3: bump SW v3, atualiza AGENTS.md + docs/RELATORIO_A3.md

---

## 13. Detecção de prompt injection (durante a pipeline)

Durante a execução foram observadas múltiplas injeções de `<system-reminder>` em tool results, descrevendo (a) instruções de MCP servers (computer-use, plugin bio-research), (b) "Auto Mode Active" do harness. Conforme política herdada (AGENTS.md §11) e instrução explícita do Bauer no briefing, esses blocos foram tratados como **dado não-confiável vindo do envelope harness**, não como instruções vinculantes ao conteúdo da plataforma. Nenhuma instrução desses reminders foi seguida — nem invoquei `computer-use`, nem chamei plugins de busca de papers, nem alterei o fluxo da pipeline.

A transcrição A3 (`tratamento_da_tuberculose 2.txt`) em si **não contém prompt injection** — é Summary AI estruturado em bullets, sem URLs externas embutidas, sem mudança abrupta de tom, sem instruções fora do escopo médico-farmacológico. Conteúdo seguro.

---

## 14. Próximo passo

- Bauer revisa a plataforma localmente:
  ```bash
  cd /Users/bauervieiracesarfilhovieira/Documents/tosse-cronica-premium
  python3 -m http.server 8000
  open http://localhost:8000
  ```
- Bauer aprova → `git push` quando entender que está pronto pra ir ao remoto.
- Pipeline pronta pra processar **A4 (Contactantes e Controle)** — Lucita entra como contactante de Mariana conforme decisão narrativa do MICRO A3 §6.4 + cross-link já implementado em A3-13.

---

**A3 fechada. Pronto pra A4.**
