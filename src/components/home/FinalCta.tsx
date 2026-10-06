import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section id="comecar" className={styles.cta}>
      <div className={styles.bg} />
      <Reveal className={styles.inner}>
        <Heading size="h1" align="center">
          Você sabe o que seus
          <br />
          biomarcadores estão
          <br />
          dizendo agora?
        </Heading>
        <Button href="/contato" variant="gold" size="lg" icon="arrow">
          Falar com a clínica
        </Button>
        <p className={styles.contact}>
          Prefere conversar antes? contato@inbhealth.com.br · +55 21 97917-1314
        </p>
      </Reveal>
    </section>
  );
}
