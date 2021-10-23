import { configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
import { ReducerMap } from "./types";

const middlewares: [] = [];

const staticReducers: ReducerMap = {};

export const reducerManager = createReducerManager(staticReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
