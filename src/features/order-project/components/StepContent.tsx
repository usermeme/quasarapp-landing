import { useTranslations } from "next-intl";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@/ui-kit/components";

import { ORDER_PROJECT_WIZARD_DIALOG_ID } from "../constants";

interface StepContentProps {
  description: string;
  title: string;
}
export const StepContent: FCC<StepContentProps> = ({
  children,
  description,
  title,
}) => {
  const t = useTranslations("common");

  return (
    <>
      <DialogTitle id={ORDER_PROJECT_WIZARD_DIALOG_ID}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText mb={4}>{description}</DialogContentText>
        <Stack gap={2}>{children}</Stack>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained">
          {t("next")}
        </Button>
      </DialogActions>
    </>
  );
};
