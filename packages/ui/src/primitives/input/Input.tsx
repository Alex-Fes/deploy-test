import type { InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return <input className={[styles.control, className].filter(Boolean).join(" ")} {...props} />;
}
