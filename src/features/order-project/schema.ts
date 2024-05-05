import { type ZodType } from "zod";

import { OrderProjectWizardData } from "./@types";
import { BudgetStepSchema } from "./steps/Budget";
import { ChoosePlatformsStepSchema } from "./steps/ChoosePlatforms";
import { ComplexityStepSchema } from "./steps/Complexity";
import { ContactsStepSchema } from "./steps/Contacts";
import { DetailsStepSchema } from "./steps/Details";

export const OrderProjectSchema: ZodType<OrderProjectWizardData> =
  ChoosePlatformsStepSchema.and(DetailsStepSchema)
    .and(BudgetStepSchema)
    .and(ComplexityStepSchema)
    .and(ContactsStepSchema);
