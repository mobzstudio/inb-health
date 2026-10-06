import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { thesis } from "@/content/club";
import styles from "./Thesis.module.css";

export function Thesis() {
  return (
    <Section id="conceito" tone="ivory" padding="lg" border="top">
      <Container width="narrow">
        <div className={styles.intro}>
          <Reveal>
            <Eyebrow>{thesis.eyebrow}</Eyebrow>
            <Heading size="h2">
              {thesis.title}
              <br />
              <Accent tone="dark">{thesis.accent}</Accent>
            </Heading>
          </Reveal>
          <Reveal delay={0.08} className={styles.copy}>
            <Text tone="muted">{thesis.lead}</Text>
            <Text size="sm" tone="muted">
              {thesis.body}
            </Text>
            <p className={styles.disclaimer}>{thesis.disclaimer}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
