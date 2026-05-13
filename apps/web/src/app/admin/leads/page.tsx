import { LeadsPageClient } from "./LeadsPageClient";
import styles from "../Admin.module.scss";

export default function AdminLeadsPage() {
  return (
    <section className={styles.panel}>
      <h1>Leads</h1>
      <LeadsPageClient />
    </section>
  );
}
