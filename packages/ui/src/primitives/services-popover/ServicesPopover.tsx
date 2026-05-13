import Link from "next/link";

import styles from "./ServicesPopover.module.scss";

export type ServicesPopoverItem = {
  description?: string;
  href: string;
  label: string;
};

export function ServicesPopover({
  items,
  onLinkClick,
  open,
}: {
  items: ServicesPopoverItem[];
  onLinkClick?: () => void;
  open: boolean;
}) {
  if (!open) {
    return null;
  }

  return (
    <div aria-label="Services" className={styles.popover} role="menu">
      {items.map((item) => (
        <Link href={item.href} key={item.href} role="menuitem" onClick={onLinkClick}>
          <span>{item.label}</span>
          {item.description ? <small>{item.description}</small> : null}
        </Link>
      ))}
    </div>
  );
}
