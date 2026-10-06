import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./Markers.module.css";

const markers = [
  { title: "Idade biológica", to: 7, prefix: "−", suffix: " anos", badge: 5, note: "vs. 45 cronológica · 38 biológica" },
  { title: "ApoB", to: 65, suffix: " mg/dL", badge: 5, note: "faixa ótima · < 80 mg/dL" },
  { title: "hsCRP", to: 0.4, decimals: 1, suffix: " mg/L", badge: 15, note: "inflamação ótima · < 1,0" },
  { title: "HbA1c", to: 4.9, decimals: 1, suffix: "%", badge: 8, note: "faixa ótima · < 5,4" },
  { title: "VO2máx", to: 42, suffix: " ml/kg/min", badge: 10, note: "mulheres 45+" },
  { title: "Vitamina D", to: 62, suffix: " ng/mL", badge: 25, note: "faixa ótima · 50–80" },
];

const meta = [
  { label: "Último reteste", value: "Jan · 2026" },
  { label: "Próxima coleta", value: "Jul · 2026" },
  { label: "Marcadores", value: "52 · painel ampliado" },
  { label: "Validação", value: "Auto-supervisionada" },
];

export function Markers() {
  return (
    <Section tone="dark" padding="lg">
      <Container width="narrow">
        <Reveal className={styles.intro}>
          <div className={styles.kicker}>
            <Eyebrow>Eats her own dog food</Eyebrow>
            <span className={styles.pill}>Painel INB · autoaplicado</span>
          </div>
          <Heading size="h2" tone="onDark">
            Os biomarcadores da Dra. Juliana.
          </Heading>
          <Text tone="onDark">
            Seis números da diretora médica. Medidos no mesmo painel que o INB Health oferece a cada associado — e
            acompanhados com a mesma disciplina que ela exige dos pacientes.
          </Text>
        </Reveal>
        <Stagger className={styles.grid}>
          {markers.map((marker) => (
            <StaggerItem as="article" key={marker.title} className={styles.card} punch>
              <p className={styles.title}>{marker.title}</p>
              <p className={styles.value}>
                <CountUp
                  to={marker.to}
                  prefix={marker.prefix}
                  suffix={marker.suffix}
                  decimals={marker.decimals}
                  delay={0.16}
                />
              </p>
              <p className={styles.badge}>
                Top <CountUp to={marker.badge} suffix="%" delay={0.2} />
              </p>
              <p className={styles.note}>{marker.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.12} className={styles.meta}>
          {meta.map((item) => (
            <div key={item.label}>
              <p className={styles.metaLabel}>{item.label}</p>
              <p className={styles.metaValue}>{item.value}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
