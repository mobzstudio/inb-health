import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./Pillars.module.css";

const pillars = [
  { n: "01", icon: "/icons/pillar-1.svg", title: "Painel ampliado", copy: "50+ biomarcadores · leitura integrada", href: "#marcadores" },
  { n: "02", icon: "/icons/pillar-2.svg", title: "Idade biológica", copy: "PhenoAge · DunedinPACE · TruDiagnostic", href: "#ciencia" },
  { n: "03", icon: "/icons/pillar-3.svg", title: "MAIA", copy: "Inteligência clínica 24/7", href: "#maia" },
  { n: "04", icon: "/icons/pillar-4.svg", title: "Programa", copy: "Consulta dedicada · plano · reteste", href: "#programa" },
  { n: "05", icon: "/icons/pillar-5.svg", title: "Comparativo", copy: "INB vs check-up · Fleury · Lifeforce", href: "#comparativo" },
  { n: "06", icon: "/icons/pillar-6.svg", title: "App INB", copy: "Em breve · entre na lista do beta", href: "#app" },
];

export function Pillars() {
  return (
    <Section id="objetivos" tone="ivory" padding="lg" border="top">
      <Container>
        <Reveal>
          <Eyebrow tracking="wide">O que vive na INB Health</Eyebrow>
          <Heading size="h2">
            Seis pilares — <Accent tone="dark">um instituto.</Accent>
          </Heading>
        </Reveal>
        <Stagger className={styles.grid}>
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.n} punch>
              <a href={pillar.href} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.index}>{pillar.n}</span>
                  <img src={pillar.icon} alt="" width={16} height={16} />
                </div>
                <h3>{pillar.title}</h3>
                <Text size="sm" tone="subtle">
                  {pillar.copy}
                </Text>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
