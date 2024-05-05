"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { FormControl, FormLabel, TextField } from "@/ui-kit/components";

import { StepContent } from "../../components";
import { createWizardStep, type FormFieldsProps } from "../step-builder";
import { BudgetStepFormData } from "./@types";
import { BudgetStepSchema } from "./schema";

const BudgetStepFormFields: FC<FormFieldsProps<BudgetStepFormData>> = ({
  register,
}) => {
  const t = useTranslations("order_project");

  return (
    <StepContent
      title={t("budget_headline")}
      description={t("budget_description")}
    >
      <FormControl>
        <FormLabel>{t("budget_field_approximate_budget_label")}</FormLabel>
        <TextField {...register("approximateBudget")} />
      </FormControl>
    </StepContent>
  );
};

export const BudgetStep = createWizardStep({
  FormFieldsComponent: BudgetStepFormFields,
  schema: BudgetStepSchema,
});
