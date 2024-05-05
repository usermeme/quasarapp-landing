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
    <Box mb={2}>
      {description && <RenderTreeParagraph data={description} sx={{ mb: 2 }} />}
      <Box mb={2} paddingInlineStart={4} marginBlock={0} component="ul">
        {data.map((item) => (
          <RenderTreeParagraph
            {...item}
            component="li"
            key={item.key}
            sx={{ mb: 0 }}
          />
        ))}
      </Box>
    </Box>
  );
};
