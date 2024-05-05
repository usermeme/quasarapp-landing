import type { Key } from "react";

import type { RenderTreeCodeType } from "./components/RenderTreeCode";
import type { RenderTreeListType } from "./components/RenderTreeList";
import type { RenderTreeParagraphType } from "./components/RenderTreeParagraph";

export type RenderTreeItem = (
  | RenderTreeCodeType
  | RenderTreeListType
  | RenderTreeParagraphType
) & { key: Key };

export interface RenderTreeProps {
  data: Array<RenderTreeItem>;
}
