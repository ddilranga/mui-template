import { Reducer } from "redux";
import { api } from "services/baseApi";
import { AUTH_NAME, AuthState } from "views/auth/store";

type StaticReducers = Required<{
  [api.reducerPath]: any;
  [AUTH_NAME]: AuthState;
}>;

type DynamicReducers = Partial<{}>;

export type StoreShape = StaticReducers & DynamicReducers;

type StaticReducerNames = keyof StaticReducers;
export type DynamicReducerNames = keyof DynamicReducers;

export type ReducerMap = Record<StaticReducerNames, Reducer> &
  Partial<Record<DynamicReducerNames, Reducer>>;
