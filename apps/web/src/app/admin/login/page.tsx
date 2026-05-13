import { Button, Field, Input } from "@repo/ui";

import styles from "../Admin.module.scss";

export default function AdminLoginPage() {
  return (
    <section className={styles.panel}>
      <h1>Admin login</h1>
      <form>
        <Field label="Email">
          <Input type="email" />
        </Field>
        <Field label="Password">
          <Input type="password" />
        </Field>
        <Button>Login</Button>
      </form>
    </section>
  );
}
