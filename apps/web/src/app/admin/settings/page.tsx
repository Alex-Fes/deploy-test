import { SettingsPageClient } from "./SettingsPageClient";
import styles from "../Admin.module.scss";

export default function AdminSettingsPage() {
  return (
    <section className={styles.panel}>
      <h1>Settings</h1>
      <SettingsPageClient />
    </section>
  );
}
