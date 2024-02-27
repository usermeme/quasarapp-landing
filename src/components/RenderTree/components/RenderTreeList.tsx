import type { FC, Key, ReactNode } from "react";

import { Box } from "@/ui-kit/components";

import {
  RenderTreeParagraph,
  type RenderTreeParagraphType,
} from "./RenderTreeParagraph";

export interface RenderTreeListType {
  description?: ReactNode;
  data: Array<Omit<RenderTreeParagraphType, "type"> & { key: Key }>;
  type: "list";
}

type RenderTreeListProps = Omit<RenderTreeListType, "type">;
export const RenderTreeList: FC<RenderTreeListProps> = ({
  data,
  description,
}) => {
  return (
    <Box mb={2} component="ol">
      {description && <RenderTreeParagraph data={description} mb={0} />}
      {data.map((item) => (
        <RenderTreeParagraph {...item} component="li" key={item.key} mb={0} />
      ))}
    </Box>
  );
};
