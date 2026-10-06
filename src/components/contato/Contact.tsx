"use client";

import { FormEvent, useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Accent, Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { contact } from "@/lib/nav";
import enter from "@/styles/hero-enter.module.css";
import styles from "./Contact.module.css";

const details = [
  { label: "Clínica", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Imprensa", value: contact.press, href: `mailto:${contact.press}` },
  { label: "Telefone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { label: "Cidade", value: contact.city },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Contato INB Health — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <Section tone="sand" padding="lg">
        <Container>
          <div className={styles.grid}>
            <div>
              <Eyebrow className={enter.enter}>Instituto · Lançamento</Eyebrow>
              <Heading as="h1" size="h1">
                Fale com o <Accent tone="dark">INB Health.</Accent>
              </Heading>
              <Reveal delay={0.08}>
                <Text tone="muted">
                  Para associação, imprensa ou dúvidas sobre o método da Dra. Juliana, escreva para a clínica. Respondemos
                  com responsabilidade técnica — sem funil de loja.
                </Text>
                <Stagger as="ul" className={styles.details}>
                  {details.map((item) => (
                    <StaggerItem as="li" key={item.label} punch>
                      <span>{item.label}</span>
                      {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                    </StaggerItem>
                  ))}
                </Stagger>
                <p className={styles.address}>{contact.address}</p>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <form className={styles.form} onSubmit={onSubmit}>
                <label>
                  Nome
                  <input name="name" type="text" required autoComplete="name" />
                </label>
                <label>
                  E-mail
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Mensagem
                  <textarea name="message" rows={6} required />
                </label>
                <Button type="submit" variant="gold" size="lg" icon="arrow">
                  Enviar mensagem
                </Button>
                {sent ? <p className={styles.sent}>Abrimos seu e-mail para concluir o envio.</p> : null}
              </form>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
