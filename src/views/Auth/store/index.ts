import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "services/auth";
import { RootState } from "store";

export type AuthState = {
  user: User | null;
  token: string | null;
};

export const AUTH_NAME = "auth";

const initialState: AuthState = {
  user: null,
  token: null,
};

const slice = createSlice({
  name: AUTH_NAME,
  initialState,
  reducers: {
    setCredentials: {
      reducer(state, action: PayloadAction<AuthState>) {
        const {
          payload: { user, token },
        } = action;
        state.user = user;
        state.token = token;
      },
      prepare(payload: AuthState, rememberMe: boolean) {
        return {
          payload,
          meta: {
            rememberMe,
          },
        };
      },
    },

    logout: () => {},
  },
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth?.user;
