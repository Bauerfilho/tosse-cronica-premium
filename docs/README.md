# Tosse Crônica e Tuberculose — Plataforma Bauer

Plataforma educacional médica sobre tosse crônica como porta de entrada para tuberculose, com diagnósticos diferenciais em micoses granulomatosas pulmonares.

## Pipeline

A plataforma é construída em 7 aulas, processadas pela pipeline Bauer (Roteirizador → Especificador → Didata → Executor).

- A1 — Tosse Crônica e TB (intro) — **implementada**
- A2 — Dinâmica e Diagnóstico da TB
- A3 — Tratamento da TB
- A4 — Contactantes e Controle
- A5 — Aspergilose
- A6 — Histoplasmose
- A7 — Paracoccidioidomicose

## Stack

HTML + CSS + Vanilla JS + PWA (sem framework). Estática, deployável em GitHub Pages / Netlify / Vercel.

## Desenvolvimento local

```bash
python3 -m http.server 8000
```

E abra <http://localhost:8000>.

## Estrutura

Conforme `AGENTS-PLATAFORMAS.md` §7. Conteúdo por aula em `pages/a{N}/<slug>.html`. Dados em `data/`. Componentes em `css/components/` + `js/components/`.
