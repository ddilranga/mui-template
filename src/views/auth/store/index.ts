import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "services/auth";
import { reducerManager, RootState } from "store";

export type AuthState = {
  user: User | null;
  token: string | null;
};

export const AUTH_NAME = "auth";

const slice = createSlice({
  name: AUTH_NAME,
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

reducerManager.add("auth", slice.reducer);

export const selectCurrentUser = (state: RootState) => state.auth?.user;
