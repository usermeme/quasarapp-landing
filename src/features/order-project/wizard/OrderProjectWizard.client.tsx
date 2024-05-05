"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";

import { Button, Dialog } from "@/ui-kit/components";

import { ORDER_PROJECT_WIZARD_DIALOG_ID } from "../constants";
import { orderProjectEventEmitter } from "../emitter";
import { OrderProjectWizardContent } from "./OrderProjectWizardContent.client";

export const ClientOrderProjectWizard = () => {
  const t = useTranslations("order_project");
  const [opened, setOpened] = useState(false);

  const closeDialog = useCallback(() => {
    setOpened(false);
    orderProjectEventEmitter.emit("close");
  }, []);

  const openDialog = useCallback(() => setOpened(true), []);

  return (
    <>
      <Button variant="outlined" color="inherit" onClick={openDialog}>
        {t("find_out_the_price")}
      </Button>
      <Dialog
        aria-labelledby={ORDER_PROJECT_WIZARD_DIALOG_ID}
        open={opened}
        maxWidth="xs"
        onClose={closeDialog}
      >
        <OrderProjectWizardContent closeDialog={closeDialog} />
      </Dialog>
    </>
  );
};
