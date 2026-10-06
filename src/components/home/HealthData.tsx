import { PhotoCluster } from "./PhotoCluster";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./HealthData.module.css";

type Metric =
  | { source: string; copy: string; a: number; connector: string; b: number }
  | { source: string; copy: string; to: number; suffix: string };

const metrics: Metric[] = [
  {
    copy: "Brasileiros acima de 40 com pelo menos 1 desequilíbrio hormonal",
    source: "Endocrinologia preventiva",
    a: 7,
    connector: " em ",
    b: 10,
  },
  {
    copy: 'Adultos clinicamente "saudáveis" com ao menos 1 biomarcador sub-ótimo',
    source: "Biomarcadores INB Health",
    a: 1,
    connector: " em ",
    b: 4,
  },
  {
    copy: "Dos membros melhoram seu LifeScore nos primeiros 12 meses*",
    source: "Coorte INB Health",
    to: 80,
    suffix: "%",
  },
];

export function HealthData() {
  return (
    <Section tone="cream" padding="lg" border="top">
      <Container>
        <Reveal className={styles.intro}>
          <Eyebrow align="center">Você se sente bem. E os seus dados?</Eyebrow>
          <Heading size="h2" align="center">
            Não estar doente não é o mesmo que estar saudável.
          </Heading>
          <Text tone="muted" align="center" className={styles.lede}>
            Você pode se sentir bem e ainda assim ter marcadores silenciosos que estão acelerando seu envelhecimento. A
            maioria das pessoas que descobre isso no INB Health achava que estava saudável.
          </Text>
        </Reveal>
        <PhotoCluster />
        <Stagger className={styles.metrics} delay={0.08}>
          {metrics.map((metric) => (
            <StaggerItem as="article" key={metric.source} className={styles.metric} punch>
              <p className={styles.value}>
                {"to" in metric ? (
                  <CountUp to={metric.to} suffix={metric.suffix} delay={0.12} />
                ) : (
                  <>
                    <CountUp to={metric.a} delay={0.12} />
                    {metric.connector}
                    <CountUp to={metric.b} delay={0.2} />
                  </>
                )}
              </p>
              <Text align="center">{metric.copy}</Text>
              <Eyebrow align="center" tone="muted">
                {metric.source}
              </Eyebrow>
            </StaggerItem>
          ))}
        </Stagger>
        <p className={styles.note}>
          *Estimativa baseada em coortes internas iniciais. LifeScore mede qualidade de vida, risco cardiometabólico e
          idade biológica. Referências disponíveis em <a href="#ciencia">Ciência</a>.
        </p>
      </Container>
    </Section>
  );
}
