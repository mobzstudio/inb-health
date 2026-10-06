import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { contact } from "@/lib/nav";
import styles from "./Cta.module.css";

export function Cta() {
  return (
    <Section tone="dark" padding="lg">
      <Reveal className={styles.inner}>
        <Eyebrow align="center">Próximo passo</Eyebrow>
        <Heading size="h2" align="center" tone="onDark">
          Quer ser cuidado(a) pelo
          <br />
          <Accent>método da Dra. Juliana?</Accent>
        </Heading>
        <p className={styles.lead}>
          Toda associação INB Health começa com uma consulta clínica direta com a Dra. Juliana ou com um(a) médico(a)
          treinado(a) sob o método dela.
        </p>
        <div className={styles.actions}>
          <Button href="/contato" variant="gold" size="lg" icon="arrow">
            Começar associação
          </Button>
          <Button href="/club" variant="outlineLight" size="lg">
            Ver INB Club semestral & anual
          </Button>
        </div>
        <p className={styles.contact}>
          Prefere conversar antes? <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phone}
        </p>
      </Reveal>
    </Section>
  );
}
