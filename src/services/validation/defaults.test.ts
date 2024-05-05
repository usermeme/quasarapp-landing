import { z, ZodType } from "zod";

import { getDefaults, typesafeValidationKey } from "@/services/validation";

interface FormData {
  test: { option1?: boolean; option2?: boolean };
}
const recordBooleanSchema: ZodType<FormData> = z.object({
  test: z
    .object({
      option1: z.boolean().default(false),
      option2: z.boolean().default(false),
    })
    .refine((args) => Object.values(args).some(Boolean), {
      message: typesafeValidationKey("required"),
    }),
});

describe("getDefaults", () => {
  it("should return default values", () => {
    const defaultValues = getDefaults(recordBooleanSchema, {});
    expect(defaultValues).toEqual({ test: { option1: false, option2: false } });
  });

  it("should return draft values", () => {
    const formaData: FormData = { test: { option1: true, option2: false } };
    const defaultValues = getDefaults(recordBooleanSchema, formaData);
    expect(defaultValues).toEqual(formaData);
  });
});
