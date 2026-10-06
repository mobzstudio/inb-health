import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./Method.module.css";

const steps = [
  {
    n: "01",
    icon: "/icons/step-1.svg",
    title: "Coleta Domiciliar",
    copy: "A cada 3-6 meses, um profissional realiza sua coleta de sangue em casa ou em nossa unidade, medindo 50+ biomarcadores-chave.",
  },
  {
    n: "02",
    icon: "/icons/step-2.svg",
    title: "Consulta 1:1",
    copy: "Consulta clínica presencial em ambiente reservado, no tempo que o seu caso exige, para interpretar seus resultados, definir metas e construir seu plano individualizado.",
  },
  {
    n: "03",
    icon: "/icons/step-3.svg",
    title: "Plano Individualizado",
    copy: "Plano clínico com recomendações de estilo de vida, suplementação e medicamentos quando clinicamente indicados.",
  },
  {
    n: "04",
    icon: "/icons/step-4.svg",
    title: "Retestar & Refinar",
    copy: "Acompanhamento contínuo. Retestamos seus biomarcadores para ajustar e otimizar seu plano individualizado ao longo do tempo.",
  },
];

export function Method() {
  return (
    <Section id="programa" tone="cream" padding="md" className={styles.wrap}>
      <div className={styles.bg} />
      <Container className={styles.inner}>
        <Reveal className={styles.head}>
          <div>
            <Eyebrow>Jornada clínica</Eyebrow>
            <Heading size="h2">Uma metodologia. Quatro passos.</Heading>
          </div>
          <Text tone="muted">
            Cada passo foi desenhado para transformar dados em decisões clínicas e decisões em resultados mensuráveis.
          </Text>
        </Reveal>
        <Stagger className={styles.grid}>
          {steps.map((step) => (
            <StaggerItem key={step.n} punch>
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.index}>{step.n}</span>
                  <img src={step.icon} alt="" width={24} height={24} />
                </div>
                <h3>{step.title}</h3>
                <Text size="sm" tone="muted">
                  {step.copy}
                </Text>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
