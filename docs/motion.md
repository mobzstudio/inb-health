# Motion — INB Health

Fonte de verdade da linguagem de movimento deste site. Tokens em código: `src/lib/motion.ts` (JS) e `src/styles/tokens.css` (CSS). Os dois devem permanecer iguais. Esta spec define o que usar, quando, e o que não inventar.

Não redesenhar layout. O movimento entra por cima do que já existe.

## Princípios

1. **Propósito.** Toda animação guia atenção, mostra hierarquia, dá feedback ou cria continuidade. Sem um desses papéis, não criar.
2. **Uma linguagem.** Durações, easings e springs vêm dos tokens. Não inventar curvas, springs ou timings soltos.
3. **Camadas.** CSS para hover/focus/micro. Motion (`motion` / `motion/react`) para entrada, stagger, presença e números. Não misturar Motion e CSS `transform` no mesmo elemento.
4. **Performance.** Preferir `transform` e `opacity`. Sem animar `width`/`height`/`top`/`left` salvo o palco orbital de Serviços, que já opera nesse modelo.
5. **Acessibilidade.** `prefers-reduced-motion` é lei. `MotionConfig reducedMotion="user"` já envolve o app.
6. **LCP.** O H1 do hero nunca começa em `opacity: 0` via JS. First paint visível sem esperar Motion.

## Stack

| Usar | Não usar |
| --- | --- |
| `motion` ^13 (import React de `motion/react`, `animate()` de `motion`) | GSAP, Lenis, Lottie, R3F, View Transitions |
| Primitivos em `@/components/motion` | `AnimateNumber` (Motion+ / pago) |
| Tokens em `@/lib/motion` | Timings mágicos (`0.3s`, `ease-in-out` solto) |
| CSS Modules + tokens `--duration*` / `--ease-*` | Nova lib “só desta seção” |

## Tokens

JS (`src/lib/motion.ts`) e CSS (`src/styles/tokens.css`) emparelhados:

| Papel | JS | CSS | Valor |
| --- | --- | --- | --- |
| Micro (hover, focus, ícone) | `dur.fast` | `--duration-fast` | 180ms / 0.18s |
| Base (painel, troca) | `dur.base` | `--duration` | 280ms / 0.28s |
| Lento (fotos, alinhamento) | `dur.slow` | `--duration-slow` | 600ms / 0.6s |
| Hero / count-up | `dur.hero` | `--duration-hero` | 900ms / 0.9s |
| Saída / entrada UI | `ease.out` | `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Ida e volta | `ease.inOut` | `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |

Springs (só JS):

| Token | Uso |
| --- | --- |
| `spring.entrance` | Reveals e stagger (`stiffness: 140`, `damping: 18`, `mass: 0.9`) |
| `spring.soft` | Hover de card (`stiffness: 180`, `damping: 24`) |
| `spring.snappy` | Feedback curto (`stiffness: 420`, `damping: 32`) |

Entrada:

| Token | Valor | Uso |
| --- | --- | --- |
| `reveal.y` | 40 | Deslocamento de entrada |
| `reveal.scale` | 0.92 | Pop de seção / item padrão |
| `reveal.amount` | 0.2 | `viewport.amount` do whileInView |
| `stagger.base` | 0.09 | Gap entre filhos |
| `stagger.slow` | 0.14 | Listas mais raras |
| `interval.orbit` | 6500 | Autoplay do palco de Serviços |

Novo token: adicionar nos **dois** arquivos, depois usar. Nunca um valor órfão num componente.

## Biblioteca (`@/components/motion`)

Provider já está no `layout`. Não criar outro `MotionConfig`.

### `Reveal`

Bloco único abaixo da dobra (título de seção, copy, CTA).

```tsx
import { Reveal } from "@/components/motion";

<Reveal>
  <Eyebrow>…</Eyebrow>
  <Heading>…</Heading>
</Reveal>

<Reveal delay={0.08}>…</Reveal>
```

- `initial`: opacity 0, `y: reveal.y`, `scale: reveal.scale`
- `whileInView` once, `spring.entrance`
- Sempre `data-reveal` (noscript + reduced-motion)

Seções **permanecem Server Components**. `Reveal` é o island client.

### `Stagger` + `StaggerItem`

Listas e grids de cards. `punch` é o default visual para card editorial.

```tsx
<Stagger className={styles.grid}>
  {items.map((item) => (
    <StaggerItem key={item.id} punch>
      <article className={styles.card}>…</article>
    </StaggerItem>
  ))}
</Stagger>
```

| Variante | Quando |
| --- | --- |
| padrão | Copy, listas, retrato, meta |
| `punch` | Cards (pilares, método, vozes, biomarcadores, indicadores, FAQ-adjacente, abas) — `y: 56`, `scale: 0.82`, `rotate: -6` |

`as`: `div` \| `ul` no parent; no item `div` \| `ul` \| `article` \| `a` \| `li` \| `button`. Hover extra só via `whileHover` no item (ex.: biomarcadores `y: -14, scale: 1.04` com `spring.soft`). Não somar hover CSS de `transform` no mesmo nó.

### `CountUp`

Números do site. Anima de `from` (0) até `to` quando entra na viewport. `animate()` da lib aberta — **não** AnimateNumber.

```tsx
<CountUp to={50} suffix="+" delay={0.28} />
<CountUp to={7} /> em <CountUp to={10} delay={0.2} />
<CountUp to={56} prefix="-" suffix=" mg/dL" />
```

- Duração `dur.hero`, easing `ease.out`
- `aria-label` com o valor final
- Reduced motion: mostra `to` imediatamente
- `font-variant-numeric: tabular-nums` no wrapper visual
- `decimals` opcional (vírgula BR) para valores como 0,4 e 4,9

### `HScroll`

Faixa com drag + wheel → x. **Não** usar em Biomarcadores (fileira estática, poucos cards). Reservado para faixas que realmente transbordam e pedem arraste.

### Motion direto (`motion/react`)

Só quando o primitivo não cobre: `AnimatePresence` (painel Trajectories), `whileHover` orquestrado (PhotoCluster), órbita CSS de Serviços. Continuar importando tokens de `@/lib/motion`.

## Camadas por tipo

| Tipo | Ferramenta | Notas |
| --- | --- | --- |
| Hover de botão, link, nav, drawer | CSS (`--duration-fast`, `--ease-out`) | `translateY(-1px)`, opacity |
| Hover de card editorial | Motion `whileHover` **ou** CSS no filho interno, nunca nos dois | Punch no wrapper, CSS no `<a>` interno é ok |
| Entrada de seção | `Reveal` | Abaixo da dobra |
| Entrada de cards | `Stagger` + `StaggerItem punch` | |
| Hero (acima da dobra) | CSS `@keyframes fadeRise` em `src/styles/hero-enter.module.css` (home: `Hero.module.css`) | H1 **sem** opacity 0 |
| Números | `CountUp` | |
| Troca de painel | `AnimatePresence` | `dur.fast` + `ease.out`, y curto (8px) |
| Fotos HealthData | `PhotoCluster` variants enter → rest → hover | Fan no rest, alinhadas no hover |
| Serviços | CSS `transform` no card + `interval.orbit` | Não reescrever o palco em Motion `x/y` — conflita com left/top |
| Accordion | Motion na entrada do item; open/close em CSS `max-height` | |

## Inventário da home

| Seção | Motion |
| --- | --- |
| Hero | CSS enter nos apoios + mark. H1 estático no paint. `CountUp` em 50+ e 4x/ano |
| HealthData | Reveal intro. PhotoCluster enter/hover. Stagger punch + CountUp (7 em 10, 1 em 4, 80%) |
| Commitment | Reveal no display e no split |
| Founder | Reveal copy/retrato. Stagger punch na lista |
| Method | Reveal head. Stagger punch nos 4 passos |
| Biomarkers | Reveal intro. Stagger punch nos cards, hover lift. **Sem** marquee/HScroll |
| Pillars | Reveal + Stagger punch |
| Services | Reveal título + palco. Órbita 6500ms, pausa hover/foco/reduced |
| Medicine | Reveal + Stagger punch nos dois cards |
| Trajectories | Reveal head. Stagger punch nas abas + CountUp deltas. AnimatePresence no painel |
| Indicators | Reveal + Stagger punch + CountUp |
| Voices | Reveal + Stagger punch |
| FounderQuote | Reveal foto e texto |
| FAQ | Reveal títulos. Accordion items `whileInView` |
| FinalCta | Reveal bloco |

## Inventário das páginas internas

Heroes internos: CSS `src/styles/hero-enter.module.css` nos apoios. **H1 sem opacity 0.** Retrato/mockup pode ser `Reveal`. Números com `CountUp`.

### Dra. Juliana (`/dra-juliana`)

| Seção | Motion |
| --- | --- |
| Hero | CSS enter kicker/lede/nav/rail. H1 estático. CountUp em 15+. Retrato `Reveal` |
| Principles | Reveal intro. Stagger punch nos 6 princípios |
| Quote | Reveal do bloco |
| Markers | Reveal intro. Stagger punch + CountUp (valores e Top %) |
| Letter | Reveal header, atos com delay, assinatura |
| Credentials | Reveal intro. Stagger punch nos grupos da timeline |
| Press | Reveal header. Stagger punch nas linhas |
| Cta | Reveal bloco |

### INB Club (`/club`)

| Seção | Motion |
| --- | --- |
| Hero | CSS enter. H1 estático. CountUp em 12 meses e 6 meses |
| Thesis | Reveal título e copy |
| Cycles | Reveal head. Stagger punch nos dois ciclos |
| Journey | Reveal head. Stagger punch nos 4 passos |
| FAQ | Reveal títulos. Accordion `whileInView` |
| Cta | Reveal bloco |

### INB Care (`/care`)

| Seção | Motion |
| --- | --- |
| Hero | CSS enter. H1 estático. Mockup `Reveal` |
| Thesis | Reveal título e copy |
| Fronts | Reveal head. Stagger punch nas 3 frentes |
| Journey | Reveal head. Stagger punch nos passos |
| Manager | Reveal copy/figura. Stagger punch nos fatos |
| Roles | Reveal. Stagger punch nos três papéis |
| FAQ | Reveal títulos. Accordion `whileInView` |
| Cta | Reveal bloco |

### Contato e Nutrition

H1 visível no first paint. Eyebrow em CSS enter. Copy/form/CTA em Reveal. Contato: Stagger punch nos detalhes.

## Receitas

**Seção nova abaixo da dobra**

```tsx
<Section>
  <Container>
    <Reveal>título + lede</Reveal>
    <Stagger className={styles.grid}>
      {items.map((item) => (
        <StaggerItem key={item.id} punch>
          <article className={styles.card}>…</article>
        </StaggerItem>
      ))}
    </Stagger>
  </Container>
</Section>
```

**Número institucional**

```tsx
<p className={styles.value}>
  <CountUp to={value} delay={0.16} />
  <span className={styles.unit}>{unit}</span>
</p>
```

**Não fazer**

```tsx
// ❌ H1 do hero com motion opacity 0
<motion.h1 initial={{ opacity: 0 }}>…

// ❌ timing solto
transition={{ duration: 0.35, ease: "easeOut" }}

// ❌ GSAP / Lenis / Lottie

// ❌ AnimateNumber (pago)

// ❌ transformar Server Component inteiro em client só para um reveal

// ❌ marquee nos biomarcadores

// ❌ Motion transform no card orbital (já usa style.left/top/transform CSS)
```

## Acessibilidade e fallback

- Provider: `MotionConfig reducedMotion="user"`
- CSS: `prefers-reduced-motion` zera animation/transition; `[data-reveal]` volta a `opacity: 1; transform: none`
- Noscript no `layout` com a mesma regra `[data-reveal]`
- CountUp respeita `useReducedMotion()`
- Órbita de Serviços não roda se `useReducedMotion()`
- `html { scroll-behavior: smooth }` vira `auto` no reduced

## Checklist ao mudar motion

1. O token já existe? Se não, criar em `motion.ts` **e** `tokens.css`.
2. Dá para usar `Reveal` / `Stagger` / `CountUp` em vez de `motion.div` solto?
3. A seção continua Server Component?
4. H1 do hero segue visível sem JS?
5. Reduced-motion e noscript ainda mostram o conteúdo?
6. Só `transform`/`opacity`, exceto o palco orbital já existente?
7. Conferir no browser: entrada, hover, número, e a rota/seção vizinha que compartilha o padrão.
