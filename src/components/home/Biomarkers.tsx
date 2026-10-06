import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { spring } from "@/lib/motion";
import styles from "./Biomarkers.module.css";

const markers = [
  { img: "/images/marker-1.png", title: "Hormônios", copy: "Equilíbrio hormonal, vitalidade e função reprodutiva." },
  { img: "/images/marker-2.png", title: "Nutrientes Críticos", copy: "Vitaminas, minerais e cofatores essenciais." },
  { img: "/images/marker-3.png", title: "Saúde Metabólica", copy: "Glicose, insulina e função tireoidiana." },
  { img: "/images/marker-4.png", title: "Saúde dos Órgãos", copy: "Fígado, rim e marcadores inflamatórios." },
  { img: "/images/marker-5.png", title: "Saúde Cardiovascular", copy: "Colesterol, ApoB e risco cardíaco." },
  { img: "/images/marker-6.png", title: "Outros Fatores de Risco", copy: "Marcadores sistêmicos e de longevidade." },
];

export function Biomarkers() {
  return (
    <Section id="marcadores" tone="cream" padding="md">
      <Container>
        <Reveal className={styles.intro}>
          <Eyebrow align="center">Biomarcadores que medimos</Eyebrow>
          <Heading size="h2" align="center">
            Como você se sente está ligado diretamente aos seus <Accent tone="dark">biomarcadores.</Accent>
          </Heading>
          <Text tone="muted" align="center">
            Medimos os 50+ marcadores que mais importam, distribuídos em seis categorias clínicas essenciais.
          </Text>
        </Reveal>
      </Container>
      <Stagger className={styles.scroller} gap={0.1} aria-label="Categorias de biomarcadores">
        {markers.map((marker) => (
          <StaggerItem
            as="article"
            key={marker.title}
            className={styles.card}
            punch
            whileHover={{ y: -14, scale: 1.04, rotate: 0, transition: spring.soft }}
          >
            <img src={marker.img} alt="" />
            <h3>{marker.title}</h3>
            <Text size="sm" tone="muted">
              {marker.copy}
            </Text>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
