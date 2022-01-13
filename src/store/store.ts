import { configureStore } from "@reduxjs/toolkit";
import { api } from "services/baseApi";
import { themeState } from "themes";
import authState from "views/Auth/store";
import { listenerMiddleware } from "./listeners";
import { createReducerManager } from "./reducerManager";

const middlewares = [api.middleware, listenerMiddleware];

const staticReducers = {
  [api.reducerPath]: api.reducer,
  [authState.name]: authState.reducer,
  [themeState.name]: themeState.reducer,
};

export const reducerManager = createReducerManager(staticReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
