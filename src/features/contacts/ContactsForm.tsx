import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { ClientContactsForm } from "./ContactsForm.client";

export const ContactsForm = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={pick(messages, ["contacts", "validation", "common"])}
    >
      <ClientContactsForm />
    </NextIntlClientProvider>
  );
};
