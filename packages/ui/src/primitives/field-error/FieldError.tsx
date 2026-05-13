import type { ReactNode } from "react";

import styles from "./FieldError.module.scss";

export type FieldErrorProps = {
  children: ReactNode;
};

export function FieldError({ children }: FieldErrorProps) {
  return <span className={styles.fieldError}>{children}</span>;
}
