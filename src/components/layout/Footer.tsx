import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { contact, siteNav } from "@/lib/nav";
import styles from "./Footer.module.css";

const docs = [
  "Política de Privacidade",
  "Termos de Uso",
  "Consentimento de tratamento de dados",
  "Política de dados sensíveis de saúde",
  "Aviso médico — CFM 2.336/2023",
  "Resultados clínicos não garantidos",
  "Identificação médica e responsável técnico",
];

function SocialIcon({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a href={href} aria-label={label} className={styles.social} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Logo variant="footer" />
          <p className={styles.blurb}>
            Inteligência médica baseada em dados. Método clínico estruturado, acompanhamento longitudinal e plano
            individualizado.
          </p>
          <p className={styles.socialLabel}>Siga-nos</p>
          <div className={styles.socials}>
            <SocialIcon label="Instagram" href="https://instagram.com">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.2" stroke="currentColor" strokeWidth="1.1" />
                <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.1" />
                <circle cx="11.4" cy="4.6" r="0.7" fill="currentColor" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Facebook" href="https://facebook.com">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M9.6 14V8.7h1.8l.3-2.1H9.6V5.3c0-.6.2-1 1-1h1.2V2.2S10.6 2 9.7 2C7.7 2 6.4 3.2 6.4 5.1v1.5H4.6v2.1h1.8V14h3.2Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="https://linkedin.com">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4.3 6.2H2.5V13h1.8V6.2ZM3.4 3C2.8 3 2.3 3.5 2.3 4.1c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1C4.5 3.5 4 3 3.4 3ZM13.5 9.1c0-2.1-1.1-3.1-2.6-3.1-1.2 0-1.7.7-2 1.1V6.2H7.1c0 .4 0 6.8 0 6.8h1.8V9.2c0-.2 0-.4.1-.6.2-.4.6-.9 1.3-.9 1 0 1.4.7 1.4 1.8V13h1.8V9.1Z" fill="currentColor" />
              </svg>
            </SocialIcon>
          </div>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Instituto</p>
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} title={item.title}>
              {item.title ?? item.label}
            </Link>
          ))}
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Contato</p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <a href={`mailto:${contact.press}`}>{contact.press}</a>
          </p>
          <p>{contact.phone}</p>
          <p>{contact.city}</p>
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.legalInner}>
          <div>
            <p className={styles.colTitle}>Informações legais</p>
            <p className={styles.legalCopy}>
              <strong>
                {contact.legalName}
              </strong>{" "}
              · CNPJ {contact.cnpj}
              <br />
              {contact.address}
              <br />
              Responsável técnica: {contact.founder} — {contact.crm}
            </p>
          </div>
          <div className={styles.docs}>
            <p className={styles.colTitle}>Documentos legais</p>
            {docs.map((doc) => (
              <a key={doc} href="#legal">
                {doc}
              </a>
            ))}
          </div>
          <div>
            <p className={styles.colTitle}>Aviso</p>
            <p className={styles.legalCopy}>
              O conteúdo deste site é educativo e não substitui consulta, diagnóstico ou tratamento médico. Os
              resultados clínicos variam de pessoa a pessoa e não há promessa de cura ou prevenção absoluta.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© 2026 INB Health · Instituto Nogueira de Brito. Todos os direitos reservados.</p>
          <p>Conteúdo educativo · não substitui consulta médica</p>
        </div>
      </div>
    </footer>
  );
}
