"use client";

import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

import styles from "./Toast.module.scss";

type ToastVariant = "success" | "error" | "warning" | "info";

type ToastItem = {
  id: string;
  message: ReactNode;
  variant: ToastVariant;
};

type ToastContextValue = {
  dismiss: (id: string) => void;
  error: (message: ReactNode) => void;
  info: (message: ReactNode) => void;
  success: (message: ReactNode) => void;
  warning: (message: ReactNode) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const show = useCallback(
    (variant: ToastVariant, message: ReactNode) => {
      const id = crypto.randomUUID();
      setItems((current) => [...current, { id, message, variant }]);
      window.setTimeout(() => dismiss(id), 4500);
    },
    [dismiss],
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      dismiss,
      error: (message) => show("error", message),
      info: (message) => show("info", message),
      success: (message) => show("success", message),
      warning: (message) => show("warning", message),
    }),
    [dismiss, show],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div aria-live="polite" className={styles.viewport}>
        {items.map((item) => (
          <div className={[styles.toast, styles[`toast_${item.variant}`]].join(" ")} key={item.id}>
            <span>{item.message}</span>
            <button aria-label="Dismiss notification" type="button" onClick={() => dismiss(item.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
