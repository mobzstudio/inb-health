---
name: inb-motion
description: >-
  Applies the INB Health motion system (motion.dev, Reveal/Stagger/CountUp,
  tokenized durations and springs, CSS micro-interactions). Use when adding,
  changing, reviewing, or documenting animation, entrance, hover, count-up,
  scroll, orbital services, photo cluster, or motion tokens on this website.
---

# INB Motion

Antes de animar qualquer coisa neste site, ler [docs/motion.md](docs/motion.md) e [src/lib/motion.ts](src/lib/motion.ts). Essa spec é a fonte de verdade. Não inventar outra linguagem.

## Fluxo

1. **Não redesenhar.** Layout, tipografia e composição ficam. Só movimento.
2. **Reusar a biblioteca.** `@/components/motion` (`Reveal`, `Stagger`, `StaggerItem`, `CountUp`). Tokens de `@/lib/motion`. CSS de hover com `--duration-fast` / `--ease-out`.
3. **Escolher a camada** (ver spec): CSS micro → Reveal/Stagger entrada → CountUp números → Motion direto só se o primitivo não cobrir.
4. **Manter Server Components.** Envolver o pedaço animado, não o arquivo da seção.
5. **Verificar** no browser: entrada, hover, número, reduced-motion, H1 do hero visível no first paint.

## Regras duras

- Biblioteca: `motion` (`motion/react` + `animate` de `motion`). Proibido GSAP, Lenis, Lottie, R3F, View Transitions, AnimateNumber (Motion+).
- H1 do hero nunca `opacity: 0` via JS.
- Novos timings: par JS + CSS, nunca valor mágico no componente.
- Cards editoriais: `StaggerItem punch`. Biomarcadores estáticos (sem marquee / sem `HScroll`).
- Serviços: não reescrever o palco orbital em Motion `x/y` — o layout já é CSS `left`/`top`/`transform`.
- `data-reveal` em todo island de entrada. Provider já existe no layout.

## Onde está o quê

| Precisa | Arquivo |
| --- | --- |
| Spec completa | `docs/motion.md` |
| Tokens JS | `src/lib/motion.ts` |
| Tokens CSS | `src/styles/tokens.css` |
| Primitivos | `src/components/motion/` |
| Reduced / noscript | `src/app/globals.css`, `src/app/layout.tsx` |

Inventário por seção e receitas: [docs/motion.md](docs/motion.md).
