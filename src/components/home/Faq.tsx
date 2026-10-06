import { Reveal } from "@/components/motion";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import styles from "./Faq.module.css";

const items = [
  {
    question: "O que está incluído no INB Club Anual?",
    answer:
      "Coletas domiciliares periódicas, painel de 50+ biomarcadores, consulta clínica presencial com a Dra. Juliana, plano individualizado escrito e retestes programados ao longo do ano — no mesmo prontuário, com continuidade clínica.",
  },
  {
    question: "Em que o INB Health difere do atendimento convencional?",
    answer:
      "O check-up convencional compara marcadores básicos ao range laboratorial e age depois do diagnóstico. O INB Health mede o que importa, compara à faixa ótima funcional e intervém sobre risco — décadas antes do sintoma.",
  },
  {
    question: "Os exames são domiciliares?",
    answer:
      "Sim. A cada ciclo, um profissional realiza a coleta em casa ou na unidade. Os resultados entram no prontuário INB e são interpretados em consulta presencial, no tempo que o caso exige.",
  },
];

export function Faq() {
  return (
    <Section tone="sand" padding="md">
      <Container width="faq" className={styles.inner}>
        <Reveal>
          <Eyebrow align="center">Perguntas frequentes</Eyebrow>
          <Heading size="h2" align="center">
            Respostas transparentes.
          </Heading>
        </Reveal>
        <Accordion items={items} className={styles.list} />
        <Reveal className={styles.cta}>
          <Button href="#faq" variant="outlineMuted" icon="arrow">
            Ler todas as respostas — Editorial clínico
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
