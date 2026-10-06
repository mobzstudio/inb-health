import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./Indicators.module.css";

const items = [
  { n: "01", value: 60, unit: "min", label: "Por consulta · sempre", copy: "Anamnese conduzida pela própria Dra. Juliana. Sem delegação, sem cronômetro." },
  { n: "02", value: 52, unit: "marcadores", label: "Por ciclo trimestral", copy: "ApoB · Lp(a) · hsCRP · HOMA-IR · hormônios completos · vitamina D · ferritina · painel inflamatório." },
  { n: "03", value: 7, unit: "dias", label: "Até o plano clínico", copy: "Plano individualizado entregue em até 7 dias após o reteste completo — escrito, com critério de sucesso." },
  { n: "04", value: 50, unit: "pacientes", label: "Por médico · ano · máximo", copy: "Limite institucional para preservar continuidade clínica real. Acima disso, vira fila." },
  { n: "05", value: 94, unit: "%", label: "Retesta em 90 dias", copy: "Reteste programado é parte do plano — não opção. A trajetória só existe quando se mede a segunda vez." },
  { n: "06", value: 100, unit: "%", label: "LGPD em cada camada", copy: "Criptografia AES-256 em repouso e trânsito. Auditoria por interação. Sem venda de dados, em nenhum cenário." },
];

export function Indicators() {
  return (
    <Section tone="dark" padding="lg">
      <Container>
        <Reveal className={styles.head}>
          <div>
            <Eyebrow tracking="wide">Indicadores institucionais INB</Eyebrow>
            <Heading size="h2" tone="onDark">
              Como gerimos seu <Accent>patrimônio de saúde.</Accent>
            </Heading>
          </div>
          <Text tone="onDark">
            Os números abaixo descrevem como a clínica opera — tempo, escala, compromisso. São o regime institucional
            sob o qual seu patrimônio de saúde é tratado: nenhum paciente é exibido individualmente, e nenhuma promessa
            é feita sobre resultados que dependem de você.
          </Text>
        </Reveal>
        <Stagger className={styles.grid}>
          {items.map((item) => (
            <StaggerItem as="article" key={item.n} className={styles.card} punch>
              <Eyebrow>{item.n}</Eyebrow>
              <p className={styles.value}>
                <CountUp to={item.value} delay={0.16} />
                <span className={styles.unit}>{item.unit}</span>
              </p>
              <p className={styles.label}>{item.label}</p>
              <Text size="sm" tone="onDark" className={styles.copy}>
                {item.copy}
              </Text>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
