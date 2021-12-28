import { useAuth } from "hooks";
import { AuthStatus } from "hooks/useAuth";
import { ReactElement, useEffect } from "react";

const AuthWrapper = ({ children }: { children: ReactElement | null }) => {
  const { autoLogin, authStatus } = useAuth();

  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  let renderer = null;

  switch (authStatus) {
    case AuthStatus.Authenticating:
      renderer = <>Splash Screen</>;
      break;

    case AuthStatus.Authed:
    case AuthStatus.NotAuthed:
      renderer = children;
  }

  return renderer;
};

export default AuthWrapper;
