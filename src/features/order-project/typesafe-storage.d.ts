import type { Nullable } from "@/types/helpers";

import type { OrderProjectWizardData } from "./@types";
import type { OrderProjectStep } from "./constants";

declare global {
  namespace TypesafeStorage {
    interface ExtendableState {
      orderProjectDraftData: Partial<OrderProjectWizardData>;
      orderProjectDraftStep: Nullable<OrderProjectStep>;
    }
  }
}
