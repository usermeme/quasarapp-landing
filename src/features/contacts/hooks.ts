"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormData } from "./@types";
import { ContactSchema } from "./schema";

export const useContactsForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContactFormData>({ resolver: zodResolver(ContactSchema) });

  return { errors, handleSubmit, register };
};
