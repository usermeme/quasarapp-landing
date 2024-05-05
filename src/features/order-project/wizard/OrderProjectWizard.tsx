import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { ClientOrderProjectWizard } from "./OrderProjectWizard.client";

export const OrderProjectWizard = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={pick(messages, [
        "common",
        "order_project",
        "validation",
      ] satisfies Array<keyof IntlMessages>)}
    >
      <ClientOrderProjectWizard />
    </NextIntlClientProvider>
  );
};
