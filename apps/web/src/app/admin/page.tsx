import { EmptyState } from "@repo/ui";

import styles from "./Admin.module.scss";

export default function AdminPage() {
  return (
    <section className={styles.panel}>
      <h1>Admin dashboard</h1>
      <EmptyState
        title="Admin shell is ready"
        description="Connect authentication and start managing leads, content blocks, and settings."
      />
    </section>
  );
}
