import {
  addListenerAction,
  createActionListenerMiddleware,
  TypedAddListener,
  TypedAddListenerAction,
} from "@rtk-incubator/action-listener-middleware";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { logout, setCredentials } from "views/auth/store";
import { RootState } from "./store";

export const listenerMiddleware = createActionListenerMiddleware();

export const addAppListener =
  listenerMiddleware.addListener as TypedAddListener<RootState>;
export const addAppListenerAction =
  addListenerAction as TypedAddListenerAction<RootState>;

addAppListener({
  actionCreator: setCredentials,
  listener: async (action, listenerApi) => {
    const { token } = action.payload;

    if (!token) return;

    const { rememberMe } = action.meta;

    const storageEngine = rememberMe ? "localStorage" : "sessionStorage";

    const decodedToken = jwtDecode<
      { user: { first_name: string } } & JwtPayload
    >(token);

    const currentTime = Date.now() / 1000;

    const isTokenExpired = decodedToken.exp && decodedToken.exp < currentTime;

    if (isTokenExpired) {
      listenerApi.dispatch(logout());
    } else {
      window[`${storageEngine}`].setItem("token", token);
    }
  },
});

// add a listener for log out action and clear the storage
addAppListener({
  actionCreator: logout,
  listener: (action, listenerApi) => {
    localStorage.clear();
    sessionStorage.clear();
  },
});
