import { configureStore } from "@reduxjs/toolkit";
import { api } from "services/baseApi";
import authReducer, { AUTH_NAME } from "views/auth/store";
import { listenerMiddleware } from "./listeners";
import { createReducerManager } from "./reducerManager";
import { ReducerMap } from "./types";

const middlewares = [api.middleware, listenerMiddleware];

const staticReducers: ReducerMap = {
  [api.reducerPath]: api.reducer,
  [AUTH_NAME]: authReducer,
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
