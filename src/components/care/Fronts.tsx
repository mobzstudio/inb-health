import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { fronts } from "@/content/care";
import styles from "./Fronts.module.css";

export function Fronts() {
  return (
    <Section id="frentes" tone="cream" padding="md">
      <Container>
        <Reveal className={styles.head}>
          <div>
            <Eyebrow>{fronts.eyebrow}</Eyebrow>
            <Heading size="h2">
              {fronts.title}
              <br />
              {fronts.titleLine2}
            </Heading>
          </div>
          <Text tone="muted">{fronts.lead}</Text>
        </Reveal>
        <Stagger className={styles.grid}>
          {fronts.items.map((item) => (
            <StaggerItem key={item.n} punch>
              <article className={styles.card}>
                <img src={item.icon} alt="" width={24} height={24} />
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
