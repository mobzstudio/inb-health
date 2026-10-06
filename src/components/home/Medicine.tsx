import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import styles from "./Medicine.module.css";

const left = [
  "Visita médica anual com check-up genérico",
  "Marcadores básicos comparados ao range laboratorial",
  "Intervenção quando a doença já está instalada",
  "Foco em estender lifespan — não em preservar capacidade",
];

const right = [
  "Monitoramento longitudinal de 50+ biomarcadores",
  "Comparação contra faixa ótima funcional — não só range",
  "Intervenção precoce sobre risco — não sobre sintoma",
  "Foco em healthspan — anos vividos com plena capacidade",
];

export function Medicine() {
  return (
    <Section tone="sand" padding="lg" border="goldSoft">
      <Container>
        <Reveal className={styles.head}>
          <div>
            <Eyebrow tracking="wide">Outlive · O paradigma que opera por trás</Eyebrow>
            <Heading size="h2">
              Existe uma medicina que espera.
              <br />
              <Accent tone="dark">A nossa, antecipa.</Accent>
            </Heading>
          </div>
          <div className={styles.aside}>
            <Text>
              Peter Attia, em <strong>Outlive</strong>, distingue dois modos de exercer a medicina. O INB Health opera
              integralmente no segundo — proativo, individualizado, ancorado em dados longitudinais. Não tratamos
              doença, preservamos capacidade.
            </Text>
          </div>
        </Reveal>
        <Stagger className={styles.compare}>
          <StaggerItem punch>
            <article className={cn(styles.card, styles.light)}>
              <div className={styles.cardHead}>
                <Eyebrow tone="muted" tracking="wide">
                  Medicina 2.0
                </Eyebrow>
                <span className={styles.icon}>○</span>
              </div>
              <h3>Trata doenças.</h3>
              <Text size="sm">Espera o diagnóstico clínico. Atua sobre sintomas e sobrevivência.</Text>
              <ul className={styles.list}>
                {left.map((item, i) => (
                  <li key={item}>
                    <span className={styles.dash} />
                    <span className={styles.num}>0{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
          <StaggerItem punch>
            <article className={cn(styles.card, styles.dark)}>
              <div className={styles.cardHead}>
                <Eyebrow tracking="wide">Medicina 3.0</Eyebrow>
                <span className={styles.icon}>✦</span>
              </div>
              <h3>Preserva capacidades.</h3>
              <Text size="sm" tone="onDark">
                Atua décadas antes da doença. Otimiza saúde funcional ao longo da vida.
              </Text>
              <ul className={styles.list}>
                {right.map((item, i) => (
                  <li key={item}>
                    <span className={styles.dash} />
                    <span className={styles.num}>0{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        </Stagger>
        <Reveal className={styles.ctaRow}>
          <p>
            Dra. Juliana Nogueira de Brito conduz a clínica nesse paradigma desde a fundação. A tecnologia INB torna
            esse padrão <Accent tone="dark">contínuo, mensurável e acessível</Accent> para o executivo brasileiro.
          </p>
          <Button href="#metodo" variant="outlineBrown" icon="arrow">
            Entender Medicina 3.0
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
