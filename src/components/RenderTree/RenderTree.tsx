import type { FC } from "react";

import { Box } from "@/ui-kit/components";

import type { RenderTreeItem, RenderTreeProps } from "./@types";
import { RenderTreeCode } from "./components/RenderTreeCode";
import { RenderTreeHeadline } from "./components/RenderTreeHeadline";
import { RenderTreeParagraph } from "./components/RenderTreeParagraph";

export const RenderTree: FC<RenderTreeProps> = ({ data }) => {
  return <Box>{data.map(renderItem)}</Box>;
};

const renderItem = (item: RenderTreeItem) => {
  switch (item.type) {
    case "code":
      return <RenderTreeCode {...item} />;
    case "headline":
      return <RenderTreeHeadline {...item} />;
    case "paragraph":
      return <RenderTreeParagraph {...item} />;
    default:
      return null;
  }
};
