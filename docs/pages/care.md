# INB Care — layout + copy para implementação

**Para:** chat Front-end (Alemão Forlan) · `4447febf-96ec-4b24-84ba-f677d3356ae5`  
**De:** UX/UI · copy aprovada, layout especificado  
**Rota:** `/care` (substituir o `PlaceholderPage`)  
**Modo:** `/pagina` — fidelidade ao sistema existente, consistência > criatividade.

---

## 0. Prompt curto (colar no chat de front-end)

Implemente a página **INB Care** em `/care` seguindo **este arquivo à risca**: `docs/pages/care.md`.

Regras duras:

- Não recrie Header, Footer nem Player. Não invente fonte, cor, radius ou ícone.
- Nunca chame o INB de “instituto”. Sempre **INB** (razão social só no footer, intocado).
- Reuse tokens em `src/styles/tokens.css` e componentes em `src/components/ui` + `src/components/motion`.
- H1 do hero visível no first paint — sem `opacity: 0` via JS.
- Tom de **em breve**: o app não está no ar. Não simular produto vivo.
- Mockup: `public/images/care-app-preview.png` (tela Lifehealth Manager do Figma).
- Verificar no browser em `/care` (desktop e 390) antes de encerrar.

Molde visual: página `src/app/dra-juliana` + cards de `home/Method` e `home/Pillars` + FAQ da Home + CTA de `dra-juliana/Cta`.

---

## 1. Intenção

Página de lançamento do **concierge clínico** e do **Lifehealth Manager**. Explica como vai funcionar. CTA único real: conversa com a clínica.

Não é Club. Não é MAIA. Não é Nutrition.

---

## 2. Arquivos

```
src/app/care/page.tsx
src/content/care.ts
src/components/care/Hero.tsx + Hero.module.css
src/components/care/Thesis.tsx + Thesis.module.css
src/components/care/Fronts.tsx + Fronts.module.css
src/components/care/Journey.tsx + Journey.module.css
src/components/care/Manager.tsx + Manager.module.css
src/components/care/Roles.tsx + Roles.module.css
src/components/care/Faq.tsx + Faq.module.css   (pode reusar home/Faq.module.css)
src/components/care/Cta.tsx                    (clone estrutural de dra-juliana/Cta)
public/images/care-app-preview.png             (já no repo)
```

Conteúdo **só** em `src/content/care.ts`. JSX sem strings longas.

Não criar novos primitivos de UI. Não mexer em Header/Footer/nav.

---

## 3. Ritmo de fundos

| # | Seção | `Section tone` | Padding | id |
|---|---|---|---|---|
| 1 | Hero | `sand` (section própria, como Dra. Juliana — não o `Section` wrapper se o hero for full-bleed de 900px) | hero 900px | — |
| 2 | Tese | `ivory` + `border="top"` | `lg` | `conceito` |
| 3 | Frentes | `cream` | `md` | `frentes` |
| 4 | Método | `sand` | `md` | `metodo` |
| 5 | Lifehealth Manager | `ivory` + `border="top"` | `lg` | `gerente` |
| 6 | Três papéis | `cream` | `md` | `papeis` |
| 7 | FAQ | `sand` | `md` | `faq` |
| 8 | CTA | `dark` `padding="lg"` | `lg` | `proximo` |

Uma seção escura só. Header/Footer globais já envolvem.

---

## 4. Wireframes e spec visual

Canvas de referência: **1920**. Container: `--container-max` 1400, padding `--container-pad`. Tipografia: Roboto Serif 300/400. Botões radius 0. Cards radius `--radius-sm` (4px) **ou** o padrão já usado na Home (cards Method/Pillars são sem radius aparente, gap 1px — **seguir Method/Pillars, não inventar card arredondado**).

### 4.1 Hero — clonar `dra-juliana/Hero`

**Layout idêntico** a `src/components/dra-juliana/Hero.module.css`:

```
grid: 437px | 480px | 232px
gap: 48px
height: 900px
bg: var(--color-bg-sand)
```

```
[ eyebrow + pílula ]
[ H1 2 linhas      ]     [ wash ouro     ]     [ Em breve     ]
[ lead             ]     [ telefone/app  ]     [ WhatsApp     ]
[ CTA + CTA        ]     [ caption       ]     [ 8h–18h       ]
[ âncoras          ]
```

- Coluna 1 (`copy`): `min-height: 595px`, `justify-content: space-between`, gap 80px — igual Dra. Juliana.
- **Não** envolver o H1 em `Reveal`. Copy kicker + H1 + lead + CTAs pintam no first paint. `Reveal` só no mockup e no trilho, como a foto da Dra.
- Pílula: reusar `.pill` da Dra. Juliana (`border: 1px solid var(--color-border-gold-max)`, radius 32px, tracking 0.32em, `--color-accent-dark`). Texto: `App em desenvolvimento`. Sem ícone genérico de coração/folha; se precisar de ícone, reusar `/icons/hero-specialists.svg`.
- CTAs em row, gap 16px: primário `variant="gold" size="lg" icon="arrow"` · secundário `variant="outlineGold" size="lg"` (fundo claro — mesmo par da PlaceholderPage).
- Âncoras: mesmo bloco `.anchors` da Dra. Juliana + `/icons/hero-anchors.svg`.

**Mockup (coluna 2):** no lugar do retrato.

- Mesmo `.wash` dourado da Dra. Juliana.
- O objeto é o PNG `care-app-preview.png` (360×800), altura visual ~640–720px, centrado na coluna 480.
- Frame: 1px `var(--color-accent-soft)`, radius `--radius-sm`, fundo `--color-bg`. **Não** desenhar iPhone com notch, glassmorphism ou sombra grande.
- Caption abaixo, 10–11px, tracking uppercase, `--color-accent-dark`: `Prévia do app · em desenvolvimento`.
- Alt: `Prévia do aplicativo INB com a tela Lifehealth Manager, ainda em desenvolvimento.`

**Trilho (coluna 3):** clone `.rail` / `.stat` da Dra. Juliana.

Responsivo: os mesmos breakpoints de `Hero.module.css` da Dra. Juliana (1280 / 1100). Abaixo de 1100: 1 coluna, mockup 640px de altura, rail em row.

### 4.2 Tese — clonar intro de `dra-juliana/Principles`

`Container width="narrow"` (ou o max que Principles usa).

```
grid 5fr | 6fr, gap 64px, align end
[ Eyebrow + H2 duas linhas ]   [ lead ]
```

Sem cards nesta seção. Sem antítese extra além do H2.

### 4.3 Frentes — clonar `home/Method` em 3 colunas

Cabeçalho: flex space-between, título à esquerda, lead à direita (max 384px) — igual Method.

Grid: `repeat(3, 1fr)`, `gap: 1px`, fundo `var(--color-divider)`, cards `background: var(--color-bg-cream)` (section cream → card um tom acima: usar `--color-bg` ivory nos cards, como Pillars). Padding 40px, min-height ~280px.

Topo do card: índice `01` (`letter-spacing: 0.3em`, `--color-accent-strong`) à esquerda. **Sem ícone colorido de saúde.** Sem calendar/activity/search do Figma (ruído de biblioteca).

Hover: o de Method (`translateY(-2px)` + `--shadow-gold-ring`, CSS `--duration-fast` / `--ease-out`). `Stagger` + `StaggerItem punch`.

Abaixo de 900px: 1 coluna.

### 4.4 Método / jornada — clonar `home/Method` em 4 colunas

Mesma pele dos quatro passos da Home. Sem ícones SVG novos — só numeração ouro, como o índice do Method (os ícones da Home existem; **não copiar** step-1…step-4, porque o significado é outro). Só número + título + texto.

Opcional: textura `method-bg.png` com overlay cream, igual Method. Se usar, copiar o `.wrap` / `.bg` do Method. Se não, fundo sand limpo. Preferir **sand limpo** para não repetir a mesma foto de fundo.

### 4.5 Lifehealth Manager — split 50/50

Como o `.grid` de `home/Founder` (texto | objeto), sem o badge oval.

```
[ eyebrow, H2, subtítulo, corpo, lista de 4 fatos, text link ]
[ mockup maior do mesmo PNG + caption ]
```

Lista de fatos: fileira com número ouro `01`–`04` ou só label/value empilhados, borda inferior 1px `rgba(201,184,154,0.5)` — mesmo ritmo do trilho do hero, na horizontal do texto.

Não colocar botão de WhatsApp clicável (o canal ainda não é o destino público). CTA da seção: `TextLink` → `/contato` (“Falar com a clínica”).

Mockup: mesma foto, maior (~400px de largura útil). Mesma moldura 1px. Selo/caption `Em desenvolvimento`.

Abaixo de 1100px: 1 coluna, imagem depois do texto.

### 4.6 Três papéis — clonar `home/Pillars` (3 cards)

Grid 3 colunas, gap 1px, cards ivory, padding 40px.

- Card **INB Care** (o atual): borda 1px `var(--color-border-gold-strong)` para marcar “você está aqui”. Não usar fundo dark.
- Club e MAIA são `<a>`. Care é `<article>` (página atual), sem href falso.

Hover nos links: mesmo Pillars.

Ícones: **não** usar os pillar-*.svg da Home (significados errados). Só índice `01 02 03`.

### 4.7 FAQ — clonar `home/Faq`

`Container width="faq"`, eyebrow + H2 centrados, `Accordion` existente. **Sem** o botão “Ler todas as respostas”.

Pergunta 20/28 (já é o Accordion). Resposta corpo.

### 4.8 CTA — clonar `dra-juliana/Cta`

Mesmo `Cta.module.css` (pode importar o CSS da Dra. Juliana ou duplicar o módulo — preferir **importar o componente visual copiando o CSS**, não acoplar o texto da Dra.). Estrutura: eyebrow centro, H2 centro com Accent, lead, dois botões, linha de contato.

Botão primário `gold` + `icon="arrow"`. Secundário `outlineLight`.

---

## 5. Copy final (pt-BR)

Regra: **INB**, nunca “instituto”.

### SEO (`page.tsx` metadata)

- `title`: `INB Care — Concierge clínico em breve | INB Health`
- `description`: `Concierge clínico do INB: exames, especialistas e agenda pelo Lifehealth Manager. App em desenvolvimento. Fale com a clínica.`
- JSON-LD: `WebPage` + `FAQPage` (as 7 perguntas) + `MedicalOrganization` com dados de `src/lib/nav.ts` (`contact`). Sem inventar CRM.

### Hero

- Eyebrow: `INB Care · Em breve`
- Pílula: `App em desenvolvimento`
- H1: `Sua saúde` / quebra / Accent dark `terá um gerente.` (duas linhas que cabem na coluna 437px; “Sua saúde terá” quebrava em três no 72px.)
- Lead: `Marcar exame, achar especialista e manter a agenda em ordem não deveria competir com o seu plano. O INB Care será o concierge do INB: um Lifehealth Manager que resolve a logística para o método continuar no tempo.`
- Microcopy (11px, muted, abaixo dos CTAs ou no lugar discreto do copy): `O que segue é o modelo de operação. O app ainda não foi publicado.`
- CTA primário: `Falar com a clínica` → `/contato`
- CTA secundário: `Ver INB Club` → `/club`
- Âncoras: Conceito `#conceito` · Frentes `#frentes` · Método `#metodo` · Gerente `#gerente` · Papéis `#papeis` · FAQ `#faq`
- Trilho:

  | value | label |
  |---|---|
  | Em breve | Status do app |
  | WhatsApp | Canal do gerente |
  | 8h–18h | Segunda a sexta |

### Tese

- Eyebrow: `Conceito`
- H2: `O método não termina` / `na consulta.` (segunda linha Accent dark)
- Lead: `Consulta, painel e reteste só sustentam trajetória se a semana seguinte acontecer. Alguém precisa pedir o exame, encaixar o especialista e devolver data. Esse alguém, no INB, será o Care.`
- Corpo (abaixo do lead, na coluna direita, depois do lead, size sm muted): `Hoje essa logística cai no membro, na secretária ou no esquecimento. O INB Care existe para tirar a execução do colo de quem deveria estar no plano — não na fila do laboratório. Concierge clínico, com prontuário único e supervisão da equipe.`
- Linha educativa (micro, abaixo): `As informações desta página são educativas e não substituem avaliação médica.`

### Frentes

- Eyebrow: `O que o Care resolve`
- H2: `Três frentes. Uma coordenação.`
- Lead (coluna direita): `A tela do Lifehealth Manager nasce com três pedidos. Não é um diretório. É a equipe do INB executando o que o seu plano clínico já pediu.`

| n | title | copy |
|---|---|---|
| 01 | Exames | A coleta deixa de ser uma tarefa sua. Pedimos o exame, encontramos o laboratório conveniente e devolvemos data e local. |
| 02 | Consultas | O especialista que o plano pede — cardiologia, nutrologia ou outra frente. Encontramos a agenda na rede parceira e marcamos. |
| 03 | Rede | Não é busca em lista. É indicação a partir do seu prontuário, dentro da rede de especialistas parceiros do INB. |

### Método

- Eyebrow: `Jornada do pedido`
- H2: `Assim o Care vai operar.`
- Lead: `Um pedido, uma orquestração, um comparecimento, o prontuário no mesmo lugar. Quatro passos para o intervalo entre consultas deixar de ser um vazio.`

| n | title | copy |
|---|---|---|
| 01 | Você solicita | Pelo app, quando publicado, ou pelo canal do Lifehealth Manager. Diz o que o plano pede: exame, consulta ou indicação. |
| 02 | A equipe orquestra | Laboratório, especialista parceiro, data e logística. A coordenação é da equipe INB, não de um robô solto. |
| 03 | Você comparece | Recebe o encaixe. Comparece. O tempo que iria para telefone e planilha volta para o plano. |
| 04 | O prontuário segue | O que foi marcado entra no mesmo acompanhamento clínico. Sem fragmentar o caso entre agendas. |

### Lifehealth Manager

- Eyebrow: `O gerente`
- H2: `Um gerente para a sua agenda.`
- Subtítulo (gold-dark, size ~20/28, weight 300): `Lifehealth Manager é o nome desse papel no app.`
- Corpo: `Não é a MAIA. Não é um assistente de inteligência artificial. É concierge: gente da operação clínica do INB, falando com você num canal só, para executar o que o método já decidiu. No produto, esse canal é o WhatsApp, em horário comercial. Quando o app entrar, o mesmo papel vive dentro do painel.`
- Fatos:

  | label | value |
  |---|---|
  | Papel | Lifehealth Manager |
  | Canal previsto | WhatsApp |
  | Horário previsto | Segunda a sexta, 8h–18h |
  | Fora desse horário | Não é plantão. Urgência clínica segue o protocolo da equipe. |

- TextLink: `Falar com a clínica` → `/contato`
- Caption da imagem: `Prévia do app · em desenvolvimento`
- Alt: `Tela do Lifehealth Manager com pedidos de exames, consultas e médicos parceiros, prévia em desenvolvimento.`

### Papéis

- Eyebrow: `Arquitetura do INB`
- H2: `Care não é MAIA.` / Accent `Nem Club.`
- Lead: `Três nomes, três funções. Misturá-los gera expectativa errada. O Club associa. A MAIA lê. O Care executa a agenda. Os três servem o mesmo prontuário.`
- Micro abaixo do grid: `Nenhuma destas frentes de app está publicada. A clínica, sim: a conversa começa em Contato.`

| n | title | copy | href |
|---|---|---|---|
| 01 | INB Club | A associação. Consulta, painel, plano e reteste. O método em si, em página própria, também em lançamento. | `/club` |
| 02 | INB Care | O concierge. Exames, consultas e rede, orquestrados pelo Lifehealth Manager. Esta página. | — |
| 03 | MAIA | Inteligência clínica no painel, supervisionada. Interpreta dados. Não marca laboratório. | `/#maia` |

### FAQ

- Eyebrow: `Perguntas frequentes`
- H2: `Antes do lançamento.`

| question | answer |
|---|---|
| O INB Care já está no ar? | Ainda não. Concierge e Lifehealth Manager estão em desenvolvimento. Esta página descreve o modelo. Enquanto isso, a conversa é com a clínica. |
| Care e MAIA são a mesma coisa? | Não. A MAIA interpreta o painel. O Care agenda exames, consultas e indicação na rede. Um lê. O outro executa. |
| Preciso ser membro do INB Club? | O Care está desenhado para quem já está no método — painel, plano e reteste. A regra de elegibilidade entra no lançamento. |
| Como vou pedir um exame? | No lançamento, pelo app e pelo canal do Lifehealth Manager. Até lá, fale com a clínica. Não há botão de pedido nesta página. |
| Funciona de madrugada e no fim de semana? | O canal previsto é segunda a sexta, das 8h às 18h. Não é plantão 24 horas e não se confunde com a MAIA. |
| O Care substitui a consulta? | Não. Consulta, plano e reteste continuam com a equipe médica. O Care resolve a logística para esse método acontecer. |
| É um robô no WhatsApp? | Não. O gerente é operação clínica da equipe INB, num canal só. |

### CTA

- Eyebrow: `Próximo passo`
- H2: `A conversa pode` / Accent `começar agora.`
- Lead: `O app ainda não entrou. A clínica, sim. Se o concierge faz sentido para a sua trajetória, fale com a equipe. O Care nasce para quem já quer o método — não para quem quer um atalho.`
- Primário: `Falar com a clínica` → `/contato`
- Secundário: `Ver INB Club` → `/club`
- Micro: `Prefere conversar antes? {email} · {phone}` — usar `contact` de `src/lib/nav.ts`.

---

## 6. Motion

Ler `docs/motion.md`. Usar só `@/components/motion`.

| Bloco | Receita |
|---|---|
| H1 hero | Estático. Sem Reveal. |
| Mockup + rail do hero | `Reveal` / `Reveal delay={0.12}` |
| Títulos de seção | `Reveal` |
| Grids de cards | `Stagger` + `StaggerItem punch` |
| FAQ | Accordion já anima |
| CTA | `Reveal` |
| Hover de card | CSS `--duration-fast` / `--ease-out` — não Motion `transform` no mesmo nó |

`data-reveal` em todo island. Sem GSAP/Lottie/números mágicos.

---

## 7. Acessibilidade

- 1 H1. H2 por seção. Sem pular nível.
- Pílula e captions: `text-transform` no CSS, copy em caixa normal.
- Contraste: eyebrows no default do componente (já gold). Texto pequeno nunca em `--inb-gold` `#A48147` sobre areia.
- Alvos ≥ 44px nos botões e âncoras.
- Foco visível global (não remover).
- `lang` já é `pt-BR` no layout.
- Imagens de UI com alt descritivo; wash/ornamento `alt=""`.

---

## 8. Anti-padrões

- Palavra **instituto** referindo-se ao INB.
- “Já disponível”, “abra o app”, botão WhatsApp funcional, 24/7 nesta página.
- “Rede de excelência”, “assistente de IA”, “revolucionário”, exclamação, emoji.
- Ícones Lucide/calendar/heart do frame mobile.
- Radius de botão, sombra difusa, Inter, azul/verde.
- Recriar Header/Footer.
- Copiar textos da Home ao pé da letra.
- Hex solto no JSX.

---

## 9. QA do implementador

- [ ] `/care` não é mais PlaceholderPage
- [ ] Nav “INB Care” marca ativo (`isActivePath` já existe)
- [ ] 1920 / 1440 / 1024 / 768 / 390
- [ ] H1 visível sem JS
- [ ] Uma seção dark
- [ ] Mockup com caption de prévia
- [ ] CTA chega em `/contato` e `/club`
- [ ] Zero “instituto” no conteúdo desta página
- [ ] Lighthouse a11y sem regressão óbvia
- [ ] Conferir no browser, não só screenshot
