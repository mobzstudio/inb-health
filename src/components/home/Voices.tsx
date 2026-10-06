import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import styles from "./Voices.module.css";

const voices = [
  {
    n: "01 · Caso clínico",
    quote: "Descobri um ApoB alto que nenhum cardiologista havia medido em dez anos de check-ups. Provavelmente salvaram minha vida.",
    name: "Rogério S., 54",
    role: "Executivo · CFO · São Paulo",
    goal: "Prevenção cardiovascular",
  },
  {
    n: "02 · Caso clínico",
    quote: "Cheguei com sintomas que ginecologistas trataram como ansiedade. O painel completo identificou início de menopausa e o plano hormonal individualizado mudou minha vida em três meses.",
    name: "Marina A., 46",
    role: "Médica · São Paulo",
    goal: "Saúde hormonal feminina",
  },
  {
    n: "03 · Caso clínico",
    quote: "Em seis meses entendi mais sobre minha saúde do que em quinze anos de check-up tradicional. O painel de entrada foi o ponto de virada.",
    name: "Andrea M., 46",
    role: "Empresária · Rio de Janeiro",
    goal: "Reset metabólico",
  },
  {
    n: "04 · Caso clínico",
    quote: "A diferença é continuidade. A Dra. Juliana sabe quem eu sou, lê meu painel inteiro antes de cada consulta e me chama atenção quando eu desvio do plano. Isso não existe em outro lugar.",
    name: "Pedro M., 51",
    role: "Engenheiro · COO · Belo Horizonte",
    goal: "Longevidade ativa",
  },
];

export function Voices() {
  return (
    <Section tone="sand" padding="lg" border="goldSoft">
      <Container>
        <Reveal>
          <Eyebrow tracking="wide">Pacientes · em primeira pessoa</Eyebrow>
          <Heading size="h2">
            Quatro vozes, <Accent tone="dark">uma mesma decisão clínica.</Accent>
          </Heading>
        </Reveal>
        <Stagger className={styles.grid}>
          {voices.map((voice) => (
            <StaggerItem key={voice.name} punch>
              <article className={styles.card}>
                <Eyebrow>{voice.n}</Eyebrow>
                <p className={styles.quote}>“{voice.quote}”</p>
                <div className={styles.meta}>
                  <div>
                    <Text size="lg">{voice.name}</Text>
                    <Eyebrow tone="muted">{voice.role}</Eyebrow>
                  </div>
                  <div className={styles.goal}>
                    <Eyebrow>Objetivo</Eyebrow>
                    <Text size="sm" tone="muted">
                      {voice.goal}
                    </Text>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <p className={styles.note}>
          Casos compartilhados com consentimento expresso dos pacientes. Nomes mantidos parcialmente conforme
          preferência individual. Resultados clínicos variam — sua trajetória é desenhada por sua equipe médica.
        </p>
      </Container>
    </Section>
  );
}
