import { CountUp } from "@/components/motion";
import { Reveal } from "@/components/motion";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";
import enter from "@/styles/hero-enter.module.css";
import styles from "./Hero.module.css";

const stats = [
  { label: "52.0101317-3", value: "CRM-RJ" },
  { label: "Anos de prática clínica", to: 15, suffix: "+" },
  { label: "Do INB Health", value: "Fundadora" },
];

const anchors = [
  { href: "#filosofia", label: "Filosofia" },
  { href: "#carta", label: "Carta" },
  { href: "#formacao", label: "Formação" },
  { href: "#publicacoes", label: "Publicações" },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.lead}>
            <div className={`${styles.kicker} ${enter.enter}`}>
              <Eyebrow withLine>Fundadora · Diretora médica</Eyebrow>
              <p className={styles.pill}>
                <img src="/icons/hero-specialists.svg" alt="" width={12} height={12} />
                Construído por especialistas clínicos
              </p>
            </div>
            <Heading as="h1" size="h1">
              Dra. Juliana
              <br />
              <Accent tone="dark">Cardoso Nogueira</Accent>
            </Heading>
            <Text tone="muted" className={enter.delay1}>
              A medicina que eu precisei — agora ao seu alcance. Quinze anos de prática clínica, um diagnóstico próprio
              que mudou tudo, e um instituto construído para que outras pessoas não dependam de sorte.
            </Text>
          </div>
          <nav className={`${styles.anchors} ${enter.delay2}`} aria-label="Nesta página">
            <img src="/icons/hero-anchors.svg" alt="" width={14} height={14} />
            <p>
              {anchors.map((anchor, index) => (
                <span key={anchor.href}>
                  {index > 0 ? <span aria-hidden> · </span> : null}
                  <a href={anchor.href}>{anchor.label}</a>
                </span>
              ))}
            </p>
          </nav>
        </div>
        <div className={styles.portrait}>
          <div className={styles.wash} aria-hidden />
          <Reveal className={styles.photo}>
            <img
              src="/images/dra-juliana-hero.png"
              alt="Dra. Juliana Cardoso Nogueira, fundadora e diretora médica do INB Health"
            />
          </Reveal>
        </div>
        <div className={`${styles.rail} ${enter.delay3}`}>
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
