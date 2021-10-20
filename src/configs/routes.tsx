import { RouteObject, Navigate } from "react-router-dom";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";
import sharedRoutes from "./routes/sharedRoutes";

const routes = (isAuthenticated: boolean): RouteObject[] => [
  {
    path: "/",
    element: isAuthenticated ? (
      <Navigate to="/app/dashboard" />
    ) : (
      <Navigate to="/auth/login" />
    ),
  },
  ...privateRoutes,
  ...publicRoutes,
  ...sharedRoutes,
];

export default routes;
