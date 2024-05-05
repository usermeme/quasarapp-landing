import { z, ZodType } from "zod";

import { typesafeValidationKey } from "@/services/validation";

import { ComplexityFormData } from "./@types";

export const ComplexityStepSchema: ZodType<ComplexityFormData> = z.object({
  integrationDetails: z.string(),
  screensCount: z
    .number()
    .min(1, { message: typesafeValidationKey("positive_number") })
    .default(1),
});
