import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { contact } from "@/lib/nav";
import { cta } from "@/content/club";
import styles from "./Cta.module.css";

export function Cta() {
  return (
    <Section id="proximo" tone="dark" padding="lg">
      <Reveal className={styles.inner}>
        <Eyebrow align="center">{cta.eyebrow}</Eyebrow>
        <Heading size="h2" align="center" tone="onDark">
          {cta.title}
          <br />
          <Accent>{cta.accent}</Accent>
        </Heading>
        <p className={styles.lead}>{cta.lead}</p>
        <div className={styles.actions}>
          <Button href={cta.primaryCta.href} variant="gold" size="lg" icon="arrow">
            {cta.primaryCta.label}
          </Button>
          <Button href={cta.secondaryCta.href} variant="outlineLight" size="lg">
            {cta.secondaryCta.label}
          </Button>
        </div>
        <p className={styles.contact}>
          Prefere conversar antes? <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phone}
        </p>
      </Reveal>
    </Section>
  );
}
