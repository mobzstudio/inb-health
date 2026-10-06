import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./Logo.module.css";

export function Logo({ href = "/", variant = "header" }: { href?: string; variant?: "header" | "footer" }) {
  return (
    <Link href={href} className={styles.wrap} aria-label="INB Health — Instituto Nogueira de Brito">
      <img
        src="/images/logo.png"
        alt="INB Health"
        className={cn(styles.logo, variant === "footer" && styles.footer)}
        width={104}
        height={48}
      />
    </Link>
  );
}
