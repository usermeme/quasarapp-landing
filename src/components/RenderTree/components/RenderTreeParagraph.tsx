"use client";
import type { FC, ReactNode } from "react";

import {
  RenderTreeInlineText,
  type RenderTreeInlineTextProps,
} from "./RenderTreeInlineText";

export interface RenderTreeParagraphType {
  data: ReactNode;
  type: "paragraph";
}

type RenderTreeParagraphProps = Omit<RenderTreeParagraphType, "type"> &
  RenderTreeInlineTextProps;

export const RenderTreeParagraph: FC<RenderTreeParagraphProps> = ({
  data,
  sx,
  ...rest
}) => {
  return (
    <RenderTreeInlineText
      sx={{ mb: 2, whiteSpace: "pre-line", ...sx }}
      component="p"
      data={data}
      textAlign="justify"
      {...rest}
    />
  );
};
