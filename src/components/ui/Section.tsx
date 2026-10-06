import { cn } from "@/lib/cn";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  tone?: "ivory" | "cream" | "sand" | "white" | "dark";
  padding?: "md" | "lg" | "none";
  border?: "none" | "top" | "goldSoft";
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  tone = "ivory",
  padding = "md",
  border = "none",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        styles.section,
        styles[tone],
        styles[padding],
        border === "top" && styles.borderTop,
        border === "goldSoft" && styles.borderGoldSoft,
        className,
      )}
    >
      {children}
    </section>
  );
}
