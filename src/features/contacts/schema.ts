import { z, ZodType } from "zod";

import { typesafeValidationKey } from "@/services/validation";

import { ContactFormData } from "./@types";

export const ContactSchema: ZodType<ContactFormData> = z.object({
  email: z
    .string()
    .min(1, { message: typesafeValidationKey("required") })
    .email({ message: typesafeValidationKey("not_valid_email") }),
  message: z.string().min(1, { message: typesafeValidationKey("required") }),
  name: z.string().min(1, { message: typesafeValidationKey("required") }),
  subject: z.string().min(1, { message: typesafeValidationKey("required") }),
});
