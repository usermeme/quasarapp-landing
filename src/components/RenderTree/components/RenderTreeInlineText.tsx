"use client";
import { FC, ReactNode } from "react";

import { Typography, TypographyProps } from "@/ui-kit/components";

export interface RenderTreeInlineTextType {
  data: ReactNode;
  weight?: "bold" | "regular";
  type: "inline-text";
}
export type RenderTreeInlineTextProps = Omit<RenderTreeInlineTextType, "type"> &
  TypographyProps;

export const RenderTreeInlineText: FC<RenderTreeInlineTextProps> = ({
  data,
  ...rest
}) => {
  return <Typography {...rest}>{data}</Typography>;
};
