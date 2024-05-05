"use client";
import { type FC, useEffect, useState } from "react";
import clsx from "clsx";

import { Nullable } from "@/types/helpers";

import { navigationEventEmitter } from "@/features/navigation";

import { createClassesBuilder } from "@/utils/styles";

import styles from "./AppProgressBar.module.scss";

const PROGRESS_STATUSES = ["started", "completed"] as const;
type ProgressStatus = (typeof PROGRESS_STATUSES)[number];

const classesBuilder = createClassesBuilder(styles, {
  status: PROGRESS_STATUSES,
});

export const AppProgressBar: FC = () => {
  const [status, setStatus] = useState<Nullable<ProgressStatus>>(null);

  useEffect(() => {
    const onRouteChangeStart = () => {
      setStatus("started");
    };
    const onRouteChangeComplete = () => {
      setStatus("completed");
      setTimeout(() => setStatus(null), 350);
    };

    navigationEventEmitter.on("routeChangeStart", onRouteChangeStart);
    navigationEventEmitter.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      navigationEventEmitter.off("routeChangeStart", onRouteChangeStart);
      navigationEventEmitter.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return (
    <div className={clsx(styles.progress_bar, classesBuilder.status(status))} />
  );
};
