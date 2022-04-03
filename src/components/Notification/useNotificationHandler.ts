import { AlertColor } from "@mui/material";
import { AnyAction, createAction } from "@reduxjs/toolkit";
import { useLayoutEffect, useReducer } from "react";

export type State = {
  count: number;
  stack: Notifications[];
};

export const createNotification = createAction<Notifications>(
  "notification/create"
);
export const removeNotification = createAction<Notifications["id"]>(
  "notification/remove"
);

const initialState: State = { count: 0, stack: [] };

const reducer = (state: State, action: AnyAction) => {
  const { payload } = action;

  if (createNotification.match(action)) {
    return { count: state.count + 1, stack: [...state.stack, payload] };
  }

  if (removeNotification.match(action)) {
    return {
      count: state.count - 1,
      stack: [...state.stack.filter((el) => el.id !== payload)],
    };
  }

  throw new Error("Notification action doesn't exist");
};

export interface Notifications {
  id: string;
  message: string;
  type: AlertColor;
}

function useNotificationHandler(props: Notifications) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useLayoutEffect(() => {
    dispatch(createNotification(props));
  }, [props]);

  return {
    notifications: state.stack,
    notificationCount: state.count,
    initialState,
    dispatch,
  };
}

export default useNotificationHandler;
