export enum OrderProjectStep {
  BUDGET = "budget",
  CHOOSE_PLATFORMS = "choose_platform",
  COMPLEXITY = "complexity",
  CONTACTS = "contacts",
  DETAILS = "details",
}

export const ORDER_PROJECT_WIZARD_DIALOG_ID = "order-project-wizard-dialog-id";

export const STEPS_IN_ORDER: OrderProjectStep[] = [
  OrderProjectStep.CHOOSE_PLATFORMS,
  OrderProjectStep.DETAILS,
  OrderProjectStep.COMPLEXITY,
  OrderProjectStep.BUDGET,
  OrderProjectStep.CONTACTS,
];

export const [DEFAULT_STEP] = STEPS_IN_ORDER;
