import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { ClientConsentManager } from "./ConsentManager.client";

export const ConsentManager = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "consent_manager")}>
      <ClientConsentManager />
    </NextIntlClientProvider>
  );
};
