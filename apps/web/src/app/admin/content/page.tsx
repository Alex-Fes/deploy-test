import { ContentPageClient } from "./ContentPageClient";
import styles from "../Admin.module.scss";

export default function AdminContentPage() {
  return (
    <section className={styles.panel}>
      <h1>Content</h1>
      <ContentPageClient />
    </section>
  );
}
