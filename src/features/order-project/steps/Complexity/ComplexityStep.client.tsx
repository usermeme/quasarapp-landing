"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { getValidationMessage } from "@/services/validation";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
} from "@/ui-kit/components";

import { StepContent } from "../../components";
import { createWizardStep, type FormFieldsProps } from "../step-builder";
import { ComplexityFormData } from "./@types";
import { ComplexityStepSchema } from "./schema";

export const ComplexityStepFormFields: FC<
  FormFieldsProps<ComplexityFormData>
> = ({ errors, register }) => {
  const t = useTranslations("order_project");
  const validationT = useTranslations("validation");

  return (
    <StepContent
      title={t("complexity_headline")}
      description={t("complexity_description")}
    >
      <FormControl required error={Boolean(errors.screensCount)}>
        <FormLabel>{t("complexity_field_screens_count_label")}</FormLabel>
        <TextField
          inputProps={{ max: 99999, min: 0, step: 1, type: "number" }}
          {...register("screensCount", { valueAsNumber: true })}
        />
        {errors.screensCount && (
          <FormHelperText>
            {getValidationMessage(validationT, errors.screensCount?.message)}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>{t("complexity_field_integration_details_label")}</FormLabel>
        <TextField
          multiline
          minRows={4}
          maxRows={6}
          {...register("integrationDetails")}
        />
        <FormHelperText>
          {t("complexity_field_integration_details_helper_text")}
        </FormHelperText>
      </FormControl>
    </StepContent>
  );
};

export const ComplexityStep = createWizardStep({
  FormFieldsComponent: ComplexityStepFormFields,
  schema: ComplexityStepSchema,
});
