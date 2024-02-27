import type { FC, ReactNode } from "react";

import { Typography, type TypographyProps } from "@/ui-kit/components";

export interface RenderTreeParagraphType {
  data: ReactNode;
  type: "paragraph";
}

type RenderTreeParagraphProps = Omit<RenderTreeParagraphType, "type"> &
  TypographyProps;

export const RenderTreeParagraph: FC<RenderTreeParagraphProps> = ({ data }) => {
  return (
    <Typography sx={{ mb: 2 }} component="p">
      {data}
    </Typography>
  );
};
