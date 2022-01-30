import type { User } from "interfaces";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useCallback, useMemo, useState } from "react";
import {
  logout as storeLogout,
  selectCurrentUser,
  setCredentials,
} from "views/Auth/store";
import { useAppDispatch, useAppSelector } from "./store";

export enum AuthStatus {
  Authenticating,
  Authed,
  NotAuthed,
}

export default function useAuth() {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(
    AuthStatus.Authenticating
  );

  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);

  const login = useCallback(
    (user: User, token: string, rememberMe: boolean) => {
      setAuthStatus(AuthStatus.Authed);

      dispatch(
        setCredentials(
          {
            user,
            token,
          },
          rememberMe
        )
      );

      const storageEngine = rememberMe ? "localStorage" : "sessionStorage";

      window[`${storageEngine}`].setItem("token", token);
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    setAuthStatus(AuthStatus.NotAuthed);

    dispatch(storeLogout());

    localStorage.clear();
    sessionStorage.clear();
  }, [dispatch]);

  const autoLogin = useCallback(() => {
    setAuthStatus(AuthStatus.Authenticating);

    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");

    const token = localToken || sessionToken;

    if (token) {
      const rememberMe = !!localToken;

      const decodedToken = jwtDecode<
        { user: { first_name: string; last_name: string } } & JwtPayload
      >(token);

      const currentTime = Date.now() / 1000;

      const isTokenExpired = decodedToken.exp && decodedToken.exp < currentTime;

      if (isTokenExpired) {
        // TODO: dispatch a notification saying the token is expired and login again
        logout();

        return false;
      } else {
        login(decodedToken.user, token, rememberMe);

        return true;
      }
    } else {
      setAuthStatus(AuthStatus.NotAuthed);
    }
  }, [login, logout]);

  return useMemo(
    () => ({ user, login, autoLogin, logout, authStatus }),
    [autoLogin, login, logout, user, authStatus]
  );
}
