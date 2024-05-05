"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { getValidationMessage } from "@/services/validation";

import {
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Switch,
  TextField,
} from "@/ui-kit/components";

import { StepContent } from "../../components";
import { createWizardStep, type FormFieldsProps } from "../step-builder";
import { DetailsStepFormData } from "./@types";
import { IndustryType, INSUDTRY_TYPES_IN_ORDER } from "./constants";
import { DetailsStepSchema } from "./schema";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 },
  },
};

const DetailsStepFormFields: FC<FormFieldsProps<DetailsStepFormData>> = ({
  errors,
  register,
  watch,
}) => {
  const t = useTranslations("order_project");
  const validationT = useTranslations("validation");

  return (
    <StepContent
      description={t("details_description")}
      title={t("details_headline")}
    >
      <FormControlLabel
        control={
          <Switch {...register("hasDesign")} checked={watch("hasDesign")} />
        }
        label={
          <FormLabel component={"span"}>
            {t("details_field_has_design_label")}
          </FormLabel>
        }
      />

      <FormControl>
        <FormLabel>{t("details_field_description_label")}</FormLabel>
        <TextField
          multiline
          maxRows={6}
          minRows={4}
          {...register("description")}
        />
      </FormControl>

      <FormControl error={Boolean(errors.industryTypes)}>
        <FormLabel required>{t("details_field_industry_type_label")}</FormLabel>
        <TextField
          select
          SelectProps={{
            MenuProps,
            multiple: true,
            renderValue: (selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {(selected as IndustryType[]).map((value) => (
                  <Chip
                    key={value}
                    label={t(`details_field_industry_type_option_${value}`)}
                  />
                ))}
              </Box>
            ),
            value: watch("industryTypes"),
          }}
          {...register("industryTypes")}
        >
          {INSUDTRY_TYPES_IN_ORDER.map((type) => (
            <MenuItem key={type} value={type}>
              {t(`details_field_industry_type_option_${type}`)}
            </MenuItem>
          ))}
        </TextField>
        {errors.industryTypes && (
          <FormHelperText>
            {getValidationMessage(validationT, errors.industryTypes?.message)}
          </FormHelperText>
        )}
      </FormControl>
    </StepContent>
  );
};

export const DetailsStep = createWizardStep({
  FormFieldsComponent: DetailsStepFormFields,
  schema: DetailsStepSchema,
});
