import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { thesis } from "@/content/care";
import styles from "./Thesis.module.css";

export function Thesis() {
  return (
    <Section id="conceito" tone="dark" padding="lg">
      <Container width="narrow">
        <div className={styles.intro}>
          <Reveal>
            <Eyebrow tone="onDark">{thesis.eyebrow}</Eyebrow>
            <Heading size="h2" tone="onDark">
              {thesis.title}
              <br />
              <Accent>{thesis.accent}</Accent>
            </Heading>
          </Reveal>
          <Reveal delay={0.08} className={styles.copy}>
            <Text tone="onDark">{thesis.lead}</Text>
            <Text size="sm" tone="onDark">
              {thesis.body}
            </Text>
            <p className={styles.disclaimer}>{thesis.disclaimer}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
