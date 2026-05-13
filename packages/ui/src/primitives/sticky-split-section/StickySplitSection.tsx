import type { CSSProperties, ReactNode } from "react";

import styles from "./StickySplitSection.module.scss";

export type StickySplitSectionProps = {
  left: ReactNode;
  right: ReactNode;
  stickyOffset?: string;
  stickySide?: "left" | "right" | "none";
  customStyle?: CSSProperties;
  columnStyles?: {
    left?: CSSProperties;
    right?: CSSProperties;
  };
};

export function StickySplitSection({
  left,
  right,
  stickyOffset = "var(--header-height)",
  stickySide = "right",
  customStyle,
  columnStyles,
}: StickySplitSectionProps) {
  const containerStyle = {
    "--sticky-offset": stickyOffset,
    ...customStyle,
  } as CSSProperties;

  return (
    <div
      className={styles.stickySplit}
      style={containerStyle}
      data-sticky-side={stickySide}
    >
      <div
        className={stickySide === "left" ? styles.stickySide : undefined}
        style={columnStyles?.left}
      >
        {left}
      </div>
      <div
        className={stickySide === "right" ? styles.stickySide : undefined}
        style={columnStyles?.right}
      >
        {right}
      </div>
    </div>
  );
}
