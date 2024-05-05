import type { BudgetStepFormData } from "./steps/Budget";
import type { ChoosePlatformsStepFormData } from "./steps/ChoosePlatforms";
import type { ComplexityFormData } from "./steps/Complexity";
import type { ContactsStepFormData } from "./steps/Contacts";
import type { DetailsStepFormData } from "./steps/Details";

export type OrderProjectWizardData = ChoosePlatformsStepFormData &
  DetailsStepFormData &
  BudgetStepFormData &
  ComplexityFormData &
  ContactsStepFormData;
