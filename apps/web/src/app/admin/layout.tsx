import type { ReactNode } from "react";
import Link from "next/link";

import styles from "./Admin.module.scss";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/admin">Admin</Link>
          <nav className={styles.nav}>
            <Link href="/admin/leads">Leads</Link>
            <Link href="/admin/content">Content</Link>
            <Link href="/admin/settings">Settings</Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
