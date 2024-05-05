import { Nullable, Nullish } from "@/types/helpers";

import { TFunc } from "@/features/internationalization";

import { messages } from "@/messages/en";

const isValidationKey = (
  value: string
): value is keyof IntlMessages["validation"] => value in messages.validation;

export const getValidationMessage = (
  t: TFunc<"validation">,
  key: Nullish<string>
): Nullable<string> => {
  if (key && isValidationKey(key)) {
    return t(key);
  }
  return null;
};

export const typesafeValidationKey = (
  value: keyof IntlMessages["validation"]
) => value;
