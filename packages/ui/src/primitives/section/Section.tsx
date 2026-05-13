import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./Section.module.scss";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  variant?: "default" | "muted" | "hero";
};

export function Section({ children, className, variant = "default", ...props }: SectionProps) {
  return (
    <section className={[styles.section, styles[`section_${variant}`], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </section>
  );
}
