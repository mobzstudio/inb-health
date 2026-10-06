import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { cycles } from "@/content/club";
import styles from "./Cycles.module.css";

function PlanCard({
  plan,
  featured,
}: {
  plan: typeof cycles.featured;
  featured?: boolean;
}) {
  return (
    <article className={cn(styles.card, featured ? styles.dark : styles.light)}>
      <div className={styles.cardHead}>
        <Eyebrow tracking="wide" tone={featured ? "gold" : "muted"}>
          {plan.kicker}
        </Eyebrow>
        <span className={styles.mark} aria-hidden>
          {featured ? "✦" : "○"}
        </span>
      </div>
      <h3>{plan.title}</h3>
      <Text size="sm" tone={featured ? "onDark" : "muted"}>
        {plan.subtitle}
      </Text>
      <ul className={styles.list}>
        {plan.items.map((item, index) => (
          <li key={item}>
            <span className={styles.dash} />
            <span className={styles.num}>0{index + 1}</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Cycles() {
  return (
    <Section id="ciclos" tone="cream" padding="lg">
      <Container>
        <Reveal className={styles.head}>
          <div>
            <Eyebrow tracking="wide">{cycles.eyebrow}</Eyebrow>
            <Heading size="h2">
              {cycles.title}
              <br />
              <Accent tone="dark">{cycles.accent}</Accent>
            </Heading>
          </div>
          <div className={styles.aside}>
            <Text>{cycles.lead}</Text>
          </div>
        </Reveal>
        <Stagger className={styles.compare} amount={0.05}>
          <StaggerItem punch>
            <PlanCard plan={cycles.featured} featured />
          </StaggerItem>
          <StaggerItem punch>
            <PlanCard plan={cycles.secondary} />
          </StaggerItem>
        </Stagger>
        <Reveal className={styles.ctaRow}>
          <p>{cycles.note}</p>
          <Button href="/contato" variant="outlineBrown" icon="arrow">
            Falar com a clínica
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
