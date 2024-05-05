import { z, ZodType } from "zod";

import { BudgetStepFormData } from "./@types";

export const BudgetStepSchema: ZodType<BudgetStepFormData> = z.object({
  approximateBudget: z.string().default(""),
});
