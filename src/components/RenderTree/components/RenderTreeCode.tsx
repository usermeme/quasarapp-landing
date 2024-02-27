import { FC, useCallback } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

export const RenderTreeCode: FC<RenderTreeCodeProps> = ({
  data,
  language,
  ...rest
}) => {
  const copyContent = useCallback(() => copy(data), [data]);
  return (
    <Box position="relative" padding={4} {...rest}>
      <IconButton
        sx={{ position: "absolute", right: 4, top: 4 }}
        onClick={copyContent}
      >
        <ContentCopy />
      </IconButton>

      <SyntaxHighlighter language={language} style={docco}>
        {data}
      </SyntaxHighlighter>
    </Box>
  );
};
