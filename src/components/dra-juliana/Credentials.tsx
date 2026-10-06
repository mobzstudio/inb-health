import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./Credentials.module.css";

const groups = [
  {
    title: "Formação",
    items: [
      { period: "1998–2004", text: "Medicina · Universidade Federal do Rio de Janeiro (UFRJ)" },
      { period: "2005–2008", text: "Residência em Clínica Médica · Hospital Universitário Clementino Fraga Filho" },
      { period: "2009–2011", text: "Especialização em Endocrinologia & Metabologia · SBEM" },
    ],
  },
  {
    title: "Aperfeiçoamento",
    items: [
      { period: "2014", text: "Fellowship em Medicina de Precisão · Mayo Clinic (visiting program)" },
      { period: "2017", text: "Certificação em Longevidade & Healthspan · Institute for Functional Medicine (IFM)" },
      { period: "2020", text: "Curso avançado em Cardiologia Preventiva · ACC" },
    ],
  },
  {
    title: "Atuação clínica",
    items: [
      { period: "2008–2018", text: "Consultório próprio · medicina interna e endocrinologia preventiva (RJ)" },
      { period: "2018–2023", text: "Coordenação clínica em programas de saúde executiva corporativa" },
      { period: "2024–", text: "Fundadora & Diretora Médica · INB Health (Instituto Nogueira de Brito)" },
    ],
  },
  {
    title: "Conselhos & sociedades",
    items: [
      { period: "Ativa", text: "Conselho Regional de Medicina — Rio de Janeiro · CRM-RJ 52.0101317-3" },
      { period: "Ativa", text: "Sociedade Brasileira de Endocrinologia & Metabologia (SBEM)" },
      { period: "Ativa", text: "American College of Lifestyle Medicine (ACLM)" },
      { period: "Ativa", text: "Institute for Functional Medicine (IFM) — practitioner" },
    ],
  },
];

export function Credentials() {
  return (
    <Section id="formacao" tone="cream" padding="lg" border="top">
      <Container width="narrow">
        <div className={styles.intro}>
          <Reveal>
            <Eyebrow>Formação · Atuação · Credenciais</Eyebrow>
            <Heading size="h2">
              A trajetória técnica
              <br />
              <Accent tone="dark">por trás do método.</Accent>
            </Heading>
          </Reveal>
          <Reveal delay={0.08}>
            <Text tone="muted">
              Vinte anos de medicina convencional ensinaram à Dra. Juliana tudo o que ela queria preservar — e tudo o
              que ela queria reescrever. O INB Health é a consequência clínica disso.
            </Text>
          </Reveal>
        </div>
        <Stagger className={styles.timeline}>
          {groups.map((group) => (
            <StaggerItem key={group.title} className={styles.group} punch>
              <Eyebrow className={styles.groupTitle}>{group.title}</Eyebrow>
              <ul>
                {group.items.map((item) => (
                  <li key={item.text}>
                    <span>{item.period}</span>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <p className={styles.note}>
            Currículo médico-clínico resumido. CRM-RJ ativo e regular junto ao Conselho Regional de Medicina do Rio de
            Janeiro. Documentação completa disponível mediante solicitação ao departamento de compliance do INB Health.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
