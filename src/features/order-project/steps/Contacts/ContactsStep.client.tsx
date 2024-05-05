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
import { ContactsStepFormData } from "./@types";
import { ContactsStepSchema } from "./schema";

const ContactsStepFormFields: FC<FormFieldsProps<ContactsStepFormData>> = ({
  errors,
  register,
}) => {
  const t = useTranslations("order_project");
  const validationT = useTranslations("validation");

  return (
    <StepContent
      title={t("contacts_headline")}
      description={t("contacts_description")}
    >
      <FormControl required error={Boolean(errors.name)}>
        <FormLabel>{t("contacts_field_name")}</FormLabel>
        <TextField {...register("name")} />
        {errors.name && (
          <FormHelperText>
            {getValidationMessage(validationT, errors.name?.message)}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl required error={Boolean(errors.email)}>
        <FormLabel>{t("contacts_field_email")}</FormLabel>
        <TextField {...register("email")} />
        {errors.email && (
          <FormHelperText>
            {getValidationMessage(validationT, errors.email?.message)}
          </FormHelperText>
        )}
      </FormControl>
    </StepContent>
  );
};

export const ContactsStep = createWizardStep({
  FormFieldsComponent: ContactsStepFormFields,
  schema: ContactsStepSchema,
});
