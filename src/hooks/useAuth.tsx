import { useMemo } from "react";
import { selectCurrentUser } from "views/auth/store";
import { useAppSelector } from "./store";

export default function useAuth() {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
}
