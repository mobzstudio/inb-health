import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { roles } from "@/content/care";
import styles from "./Roles.module.css";

export function Roles() {
  return (
    <Section id="papeis" tone="cream" padding="md">
      <Container>
        <Reveal>
          <Eyebrow>{roles.eyebrow}</Eyebrow>
          <Heading size="h2">
            {roles.title}
            <br />
            <Accent tone="dark">{roles.accent}</Accent>
          </Heading>
          <Text tone="muted" className={styles.lead}>
            {roles.lead}
          </Text>
        </Reveal>
        <Stagger className={styles.grid}>
          {roles.items.map((item) => {
            const body = (
              <>
                <span className={styles.index}>{item.n}</span>
                <h3>{item.title}</h3>
                <Text size="sm" tone="subtle">
                  {item.copy}
                </Text>
              </>
            );

            if (item.href) {
              return (
                <StaggerItem key={item.n} punch>
                  <a href={item.href} className={cn(styles.card, styles.cardLink)}>
                    {body}
                  </a>
                </StaggerItem>
              );
            }

            return (
              <StaggerItem key={item.n} punch>
                <article className={cn(styles.card, styles.current)} aria-current="page">
                  {body}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal delay={0.08}>
          <p className={styles.note}>{roles.note}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
