import { Reducer } from "redux";
import { api } from "services/baseApi";
import { themeState } from "themes";
import { ThemeStoreShape } from "themes/store";
import auth, { AuthState } from "views/Auth/store";

type StaticReducers = Required<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [api.reducerPath]: any;
  [auth.name]: AuthState;
  [themeState.name]: ThemeStoreShape;
}>;

type DynamicReducers = Partial<unknown>;

export type StoreShape = StaticReducers & DynamicReducers;

type StaticReducerNames = keyof StaticReducers;
export type DynamicReducerNames = keyof DynamicReducers;

export type ReducerMap = Record<StaticReducerNames, Reducer> &
  Partial<Record<DynamicReducerNames, Reducer>>;
