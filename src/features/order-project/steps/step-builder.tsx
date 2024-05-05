import { FC, useEffect } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  useForm,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

import { navigationEventEmitter } from "@/features/navigation";

import { getDefaults } from "@/services/validation";

import { orderProjectEventEmitter } from "../emitter";

interface StepProps<TFieldValues> {
  storeDraftData: (data: Partial<TFieldValues>) => void;
  completeStep: (data: Partial<TFieldValues>) => void;
  getLatestWizardData: () => Partial<TFieldValues>;
}

export interface FormFieldsProps<TFieldValues extends FieldValues> {
  errors: FieldErrors<Partial<TFieldValues>>;
  register: UseFormRegister<Partial<TFieldValues>>;
  watch: UseFormWatch<Partial<TFieldValues>>;
  control: Control<Partial<TFieldValues>>;
}

interface CreateWizardStepProps<
  TFieldValues extends FieldValues,
  TSchema extends ZodType<TFieldValues>
> {
  schema: TSchema;
  FormFieldsComponent: FC<FormFieldsProps<TFieldValues>>;
}
export const createWizardStep = <
  TFieldValues extends FieldValues,
  TSchema extends ZodType<TFieldValues>
>({
  FormFieldsComponent,
  schema,
}: CreateWizardStepProps<TFieldValues, TSchema>) => {
  const WizardComponent: FC<StepProps<TFieldValues>> = ({
    completeStep,
    getLatestWizardData,
    storeDraftData,
  }) => {
    const {
      control,
      formState: { errors },
      getValues,
      handleSubmit,
      register,
      watch,
    } = useForm({
      defaultValues: getDefaults(schema, getLatestWizardData()),
      resolver: zodResolver(schema),
    });

    useEffect(() => {
      const handleStore = () => {
        storeDraftData({
          ...getLatestWizardData(),
          ...getValues(),
        });
      };

      window.addEventListener("beforeunload", handleStore);
      orderProjectEventEmitter.addListener("close", handleStore);
      navigationEventEmitter.addListener("routeChangeStart", handleStore);

      return () => {
        window.removeEventListener("beforeunload", handleStore);
        orderProjectEventEmitter.removeListener("close", handleStore);
        navigationEventEmitter.removeListener("routeChangeStart", handleStore);
      };
    }, [getLatestWizardData, getValues, storeDraftData]);

    return (
      <form onSubmit={handleSubmit(completeStep)}>
        <FormFieldsComponent
          control={control}
          register={register}
          errors={errors}
          watch={watch}
        />
      </form>
    );
  };

  WizardComponent.displayName = `WizardComponent${FormFieldsComponent.displayName}`;

  return WizardComponent;
};
