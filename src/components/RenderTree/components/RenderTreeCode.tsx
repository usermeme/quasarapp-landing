import type { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { qtcreatorDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copy from "copy-to-clipboard";

import { Box, BoxProps, IconButton } from "@/ui-kit/components";
import { ContentCopy } from "@/ui-kit/icons";

export interface RenderTreeCodeType {
  data: string;
  // if you need more
  // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
  language: "bash" | "c" | "cpp" | "python" | "javascript";
  type: "code";
}

type RenderTreeCodeProps = Omit<RenderTreeCodeType, "type"> & BoxProps;

const CUSTOM_STYLE = { borderRadius: "4px", padding: "28px 16px" } as const;
export const RenderTreeCode: FC<RenderTreeCodeProps> = ({
  data,
  language,
  ...rest
}) => {
  const copyContent = () => copy(data);

  return (
    <Box position="relative" {...rest}>
      <IconButton
        size="small"
        color="primary"
        sx={{ position: "absolute", right: 0, top: 0 }}
        onClick={copyContent}
      >
        <ContentCopy fontSize="small" />
      </IconButton>

      <SyntaxHighlighter
        customStyle={CUSTOM_STYLE}
        language={language}
        style={qtcreatorDark}
      >
        {data}
      </SyntaxHighlighter>
    </Box>
  );
};
