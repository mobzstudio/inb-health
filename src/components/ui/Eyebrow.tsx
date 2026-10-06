import { cn } from "@/lib/cn";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  as?: "p" | "span";
  withLine?: boolean;
  align?: "start" | "center";
  tone?: "default" | "onDark" | "gold" | "muted";
  tracking?: "default" | "wide";
  className?: string;
  children: React.ReactNode;
};

export function Eyebrow({
  as: Tag = "p",
  withLine = false,
  align = "start",
  tone = "default",
  tracking = "default",
  className,
  children,
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        styles.eyebrow,
        withLine && styles.withLine,
        align === "center" && styles.center,
        tone !== "default" && styles[tone],
        tracking === "wide" && styles.wide,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
