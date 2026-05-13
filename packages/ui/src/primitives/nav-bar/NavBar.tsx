"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import styles from "./NavBar.module.scss";

export type NavBarItem = {
  badge?: string;
  href?: string;
  icon?: ReactNode;
  id: string;
  label: string;
  onClick?: () => void;
  popover?: ReactNode;
};

export function NavBar({ items }: { items: NavBarItem[] }) {
  const navRef = useRef<HTMLElement | null>(null);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  useEffect(() => {
    const close = (event: Event) => {
      if (event.type === "scroll") {
        setOpenPopoverId(null);
        return;
      }

      if (event.target instanceof Node && navRef.current?.contains(event.target)) {
        return;
      }

      setOpenPopoverId(null);
    };

    document.addEventListener("pointerdown", close);
    window.addEventListener("scroll", close, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", close);
      window.removeEventListener("scroll", close);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      {items.map((item) => {
        const content = (
          <>
            {item.icon}
            <span>{item.label}</span>
            {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}
          </>
        );

        if (item.popover) {
          return (
            <div className={styles.itemWrap} key={item.id}>
              <button
                aria-expanded={openPopoverId === item.id}
                className={styles.item}
                type="button"
                onClick={() => setOpenPopoverId((current) => (current === item.id ? null : item.id))}
              >
                {content}
              </button>
              {openPopoverId === item.id ? item.popover : null}
            </div>
          );
        }

        return item.href ? (
          <Link className={styles.item} href={item.href} key={item.id} onClick={item.onClick}>
            {content}
          </Link>
        ) : (
          <button className={styles.item} key={item.id} type="button" onClick={item.onClick}>
            {content}
          </button>
        );
      })}
    </nav>
  );
}
