import jwtDecode, { JwtPayload } from "jwt-decode";
import { useCallback, useMemo } from "react";
import { User } from "services/auth";
import {
  logout as storeLogout,
  selectCurrentUser,
  setCredentials,
} from "views/auth/store";
import { useAppDispatch, useAppSelector } from "./store";

export default function useAuth() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);

  const login = useCallback(
    (user: User, token: string, rememberMe: boolean) => {
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
    dispatch(storeLogout());

    localStorage.clear();
    sessionStorage.clear();
  }, [dispatch]);

  const autoLogin = useCallback(() => {
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
    }
  }, [login, logout]);

  return useMemo(
    () => ({ user, login, autoLogin, logout }),
    [autoLogin, login, logout, user]
  );
}
