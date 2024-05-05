import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useTranslations } from "next-intl";

import { ORDER_PROJECT_WIZARD_DIALOG_ID } from "../constants";

export const OrderProjectWizardCompleted = () => {
  const t = useTranslations("order_project");
  return (
    <>
      <DialogTitle id={ORDER_PROJECT_WIZARD_DIALOG_ID}>
        {t("completed_headline")}
      </DialogTitle>

      <DialogContent
        sx={{ alignItems: "center", gap: 4, justifyContent: "center" }}
      >
        <DialogContentText>{t("completed_description")}</DialogContentText>
      </DialogContent>
    </>
  );
};
