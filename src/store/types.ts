import { Reducer } from "redux";
import { api } from "services/baseApi";
import { AUTH_NAME, AuthState } from "views/auth/store";

type StaticReducers = Required<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [api.reducerPath]: any;
  [AUTH_NAME]: AuthState;
}>;

type DynamicReducers = Partial<unknown>;

export type StoreShape = StaticReducers & DynamicReducers;

type StaticReducerNames = keyof StaticReducers;
export type DynamicReducerNames = keyof DynamicReducers;

export type ReducerMap = Record<StaticReducerNames, Reducer> &
  Partial<Record<DynamicReducerNames, Reducer>>;
