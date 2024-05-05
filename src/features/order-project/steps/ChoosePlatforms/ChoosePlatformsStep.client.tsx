"use client";

import { type FC } from "react";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";

import { getValidationMessage } from "@/services/validation";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@/ui-kit/components";

import { StepContent } from "../../components";
import { createWizardStep, type FormFieldsProps } from "../step-builder";
import type { ChoosePlatformsStepFormData } from "./@types";
import { PLATFORM_TYPES_IN_ORDER } from "./constants";
import { ChoosePlatformsStepSchema } from "./schema";

const ChoosePlatformsStepFormFields: FC<
  FormFieldsProps<ChoosePlatformsStepFormData>
> = ({ control, errors }) => {
  const t = useTranslations("order_project");
  const validationT = useTranslations("validation");

  return (
    <StepContent
      title={t("choose_platform_headline")}
      description={t("choose_platform_description")}
    >
      <FormControl error={Boolean(errors.platforms)}>
        <FormLabel required>
          {t("choose_platform_field_platforms_label")}
        </FormLabel>
        <FormGroup>
          {PLATFORM_TYPES_IN_ORDER.map((type) => (
            <FormControlLabel
              control={
                <Controller
                  name={`platforms.${type}`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      value={Boolean(field.value)}
                      checked={Boolean(field.value)}
                    />
                  )}
                />
              }
              key={type}
              label={type}
            />
          ))}
        </FormGroup>
        {errors.platforms?.root && (
          <FormHelperText>
            {getValidationMessage(validationT, errors.platforms.root.message)}
          </FormHelperText>
        )}
      </FormControl>
    </StepContent>
  );
};

export const ChoosePlatformsStep = createWizardStep({
  FormFieldsComponent: ChoosePlatformsStepFormFields,
  schema: ChoosePlatformsStepSchema,
});
