import {
  createListenerMiddleware,
  addListener,
} from "@rtk-incubator/action-listener-middleware";
import type {
  TypedStartListening,
  TypedAddListener,
} from "@rtk-incubator/action-listener-middleware";

import type { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<RootState>;
export const addAppListener = addListener as TypedAddListener<RootState>;
