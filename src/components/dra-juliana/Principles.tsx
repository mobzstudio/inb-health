import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./Principles.module.css";

const principles = [
  {
    n: "01",
    title: "Trajetória sobre diagnóstico.",
    copy: "Doença é um ponto. Saúde é uma curva. O que importa não é o resultado de hoje — é a direção dos próximos dez anos. Cada decisão clínica que tomo no INB Health é orientada por essa pergunta.",
  },
  {
    n: "02",
    title: "Dados sobre opinião.",
    copy: "Confio em painéis ampliados, retestes longitudinais e em comparação intra-paciente. O instinto clínico é refinado pelos números — não substituído por eles, nem dispensado deles.",
  },
  {
    n: "03",
    title: "Reteste sobre certeza.",
    copy: "Um único exame é um instantâneo. Saúde é filme. Por isso o protocolo do INB Health prevê 2 a 4 retestes anuais e ajustes finos — porque a única certeza honesta é a que se verifica no tempo.",
  },
  {
    n: "04",
    title: "Leitura integrada sobre soma de exames.",
    copy: "ApoB isolado não conta uma história. ApoB + Lp(a) + hsCRP + HOMA-IR + ferritina + cortisol diurno conta. O laudo do INB Health não é um índice de marcadores — é uma narrativa clínica.",
  },
  {
    n: "05",
    title: "Plano individualizado sobre protocolo padrão.",
    copy: "Recuso pacotes one-size-fits-all. Cada plano é construído sobre os seus marcadores, sua história, seus objetivos e o seu contexto de vida. Generalização é o oposto de medicina de precisão.",
  },
  {
    n: "06",
    title: "Responsabilidade técnica sobre marketing.",
    copy: "Cada recomendação clínica que sai do INB Health passa pela minha supervisão direta como diretora médica e responsável técnica. CRM-RJ 52.0101317-3. Sem terceirização. Sem letra miúda.",
  },
];

export function Principles() {
  return (
    <Section id="filosofia" tone="cream" padding="lg" border="top">
      <Container width="narrow">
        <div className={styles.intro}>
          <Reveal>
            <Eyebrow>Como eu penso medicina</Eyebrow>
            <Heading size="h2">
              Seis princípios.
              <br />
              <Accent tone="dark">Um método.</Accent>
            </Heading>
          </Reveal>
          <Reveal delay={0.08}>
            <Text tone="muted">
              Não há nada de revolucionário em nenhum destes princípios. Há algo de incomum em aplicá-los, juntos, todos
              os dias, sobre cada paciente que entra no INB Health.
            </Text>
          </Reveal>
        </div>
        <Stagger className={styles.grid}>
          {principles.map((item) => (
            <StaggerItem as="article" key={item.n} className={styles.card} punch>
              <h3>
                <span>{item.n}</span>
                {item.title}
              </h3>
              <Text>{item.copy}</Text>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
