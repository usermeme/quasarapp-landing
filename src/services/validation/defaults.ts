import { DefaultValues, FieldValues } from "react-hook-form";
import { ZodDefault, ZodObject, ZodType } from "zod";

export const getDefaults = <
  TFieldValues extends FieldValues,
  TSchema extends ZodType<TFieldValues>
>(
  schema: TSchema,
  data: TFieldValues
): DefaultValues<TFieldValues> => {
  if (
    !("shape" in schema && schema.shape && typeof schema.shape === "object")
  ) {
    return {} as DefaultValues<TFieldValues>;
  }
  return Object.fromEntries(
    Object.entries(schema.shape).map(([key, value]) => {
      if (value instanceof ZodDefault) {
        return [key, data?.[key] || value._def.defaultValue()];
      }
      if ("schema" in value._def && value._def.schema instanceof ZodObject) {
        return [key, getDefaults(value._def.schema, data?.[key])];
      }
      return [key, data?.[key]];
    })
  ) as DefaultValues<TFieldValues>;
};
