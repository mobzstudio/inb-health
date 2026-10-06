"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { interval } from "@/lib/motion";
import styles from "./Services.module.css";

const services = [
  {
    label: "I · Infusão IV",
    title: "Soroterapia",
    copy: "Hidratação clínica, micronutrientes e antioxidantes em protocolos individualizados — supervisão médica em todas as sessões.",
  },
  {
    label: "II · Aplicação clínica",
    title: "Injetáveis",
    copy: "Vitaminas intramusculares, bioestimuladores e medicamentos prescritos — indicação técnica, dose calculada, acompanhamento longitudinal.",
  },
  {
    label: "III · Biostimulação",
    title: "Sculptra",
    copy: "Ácido poli-L-láctico para indução de colágeno — resultado progressivo, natural, em sessões protocoladas pela equipe médica.",
  },
  {
    label: "IV · Equipe núcleo",
    title: "Especialidades médicas",
    copy: "Clínica Geral · Nutrologia · Nutricionista · Cardiologia — atendimento integrado entre especialidades sob o mesmo prontuário.",
  },
  {
    label: "V · Cuidado coordenado",
    title: "Concierge médico",
    copy: "Coordenação clínica dedicada 24/7 — exames, agendamentos, segunda opinião e logística orquestrados pela equipe INB.",
  },
  {
    label: "VI · Estética médica",
    title: "Estética médica",
    copy: "Procedimentos clínicos com critério médico — o que se vê por fora é consequência do que se cuida por dentro.",
  },
];

function wrappedOffset(index: number, active: number, length: number) {
  let offset = index - active;
  const wrap = Math.ceil(length / 2);
  if (offset > wrap) offset -= length;
  if (offset < -wrap) offset += length;
  return offset;
}

function cardStyle(offset: number): React.CSSProperties {
  if (offset === 0) {
    return {
      width: 340,
      height: 453,
      left: "50%",
      top: 0,
      transform: "translateX(-50%) rotate(0deg)",
      opacity: 1,
      zIndex: 5,
    };
  }

  const abs = Math.abs(offset);
  const side = offset < 0 ? -1 : 1;
  const hidden = abs >= 3;

  return {
    width: abs === 1 ? 265 : 187,
    height: abs === 1 ? 353 : 249,
    left: `calc(50% + ${side * (abs === 1 ? 210 : hidden ? 560 : 400)}px)`,
    top: abs === 1 ? 72 : 211,
    transform: `translateX(-50%) rotate(${side * (abs === 1 ? 4 : 8)}deg)`,
    opacity: hidden ? 0 : abs === 1 ? 0.75 : 0.4,
    zIndex: hidden ? 0 : 4 - abs,
    pointerEvents: hidden ? "none" : "auto",
  };
}

export function Services() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const layout = useMemo(() => {
    return services.map((service, index) => {
      const offset = wrappedOffset(index, active, services.length);
      return {
        ...service,
        index,
        offset,
        className: offset === 0 ? styles.active : styles.card,
        style: cardStyle(offset),
      };
    });
  }, [active]);

  useEffect(() => {
    if (reduced || paused) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((current) => (current + 1) % services.length);
    }, interval.orbit);

    return () => window.clearInterval(id);
  }, [reduced, paused, active]);

  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <Eyebrow tracking="wide">Serviços clínicos · Em órbita</Eyebrow>
          <Heading size="h2" tone="onDark">
            Seis frentes que se
            <br />
            <Accent>conectam.</Accent>
          </Heading>
          <Text tone="onDark" className={styles.lede}>
            Cada serviço é entregue dentro do mesmo método clínico longitudinal — indicação técnica, prontuário unificado,
            supervisão direta da equipe INB Health.
          </Text>
        </Reveal>
        <Reveal
          className={styles.stage}
          y={56}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          {layout.map((card) => (
            <button
              key={card.title}
              type="button"
              className={cn(styles.card, card.offset === 0 && styles.active)}
              style={card.style}
              tabIndex={Math.abs(card.offset) >= 3 ? -1 : 0}
              aria-hidden={Math.abs(card.offset) >= 3}
              onClick={() => setActive(card.index)}
            >
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </button>
          ))}
        </Reveal>
        <div className={styles.dots}>
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              className={cn(styles.dot, index === active && styles.dotActive)}
              aria-label={service.title}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
