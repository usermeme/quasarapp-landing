"use client";
import type { FC } from "react";

import { Box } from "@/ui-kit/components";

import type { RenderTreeItem, RenderTreeProps } from "./@types";
import { RenderTreeCode } from "./components/RenderTreeCode";
import { RenderTreeList } from "./components/RenderTreeList";
import { RenderTreeParagraph } from "./components/RenderTreeParagraph";

export const RenderTree: FC<RenderTreeProps> = ({ data }) => {
  return <Box>{data.map(renderItem)}</Box>;
};

const renderItem = (item: RenderTreeItem) => {
  switch (item.type) {
    case "code":
      return <RenderTreeCode {...item} key={item.key} />;
    case "paragraph":
      return <RenderTreeParagraph {...item} key={item.key} />;
    case "list":
      return <RenderTreeList {...item} key={item.key} />;
    default:
      return null;
  }
};
