import { Reveal } from "@/components/motion";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { faq } from "@/content/care";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <Section id="faq" tone="sand" padding="md">
      <Container width="faq" className={styles.inner}>
        <Reveal>
          <Eyebrow align="center">{faq.eyebrow}</Eyebrow>
          <Heading size="h2" align="center">
            {faq.title}
          </Heading>
        </Reveal>
        <Accordion items={faq.items} className={styles.list} />
      </Container>
    </Section>
  );
}
