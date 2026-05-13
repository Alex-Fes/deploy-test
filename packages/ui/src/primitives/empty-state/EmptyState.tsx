import type { ReactNode } from "react";

import styles from "./EmptyState.module.scss";

export type EmptyStateProps = {
  action?: ReactNode;
  description?: ReactNode;
  title: ReactNode;
};

export function EmptyState({ action, description, title }: EmptyStateProps) {
  return (
    <div className={styles.state}>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {action}
    </div>
  );
}
