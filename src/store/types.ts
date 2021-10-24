import { Reducer } from "redux";
import { api } from "services/baseApi";

type StaticReducers = Required<{
  [api.reducerPath]: any;
}>;

type DynamicReducers = Partial<{}>;

export type StoreShape = StaticReducers & DynamicReducers;

type StaticReducerNames = keyof StaticReducers;
export type DynamicReducerNames = keyof DynamicReducers;

export type ReducerMap = Record<StaticReducerNames, Reducer> &
  Partial<Record<DynamicReducerNames, Reducer>>;
