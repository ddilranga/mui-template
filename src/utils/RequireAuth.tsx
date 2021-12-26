import { useAuth } from "hooks";
import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: ReactElement }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}
