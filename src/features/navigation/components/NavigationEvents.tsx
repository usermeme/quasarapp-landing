import { type FC, Suspense } from "react";

import { ClientWithNavigationEvents } from "./NavigationEvents.client";

export const WithNavigationEvents: FC = () => {
  return (
    <Suspense fallback={null}>
      <ClientWithNavigationEvents />
    </Suspense>
  );
};
