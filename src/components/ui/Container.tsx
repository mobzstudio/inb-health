import { cn } from "@/lib/cn";
import styles from "./Container.module.css";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "nav";
  width?: "default" | "narrow" | "copy" | "faq" | "full";
  className?: string;
  children: React.ReactNode;
};

export function Container({
  as: Tag = "div",
  width = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn(styles.container, width !== "default" && styles[width], className)}>
      {children}
    </Tag>
  );
}
