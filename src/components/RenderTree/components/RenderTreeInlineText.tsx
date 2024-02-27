import { FC, ReactNode } from "react";

import { Typography } from "@/ui-kit/components";

export interface RenderTreeTextType {
  data: ReactNode;
  weight?: "bold" | "regular";
  type: "inline-text";
}
type RenderTreeTextProps = Omit<RenderTreeTextType, "type">;
export const RenderTreeInlineText: FC<RenderTreeTextProps> = ({
  data,
  weight,
}) => {
  return (
    <Typography fontWeight={weight === "bold" ? 700 : 400}>{data}</Typography>
  );
};
