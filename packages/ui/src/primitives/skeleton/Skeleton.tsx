import type { HTMLAttributes } from "react";

import styles from "./Skeleton.module.scss";

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={[styles.skeleton, className].filter(Boolean).join(" ")} {...props} />;
}
