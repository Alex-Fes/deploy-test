import { Button } from "@repo/ui";

import styles from "./FixedCta.module.scss";

export function FixedCta() {
  return (
    <a className={styles.fixedCta} href="#contacts">
      <Button>Callback</Button>
    </a>
  );
}
