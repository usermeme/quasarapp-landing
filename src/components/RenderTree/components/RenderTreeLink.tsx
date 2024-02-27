import type { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";

import { Typography } from "@/ui-kit/components";

export interface RenderTreeLinkType {
  data: ReactNode;
  href: LinkProps["href"];
  target?: HTMLAttributeAnchorTarget;
  type: "link";
}

type RenderTreeLinkProps = Omit<RenderTreeLinkType, "type">;
export const RenderTreeLink: FC<RenderTreeLinkProps> = ({
  data,
  href,
  target,
}) => {
  return (
    <Typography component={NextLink} href={href} target={target}>
      {data}
    </Typography>
  );
};
