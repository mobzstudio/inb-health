import { cn } from "@/lib/cn";
import styles from "./Heading.module.css";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  size?: "h1" | "h2" | "h3" | "display";
  tone?: "default" | "onDark";
  align?: "start" | "center";
  className?: string;
  children: React.ReactNode;
};

export function Heading({
  as,
  size = "h2",
  tone = "default",
  align = "start",
  className,
  children,
}: HeadingProps) {
  const Tag = as ?? (size === "display" ? "h2" : size);
  return (
    <Tag
      className={cn(
        styles.heading,
        styles[size],
        tone === "onDark" && styles.onDark,
        align === "center" && styles.center,
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Accent({
  children,
  tone = "gold",
  italic = true,
}: {
  children: React.ReactNode;
  tone?: "gold" | "dark";
  italic?: boolean;
}) {
  return (
    <span className={cn(tone === "gold" ? styles.accent : styles.accentDark, italic && styles.italic)}>
      {children}
    </span>
  );
}
