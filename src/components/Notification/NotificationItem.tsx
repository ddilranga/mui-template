import { Alert as MuiAlert, AlertProps, Snackbar } from "@mui/material";
import { AnyAction } from "@reduxjs/toolkit";
import React, { memo } from "react";
import { Notifications, removeNotification } from "./useNotificationHandler";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NotificationItem = (
  props: Notifications & { dispatch: React.Dispatch<AnyAction> }
) => {
  const { id, type, message, dispatch } = props;

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(removeNotification(id));
  };

  return (
    <Snackbar open onClose={handleClose}>
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default memo(NotificationItem);
