import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./Press.module.css";

const items = [
  {
    year: "2025",
    outlet: "Veja Saúde",
    title: "“O painel ampliado é o futuro do check-up” — entrevista com Dra. Juliana Nogueira",
  },
  {
    year: "2024",
    outlet: "Valor Econômico",
    title: "Medicina de precisão no Brasil ganha tração — perfil do INB Health",
  },
  {
    year: "2024",
    outlet: "GQ Brasil",
    title: "As médicas que estão reescrevendo o cuidado preventivo no país",
  },
];

export function Press() {
  return (
    <Section id="publicacoes" tone="sand" padding="lg">
      <Container width="narrow">
        <Reveal className={styles.header}>
          <div>
            <Eyebrow>Imprensa & aparições recentes</Eyebrow>
            <Heading size="h2">
              O que escrevem sobre a
              <br />
              <Accent tone="dark">medicina que ela pratica.</Accent>
            </Heading>
          </div>
          <TextLink href="/contato">Sala de imprensa completa</TextLink>
        </Reveal>
        <Stagger as="ul" className={styles.list}>
          {items.map((item) => (
            <StaggerItem as="li" key={`${item.outlet}-${item.year}`} className={styles.item} punch>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.outlet}>{item.outlet}</span>
              <p>{item.title}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
