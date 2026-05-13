import type { ReactNode } from "react";

import styles from "./ErrorState.module.scss";

export type ErrorStateProps = {
  action?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
};

export function ErrorState({ action, description, title = "Something went wrong" }: ErrorStateProps) {
  return (
    <div className={[styles.state, styles.state_error].join(" ")} role="alert">
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {action}
    </div>
  );
}
