import { useAuth } from "hooks";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}
