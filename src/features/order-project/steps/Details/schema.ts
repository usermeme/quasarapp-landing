import { z, ZodType } from "zod";

import { typesafeValidationKey } from "@/services/validation";

import { DetailsStepFormData } from "./@types";
import { IndustryType } from "./constants";

export const DetailsStepSchema: ZodType<DetailsStepFormData> = z.object({
  description: z.string().default(""),
  hasDesign: z.boolean().default(false),
  industryTypes: z
    .array(z.nativeEnum(IndustryType))
    .min(1, { message: typesafeValidationKey("required") })
    .default([]),
});
