"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { dur, ease, spring } from "@/lib/motion";
import styles from "./Trajectories.module.css";

const cases = [
  {
    label: "I · Risco cardiovascular",
    marker: "ApoB",
    delta: "-56 mg/dL",
    person: "Executivo · 54 anos",
    quote: "“ApoB nunca medido em 12 anos de check-up tradicional.”",
    copy: "Painel de partida revelou ApoB 124 mg/dL com LDL aparentemente normal. Plano integrado (estilo de vida + estatina em dose mínima) reduziu o marcador a 68 em 9 meses — validado por reteste programado.",
    variation: "-56 mg/dL",
    period: "9 meses",
    chart: "Curva longitudinal · ApoB (mg/dL)",
  },
  {
    label: "II · Idade biológica",
    marker: "PhenoAge",
    delta: "-7 anos",
    person: "Profissional liberal · 47 anos",
    quote: "“A idade no documento e a idade no sangue eram histórias diferentes.”",
    copy: "PhenoAge 7 anos acima da cronológica no painel de entrada. Intervenção sobre inflamação, sono e composição corporal reverteu a curva no reteste de 12 meses.",
    variation: "-7 anos",
    period: "12 meses",
    chart: "Curva longitudinal · PhenoAge",
  },
  {
    label: "III · Performance cardiorrespiratória",
    marker: "VO₂máx",
    delta: "+15 mL/kg/min",
    person: "Atleta amadora · 41 anos",
    quote: "“Treino não faltava. Faltava o dado que organizava o treino.”",
    copy: "VO₂máx subótimo apesar de volume alto. Plano de zonas e recuperação, com reteste trimestral, elevou o marcador em 15 mL/kg/min.",
    variation: "+15 mL/kg/min",
    period: "10 meses",
    chart: "Curva longitudinal · VO₂máx",
  },
];

function parseMetric(raw: string) {
  const match = raw.match(/^([+-]?)(\d+)\s*(.*)$/);
  if (!match) return null;
  return { prefix: match[1], to: Number(match[2]), suffix: match[3] ? ` ${match[3]}` : match[3] };
}

export function Trajectories() {
  const [active, setActive] = useState(0);
  const current = cases[active];
  const variation = parseMetric(current.variation);

  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.head}>
          <div>
            <Eyebrow tracking="wide">Trajetórias clínicas · Prova editorial</Eyebrow>
            <Heading size="h2" tone="onDark">
              Não é promessa. <Accent>É curva auditável.</Accent>
            </Heading>
          </div>
          <div className={styles.aside}>
            <Text tone="onDark">
              Três pacientes anonimizados. Três marcadores. Três trajetórias reais — medidas, retestadas, registradas no
              prontuário INB. Sem fotos, sem antes-e-depois. Só dado clínico.
            </Text>
          </div>
        </Reveal>
        <Stagger className={styles.tabs} gap={0.1}>
          {cases.map((item, index) => {
            const metric = parseMetric(item.delta);
            return (
              <StaggerItem
                as="button"
                key={item.marker}
                type="button"
                className={cn(styles.tab, index === active && styles.tabActive)}
                punch
                whileHover={{ y: -6, transition: spring.soft }}
                onClick={() => setActive(index)}
              >
                <Eyebrow>{item.label}</Eyebrow>
                <div className={styles.tabTop}>
                  <Heading as="p" size="h3" tone="onDark">
                    {item.marker}
                  </Heading>
                  <span className={styles.delta}>
                    {metric ? (
                      <CountUp to={metric.to} prefix={metric.prefix} suffix={metric.suffix} delay={0.2} />
                    ) : (
                      item.delta
                    )}
                  </span>
                </div>
                <Text size="sm" tone="onDark">
                  {item.person}
                </Text>
              </StaggerItem>
            );
          })}
        </Stagger>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.marker}
            className={styles.panel}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: dur.fast, ease: ease.out }}
          >
            <div>
              <Eyebrow>{current.label}</Eyebrow>
              <p className={styles.quote}>{current.quote}</p>
              <Text tone="onDark">{current.copy}</Text>
              <div className={styles.meta}>
                <div>
                  <Eyebrow tone="muted">Variação</Eyebrow>
                  <p>
                    {variation ? (
                      <>
                        <Accent>
                          <CountUp key={current.marker} to={variation.to} prefix={variation.prefix} />
                        </Accent>
                        {variation.suffix}
                      </>
                    ) : (
                      current.variation
                    )}
                  </p>
                </div>
                <div>
                  <Eyebrow tone="muted">Período</Eyebrow>
                  <p>{current.period}</p>
                </div>
              </div>
            </div>
            <div className={styles.chart}>
              <p className={styles.chartHead}>{current.chart}</p>
              <div className={styles.plot}>
                <img src="/images/chart-area.svg" alt="Curva longitudinal do marcador" />
              </div>
              <div className={styles.axis}>
                <span>Mês 0</span>
                <span>Mês 3</span>
                <span>Mês 6</span>
                <span>Mês 9</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className={styles.foot}>
          <p>
            Casos anonimizados com autorização ética para uso institucional. Não constituem promessa de resultado
            individual nem substituem avaliação médica presencial. Resultados variam conforme aderência, biologia e
            histórico clínico.
          </p>
          <Button href="#programa" variant="outlineGold" icon="arrow">
            Entender o método
          </Button>
        </div>
      </Container>
    </section>
  );
}
