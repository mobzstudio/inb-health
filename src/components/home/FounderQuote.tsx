import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./FounderQuote.module.css";

export function FounderQuote() {
  return (
    <Section tone="dark" padding="lg">
      <div className={styles.layout}>
        <Reveal>
          <img src="/images/founder.jpg" alt="Dra. Juliana Cardoso Nogueira" className={styles.photo} />
        </Reveal>
        <Reveal delay={0.08}>
          <Eyebrow withLine>Por que o INB Health existe</Eyebrow>
          <p className={styles.quote}>
            “Eu fui a paciente que precisou de um painel ampliado para descobrir o que o check-up tradicional não
            enxergava. Construí o INB Health para que ninguém mais dependesse de sorte para ter acesso a inteligência
            médica.”
          </p>
          <div className={styles.meta}>
            <div>
              <Eyebrow>Fundadora e diretora médica</Eyebrow>
              <Text size="lg" tone="onDarkStrong">
                Dra. Juliana Cardoso Nogueira
              </Text>
              <Text size="sm" tone="onDark">
                CRM-RJ 52.0101317-3 · Diretora médica e responsável técnica
              </Text>
            </div>
            <TextLink href="/dra-juliana#carta" tone="onDark">
              Ler a carta da fundadora
            </TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
