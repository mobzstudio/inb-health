import { Reveal } from "@/components/motion";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./Letter.module.css";

const acts = [
  {
    roman: "I",
    label: "O sintoma silencioso",
    title: "Aos 38, eu estava esgotada — e os meus exames estavam “normais”.",
    paragraphs: [
      "Sou médica há mais de quinze anos. Durante a maior parte deles, vivi a mesma rotina dos meus pacientes: trabalho de altíssima exigência, sono interrompido, cafeína em excesso, recuperação adiada. Eu sabia o que recomendar — e não conseguia recomendar para mim.",
      "Quando a fadiga se tornou impossível de ignorar, fiz o check-up padrão de uma clínica respeitada. Hemograma, glicemia, colesterol total, TSH. Tudo dentro da faixa. O laudo me dizia que eu estava saudável. Meu corpo dizia outra coisa.",
    ],
  },
  {
    roman: "II",
    label: "O painel ampliado",
    title: "Uma colega me pediu o exame que mudou minha trajetória clínica.",
    paragraphs: [
      "Uma colega endocrinologista olhou para mim com franqueza e disse: você precisa de um painel diferente. Pedimos ApoB, Lp(a), hsCRP, HOMA-IR, ferritina, vitamina D, hormônios tireoidianos completos, cortisol diurno, painel de micronutrientes.",
      "O resultado foi um pequeno terremoto profissional. ApoB acima da faixa ótima — invisível no LDL convencional. Resistência insulínica presente, com glicemia ainda normal. Ferritina baixa. Vitamina D no piso. Nada disso era doença. Tudo isso era trajetória.",
      "Eu, médica, tinha sido subdiagnosticada por uma medicina que aprendi a praticar.",
    ],
    aside: true,
  },
  {
    roman: "III",
    label: "A frustração herdada",
    title: "A medicina convencional foi desenhada para diagnosticar doença — não para administrar trajetória.",
    paragraphs: [
      "Não há culpa nisso. O sistema de saúde foi construído para reagir a sintomas, e ele faz isso com competência admirável. Mas há um espaço entre estar doente e estar otimamente saudável onde nenhuma especialidade convencional vive. É nesse espaço que se decide a próxima década da sua vida.",
      "Ninguém me ofereceu, em vinte anos de medicina, um painel ampliado, uma leitura integrada e um reteste programado. Esse vazio não é raro — é a regra. E ele se manifesta na vida de pessoas que se consideram saudáveis até receberem um diagnóstico que poderia ter sido antecipado em dez anos.",
    ],
  },
  {
    roman: "IV",
    label: "A tese",
    title: "O INB Health é o instituto que eu gostaria de ter encontrado.",
    paragraphs: [
      "Construí o INB Health para que outras pessoas não precisem depender de uma colega franca, de sorte ou de uma crise para ter acesso a inteligência médica. Sessenta minutos de anamnese conduzida por médico. Cinquenta marcadores medidos com critério. Leitura integrada — não soma de exames. Plano individualizado. Reteste programado em sessenta a noventa dias.",
      "É medicina clássica feita com método contemporâneo. É consultório de família reescrito com dados. É confiança longitudinal — a única forma honesta de cuidar de saúde ao longo da vida.",
      "Se você se reconhece em algum ponto desta carta, talvez seja hora de receber o painel que eu precisei pedir para mim mesma.",
    ],
  },
];

export function Letter() {
  return (
    <Section id="carta" tone="sand" padding="lg" border="top">
      <div className={styles.wrap}>
        <Reveal className={styles.header}>
          <Eyebrow>Carta aberta · 4 atos</Eyebrow>
          <Heading size="h2">
            Eu fui a paciente.
            <br />
            <Accent tone="dark">Foi assim que o INB Health nasceu.</Accent>
          </Heading>
          <Text tone="muted">
            Esta é uma carta — não um pitch. Em quatro atos, conto por que construí um instituto de inteligência médica e
            o que ele resolve para quem se reconhece neste relato.
          </Text>
        </Reveal>
        {acts.map((act, index) => (
          <Reveal key={act.roman} className={styles.act} delay={index * 0.08}>
            <div className={styles.roman}>
              <span>{act.roman}</span>
              <p>{act.label}</p>
            </div>
            <div className={styles.body}>
              <h3>{act.title}</h3>
              {act.paragraphs.map((paragraph) => (
                <Text key={paragraph.slice(0, 40)} tone="muted">
                  {paragraph}
                </Text>
              ))}
              {act.aside ? (
                <aside className={styles.aside}>
                  <p>Se a história acima ressoa com você, talvez seja hora de ter seu próprio painel.</p>
                  <TextLink href="/club">Ver o programa</TextLink>
                </aside>
              ) : null}
            </div>
          </Reveal>
        ))}
        <Reveal className={styles.sign}>
          <Eyebrow>Assinado</Eyebrow>
          <div className={styles.signRow}>
            <img src="/images/founder.jpg" alt="Dra. Juliana Cardoso Nogueira" />
            <div>
              <p className={styles.name}>Juliana Cardoso Nogueira</p>
              <p>CRM-RJ 52.0101317-3 · Diretora médica e responsável técnica</p>
              <p>INB Health · Instituto Nogueira de Brito</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
