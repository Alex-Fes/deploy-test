"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import styles from "./Tabs.module.scss";

export type TabItem = {
  content: ReactNode;
  id: string;
  label: ReactNode;
};

export function Tabs({ items }: { items: TabItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((item) => item.id === activeId);

  return (
    <div className={styles.tabs}>
      <div className={styles.list} role="tablist">
        {items.map((item) => (
          <button
            aria-selected={item.id === activeId}
            className={styles.tab}
            key={item.id}
            role="tab"
            type="button"
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        {active?.content}
      </div>
    </div>
  );
}
