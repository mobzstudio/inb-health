import { Reveal } from "@/components/motion";
import { Accent } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import styles from "./Quote.module.css";

export function Quote() {
  return (
    <Section tone="dark" padding="lg">
      <Reveal className={styles.inner}>
        <Eyebrow align="center">Frase que define o método</Eyebrow>
        <blockquote>
          Saúde não é o que se <Accent>mede uma vez</Accent>.
          <br />
          É o que se <Accent>acompanha por décadas</Accent>.
        </blockquote>
        <p className={styles.attr}>— Dra. Juliana Cardoso Nogueira · Diretora médica, INB Health</p>
      </Reveal>
    </Section>
  );
}
