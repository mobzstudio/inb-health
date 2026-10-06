import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./Founder.module.css";

const points = [
  "Cada protocolo passa pela minha supervisão direta",
  "Equipe multidisciplinar acompanha o seu caso por anos",
  "Integração com seus exames anteriores e novos retestes",
  "Plataforma segura, privativa, em conformidade com a LGPD",
];

export function Founder() {
  return (
    <Section id="fundadora" tone="white" padding="md">
      <Container>
        <div className={styles.grid}>
          <div>
            <Reveal>
              <Eyebrow>Quem conduz o método</Eyebrow>
              <Heading size="h2">
                A medicina que eu <Accent tone="dark">precisei</Accent>, agora ao seu alcance.
              </Heading>
              <blockquote className={styles.quote}>
                <Text size="quote">
                  “Fui médica subdiagnosticada aos 38, com exames ‘normais’ e um painel ampliado que revelou ApoB
                  elevado, resistência insulínica e ferritina baixa. Fundei o INB Health para que outras pessoas não
                  dependessem de sorte para ter acesso a inteligência médica.”
                </Text>
              </blockquote>
            </Reveal>
            <div className={styles.lower}>
              <div className={styles.badge} aria-hidden>
                <img src="/images/inb-badge.svg" alt="" />
              </div>
              <div>
                <Stagger as="ul" className={styles.list}>
                  {points.map((point) => (
                    <StaggerItem as="li" key={point} className={styles.item} punch>
                      <img src="/icons/medal.svg" alt="" width={32} height={32} />
                      <p>{point}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
                <Reveal delay={0.2}>
                  <TextLink href="/dra-juliana" className={styles.link}>
                    Ler a carta da fundadora
                  </TextLink>
                </Reveal>
              </div>
            </div>
          </div>
          <Reveal>
            <figure className={styles.portrait}>
              <img
                src="/images/founder.jpg"
                alt="Dra. Juliana Cardoso Nogueira — fundadora e diretora médica do INB Health"
              />
              <figcaption className={styles.caption}>
                <p>Fundadora · Diretora médica</p>
                <h3>Dra. Juliana Cardoso Nogueira</h3>
                <span>CRM-RJ 52.0101317-3</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
