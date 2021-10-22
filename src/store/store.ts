import { configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";

const middlewares: [] = [];

const staticReducers = {};

export const reducerManager = createReducerManager(staticReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
