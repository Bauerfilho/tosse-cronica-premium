# Decisões Visuais — A1

## Paleta
- Primária `#34D399` (verde infectologia)
- Secundária `#FBBF24` (âmbar)
- Glow verde-âmbar (somatório das duas, baixa opacidade)
- Base petróleo profundo `#0E2A2F`
- Aurora dupla em radial-gradient no body (verde superior-esquerdo + âmbar superior-direito, opacidade baixa)

## Tipografia
- Família: stack Apple-like sistema (`-apple-system, BlinkMacSystemFont, SF Pro Display, ...`)
- H1 hero clamp 1.8-2.8rem, peso 800, letter-spacing -0.025em
- Corpo 1rem, line-height 1.65
- Sem fonte externa, performance privilegiada

## Glass / profundidade
- Header sticky com `backdrop-filter: saturate(180%) blur(18px)`
- Nav lateral em `var(--glass-bg)` com `blur(10px)`
- Cards em superfície elev-1 com borda translúcida
- Card-destaque (frase-mãe) com gradiente diagonal verde→âmbar + shadow-glow
- Máximo 4 camadas simultâneas respeitado

## Componentes únicos por página
- Página 1: cards (conceito + síntese)
- Página 2: duration-table (componente próprio)
- Página 3: cards + fluxograma ASCII em `<pre>`
- Páginas 4-5: case-timeline (componente próprio)
- Página 6: roadmap-grid (componente próprio) + card-destaque

Cada página tem ≥1 componente único — variabilidade visual atende AGENTS-PLATAFORMAS §10.

## Acessibilidade
- Foco visível com outline 2px primária
- `aria-expanded` em todos os toggles
- `aria-live="polite"` no app-root
- `prefers-reduced-motion: reduce` desabilita animações
- Contraste alto: texto `#F4F7FB`/`#C9D6D9` sobre `#0E2A2F` (>WCAG AA)
- Tap targets ≥ 44×44px em todos os interativos

## PWA
- Botão install no header (oculto até `beforeinstallprompt`)
- Update toast inferior-direito, glass, não-bloqueante
- Verificação periódica de update a cada 1h
- SW handler `SKIP_WAITING` implementado
