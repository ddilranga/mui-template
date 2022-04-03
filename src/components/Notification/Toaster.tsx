import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { render } from "react-dom";
import NotificationContainer from "./NotificationContainer";
import { Notifications } from "./useNotificationHandler";

const containerId = "notificationRoot";

const showNotification = (options: Notifications) => {
  let container;

  const existingContainer = document.getElementById(containerId);

  if (existingContainer) container = existingContainer;
  else {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }

  render(
    <React.StrictMode>
      <NotificationContainer {...options} container={container} />
    </React.StrictMode>,
    container
  );
};

type Options = Omit<Notifications, "type">;

class Toaster {
  static info(options: Options) {
    showNotification({ ...options, type: "info", id: nanoid() });
  }

  static success(options: Options) {
    showNotification({ ...options, type: "success", id: nanoid() });
  }

  static warn(options: Options) {
    showNotification({ ...options, type: "warning", id: nanoid() });
  }

  static error(options: Options) {
    showNotification({ ...options, type: "error", id: nanoid() });
  }
}

export default Toaster;
