import { cn } from "@/lib/cn";
import styles from "./Text.module.css";

type TextProps = {
  as?: "p" | "span" | "div";
  size?: "body" | "sm" | "lg" | "quote";
  tone?: "default" | "muted" | "subtle" | "onDark" | "onDarkStrong";
  align?: "start" | "center";
  className?: string;
  children: React.ReactNode;
};

export function Text({
  as: Tag = "p",
  size = "body",
  tone = "default",
  align = "start",
  className,
  children,
}: TextProps) {
  return (
    <Tag
      className={cn(
        styles.text,
        styles[size],
        tone !== "default" && styles[tone],
        align === "center" && styles.center,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
