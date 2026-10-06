import { Button } from "@/components/ui/Button";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";
import { CountUp } from "@/components/motion";
import styles from "./Hero.module.css";

const stats = [
  { label: "Biomarcadores medidos", to: 50, suffix: "+" },
  { label: "Consulta clínica", value: "Presencial" },
  { label: "Reteste contínuo", to: 4, suffix: "x/ano" },
  { label: "Coleta em casa", value: "Domiciliar" },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <img src="/images/hero-mark.svg" alt="" className={styles.mark} />
      <div className={styles.content}>
        <div className={styles.copy}>
          <Eyebrow withLine tone="gold" className={styles.enter}>
            Inteligência médica · método · confiança longitudinal
          </Eyebrow>
          <Heading as="h1" size="h1" tone="onDark">
            Inteligência médica para gestão da <Accent>saúde ao longo da vida.</Accent>
          </Heading>
          <Text tone="onDarkStrong" className={styles.enterDelay1}>
            Sua próxima década já está sendo decidida pelos seus biomarcadores de hoje. O INB Health acompanha o que
            importa — antes que o sintoma chegue.
          </Text>
          <div className={`${styles.actions} ${styles.enterDelay2}`}>
            <Button href="#programa" variant="primary" size="lg" icon="arrow">
              Conhecer o método
            </Button>
            <Button href="/contato" variant="outline" size="lg">
              Falar com a clínica
            </Button>
          </div>
        </div>
        <div className={`${styles.stats} ${styles.enterDelay3}`}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <p className={styles.value}>
                {stat.to != null ? <CountUp to={stat.to} suffix={stat.suffix} delay={0.28} /> : stat.value}
              </p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
