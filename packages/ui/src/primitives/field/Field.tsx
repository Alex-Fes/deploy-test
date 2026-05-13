import type { ReactNode } from "react";

import styles from "./Field.module.scss";

export type FieldProps = {
  children: ReactNode;
  error?: ReactNode;
  helper?: ReactNode;
  label?: ReactNode;
};

export function Field({ children, error, helper, label }: FieldProps) {
  return (
    <label className={styles.field}>
      {label ? <span className={styles.fieldLabel}>{label}</span> : null}
      {children}
      {error ? <span className={styles.fieldError}>{error}</span> : null}
      {!error && helper ? <span className={styles.fieldHelper}>{helper}</span> : null}
    </label>
  );
}
