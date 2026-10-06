import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

const icons = {
  arrow: (
    <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

type ButtonProps = {
  href?: string;
  variant?: "primary" | "gold" | "outline" | "outlineDark" | "outlineBrown" | "outlineMuted" | "outlineGold" | "outlineLight";
  size?: "md" | "lg";
  icon?: keyof typeof icons | "none";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  icon = "none",
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const classNames = cn(styles.button, styles[variant], styles[size], className);
  const content = (
    <>
      <span>{children}</span>
      {icon !== "none" ? icons[icon] : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classNames}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {content}
    </button>
  );
}
