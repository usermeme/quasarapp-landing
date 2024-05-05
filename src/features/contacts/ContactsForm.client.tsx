"use client";
import { useCallback, useTransition } from "react";
import { SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";

import { getValidationMessage } from "@/services/validation";

import { LoadingButton, Stack, TextField } from "@/ui-kit/components";

import { ContactFormData } from "./@types";
import { useContactsForm } from "./hooks";
import { sendFeedbackAction } from "./send-feedback.action";

export const ClientContactsForm = () => {
  const contactsT = useTranslations("contacts");
  const validationT = useTranslations("validation");
  const commonT = useTranslations("common");

  const [isPending, startTransition] = useTransition();

  const { errors, handleSubmit, register } = useContactsForm();

  const onValid: SubmitHandler<ContactFormData> = useCallback((formData) => {
    startTransition(async () => {
      await sendFeedbackAction(formData);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Stack gap={4}>
        <TextField
          error={Boolean(errors.name)}
          helperText={getValidationMessage(validationT, errors.name?.message)}
          label={contactsT("your_name")}
          {...register("name")}
        />

        <TextField
          error={Boolean(errors.email)}
          helperText={getValidationMessage(validationT, errors.email?.message)}
          label={contactsT("your_email")}
          {...register("email")}
        />

        <TextField
          error={Boolean(errors.subject)}
          helperText={getValidationMessage(
            validationT,
            errors.subject?.message
          )}
          label={contactsT("subject")}
          {...register("subject")}
        />

        <TextField
          error={Boolean(errors.message)}
          helperText={getValidationMessage(
            validationT,
            errors.message?.message
          )}
          label={contactsT("your_message")}
          multiline
          rows={4}
          {...register("message")}
        />
        <LoadingButton loading={isPending} type="submit" variant="contained">
          {commonT("submit")}
        </LoadingButton>
      </Stack>
    </form>
  );
};
