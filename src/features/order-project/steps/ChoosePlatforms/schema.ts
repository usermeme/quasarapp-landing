import { z, ZodBoolean, ZodType } from "zod";

import { typesafeValidationKey } from "@/services/validation";

import { ChoosePlatformsStepFormData } from "./@types";
import { PlatformType } from "./constants";

export const ChoosePlatformsStepSchema: ZodType<ChoosePlatformsStepFormData> =
  z.object({
    platforms: z
      .object(
        Object.values(PlatformType).reduce(
          (acc, type) => ({ ...acc, [type]: z.boolean().default(false) }),
          {} as Record<PlatformType, ZodBoolean>
        )
      )
      .refine((args) => Object.values(args).some(Boolean), {
        message: typesafeValidationKey("required"),
      }),
  });
