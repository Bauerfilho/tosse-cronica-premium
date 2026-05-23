# Relatório de Implementação — A6 Histoplasmose (AULA BÔNUS, fecha plataforma)

## Sumário

A6 é a **aula bônus declarada** pelo próprio professor ("seja muito bem-vindo a mais uma aula bônus"), processada como a **última aula da plataforma "Tosse Crônica"**, após A1-A5 e A7 já implementadas. Speaker A volta (mesma voz de A1-A4 e A7) numa transcrição MED completa ~13:42min. Fecha o Módulo 4 (Diagnóstico Diferencial: Micoses Granulomatosas Pulmonares) com **dispositivo didático único**: 2 casos de prova comentados com **gabarito desmontado alternativa por alternativa**.

Implementação totaliza **11 páginas A6 + 1 página de síntese transversal Módulo 4** = **12 páginas novas**, levando o total da plataforma a **82 páginas** (6+14+13+13+11+12+12+1).

## Páginas implementadas

| # | Slug | Título | Estratégia E dominante |
|---|---|---|---|
| 1 | `histoplasmose-introducao` | Histoplasmose — fechamento do Módulo 4 | E1 + E5 — abertura com badge bônus + 3 cenários-âncora |
| 2 | `forma-aguda-autolimitada` | Forma aguda — gripal, inespecífica, autolimitada | E4 — achados típicos imagem + autolimitação |
| 3 | `manifestacoes-inflamatorias-reativas-ufrj` | Manifestações inflamatórias reativas — pegadinha UFRJ | E4 + E8 — 4 reativas + mecanismo complexos imunes |
| 4 | `forma-cronica-mimetiza-tb` | Forma crônica — quando lembra tuberculose | E1 + cross-link A6 → A2 |
| 5 | `forma-disseminada-imunossuprimido` | Forma disseminada — quando o sistema imune falha | E7 (3 sub-formas) + caso sintético #3 HIV+ |
| 6 | `diagnostico-4-metodos` | Diagnóstico — quatro caminhos pra um destino | E7 (sensibilidade por forma) + algoritmo |
| 7 | `tratamento-escalonado-gravidade-histo` | Tratamento — escalonado pela gravidade | E8 (12sem vs 12 meses) + doses estruturadas |
| 8 | `mediastinite-fibrosante-hierarquia-br` | Mediastinite fibrosante e hierarquia das micoses no Brasil | E4 (armadilha "boa resposta" = falsa) + hierarquia BR visual |
| 9 | `caso-prova-1-caverna-morcego` | Caso de prova #1 — Caverna + morcego | E3 + componente NOVO `interactive-question --exam-breakdown` |
| 10 | `caso-prova-2-centro-oeste-desmontagem` | Caso de prova #2 — UFRJ + desmontagem completa | E8 em ação máxima — desmontagem A/B/C/D |
| 11 | `sintese-a6-transicao-modulo-4` | Síntese da Histoplasmose — transição pra fechamento | E6 (mnemônico tríade) + cross-link síntese transversal |
| 12 | `sintese-modulo-4-comparativa` | Síntese transversal do Módulo 4 — TB × Asp × Histo × Para | E7 final — 4 doenças × 9 eixos + costura clínica + card motivacional |

## Componentes técnicos

### Novo componente arquitetural

**`interactive-question --exam-breakdown`** (variante multi-alternativa do componente existente):
- HTML: header com badge + título + enunciado em box, lista de 4 alternativas A/B/C/D como botões (`role="list"` + `aria-pressed`), botão `iq-reveal-all`
- CSS: estados visuais distintos por `data-correta` + `aria-pressed`; alternativa correta clicada vira verde discreto + letra com fundo `--c-primary`; alternativa errada clicada vira vermelho-rosa discreto + letra com fundo `--c-danger`; comentário expande embaixo com border-left color-coded
- JS: extensão em `interactive-question.js` com dispatcher (`initClassic` para legado vs `initExamBreakdown` para nova variante); preserva comportamento das 50+ páginas anteriores; persistência localStorage opcional via `stateMod.markRevealed(qid)`
- Acessibilidade: tap targets ≥ 44px; `prefers-reduced-motion` respeitado; focus-visible em outline secondary

### Novas variantes CSS

- `.card--clinical-case[data-case-origin="caverna-aguda"]` — tom azul-noturno discreto (#6366F1) evocando caverna
- `.card--clinical-case[data-case-origin="centro-oeste-nodulo"]` — tom âmbar (secondary) evocando paisagem Centro-Oeste BR
- `.card--clinical-case[data-case-origin="disseminada-hiv-sintetico"]` — tom vermelho discreto (danger) evocando urgência HIV grave
- `.comparison-table--differential` — 5 colunas wide (980px min-width) com pinning de coluna-eixo (`position: sticky; left: 0; z-index: 1`); classes `.ct-col-tb/-asp/-histo/-paracoco` com tints sutis
- `.badge--bonus` — paleta âmbar, fonte semibold uppercase, prefixo ★, padding compacto
- `.card--bonus-opener` — container hero com glow âmbar leve preservando paleta
- `.aula-nav-bonus` — badge "bônus" sutil no menu lateral renderizado pelo router via flag `aula.bonus`

### Assets autorais (5 SVGs novos)

1. `caverna-morcego-cenario.svg` — silhueta de montanha com entrada de caverna + estalactites + 4 morcegos em voo + esporos verdes em suspensão; cenário-âncora #1 de exposição (200×260 viewbox)
2. `radiografia-histoplasmose-aguda.svg` — silhueta torácica PA com infiltrado retículo-nodular bilateral (22 nódulos) + linfonodomegalia hilar bilateral (elipses paramediastínicas) + adenopatia mediastinal + setas legendadas em 3 cores (400×360)
3. `lesoes-molusco-umbilicacao.svg` — quadrante de pele com 5 pápulas eritêmato-amarronzadas com umbilicação central característica + setas explicativas (400×280)
4. `triade-cenarios-exposicao.svg` — composição com 3 cards lado a lado (caverna+morcego / galinheiro / viveiro de aves) com ícones esquemáticos + labels (600×200)
5. `quatro-doencas-modulo4.svg` — 4 mini-radiografias esquemáticas lado a lado mostrando achados radiológicos-âncora de cada doença do Módulo 4 (600×220)

## Resolução de DIVERGÊNCIA-DIRETRIZ-VERSÃO

**DDV001 — duração total da forma grave** (registrada pelo Especificador): Speaker A diz "12 semanas" sem distinguir pulmonar aguda grave vs disseminada grave. IDSA 2007 + CDC/NIH OI 2024 estratificam:

- **Pulmonar aguda grave**: anfo B 1-2sem + switch oral total mínimo 12 SEMANAS (compatível com fala literal)
- **Disseminada grave** (especialmente HIV+): anfo B 1-2sem + switch oral mínimo 12 MESES + profilaxia secundária

Resolvido na página 7 (`tratamento-escalonado-gravidade-histo`) com:
- Matriz comparison-table estruturando os 5 níveis de gravidade em linhas separadas (aguda assintomática / aguda prolongada / crônica / pulmonar aguda grave / disseminada grave)
- `card--quote-alert` específico com aviso "Não confundir 12 SEMANAS na pulmonar aguda grave; 12 MESES na disseminada grave"

## Densificações DC do Especificador integradas

- **DC010-DC016** HIV-histoplasmose detalhada: CD4 < 150, tratamento indução-manutenção, profilaxia secundária indefinida até CD4 > 150 sustentado + carga viral suprimida → integrado na página 5 (caso sintético #3) + página 7 (matriz de gravidade)
- **DC017-DC023** sensibilidades dos 4 métodos diagnósticos + algoritmo por gravidade → tabela completa na página 6 com sensibilidade por forma clínica
- **DC024-DC028** doses estruturadas IDSA 2007 + interações CYP3A4 → 3 `a6-info-box` na página 7
- **DC029-DC031** patogênese e manejo da mediastinite fibrosante → página 8 com complicações (SVC, brônquica, esofágica, artéria pulmonar)
- **DC005-DC007** pericardite reativa + outras manifestações inflamatórias → página 3 como densificação opcional

## Cross-links implementados

- **A7 → A6** (já existia): `pages/a7/sintese-cura-recidiva-transicao-a6.html` aponta pra `#/histoplasmose-introducao` — slug confirmado funcionando
- **A6 → A2** (NOVO na página 4): `cross-link-card` apontando pra `#/cavitacao-sequelas` reabrindo a janela TB pós-primária pra paciente com cavernas apicais bilaterais
- **A6 → A7** (NOVO na página 5): paralelo conceitual adrenal apontando pra `#/acometimento-adrenal-caso-addison`
- **A6 → SM4** (NOVO na página 11): `cross-link-card` apontando pra `#/sintese-modulo-4-comparativa` como última página da plataforma

## Validações executadas

- **Anti-metalinguagem grep**: ZERO hits proibidos nas 12 páginas A6/SM4 (testados: "conforme a aula", "de acordo com a aula", "a aula diz", "o professor menciona", "conforme demonstrado", "no próximo bloco", "como vimos", "o objetivo dessa sessão", "Speaker A", "Professor Marcos", etc.)
- **Slugs**: 12 entries em `data/pages.js` consistentes com arquivos físicos em `pages/a6/`
- **Service worker**: CACHE_NAME bumped v6 → v7 + 13 novos paths HTML + 5 novos SVGs adicionados ao PRECACHE_ASSETS
- **Quiz universal**: todas as 12 páginas têm pelo menos 1 `interactive-question` (10 clássicas + 2 `--exam-breakdown` nas páginas 9 e 10)

## Pendências e decisões posteriores

- **Imagens reais opcionais** (decisão Bauer): se desejado, pode-se buscar via `buscador-imagem-medica-bauer` 1-2 imagens reais (Radiopaedia/CDC PHIL/Wikimedia Commons) pra reforço comparativo "ilustração esquemática × foto clínica real" em microscopia de *H. capsulatum* intracelular ou foto de lesão cutânea molusco-like em histoplasmose disseminada. As ilustrações autorais já carregam o peso didático.
- **Histoplasmoma residual**: mencionado conceitualmente na página 10 (desmontagem letra D) sem ilustração própria; pode-se criar SVG dedicado em sprint futuro se aparecer aula sobre nódulo pulmonar solitário
- **Mediastinite fibrosante corte axial**: mencionada conceitualmente na página 8 sem ilustração; opcional pra sprint futuro

## Commits

- `c<sha1>` — A6 infra: componentes novos + assets + manifest pages.js + sw bump v7
- `c<sha2>` — A6 páginas 1-6: intro + aguda + reativas-UFRJ + crônica-TB + disseminada + diagnóstico
- `c<sha3>` — A6 páginas 7-12 + síntese transversal Módulo 4: fechamento da plataforma

## Próximo passo

Bauer revisa plataforma no browser localmente. Plataforma pronta para `git push` quando aprovada.
