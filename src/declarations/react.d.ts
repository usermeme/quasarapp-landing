import type { FC, PropsWithChildren } from "react";

declare global {
  type FCC<TProps = object> = FC<PropsWithChildren<TProps>>;
}
