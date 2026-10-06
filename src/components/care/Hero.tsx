import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Text } from "@/components/ui/Text";
import { hero } from "@/content/care";
import enter from "@/styles/hero-enter.module.css";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.lead}>
            <div className={`${styles.kicker} ${enter.enter}`}>
              <Eyebrow withLine>{hero.eyebrow}</Eyebrow>
              <p className={styles.pill}>
                <img src="/icons/hero-specialists.svg" alt="" width={12} height={12} />
                {hero.pill}
              </p>
            </div>
            <Heading as="h1" size="h2" className={styles.title}>
              {hero.title}
              <br />
              <Accent tone="dark">{hero.accent}</Accent>
            </Heading>
            <Text tone="muted" className={enter.delay1}>
              {hero.lead}
            </Text>
            <div className={`${styles.actions} ${enter.delay2}`}>
              <Button href={hero.primaryCta.href} variant="gold" size="lg" icon="arrow">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outlineGold">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className={`${styles.note} ${enter.delay2}`}>{hero.note}</p>
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
        <div className={styles.visual}>
          <div className={styles.wash} aria-hidden />
          <Reveal className={styles.stage}>
            <figure>
              <div className={styles.device}>
                <img src={hero.mockup.src} alt={hero.mockup.alt} width={360} height={800} />
              </div>
              <figcaption className={styles.caption}>{hero.mockup.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
