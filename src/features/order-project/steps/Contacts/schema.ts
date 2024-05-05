import { z, ZodType } from "zod";

import { typesafeValidationKey } from "@/services/validation";

import { ContactsStepFormData } from "./@types";

export const ContactsStepSchema: ZodType<ContactsStepFormData> = z.object({
  email: z
    .string()
    .min(1, { message: typesafeValidationKey("required") })
    .email({ message: typesafeValidationKey("not_valid_email") })
    .default(""),
  name: z
    .string()
    .min(1, { message: typesafeValidationKey("required") })
    .default(""),
});
