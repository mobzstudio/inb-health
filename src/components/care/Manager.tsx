import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { manager } from "@/content/care";
import styles from "./Manager.module.css";

export function Manager() {
  return (
    <Section id="gerente" tone="ivory" padding="lg" border="top">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal className={styles.intro}>
              <Eyebrow>{manager.eyebrow}</Eyebrow>
              <Heading size="h2">{manager.title}</Heading>
              <p className={styles.subtitle}>{manager.subtitle}</p>
              <Text tone="muted">{manager.body}</Text>
            </Reveal>
            <Stagger className={styles.facts}>
              {manager.facts.map((fact) => (
                <StaggerItem key={fact.n} className={styles.fact} punch>
                  <span className={styles.index}>{fact.n}</span>
                  <div>
                    <p className={styles.label}>{fact.label}</p>
                    <p className={styles.value}>{fact.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.12}>
              <TextLink href={manager.cta.href}>{manager.cta.label}</TextLink>
            </Reveal>
          </div>
          <Reveal delay={0.08} className={styles.figure}>
            <figure>
              <img src={manager.mockup.src} alt={manager.mockup.alt} width={1152} height={1448} />
            </figure>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
