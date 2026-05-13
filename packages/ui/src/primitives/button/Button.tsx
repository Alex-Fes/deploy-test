import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

export function Button({
  children,
  className,
  disabled,
  loading = false,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classNames = [styles.button, styles[`button_${variant}`], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      type={type}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className={styles.spinnerInline} aria-hidden /> : null}
      <span>{children}</span>
    </button>
  );
}
