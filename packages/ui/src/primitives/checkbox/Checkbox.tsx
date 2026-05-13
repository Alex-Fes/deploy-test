import type { InputHTMLAttributes, ReactNode } from "react";

import styles from "./Checkbox.module.scss";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: ReactNode;
};

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <label className={[styles.checkbox, className].filter(Boolean).join(" ")}>
      <input type="checkbox" {...props} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
