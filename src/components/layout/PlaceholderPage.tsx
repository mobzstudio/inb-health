import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import enter from "@/styles/hero-enter.module.css";
import styles from "./PlaceholderPage.module.css";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
};

export function PlaceholderPage({ eyebrow, title, accent, copy }: PlaceholderPageProps) {
  return (
    <main>
      <Section tone="sand" padding="lg">
        <Container>
          <div className={styles.inner}>
            <Eyebrow className={enter.enter}>{eyebrow}</Eyebrow>
            <Heading as="h1" size="h1">
              {title} <Accent tone="dark">{accent}</Accent>
            </Heading>
            <Reveal delay={0.08}>
              <Text tone="muted">{copy}</Text>
              <div className={styles.actions}>
                <Button href="/contato" variant="gold" size="lg" icon="arrow">
                  Falar com a clínica
                </Button>
                <Button href="/dra-juliana" variant="outlineGold" size="lg">
                  Conhecer a fundadora
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
