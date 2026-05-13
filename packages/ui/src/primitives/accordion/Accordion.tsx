"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import styles from "./Accordion.module.scss";

export type AccordionItem = {
  content: ReactNode;
  id: string;
  title: ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const open = item.id === openId;

        return (
          <div className={styles.item} key={item.id}>
            <button
              aria-expanded={open}
              className={styles.trigger}
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
            >
              {item.title}
            </button>
            {open ? <div className={styles.panel}>{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
