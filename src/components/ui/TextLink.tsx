import { cn } from "@/lib/cn";
import styles from "./TextLink.module.css";

type TextLinkProps = {
  href: string;
  tone?: "default" | "gold" | "onDark";
  className?: string;
  children: React.ReactNode;
};

export function TextLink({ href, tone = "default", className, children }: TextLinkProps) {
  return (
    <a href={href} className={cn(styles.link, tone !== "default" && styles[tone], className)}>
      <span>{children}</span>
      <svg className={styles.icon} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.1" />
      </svg>
    </a>
  );
}
