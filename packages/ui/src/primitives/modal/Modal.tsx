"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

export type ModalProps = {
  children: ReactNode;
  closeOnOverlayClick?: boolean;
  labelledBy?: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title?: ReactNode;
};

export function Modal({
  children,
  closeOnOverlayClick = true,
  labelledBy,
  onOpenChange,
  open,
  title,
}: ModalProps) {
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [onOpenChange, open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onMouseDown={() => closeOnOverlayClick && onOpenChange(false)}>
      <div
        aria-labelledby={labelledBy}
        aria-modal="true"
        className={styles.modal}
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          {title ? <h2 id={labelledBy}>{title}</h2> : null}
          <button
            aria-label="Close dialog"
            className={styles.iconButton}
            type="button"
            onClick={() => onOpenChange(false)}
          >
            x
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
