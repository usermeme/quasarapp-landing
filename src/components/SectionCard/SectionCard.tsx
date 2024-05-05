import { type ReactNode } from "react";
import clsx from "clsx";

import { Card } from "@/ui-kit/components";

import styles from "./SectionCard.module.scss";

interface SectionCardProps {
  flattened?: boolean;
  header?: ReactNode;
  id?: string;
}
export const SectionCard: FCC<SectionCardProps> = ({
  children,
  flattened,
  header,
  id,
}) => {
  return (
    <Card
      id={id}
      elevation={0}
      className={clsx(styles.card, { [styles.flattened]: flattened })}
    >
      {header}
      <div className={styles.content}>{children}</div>
    </Card>
  );
};
