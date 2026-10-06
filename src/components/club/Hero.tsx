import { Button } from "@/components/ui/Button";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";
import { CountUp } from "@/components/motion";
import { hero } from "@/content/club";
import enter from "@/styles/hero-enter.module.css";
import styles from "./Hero.module.css";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { value };
  return { to: Number(match[1]), suffix: match[2] };
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <img src={hero.image.src} alt={hero.image.alt} width={1920} height={1080} fetchPriority="high" />
      </div>
      <div className={styles.wash} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={`${styles.kicker} ${enter.enter}`}>
            <Eyebrow withLine>{hero.eyebrow}</Eyebrow>
            <p className={styles.pill}>
              <img src="/icons/hero-specialists.svg" alt="" width={12} height={12} />
              {hero.pill}
            </p>
          </div>
          <Heading as="h1" size="h1">
            {hero.title}
            <br />
            <Accent>{hero.accent}</Accent>
          </Heading>
          <Text tone="muted" className={enter.delay1}>
            {hero.lead}
          </Text>
          <div className={`${styles.actions} ${enter.delay2}`}>
            <Button href={hero.primaryCta.href} variant="gold" size="lg" icon="arrow">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outlineGold" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className={`${styles.note} ${enter.delay2}`}>{hero.note}</p>
          <div className={`${styles.rail} ${enter.delay3}`}>
            {hero.stats.map((stat) => {
              const parsed = parseStat(stat.value);
              return (
                <div key={stat.label} className={styles.stat}>
                  <p className={styles.value}>
                    {parsed.to != null ? (
                      <CountUp to={parsed.to} suffix={parsed.suffix} delay={0.28} />
                    ) : (
                      parsed.value
                    )}
                  </p>
                  <p className={styles.label}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <nav className={`${styles.anchors} ${enter.delay3}`} aria-label="Nesta página">
          <img src="/icons/hero-anchors.svg" alt="" width={14} height={14} />
          <p>
            {hero.anchors.map((anchor, index) => (
              <span key={anchor.href}>
                {index > 0 ? <span aria-hidden> · </span> : null}
                <a href={anchor.href}>{anchor.label}</a>
              </span>
            ))}
          </p>
        </nav>
      </div>
    </section>
  );
}
