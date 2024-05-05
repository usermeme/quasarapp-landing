import { withI18n } from "@/features/internationalization";

import { stackMiddlewares } from "@/utils/middleware";

// withI18n should be last
const middlewares = [withI18n];
export default stackMiddlewares(middlewares);

export const config = {
  runtime: "experimental-edge", // for Edge API Routes only
  unstable_allowDynamic: ["/node_modules/@mui/utils/ponyfillGlobal/**"],
};
