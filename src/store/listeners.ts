import {
  addListenerAction,
  createActionListenerMiddleware,
  TypedAddListener,
  TypedAddListenerAction,
} from "@rtk-incubator/action-listener-middleware";
import { RootState } from "./store";

export const listenerMiddleware = createActionListenerMiddleware();

export const addAppListener =
  listenerMiddleware.addListener as TypedAddListener<RootState>;
export const addAppListenerAction =
  addListenerAction as TypedAddListenerAction<RootState>;
