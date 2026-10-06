import { Reveal } from "@/components/motion";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";
import styles from "./Commitment.module.css";

export function Commitment() {
  return (
    <section className={styles.section}>
      <img src="/images/mark-dark.svg" alt="" className={styles.markLeft} />
      <img src="/images/mark-dark.svg" alt="" className={styles.markRight} />
      <div className={styles.inner}>
        <Eyebrow withLine>Nosso compromisso</Eyebrow>
        <Reveal>
          <Heading size="display" tone="onDark" className={styles.title}>
            Vidas reais.
            <br />
            <Accent>Corpos reais.</Accent>
          </Heading>
        </Reveal>
        <div className={styles.split}>
          <Reveal delay={0.08}>
            <Heading as="p" size="h2" tone="onDark">
              Muito mais do que <Accent tone="gold">estética</Accent>. É sobre <Accent>saúde</Accent>.
            </Heading>
          </Reveal>
          <Reveal delay={0.16} className={styles.aside}>
            <Text tone="onDark">
              O INB Health existe para cuidar de quem você é por dentro — porque o que se vê por fora é apenas
              consequência. Aqui, cada plano individualizado nasce dos seus dados, do seu corpo e da sua história.
            </Text>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
