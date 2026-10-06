import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { journey } from "@/content/care";
import styles from "./Journey.module.css";

export function Journey() {
  return (
    <Section id="metodo" tone="sand" padding="md">
      <Container>
        <Reveal className={styles.head}>
          <div>
            <Eyebrow>{journey.eyebrow}</Eyebrow>
            <Heading size="h2">{journey.title}</Heading>
          </div>
          <Text tone="muted">{journey.lead}</Text>
        </Reveal>
        <Stagger className={styles.grid}>
          {journey.items.map((item) => (
            <StaggerItem key={item.n} punch>
              <article className={styles.card}>
                <span className={styles.index}>{item.n}</span>
                <h3>{item.title}</h3>
                <Text size="sm" tone="muted">
                  {item.copy}
                </Text>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
