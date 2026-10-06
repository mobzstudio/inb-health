"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { isActivePath, siteNav } from "@/lib/nav";
import styles from "./Header.module.css";

const links = siteNav.filter((link) => link.href !== "/contato");

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={cn(styles.header, open && styles.open)}>
      <div className={styles.inner}>
        <Logo />
        <nav className={styles.nav} aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.title}
              aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button href="/contato" variant="gold" size="md" className={styles.cta}>
            Contato
          </Button>
          <button
            type="button"
            className={styles.menu}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>
      <div className={styles.drawer}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            title={link.title}
            aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Button href="/contato" variant="gold" size="md" className={styles.drawerCta}>
          Contato
        </Button>
      </div>
    </header>
  );
}
