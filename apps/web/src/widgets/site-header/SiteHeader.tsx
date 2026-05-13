"use client";

import { Button } from "@repo/ui";
import Link from "next/link";
import { useState } from "react";

import styles from "./SiteHeader.module.scss";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Contacts" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          Starter Test
        </Link>
        <nav className={[styles.nav, open ? styles.navOpen : undefined].filter(Boolean).join(" ")}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button className={styles.menuButton} variant="secondary" onClick={() => setOpen((value) => !value)}>
          Menu
        </Button>
      </div>
    </header>
  );
}
