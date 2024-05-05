"use server";
import type { SubmitHandler } from "react-hook-form";

import { ContactFormData } from "./@types";

export const sendFeedbackAction: SubmitHandler<ContactFormData> = (
  formData
) => {
  console.log(formData);
  return new Promise((resolve) => setTimeout(() => resolve("test"), 1000));
};
