import { contact } from "@/lib/nav";

export const seo = {
  title: "INB Care — Concierge clínico em breve | INB Health",
  description:
    "Concierge clínico do INB: exames, especialistas e agenda pelo Lifehealth Manager. App em desenvolvimento. Fale com a clínica.",
};

export const hero = {
  eyebrow: "INB Care · Em breve",
  pill: "App em desenvolvimento",
  title: "Sua saúde",
  accent: "terá um gerente.",
  lead: "Marcar exame, achar especialista e manter a agenda em ordem não deveria competir com o seu plano. O INB Care será o concierge do INB: um Lifehealth Manager que resolve a logística para o método continuar no tempo.",
  note: "O que segue é o modelo de operação. O app ainda não foi publicado.",
  primaryCta: { label: "Falar com a clínica", href: "/contato" },
  secondaryCta: { label: "Ver INB Club", href: "/club" },
  mockup: {
    src: "/images/care-app-preview.png",
    alt: "Prévia do aplicativo INB com a tela Lifehealth Manager, ainda em desenvolvimento.",
    caption: "Prévia do app · em desenvolvimento",
  },
  anchors: [
    { href: "#conceito", label: "Conceito" },
    { href: "#frentes", label: "Frentes" },
    { href: "#metodo", label: "Método" },
    { href: "#gerente", label: "Gerente" },
    { href: "#papeis", label: "Papéis" },
    { href: "#faq", label: "FAQ" },
  ],
  stats: [
    { value: "Em breve", label: "Status do app" },
    { value: "WhatsApp", label: "Canal do gerente" },
    { value: "8h–18h", label: "Segunda a sexta" },
  ],
};

export const thesis = {
  eyebrow: "Conceito",
  title: "O método não termina",
  accent: "na consulta.",
  lead: "Consulta, painel e reteste só sustentam trajetória se a semana seguinte acontecer. Alguém precisa pedir o exame, encaixar o especialista e devolver data. Esse alguém, no INB, será o Care.",
  body: "Hoje essa logística cai no membro, na secretária ou no esquecimento. O INB Care existe para tirar a execução do colo de quem deveria estar no plano — não na fila do laboratório. Concierge clínico, com prontuário único e supervisão da equipe.",
  disclaimer: "As informações desta página são educativas e não substituem avaliação médica.",
};

export const fronts = {
  eyebrow: "O que o Care resolve",
  title: "Três frentes.",
  titleLine2: "Uma coordenação.",
  lead: "A tela do Lifehealth Manager nasce com três pedidos. Não é um diretório. É a equipe do INB executando o que o seu plano clínico já pediu.",
  items: [
    {
      n: "01",
      icon: "/icons/step-1.svg",
      title: "Exames",
      copy: "A coleta deixa de ser uma tarefa sua. Pedimos o exame, encontramos o laboratório conveniente e devolvemos data e local.",
    },
    {
      n: "02",
      icon: "/icons/front-consultas.svg",
      title: "Consultas",
      copy: "O especialista que o plano pede — cardiologia, nutrologia ou outra frente. Encontramos a agenda na rede parceira e marcamos.",
    },
    {
      n: "03",
      icon: "/icons/front-rede.svg",
      title: "Rede",
      copy: "Não é busca em lista. É indicação a partir do seu prontuário, dentro da rede de especialistas parceiros do INB.",
    },
  ],
};

export const journey = {
  eyebrow: "Jornada do pedido",
  title: "Assim o Care vai operar.",
  lead: "Um pedido, uma orquestração, um comparecimento, o prontuário no mesmo lugar. Quatro passos para o intervalo entre consultas deixar de ser um vazio.",
  items: [
    {
      n: "01",
      title: "Você solicita",
      copy: "Pelo app, quando publicado, ou pelo canal do Lifehealth Manager. Diz o que o plano pede: exame, consulta ou indicação.",
    },
    {
      n: "02",
      title: "A equipe orquestra",
      copy: "Laboratório, especialista parceiro, data e logística. A coordenação é da equipe INB, não de um robô solto.",
    },
    {
      n: "03",
      title: "Você comparece",
      copy: "Recebe o encaixe. Comparece. O tempo que iria para telefone e planilha volta para o plano.",
    },
    {
      n: "04",
      title: "O prontuário segue",
      copy: "O que foi marcado entra no mesmo acompanhamento clínico. Sem fragmentar o caso entre agendas.",
    },
  ],
};

export const manager = {
  eyebrow: "O gerente",
  title: "Um gerente para a sua agenda.",
  subtitle: "Lifehealth Manager é o nome desse papel no app.",
  body: "Não é a MAIA. Não é um assistente de inteligência artificial. É concierge: gente da operação clínica do INB, falando com você num canal só, para executar o que o método já decidiu. No produto, esse canal é o WhatsApp, em horário comercial. Quando o app entrar, o mesmo papel vive dentro do painel.",
  cta: { label: "Falar com a clínica", href: "/contato" },
  mockup: {
    src: "/images/care-app-hand.png",
    alt: "Mão segurando um celular com a tela do Lifehealth Manager, prévia em desenvolvimento.",
    caption: "Prévia do app · em desenvolvimento",
  },
  facts: [
    { n: "01", label: "Papel", value: "Lifehealth Manager" },
    { n: "02", label: "Canal previsto", value: "WhatsApp" },
    { n: "03", label: "Horário previsto", value: "Segunda a sexta, 8h–18h" },
    {
      n: "04",
      label: "Fora desse horário",
      value: "Não é plantão. Urgência clínica segue o protocolo da equipe.",
    },
  ],
};

export const roles = {
  eyebrow: "Arquitetura do INB",
  title: "Care não é MAIA.",
  accent: "Nem Club.",
  lead: "Três nomes, três funções. Misturá-los gera expectativa errada. O Club associa. A MAIA lê. O Care executa a agenda. Os três servem o mesmo prontuário.",
  note: "Nenhuma destas frentes de app está publicada. A clínica, sim: a conversa começa em Contato.",
  items: [
    {
      n: "01",
      title: "INB Club",
      copy: "A associação. Consulta, painel, plano e reteste. O método em si, em página própria, também em lançamento.",
      href: "/club",
    },
    {
      n: "02",
      title: "INB Care",
      copy: "O concierge. Exames, consultas e rede, orquestrados pelo Lifehealth Manager. Esta página.",
      href: null,
    },
    {
      n: "03",
      title: "MAIA",
      copy: "Inteligência clínica no painel, supervisionada. Interpreta dados. Não marca laboratório.",
      href: "/#maia",
    },
  ],
};

export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "Antes do lançamento.",
  items: [
    {
      question: "O INB Care já está no ar?",
      answer:
        "Ainda não. Concierge e Lifehealth Manager estão em desenvolvimento. Esta página descreve o modelo. Enquanto isso, a conversa é com a clínica.",
    },
    {
      question: "Care e MAIA são a mesma coisa?",
      answer: "Não. A MAIA interpreta o painel. O Care agenda exames, consultas e indicação na rede. Um lê. O outro executa.",
    },
    {
      question: "Preciso ser membro do INB Club?",
      answer:
        "O Care está desenhado para quem já está no método — painel, plano e reteste. A regra de elegibilidade entra no lançamento.",
    },
    {
      question: "Como vou pedir um exame?",
      answer:
        "No lançamento, pelo app e pelo canal do Lifehealth Manager. Até lá, fale com a clínica. Não há botão de pedido nesta página.",
    },
    {
      question: "Funciona de madrugada e no fim de semana?",
      answer:
        "O canal previsto é segunda a sexta, das 8h às 18h. Não é plantão 24 horas e não se confunde com a MAIA.",
    },
    {
      question: "O Care substitui a consulta?",
      answer:
        "Não. Consulta, plano e reteste continuam com a equipe médica. O Care resolve a logística para esse método acontecer.",
    },
    {
      question: "É um robô no WhatsApp?",
      answer: "Não. O gerente é operação clínica da equipe INB, num canal só.",
    },
  ],
};

export const cta = {
  eyebrow: "Próximo passo",
  title: "A conversa pode",
  accent: "começar agora.",
  lead: "O app ainda não entrou. A clínica, sim. Se o concierge faz sentido para a sua trajetória, fale com a equipe. O Care nasce para quem já quer o método — não para quem quer um atalho.",
  primaryCta: { label: "Falar com a clínica", href: "/contato" },
  secondaryCta: { label: "Ver INB Club", href: "/club" },
  contact: `Prefere conversar antes? ${contact.email} · ${contact.phone}`,
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: seo.title,
      description: seo.description,
      url: "https://inbhealth.com.br/care",
      inLanguage: "pt-BR",
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "MedicalOrganization",
      name: "INB Health",
      legalName: contact.legalName,
      email: contact.email,
      telephone: contact.phone,
      taxID: contact.cnpj,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida das Américas, 3500",
        addressLocality: "Rio de Janeiro",
        addressRegion: "RJ",
        postalCode: "22640-102",
        addressCountry: "BR",
      },
      founder: {
        "@type": "Person",
        name: contact.founder,
        identifier: contact.crm,
      },
    },
  ],
};
