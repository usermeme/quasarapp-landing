import type { ReactNode } from "react";

import { Typography } from "@/ui-kit/components";

export const richComponents = {
  b: (chunk: ReactNode): ReactNode => (
    <Typography fontWeight={700}>{chunk}</Typography>
  ),
};
